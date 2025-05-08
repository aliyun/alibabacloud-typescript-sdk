// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOriginPoolsResponseBodyOriginPoolsReferencesIPARecords extends $dara.Model {
  /**
   * @remarks
   * Record ID.
   * 
   * @example
   * 1042852886352704
   */
  id?: number;
  /**
   * @remarks
   * Record name.
   * 
   * @example
   * ipa.example.com
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

