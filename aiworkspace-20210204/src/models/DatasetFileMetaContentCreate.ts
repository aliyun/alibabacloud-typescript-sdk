// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatasetFileMetaContentCreate extends $dara.Model {
  /**
   * @remarks
   * The comment on the file.
   * 
   * @example
   * The first image file in the dataset.
   */
  comment?: string;
  /**
   * @remarks
   * The MIME type of the file. It includes a type and a subtype.
   * 
   * This parameter is required.
   * 
   * @example
   * image/jpeg
   */
  contentType?: string;
  /**
   * @remarks
   * The size of the file in bytes.
   * 
   * @example
   * 10000
   */
  dataSize?: number;
  /**
   * @remarks
   * The time when the file was created. The time is in ISO 8601 format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2025-01-12T14:36:01Z
   */
  fileCreateTime?: string;
  /**
   * @remarks
   * The fingerprint of the file. This value ensures the uniqueness of the file content and changes if the content is modified. For OSS files, this is the ETag. For NAS files, this is the MD5 value.
   * 
   * This parameter is required.
   * 
   * @example
   * D41D8CD98F*****E9800998ECF8
   */
  fileFingerPrint?: string;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * 00001.jpeg
   */
  fileName?: string;
  /**
   * @remarks
   * The type of the file. This is the same as the Multipurpose Internet Mail Extensions (MIME) type.
   * 
   * This parameter is required.
   * 
   * @example
   * image
   */
  fileType?: string;
  /**
   * @remarks
   * The time when the file was last modified. The time is in ISO 8601 format.
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
   * The specific metadata of the file. This metadata cannot be used for retrieval. The value must be a JSON string.
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
   * The tags that are manually added by users. The \\`add\\` operation is used to add tags to a tag group. The value must be a JSON string.
   * The following tag group is available:
   * 
   * - user: A list of tag names added to a single piece of metadata.
   * 
   * ```
   * {
   *     "user":{
   *         "add":["Lane line","Sunny day"]
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
   * The unique URI of the file. This URI records the unique path of the file. The path can be an OSS or NAS path.
   * 
   * <details>
   * 
   * <summary>
   * 
   * OSS
   * 
   * </summary>
   * 
   * oss\\://${bucket}/${path}
   * 
   * </details>
   * 
   * <details>
   * 
   * <summary>
   * 
   * NAS
   * 
   * </summary>
   * 
   * nas\\://${fileSystemId}/${path}
   * 
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

