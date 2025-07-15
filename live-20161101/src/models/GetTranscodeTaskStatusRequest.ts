// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTranscodeTaskStatusRequest extends $dara.Model {
  app?: string;
  pushDomain?: string;
  securityToken?: string;
  streamName?: string;
  transcodingTemplate?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      pushDomain: 'PushDomain',
      securityToken: 'SecurityToken',
      streamName: 'StreamName',
      transcodingTemplate: 'TranscodingTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      pushDomain: 'string',
      securityToken: 'string',
      streamName: 'string',
      transcodingTemplate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

