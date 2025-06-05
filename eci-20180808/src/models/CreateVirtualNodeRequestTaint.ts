// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVirtualNodeRequestTaint extends $dara.Model {
  /**
   * @remarks
   * The effect of the taint. Valid values:
   * 
   * *   NoSchedule: does not schedule pods to run on the VNodes that have the taint.
   * *   NoExecute: evicts existing pods on the VNodes that have the taint while not scheduling pods to run on the VNodes.
   * *   PreferNoSchedule: avoids scheduling pods to run on the VNodes that have the taint.
   * 
   * @example
   * NoSchedule
   */
  effect?: string;
  /**
   * @remarks
   * The key of the taint.
   * 
   * @example
   * testKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the taint.
   * 
   * @example
   * testValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      effect: 'Effect',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

