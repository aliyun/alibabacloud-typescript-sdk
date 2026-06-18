// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomHostnameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The custom hostname.
   * 
   * @example
   * custom.site.com
   */
  hostname?: string;
  /**
   * @remarks
   * The ID of the custom hostname.
   * 
   * @example
   * 1234567890123
   */
  hostnameId?: number;
  /**
   * @remarks
   * The unique identifier for the request.
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostname: 'Hostname',
      hostnameId: 'HostnameId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostname: 'string',
      hostnameId: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

