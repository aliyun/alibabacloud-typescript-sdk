// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCmsServiceResponseBody extends $dara.Model {
  /**
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @example
   * PROM_NOT_OPEN
   */
  errorCode?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      errorCode: 'errorCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      errorCode: 'string',
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

