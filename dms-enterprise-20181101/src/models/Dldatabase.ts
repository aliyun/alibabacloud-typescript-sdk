// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DLDatabase extends $dara.Model {
  /**
   * @remarks
   * The name of the catalog.
   * 
   * @example
   * hive
   */
  catalogName?: string;
  /**
   * @remarks
   * The database ID.
   * 
   * @example
   * 19
   */
  dbId?: number;
  /**
   * @remarks
   * The description of the database.
   * 
   * @example
   * Default database for catalog hive
   */
  description?: string;
  /**
   * @remarks
   * The storage path of the database.
   * 
   * @example
   * oss://xxx
   */
  location?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * default
   */
  name?: string;
  /**
   * @remarks
   * The parameters related to the database.
   * 
   * @example
   * key/value
   */
  parameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      catalogName: 'CatalogName',
      dbId: 'DbId',
      description: 'Description',
      location: 'Location',
      name: 'Name',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      dbId: 'number',
      description: 'string',
      location: 'string',
      name: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

