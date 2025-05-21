// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterAttributeResponseBodyItemsDBClusterTaskInfoStepListStepList extends $dara.Model {
  /**
   * @remarks
   * The end time of the job step. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-03-10T10:28:34Z
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the job step. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-03-10T09:28:34Z
   */
  startTime?: string;
  /**
   * @remarks
   * The description of the job step.
   * 
   * @example
   * Apply resource
   */
  stepDesc?: string;
  /**
   * @remarks
   * The name of the job step.
   * 
   * @example
   * ApplyResource
   */
  stepName?: string;
  /**
   * @remarks
   * The progress of the job step. Unit: %.
   * 
   * @example
   * 50
   */
  stepProgress?: string;
  /**
   * @remarks
   * The status of the job step. Valid values:
   * 
   * *   **NOT_RUN**
   * *   **RUNNING**
   * *   **SUCCEED**
   * 
   * @example
   * SUCCEED
   */
  stepStatus?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      stepDesc: 'StepDesc',
      stepName: 'StepName',
      stepProgress: 'StepProgress',
      stepStatus: 'StepStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      stepDesc: 'string',
      stepName: 'string',
      stepProgress: 'string',
      stepStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

