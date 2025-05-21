// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClustersResponseBodyItemsDBClusterTaskInfoStepList } from "./DescribeDbclustersResponseBodyItemsDbclusterTaskInfoStepList";


export class DescribeDBClustersResponseBodyItemsDBClusterTaskInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * analyticDBFlexibleScaleOut
   */
  name?: string;
  /**
   * @remarks
   * The progress of the job. Unit: %.
   * 
   * @example
   * 10
   */
  progress?: string;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   **NOT_RUN**
   * *   **RUNNING**
   * *   **SUCCEED**
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The job step.
   */
  stepList?: DescribeDBClustersResponseBodyItemsDBClusterTaskInfoStepList;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      progress: 'Progress',
      status: 'Status',
      stepList: 'StepList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      progress: 'string',
      status: 'string',
      stepList: DescribeDBClustersResponseBodyItemsDBClusterTaskInfoStepList,
    };
  }

  validate() {
    if(this.stepList && typeof (this.stepList as any).validate === 'function') {
      (this.stepList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

