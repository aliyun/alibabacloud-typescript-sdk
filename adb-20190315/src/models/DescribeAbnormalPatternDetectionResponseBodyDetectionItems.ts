// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAbnormalPatternDetectionResponseBodyDetectionItemsResults } from "./DescribeAbnormalPatternDetectionResponseBodyDetectionItemsResults";


export class DescribeAbnormalPatternDetectionResponseBodyDetectionItems extends $dara.Model {
  /**
   * @remarks
   * The description of the detection result.
   * 
   * @example
   * Two SQL patterns that have abnormal totalTime metric values are detected. This may result in increased CPU utilization, query slowdown, and degraded system stability. Go to the monitoring page to diagnose the issue and then perform optimization.
   */
  message?: string;
  /**
   * @remarks
   * The name of the detection item.
   * 
   * @example
   * Cost，PeakMemory
   */
  name?: string;
  /**
   * @remarks
   * The detection result.
   */
  results?: DescribeAbnormalPatternDetectionResponseBodyDetectionItemsResults[];
  /**
   * @remarks
   * The severity level of the detection result. Valid values:
   * 
   * *   NORMAL
   * *   WARNING
   * *   CRITICAL
   * 
   * @example
   * NORMAL
   * WARNNING
   * CRITICAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      name: 'Name',
      results: 'Results',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      name: 'string',
      results: { 'type': 'array', 'itemType': DescribeAbnormalPatternDetectionResponseBodyDetectionItemsResults },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

