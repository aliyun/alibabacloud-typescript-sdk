// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachApplicationPolarFSRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The AccessKey ID of the Alibaba Cloud account or RAM user. Ensure that the account or RAM user is authorized when you create the Polarlakebase instance.
   * 
   * @example
   * LT**********************
   */
  polarFSAccessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret of the Alibaba Cloud account or RAM user.
   * 
   * @example
   * H3****************************
   */
  polarFSAccessKeySecret?: string;
  /**
   * @remarks
   * The instance ID of the Polarlakebase cold storage instance.
   * 
   * Currently, only the following applications support cold storage instances:
   * - supabase
   * 
   * This parameter is required.
   * 
   * @example
   * pcs-**************
   */
  polarFSInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      polarFSAccessKeyId: 'PolarFSAccessKeyId',
      polarFSAccessKeySecret: 'PolarFSAccessKeySecret',
      polarFSInstanceId: 'PolarFSInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      polarFSAccessKeyId: 'string',
      polarFSAccessKeySecret: 'string',
      polarFSInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

