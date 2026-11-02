// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID for renewal.
   * 
   * Only upfront instances whose InstanceResourceType is set to EnsInstance are supported. Pay-as-you-go instances cannot be renewed.
   * 
   * This parameter is required.
   * 
   * @example
   * i-56789acfmxazb4p****
   */
  instanceId?: string;
  /**
   * @remarks
   * The renewal period of the subscription instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      period: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

