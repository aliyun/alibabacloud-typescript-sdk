// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTextStreamResponseBody extends $dara.Model {
  end?: boolean;
  index?: number;
  message?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      index: 'index',
      message: 'message',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      index: 'number',
      message: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

