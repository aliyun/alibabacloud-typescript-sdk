// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePlayInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete the physical file of the media stream.
   * 
   * If the media asset is stored in your own Object Storage Service (OSS) bucket, you must authorize the service role AliyunICEDefaultRole in advance. <props="china">For more information, see [Authorize IMS to delete recording files in OSS](https://help.aliyun.com/document_detail/449331.html#p-ko2-wc7-iad).
   * 
   * You can delete only the physical files of transcoded streams, but not the physical files of source files.
   * 
   * @example
   * false
   */
  deletePhysicalFiles?: boolean;
  /**
   * @remarks
   * The URL of the media stream file that you want to delete. Separate multiple URLs with commas (,).
   * 
   * @example
   * https://ice-test001.oss-cn-shanghai.aliyuncs.com/%E6%8E%A5%E5%8F%A3%E6%B5%8B%E8%AF%95/%E5%B0%8F%E7%8C%AA%E4%BD%A9%E5%A5%87640*360.mp4
   */
  fileURLs?: string;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * 1d3518e0027d71ed80cd909598416303
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      deletePhysicalFiles: 'DeletePhysicalFiles',
      fileURLs: 'FileURLs',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletePhysicalFiles: 'boolean',
      fileURLs: 'string',
      mediaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

