// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRplInspectionTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  failPageNumber?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 10
   */
  failPageSize?: number;
  /**
   * @remarks
   * The region where the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The switchover task ID.
   * 
   * @example
   * etx-szr2rr6i*****
   */
  slinkTaskId?: string;
  /**
   * @remarks
   * The requested page number.
   * 
   * @example
   * 1
   */
  successPageNumber?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 15
   */
  successPageSize?: number;
  static names(): { [key: string]: string } {
    return {
      failPageNumber: 'FailPageNumber',
      failPageSize: 'FailPageSize',
      regionId: 'RegionId',
      slinkTaskId: 'SlinkTaskId',
      successPageNumber: 'SuccessPageNumber',
      successPageSize: 'SuccessPageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failPageNumber: 'number',
      failPageSize: 'number',
      regionId: 'string',
      slinkTaskId: 'string',
      successPageNumber: 'number',
      successPageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

