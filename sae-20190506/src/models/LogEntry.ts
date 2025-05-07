// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LogEntry extends $dara.Model {
  instanceID?: string;
  message?: string;
  offset?: number;
  packID?: string;
  packMeta?: string;
  qualifier?: string;
  timestamp?: number;
  versionID?: string;
  static names(): { [key: string]: string } {
    return {
      instanceID: 'instanceID',
      message: 'message',
      offset: 'offset',
      packID: 'packID',
      packMeta: 'packMeta',
      qualifier: 'qualifier',
      timestamp: 'timestamp',
      versionID: 'versionID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceID: 'string',
      message: 'string',
      offset: 'number',
      packID: 'string',
      packMeta: 'string',
      qualifier: 'string',
      timestamp: 'number',
      versionID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

