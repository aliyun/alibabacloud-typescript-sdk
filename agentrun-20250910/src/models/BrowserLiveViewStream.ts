// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BrowserLiveViewStream extends $dara.Model {
  streamEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      streamEndpoint: 'streamEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

