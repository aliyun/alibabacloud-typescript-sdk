// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateLogHubRequestLogHubStores extends $dara.Model {
  /**
   * @remarks
   * The value of the log keyword.
   * 
   * This parameter is required.
   * 
   * @example
   * testValue
   */
  fieldKey?: string;
  /**
   * @remarks
   * The log keyword.
   * 
   * This parameter is required.
   * 
   * @example
   * testKey
   */
  logKey?: string;
  static names(): { [key: string]: string } {
    return {
      fieldKey: 'FieldKey',
      logKey: 'LogKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldKey: 'string',
      logKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

