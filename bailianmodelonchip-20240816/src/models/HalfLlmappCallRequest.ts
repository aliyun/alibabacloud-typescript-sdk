// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HalfLLMAppCallRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * b883e6dcf14041fba390c1f795493c6b
   */
  appId?: string;
  bizParam?: { [key: string]: string };
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
  modelTypeList?: string[];
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
      bizParam: 'bizParam',
      deviceName: 'deviceName',
      modelTypeList: 'modelTypeList',
      productKey: 'productKey',
      sessionId: 'sessionId',
      tenantId: 'tenantId',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      bizParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      deviceName: 'string',
      modelTypeList: { 'type': 'array', 'itemType': 'string' },
      productKey: 'string',
      sessionId: 'string',
      tenantId: 'string',
      text: 'string',
    };
  }

  validate() {
    if(this.bizParam) {
      $dara.Model.validateMap(this.bizParam);
    }
    if(Array.isArray(this.modelTypeList)) {
      $dara.Model.validateArray(this.modelTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

