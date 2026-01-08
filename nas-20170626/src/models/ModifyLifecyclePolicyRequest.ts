// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLifecyclePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @example
   * lc-xxx
   */
  lifecyclePolicyId?: string;
  /**
   * @remarks
   * The name of the lifecycle policy.
   * 
   * The name must be 3 to 64 characters in length and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * lifecyclepolicy_01
   */
  lifecyclePolicyName?: string;
  /**
   * @remarks
   * The management rule that is associated with the lifecycle policy.
   * 
   * Valid values:
   * 
   * *   DEFAULT_ATIME_14: Files that are not accessed in the last 14 days are dumped to the IA storage medium.
   * *   DEFAULT_ATIME_30: Files that are not accessed in the last 30 days are dumped to the IA storage medium.
   * *   DEFAULT_ATIME_60: Files that are not accessed in the last 60 days are dumped to the IA storage medium.
   * *   DEFAULT_ATIME_90: Files that are not accessed in the last 90 days are dumped to the IA storage medium.
   * 
   * @example
   * DEFAULT_ATIME_14
   */
  lifecycleRuleName?: string;
  /**
   * @remarks
   * The absolute path of a directory with which the lifecycle policy is associated.
   * 
   * The path must start with a forward slash (/) and must be a path that exists in the mount target.
   * 
   * @example
   * /pathway/to/folder
   */
  path?: string;
  /**
   * @remarks
   * The storage type of the data that is dumped to the IA storage medium.
   * 
   * Default value: InfrequentAccess (IA).
   * 
   * @example
   * InfrequentAccess
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      lifecyclePolicyId: 'LifecyclePolicyId',
      lifecyclePolicyName: 'LifecyclePolicyName',
      lifecycleRuleName: 'LifecycleRuleName',
      path: 'Path',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      lifecyclePolicyId: 'string',
      lifecyclePolicyName: 'string',
      lifecycleRuleName: 'string',
      path: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

