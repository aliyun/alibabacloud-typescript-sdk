// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckUsedPropertyRequest extends $dara.Model {
  /**
   * @remarks
   * The channel.
   * 
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * The property ID. You can call the [ListProperty](~~ListProperty~~) operation to query property IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 390
   */
  propertyId?: number;
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      propertyId: 'PropertyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
      propertyId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

