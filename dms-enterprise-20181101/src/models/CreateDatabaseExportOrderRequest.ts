// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatabaseExportOrderRequestPluginParamConfig extends $dara.Model {
  /**
   * @remarks
   * The export options for big data. The options are used to filter the big data to be exported. You can leave this parameter empty.
   * 
   * This parameter is required.
   */
  dataOption?: string[];
  /**
   * @remarks
   * The type of data that you want to export. Valid values:
   * 
   * *   **DATA**: The data of the database is exported.
   * *   **STRUCT**: The schema of the database is exported.
   * *   **DATA_STRUCT**: The data and schema of the database are exported.
   * 
   * This parameter is required.
   * 
   * @example
   * DATA
   */
  exportContent?: string;
  /**
   * @remarks
   * The types of schemas that you want to export.
   */
  exportTypes?: string[];
  /**
   * @remarks
   * The extension options of the SQL script. You can leave this parameter empty.
   * 
   * This parameter is required.
   */
  SQLExtOption?: string[];
  /**
   * @remarks
   * The tables that you want to export.
   */
  selectedTables?: string[];
  /**
   * @remarks
   * The conditions used to filter the tables to be exported.
   */
  tables?: { [key: string]: string };
  /**
   * @remarks
   * The format in which the database is exported. Valid values:
   * 
   * *   **SQL**
   * *   **CSV**
   * *   **XLSX**
   * 
   * This parameter is required.
   * 
   * @example
   * SQL
   */
  targetOption?: string;
  static names(): { [key: string]: string } {
    return {
      dataOption: 'DataOption',
      exportContent: 'ExportContent',
      exportTypes: 'ExportTypes',
      SQLExtOption: 'SQLExtOption',
      selectedTables: 'SelectedTables',
      tables: 'Tables',
      targetOption: 'TargetOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataOption: { 'type': 'array', 'itemType': 'string' },
      exportContent: 'string',
      exportTypes: { 'type': 'array', 'itemType': 'string' },
      SQLExtOption: { 'type': 'array', 'itemType': 'string' },
      selectedTables: { 'type': 'array', 'itemType': 'string' },
      tables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      targetOption: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataOption)) {
      $dara.Model.validateArray(this.dataOption);
    }
    if(Array.isArray(this.exportTypes)) {
      $dara.Model.validateArray(this.exportTypes);
    }
    if(Array.isArray(this.SQLExtOption)) {
      $dara.Model.validateArray(this.SQLExtOption);
    }
    if(Array.isArray(this.selectedTables)) {
      $dara.Model.validateArray(this.selectedTables);
    }
    if(this.tables) {
      $dara.Model.validateMap(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatabaseExportOrderRequestPluginParam extends $dara.Model {
  /**
   * @remarks
   * The reason for the database export.
   * 
   * This parameter is required.
   * 
   * @example
   * document_test
   */
  classify?: string;
  /**
   * @remarks
   * The configurations for database export.
   * 
   * This parameter is required.
   */
  config?: CreateDatabaseExportOrderRequestPluginParamConfig;
  /**
   * @remarks
   * The database ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 17****
   */
  dbId?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 137****
   */
  instanceId?: number;
  /**
   * @remarks
   * Specifies whether the database is a logical database. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  logic?: boolean;
  /**
   * @remarks
   * The name that is used to search for the database.
   * 
   * This parameter is required.
   * 
   * @example
   * test@xxx.xxx.xxx.xxx:3306
   */
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      classify: 'Classify',
      config: 'Config',
      dbId: 'DbId',
      instanceId: 'InstanceId',
      logic: 'Logic',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classify: 'string',
      config: CreateDatabaseExportOrderRequestPluginParamConfig,
      dbId: 'number',
      instanceId: 'number',
      logic: 'boolean',
      searchName: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatabaseExportOrderRequest extends $dara.Model {
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
   * document_test
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
  pluginParam?: CreateDatabaseExportOrderRequestPluginParam;
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
      relatedUserList: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentKey: 'string',
      comment: 'string',
      parentId: 'number',
      pluginParam: CreateDatabaseExportOrderRequestPluginParam,
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

