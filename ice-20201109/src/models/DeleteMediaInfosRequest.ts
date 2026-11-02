// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMediaInfosRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete the physical files of the media assets. If the storage address of a media asset is a user-owned OSS bucket, you must authorize the AliyunICEDefaultRole service role in advance<props="china">. For more information, see [Delete recorded files (OSS authorization management)](https://www.alibabacloud.com/help/en/ims/user-guide/record#0737d9c437bmn).
   * 
   * @example
   * false
   */
  deletePhysicalFiles?: boolean;
  /**
   * @remarks
   * The URLs of the media assets to be deleted in the corresponding system. The files corresponding to the URLs must be registered in IMS first. Separate multiple URLs with commas (,). Two formats are supported: 1. http(s)://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4? 2. OSS://example-bucket/example.mp4? In the second format, the default OSS region is the same as the service registration area.
   * 
   * @example
   * http(s)://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4?
   */
  inputURLs?: string;
  /**
   * @remarks
   * The IMS media asset IDs. Separate multiple IDs with commas (,). If the MediaIds parameter is empty, the InputURLs parameter must not be empty.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****,****15d4a4b0448391508f2cb486****
   */
  mediaIds?: string;
  static names(): { [key: string]: string } {
    return {
      deletePhysicalFiles: 'DeletePhysicalFiles',
      inputURLs: 'InputURLs',
      mediaIds: 'MediaIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletePhysicalFiles: 'boolean',
      inputURLs: 'string',
      mediaIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

