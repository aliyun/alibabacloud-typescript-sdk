// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWmBaseImageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Height of the watermark image, in pixels. Valid values: 100 to 5000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1080
   */
  height?: number;
  /**
   * @remarks
   * Image watermark control parameters.
   */
  imageControlShrink?: string;
  /**
   * @remarks
   * Opacity of the watermark image. Valid values: 1 to 255. Higher values mean lower transparency.
   * 
   * This parameter is required.
   * 
   * @example
   * 255
   */
  opacity?: number;
  /**
   * @remarks
   * Scaling factor of the watermark image.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  scale?: number;
  /**
   * @remarks
   * Width of the watermark image, in pixels. Valid values: 100 to 5000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1920
   */
  width?: number;
  /**
   * @remarks
   * Base64-encoded watermark information. Length: 1 to 300 characters. Do not set this parameter if you set WmInfoUint.
   * 
   * @example
   * aGVsbG8gc2F*****
   */
  wmInfoBytesB64?: string;
  /**
   * @remarks
   * Bit width of the watermark information. Default value: 32. This value must be the same during embedding and extraction. For example, if you use a 40-bit SDK to embed the watermark, set this value to 40 when extracting it.
   * 
   * @example
   * 32
   */
  wmInfoSize?: number;
  /**
   * @remarks
   * Decimal-form watermark information. Do not set this parameter if you set WmInfoBytesB64.
   * 
   * The valid range depends on the WmInfoSize value:
   * 
   * - If WmInfoSize is **32**, the valid range is 1 to 4294967295.
   * 
   * - If WmInfoSize is **40**, the valid range is 1 to 1099511627775.
   * 
   * - If WmInfoSize is **64**, the valid range is 1 to 18446744073709551615.
   * 
   * @example
   * 12*****
   */
  wmInfoUint?: string;
  /**
   * @remarks
   * Watermark type. Valid values:
   * 
   * - **PureWebappInvisible**: Web watermark.
   * 
   * - **PureAppInvisible**: App watermark.
   * 
   * - **PureScreenInvisible**: Screen watermark.
   * 
   * - **AigcWebappInvisible**: AIGC web watermark.
   * 
   * - **AigcAppInvisible**: AIGC app watermark.
   * 
   * - **AigcScreenInvisible**: AIGC screen watermark.
   * 
   * This parameter is required.
   * 
   * @example
   * PureWebappInvisible
   */
  wmType?: string;
  /**
   * @remarks
   * Comments.
   * 
   * @example
   * 备注
   */
  comment?: string;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      imageControlShrink: 'ImageControl',
      opacity: 'Opacity',
      scale: 'Scale',
      width: 'Width',
      wmInfoBytesB64: 'WmInfoBytesB64',
      wmInfoSize: 'WmInfoSize',
      wmInfoUint: 'WmInfoUint',
      wmType: 'WmType',
      comment: 'comment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      imageControlShrink: 'string',
      opacity: 'number',
      scale: 'number',
      width: 'number',
      wmInfoBytesB64: 'string',
      wmInfoSize: 'number',
      wmInfoUint: 'string',
      wmType: 'string',
      comment: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

