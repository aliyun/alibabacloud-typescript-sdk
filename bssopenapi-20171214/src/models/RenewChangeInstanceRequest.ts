// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewChangeInstanceRequestParameter extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Bandwidth
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * disk
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

export class RenewChangeInstanceRequest extends $dara.Model {
  /**
   * @example
   * JASIOFKVNVIXXXXXX
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rm-skjdhaskjdh
   */
  instanceId?: string;
  ownerId?: number;
  parameter?: RenewChangeInstanceRequestParameter[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  renewPeriod?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      parameter: 'Parameter',
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
      parameter: { 'type': 'array', 'itemType': RenewChangeInstanceRequestParameter },
      productCode: 'string',
      productType: 'string',
      renewPeriod: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.parameter)) {
      $dara.Model.validateArray(this.parameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

