// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserRequest extends $dara.Model {
  channel?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'channel',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

