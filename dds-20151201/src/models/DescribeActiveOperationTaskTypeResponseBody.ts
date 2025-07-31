// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTaskTypeResponseBodyTypeList extends $dara.Model {
  /**
   * @remarks
   * The number of pending tasks.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * *   **rds_apsaradb_transfer**: data migration
   * *   **rds_apsaradb_upgrade**: minor version update
   * 
   * @example
   * rds_apsaradb_upgrade
   */
  taskType?: string;
  /**
   * @remarks
   * The task type in English.
   * 
   * @example
   * rds_apsaradb_upgrade
   */
  taskTypeInfoEn?: string;
  /**
   * @remarks
   * The task type in Chinese.
   * 
   * @example
   * rds_apsaradb_upgrade
   */
  taskTypeInfoZh?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      taskType: 'TaskType',
      taskTypeInfoEn: 'TaskTypeInfoEn',
      taskTypeInfoZh: 'TaskTypeInfoZh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      taskType: 'string',
      taskTypeInfoEn: 'string',
      taskTypeInfoZh: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTaskTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C7EE83BF-7BA8-5087-BAC9-ED85ED54****
   */
  requestId?: string;
  /**
   * @remarks
   * The O\\&M tasks.
   */
  typeList?: DescribeActiveOperationTaskTypeResponseBodyTypeList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      typeList: 'TypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      typeList: { 'type': 'array', 'itemType': DescribeActiveOperationTaskTypeResponseBodyTypeList },
    };
  }

  validate() {
    if(Array.isArray(this.typeList)) {
      $dara.Model.validateArray(this.typeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

