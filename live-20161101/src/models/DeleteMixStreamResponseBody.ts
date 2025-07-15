// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMixStreamResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the stream mixing task.
   * 
   * @example
   * 749b7594-86d6-37b1-513b-e1e19845****
   */
  mixStreamId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BE9407FF-F897-4DBD-338D-98A750AD805F
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

