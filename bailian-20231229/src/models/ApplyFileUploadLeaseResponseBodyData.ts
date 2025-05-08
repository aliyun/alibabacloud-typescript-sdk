// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplyFileUploadLeaseResponseBodyDataParam } from "./ApplyFileUploadLeaseResponseBodyDataParam";


export class ApplyFileUploadLeaseResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the lease.
   * 
   * @example
   * 1e6a159107384782be5e45ac4759b247.1719325231035
   */
  fileUploadLeaseId?: string;
  /**
   * @remarks
   * The HTTP request parameters used to upload the document.
   */
  param?: ApplyFileUploadLeaseResponseBodyDataParam;
  /**
   * @remarks
   * The upload method of the document. Valid values:
   * 
   * *   OSS.PreSignedURL
   * *   HTTP
   * 
   * @example
   * HTTP
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileUploadLeaseId: 'FileUploadLeaseId',
      param: 'Param',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUploadLeaseId: 'string',
      param: ApplyFileUploadLeaseResponseBodyDataParam,
      type: 'string',
    };
  }

  validate() {
    if(this.param && typeof (this.param as any).validate === 'function') {
      (this.param as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

