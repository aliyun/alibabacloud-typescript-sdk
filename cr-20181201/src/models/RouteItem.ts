// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RouteItem extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * **if can be null:**
   * false
   */
  endpointType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceDomain?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  storageDomain?: string;
  static names(): { [key: string]: string } {
    return {
      endpointType: 'EndpointType',
      instanceDomain: 'InstanceDomain',
      storageDomain: 'StorageDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointType: 'string',
      instanceDomain: 'string',
      storageDomain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

