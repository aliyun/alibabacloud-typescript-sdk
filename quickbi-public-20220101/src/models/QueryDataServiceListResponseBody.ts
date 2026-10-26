// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDataServiceListResponseBodyResultDataContentFilter extends $dara.Model {
  /**
   * @remarks
   * Combined conditions.
   */
  filters?: { [key: string]: any }[];
  /**
   * @remarks
   * Logical relationship between multiple SQL text keywords.
   * 
   * - **or**: or
   * - **and**: and
   * 
   * @example
   * and
   */
  logicalOperator?: string;
  /**
   * @remarks
   * Type.
   * 
   * - basic: basic
   * - combined: complex
   * 
   * @example
   * basic
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      logicalOperator: 'LogicalOperator',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      logicalOperator: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceListResponseBodyResultDataContentReturnFieldsField extends $dara.Model {
  /**
   * @remarks
   * Display name in the cube model (can be in Chinese or English).
   * 
   * @example
   * date(year)
   */
  caption?: string;
  /**
   * @remarks
   * The corresponding physical field name.
   * 
   * @example
   * shid_star
   */
  column?: string;
  /**
   * @remarks
   * Data type.
   * 
   * - number: numeric
   * - string: string
   * - date: date
   * - datetime: datetime
   * - time: time
   * - geographic: geographic
   * - boolean: boolean
   * - url: URL
   * 
   * @example
   * datetime
   */
  dataType?: string;
  /**
   * @remarks
   * Unique identifier for the original field.
   * 
   * @example
   * 1c1f88cb7d
   */
  fid?: string;
  /**
   * @remarks
   * This attribute is included for date and geographic dimensions, indicating the supported granularity.
   * 
   * @example
   * yearRegion
   */
  granularity?: string;
  /**
   * @remarks
   * Unique name of the cube field, mainly used for unique positioning in the returned result.
   * 
   * @example
   * sss
   */
  name?: string;
  /**
   * @remarks
   * Type.
   * 
   * - Dimension: Dimension
   * - Measure: Measure
   * 
   * @example
   * dimension
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
      column: 'Column',
      dataType: 'DataType',
      fid: 'Fid',
      granularity: 'Granularity',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caption: 'string',
      column: 'string',
      dataType: 'string',
      fid: 'string',
      granularity: 'string',
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

export class QueryDataServiceListResponseBodyResultDataContentReturnFields extends $dara.Model {
  /**
   * @remarks
   * Aggregation operator. For example, SUM, AVG, and MAX.
   * 
   * @example
   * SUM
   */
  aggregator?: string;
  /**
   * @remarks
   * Field parameter name.
   * 
   * @example
   * s_number
   */
  alias?: string;
  /**
   * @remarks
   * Remark for the returned field.
   * 
   * @example
   * Theme Configuration already exists
   */
  desc?: string;
  /**
   * @remarks
   * Corresponding cube field information.
   */
  field?: QueryDataServiceListResponseBodyResultDataContentReturnFieldsField;
  /**
   * @remarks
   * Sorting.
   * 
   * - asc: Ascending
   * - desc: Descending
   * - no: No sorting
   * 
   * @example
   * no
   */
  orderby?: string;
  static names(): { [key: string]: string } {
    return {
      aggregator: 'Aggregator',
      alias: 'Alias',
      desc: 'Desc',
      field: 'Field',
      orderby: 'Orderby',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregator: 'string',
      alias: 'string',
      desc: 'string',
      field: QueryDataServiceListResponseBodyResultDataContentReturnFieldsField,
      orderby: 'string',
    };
  }

  validate() {
    if(this.field && typeof (this.field as any).validate === 'function') {
      (this.field as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceListResponseBodyResultDataContent extends $dara.Model {
  /**
   * @remarks
   * Cube identifier ID.
   * 
   * @example
   * 56f9f34a-bdba-496a-91a3-a18b1ff73a80
   */
  cubeId?: string;
  /**
   * @remarks
   * Dataset name.
   * 
   * @example
   * test data source
   */
  cubeName?: string;
  /**
   * @remarks
   * Detail or Summary
   * 
   * @example
   * true
   */
  detail?: boolean;
  /**
   * @remarks
   * Request parameter information.
   */
  filter?: QueryDataServiceListResponseBodyResultDataContentFilter;
  /**
   * @remarks
   * Return information.
   */
  returnFields?: QueryDataServiceListResponseBodyResultDataContentReturnFields[];
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      cubeName: 'CubeName',
      detail: 'Detail',
      filter: 'Filter',
      returnFields: 'ReturnFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      cubeName: 'string',
      detail: 'boolean',
      filter: QueryDataServiceListResponseBodyResultDataContentFilter,
      returnFields: { 'type': 'array', 'itemType': QueryDataServiceListResponseBodyResultDataContentReturnFields },
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    if(Array.isArray(this.returnFields)) {
      $dara.Model.validateArray(this.returnFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceListResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * The model of the data service in JSON format.
   */
  content?: QueryDataServiceListResponseBodyResultDataContent;
  /**
   * @remarks
   * Creator ID.
   * 
   * @example
   * 7cb94cd48701
   */
  creatorId?: string;
  /**
   * @remarks
   * Creator\\"s name.
   * 
   * @example
   * zhangsan
   */
  creatorName?: string;
  /**
   * @remarks
   * Cube identifier ID.
   * 
   * @example
   * d14e7448-0eb3-40d3-9375-4afef8de29fd
   */
  cubeId?: string;
  /**
   * @remarks
   * Dataset name.
   * 
   * @example
   * test data source
   */
  cubeName?: string;
  /**
   * @remarks
   * Description
   * 
   * @example
   * test
   */
  desc?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2023-05-18 14:00:02.0
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 2023-03-21 18:02:36
   */
  gmtModified?: string;
  /**
   * @remarks
   * Modifier\\"s userId.
   * 
   * @example
   * 7cb94cd48701
   */
  modifierId?: string;
  /**
   * @remarks
   * Modifier\\"s name
   * 
   * @example
   * zhangsan
   */
  modifierName?: string;
  /**
   * @remarks
   * Data service name.
   * 
   * @example
   * test report
   */
  name?: string;
  /**
   * @remarks
   * Owner ID
   * 
   * @example
   * 862801339
   */
  ownerId?: string;
  /**
   * @remarks
   * Owner\\"s name
   * 
   * @example
   * lisi
   */
  ownerName?: string;
  /**
   * @remarks
   * Unique ID of the data service.
   * 
   * @example
   * dtsuq3i31f5j8v848b
   */
  sid?: string;
  /**
   * @remarks
   * Workspace ID.
   * 
   * @example
   * 7350a155-0e94-4c6c-8620-57bbec38****
   */
  workspaceId?: string;
  /**
   * @remarks
   * Workspace name.
   * 
   * @example
   * test workspace
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      creatorId: 'CreatorId',
      creatorName: 'CreatorName',
      cubeId: 'CubeId',
      cubeName: 'CubeName',
      desc: 'Desc',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      modifierId: 'ModifierId',
      modifierName: 'ModifierName',
      name: 'Name',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      sid: 'Sid',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: QueryDataServiceListResponseBodyResultDataContent,
      creatorId: 'string',
      creatorName: 'string',
      cubeId: 'string',
      cubeName: 'string',
      desc: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      modifierId: 'string',
      modifierName: 'string',
      name: 'string',
      ownerId: 'string',
      ownerName: 'string',
      sid: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceListResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Data service information.
   */
  data?: QueryDataServiceListResponseBodyResultData[];
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of records per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of rows.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryDataServiceListResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDataServiceListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 78C1AA2D-9201-599E-A0BA-6FC462E57A95
   */
  requestId?: string;
  /**
   * @remarks
   * Return result.
   */
  result?: QueryDataServiceListResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Value range:
   * - true: The request was successful 
   * - false: The request failed
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryDataServiceListResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

