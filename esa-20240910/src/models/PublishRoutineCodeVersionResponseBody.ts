// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishRoutineCodeVersionResponseBody extends $dara.Model {
  codeVersion?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      codeVersion: 'CodeVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeVersion: 'string',
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

