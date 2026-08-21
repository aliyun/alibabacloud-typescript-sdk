// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAlertStrategyRequestStrategy extends $dara.Model {
  /**
   * @remarks
   * The collection of clusters for which alerts are received.
   */
  clusters?: string[];
  /**
   * @remarks
   * The alert contacts.
   */
  destinations?: number[];
  /**
   * @remarks
   * The collection of anomaly items for which alerts are received.
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

export class UpdateAlertStrategyRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * Specifies whether the alert policy is enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The ID of the alert policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The Kubernetes labels.
   */
  k8sLabel?: boolean;
  /**
   * @remarks
   * The Policy Name of the alerting policy.
   * 
   * This parameter is required.
   * 
   * @example
   * strategy1
   */
  name?: string;
  /**
   * @remarks
   * The details of the alert policy.
   * 
   * This parameter is required.
   */
  strategy?: UpdateAlertStrategyRequestStrategy;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      enabled: 'enabled',
      id: 'id',
      k8sLabel: 'k8sLabel',
      name: 'name',
      strategy: 'strategy',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      enabled: 'boolean',
      id: 'number',
      k8sLabel: 'boolean',
      name: 'string',
      strategy: UpdateAlertStrategyRequestStrategy,
      xSysomInvokeSource: 'string',
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

