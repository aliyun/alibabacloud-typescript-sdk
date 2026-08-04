// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWmInfoMappingRequest extends $dara.Model {
  /**
   * @remarks
   * The Base64-encoded string-format watermark information. Length: 1 to 300 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * aGVsbG8gc2F*****
   */
  wmInfoBytesB64?: string;
  /**
   * @remarks
   * The capacity bit width of the watermark information. Default is 32. This parameter must be consistent with the capacity bit width used during actual embedding or transparent image generation. Valid range: 32 to 64.
   * 
   * @example
   * 32
   */
  wmInfoSize?: number;
  /**
   * @remarks
   * Watermark type. Valid values:
   * - **PureWebappInvisible**: Webpage watermark.
   * - **PureAppInvisible**: App watermark.
   * - **PureScreenInvisible**: Screen watermark.
   * - **PureDocument**: Document watermark.
   * - **PureImage**: Image watermark.
   * - **PureAudio**: Audio watermark.
   * - **PureVideo**: Video watermark.
   * - **AigcWebappInvisible**: AIGC webpage watermark.
   * - **AigcAppInvisible**: AIGC App watermark.
   * - **AigcScreenInvisible**: AIGC screen watermark.
   * - **AigcDocument**: AIGC document watermark.
   * - **AigcImage**: AIGC image watermark.
   * - **AigcAudio**: AIGC audio watermark.
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
      wmInfoBytesB64: 'WmInfoBytesB64',
      wmInfoSize: 'WmInfoSize',
      wmType: 'WmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wmInfoBytesB64: 'string',
      wmInfoSize: 'number',
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

