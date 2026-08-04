// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddressGroupPorts extends $dara.Model {
  /**
   * @remarks
   * Start port. Must be less than or equal to the end port.
   * 
   * @example
   * 123
   */
  begin?: number;
  /**
   * @remarks
   * End port. Must be greater than or equal to the start port.
   * 
   * @example
   * 1234
   */
  end?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      end: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddressGroup extends $dara.Model {
  /**
   * @remarks
   * Address list.
   */
  addresses?: string[];
  /**
   * @remarks
   * Port list.
   */
  ports?: AddressGroupPorts[];
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      ports: 'Ports',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      ports: { 'type': 'array', 'itemType': AddressGroupPorts },
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    if(Array.isArray(this.ports)) {
      $dara.Model.validateArray(this.ports);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

