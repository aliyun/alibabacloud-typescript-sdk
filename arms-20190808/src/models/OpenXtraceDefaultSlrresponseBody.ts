// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenXtraceDefaultSLRResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   *  
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * The request ID.
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

