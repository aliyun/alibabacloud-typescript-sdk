// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOriginPoolResponseBodyReferencesIPARecords extends $dara.Model {
  /**
   * @remarks
   * 记录ID。
   * 
   * @example
   * 104285288635****
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

