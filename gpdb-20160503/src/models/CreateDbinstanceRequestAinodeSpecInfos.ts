// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceRequestAINodeSpecInfos extends $dara.Model {
  AINodeNum?: string;
  AINodeSpec?: string;
  static names(): { [key: string]: string } {
    return {
      AINodeNum: 'AINodeNum',
      AINodeSpec: 'AINodeSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AINodeNum: 'string',
      AINodeSpec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

