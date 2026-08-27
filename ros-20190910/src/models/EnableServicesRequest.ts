// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableServicesRequest extends $dara.Model {
  /**
   * @remarks
   * The region where the service is enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * A list of services to enable.
   */
  serviceNames?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serviceNames: 'ServiceNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serviceNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.serviceNames)) {
      $dara.Model.validateArray(this.serviceNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

