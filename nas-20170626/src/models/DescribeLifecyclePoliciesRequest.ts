// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLifecyclePoliciesRequest extends $dara.Model {
  /**
   * @example
   * 描述
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
   * @example
   * lc-xxx
   */
  lifecyclePolicyId?: string;
  /**
   * @remarks
   * The name of the lifecycle policy. The name must meet the following conventions:
   * 
   * The name must be 3 to 64 characters in length and must start with a letter. It can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * @example
   * lifecyclepolicy_01
   */
  lifecyclePolicyName?: string;
  /**
   * @example
   * Auto
   */
  lifecyclePolicyType?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * @example
   * /abc/
   */
  path?: string;
  /**
   * @remarks
   * The storage class.
   * 
   * *   InfrequentAccess: the Infrequent Access (IA) storage class.
   * *   Archive: the Archive storage class.
   * 
   * >  If the StorageType parameter is not specified, data retrieval tasks of all types are returned.
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

