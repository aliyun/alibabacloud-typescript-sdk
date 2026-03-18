// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRunningJobsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  from?: number;
  jobOwnerListShrink?: string;
  pageNumber?: number;
  pageSize?: number;
  quotaNicknameListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'from',
      jobOwnerListShrink: 'jobOwnerList',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      quotaNicknameListShrink: 'quotaNicknameList',
      to: 'to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      jobOwnerListShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      quotaNicknameListShrink: 'string',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

