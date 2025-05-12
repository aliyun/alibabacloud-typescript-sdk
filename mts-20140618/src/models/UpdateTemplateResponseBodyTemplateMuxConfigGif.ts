// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTemplateResponseBodyTemplateMuxConfigGif extends $dara.Model {
  /**
   * @remarks
   * The loop count.
   * 
   * @example
   * bayer
   */
  ditherMode?: string;
  /**
   * @remarks
   * The color dithering algorithm of the palette. Valid values: sierra and bayer.
   * 
   * @example
   * false
   */
  finalDelay?: string;
  /**
   * @remarks
   * The segment configurations.
   * 
   * @example
   * 0
   */
  isCustomPalette?: string;
  /**
   * @remarks
   * Indicates whether the custom palette is used.
   * 
   * @example
   * 0
   */
  loop?: string;
  static names(): { [key: string]: string } {
    return {
      ditherMode: 'DitherMode',
      finalDelay: 'FinalDelay',
      isCustomPalette: 'IsCustomPalette',
      loop: 'Loop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ditherMode: 'string',
      finalDelay: 'string',
      isCustomPalette: 'string',
      loop: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

