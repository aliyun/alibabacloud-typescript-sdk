// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemindQuotaApplicationApprovalRequest extends $dara.Model {
  /**
   * @remarks
   * The quota application ID.
   * 
   * For more information about how to obtain the ID of a quota application, see [ListQuotaApplications](https://help.aliyun.com/document_detail/440568.html).
   * 
   * @example
   * 219f1ff6-6205-495f-bda7-90d2fe945e****
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

