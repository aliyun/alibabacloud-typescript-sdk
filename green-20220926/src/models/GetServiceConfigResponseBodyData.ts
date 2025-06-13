// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceConfigResponseBodyDataCustomServiceConf } from "./GetServiceConfigResponseBodyDataCustomServiceConf";


export class GetServiceConfigResponseBodyData extends $dara.Model {
  customServiceConf?: GetServiceConfigResponseBodyDataCustomServiceConf;
  /**
   * @example
   * 2024-05-06 03:07:44
   */
  gmtModified?: string;
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
  /**
   * @remarks
   * UID。
   * 
   * @example
   * 165379****31937
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      customServiceConf: 'CustomServiceConf',
      gmtModified: 'GmtModified',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customServiceConf: GetServiceConfigResponseBodyDataCustomServiceConf,
      gmtModified: 'string',
      resourceType: 'string',
      serviceCode: 'string',
      uid: 'string',
    };
  }

  validate() {
    if(this.customServiceConf && typeof (this.customServiceConf as any).validate === 'function') {
      (this.customServiceConf as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

