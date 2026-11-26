// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDeviceBelongIdentifiersRequestIdentifiers extends $dara.Model {
  /**
   * @remarks
   * The identifier type. MAC indicates a network interface controller (NIC) MAC address, SystemSN indicates a system serial number, and BIOSSN indicates a BIOS serial number.
   * 
   * @example
   * MAC
   */
  identifierType?: string;
  /**
   * @remarks
   * The identifier value. A MAC address must be a 6-byte address. A system serial number accepts 1 to 64 characters, and a BIOS serial number accepts 1 to 128 characters. MAC addresses are converted to the lowercase colon-separated format when stored, while system serial numbers and BIOS serial numbers retain their original values.
   * 
   * @example
   * 02:00:00:00:00:01
   */
  identifierValue?: string;
  static names(): { [key: string]: string } {
    return {
      identifierType: 'IdentifierType',
      identifierValue: 'IdentifierValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifierType: 'string',
      identifierValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDeviceBelongIdentifiersRequest extends $dara.Model {
  /**
   * @remarks
   * The list of device ownership identifiers to add. Each batch supports 1 to 1,000 items. Each item must include IdentifierType and IdentifierValue.
   * 
   * This parameter is required.
   */
  identifiers?: AddDeviceBelongIdentifiersRequestIdentifiers[];
  static names(): { [key: string]: string } {
    return {
      identifiers: 'Identifiers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifiers: { 'type': 'array', 'itemType': AddDeviceBelongIdentifiersRequestIdentifiers },
    };
  }

  validate() {
    if(Array.isArray(this.identifiers)) {
      $dara.Model.validateArray(this.identifiers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

