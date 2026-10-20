// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance that you want to renew.
   * 
   * Only subscription instances whose InstanceResourceType is EnsInstance are supported. Pay-as-you-go instances cannot be renewed.
   * 
   * This parameter is required.
   * 
   * @example
   * i-56789acfmxazb4p****
   */
  instanceId?: string;
  /**
   * @remarks
   * The subscription renewal duration.
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

