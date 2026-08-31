// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecKgGremlinResponseBodyDataEdgeListProperties extends $dara.Model {
  /**
   * @remarks
   * The property code.
   * 
   * @example
   * company_name
   */
  code?: string;
  /**
   * @remarks
   * The property value.
   * 
   * @example
   * Alibaba
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

export class ExecKgGremlinResponseBodyDataEdgeList extends $dara.Model {
  /**
   * @remarks
   * The data ID of the relationship record.
   * 
   * @example
   * abcd-1235-xc
   */
  dataId?: string;
  /**
   * @remarks
   * The list of relationship record properties.
   */
  properties?: ExecKgGremlinResponseBodyDataEdgeListProperties[];
  /**
   * @remarks
   * The relationship type.
   * 
   * @example
   * BUY
   */
  relationType?: string;
  /**
   * @remarks
   * The data ID of the source entity record.
   * 
   * @example
   * abcd-1234
   */
  sourceEntityDataId?: string;
  /**
   * @remarks
   * The source entity type.
   * 
   * @example
   * Shop
   */
  sourceEntityType?: string;
  /**
   * @remarks
   * The data ID of the target entity record.
   * 
   * @example
   * abcd-2234
   */
  targetEntityDataId?: string;
  /**
   * @remarks
   * The target entity type.
   * 
   * @example
   * Product
   */
  targetEntityType?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      properties: 'Properties',
      relationType: 'RelationType',
      sourceEntityDataId: 'SourceEntityDataId',
      sourceEntityType: 'SourceEntityType',
      targetEntityDataId: 'TargetEntityDataId',
      targetEntityType: 'TargetEntityType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      properties: { 'type': 'array', 'itemType': ExecKgGremlinResponseBodyDataEdgeListProperties },
      relationType: 'string',
      sourceEntityDataId: 'string',
      sourceEntityType: 'string',
      targetEntityDataId: 'string',
      targetEntityType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.properties)) {
      $dara.Model.validateArray(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecKgGremlinResponseBodyDataNodeListProperties extends $dara.Model {
  /**
   * @remarks
   * The property code.
   * 
   * @example
   * company_name
   */
  code?: string;
  /**
   * @remarks
   * The property value.
   * 
   * @example
   * Alibaba
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

export class ExecKgGremlinResponseBodyDataNodeList extends $dara.Model {
  /**
   * @remarks
   * The data ID of the entity record.
   * 
   * @example
   * abcd-1234-xx
   */
  dataId?: string;
  /**
   * @remarks
   * The entity type.
   * 
   * @example
   * Product
   */
  entityType?: string;
  /**
   * @remarks
   * The list of entity record properties.
   */
  properties?: ExecKgGremlinResponseBodyDataNodeListProperties[];
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      entityType: 'EntityType',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      entityType: 'string',
      properties: { 'type': 'array', 'itemType': ExecKgGremlinResponseBodyDataNodeListProperties },
    };
  }

  validate() {
    if(Array.isArray(this.properties)) {
      $dara.Model.validateArray(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecKgGremlinResponseBodyDataRowListColumns extends $dara.Model {
  /**
   * @remarks
   * The property code.
   * 
   * @example
   * company_name
   */
  code?: string;
  /**
   * @remarks
   * The property value.
   * 
   * @example
   * Alibaba
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

export class ExecKgGremlinResponseBodyDataRowList extends $dara.Model {
  /**
   * @remarks
   * The list of columns in the row.
   */
  columns?: ExecKgGremlinResponseBodyDataRowListColumns[];
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': ExecKgGremlinResponseBodyDataRowListColumns },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecKgGremlinResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of edges.
   */
  edgeList?: ExecKgGremlinResponseBodyDataEdgeList[];
  /**
   * @remarks
   * The transformed execution statement.
   * 
   * @example
   * g.v().limit(100)
   */
  execQuery?: string;
  /**
   * @remarks
   * The list of nodes.
   */
  nodeList?: ExecKgGremlinResponseBodyDataNodeList[];
  /**
   * @remarks
   * The list of rows.
   */
  rowList?: ExecKgGremlinResponseBodyDataRowList[];
  static names(): { [key: string]: string } {
    return {
      edgeList: 'EdgeList',
      execQuery: 'ExecQuery',
      nodeList: 'NodeList',
      rowList: 'RowList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edgeList: { 'type': 'array', 'itemType': ExecKgGremlinResponseBodyDataEdgeList },
      execQuery: 'string',
      nodeList: { 'type': 'array', 'itemType': ExecKgGremlinResponseBodyDataNodeList },
      rowList: { 'type': 'array', 'itemType': ExecKgGremlinResponseBodyDataRowList },
    };
  }

  validate() {
    if(Array.isArray(this.edgeList)) {
      $dara.Model.validateArray(this.edgeList);
    }
    if(Array.isArray(this.nodeList)) {
      $dara.Model.validateArray(this.nodeList);
    }
    if(Array.isArray(this.rowList)) {
      $dara.Model.validateArray(this.rowList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecKgGremlinResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The query result.
   */
  data?: ExecKgGremlinResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The backend exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ExecKgGremlinResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

