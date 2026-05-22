// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteKeylessServerRequest extends $dara.Model {
  /**
   * @remarks
   * Keyless server ID。
   * 
   * This parameter is required.
   * 
   * @example
   * baba39055622c008b90285a8838e****
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11223***
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

