// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PodIp extends $dara.Model {
  interfaceName?: string;
  ip?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      interfaceName: 'InterfaceName',
      ip: 'Ip',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interfaceName: 'string',
      ip: 'string',
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

