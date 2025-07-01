// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeFileSystemRequest extends $dara.Model {
  /**
   * @remarks
   * The desired capacity of the file system.
   * 
   * The desired capacity of the file system must be greater than the original capacity of the file system. Unit: GiB.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  capacity?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * > If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * During the dry run, the system checks whether the request parameters are valid and whether the requested resources are available. During the dry run, no file system is created and no fee is incurred.
   * 
   * Valid values:
   * 
   * *   true: performs a dry run. The system checks the required parameters, request syntax, limits, and available NAS resources. If the request fails the dry run, an error message is returned. If the request passes the dry run, the HTTP status code 200 is returned. No value is returned for the FileSystemId parameter.
   * *   false (default): performs a dry run and sends the request. If the request passes the dry run, a file system is created.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * *   The IDs of Extreme NAS file systems must start with `extreme-`, for example, extreme-0015\\*\\*\\*\\*.
   * *   The IDs of CPFS file systems must start with `cpfs-`, for example, cpfs-125487\\*\\*\\*\\*.
   * 
   * > CPFS file systems are available only on the China site (aliyun.com).
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      clientToken: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

