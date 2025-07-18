// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IdpLoginOrderItem extends $dara.Model {
  class?: string;
  configId?: string;
  desc?: string;
  enabled?: boolean;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
      configId: 'ConfigId',
      desc: 'Desc',
      enabled: 'Enabled',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
      configId: 'string',
      desc: 'string',
      enabled: 'boolean',
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

