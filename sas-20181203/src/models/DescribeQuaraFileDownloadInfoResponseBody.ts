// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQuaraFileDownloadInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The URL that is used to download the file. The URL is valid for five minutes.
   * 
   * @example
   * https://xxxxxxxx.oss-cn-hangzhou-1.aliyuncs.com/xxxxx/xxxxxxxxxxxxxx?Expires=1671448125&OSSAccessKeyId=xxx
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The MD5 hash value of the quarantined file.
   * 
   * @example
   * bb62ef1311bc564377a0378d3axxxxxx
   */
  md5?: string;
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * /etc/test
   */
  path?: string;
  /**
   * @remarks
   * The ID of the quarantined file.
   * 
   * @example
   * 123
   */
  quaraFileId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 29874225-EAAC-5415-8501-32DD20FXXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The tag that is added to the related alert.
   * 
   * @example
   * 6d4ff40a22b15c86adecf2aa48xxxxx
   */
  tag?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * 4fe8e1cd-3c37-4851-b9de-124da32c****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      md5: 'Md5',
      path: 'Path',
      quaraFileId: 'QuaraFileId',
      requestId: 'RequestId',
      tag: 'Tag',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      md5: 'string',
      path: 'string',
      quaraFileId: 'number',
      requestId: 'string',
      tag: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

