// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParametersHistoryResponseBodyRespondParameters extends $dara.Model {
  /**
   * @remarks
   * The time when the parameter modification was initiated.
   * 
   * @example
   * 2024-11-26T08:03:34Z
   */
  createTime?: string;
  /**
   * @remarks
   * The resource ID of the parameter type. When you called this operation to query the modification history of cluster parameters, the value is DEFAULT_DIMENSION_VALUE. When you called this operation to query the modification history of tenant parameters, the value is the tenant ID.
   * 
   * @example
   * t69uo********
   */
  dimensionValue?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * connect_timeout
   */
  name?: string;
  /**
   * @remarks
   * The value of the parameter after the modification.
   * 
   * @example
   * 30
   */
  newValue?: string;
  /**
   * @remarks
   * The value of the parameter before the modification.
   * 
   * @example
   * 10
   */
  oldValue?: string;
  /**
   * @remarks
   * The modification status of the parameter. Valid values: 
   * * APPLIED: The parameter was modified.
   * * SCHEDULING: The parameter was to be modified.
   * 
   * @example
   * APPLIED
   */
  status?: string;
  /**
   * @remarks
   * The time when the parameter modification took effect.
   * 
   * @example
   * 2024-11-26T08:03:34Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dimensionValue: 'DimensionValue',
      name: 'Name',
      newValue: 'NewValue',
      oldValue: 'OldValue',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dimensionValue: 'string',
      name: 'string',
      newValue: 'string',
      oldValue: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

