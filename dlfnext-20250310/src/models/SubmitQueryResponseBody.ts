// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitQueryResponseBody extends $dara.Model {
  queryId?: string;
  static names(): { [key: string]: string } {
    return {
      queryId: 'queryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

