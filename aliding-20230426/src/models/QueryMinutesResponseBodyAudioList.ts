// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMinutesResponseBodyAudioList extends $dara.Model {
  /**
   * @example
   * 1000
   */
  duration?: number;
  /**
   * @example
   * 1000000000
   */
  endTime?: number;
  /**
   * @example
   * 1127942
   */
  fileSize?: number;
  /**
   * @example
   * https://xxx-hangzhou.oss-cn-hangzhou.aliyuncs.com/record_xxxx.mp3?Expires=1718045081&OSSAccessKeyId=TMP.3KdwHtvZxopmwacMZEdyb4WHLVmbArrNRB9CTKnR1MaJgmRjdmZczs6Rip66cgKgk2HhQon1yygvBnbY3uqEaZNeHBLcBa&Signature=OFWyAIY%2FdlzfwM9wIfEaKoAudkxxxxx
   */
  playUrl?: string;
  /**
   * @example
   * 123
   */
  recordId?: string;
  /**
   * @example
   * 1000000000
   */
  startTime?: number;
  /**
   * @example
   * 012345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      endTime: 'EndTime',
      fileSize: 'FileSize',
      playUrl: 'PlayUrl',
      recordId: 'RecordId',
      startTime: 'StartTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      endTime: 'number',
      fileSize: 'number',
      playUrl: 'string',
      recordId: 'string',
      startTime: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

