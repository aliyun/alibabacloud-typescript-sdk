// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecognitionEntitiesResponseBodyEntitiesEntity extends $dara.Model {
  /**
   * @example
   * **************544cb84754************
   */
  entityId?: string;
  /**
   * @example
   * {}
   */
  entityInfo?: string;
  entityName?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      entityInfo: 'EntityInfo',
      entityName: 'EntityName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      entityInfo: 'string',
      entityName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecognitionEntitiesResponseBodyEntities extends $dara.Model {
  entity?: ListRecognitionEntitiesResponseBodyEntitiesEntity[];
  static names(): { [key: string]: string } {
    return {
      entity: 'Entity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entity: { 'type': 'array', 'itemType': ListRecognitionEntitiesResponseBodyEntitiesEntity },
    };
  }

  validate() {
    if(Array.isArray(this.entity)) {
      $dara.Model.validateArray(this.entity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecognitionEntitiesResponseBody extends $dara.Model {
  entities?: ListRecognitionEntitiesResponseBodyEntities;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      entities: 'Entities',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entities: ListRecognitionEntitiesResponseBodyEntities,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.entities && typeof (this.entities as any).validate === 'function') {
      (this.entities as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

