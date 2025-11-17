// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PodNetworkInterface extends $dara.Model {
  interfaceName?: string;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      interfaceName: 'InterfaceName',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interfaceName: 'string',
      ip: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

