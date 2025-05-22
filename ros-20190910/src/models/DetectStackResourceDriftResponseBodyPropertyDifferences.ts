// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectStackResourceDriftResponseBodyPropertyDifferences extends $dara.Model {
  /**
   * @remarks
   * The actual value of the resource property.
   * 
   * @example
   * test1
   */
  actualValue?: string;
  /**
   * @remarks
   * The drift type of the resource property. Valid values:
   * 
   * *   ADD: The property value has been added to a resource property whose data type was Array or List.
   * *   REMOVE: The property has been deleted from the current resource configuration.
   * *   NOT_EQUAL: The current property value differs from the expected value defined in the stack template.
   * 
   * @example
   * NOT_EQUAL
   */
  differenceType?: string;
  /**
   * @remarks
   * The expected value of the resource property that is defined in the template.
   * 
   * @example
   * test2
   */
  expectedValue?: string;
  /**
   * @remarks
   * The path of the resource property.
   * 
   * @example
   * /ScalingRuleName
   */
  propertyPath?: string;
  static names(): { [key: string]: string } {
    return {
      actualValue: 'ActualValue',
      differenceType: 'DifferenceType',
      expectedValue: 'ExpectedValue',
      propertyPath: 'PropertyPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualValue: 'string',
      differenceType: 'string',
      expectedValue: 'string',
      propertyPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

