// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataCronClearOrderRequestParamCronClearItemList extends $dara.Model {
  /**
   * @remarks
   * The name of the field.
   * 
   * This parameter is required.
   * 
   * @example
   * gmt_create
   */
  columnName?: string;
  /**
   * @remarks
   * The filter conditions.
   * 
   * @example
   * where 1 = 1
   */
  filterSQL?: string;
  /**
   * @remarks
   * The retention period of the historical data. Unit: days. For example, if you set the parameter to 7, DMS deletes the data that is retained for more than seven days.
   * 
   * This parameter is required.
   * 
   * @example
   * 7
   */
  remainDays?: number;
  /**
   * @remarks
   * The name of the table. You can call the [ListTables](https://help.aliyun.com/document_detail/141878.html) operation to query the name of the table.
   * 
   * This parameter is required.
   * 
   * @example
   * t1
   */
  tableName?: string;
  /**
   * @remarks
   * The type of time granularity. If the ColumnName parameter specifies a field of a time type, this parameter is required. Valid values:
   * 
   * *   **MILLISECONDS**: milliseconds
   * *   **SECONDS**: seconds
   * 
   * @example
   * MILLISECONDS
   */
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      filterSQL: 'FilterSQL',
      remainDays: 'RemainDays',
      tableName: 'TableName',
      timeUnit: 'TimeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      filterSQL: 'string',
      remainDays: 'number',
      tableName: 'string',
      timeUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataCronClearOrderRequestParamDbItemList extends $dara.Model {
  /**
   * @remarks
   * The ID of the database. You can call the [SearchDatabases](https://help.aliyun.com/document_detail/141876.html) operation to query the ID of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  dbId?: number;
  /**
   * @remarks
   * Indicates whether the database is a logical database. Valid values:
   * 
   * *   **true**: The database is a logical database.
   * *   **false**: The database is not a logical database.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  logic?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      logic: 'Logic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      logic: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataCronClearOrderRequestParam extends $dara.Model {
  /**
   * @remarks
   * The reason for the data change.
   * 
   * @example
   * test
   */
  classify?: string;
  /**
   * @remarks
   * The tables for which you want to clear historical data.
   * 
   * This parameter is required.
   */
  cronClearItemList?: CreateDataCronClearOrderRequestParamCronClearItemList[];
  /**
   * @remarks
   * The crontab expression that you can use to run the task at a specified time. For more information, see [Crontab expression](https://help.aliyun.com/document_detail/206581.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 0 0 2 * * ?
   */
  cronFormat?: string;
  /**
   * @remarks
   * The databases for which you want to clear historical data.
   * 
   * This parameter is required.
   */
  dbItemList?: CreateDataCronClearOrderRequestParamDbItemList[];
  /**
   * @remarks
   * The amount of time taken to run the task. Unit: hours.
   * 
   * >  If the **specifyDuration** parameter is set to **true**, this parameter is required.
   * 
   * @example
   * 4
   */
  durationHour?: number;
  /**
   * @remarks
   * Specifies whether to specify an end time for the task. Valid values:
   * 
   * *   **true**: specifies an end time for the task. The task is automatically suspended after this end time.
   * *   **false**: does not specify an end time for the task. The task is stopped after the historical data is cleared.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  specifyDuration?: boolean;
  static names(): { [key: string]: string } {
    return {
      classify: 'Classify',
      cronClearItemList: 'CronClearItemList',
      cronFormat: 'CronFormat',
      dbItemList: 'DbItemList',
      durationHour: 'DurationHour',
      specifyDuration: 'specifyDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classify: 'string',
      cronClearItemList: { 'type': 'array', 'itemType': CreateDataCronClearOrderRequestParamCronClearItemList },
      cronFormat: 'string',
      dbItemList: { 'type': 'array', 'itemType': CreateDataCronClearOrderRequestParamDbItemList },
      durationHour: 'number',
      specifyDuration: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.cronClearItemList)) {
      $dara.Model.validateArray(this.cronClearItemList);
    }
    if(Array.isArray(this.dbItemList)) {
      $dara.Model.validateArray(this.dbItemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataCronClearOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the attachment for the ticket. The attachment provides more instructions for this operation.
   * 
   * You can call the [GetUserUploadFileJob](https://help.aliyun.com/document_detail/206069.html) operation to query the key of the attachment.
   * 
   * @example
   * order_attachement.txt
   */
  attachmentKey?: string;
  /**
   * @remarks
   * The purpose or objective of the data change. This reduces unnecessary communication.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The parameters of the ticket.
   * 
   * This parameter is required.
   */
  param?: CreateDataCronClearOrderRequestParam;
  /**
   * @remarks
   * The stakeholders of this operation. All stakeholders can view the ticket details and assist in the approval process. Irrelevant users other than Data Management (DMS) administrators and database administrators (DBAs) are not allowed to view the ticket details.
   */
  relatedUserList?: number[];
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * >  The ID of the tenant is displayed when you move the pointer over the profile picture in the upper-right corner of the DMS console. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the Manage DMS tenants topic.
   * 
   * @example
   * 123454324
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentKey: 'AttachmentKey',
      comment: 'Comment',
      param: 'Param',
      relatedUserList: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentKey: 'string',
      comment: 'string',
      param: CreateDataCronClearOrderRequestParam,
      relatedUserList: { 'type': 'array', 'itemType': 'number' },
      tid: 'number',
    };
  }

  validate() {
    if(this.param && typeof (this.param as any).validate === 'function') {
      (this.param as any).validate();
    }
    if(Array.isArray(this.relatedUserList)) {
      $dara.Model.validateArray(this.relatedUserList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

