// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDevicesByAliasRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aliasName
   */
  alias?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      appKey: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

