// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatasetFileMetaContentCreate extends $dara.Model {
  /**
   * @remarks
   * The file comment.
   * 
   * @example
   * The first image file in the dataset.
   */
  comment?: string;
  /**
   * @remarks
   * The MIME type of the file. Contains Type and SubType.
   * 
   * This parameter is required.
   * 
   * @example
   * image/jpeg
   */
  contentType?: string;
  /**
   * @remarks
   * The file size in bytes.
   * 
   * @example
   * 10000
   */
  dataSize?: number;
  /**
   * @remarks
   * The file creation time in ISO 8601 format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2025-01-12T14:36:01Z
   */
  fileCreateTime?: string;
  /**
   * @remarks
   * The file fingerprint value. Used to determine the uniqueness of file content. This value changes when the file content is modified. OSS files use ETag, and NAS files use MD5 values.
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
   * The file type. Same as MIME Type.
   * 
   * This parameter is required.
   * 
   * @example
   * image
   */
  fileType?: string;
  /**
   * @remarks
   * The last modification time of the file in ISO 8601 format.
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
   * The specific metadata of the file, not searchable. In JSON string format.
   * 
   * @example
   * {
   *     "ImageHeight": 1080,
   *     "ImageWidth": 1920
   * }
   */
  metaAttributes?: string;
  /**
   * @remarks
   * User manual tagging: (add indicates adding tags to the tag group). In JSON string format.
   * The operable tag groups are:
   * - user: The list of tag names manually added by the user for a single metadata entry.
   * 
   * ```
   * {
   *     "user":{
   *         "add":["lane_line","sunny"]
   *     }
   * }
   * ```
   * 
   * @example
   * {
   *     "user":{
   *         "add":["Lane line","Sunny day"]
   *     }
   * }
   */
  tags?: string;
  /**
   * @remarks
   * The unique URI of the file. Used to record the unique file path. Supports file paths in OSS and NAS.
   * <details>
   * <summary>OSS</summary>
   * oss://${bucket}/${path}
   * </details>
   * <details>
   * <summary>NAS</summary>
   * nas://${fileSystemId}/${path}
   * </details>
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

