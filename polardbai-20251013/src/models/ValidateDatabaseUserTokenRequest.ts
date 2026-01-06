// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateDatabaseUserTokenRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yEtNjzuM21NVLVJTuL9Trw****
   */
  authMessage?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * token
   */
  authType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-2ze454l20me07****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ai_test
   */
  DBName?: string;
  static names(): { [key: string]: string } {
    return {
      authMessage: 'AuthMessage',
      authType: 'AuthType',
      DBClusterId: 'DBClusterId',
      DBName: 'DBName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authMessage: 'string',
      authType: 'string',
      DBClusterId: 'string',
      DBName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

