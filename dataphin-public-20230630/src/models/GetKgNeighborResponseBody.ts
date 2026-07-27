// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKgNeighborResponseBodyDataEdgeListPropertyList extends $dara.Model {
  /**
   * @example
   * company_name
   */
  code?: string;
  /**
   * @example
   * STRING
   */
  dataType?: string;
  /**
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
  propertyList?: GetKgNeighborResponseBodyDataEdgeListPropertyList[];
  /**
   * @example
   * abc-xxx
   */
  relationId?: string;
  /**
   * @example
   * BELONG_TO
   */
  relationType?: string;
  /**
   * @example
   * abc-xxx
   */
  sourceEntityId?: string;
  /**
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
   * @example
   * company_name
   */
  code?: string;
  /**
   * @example
   * STRING
   */
  dataType?: string;
  /**
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
   * @example
   * abc-xxx
   */
  entityId?: string;
  /**
   * @example
   * Company
   */
  entityType?: string;
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
  edgeList?: GetKgNeighborResponseBodyDataEdgeList[];
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
   * @example
   * OK
   */
  code?: string;
  data?: GetKgNeighborResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  /**
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
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

