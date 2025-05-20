// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSqlConcurrencyControlKeywordsFromSqlTextRequest extends $dara.Model {
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  consoleContext?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze5hpn2b99d2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The SQL statement based on which a throttling keyword string is to be generated.
   * 
   * This parameter is required.
   * 
   * @example
   * SELECT * FROM test where name = \\"das\\"
   */
  sqlText?: string;
  static names(): { [key: string]: string } {
    return {
      consoleContext: 'ConsoleContext',
      instanceId: 'InstanceId',
      sqlText: 'SqlText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleContext: 'string',
      instanceId: 'string',
      sqlText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

