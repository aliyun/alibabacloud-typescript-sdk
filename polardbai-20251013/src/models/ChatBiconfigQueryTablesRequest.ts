// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatBIConfigQueryTablesRequest extends $dara.Model {
  authMessage?: string;
  authType?: string;
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
  /**
   * @example
   * cn-beijing
   */
  sourceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      authMessage: 'AuthMessage',
      authType: 'AuthType',
      dbName: 'DbName',
      inputField: 'InputField',
      instanceName: 'InstanceName',
      sourceRegionId: 'SourceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authMessage: 'string',
      authType: 'string',
      dbName: 'string',
      inputField: 'string',
      instanceName: 'string',
      sourceRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

