// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotlineRecordDetailResponseBodyResultDataData extends $dara.Model {
  /**
   * @example
   * 1614578410000
   */
  endTime?: number;
  /**
   * @example
   * http://xxx.xxxxx/xx.wav
   */
  ossUrl?: string;
  /**
   * @example
   * 123@123.com
   */
  servicerName?: string;
  /**
   * @example
   * 1614578400000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ossUrl: 'OssUrl',
      servicerName: 'ServicerName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      ossUrl: 'string',
      servicerName: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

