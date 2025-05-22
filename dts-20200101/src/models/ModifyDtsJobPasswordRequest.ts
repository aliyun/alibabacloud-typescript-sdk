// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDtsJobPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data migration, data synchronization, or change tracking instance.
   * 
   * >  You can call the [DescribeMigrationJobs](https://help.aliyun.com/document_detail/208139.html), [DescribeSubscriptionInstances](https://help.aliyun.com/document_detail/49442.html), or [DescribeSynchronizationJobs](https://help.aliyun.com/document_detail/49454.html) operation to query the instance ID
   * 
   * @example
   * dtsl3m1213ye7l****
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * The ID of the DTS task. The DTS task can be a data migration, data synchronization, or change tracking task.
   * 
   * @example
   * l3m1213ye7l****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The database to which the password belongs. Valid values:
   * 
   * *   **src**: source database.
   * *   **dest**: destination database.
   * 
   * >  This parameter is required.
   * 
   * @example
   * src
   */
  endpoint?: string;
  /**
   * @remarks
   * The new password.
   * 
   * >  This parameter is required and cannot be set to a value that is the same as the current password.
   * 
   * @example
   * Test123456
   */
  password?: string;
  /**
   * @remarks
   * The ID of the region where the DTS instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Synchronization direction, with values:
   * - **Forward** (default): Forward. - **Reverse**: Reverse.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * The account of the source or destination database.
   * 
   * >  This parameter is required.
   * 
   * @example
   * dtstest
   */
  userName?: string;
  /**
   * @remarks
   * Whether it is a seamless integration (Zero-ETL) task, the value can be:
   * - **false**: No. - **true**: Yes.
   * 
   * @example
   * false
   */
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      endpoint: 'Endpoint',
      password: 'Password',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      synchronizationDirection: 'SynchronizationDirection',
      userName: 'UserName',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      endpoint: 'string',
      password: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      synchronizationDirection: 'string',
      userName: 'string',
      zeroEtlJob: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

