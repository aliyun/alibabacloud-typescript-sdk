// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachApplicationPolarFSRequest extends $dara.Model {
  /**
   * @remarks
   * Application ID
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * AccessKey ID of the Alibaba Cloud account or RAM user. Ensure that you granted permissions to this account or user when you created the PolarLakeBase instance.
   * 
   * @example
   * LT**********************
   */
  polarFSAccessKeyId?: string;
  /**
   * @remarks
   * AccessKey secret of the Alibaba Cloud account or RAM user
   * 
   * @example
   * H3****************************
   */
  polarFSAccessKeySecret?: string;
  /**
   * @remarks
   * PolarLakeBase cold-storage instance ID
   * 
   * Only the following applications support cold-storage instances:
   * 
   * - Supabase
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

