// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Entity } from "./Entity";


export class ListLineageResponseBodyDataDataEntityListRelationList extends $dara.Model {
  /**
   * @remarks
   * The data channel. Valid values:
   * 
   * - **FIRST_PARTY**: DataWorks platform data.
   * - **THIRD_PARTY**: User-registered data.
   * 
   * @example
   * THIRD_PARTY
   */
  channel?: string;
  /**
   * @remarks
   * The data source.
   * 
   * @example
   * maxcompute,mysql
   */
  datasource?: string;
  /**
   * @remarks
   * The unique ID of the relation.
   * 
   * @example
   * aaabbccddguid
   */
  guid?: string;
  /**
   * @remarks
   * The task type, which describes the relationship type between entities. For example, computed by SQL, mapped by report fields, or defined by API.
   * 
   * @example
   * sql
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      datasource: 'Datasource',
      guid: 'Guid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      datasource: 'string',
      guid: 'string',
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

export class ListLineageResponseBodyDataDataEntityList extends $dara.Model {
  /**
   * @remarks
   * The time when the lineage was created.
   * 
   * @example
   * 1686215809269
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The entity information.
   */
  entity?: Entity;
  /**
   * @remarks
   * The array of relation structures.
   */
  relationList?: ListLineageResponseBodyDataDataEntityListRelationList[];
  static names(): { [key: string]: string } {
    return {
      createTimestamp: 'CreateTimestamp',
      entity: 'Entity',
      relationList: 'RelationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimestamp: 'number',
      entity: Entity,
      relationList: { 'type': 'array', 'itemType': ListLineageResponseBodyDataDataEntityListRelationList },
    };
  }

  validate() {
    if(this.entity && typeof (this.entity as any).validate === 'function') {
      (this.entity as any).validate();
    }
    if(Array.isArray(this.relationList)) {
      $dara.Model.validateArray(this.relationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLineageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The array of entity structures.
   */
  dataEntityList?: ListLineageResponseBodyDataDataEntityList[];
  /**
   * @remarks
   * The pagination token that specifies the starting point of the next read operation.
   * 
   * @example
   * nextTokenFromRequest-xxxsd-ff
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      dataEntityList: 'DataEntityList',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataEntityList: { 'type': 'array', 'itemType': ListLineageResponseBodyDataDataEntityList },
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataEntityList)) {
      $dara.Model.validateArray(this.dataEntityList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLineageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response structure.
   */
  data?: ListLineageResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 1010040007
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * qualifiedName should be in format as entity-table.entity-guid
   */
  errorMessage?: string;
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
   * The request ID. Used to locate logs and troubleshoot issues.
   * 
   * @example
   * 64B-587A-8CED-969E1973887FXXX-TT
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * - true: The request was successful.
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListLineageResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
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

