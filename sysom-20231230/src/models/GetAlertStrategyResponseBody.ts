// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlertStrategyResponseBodyDataStrategy extends $dara.Model {
  /**
   * @remarks
   * The collection of clusters for which alerts are received.
   */
  clusters?: string[];
  /**
   * @remarks
   * The alert contacts.
   */
  destinations?: any;
  /**
   * @remarks
   * The list of anomaly items for which alerts are received.
   * 
   * @example
   * Node CPU utilization detection
   */
  items?: any;
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
      destinations: 'any',
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
   * @remarks
   * The creation time.
   * 
   * @example
   * 1751520976660
   */
  createdAt?: number;
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
   * The alert policy ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The Kubernetes label.
   */
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
  strategy?: GetAlertStrategyResponseBodyDataStrategy;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1222933234714935
   */
  uid?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1751254826285
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
      createdAt: 'number',
      enabled: 'boolean',
      id: 'number',
      k8sLabel: 'boolean',
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
   * @remarks
   * The status code.
   * - `code == Success` indicates that the authorization is successful.
   * - Other status codes indicate that the authorization failed. If the authorization fails, check the `message` field for the detailed fault information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetAlertStrategyResponseBodyData;
  /**
   * @remarks
   * The error message.
   * - If `code == Success`, this field is empty.
   * - Otherwise, this field contains the request error information.
   * 
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

