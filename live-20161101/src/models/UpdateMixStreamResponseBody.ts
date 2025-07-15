// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMixStreamResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the stream mixing task. You can specify this parameter in a request to delete the stream mixing task or query stream mixing tasks.
   * 
   * @example
   * 5b2a046e-74d7-385e-d2d7-8a5b87e4****
   */
  mixStreamId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1A8CDDFF-0121-4ABB-DA60-AEF095A8W34F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mixStreamId: 'MixStreamId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mixStreamId: 'string',
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

