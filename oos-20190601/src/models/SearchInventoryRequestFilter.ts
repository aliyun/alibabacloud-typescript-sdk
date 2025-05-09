// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchInventoryRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The name of the component property. Valid values of N: 1 to 5. Different components have different property names. You can call the [GetInventorySchema](https://api.aliyun.com/#/?product=oos\\&version=2019-06-01\\&api=GetInventorySchema) operation to query the property names of different components. For example, the ACS:InstanceInformation component has the InstanceId property. Therefore, you can set this parameter to ACS:InstanceInformation.InstanceId.
   * 
   * @example
   * ACS:InstanceInformation.InstanceId
   */
  name?: string;
  /**
   * @remarks
   * The comparison operator that is used to filter property values. Valid values of N: 1 to 5. Valid values:
   * 
   * *   Equal
   * *   NotEqual
   * *   BeginWith
   * *   LessThan
   * *   GreaterThan
   * 
   * @example
   * Equal
   */
  operator?: string;
  /**
   * @remarks
   * The property values to query.
   * 
   * @example
   * i-bp1cpoxxxxxxxxxxxxxx
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operator: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

