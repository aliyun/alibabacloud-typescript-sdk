// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceConfResponseBody extends $dara.Model {
  classify?: string;
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * {}
   */
  customServiceConf?: { [key: string]: any };
  /**
   * @example
   * 2023-01-17 12:29:56
   */
  gmtModified?: string;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * {}
   */
  option?: { [key: string]: any };
  /**
   * @example
   * 6CF2815C-****-****-B52E-FF6E2****492
   */
  requestId?: string;
  /**
   * @example
   * image
   */
  resourceType?: string;
  /**
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  serviceType?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * UID。
   * 
   * @example
   * 17726*****370735
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      classify: 'Classify',
      code: 'Code',
      customServiceConf: 'CustomServiceConf',
      gmtModified: 'GmtModified',
      msg: 'Msg',
      option: 'Option',
      requestId: 'RequestId',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      serviceType: 'ServiceType',
      success: 'Success',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classify: 'string',
      code: 'number',
      customServiceConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtModified: 'string',
      msg: 'string',
      option: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      resourceType: 'string',
      serviceCode: 'string',
      serviceType: 'string',
      success: 'boolean',
      uid: 'string',
    };
  }

  validate() {
    if(this.customServiceConf) {
      $dara.Model.validateMap(this.customServiceConf);
    }
    if(this.option) {
      $dara.Model.validateMap(this.option);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

