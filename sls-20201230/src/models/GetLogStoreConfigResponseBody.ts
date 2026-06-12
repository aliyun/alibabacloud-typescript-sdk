// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogStoreConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array of header keys used to extract the client IP address when data is written to the Logstore. The keys are case-insensitive, but their order in the array is significant. For this feature to work, enable the `appendMeta` option on the Logstore. Log Service searches the request headers for these keys in the specified order and adds the first valid IP address it finds as a log tag.
   */
  clientIpHeaders?: string[];
  static names(): { [key: string]: string } {
    return {
      clientIpHeaders: 'clientIpHeaders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIpHeaders: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.clientIpHeaders)) {
      $dara.Model.validateArray(this.clientIpHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

