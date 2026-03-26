// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatasetFileMetaContentGet extends $dara.Model {
  /**
   * @remarks
   * The file comment.
   */
  comment?: string;
  /**
   * @remarks
   * The MIME type of the file. It contains a Type and a SubType.
   * 
   * Valid value:
   * 
   * *   image/png: PNG
   * *   image/jpeg: JPEG
   * *   image/tiff: TIFF
   * *   image/bmp: BMP
   * *   image/gif: GIF
   * *   image/x-icon: ICON
   * *   image/svg + xml: SVG
   * *   image/heic: HEIC
   * *   image/webp: WEBP
   * 
   * @example
   * text/png
   */
  contentType?: string;
  /**
   * @remarks
   * The file size. Unit: byte.
   * 
   * @example
   * 10000
   */
  dataSize?: number;
  /**
   * @remarks
   * The metadata ID of the dataset file.
   * 
   * @example
   * 07914c9534586e4e7aa6e9dbca5009082df******fd8a0d857b33296c59bf6
   */
  datasetFileMetaId?: string;
  /**
   * @remarks
   * The time when the file was created. Format: ISO8601.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2025-01-12T14:36:01Z
   */
  fileCreateTime?: string;
  /**
   * @remarks
   * The directory of the file that is stored in OSS, NAS, or Cloud Parallel File Storage (CPFS).
   * 
   * @example
   * icp_certificate_card/icp/1577179298694813/1716429710367
   */
  fileDir?: string;
  /**
   * @remarks
   * The fingerprint value of the file. Used to check the uniqueness of the file. This value changes after the file content is modified. OSS files use ETags, and NAS files use MD5.
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
   * Valid value:
   * 
   * *   image
   * *   application
   * *   audio
   * *   video
   * *   text
   * 
   * @example
   * image
   */
  fileType?: string;
  /**
   * @remarks
   * The time when the file was last modified. Format: ISO8601.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2025-01-12T14:36:01Z
   */
  fileUpdateTime?: string;
  /**
   * @remarks
   * The specific metadata of the file. You cannot retrieve the metadata. In JSON String format.
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
   * The ID of the semantic index-based job.
   * 
   * @example
   * dsjob-klfwtjtov*****scvt3
   */
  semanticIndexJobId?: string;
  /**
   * @remarks
   * The time when the semantic index-based job is created.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01.000Z
   */
  semanticIndexUpdateTime?: string;
  status?: string;
  /**
   * @remarks
   * The time when the tag is last modified. The time follows the ISO 8601 standard.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01.000Z
   */
  tagUpdateTime?: string;
  /**
   * @remarks
   * The tags for the metadata. The tags are divided into the following groups:
   * 
   * *   Algorithm tag group:
   * 
   *     *   ai: a list of tags that are aggregated by all algorithm tagging tasks for a single piece of metadata.
   * 
   * *   User-defined tag groups:
   * 
   *     *   user: a list of user-defined tags that are added to a single piece of metadata.
   *     *   user-delete-ai-tags: a list of tags that you want to delete from an algorithm tag group.
   * 
   * @example
   * {
   *     "ai":
   *     [
   *         "Felis catus",
   *         "Shorthair"
   *     ],
   *     "user":
   *     [
   *         "cat",
   *         "White"
   *     ]
   * }
   */
  tags?: string;
  /**
   * @remarks
   * The unique URI of the file. Used to record the unique path of the file. File paths in OSS and NAS are supported.
   * 
   * **OSS**
   * 
   * oss://${bucket}/${path}
   * 
   * **NAS**
   * 
   * nas://${fileSystemId}/${path}
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
      datasetFileMetaId: 'DatasetFileMetaId',
      fileCreateTime: 'FileCreateTime',
      fileDir: 'FileDir',
      fileFingerPrint: 'FileFingerPrint',
      fileName: 'FileName',
      fileType: 'FileType',
      fileUpdateTime: 'FileUpdateTime',
      metaAttributes: 'MetaAttributes',
      semanticIndexJobId: 'SemanticIndexJobId',
      semanticIndexUpdateTime: 'SemanticIndexUpdateTime',
      status: 'Status',
      tagUpdateTime: 'TagUpdateTime',
      tags: 'Tags',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      contentType: 'string',
      dataSize: 'number',
      datasetFileMetaId: 'string',
      fileCreateTime: 'string',
      fileDir: 'string',
      fileFingerPrint: 'string',
      fileName: 'string',
      fileType: 'string',
      fileUpdateTime: 'string',
      metaAttributes: 'string',
      semanticIndexJobId: 'string',
      semanticIndexUpdateTime: 'string',
      status: 'string',
      tagUpdateTime: 'string',
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

