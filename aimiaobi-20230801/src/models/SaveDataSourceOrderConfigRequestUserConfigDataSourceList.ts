// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveDataSourceOrderConfigRequestUserConfigDataSourceList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * QuarkCommonNews
   */
  code?: string;
  enable?: boolean;
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  number?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
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

