// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSubscriptionInstanceRequestSourceEndpoint extends $dara.Model {
  /**
   * @remarks
   * The type of the source instance. Valid values: **MySQL**, **PolarDB**, **DRDS**, and **Oracle**.
   * 
   * >  Default value: **MySQL**.
   * 
   * @example
   * MySQL
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

