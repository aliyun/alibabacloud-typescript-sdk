// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDataServiceListResponseBodyResultDataContentFilter extends $dara.Model {
  /**
   * @remarks
   * The combined conditions.
   * 
   * @example
   * [{
   * 	"field": {
   * 		"fid": "1c1f88cb7d",
   * 		"granularity": "yearRegion",
   * 		"dataType": "datetime",
   * 		"column": "s_date",
   * 		"caption": "Date (year)",
   * 		"type": "dimension"
   * 	},
   * 	"defaultValue": ["2024"],
   * 	"alias": "s_date",
   * 	"type": "basic",
   * 	"operator": "equal-to",
   * 	"essential": true
   * }]
   */
  filters?: { [key: string]: any }[];
  /**
   * @remarks
   * The logical relationship between multiple SQL text keywords.
   * 
   * - **or**: OR.
   * - **and**: AND.
   * 
   * @example
   * and
   */
  logicalOperator?: string;
  /**
   * @remarks
   * The type.
   * 
   * - basic: Basic.
   * - combined: Complex.
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
   * The display name in the cube model, which can be in Chinese or English.
   * 
   * @example
   * Date (year)
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
   * The data type.
   * 
   * - number: Number.
   * - string: String.
   * - date: Date.
   * - datetime: Datetime.
   * - time: Time.
   * - geographic: Geographic.
   * - boolean: Boolean.
   * - url: URL.
   * 
   * @example
   * datetime
   */
  dataType?: string;
  /**
   * @remarks
   * The unique ID of the original field.
   * 
   * @example
   * 1c1f88cb7d
   */
  fid?: string;
  /**
   * @remarks
   * The supported granularity. This property is included in date and geographic dimensions.
   * 
   * @example
   * yearRegion
   */
  granularity?: string;
  /**
   * @remarks
   * The unique name of the cube field, which is primarily used to uniquely locate the returned result.
   * 
   * @example
   * sss
   */
  name?: string;
  /**
   * @remarks
   * The type.
   * 
   * - Dimension: Dimension.
   * - Measure: Measure.
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
   * The aggregate operation (aggregation), such as SUM, AVG, and MAX.
   * 
   * @example
   * SUM
   */
  aggregator?: string;
  /**
   * @remarks
   * The field parameter name.
   * 
   * @example
   * s_number
   */
  alias?: string;
  /**
   * @remarks
   * The description of the returned field.
   * 
   * @example
   * The theme configuration already exists
   */
  desc?: string;
  /**
   * @remarks
   * The corresponding cube field information.
   */
  field?: QueryDataServiceListResponseBodyResultDataContentReturnFieldsField;
  /**
   * @remarks
   * The sort order.
   * 
   * - asc: Ascending.
   * - desc: Descending.
   * - no: Unsorted.
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
   * The cube ID.
   * 
   * @example
   * 56f9f34a-bdba-496a-91a3-a18b1ff73a80
   */
  cubeId?: string;
  /**
   * @remarks
   * The name of the dataset.
   * 
   * @example
   * Test dataset
   */
  cubeName?: string;
  /**
   * @remarks
   * The detail or aggregate type.
   * 
   * @example
   * true
   */
  detail?: boolean;
  /**
   * @remarks
   * The request parameter information.
   */
  filter?: QueryDataServiceListResponseBodyResultDataContentFilter;
  /**
   * @remarks
   * The returned information.
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
   * The ID of the creator.
   * 
   * @example
   * 7cb94cd48701
   */
  creatorId?: string;
  /**
   * @remarks
   * The name of the creator.
   * 
   * @example
   * Zhang Zilong
   */
  creatorName?: string;
  /**
   * @remarks
   * The cube ID.
   * 
   * @example
   * d14e7448-0eb3-40d3-9375-4afef8de29fd
   */
  cubeId?: string;
  /**
   * @remarks
   * The name of the dataset.
   * 
   * @example
   * Test dataset
   */
  cubeName?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * For testing
   */
  desc?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2023-05-18 14:00:02.0
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2023-03-21 18:02:36
   */
  gmtModified?: string;
  /**
   * @remarks
   * The user ID of the modifier.
   * 
   * @example
   * 7cb94cd48701
   */
  modifierId?: string;
  /**
   * @remarks
   * The name of the modifier.
   * 
   * @example
   * Zhang Zilong
   */
  modifierName?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * Test report
   */
  name?: string;
  /**
   * @remarks
   * The ID of the owner.
   * 
   * @example
   * 862801339
   */
  ownerId?: string;
  /**
   * @remarks
   * The name of the owner.
   * 
   * @example
   * Li Si
   */
  ownerName?: string;
  /**
   * @remarks
   * The unique ID of the data service.
   * 
   * @example
   * dtsuq3i31f5j8v848b
   */
  sid?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 7350a155-0e94-4c6c-8620-57bbec38****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * Test workspace
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
   * The data service information.
   */
  data?: QueryDataServiceListResponseBodyResultData[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of rows.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @remarks
   * The total number of pages.
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
   * The request ID.
   * 
   * @example
   * 78C1AA2D-9201-599E-A0BA-6FC462E57A95
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: QueryDataServiceListResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - true: The request is successful.
   * - false: The request fails.
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

