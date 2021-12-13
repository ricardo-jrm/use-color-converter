import { renderHook } from '@testing-library/react-hooks';
import { useHexRgb, useRgbHex } from '.';

describe('test useHexRgb', () => {
  it('should init and convert "#30a14e" to rgb(48 161 78)', () => {
    const { result } = renderHook(() => useHexRgb('#30a14e'));
    expect(result.current).toEqual({
      r: 48,
      g: 161,
      b: 78,
    });
  });
});

describe('test useRgbHex', () => {
  it('should init and convert rgb(48 161 78) to "#30a14e"', () => {
    const { result } = renderHook(() => useRgbHex(48, 161, 78));
    expect(result.current).toBe('#30a14e');
  });
});
