// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPlayerConfigResponseBody extends $dara.Model {
  playerConfig?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      playerConfig: 'PlayerConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playerConfig: 'string',
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

