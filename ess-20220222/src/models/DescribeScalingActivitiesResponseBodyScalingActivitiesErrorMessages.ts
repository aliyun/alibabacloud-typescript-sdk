// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingActivitiesResponseBodyScalingActivitiesErrorMessages extends $dara.Model {
  /**
   * @remarks
   * The error code that is returned when the scaling activity failed.
   * 
   * @example
   * OperationDenied.NoStock
   */
  code?: string;
  /**
   * @remarks
   * The description of the scaling activity exception.
   * 
   * @example
   * Fail to create instances into scaling group.
   */
  description?: string;
  /**
   * @remarks
   * The IDs of the instances included in the failed scaling activities.
   */
  failedInstanceIds?: string[];
  /**
   * @remarks
   * The error message that is returned when the scaling activity failed or is partially successful.
   * 
   * @example
   * The resource is out of stock in the specified zone. Please try other types, or choose other regions and zones.
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      failedInstanceIds: 'FailedInstanceIds',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      failedInstanceIds: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.failedInstanceIds)) {
      $dara.Model.validateArray(this.failedInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

