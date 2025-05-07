// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSlsIndexResponse extends $dara.Model {
  requestId?: string;
  logStore?: string;
  project?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      logStore: 'logStore',
      project: 'project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      logStore: 'string',
      project: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

