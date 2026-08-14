// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterSearchClientTreeRequest extends $dara.Model {
  /**
   * @remarks
   * The search keyword, which can be a department name, username, or phone number.
   * 
   * @example
   * R&D Department
   */
  keyword?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

