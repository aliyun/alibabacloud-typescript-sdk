// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutLogStoreConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies a list of header keys from which to extract the client IP address during log ingestion. Simple Log Service (SLS) searches these headers in the specified order and uses the first valid IP address that it finds. The key names are case-insensitive, but their order is significant. To use this feature, you must also enable the `appendMeta` setting for the Logstore. This setting adds the extracted IP address as a log tag.
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

