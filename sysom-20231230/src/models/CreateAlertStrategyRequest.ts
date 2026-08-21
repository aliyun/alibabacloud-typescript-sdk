// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlertStrategyRequestStrategy extends $dara.Model {
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

export class CreateAlertStrategyRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * Specifies whether the alert policy is enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The Kubernetes label.
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
  strategy?: CreateAlertStrategyRequestStrategy;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      enabled: 'enabled',
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
      k8sLabel: 'boolean',
      name: 'string',
      strategy: CreateAlertStrategyRequestStrategy,
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

