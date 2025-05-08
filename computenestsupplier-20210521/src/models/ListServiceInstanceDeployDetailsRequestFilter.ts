// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceInstanceDeployDetailsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * Filter Value Names (Equivalent to SQL\\"s WHERE Clause)
   * 
   * Available Options:
   * 
   * - UserId
   * - ServiceId
   * - ServiceVersion
   * - ServiceInstanceId
   * - DeploySucceeded (Accepts True or False and case-insensitive)
   * - ErrorType
   * - ErrorCode
   * 
   * @example
   * ServiceId
   */
  name?: string;
  /**
   * @remarks
   * A value of the filter condition.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

