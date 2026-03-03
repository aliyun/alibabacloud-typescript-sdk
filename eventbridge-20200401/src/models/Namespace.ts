// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Namespace extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  catalog?: string;
  comment?: string;
  name?: string;
  properties?: string;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      comment: 'Comment',
      name: 'Name',
      properties: 'properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      comment: 'string',
      name: 'string',
      properties: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

