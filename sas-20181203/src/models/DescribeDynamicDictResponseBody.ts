// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDynamicDictResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of weak password rules that are added.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The name of the OSS object that contains custom weak passwords.
   * 
   * @example
   * test_dict.plain
   */
  fileName?: string;
  /**
   * @remarks
   * The size of the OSS object. Unit: bytes.
   * 
   * @example
   * 40
   */
  fileSize?: number;
  /**
   * @remarks
   * The maximum number of weak password rules that can be added.
   * 
   * @example
   * 9
   */
  limit?: number;
  /**
   * @remarks
   * The IP address of the Object Storage Service (OSS) object.
   * 
   * @example
   * cloudtest01/661767e1-5ae3-4ec5-865f-03039436893a/sacc2*****
   */
  ossUrl?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A3D7C47D-3F11-57BB-90E8-E5C20C61****
   */
  requestId?: string;
  /**
   * @remarks
   * The timestamp when the OSS object was uploaded. Unit: milliseconds.
   * 
   * @example
   * 1719919421
   */
  uploadTime?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      fileName: 'FileName',
      fileSize: 'FileSize',
      limit: 'Limit',
      ossUrl: 'OssUrl',
      requestId: 'RequestId',
      uploadTime: 'UploadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      fileName: 'string',
      fileSize: 'number',
      limit: 'number',
      ossUrl: 'string',
      requestId: 'string',
      uploadTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

