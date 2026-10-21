// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLifecyclePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * describe
   */
  description?: string;
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
   * @remarks
   * The ID of the lifecycle policy.
   * 
   * @example
   * lc-xxx
   */
  lifecyclePolicyId?: string;
  /**
   * @remarks
   * The lifecycle management Policy Name.
   * 
   * The name must be 3 to 64 characters in length. It must start with an uppercase letter or a lowercase letter, and can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * @example
   * lifecyclepolicy_01
   */
  lifecyclePolicyName?: string;
  /**
   * @remarks
   * The management rule associated with the lifecycle management policy.
   * 
   * Valid values:
   * 
   * - DEFAULT_ATIME_14: Files that have not been accessed for 14 days.
   * - DEFAULT_ATIME_30: Files that have not been accessed for 30 days.
   * - DEFAULT_ATIME_60: Files that have not been accessed for 60 days.
   * - DEFAULT_ATIME_90: Files that have not been accessed for 90 days.
   * - DEFAULT_ATIME_180: Files that have not been accessed for 180 days. DEFAULT_ATIME_180 is supported only when StorageType is set to Archive.
   * > If an IA storage class policy is already configured for the directory, the time threshold for the Archive storage class policy must be longer than that of the IA storage class policy.
   * 
   * @example
   * DEFAULT_ATIME_14
   */
  lifecycleRuleName?: string;
  /**
   * @remarks
   * The absolute path of a single directory configured for the lifecycle management policy.
   * 
   * The path must start with a forward slash (/) and must be a valid path in the mount target.
   * 
   * @example
   * /pathway/to/folder
   */
  path?: string;
  /**
   * @remarks
   * The tiered storage class.
   * 
   * Valid values:
   * 
   * - InfrequentAccess: IA storage class.
   * - Archive: Archive storage class.
   * 
   * @example
   * InfrequentAccess
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
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
      description: 'string',
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

