// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetLivePackageOriginEndpointResponseBodyLivePackageOriginEndpoint } from "./GetLivePackageOriginEndpointResponseBodyLivePackageOriginEndpoint";


export class GetLivePackageOriginEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the origin endpoints.
   */
  livePackageOriginEndpoint?: GetLivePackageOriginEndpointResponseBodyLivePackageOriginEndpoint;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * requestIdExample123
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
      livePackageOriginEndpoint: GetLivePackageOriginEndpointResponseBodyLivePackageOriginEndpoint,
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

