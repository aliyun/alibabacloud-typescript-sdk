// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckTrafficControlTaskExpressionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  expression?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tableMetaId?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      instanceId: 'InstanceId',
      tableMetaId: 'TableMetaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      instanceId: 'string',
      tableMetaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

