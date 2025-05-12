// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudDriveGroupsResponseBodyCloudDriveGroups } from "./DescribeCloudDriveGroupsResponseBodyCloudDriveGroups";


export class DescribeCloudDriveGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of team spaces.
   */
  cloudDriveGroups?: DescribeCloudDriveGroupsResponseBodyCloudDriveGroups[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EF015AE5-B30A-5189-B519-735CEE40****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      cloudDriveGroups: 'CloudDriveGroups',
      count: 'Count',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudDriveGroups: { 'type': 'array', 'itemType': DescribeCloudDriveGroupsResponseBodyCloudDriveGroups },
      count: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.cloudDriveGroups)) {
      $dara.Model.validateArray(this.cloudDriveGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

