// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDNADBRequest extends $dara.Model {
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBRegion?: string;
  DBType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBDescription: 'DBDescription',
      DBName: 'DBName',
      DBRegion: 'DBRegion',
      DBType: 'DBType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBDescription: 'string',
      DBName: 'string',
      DBRegion: 'string',
      DBType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

