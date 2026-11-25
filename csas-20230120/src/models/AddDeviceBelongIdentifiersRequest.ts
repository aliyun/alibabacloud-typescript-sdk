// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDeviceBelongIdentifiersRequestIdentifiers extends $dara.Model {
  identifierType?: string;
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

