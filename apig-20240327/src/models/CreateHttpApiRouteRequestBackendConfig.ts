// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateHttpApiRouteRequestBackendConfigServices } from "./CreateHttpApiRouteRequestBackendConfigServices";


export class CreateHttpApiRouteRequestBackendConfig extends $dara.Model {
  /**
   * @remarks
   * The scenario of the backend service.
   * 
   * *   SingleService
   * *   MultiServiceByRatio
   * *   Mock
   * *   Redirect
   * 
   * @example
   * SingleService
   */
  scene?: string;
  /**
   * @remarks
   * The backend services.
   */
  services?: CreateHttpApiRouteRequestBackendConfigServices[];
  static names(): { [key: string]: string } {
    return {
      scene: 'scene',
      services: 'services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: 'string',
      services: { 'type': 'array', 'itemType': CreateHttpApiRouteRequestBackendConfigServices },
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

