// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFileSystemRequestAutoUpgradeConfig extends $dara.Model {
  /**
   * @remarks
   * The capacity usage threshold.
   * 
   * @example
   * 80
   */
  capacityUsedRatio?: number;
  /**
   * @remarks
   * Specifies whether to enable auto-scaling.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The scaling increment.
   * 
   * @example
   * 100
   */
  step?: number;
  /**
   * @remarks
   * The duration.
   * 
   * @example
   * 30
   */
  time?: number;
  static names(): { [key: string]: string } {
    return {
      capacityUsedRatio: 'capacityUsedRatio',
      enabled: 'enabled',
      step: 'step',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityUsedRatio: 'number',
      enabled: 'boolean',
      step: 'number',
      time: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFileSystemRequestOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the SMB Access-Based Enumeration (ABE) feature.
   * 
   * @example
   * false
   */
  enableABE?: boolean;
  /**
   * @remarks
   * Specifies whether the OpLock feature is enabled.
   * 
   * Valid values:
   * - true: Enabled.
   * - false: Not enabled.
   * > Only file systems of the SMB Protocol Type are supported.
   * 
   * @example
   * true
   */
  enableOplock?: boolean;
  /**
   * @remarks
   * Specifies whether the Lingjun VSC mount target supports only access point-based access.
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
   * The auto-scaling configuration.
   */
  autoUpgradeConfig?: ModifyFileSystemRequestAutoUpgradeConfig;
  /**
   * @remarks
   * The description of the file system.
   * 
   * Limits:
   * 
   * - The description must be 2 to 128 characters in length.
   * - The description must start with a letter. It cannot start with `http://` or `https://`.
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
   * - Extreme NAS: The ID must start with `extreme-`, for example, `extreme-0015****`.
   * - Cloud Parallel File Storage (CPFS): The ID must start with `cpfs-`, for example, `cpfs-125487****`.
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
      autoUpgradeConfig: 'AutoUpgradeConfig',
      description: 'Description',
      fileSystemId: 'FileSystemId',
      options: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpgradeConfig: ModifyFileSystemRequestAutoUpgradeConfig,
      description: 'string',
      fileSystemId: 'string',
      options: ModifyFileSystemRequestOptions,
    };
  }

  validate() {
    if(this.autoUpgradeConfig && typeof (this.autoUpgradeConfig as any).validate === 'function') {
      (this.autoUpgradeConfig as any).validate();
    }
    if(this.options && typeof (this.options as any).validate === 'function') {
      (this.options as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

