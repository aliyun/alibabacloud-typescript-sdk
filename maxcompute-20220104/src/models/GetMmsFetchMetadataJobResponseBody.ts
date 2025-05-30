// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMmsFetchMetadataJobResponseBodyData } from "./GetMmsFetchMetadataJobResponseBodyData";


export class GetMmsFetchMetadataJobResponseBody extends $dara.Model {
  data?: GetMmsFetchMetadataJobResponseBodyData;
  /**
   * @example
   * 5CA6292A-E301-5CD8-B4E2-AF060F99147B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMmsFetchMetadataJobResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

