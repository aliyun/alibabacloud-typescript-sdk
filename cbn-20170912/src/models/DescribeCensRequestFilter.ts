// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCensRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The key of the filter. Valid values:
   * 
   * *   **CenId**: the ID of a CEN instance.
   * *   **Name**: the name of a CEN instance.
   * 
   * By default, the logical operator among filter conditions is **AND**. Information about a CEN instance is returned only if the CEN instance matches all filter conditions.
   * 
   * You can specify at most five filter conditions in each call.
   * 
   * @example
   * CenId
   */
  key?: string;
  /**
   * @remarks
   * The value of the filter condition.
   * 
   * Specify a filter value based on the **Key** parameter. You can specify multiple values for a filter **key**. The logical operator among multiple filter values is **OR**. If a CEN instance matches one or more of the values that you specify, the CEN instance matches the filter condition.
   * 
   * You can specify at most five values in each filter condition.
   * 
   * @example
   * cen-0xyeagctz5sfg9****
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

