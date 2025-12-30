// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatBIConfigQueryTablesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * db_test
   */
  dbName?: string;
  /**
   * @example
   * polar
   */
  inputField?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-2ze454l20me07****
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      inputField: 'InputField',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      inputField: 'string',
      instanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

