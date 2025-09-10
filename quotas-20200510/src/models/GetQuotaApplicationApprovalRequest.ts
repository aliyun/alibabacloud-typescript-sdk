// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQuotaApplicationApprovalRequest extends $dara.Model {
  /**
   * @remarks
   * The quota application ID.
   * 
   * For more information about how to obtain the ID of a quota application, see [ListQuotaApplications](https://help.aliyun.com/document_detail/440568.html).
   * 
   * @example
   * d314d6ae-867d-484c-9009-3d42****
   */
  applicationId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

