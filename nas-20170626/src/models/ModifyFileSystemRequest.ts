// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFileSystemRequestAutoUpgradeConfig extends $dara.Model {
  /**
   * @remarks
   * The capacity usage threshold. Valid values: 1 to 99.
   * 
   * @example
   * 80
   */
  capacityUsedRatio?: number;
  /**
   * @remarks
   * Specifies whether to enable automatic expansion.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The expansion step. The step must be a multiple of 100 GiB.
   * 
   * @example
   * 100
   */
  step?: number;
  /**
   * @remarks
   * The duration. The minimum duration is 5 minutes, and the maximum duration is 24 hours. Unit: minutes.
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
   * Specifies whether to enable the SMB ABE access control feature.
   * 
   * @example
   * false
   */
  enableABE?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the OpLock feature.
   * Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * > This parameter is supported only for file systems of the SMB Protocol Type.
   * 
   * @example
   * true
   */
  enableOplock?: boolean;
  /**
   * @remarks
   * Specifies whether to enable AP-only access for VSC mount targets.
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
   * The automatic expansion configuration.
   */
  autoUpgradeConfig?: ModifyFileSystemRequestAutoUpgradeConfig;
  /**
   * @remarks
   * The description of the file system.
   * 
   * Limits:
   * 
   * - The description must be 2 to 128 characters in length.
   * - It must start with a letter or a Chinese character, and cannot start with `http://` or `https://`.
   * - It can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * NAS-test-1
   */
  description?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * - General-purpose NAS: `31a8e4****`.
   * 
   * - Extreme NAS: must start with `extreme-`, such as `extreme-0015****`.
   * - CPFS: must start with `cpfs-`, such as `cpfs-125487****`.
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

