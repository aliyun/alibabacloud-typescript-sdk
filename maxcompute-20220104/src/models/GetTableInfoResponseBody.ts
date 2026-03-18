// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableInfoResponseBodyDataClusterInfoSortCols extends $dara.Model {
  name?: string;
  order?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      order: 'order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      order: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableInfoResponseBodyDataClusterInfo extends $dara.Model {
  bucketNum?: number;
  clusterCols?: string[];
  clusterType?: string;
  sortCols?: GetTableInfoResponseBodyDataClusterInfoSortCols[];
  static names(): { [key: string]: string } {
    return {
      bucketNum: 'bucketNum',
      clusterCols: 'clusterCols',
      clusterType: 'clusterType',
      sortCols: 'sortCols',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketNum: 'number',
      clusterCols: { 'type': 'array', 'itemType': 'string' },
      clusterType: 'string',
      sortCols: { 'type': 'array', 'itemType': GetTableInfoResponseBodyDataClusterInfoSortCols },
    };
  }

  validate() {
    if(Array.isArray(this.clusterCols)) {
      $dara.Model.validateArray(this.clusterCols);
    }
    if(Array.isArray(this.sortCols)) {
      $dara.Model.validateArray(this.sortCols);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableInfoResponseBodyDataNativeColumns extends $dara.Model {
  comment?: string;
  label?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      label: 'label',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      label: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableInfoResponseBodyDataPartitionColumns extends $dara.Model {
  comment?: string;
  label?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      label: 'label',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      label: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableInfoResponseBodyData extends $dara.Model {
  autoRefreshEnabled?: boolean;
  clusterInfo?: GetTableInfoResponseBodyDataClusterInfo;
  comment?: string;
  createTableDDL?: string;
  creationTime?: number;
  displayName?: string;
  fileNum?: number;
  isExternalTable?: boolean;
  isOutdated?: boolean;
  lastAccessTime?: number;
  lastDDLTime?: number;
  lastModifiedTime?: number;
  lifecycle?: string;
  location?: string;
  materializedView?: boolean;
  name?: string;
  nativeColumns?: GetTableInfoResponseBodyDataNativeColumns[];
  odpsPropertiesRolearn?: string;
  odpsSqlTextOptionFlushHeader?: boolean;
  odpsTextOptionHeaderLinesCount?: number;
  owner?: string;
  partitionColumns?: GetTableInfoResponseBodyDataPartitionColumns[];
  physicalSize?: number;
  projectName?: string;
  rewriteEnabled?: boolean;
  schema?: string;
  size?: number;
  storageHandler?: string;
  tableLabel?: string;
  tablesotreTableName?: string;
  tablestoreColumnsMapping?: string;
  type?: string;
  viewText?: string;
  static names(): { [key: string]: string } {
    return {
      autoRefreshEnabled: 'autoRefreshEnabled',
      clusterInfo: 'clusterInfo',
      comment: 'comment',
      createTableDDL: 'createTableDDL',
      creationTime: 'creationTime',
      displayName: 'displayName',
      fileNum: 'fileNum',
      isExternalTable: 'isExternalTable',
      isOutdated: 'isOutdated',
      lastAccessTime: 'lastAccessTime',
      lastDDLTime: 'lastDDLTime',
      lastModifiedTime: 'lastModifiedTime',
      lifecycle: 'lifecycle',
      location: 'location',
      materializedView: 'materializedView',
      name: 'name',
      nativeColumns: 'nativeColumns',
      odpsPropertiesRolearn: 'odpsPropertiesRolearn',
      odpsSqlTextOptionFlushHeader: 'odpsSqlTextOptionFlushHeader',
      odpsTextOptionHeaderLinesCount: 'odpsTextOptionHeaderLinesCount',
      owner: 'owner',
      partitionColumns: 'partitionColumns',
      physicalSize: 'physicalSize',
      projectName: 'projectName',
      rewriteEnabled: 'rewriteEnabled',
      schema: 'schema',
      size: 'size',
      storageHandler: 'storageHandler',
      tableLabel: 'tableLabel',
      tablesotreTableName: 'tablesotreTableName',
      tablestoreColumnsMapping: 'tablestoreColumnsMapping',
      type: 'type',
      viewText: 'viewText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRefreshEnabled: 'boolean',
      clusterInfo: GetTableInfoResponseBodyDataClusterInfo,
      comment: 'string',
      createTableDDL: 'string',
      creationTime: 'number',
      displayName: 'string',
      fileNum: 'number',
      isExternalTable: 'boolean',
      isOutdated: 'boolean',
      lastAccessTime: 'number',
      lastDDLTime: 'number',
      lastModifiedTime: 'number',
      lifecycle: 'string',
      location: 'string',
      materializedView: 'boolean',
      name: 'string',
      nativeColumns: { 'type': 'array', 'itemType': GetTableInfoResponseBodyDataNativeColumns },
      odpsPropertiesRolearn: 'string',
      odpsSqlTextOptionFlushHeader: 'boolean',
      odpsTextOptionHeaderLinesCount: 'number',
      owner: 'string',
      partitionColumns: { 'type': 'array', 'itemType': GetTableInfoResponseBodyDataPartitionColumns },
      physicalSize: 'number',
      projectName: 'string',
      rewriteEnabled: 'boolean',
      schema: 'string',
      size: 'number',
      storageHandler: 'string',
      tableLabel: 'string',
      tablesotreTableName: 'string',
      tablestoreColumnsMapping: 'string',
      type: 'string',
      viewText: 'string',
    };
  }

  validate() {
    if(this.clusterInfo && typeof (this.clusterInfo as any).validate === 'function') {
      (this.clusterInfo as any).validate();
    }
    if(Array.isArray(this.nativeColumns)) {
      $dara.Model.validateArray(this.nativeColumns);
    }
    if(Array.isArray(this.partitionColumns)) {
      $dara.Model.validateArray(this.partitionColumns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableInfoResponseBody extends $dara.Model {
  data?: GetTableInfoResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetTableInfoResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

