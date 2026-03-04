// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecognitionEntitiesResponseBodyEntitiesEntity extends $dara.Model {
  entityId?: string;
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
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
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
   * **Request ID**
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
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

