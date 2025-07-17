// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TableBusinessMetadataCategories extends $dara.Model {
  /**
   * @example
   * CATEGORY.456
   */
  id?: string;
  /**
   * @example
   * 测试类目
   */
  name?: string;
  /**
   * @example
   * CATEGORY.123
   */
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      parentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableBusinessMetadataExtension extends $dara.Model {
  /**
   * @example
   * Dev
   */
  envType?: string;
  /**
   * @example
   * 0
   */
  favorCount?: number;
  /**
   * @example
   * 234
   */
  projectId?: number;
  /**
   * @example
   * 0
   */
  readCount?: number;
  /**
   * @example
   * 0
   */
  viewCount?: number;
  static names(): { [key: string]: string } {
    return {
      envType: 'EnvType',
      favorCount: 'FavorCount',
      projectId: 'ProjectId',
      readCount: 'ReadCount',
      viewCount: 'ViewCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envType: 'string',
      favorCount: 'number',
      projectId: 'number',
      readCount: 'number',
      viewCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableBusinessMetadataTags extends $dara.Model {
  /**
   * @example
   * tag_key
   */
  key?: string;
  /**
   * @example
   * tag_value
   * 
   * **if can be null:**
   * true
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableBusinessMetadataUpstreamTasks extends $dara.Model {
  /**
   * @example
   * 123456
   */
  id?: number;
  /**
   * @example
   * test_task
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableBusinessMetadata extends $dara.Model {
  categories?: TableBusinessMetadataCategories[][];
  extension?: TableBusinessMetadataExtension;
  /**
   * @example
   * ## 使用说明
   */
  readme?: string;
  tags?: TableBusinessMetadataTags[];
  upstreamTasks?: TableBusinessMetadataUpstreamTasks[];
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      extension: 'Extension',
      readme: 'Readme',
      tags: 'Tags',
      upstreamTasks: 'UpstreamTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': TableBusinessMetadataCategories } },
      extension: TableBusinessMetadataExtension,
      readme: 'string',
      tags: { 'type': 'array', 'itemType': TableBusinessMetadataTags },
      upstreamTasks: { 'type': 'array', 'itemType': TableBusinessMetadataUpstreamTasks },
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    if(this.extension && typeof (this.extension as any).validate === 'function') {
      (this.extension as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.upstreamTasks)) {
      $dara.Model.validateArray(this.upstreamTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableTechnicalMetadata extends $dara.Model {
  /**
   * @example
   * false
   */
  compressed?: boolean;
  /**
   * @example
   * org.apache.hadoop.hive.ql.io.parquet.MapredParquetInputFormat
   */
  inputFormat?: string;
  /**
   * @example
   * oss://test-bucket/test_tbl
   */
  location?: string;
  /**
   * @example
   * org.apache.hadoop.hive.ql.io.parquet.MapredParquetOutputFormat
   */
  outputFormat?: string;
  /**
   * @example
   * 123456789
   */
  owner?: string;
  parameters?: { [key: string]: string };
  /**
   * @example
   * org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe
   */
  serializationLibrary?: string;
  static names(): { [key: string]: string } {
    return {
      compressed: 'Compressed',
      inputFormat: 'InputFormat',
      location: 'Location',
      outputFormat: 'OutputFormat',
      owner: 'Owner',
      parameters: 'Parameters',
      serializationLibrary: 'SerializationLibrary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compressed: 'boolean',
      inputFormat: 'string',
      location: 'string',
      outputFormat: 'string',
      owner: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      serializationLibrary: 'string',
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Table extends $dara.Model {
  businessMetadata?: TableBusinessMetadata;
  /**
   * @example
   * 测试表
   */
  comment?: string;
  /**
   * @example
   * 1736852168000
   */
  createTime?: number;
  /**
   * @example
   * maxcompute-table:123456::test_project::test_tbl
   */
  id?: string;
  /**
   * @example
   * 1736852168000
   */
  modifyTime?: number;
  /**
   * @example
   * test_tbl
   */
  name?: string;
  /**
   * @example
   * maxcompute-project:123456::test_project
   */
  parentMetaEntityId?: string;
  partitionKeys?: string[];
  /**
   * @example
   * TABLE
   */
  tableType?: string;
  technicalMetadata?: TableTechnicalMetadata;
  static names(): { [key: string]: string } {
    return {
      businessMetadata: 'BusinessMetadata',
      comment: 'Comment',
      createTime: 'CreateTime',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      parentMetaEntityId: 'ParentMetaEntityId',
      partitionKeys: 'PartitionKeys',
      tableType: 'TableType',
      technicalMetadata: 'TechnicalMetadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessMetadata: TableBusinessMetadata,
      comment: 'string',
      createTime: 'number',
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      parentMetaEntityId: 'string',
      partitionKeys: { 'type': 'array', 'itemType': 'string' },
      tableType: 'string',
      technicalMetadata: TableTechnicalMetadata,
    };
  }

  validate() {
    if(this.businessMetadata && typeof (this.businessMetadata as any).validate === 'function') {
      (this.businessMetadata as any).validate();
    }
    if(Array.isArray(this.partitionKeys)) {
      $dara.Model.validateArray(this.partitionKeys);
    }
    if(this.technicalMetadata && typeof (this.technicalMetadata as any).validate === 'function') {
      (this.technicalMetadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

