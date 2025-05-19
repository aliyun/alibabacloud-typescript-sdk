// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutEventTargetsResponseBodyFailedSlsParametersFailedSlsParameter extends $dara.Model {
  id?: string;
  logStore?: string;
  project?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      logStore: 'LogStore',
      project: 'Project',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      logStore: 'string',
      project: 'string',
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

