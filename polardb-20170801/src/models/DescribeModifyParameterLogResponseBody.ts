// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModifyParameterLogResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The time when the parameter was last modified.
   * 
   * @example
   * 2024-10-29T09:31:37Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The parameter value after the modification.
   * 
   * @example
   * test01
   */
  newParameterValue?: string;
  /**
   * @remarks
   * The parameter value before the modification.
   * 
   * @example
   * test
   */
  oldParameterValue?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * hz
   */
  parameterName?: string;
  /**
   * @remarks
   * Indicates whether the modification was applied successfully.
   * 
   * @example
   * True
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      modifyTime: 'ModifyTime',
      newParameterValue: 'NewParameterValue',
      oldParameterValue: 'OldParameterValue',
      parameterName: 'ParameterName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyTime: 'string',
      newParameterValue: 'string',
      oldParameterValue: 'string',
      parameterName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModifyParameterLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster engine.
   * 
   * @example
   * polardb_mysql
   */
  engine?: string;
  /**
   * @remarks
   * The engine version.
   * 
   * @example
   * 8.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The list of parameter modification history.
   */
  items?: DescribeModifyParameterLogResponseBodyItems[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CD35F3-F3-44CA-AFFF-BAF869******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      engineVersion: 'string',
      items: { 'type': 'array', 'itemType': DescribeModifyParameterLogResponseBodyItems },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

