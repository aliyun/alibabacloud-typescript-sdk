// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFilesetRequestQuota extends $dara.Model {
  /**
   * @remarks
   * The file count limit of the quota. Valid values:
   * 
   * - Minimum value: 10,000.
   * 
   * - Maximum value: 10,000,000,000.
   * 
   * @example
   * 10000
   */
  fileCountLimit?: number;
  /**
   * @remarks
   * The total capacity limit of the quota. Unit: bytes.
   * 
   * Valid values:
   * 
   * - Minimum value: 10,737,418,240 (10 GiB).
   * 
   * - Increment: 1,073,741,824 (1 GiB).
   * 
   * @example
   * 10737418240
   */
  sizeLimit?: number;
  static names(): { [key: string]: string } {
    return {
      fileCountLimit: 'FileCountLimit',
      sizeLimit: 'SizeLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileCountLimit: 'number',
      sizeLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFilesetRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-4266554*****
   */
  clientToken?: string;
  /**
   * @remarks
   * The release protection property of the instance. Specifies whether the instance can be released by using the console or the [DeleteFileset](https://help.aliyun.com/document_detail/2402263.html) operation.
   * 
   * - true: Enables release protection for the instance.
   * - false (default): Disables release protection for the instance.
   * 
   * > This property only restricts manual release operations and does not take effect on system-initiated release operations.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The description of the fileset.
   * 
   * - The description must be 2 to 128 characters in length.
   * - The description must start with a letter or Chinese character and cannot start with http:// or https://.
   * - The description can contain digits, colons (:), underscores (_), or hyphens (-).
   * 
   * @example
   * Internal affairs directory
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for this request.
   * 
   * A dry run checks parameter validity and resource availability without actually creating the instance or incurring charges.
   * 
   * Valid values:
   * 
   * - true: Sends a dry run request without creating the instance. The check items include required parameters, request format, business restrictions, and NAS inventory. If the check fails, the corresponding error is returned. If the check succeeds, HTTP status code 200 is returned, but FsetId is empty.
   * - false (default): Sends a normal request. After the check succeeds, the instance is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The file system ID.
   * 
   * - CPFS: The ID must start with `cpfs-`, such as cpfs-099394bd928c\\*\\*\\*\\*.
   * 
   * - CPFS for Lingjun: The ID must start with `bmcpfs-`, such as bmcpfs-290w65p03ok64ya\\*\\*\\*\\*.
   * 
   * This parameter is required.
   * 
   * @example
   * bmcpfs-290w65p03ok64y*****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The absolute path of the fileset to create.
   * 
   * - Path restrictions for CPFS:
   *   - The parent directory of the specified directory must be an existing directory in the file system.
   *   - The path must be 2 to 1,024 characters in length.
   *   - The specified directory must start and end with a forward slash (/).
   * - Path restrictions for CPFS for Lingjun:
   *   - The path must be 2 to 1,024 characters in length.
   *   - The specified directory must start and end with a forward slash (/).
   *   - The fileset path must be a new path and cannot be an existing path. Renaming a fileset path is not supported, and the path cannot be a symbolic link.
   *   - The maximum depth of a fileset path is 8 levels, with the root directory / as level 0. For example, a fileset path of /test/aaa/ccc/ has a depth of 3 levels.
   *   - If the fileset path contains multiple directory levels, the parent directory must be an existing directory.
   *   - Nesting filesets within a fileset is not supported. If a parent directory is already specified as a fileset, its subdirectories cannot be specified as filesets. Only one quota is supported for each fileset path.
   *   - The total path length cannot exceed 990 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * /test/
   */
  fileSystemPath?: string;
  /**
   * @remarks
   * The quota information.
   * > This parameter is supported only for CPFS for Lingjun 2.7.0 and later.
   */
  quota?: CreateFilesetRequestQuota;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      deletionProtection: 'DeletionProtection',
      description: 'Description',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
      fileSystemPath: 'FileSystemPath',
      quota: 'Quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      deletionProtection: 'boolean',
      description: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
      fileSystemPath: 'string',
      quota: CreateFilesetRequestQuota,
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

