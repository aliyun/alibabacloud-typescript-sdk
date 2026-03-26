// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatasetFileMetaContentCreate extends $dara.Model {
  /**
   * @remarks
   * The file comment.
   */
  comment?: string;
  /**
   * @remarks
   * The MIME type of the file. It contains Type and SubType.
   * 
   * Valid values:
   * 
   * *   image/png: PNG.
   * *   image/jpeg: JPEG.
   * *   image/tiff: TIFF.
   * *   image/bmp: BMP.
   * *   image/gif: GIF.
   * *   image/x-icon: ICON.
   * *   image/svg+xml: SVG.
   * *   image/webp: WEBP.
   * *   image/heic: HEIC
   * 
   * This parameter is required.
   * 
   * @example
   * image/jpeg
   */
  contentType?: string;
  /**
   * @remarks
   * The file size. Unit: bytes.
   * 
   * @example
   * 10000
   */
  dataSize?: number;
  /**
   * @remarks
   * The time when the file was created. The time follows the ISO 8601 standard.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2025-01-12T14:36:01Z
   */
  fileCreateTime?: string;
  /**
   * @remarks
   * The file fingerprint. Used to check the uniqueness of the file. This value changes after the file content is modified. OSS files use ETags, and NAS files use MD5 values.
   * 
   * This parameter is required.
   * 
   * @example
   * D41D8CD98F*****E9800998ECF8
   */
  fileFingerPrint?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * 00001.jpeg
   */
  fileName?: string;
  /**
   * @remarks
   * The file type. The same as MIME type.
   * 
   * Valid values:
   * 
   * *   image
   * *   application
   * *   audio
   * *   video
   * *   text
   * 
   * This parameter is required.
   * 
   * @example
   * image
   */
  fileType?: string;
  /**
   * @remarks
   * The time when the file was last modified. The time follows the ISO 8601 standard.
   * 
   * This parameter is required.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2025-01-12T14:36:01Z
   */
  fileUpdateTime?: string;
  /**
   * @remarks
   * The specific metadata of the file. You cannot retrieve the metadata. The value is a JSON string.
   * 
   * @example
   * {
   *     "Image":
   *     {
   *         "Width": 1920,
   *         "Height": 1080,
   *         "Channel": 3
   *     }
   * }
   */
  metaAttributes?: string;
  /**
   * @remarks
   * The tags manually added. The value is a JSON string. Operable tag group:
   * 
   * *   user: the list of tags to add to a metadata entry.
   * 
   * <!---->
   * 
   *     {
   *         "user":{
   *             "add":["lane line","sunny"]
   *         }
   *     }
   * 
   * @example
   * {"user":["cat", "White"]}
   */
  tags?: string;
  /**
   * @remarks
   * The URI of the file. Used to record the unique path of the file. File paths in Object Storage Service (OSS) and File Storage NAS (NAS) are supported.
   * 
   * **OSS**
   * 
   * oss://${bucket}/${path}
   * 
   * **NAS**
   * 
   * nas://${fileSystemId}/${path}
   * 
   * This parameter is required.
   * 
   * @example
   * oss://*****-test/dataset/1653421.jpg
   * nas://0e25d***dff/dataset/1653421.jpg
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      contentType: 'ContentType',
      dataSize: 'DataSize',
      fileCreateTime: 'FileCreateTime',
      fileFingerPrint: 'FileFingerPrint',
      fileName: 'FileName',
      fileType: 'FileType',
      fileUpdateTime: 'FileUpdateTime',
      metaAttributes: 'MetaAttributes',
      tags: 'Tags',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      contentType: 'string',
      dataSize: 'number',
      fileCreateTime: 'string',
      fileFingerPrint: 'string',
      fileName: 'string',
      fileType: 'string',
      fileUpdateTime: 'string',
      metaAttributes: 'string',
      tags: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

