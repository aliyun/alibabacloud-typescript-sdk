// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFileSystemRequestOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the SMB Access-based Enumeration (ABE) access control feature.
   * 
   * @example
   * false
   */
  enableABE?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the OpLock feature.
   * Valid values:
   * - true: enables the feature.
   * - false: does not enable the feature.
   * > Only file systems whose Protocol Type is SMB protocol are supported.
   * 
   * @example
   * true
   */
  enableOplock?: boolean;
  /**
   * @remarks
   * Specifies whether the Lingjun VSC mount target supports access only through access points.
   * 
   * @example
   * false
   */
  vscAccessPointAccessOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableABE: 'EnableABE',
      enableOplock: 'EnableOplock',
      vscAccessPointAccessOnly: 'VscAccessPointAccessOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableABE: 'boolean',
      enableOplock: 'boolean',
      vscAccessPointAccessOnly: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFileSystemRequest extends $dara.Model {
  /**
   * @remarks
   * The file system description.
   * 
   * Limits:
   * 
   * - The description must be 2 to 128 characters in length.
   * - The description must start with a letter or Chinese character and cannot start with `http://` or `https://`.
   * - The description can contain digits, colons (:), underscores (_), or hyphens (-).
   * 
   * @example
   * NAS-test-1
   */
  description?: string;
  /**
   * @remarks
   * The file system ID.
   * 
   * - General-purpose NAS: `31a8e4****`.
   * 
   * - Extreme NAS: must start with `extreme-`, for example, `extreme-0015****`.
   * - CPFS: must start with `cpfs-`, for example, `cpfs-125487****`.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The options.
   */
  options?: ModifyFileSystemRequestOptions;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileSystemId: 'FileSystemId',
      options: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fileSystemId: 'string',
      options: ModifyFileSystemRequestOptions,
    };
  }

  validate() {
    if(this.options && typeof (this.options as any).validate === 'function') {
      (this.options as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

