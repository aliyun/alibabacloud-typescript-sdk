// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLifecyclePoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the policy.
   * >Only CPFS for Lingjun supports this parameter.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * The file system ID.
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
   * The lifecycle policy name. Naming rules:
   * 
   * 
   * The name must be 3 to 64 characters in length, start with a letter, and can contain letters, digits, underscores (_), or hyphens (-).
   * 
   * >Optional for General-purpose NAS file systems. If specified, this parameter takes precedence. If not specified, LifecyclePolicyId is used instead.
   * 
   * @example
   * lifecyclepolicy_01
   */
  lifecyclePolicyName?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * Valid values:
   * - Auto: automatic execution
   * - OnDemand: on-demand execution
   * >Only CPFS for Lingjun supports this parameter.
   * 
   * @example
   * Auto
   */
  lifecyclePolicyType?: string;
  /**
   * @remarks
   * The page number of the list.
   * 
   * Start value (default value): 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of lifecycle management policies on each page.
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
   * Filters results by path.
   * >Only CPFS for Lingjun supports this parameter.
   * 
   * @example
   * /abc/
   */
  path?: string;
  /**
   * @remarks
   * The storage class type. Valid values:
   * - InfrequentAccess: IA storage class.
   * - Archive: Archive storage class.
   * > If StorageType is not specified, all lifecycle policies are returned.
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

