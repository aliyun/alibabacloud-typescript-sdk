// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobResourceUsageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  date?: string;
  jobOwnerListShrink?: string;
  pageNumber?: number;
  pageSize?: number;
  quotaNicknameListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      jobOwnerListShrink: 'jobOwnerList',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      quotaNicknameListShrink: 'quotaNicknameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      jobOwnerListShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      quotaNicknameListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

