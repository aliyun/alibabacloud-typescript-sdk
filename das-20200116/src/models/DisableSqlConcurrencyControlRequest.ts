// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableSqlConcurrencyControlRequest extends $dara.Model {
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
   * >  The database instance must be an ApsaraDB RDS for MySQL instance or a PolarDB for MySQL cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze1jdv45i7l6****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the throttling rule that is applied to the instance. You can call the [GetRunningSqlConcurrencyControlRules](https://help.aliyun.com/document_detail/223538.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  itemId?: number;
  static names(): { [key: string]: string } {
    return {
      consoleContext: 'ConsoleContext',
      instanceId: 'InstanceId',
      itemId: 'ItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleContext: 'string',
      instanceId: 'string',
      itemId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

