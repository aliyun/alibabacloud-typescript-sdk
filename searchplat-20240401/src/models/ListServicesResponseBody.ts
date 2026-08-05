// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServicesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The billing method.
   */
  chargeWay?: string[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 33
   */
  description?: string;
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * {
   *             "maxTokens": 512
   *         }
   */
  meta?: { [key: string]: any };
  /**
   * @remarks
   * The model type.
   * 
   * @example
   * deployment
   */
  modelType?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * 文本向量化
   */
  name?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * ops-text-embedding-001
   */
  serviceId?: string;
  /**
   * @remarks
   * The service type.
   * 
   * @example
   * text-embedding
   */
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      chargeWay: 'chargeWay',
      description: 'description',
      meta: 'meta',
      modelType: 'modelType',
      name: 'name',
      serviceId: 'serviceId',
      serviceType: 'serviceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeWay: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      modelType: 'string',
      name: 'string',
      serviceId: 'string',
      serviceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chargeWay)) {
      $dara.Model.validateArray(this.chargeWay);
    }
    if(this.meta) {
      $dara.Model.validateMap(this.meta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2423C841-91C4-5E51-B296-590D367967FC
   */
  requestId?: string;
  /**
   * @remarks
   * The task execution result.
   */
  result?: ListServicesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListServicesResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

