// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeWorkerDetectionResponseBodyDetectionItemsResults } from "./DescribeWorkerDetectionResponseBodyDetectionItemsResults";


export class DescribeWorkerDetectionResponseBodyDetectionItems extends $dara.Model {
  /**
   * @remarks
   * The information about the detection result.
   * 
   * @example
   * Multiple abnormal operators are detected.
   */
  message?: string;
  /**
   * @remarks
   * The name of the detection item.
   * 
   * @example
   * Metric detection
   */
  name?: string;
  /**
   * @remarks
   * The detection result items.
   */
  results?: DescribeWorkerDetectionResponseBodyDetectionItemsResults;
  /**
   * @remarks
   * The severity level of the detection result. Valid values:
   * 
   * *   NORMAL
   * *   WARNING
   * *   CRITICAL
   * 
   * @example
   * WARNING
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
      results: DescribeWorkerDetectionResponseBodyDetectionItemsResults,
      status: 'string',
    };
  }

  validate() {
    if(this.results && typeof (this.results as any).validate === 'function') {
      (this.results as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

