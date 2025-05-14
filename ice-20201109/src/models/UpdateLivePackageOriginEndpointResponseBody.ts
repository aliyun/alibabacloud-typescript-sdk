// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateLivePackageOriginEndpointResponseBodyLivePackageOriginEndpoint } from "./UpdateLivePackageOriginEndpointResponseBodyLivePackageOriginEndpoint";


export class UpdateLivePackageOriginEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the origin endpoint.
   */
  livePackageOriginEndpoint?: UpdateLivePackageOriginEndpointResponseBodyLivePackageOriginEndpoint;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * b1f8d6c4-a123-4cd5-9e88-d0819e3bfa70
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      livePackageOriginEndpoint: 'LivePackageOriginEndpoint',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      livePackageOriginEndpoint: UpdateLivePackageOriginEndpointResponseBodyLivePackageOriginEndpoint,
      requestId: 'string',
    };
  }

  validate() {
    if(this.livePackageOriginEndpoint && typeof (this.livePackageOriginEndpoint as any).validate === 'function') {
      (this.livePackageOriginEndpoint as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

