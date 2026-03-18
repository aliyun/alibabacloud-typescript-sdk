// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobResourceUsageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  date?: string;
  jobOwnerList?: string[];
  pageNumber?: number;
  pageSize?: number;
  quotaNicknameList?: string[];
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      jobOwnerList: 'jobOwnerList',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      quotaNicknameList: 'quotaNicknameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      jobOwnerList: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      quotaNicknameList: { 'type': 'array', 'itemType': 'string' },
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

