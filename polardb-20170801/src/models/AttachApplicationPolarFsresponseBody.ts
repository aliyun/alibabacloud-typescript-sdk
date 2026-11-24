// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachApplicationPolarFSResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The actual container path to which the file system is mounted. If ContainerMountPath is not specified, the effective default value /mnt/<PolarFSInstanceId> is returned. If the file system is repeatedly mounted without changing the path, the original mount point of the instance is returned.
   * 
   * @example
   * /mnt/datasets
   */
  containerMountPath?: string;
  /**
   * @remarks
   * The ID of the PolarLakebase instance.
   * 
   * @example
   * pcs-**************
   */
  polarFSInstanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      containerMountPath: 'ContainerMountPath',
      polarFSInstanceId: 'PolarFSInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      containerMountPath: 'string',
      polarFSInstanceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

