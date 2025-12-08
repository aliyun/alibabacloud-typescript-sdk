// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFaceEntitiesResponseBodyDataEntities extends $dara.Model {
  /**
   * @example
   * 1589203871832
   */
  createdAt?: number;
  /**
   * @example
   * default
   */
  dbName?: string;
  /**
   * @example
   * 222
   */
  entityId?: string;
  /**
   * @example
   * 3
   */
  faceCount?: number;
  labels?: string;
  /**
   * @example
   * 1589203871832
   */
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      dbName: 'DbName',
      entityId: 'EntityId',
      faceCount: 'FaceCount',
      labels: 'Labels',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      dbName: 'string',
      entityId: 'string',
      faceCount: 'number',
      labels: 'string',
      updatedAt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceEntitiesResponseBodyData extends $dara.Model {
  entities?: ListFaceEntitiesResponseBodyDataEntities[];
  /**
   * @example
   * 2
   */
  token?: string;
  /**
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      entities: 'Entities',
      token: 'Token',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entities: { 'type': 'array', 'itemType': ListFaceEntitiesResponseBodyDataEntities },
      token: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.entities)) {
      $dara.Model.validateArray(this.entities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceEntitiesResponseBody extends $dara.Model {
  data?: ListFaceEntitiesResponseBodyData;
  /**
   * @example
   * DA7CAFEB-0A37-4496-9CDF-E3DBB6309CB2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListFaceEntitiesResponseBodyData,
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

