// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WarmPoolCapacityPolicy } from "./WarmPoolCapacityPolicy";


export class PublicWarmPool extends $dara.Model {
  /**
   * @remarks
   * The most recent observation time of the capacity status.
   * 
   * @example
   * 2026-12-01T00:00:00Z
   */
  capacityObservedTime?: string;
  /**
   * @remarks
   * The capacity policy of the warm pool, which includes the base target capacity and optional scheduled rules.
   */
  capacityPolicy?: WarmPoolCapacityPolicy;
  /**
   * @remarks
   * The masked text of the current background error. This value is null if no error occurs.
   * 
   * @example
   * SourceNotFound: source template does not exist
   */
  currentError?: string;
  /**
   * @remarks
   * Indicates whether the warm pool is being deleted.
   */
  deleting?: boolean;
  /**
   * @remarks
   * The number of sandboxes that are currently being prepared.
   * 
   * @example
   * 0
   */
  preparing?: number;
  /**
   * @remarks
   * The number of sandboxes that are currently ready.
   * 
   * @example
   * 0
   */
  ready?: number;
  /**
   * @remarks
   * The number of sandboxes that are currently being released.
   * 
   * @example
   * 0
   */
  releasing?: number;
  /**
   * @remarks
   * Indicates whether the source of the associated template is unavailable.
   */
  sourceUnavailable?: boolean;
  /**
   * @remarks
   * The current target capacity.
   * 
   * @example
   * 0
   */
  targetCapacity?: number;
  /**
   * @remarks
   * The team ID.
   * 
   * @example
   * team-example1234567890
   */
  teamID?: string;
  /**
   * @remarks
   * The template ID, which specifies the template associated with the warm pool.
   * 
   * @example
   * tpl-example1234567890
   */
  templateID?: string;
  static names(): { [key: string]: string } {
    return {
      capacityObservedTime: 'capacityObservedTime',
      capacityPolicy: 'capacityPolicy',
      currentError: 'currentError',
      deleting: 'deleting',
      preparing: 'preparing',
      ready: 'ready',
      releasing: 'releasing',
      sourceUnavailable: 'sourceUnavailable',
      targetCapacity: 'targetCapacity',
      teamID: 'teamID',
      templateID: 'templateID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityObservedTime: 'string',
      capacityPolicy: WarmPoolCapacityPolicy,
      currentError: 'string',
      deleting: 'boolean',
      preparing: 'number',
      ready: 'number',
      releasing: 'number',
      sourceUnavailable: 'boolean',
      targetCapacity: 'number',
      teamID: 'string',
      templateID: 'string',
    };
  }

  validate() {
    if(this.capacityPolicy && typeof (this.capacityPolicy as any).validate === 'function') {
      (this.capacityPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

