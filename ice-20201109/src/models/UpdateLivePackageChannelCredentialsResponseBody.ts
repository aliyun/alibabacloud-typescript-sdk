// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateLivePackageChannelCredentialsResponseBodyIngestEndpoints } from "./UpdateLivePackageChannelCredentialsResponseBodyIngestEndpoints";


export class UpdateLivePackageChannelCredentialsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the ingest endpoint.
   */
  ingestEndpoints?: UpdateLivePackageChannelCredentialsResponseBodyIngestEndpoints[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 771A1414-27BF-53E6-AB73-EFCB*****ACF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ingestEndpoints: 'IngestEndpoints',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ingestEndpoints: { 'type': 'array', 'itemType': UpdateLivePackageChannelCredentialsResponseBodyIngestEndpoints },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ingestEndpoints)) {
      $dara.Model.validateArray(this.ingestEndpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

