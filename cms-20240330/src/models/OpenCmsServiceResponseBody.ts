// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenCmsServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Whether the specified monitoring services are enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 264C3E89-XXXX-XXXX-XXXX-CE9C2196C7DC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
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

