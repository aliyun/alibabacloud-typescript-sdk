// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TravelStandardRelateQueryResponseBodyModuleReserveBindEntityList extends $dara.Model {
  /**
   * @example
   * 667104628
   */
  entityId?: string;
  entityName?: string;
  /**
   * @example
   * 3
   */
  entityType?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'entity_id',
      entityName: 'entity_name',
      entityType: 'entity_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      entityName: 'string',
      entityType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TravelStandardRelateQueryResponseBodyModule extends $dara.Model {
  reserveBindEntityList?: TravelStandardRelateQueryResponseBodyModuleReserveBindEntityList[];
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      reserveBindEntityList: 'reserve_bind_entity_list',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reserveBindEntityList: { 'type': 'array', 'itemType': TravelStandardRelateQueryResponseBodyModuleReserveBindEntityList },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.reserveBindEntityList)) {
      $dara.Model.validateArray(this.reserveBindEntityList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TravelStandardRelateQueryResponseBody extends $dara.Model {
  message?: string;
  module?: TravelStandardRelateQueryResponseBodyModule;
  /**
   * @example
   * 407543AF-2BD9-5890-BD92-9D1AB7218B27
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
  resultCode?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 210bcc3a16583004579056128d33d7
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      resultCode: 'resultCode',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      module: TravelStandardRelateQueryResponseBodyModule,
      requestId: 'string',
      resultCode: 'number',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

