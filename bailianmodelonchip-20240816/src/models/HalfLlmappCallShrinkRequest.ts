// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HalfLLMAppCallShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * b883e6dcf14041fba390c1f795493c6b
   */
  appId?: string;
  bizParamShrink?: string;
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
   */
  modelTypeListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2oImhCz4f8XCviiM
   */
  productKey?: string;
  /**
   * @example
   * 0sIRZDNncmCfBagzy534x2PH
   */
  sessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 678699541713794
   */
  tenantId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      bizParamShrink: 'bizParam',
      deviceName: 'deviceName',
      modelTypeListShrink: 'modelTypeList',
      productKey: 'productKey',
      sessionId: 'sessionId',
      tenantId: 'tenantId',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      bizParamShrink: 'string',
      deviceName: 'string',
      modelTypeListShrink: 'string',
      productKey: 'string',
      sessionId: 'string',
      tenantId: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

