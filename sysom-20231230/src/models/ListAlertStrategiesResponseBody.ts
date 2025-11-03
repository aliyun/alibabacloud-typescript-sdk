// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertStrategiesResponseBodyDataStrategy extends $dara.Model {
  clusters?: string[];
  items?: string[];
  static names(): { [key: string]: string } {
    return {
      clusters: 'clusters',
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': 'string' },
      items: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.clusters)) {
      $dara.Model.validateArray(this.clusters);
    }
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertStrategiesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1753669116286
   */
  createdAt?: string;
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
  k8sLabel?: boolean;
  /**
   * @example
   * strategy1
   */
  name?: string;
  strategy?: ListAlertStrategiesResponseBodyDataStrategy;
  /**
   * @example
   * 1880327028143673
   */
  uid?: string;
  /**
   * @example
   * 1753237017710
   */
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      enabled: 'enabled',
      id: 'id',
      k8sLabel: 'k8sLabel',
      name: 'name',
      strategy: 'strategy',
      uid: 'uid',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      enabled: 'boolean',
      id: 'number',
      k8sLabel: 'boolean',
      name: 'string',
      strategy: ListAlertStrategiesResponseBodyDataStrategy,
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

export class ListAlertStrategiesResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: ListAlertStrategiesResponseBodyData[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * c2f78a783f49457caba6bace6f6f79e4
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  /**
   * @example
   * 92
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAlertStrategiesResponseBodyData },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

