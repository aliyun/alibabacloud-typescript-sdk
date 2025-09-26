// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BrowserAutomationStream extends $dara.Model {
  streamEndpoint?: string;
  streamStatus?: string;
  static names(): { [key: string]: string } {
    return {
      streamEndpoint: 'streamEndpoint',
      streamStatus: 'streamStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamEndpoint: 'string',
      streamStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

