// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCatalogsRequest extends $dara.Model {
  /**
   * @example
   * paimon
   */
  catalogName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogName: 'catalogName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

