// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LookupWmInfoMappingRequest extends $dara.Model {
  /**
   * @remarks
   * Bit width of the watermark information. Default value: 32. This parameter must match the bit width used when embedding or generating a transparent image. Valid values: 32 to 64. Use the same value as when you created the mapping. Otherwise, the mapping cannot be found.
   * 
   * @example
   * 32
   */
  wmInfoSize?: number;
  /**
   * @remarks
   * Numeric-formatted watermark information. Value source:
   * 
   * - [CreateWmInfoMapping](~~CreateWmInfoMapping~~): The **WmInfoUint** return value from the CreateWmInfoMapping API.
   * 
   * This parameter is required.
   * 
   * @example
   * 123***
   */
  wmInfoUint?: string;
  /**
   * @remarks
   * Watermark type. Valid values:
   * 
   * - **PureWebappInvisible**: Webpage watermark.
   * 
   * - **PureAppInvisible**: App watermark.
   * 
   * - **PureScreenInvisible**: Screen watermark.
   * 
   * - **PureDocument**: Document watermark.
   * 
   * - **PureImage**: Image watermark.
   * 
   * - **PureAudio**: Audio watermark.
   * 
   * - **PureVideo**: Video watermark.
   * 
   * - **AigcWebappInvisible**: AIGC webpage watermark.
   * 
   * - **AigcAppInvisible**: AIGC app watermark.
   * 
   * - **AigcScreenInvisible**: AIGC screen watermark.
   * 
   * - **AigcDocument**: AIGC document watermark.
   * 
   * - **AigcImage**: AIGC image watermark.
   * 
   * - **AigcAudio**: AIGC audio watermark.
   * 
   * - **AigcVideo**: AIGC video watermark.
   * 
   * This parameter is required.
   * 
   * @example
   * PureDocument
   */
  wmType?: string;
  static names(): { [key: string]: string } {
    return {
      wmInfoSize: 'WmInfoSize',
      wmInfoUint: 'WmInfoUint',
      wmType: 'WmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wmInfoSize: 'number',
      wmInfoUint: 'string',
      wmType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

