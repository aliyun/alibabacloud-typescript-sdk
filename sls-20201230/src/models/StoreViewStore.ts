// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StoreViewStore extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  project?: string;
  query?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  storeName?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'project',
      query: 'query',
      storeName: 'storeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      query: 'string',
      storeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

