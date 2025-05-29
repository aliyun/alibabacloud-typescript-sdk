// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HalfLLMImageOcrRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5b504f84b69b9a73d3a21a2cff05e190
   */
  deviceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://xxx/xx.jpg
   */
  imageUrl?: string;
  /**
   * @example
   * qwen-vl-ocr
   */
  model?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2oImhCz4f8XCviiM
   */
  productKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520539530998273
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'deviceName',
      imageUrl: 'imageUrl',
      model: 'model',
      productKey: 'productKey',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      imageUrl: 'string',
      model: 'string',
      productKey: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

