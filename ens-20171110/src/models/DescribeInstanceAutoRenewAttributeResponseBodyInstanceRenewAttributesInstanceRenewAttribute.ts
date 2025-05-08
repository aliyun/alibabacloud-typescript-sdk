// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceAutoRenewAttributeResponseBodyInstanceRenewAttributesInstanceRenewAttribute extends $dara.Model {
  /**
   * @remarks
   * The renewal type of the instance.
   * 
   * *   **true**: enables auto-renewal.
   * *   **false**: disables auto-renewal.
   * 
   * @example
   * false
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The unit of the auto-renewal period.
   * 
   * @example
   * 0
   */
  duration?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-5ci7l7k1m9m2zmhp4iw3o****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewal: 'AutoRenewal',
      duration: 'Duration',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewal: 'boolean',
      duration: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

