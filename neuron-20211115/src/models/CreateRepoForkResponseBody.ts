// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRepoForkResponseBody extends $dara.Model {
  requestId?: string;
  result?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

