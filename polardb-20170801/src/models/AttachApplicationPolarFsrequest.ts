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
   * The mount point of the file system visible in the application container. If this parameter is not specified, the default value /mnt/<PolarFSInstanceId> is used for the first mount. For subsequent mounts, the current mount point of the instance remains unchanged. The value must be an absolute path that starts with a forward slash (/) but cannot be the root directory (/). It can only contain letters, digits, periods (.), underscores (_), hyphens (-), and forward slashes (/). The total length cannot exceed 128 characters, the directory depth cannot exceed 6 levels, and the length of a single level cannot exceed 63 characters. The mount point cannot be identical to or a subdirectory of the mount points of other file systems under the same application.
   * 
   * @example
   * /mnt/datasets
   */
  containerMountPath?: string;
  /**
   * @remarks
   * The AccessKey ID of the Alibaba Cloud account or RAM user. Ensure that the account or RAM user is authorized when you create the PolarLakebase instance.
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
   * The PolarLakebase cold storage instance ID.
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
      containerMountPath: 'ContainerMountPath',
      polarFSAccessKeyId: 'PolarFSAccessKeyId',
      polarFSAccessKeySecret: 'PolarFSAccessKeySecret',
      polarFSInstanceId: 'PolarFSInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      containerMountPath: 'string',
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

