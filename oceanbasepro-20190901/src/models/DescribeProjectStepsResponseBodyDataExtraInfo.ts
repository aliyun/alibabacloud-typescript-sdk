// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeProjectStepsResponseBodyDataExtraInfoErrorDetails } from "./DescribeProjectStepsResponseBodyDataExtraInfoErrorDetails";


export class DescribeProjectStepsResponseBodyDataExtraInfo extends $dara.Model {
  /**
   * @example
   * INNER_ERROR
   */
  errorCode?: string;
  errorDetails?: DescribeProjectStepsResponseBodyDataExtraInfoErrorDetails[];
  /**
   * @example
   * The ResourceDirectoryId is invalid.
   */
  errorMsg?: string;
  errorParam?: { [key: string]: string };
  /**
   * @example
   * null
   */
  failedTime?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorDetails: 'ErrorDetails',
      errorMsg: 'ErrorMsg',
      errorParam: 'ErrorParam',
      failedTime: 'FailedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorDetails: { 'type': 'array', 'itemType': DescribeProjectStepsResponseBodyDataExtraInfoErrorDetails },
      errorMsg: 'string',
      errorParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      failedTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.errorDetails)) {
      $dara.Model.validateArray(this.errorDetails);
    }
    if(this.errorParam) {
      $dara.Model.validateMap(this.errorParam);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

