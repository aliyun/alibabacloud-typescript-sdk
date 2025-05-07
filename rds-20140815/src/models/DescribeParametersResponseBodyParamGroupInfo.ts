// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParametersResponseBodyParamGroupInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the parameter template.
   * 
   * @example
   * rpg-sys-01040401010200
   */
  paramGroupId?: string;
  /**
   * @remarks
   * The description of the parameter template.
   * 
   * @example
   * sync_binlog=1000, innodb_flush_log_at_trx_commit=2, async
   */
  parameterGroupDesc?: string;
  /**
   * @remarks
   * The name of the parameter template.
   * 
   * @example
   * mysql_innodb_8.0_basic_normal_high
   */
  parameterGroupName?: string;
  /**
   * @remarks
   * The type of the parameter template.
   * 
   * @example
   * 0
   */
  parameterGroupType?: string;
  static names(): { [key: string]: string } {
    return {
      paramGroupId: 'ParamGroupId',
      parameterGroupDesc: 'ParameterGroupDesc',
      parameterGroupName: 'ParameterGroupName',
      parameterGroupType: 'ParameterGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramGroupId: 'string',
      parameterGroupDesc: 'string',
      parameterGroupName: 'string',
      parameterGroupType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

