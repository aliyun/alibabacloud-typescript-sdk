// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBadSqlDetectionResponseBodyDetectionItemsResults } from "./DescribeBadSqlDetectionResponseBodyDetectionItemsResults";


export class DescribeBadSqlDetectionResponseBodyDetectionItems extends $dara.Model {
  /**
   * @remarks
   * The information about the diagnostic result.
   * 
   * @example
   * Multiple bad SQL statements are detected. Perform optimization on the statements.
   */
  message?: string;
  /**
   * @remarks
   * The name of the detection item.
   * 
   * @example
   * PeakMemory
   * OperatorCost
   * ScanSize
   */
  name?: string;
  /**
   * @remarks
   * The detection result items.
   */
  results?: DescribeBadSqlDetectionResponseBodyDetectionItemsResults[];
  /**
   * @remarks
   * The severity level of the detection result. Valid values:
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
      results: { 'type': 'array', 'itemType': DescribeBadSqlDetectionResponseBodyDetectionItemsResults },
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

