// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenArmsDefaultSLRResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * *   `true`: The call was successful.
   * *   `false`: The call failed.
   * 
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 53CACA70-2CF7-490C-BD06-1A2AE4EB****
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

