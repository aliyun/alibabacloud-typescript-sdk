// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApiDestinationRequestHttpApiParameters extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the API destination. The endpoint can be up to 127 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * http://127.0.0.1:8001/api
   */
  endpoint?: string;
  /**
   * @remarks
   * The HTTP request method. Valid values:
   * 
   * *   GET
   * *   POST
   * *   HEAD
   * *   DELETE
   * *   PUT
   * *   PATCH
   * 
   * This parameter is required.
   * 
   * @example
   * POST
   */
  method?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      method: 'Method',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      method: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

