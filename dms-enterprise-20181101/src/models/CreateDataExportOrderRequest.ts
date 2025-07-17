// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataExportOrderRequestPluginParamWatermark extends $dara.Model {
  /**
   * @remarks
   * The field into which the watermark is to be embedded.
   * 
   * @example
   * user_number
   */
  columnName?: string;
  /**
   * @remarks
   * The information to be embedded as a watermark into data.
   * 
   * @example
   * test
   */
  dataWatermark?: string;
  /**
   * @remarks
   * The information to be embedded as a watermark into files.
   * 
   * @example
   * test
   */
  fileWatermark?: string;
  /**
   * @remarks
   * One or more primary keys or unique keys.
   */
  keys?: string[];
  /**
   * @remarks
   * The methods in which the watermark is embedded.
   */
  watermarkTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      dataWatermark: 'DataWatermark',
      fileWatermark: 'FileWatermark',
      keys: 'Keys',
      watermarkTypes: 'WatermarkTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      dataWatermark: 'string',
      fileWatermark: 'string',
      keys: { 'type': 'array', 'itemType': 'string' },
      watermarkTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    if(Array.isArray(this.watermarkTypes)) {
      $dara.Model.validateArray(this.watermarkTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataExportOrderRequestPluginParam extends $dara.Model {
  /**
   * @remarks
   * The estimated number of data rows to be affected.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  affectRows?: number;
  /**
   * @remarks
   * The reason for the export ticket.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  classify?: string;
  /**
   * @remarks
   * The database ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 18****
   */
  dbId?: number;
  /**
   * @remarks
   * The SQL statements that can be executed.
   * 
   * This parameter is required.
   * 
   * @example
   * SELECT * FROM DMS_test
   *  LIMIT 20;
   */
  exeSQL?: string;
  /**
   * @remarks
   * Specifies whether to skip verification. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  ignoreAffectRows?: boolean;
  /**
   * @remarks
   * The reason for skipping verification. This parameter is required if you set IgnoreAffectRows to true.
   * 
   * @example
   * Test only, does not affect the business, and does not require verification.
   */
  ignoreAffectRowsReason?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 132****
   */
  instanceId?: number;
  /**
   * @remarks
   * Specifies whether the database is a logical database. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > If you set this parameter to **true**, the database that you specify must be a logical database.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  logic?: boolean;
  /**
   * @remarks
   * The information about the watermarks.
   */
  watermark?: CreateDataExportOrderRequestPluginParamWatermark;
  static names(): { [key: string]: string } {
    return {
      affectRows: 'AffectRows',
      classify: 'Classify',
      dbId: 'DbId',
      exeSQL: 'ExeSQL',
      ignoreAffectRows: 'IgnoreAffectRows',
      ignoreAffectRowsReason: 'IgnoreAffectRowsReason',
      instanceId: 'InstanceId',
      logic: 'Logic',
      watermark: 'Watermark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectRows: 'number',
      classify: 'string',
      dbId: 'number',
      exeSQL: 'string',
      ignoreAffectRows: 'boolean',
      ignoreAffectRowsReason: 'string',
      instanceId: 'number',
      logic: 'boolean',
      watermark: CreateDataExportOrderRequestPluginParamWatermark,
    };
  }

  validate() {
    if(this.watermark && typeof (this.watermark as any).validate === 'function') {
      (this.watermark as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataExportOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the attachment that provides more instructions for the ticket. You can call the [GetUserUploadFileJob](https://help.aliyun.com/document_detail/206069.html) operation to obtain the attachment key.
   * 
   * @example
   * order_attachment.txt
   */
  attachmentKey?: string;
  /**
   * @remarks
   * The purpose or objective of the ticket. This parameter helps reduce unnecessary communication.
   * 
   * This parameter is required.
   * 
   * @example
   * business_test
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the parent ticket.
   * 
   * @example
   * 877****
   */
  parentId?: number;
  /**
   * @remarks
   * The parameters of the ticket.
   * 
   * This parameter is required.
   */
  pluginParam?: CreateDataExportOrderRequestPluginParam;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account that actually calls the API.
   * 
   * @example
   * 21400447956867****
   */
  realLoginUserUid?: string;
  /**
   * @remarks
   * The stakeholders involved in this operation.
   */
  relatedUserList?: number[];
  /**
   * @remarks
   * The tenant ID.
   * 
   * > To view the ID of the tenant, move the pointer over the profile picture in the upper-right corner of the DMS console. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the "Manage DMS tenants" topic.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentKey: 'AttachmentKey',
      comment: 'Comment',
      parentId: 'ParentId',
      pluginParam: 'PluginParam',
      realLoginUserUid: 'RealLoginUserUid',
      relatedUserList: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentKey: 'string',
      comment: 'string',
      parentId: 'number',
      pluginParam: CreateDataExportOrderRequestPluginParam,
      realLoginUserUid: 'string',
      relatedUserList: { 'type': 'array', 'itemType': 'number' },
      tid: 'number',
    };
  }

  validate() {
    if(this.pluginParam && typeof (this.pluginParam as any).validate === 'function') {
      (this.pluginParam as any).validate();
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

