// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DLCatalog extends $dara.Model {
  /**
   * @remarks
   * The description of the data catalog.
   * 
   * @example
   * init default catalog
   */
  description?: string;
  /**
   * @remarks
   * The storage path of the data catalog.
   * 
   * @example
   * oss://xxxx
   */
  location?: string;
  /**
   * @remarks
   * The name of the data catalog.
   * 
   * @example
   * hive
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      location: 'Location',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      location: 'string',
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

