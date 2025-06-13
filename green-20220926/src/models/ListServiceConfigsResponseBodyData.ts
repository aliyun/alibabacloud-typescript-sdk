// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListServiceConfigsResponseBodyDataCustomServiceConf } from "./ListServiceConfigsResponseBodyDataCustomServiceConf";


export class ListServiceConfigsResponseBodyData extends $dara.Model {
  classify?: string;
  /**
   * @example
   * nickname_detection
   */
  copyFrom?: string;
  customServiceConf?: ListServiceConfigsResponseBodyDataCustomServiceConf;
  /**
   * @example
   * 2023-07-11 15:40:04
   */
  gmtModified?: string;
  /**
   * @example
   * {}
   */
  option?: { [key: string]: any };
  /**
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @example
   * nickname_detection
   */
  serviceCode?: string;
  serviceDesc?: string;
  serviceName?: string;
  /**
   * @example
   * plus
   */
  serviceType?: string;
  /**
   * @remarks
   * UID。
   * 
   * @example
   * 1674*****0071291
   */
  uid?: string;
  useStatus?: string;
  static names(): { [key: string]: string } {
    return {
      classify: 'Classify',
      copyFrom: 'CopyFrom',
      customServiceConf: 'CustomServiceConf',
      gmtModified: 'GmtModified',
      option: 'Option',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      serviceDesc: 'ServiceDesc',
      serviceName: 'ServiceName',
      serviceType: 'ServiceType',
      uid: 'Uid',
      useStatus: 'UseStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classify: 'string',
      copyFrom: 'string',
      customServiceConf: ListServiceConfigsResponseBodyDataCustomServiceConf,
      gmtModified: 'string',
      option: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceType: 'string',
      serviceCode: 'string',
      serviceDesc: 'string',
      serviceName: 'string',
      serviceType: 'string',
      uid: 'string',
      useStatus: 'string',
    };
  }

  validate() {
    if(this.customServiceConf && typeof (this.customServiceConf as any).validate === 'function') {
      (this.customServiceConf as any).validate();
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

