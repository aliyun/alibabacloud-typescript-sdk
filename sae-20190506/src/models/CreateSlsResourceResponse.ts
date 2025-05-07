// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSlsResourceResponse extends $dara.Model {
  logStore?: string;
  project?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logStore: 'logStore',
      project: 'project',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStore: 'string',
      project: 'string',
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

