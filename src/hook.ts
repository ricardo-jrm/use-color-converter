import { useMemo } from 'react';
import { hexToRgb, rgbToHex } from '@ricardojrmcom/color-converter';

/**
 * Converts a color HEX string to RGB object
 */
export const useHexRgb = (hex: string) => useMemo(() => hexToRgb(hex), [hex]);

/**
 * Converts given RGB values into a color HEX string
 */
export const useRgbHex = (r: number, g: number, b: number) =>
  useMemo(() => rgbToHex(r, g, b), [r, g, b]);
