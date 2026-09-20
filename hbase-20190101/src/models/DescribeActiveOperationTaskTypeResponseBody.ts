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
   * The task type. The return value **rds_apsaradb_upgrade** indicates a minor engine version update.
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
   * 小版本升级
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
   * EC7E27FC-58F8-4722-89CF-D1B6B0971956
   */
  requestId?: string;
  /**
   * @remarks
   * The task list.
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

