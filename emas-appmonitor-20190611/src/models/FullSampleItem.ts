// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FullSampleItem extends $dara.Model {
  id?: string;
  modifyTime?: string;
  operator?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      modifyTime: 'ModifyTime',
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      modifyTime: 'string',
      operator: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

