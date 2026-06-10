// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RollbackScriptRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @remarks
   * Version to roll back to
   * 
   * > For valid values, see the ListScriptPublishHistories operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1578965079000
   */
  rollbackVersion?: string;
  /**
   * @remarks
   * Script ID
   * 
   * This parameter is required.
   * 
   * @example
   * 303523b1-0094-4ebe-b9ed-c23d11c91d61
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      rollbackVersion: 'RollbackVersion',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      rollbackVersion: 'string',
      scriptId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

