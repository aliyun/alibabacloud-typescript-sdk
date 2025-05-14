// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMediaInfosRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete the physical file of the media asset.
   * 
   * If the media asset is stored in your own OSS bucket, you must authorize the service role AliyunICEDefaultRole in advance. For more information<props="china">, see [Authorize IMS to delete recording files in OSS](https://help.aliyun.com/zh/ims/user-guide/record?spm=a2c4g.11186623.0.i8#0737d9c437bmn).
   * 
   * @example
   * false
   */
  deletePhysicalFiles?: boolean;
  /**
   * @remarks
   * The URL of the media asset that you want to delete. The file corresponding to the URL must be registered with IMS. Separate multiple URLs with commas (,). The following two formats are supported:
   * 
   * 1.  http(s)://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4?
   * 2.  OSS://example-bucket/example.mp4?\\
   *     In this format, it is considered by default that the region of the OSS bucket in which the media asset resides is the same as the region in which IMS is activated.
   */
  inputURLs?: string;
  /**
   * @remarks
   * The ID of the media asset that you want to delete from Intelligent Media Services (IMS).
   * 
   * *   Separate multiple IDs with commas (,).
   * 
   * If you leave MediaIds empty, you must specify InputURLs.
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

