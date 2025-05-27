// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAutomateResponseConfigFeatureResponseBodyDataRightValueEnums } from "./DescribeAutomateResponseConfigFeatureResponseBodyDataRightValueEnums";
import { DescribeAutomateResponseConfigFeatureResponseBodyDataSupportOperators } from "./DescribeAutomateResponseConfigFeatureResponseBodyDataSupportOperators";


export class DescribeAutomateResponseConfigFeatureResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data type of the condition field in the automated response rule.
   * 
   * @example
   * varchar
   */
  dataType?: string;
  /**
   * @remarks
   * The name of the condition field in the automated response rule.
   * 
   * @example
   * alert_desc
   */
  feature?: string;
  /**
   * @remarks
   * The enumerated values of the right operand for the field.
   */
  rightValueEnums?: DescribeAutomateResponseConfigFeatureResponseBodyDataRightValueEnums[];
  /**
   * @remarks
   * The operators that are supported for the condition field.
   */
  supportOperators?: DescribeAutomateResponseConfigFeatureResponseBodyDataSupportOperators[];
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      feature: 'Feature',
      rightValueEnums: 'RightValueEnums',
      supportOperators: 'SupportOperators',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      feature: 'string',
      rightValueEnums: { 'type': 'array', 'itemType': DescribeAutomateResponseConfigFeatureResponseBodyDataRightValueEnums },
      supportOperators: { 'type': 'array', 'itemType': DescribeAutomateResponseConfigFeatureResponseBodyDataSupportOperators },
    };
  }

  validate() {
    if(Array.isArray(this.rightValueEnums)) {
      $dara.Model.validateArray(this.rightValueEnums);
    }
    if(Array.isArray(this.supportOperators)) {
      $dara.Model.validateArray(this.supportOperators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

