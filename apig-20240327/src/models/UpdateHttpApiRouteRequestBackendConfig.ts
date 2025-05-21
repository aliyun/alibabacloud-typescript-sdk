// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateHttpApiRouteRequestBackendConfigServices } from "./UpdateHttpApiRouteRequestBackendConfigServices";


export class UpdateHttpApiRouteRequestBackendConfig extends $dara.Model {
  /**
   * @remarks
   * The backend service scenario.
   * 
   * Valid values:
   * 
   * *   SingleService
   * *   MultiServiceByRatio
   * *   Redirect
   * *   Mock
   * 
   * @example
   * SingleService
   */
  scene?: string;
  /**
   * @remarks
   * The backend services.
   */
  services?: UpdateHttpApiRouteRequestBackendConfigServices[];
  static names(): { [key: string]: string } {
    return {
      scene: 'scene',
      services: 'services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: 'string',
      services: { 'type': 'array', 'itemType': UpdateHttpApiRouteRequestBackendConfigServices },
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

