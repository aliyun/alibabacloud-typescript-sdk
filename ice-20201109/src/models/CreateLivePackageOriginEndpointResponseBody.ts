// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateLivePackageOriginEndpointResponseBodyLivePackageOriginEndpoint } from "./CreateLivePackageOriginEndpointResponseBodyLivePackageOriginEndpoint";


export class CreateLivePackageOriginEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the origin endpoint.
   */
  livePackageOriginEndpoint?: CreateLivePackageOriginEndpointResponseBodyLivePackageOriginEndpoint;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
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
      livePackageOriginEndpoint: CreateLivePackageOriginEndpointResponseBodyLivePackageOriginEndpoint,
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

