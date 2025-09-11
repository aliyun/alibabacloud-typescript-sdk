// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListS3IngestionsRequest extends $dara.Model {
  logstore?: string;
  offset?: string;
  size?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      offset: 'offset',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      offset: 'string',
      size: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

