// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLifecyclePoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the policy.
   * >This parameter is supported only by CPFS for Lingjun.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the file system.
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
   * Policy Name of the lifecycle policy. Policy Name must meet the following rules:
   * 
   * 
   * Policy Name must be 3 to 64 characters in length. It must start with a letter and can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * >For General-purpose NAS file systems, this parameter is optional. If you specify this parameter, the specified value is used. If you do not specify this parameter, the value of LifecyclePolicyId is used.
   * 
   * @example
   * lifecyclepolicy_01
   */
  lifecyclePolicyName?: string;
  /**
   * @remarks
   * The policy type. Valid values:
   * - Auto: Automatic execution.
   * - OnDemand: On-demand execution.
   * >This parameter is supported only by CPFS for Lingjun.
   * 
   * @example
   * Auto
   */
  lifecyclePolicyType?: string;
  /**
   * @remarks
   * The page number of the list.
   * 
   * Starting value (default value): 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of lifecycle management policies to return on each page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters lifecycle policies by path.
   * >This parameter is supported only by CPFS for Lingjun.
   * 
   * @example
   * /abc/
   */
  path?: string;
  /**
   * @remarks
   * The tiered storage type. Valid values:
   * - InfrequentAccess: IA storage class.
   * - Archive: Archive storage class.
   * >If you do not specify StorageType, all lifecycle policies are returned.
   * 
   * @example
   * InfrequentAccess
   * 
   * **if can be null:**
   * true
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileSystemId: 'FileSystemId',
      lifecyclePolicyId: 'LifecyclePolicyId',
      lifecyclePolicyName: 'LifecyclePolicyName',
      lifecyclePolicyType: 'LifecyclePolicyType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
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
      lifecyclePolicyType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

