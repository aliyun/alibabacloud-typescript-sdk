// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGrafanaResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1A9C645C-C83F-4C9D-8CCB-29BEC9E1****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

