// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOpsNoticeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * notice-2338dxxxxxx
   */
  noticeId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      noticeId: 'NoticeId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noticeId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

