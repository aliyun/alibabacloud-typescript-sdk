// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Lock extends $dara.Model {
  holderId?: string;
  holderName?: string;
  id?: string;
  namespace?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      holderId: 'holderId',
      holderName: 'holderName',
      id: 'id',
      namespace: 'namespace',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      holderId: 'string',
      holderName: 'string',
      id: 'string',
      namespace: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

