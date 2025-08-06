// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadStreamByURLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The URL of the OSS object.
   * 
   * @example
   * http://outin-31059bcee7810a200163e1c8dba****.oss-cn-shanghai.aliyuncs.com/lesson-01.mp4
   */
  fileURL?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7AE96389-DF1E-598D-816B-7B40F13B4620
   */
  requestId?: string;
  /**
   * @remarks
   * The URL of the input stream. This parameter is used when you call the [GetURLUploadInfos](https://help.aliyun.com/document_detail/106830.html) operation.
   * 
   * @example
   * https://example.com/lesson-01.mp4
   */
  sourceURL?: string;
  /**
   * @remarks
   * The ID of the stream upload job. This parameter is used when you call the [GetURLUploadInfos](https://help.aliyun.com/document_detail/106830.html) operation.
   * 
   * In ApsaraVideo VOD, you can upload only one transcoded stream in an upload job. For more information, see the PlayInfo: the playback information about a video stream section in [Basic structures](https://help.aliyun.com/document_detail/52839.html).
   * 
   * @example
   * e304b34fb3d959f92baef97b6496****
   */
  streamJobId?: string;
  static names(): { [key: string]: string } {
    return {
      fileURL: 'FileURL',
      requestId: 'RequestId',
      sourceURL: 'SourceURL',
      streamJobId: 'StreamJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileURL: 'string',
      requestId: 'string',
      sourceURL: 'string',
      streamJobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

