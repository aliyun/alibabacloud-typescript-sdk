// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RollbackApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can call the ListApplication operation to query the application ID. For more information, see [ListApplication](https://help.aliyun.com/document_detail/423162.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 3616cdca-4f92-4413-************
   */
  appId?: string;
  /**
   * @remarks
   * The number of batches for the rollback. Default value: 1. Valid values: 1 to 5.
   * 
   * @example
   * 1
   */
  batch?: number;
  /**
   * @remarks
   * The wait time between batches. Default value: 0. The default value indicates no wait time. Valid values: 0 to 5. Unit: minutes.
   * 
   * @example
   * 0
   */
  batchWaitTime?: number;
  /**
   * @remarks
   * The application group ID. You can call the ListDeployGroup operation to query the application group ID. For more information, see [ListDeployGroup](https://help.aliyun.com/document_detail/423184.html).
   * 
   * If you need to roll back the application in all application groups, set this parameter to `all`.
   * 
   * This parameter is required.
   * 
   * @example
   * 8123db90-880f-48***************
   */
  groupId?: string;
  /**
   * @remarks
   * The historical version to which you want to roll back the application. Call the ListHistoryDeployVersion operation to query the historical versions of the application. Then, set this parameter based on the returned value of `PackageVersion`. For more information, see [ListHistoryDeployVersion](https://help.aliyun.com/document_detail/423163.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-11-13 14:22:22
   */
  historyVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      batch: 'Batch',
      batchWaitTime: 'BatchWaitTime',
      groupId: 'GroupId',
      historyVersion: 'HistoryVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      batch: 'number',
      batchWaitTime: 'number',
      groupId: 'string',
      historyVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

