// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertStrategiesResponseBodyDataStrategy extends $dara.Model {
  /**
   * @remarks
   * The collection of clusters for which alerts are received.
   */
  clusters?: string[];
  destinations?: number[];
  /**
   * @remarks
   * 接收告警的异常项列表
   */
  items?: string[];
  static names(): { [key: string]: string } {
    return {
      clusters: 'clusters',
      destinations: 'destinations',
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': 'string' },
      destinations: { 'type': 'array', 'itemType': 'number' },
      items: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.clusters)) {
      $dara.Model.validateArray(this.clusters);
    }
    if(Array.isArray(this.destinations)) {
      $dara.Model.validateArray(this.destinations);
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
   * @remarks
   * The creation time.
   * 
   * @example
   * 1753669116286
   */
  createdAt?: string;
  /**
   * @remarks
   * Indicates whether the alert policy is enabled.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * 1
   */
  id?: number;
  k8sLabel?: boolean;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * strategy1
   */
  name?: string;
  /**
   * @remarks
   * The alert policy details.
   */
  strategy?: ListAlertStrategiesResponseBodyDataStrategy;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1880327028143673
   */
  uid?: string;
  /**
   * @remarks
   * The update time.
   * 
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
   * @remarks
   * The status code.
   * - If `code == Success`, the authorization is successful.
   * - Other status codes indicate that the authorization has failed. Check the `message` field for the detailed fault information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: ListAlertStrategiesResponseBodyData[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The error message.
   * - If `code == Success`, this field is empty.
   * - Otherwise, this field contains the error information for the request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The pagination token for the next request.
   * 
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
   * @remarks
   * The total number of records.
   * 
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

