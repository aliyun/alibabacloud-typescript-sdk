// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeviceGroupDynamicRule extends $dara.Model {
  args?: any;
  key?: string;
  operator?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      key: 'Key',
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'any',
      key: 'string',
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

