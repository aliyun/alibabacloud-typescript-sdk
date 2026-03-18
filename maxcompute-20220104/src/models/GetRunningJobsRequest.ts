// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRunningJobsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  from?: number;
  jobOwnerList?: string[];
  pageNumber?: number;
  pageSize?: number;
  quotaNicknameList?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'from',
      jobOwnerList: 'jobOwnerList',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      quotaNicknameList: 'quotaNicknameList',
      to: 'to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      jobOwnerList: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      quotaNicknameList: { 'type': 'array', 'itemType': 'string' },
      to: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobOwnerList)) {
      $dara.Model.validateArray(this.jobOwnerList);
    }
    if(Array.isArray(this.quotaNicknameList)) {
      $dara.Model.validateArray(this.quotaNicknameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

