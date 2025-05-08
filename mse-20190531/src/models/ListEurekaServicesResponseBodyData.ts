// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEurekaServicesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the instance.
   */
  instancesId?: string[];
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * CONTACTINFO
   */
  name?: string;
  /**
   * @remarks
   * The number of service providers. The value is in the following format: Number of healthy instances/Total number of instances.
   * 
   * @example
   * 1/1
   */
  upStatus?: string;
  static names(): { [key: string]: string } {
    return {
      instancesId: 'InstancesId',
      name: 'Name',
      upStatus: 'UpStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instancesId: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      upStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instancesId)) {
      $dara.Model.validateArray(this.instancesId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

