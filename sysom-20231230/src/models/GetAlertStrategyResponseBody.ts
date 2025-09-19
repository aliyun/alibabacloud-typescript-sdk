// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlertStrategyResponseBodyDataStrategy extends $dara.Model {
  clusters?: string[];
  items?: any;
  static names(): { [key: string]: string } {
    return {
      clusters: 'clusters',
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': 'string' },
      items: 'any',
    };
  }

  validate() {
    if(Array.isArray(this.clusters)) {
      $dara.Model.validateArray(this.clusters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertStrategyResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1751520976660
   */
  createdAt?: number;
  /**
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * strategy1
   */
  name?: string;
  strategy?: GetAlertStrategyResponseBodyDataStrategy;
  /**
   * @example
   * 1222933234714935
   */
  uid?: string;
  /**
   * @example
   * 1751254826285
   */
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      enabled: 'enabled',
      id: 'id',
      name: 'name',
      strategy: 'strategy',
      uid: 'uid',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      enabled: 'boolean',
      id: 'number',
      name: 'string',
      strategy: GetAlertStrategyResponseBodyDataStrategy,
      uid: 'string',
      updatedAt: 'number',
    };
  }

  validate() {
    if(this.strategy && typeof (this.strategy as any).validate === 'function') {
      (this.strategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertStrategyResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetAlertStrategyResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAlertStrategyResponseBodyData,
      message: 'string',
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

