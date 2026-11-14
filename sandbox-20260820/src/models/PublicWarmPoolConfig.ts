// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WarmPoolCapacityPolicy } from "./WarmPoolCapacityPolicy";


export class PublicWarmPoolConfig extends $dara.Model {
  /**
   * @remarks
   * The warm pool capacity policy, which includes the base target capacity and optional scheduling rules.
   */
  capacityPolicy?: WarmPoolCapacityPolicy;
  /**
   * @remarks
   * Indicates whether the warm pool is being deleted.
   */
  deleting?: boolean;
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
      capacityPolicy: 'capacityPolicy',
      deleting: 'deleting',
      teamID: 'teamID',
      templateID: 'templateID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityPolicy: WarmPoolCapacityPolicy,
      deleting: 'boolean',
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

