// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRecordingsResponseBodyRecordings } from "./DescribeRecordingsResponseBodyRecordings";


export class DescribeRecordingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nbCQ7ar+fECeh1IuWQXi39R5eoJ68zWp99mTAKRRNRhw==
   */
  nextToken?: string;
  /**
   * @remarks
   * The screen recording files.
   */
  recordings?: DescribeRecordingsResponseBodyRecordings[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 327CFE78-1C0D-51AC-A9C6-BCEDF0DD44D6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      recordings: 'Recordings',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      recordings: { 'type': 'array', 'itemType': DescribeRecordingsResponseBodyRecordings },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.recordings)) {
      $dara.Model.validateArray(this.recordings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

