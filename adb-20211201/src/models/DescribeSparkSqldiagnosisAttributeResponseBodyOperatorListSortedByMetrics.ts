// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SparkOperatorInfo } from "./SparkOperatorInfo";


export class DescribeSparkSQLDiagnosisAttributeResponseBodyOperatorListSortedByMetrics extends $dara.Model {
  /**
   * @remarks
   * The operators sorted by the execution duration.
   */
  operatorListSortedByExclusiveTime?: SparkOperatorInfo[];
  /**
   * @remarks
   * The operators sorted by the maximum memory used.
   */
  operatorListSortedByMaxMemory?: SparkOperatorInfo[];
  static names(): { [key: string]: string } {
    return {
      operatorListSortedByExclusiveTime: 'OperatorListSortedByExclusiveTime',
      operatorListSortedByMaxMemory: 'OperatorListSortedByMaxMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorListSortedByExclusiveTime: { 'type': 'array', 'itemType': SparkOperatorInfo },
      operatorListSortedByMaxMemory: { 'type': 'array', 'itemType': SparkOperatorInfo },
    };
  }

  validate() {
    if(Array.isArray(this.operatorListSortedByExclusiveTime)) {
      $dara.Model.validateArray(this.operatorListSortedByExclusiveTime);
    }
    if(Array.isArray(this.operatorListSortedByMaxMemory)) {
      $dara.Model.validateArray(this.operatorListSortedByMaxMemory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

