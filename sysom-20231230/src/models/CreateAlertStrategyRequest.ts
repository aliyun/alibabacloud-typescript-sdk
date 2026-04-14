// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlertStrategyRequestStrategy extends $dara.Model {
  clusters?: string[];
  destinations?: number[];
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  k8sLabel?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * strategy1
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  strategy?: CreateAlertStrategyRequestStrategy;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      k8sLabel: 'k8sLabel',
      name: 'name',
      strategy: 'strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      k8sLabel: 'boolean',
      name: 'string',
      strategy: CreateAlertStrategyRequestStrategy,
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

