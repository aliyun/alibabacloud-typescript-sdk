// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateServiceInstanceAttributeRequestLicenseDataResponseInfo } from "./UpdateServiceInstanceAttributeRequestLicenseDataResponseInfo";


export class UpdateServiceInstanceAttributeRequestLicenseData extends $dara.Model {
  /**
   * @remarks
   * The Custom Data
   * 
   * @example
   * {"Test"}
   */
  customData?: string;
  /**
   * @remarks
   * Mock response info.
   */
  responseInfo?: UpdateServiceInstanceAttributeRequestLicenseDataResponseInfo;
  static names(): { [key: string]: string } {
    return {
      customData: 'CustomData',
      responseInfo: 'ResponseInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customData: 'string',
      responseInfo: UpdateServiceInstanceAttributeRequestLicenseDataResponseInfo,
    };
  }

  validate() {
    if(this.responseInfo && typeof (this.responseInfo as any).validate === 'function') {
      (this.responseInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

