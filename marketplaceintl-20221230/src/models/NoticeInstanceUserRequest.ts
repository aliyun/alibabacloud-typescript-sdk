// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NoticeInstanceUserRequest extends $dara.Model {
  /**
   * @example
   * 5000000264872
   */
  instanceId?: number;
  noticeParam?: string;
  /**
   * @example
   * 1
   */
  noticeType?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      noticeParam: 'NoticeParam',
      noticeType: 'NoticeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      noticeParam: 'string',
      noticeType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

