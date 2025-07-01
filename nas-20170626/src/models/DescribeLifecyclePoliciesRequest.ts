// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLifecyclePoliciesRequest extends $dara.Model {
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
   * The name of the lifecycle policy. The name must meet the following conventions:
   * 
   * The name must be 3 to 64 characters in length and must start with a letter. It can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * @example
   * lifecyclepolicy_01
   */
  lifecyclePolicyName?: string;
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
      fileSystemId: 'FileSystemId',
      lifecyclePolicyName: 'LifecyclePolicyName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      lifecyclePolicyName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

