// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySQLCollectorPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable or disable SQL collection.
   * 
   * *   Enable: enables SQL collection.
   * *   Disabled: disables SQL collection.
   * 
   * This parameter is required.
   * 
   * @example
   * Enable
   */
  SQLCollectorStatus?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      SQLCollectorStatus: 'SQLCollectorStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      SQLCollectorStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

