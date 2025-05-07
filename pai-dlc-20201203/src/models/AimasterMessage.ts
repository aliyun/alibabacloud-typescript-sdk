// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AIMasterMessage extends $dara.Model {
  extended?: string;
  jobRestartCount?: number;
  messageContent?: string;
  messageEvent?: string;
  messageVersion?: number;
  restartType?: string;
  static names(): { [key: string]: string } {
    return {
      extended: 'Extended',
      jobRestartCount: 'JobRestartCount',
      messageContent: 'MessageContent',
      messageEvent: 'MessageEvent',
      messageVersion: 'MessageVersion',
      restartType: 'RestartType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extended: 'string',
      jobRestartCount: 'number',
      messageContent: 'string',
      messageEvent: 'string',
      messageVersion: 'number',
      restartType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

