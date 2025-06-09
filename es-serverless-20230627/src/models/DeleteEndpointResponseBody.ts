// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEndpointResponseBody extends $dara.Model {
  /**
   * @example
   * 1305A3E0-A291-54BA-A3B2-7D1C12EC4112
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

