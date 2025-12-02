// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceConfResponseBody extends $dara.Model {
  /**
   * @remarks
   * Classification.
   * 
   * @example
   * guard-scene
   */
  classify?: string;
  /**
   * @remarks
   * Error code, consistent with HTTP status.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Service details
   * 
   * @example
   * {}
   */
  customServiceConf?: { [key: string]: any };
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 2023-01-17 12:29:56
   */
  gmtModified?: string;
  /**
   * @remarks
   * Further description of the error code.
   * 
   * @example
   * OK
   */
  msg?: string;
  /**
   * @remarks
   * Options.
   * 
   * @example
   * {}
   */
  option?: { [key: string]: any };
  /**
   * @remarks
   * ID assigned by the backend to uniquely identify a request. Can be used for troubleshooting.
   * 
   * @example
   * 6CF2815C-****-****-B52E-FF6E2****492
   */
  requestId?: string;
  /**
   * @remarks
   * Resource type.
   * 
   * @example
   * image
   */
  resourceType?: string;
  /**
   * @remarks
   * Service code.
   * 
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  /**
   * @remarks
   * Service type.
   * 
   * @example
   * plus
   */
  serviceType?: string;
  /**
   * @remarks
   * Success indicator
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * UID.
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

