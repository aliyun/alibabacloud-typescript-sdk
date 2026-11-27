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
   * The total capacity limit of the quota. Unit: Byte.
   * 
   * Valid values:
   * 
   * - Minimum value: 10,737,418,240 (10 GiB).
   * 
   * - Step: 1,073,741,824 (1 GiB).
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
   * Ensures the idempotence of the request. You can generate a value on your client to ensure that this parameter is unique across different requests.
   * 
   * The ClientToken can contain only ASCII characters and cannot exceed 64 characters. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-4266554*****
   */
  clientToken?: string;
  /**
   * @remarks
   * The release protection attribute of the instance. It specifies whether the instance can be released through the console or the [DeleteFileset](https://help.aliyun.com/document_detail/2402263.html) operation.
   * 
   * - true: Enables release protection for the instance.
   * - false (default): Disables release protection for the instance.
   * 
   * > This attribute limits only manual release operations and does not apply to system release operations.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The description of the Fileset.
   * 
   * - The description must be 2 to 128 characters in length.
   * - The description must start with an uppercase letter, a lowercase letter, or a Chinese character. It cannot start with http:// or https://.
   * - The description can contain digits, colons (:), underscores (_), or hyphens (-).
   * 
   * @example
   * Internal transaction directory
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for this creation request.
   * 
   * A dry run performs checks such as parameter validity and inventory. It does not actually create the instance or incur fees.
   * 
   * Valid values:
   * 
   * - true: Sends a check request and does not create the instance. Check items include whether required parameters are specified, the request format, business limits, and NAS inventory. If the check fails, the corresponding error is returned. If the check succeeds, the 200 HTTP status code is returned, but FsetId is empty.
   * - false (default): Sends a normal request and creates the instance directly after the check succeeds.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The file system ID.
   * 
   * - CPFS: The ID must start with `cpfs-`. Example: cpfs-099394bd928c****.
   * 
   * - CPFS for Lingjun: The ID must start with `bmcpfs-`. Example: bmcpfs-290w65p03ok64ya****.
   * 
   * This parameter is required.
   * 
   * @example
   * bmcpfs-290w65p03ok64y*****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The absolute path of the Fileset to be created.
   * 
   * - CPFS path limits.
   *   - The parent directory of the specified directory must be an existing directory in the file system.
   *   - The length must be 2 to 1,024 characters.
   *   - The specified directory must start and end with a forward slash (/).
   *  - CPFS for Lingjun path limits.
   *    - The length must be 2 to 1,024 characters.
   *    - The specified directory must start and end with a forward slash (/).
   *    - The Fileset path must be a new path and cannot be an existing path. Fileset paths cannot be renamed and cannot be symbolic links.
   *    - The maximum supported depth of a Fileset path is 8 levels. The root directory / is level 0. For example, if the Fileset path is /test/aaa/ccc/, the path depth is 3 levels.
   *    - If the Fileset path contains multiple directory levels, the parent directory must be an existing directory.
   *    - You cannot nest Filesets. If a parent directory is already specified as a Fileset, its subdirectories cannot be specified as Filesets. Each Fileset path supports only one quota.
   *    - The total path length can be up to 990 characters.
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
   * > Only CPFS for Lingjun 2.7.0 and later support this parameter.
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

