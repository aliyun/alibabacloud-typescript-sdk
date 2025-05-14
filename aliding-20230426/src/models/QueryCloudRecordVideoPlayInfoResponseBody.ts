// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCloudRecordVideoPlayInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 59886
   */
  duration?: number;
  /**
   * @example
   * 1127942
   */
  fileSize?: number;
  /**
   * @example
   * https://vod.mcs.dingtalk.com/faa1566c5bc24f21821ae2394f82db2e/8bbd1612e686462ab4717919f67bb721-b8531e0d534b2f9747a9fdfxxxxxxxxc-sd.mp4
   */
  mp4FileUrl?: string;
  /**
   * @example
   * https://vod.mcs.dingtalk.com/faa1566c5bc24f21821ae2394f82db2e/8bbd1612e686462ab4717919f67bb721-ab85cc044a163568c9485xxxxxxxx76d-sd.m3u8
   */
  playUrl?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'duration',
      fileSize: 'fileSize',
      mp4FileUrl: 'mp4FileUrl',
      playUrl: 'playUrl',
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      fileSize: 'number',
      mp4FileUrl: 'string',
      playUrl: 'string',
      requestId: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

