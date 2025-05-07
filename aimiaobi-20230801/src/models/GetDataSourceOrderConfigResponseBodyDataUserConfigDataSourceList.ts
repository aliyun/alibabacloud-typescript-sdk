// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataSourceOrderConfigResponseBodyDataUserConfigDataSourceList extends $dara.Model {
  /**
   * @example
   * QuarkCommonNews
   */
  code?: string;
  enable?: boolean;
  name?: string;
  /**
   * @example
   * 20
   */
  number?: number;
  /**
   * @example
   * SystemSearch
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      enable: 'Enable',
      name: 'Name',
      number: 'Number',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      enable: 'boolean',
      name: 'string',
      number: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

