// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckTrafficControlTaskExpressionRequest extends $dara.Model {
  /**
   * @remarks
   * The expression.
   * 
   * This parameter is required.
   * 
   * @example
   * event=exposure
   */
  expression?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec_123****
   */
  instanceId?: string;
  /**
   * @remarks
   * The data table ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
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

