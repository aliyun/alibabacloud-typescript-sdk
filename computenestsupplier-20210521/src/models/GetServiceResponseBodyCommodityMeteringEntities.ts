// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceResponseBodyCommodityMeteringEntities extends $dara.Model {
  /**
   * @remarks
   * The ID of the billable item.
   * 
   * @example
   * cmgjxxxxxxxx-NetworkOut
   */
  entityId?: string;
  /**
   * @remarks
   * The name of the billable item.
   * 
   * @example
   * spring-boot-demo
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

