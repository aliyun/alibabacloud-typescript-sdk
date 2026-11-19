// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKgNeighborResponseBodyDataEdgeListPropertyList extends $dara.Model {
  /**
   * @remarks
   * The code of the property.
   * 
   * @example
   * company_name
   */
  code?: string;
  /**
   * @remarks
   * The data type of the property. Valid values:
   * - STRING: String.
   * - INTEGER: Integer.
   * - FLOAT: Floating-point number.
   * - BOOLEAN: Boolean.
   * - DATE: Date.
   * - LIST: List.
   * 
   * @example
   * STRING
   */
  dataType?: string;
  /**
   * @remarks
   * The value of the property.
   * 
   * @example
   * Alibaba
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataType: 'DataType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataType: 'string',
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

export class GetKgNeighborResponseBodyDataEdgeList extends $dara.Model {
  /**
   * @remarks
   * The list of properties for the relation record.
   */
  propertyList?: GetKgNeighborResponseBodyDataEdgeListPropertyList[];
  /**
   * @remarks
   * The ID of the relation record.
   * 
   * @example
   * abc-xxx
   */
  relationId?: string;
  /**
   * @remarks
   * The code of the relation type.
   * 
   * @example
   * BELONG_TO
   */
  relationType?: string;
  /**
   * @remarks
   * The ID of the source entity.
   * 
   * @example
   * abc-xxx
   */
  sourceEntityId?: string;
  /**
   * @remarks
   * The ID of the target entity.
   * 
   * @example
   * abd-xxx
   */
  targetEntityId?: string;
  static names(): { [key: string]: string } {
    return {
      propertyList: 'PropertyList',
      relationId: 'RelationId',
      relationType: 'RelationType',
      sourceEntityId: 'SourceEntityId',
      targetEntityId: 'TargetEntityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyList: { 'type': 'array', 'itemType': GetKgNeighborResponseBodyDataEdgeListPropertyList },
      relationId: 'string',
      relationType: 'string',
      sourceEntityId: 'string',
      targetEntityId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.propertyList)) {
      $dara.Model.validateArray(this.propertyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKgNeighborResponseBodyDataNodeListPropertyList extends $dara.Model {
  /**
   * @remarks
   * The code of the property.
   * 
   * @example
   * company_name
   */
  code?: string;
  /**
   * @remarks
   * The data type of the property. Valid values:
   * - STRING: String.
   * - INTEGER: Integer.
   * - FLOAT: Floating-point number.
   * - BOOLEAN: Boolean.
   * - DATE: Date.
   * - LIST: List.
   * 
   * @example
   * STRING
   */
  dataType?: string;
  /**
   * @remarks
   * The value of the property.
   * 
   * @example
   * Alibaba
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataType: 'DataType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataType: 'string',
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

export class GetKgNeighborResponseBodyDataNodeList extends $dara.Model {
  /**
   * @remarks
   * The ID of the entity record.
   * 
   * @example
   * abc-xxx
   */
  entityId?: string;
  /**
   * @remarks
   * The code of the entity type.
   * 
   * @example
   * Company
   */
  entityType?: string;
  /**
   * @remarks
   * The list of properties for the entity record.
   */
  propertyList?: GetKgNeighborResponseBodyDataNodeListPropertyList[];
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      entityType: 'EntityType',
      propertyList: 'PropertyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      entityType: 'string',
      propertyList: { 'type': 'array', 'itemType': GetKgNeighborResponseBodyDataNodeListPropertyList },
    };
  }

  validate() {
    if(Array.isArray(this.propertyList)) {
      $dara.Model.validateArray(this.propertyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKgNeighborResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of edges.
   */
  edgeList?: GetKgNeighborResponseBodyDataEdgeList[];
  /**
   * @remarks
   * The list of nodes.
   */
  nodeList?: GetKgNeighborResponseBodyDataNodeList[];
  static names(): { [key: string]: string } {
    return {
      edgeList: 'EdgeList',
      nodeList: 'NodeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edgeList: { 'type': 'array', 'itemType': GetKgNeighborResponseBodyDataEdgeList },
      nodeList: { 'type': 'array', 'itemType': GetKgNeighborResponseBodyDataNodeList },
    };
  }

  validate() {
    if(Array.isArray(this.edgeList)) {
      $dara.Model.validateArray(this.edgeList);
    }
    if(Array.isArray(this.nodeList)) {
      $dara.Model.validateArray(this.nodeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKgNeighborResponseBody extends $dara.Model {
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
  data?: GetKgNeighborResponseBodyData;
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
   * Indicates whether the request is successful.
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
      data: GetKgNeighborResponseBodyData,
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

