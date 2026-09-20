// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePromptVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Version number of the created draft version.
   * 
   * @example
   * 0.0.1
   */
  data?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D9E87E66-9EF0-5C10-A5E6-924020A0C9B7
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

