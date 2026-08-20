// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWmBaseImageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The height of the watermark image, in pixels. Valid values: 100 to 5000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1080
   */
  height?: number;
  /**
   * @remarks
   * The image watermark control parameters.
   */
  imageControlShrink?: string;
  /**
   * @remarks
   * The opacity of the watermark image. Valid values: 1 to 255. A larger value indicates lower transparency.
   * 
   * This parameter is required.
   * 
   * @example
   * 255
   */
  opacity?: number;
  /**
   * @remarks
   * The scaling ratio of the watermark image.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  scale?: number;
  /**
   * @remarks
   * The width of the watermark image, in pixels. Valid values: 100 to 5000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1920
   */
  width?: number;
  /**
   * @remarks
   * The watermark information in Base64-encoded string format. The length is 1 to 300 characters. If this parameter is set, the WmInfoUint parameter cannot be set.
   * 
   * @example
   * aGVsbG8gc2F*****
   */
  wmInfoBytesB64?: string;
  /**
   * @remarks
   * The bit width of the watermark information capacity. Default value: 32. This parameter must be consistent between embedding and extraction. For example, if the SDK used for embedding is 40-bit, set this parameter to 40 during extraction as well.
   * 
   * @example
   * 32
   */
  wmInfoSize?: number;
  /**
   * @remarks
   * The watermark information in decimal number format. If this parameter is set, WmInfoBytesB64 cannot be set.
   * 
   * The valid range depends on the WmInfoSize parameter:
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
   * The watermark type. Valid values:
   * - **PureWebappInvisible**: web watermark.
   * - **PureAppInvisible**: App watermark.
   * - **PureScreenInvisible**: screen watermark.
   * - **AigcWebappInvisible**: AIGC web watermark.
   * - **AigcAppInvisible**: AIGC App watermark.
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
   * The remarks.
   * 
   * @example
   * Remarks
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

