// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiSearchResponseBodyHeader } from "./AiSearchResponseBodyHeader";


export class AiSearchResponseBody extends $dara.Model {
  header?: AiSearchResponseBodyHeader;
  /**
   * @example
   * {"header":{"eventId":"6f617de0-204f-406f-a9be-34779c06d498","event":"on_common_search_start","responseTime":120},"payload":"","requestId":"715d01a0-de7e-42c3-abca-b901fcd79b39"}
   */
  payload?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ECB2144C-E277-5434-80E6-12D26678D364
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'header',
      payload: 'payload',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: AiSearchResponseBodyHeader,
      payload: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

