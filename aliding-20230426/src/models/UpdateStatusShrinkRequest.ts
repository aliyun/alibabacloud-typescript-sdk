// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStatusShrinkRequest extends $dara.Model {
  appType?: string;
  errorLinesShrink?: string;
  importSequence?: string;
  language?: string;
  status?: string;
  systemToken?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      errorLinesShrink: 'ErrorLines',
      importSequence: 'ImportSequence',
      language: 'Language',
      status: 'Status',
      systemToken: 'SystemToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      errorLinesShrink: 'string',
      importSequence: 'string',
      language: 'string',
      status: 'string',
      systemToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

