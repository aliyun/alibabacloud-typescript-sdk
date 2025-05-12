// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImageModifiedRecordsResponseBodyImageModifiedRecords } from "./DescribeImageModifiedRecordsResponseBodyImageModifiedRecords";


export class DescribeImageModifiedRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The image change records.
   */
  imageModifiedRecords?: DescribeImageModifiedRecordsResponseBodyImageModifiedRecords[];
  /**
   * @remarks
   * If the NextToken parameter is empty, no next page exists.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6koN7RqHg3d2z8LKmSoe821
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DC40EE61-7E83-59ED-AEA6-7EE9C437F352
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of image modification records.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      imageModifiedRecords: 'ImageModifiedRecords',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageModifiedRecords: { 'type': 'array', 'itemType': DescribeImageModifiedRecordsResponseBodyImageModifiedRecords },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.imageModifiedRecords)) {
      $dara.Model.validateArray(this.imageModifiedRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

