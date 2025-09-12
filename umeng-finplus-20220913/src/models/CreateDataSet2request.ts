// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataSet2Request extends $dara.Model {
  clientId?: number;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'clientId',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'number',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

