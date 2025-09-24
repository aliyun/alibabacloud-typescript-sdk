// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * ASKJHKLASJHAFSLKJH
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the instance
   * 
   * This parameter is required.
   * 
   * @example
   * rm-skjdhaskjdh
   */
  instanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The code of the service to which the instance belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The duration of the subscription renewal. Unit: months. Valid values:
   * 
   * *   1 to 9
   * *   12
   * *   24
   * *   36
   * 
   * This parameter is required.
   * 
   * @example
   * 6
   */
  renewPeriod?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      renewPeriod: 'RenewPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      ownerId: 'number',
      productCode: 'string',
      productType: 'string',
      renewPeriod: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

