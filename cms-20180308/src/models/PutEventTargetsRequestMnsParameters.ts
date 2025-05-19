// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutEventTargetsRequestMnsParameters extends $dara.Model {
  id?: string;
  queue?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      queue: 'Queue',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      queue: 'string',
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

