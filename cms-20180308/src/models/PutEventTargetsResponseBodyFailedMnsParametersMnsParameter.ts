// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutEventTargetsResponseBodyFailedMnsParametersMnsParameter extends $dara.Model {
  id?: number;
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
      id: 'number',
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

