// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSitePauseResponseBody extends $dara.Model {
  paused?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      paused: 'Paused',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paused: 'boolean',
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

