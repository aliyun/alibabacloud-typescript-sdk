// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecKgCypherResponseBodyDataEdgeListProperties extends $dara.Model {
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

export class ExecKgCypherResponseBodyDataEdgeList extends $dara.Model {
  /**
   * @remarks
   * The data ID of the relationship record.
   * 
   * @example
   * bcd-456
   */
  dataId?: string;
  /**
   * @remarks
   * The list of relationship record properties.
   */
  properties?: ExecKgCypherResponseBodyDataEdgeListProperties[];
  /**
   * @remarks
   * The relationship type.
   * 
   * @example
   * SALE
   */
  relationType?: string;
  /**
   * @remarks
   * The data ID of the source entity record.
   * 
   * @example
   * source-123
   */
  sourceEntityDataId?: string;
  /**
   * @remarks
   * The source entity type.
   * 
   * @example
   * Product
   */
  sourceEntityType?: string;
  /**
   * @remarks
   * The data ID of the target entity record.
   * 
   * @example
   * target-345
   */
  targetEntityDataId?: string;
  /**
   * @remarks
   * The target entity type.
   * 
   * @example
   * Shop
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
      properties: { 'type': 'array', 'itemType': ExecKgCypherResponseBodyDataEdgeListProperties },
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

export class ExecKgCypherResponseBodyDataNodeListProperties extends $dara.Model {
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

export class ExecKgCypherResponseBodyDataNodeList extends $dara.Model {
  /**
   * @remarks
   * The data ID of the entity record.
   * 
   * @example
   * abc-123
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
  properties?: ExecKgCypherResponseBodyDataNodeListProperties[];
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
      properties: { 'type': 'array', 'itemType': ExecKgCypherResponseBodyDataNodeListProperties },
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

export class ExecKgCypherResponseBodyDataRowListColumns extends $dara.Model {
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

export class ExecKgCypherResponseBodyDataRowList extends $dara.Model {
  /**
   * @remarks
   * The list of columns in the row.
   */
  columns?: ExecKgCypherResponseBodyDataRowListColumns[];
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': ExecKgCypherResponseBodyDataRowListColumns },
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

export class ExecKgCypherResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of edges.
   */
  edgeList?: ExecKgCypherResponseBodyDataEdgeList[];
  /**
   * @remarks
   * The transformed execution statement.
   * 
   * @example
   * MATCH p=()-[:Product]->() RETURN p, count(*) LIMIT 25
   */
  executeCypher?: string;
  /**
   * @remarks
   * The list of nodes.
   */
  nodeList?: ExecKgCypherResponseBodyDataNodeList[];
  /**
   * @remarks
   * The list of rows.
   */
  rowList?: ExecKgCypherResponseBodyDataRowList[];
  static names(): { [key: string]: string } {
    return {
      edgeList: 'EdgeList',
      executeCypher: 'ExecuteCypher',
      nodeList: 'NodeList',
      rowList: 'RowList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edgeList: { 'type': 'array', 'itemType': ExecKgCypherResponseBodyDataEdgeList },
      executeCypher: 'string',
      nodeList: { 'type': 'array', 'itemType': ExecKgCypherResponseBodyDataNodeList },
      rowList: { 'type': 'array', 'itemType': ExecKgCypherResponseBodyDataRowList },
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

export class ExecKgCypherResponseBody extends $dara.Model {
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
  data?: ExecKgCypherResponseBodyData;
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
      data: ExecKgCypherResponseBodyData,
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

