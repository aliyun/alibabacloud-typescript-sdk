// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadStreamByURLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The OSS file URL of the transcoded stream.
   * 
   * @example
   * http://outin-31059bcee7810a200163e1c8dba****.oss-cn-shanghai.aliyuncs.com/lesson-01.mp4
   */
  fileURL?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7AE96389-DF1E-598D-816B-7B40F13B4620
   */
  requestId?: string;
  /**
   * @remarks
   * The input URL of the transcoded stream. This value can be used as a request parameter of the [GetURLUploadInfos](https://help.aliyun.com/document_detail/106830.html) operation.
   * 
   * @example
   * https://example.com/lesson-01.mp4
   */
  sourceURL?: string;
  /**
   * @remarks
   * The job ID of the transcoded stream. This value can be used as a request parameter of the [GetURLUploadInfos](https://help.aliyun.com/document_detail/106830.html) operation.
   * 
   * ApsaraVideo VOD uses the job ID to uniquely identify a transcoded stream file. For more information, see [Basic data types - PlayInfo](https://help.aliyun.com/document_detail/52839.html).
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

