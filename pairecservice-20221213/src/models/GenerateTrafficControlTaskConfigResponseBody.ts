// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateTrafficControlTaskConfigResponseBody extends $dara.Model {
  config?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
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

