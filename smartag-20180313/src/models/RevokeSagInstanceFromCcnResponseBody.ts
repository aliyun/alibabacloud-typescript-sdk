// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeSagInstanceFromCcnResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BCB97739-0CB5-4C94-9A5C-13051FFAB0E9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

