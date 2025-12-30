// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatBIConfigDeleteRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * db_test
   */
  dbName?: string;
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
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
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

