// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParametersResponseBodyParameters extends $dara.Model {
  /**
   * @remarks
   * DescribeParameters
   */
  acceptableValue?: string[];
  /**
   * @remarks
   * The ID of the OceanBase cluster.
   * 
   * @example
   * 600
   */
  currentValue?: string;
  /**
   * @remarks
   * ```
   * http(s)://[Endpoint]/?Action=DescribeParameters
   * &InstanceId=ob317v4uif****
   * &Dimension=TENANT
   * &DimensionValue=ob2mr3oae0****
   * &Common request parameters
   * ```
   * 
   * @example
   * 600s
   */
  defaultValue?: string;
  /**
   * @remarks
   * The description of the parameter.
   * 
   * @example
   * The operation that you want to perform.   
   * Set the value to **DescribeParameters**.
   */
  description?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * connect_timeout
   */
  name?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * false
   */
  needReboot?: boolean;
  /**
   * @remarks
   * 参数是否只读
   */
  readonly?: boolean;
  /**
   * @remarks
   * {
   *     "RequestId": "EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C",
   *     "Parameters": [
   *         {
   *             "Description": "The maximum delay allowed in weak-consistency reads.",
   *             "ValueType": "CAPACITY",
   *             "CurrentValue": "600",
   *             "NeedReboot": false,
   *             "Name": "connect_timeout",
   *             "DefaultValue": "600s",
   *             "RejectedValue": [
   *                 "1s"
   *             ],
   *             "AcceptableValue": [
   *                 "1s"
   *             ]
   *         }
   *     ]
   * }
   */
  rejectedValue?: string[];
  /**
   * @example
   * s
   */
  unit?: string;
  /**
   * @remarks
   * The invalid value range of the parameter.    
   * It is an array with two string elements, which represents a range. The first element represents the minimum value and the second element represents the maximum value.
   * 
   * @example
   * CAPACITY
   */
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      acceptableValue: 'AcceptableValue',
      currentValue: 'CurrentValue',
      defaultValue: 'DefaultValue',
      description: 'Description',
      name: 'Name',
      needReboot: 'NeedReboot',
      readonly: 'Readonly',
      rejectedValue: 'RejectedValue',
      unit: 'Unit',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptableValue: { 'type': 'array', 'itemType': 'string' },
      currentValue: 'string',
      defaultValue: 'string',
      description: 'string',
      name: 'string',
      needReboot: 'boolean',
      readonly: 'boolean',
      rejectedValue: { 'type': 'array', 'itemType': 'string' },
      unit: 'string',
      valueType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.acceptableValue)) {
      $dara.Model.validateArray(this.acceptableValue);
    }
    if(Array.isArray(this.rejectedValue)) {
      $dara.Model.validateArray(this.rejectedValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

