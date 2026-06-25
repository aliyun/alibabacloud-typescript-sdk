// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatasetFileMeta extends $dara.Model {
  /**
   * @remarks
   * The MIME type of the file. It includes a type and a subtype.
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
   * 120000
   */
  dataSize?: number;
  /**
   * @remarks
   * The ID of the dataset file metadata.
   * 
   * @example
   * 07914c9534586e4e7aa6e9dbca5009082df******fd8a0d857b33296c59bf6
   */
  datasetFileMetaId?: string;
  /**
   * @remarks
   * The download URL of the file.
   * 
   * @example
   * https://test-bucket.oss-cn-shanghai.aliyuncs.com/dataset/cat.png?Expires=171280****&OSSAccessKeyId=LTAI************&Signature=****jZcXOn7FHMCT1DLE22NuNjs%3D
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The time when the file was created. The time is in UTC and in ISO 8601 format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01.000Z
   */
  fileCreateTime?: string;
  /**
   * @remarks
   * The file fingerprint. This value ensures the uniqueness of the file content and changes if the content is modified. The ETag is used for OSS files, and the MD5 value is used for NAS files.
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
   * cat.png
   */
  fileName?: string;
  /**
   * @remarks
   * The type of the file. This corresponds to the main type of a Multipurpose Internet Mail Extensions (MIME) type.
   * 
   * @example
   * image
   */
  fileType?: string;
  /**
   * @remarks
   * The time when the file was last modified. The time is in Coordinated Universal Time (UTC) and in ISO 8601 format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2025-01-12T14:36:01Z
   */
  fileUpdateTime?: string;
  /**
   * @remarks
   * Specific metadata for the file, such as the width and height of an image or the bitrate and resolution of a video. Currently, this metadata cannot be used for retrieval. The format is a JSON string.
   * 
   * @example
   * {     "ImageHeight": 400,     "ImageWidth": 800 }
   */
  metaAttributes?: string;
  /**
   * @remarks
   * The similarity score.
   * 
   * @example
   * 0.6
   */
  score?: number;
  /**
   * @remarks
   * The ID of the job that last built the semantic index.
   * 
   * @example
   * dsjob-klfwtjto****scvt3
   */
  semanticIndexJobId?: string;
  /**
   * @remarks
   * The time when the semantic index was last updated. The time is in UTC and in ISO 8601 format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01.000Z
   */
  semanticIndexUpdateTime?: string;
  /**
   * @remarks
   * The current status of the metadata:
   * \\- ACTIVE: Active.
   * \\- DELETED: Deleted.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * A collection of tags for the metadata, in JSON string format. The collection includes the following groups:
   * 
   * - Algorithm tag group:
   * 
   *   - ai: A list of tag names aggregated from all algorithm-based tagging tasks for a single metadata record.
   * 
   * - User-defined tag group:
   * 
   *   - user: A list of tag names that a user adds to a single metadata record.
   * 
   *   - user-delete-ai-tags: A list of tag names from the algorithm tag group that the user deletes from a single metadata record.
   * 
   * @example
   * {
   *     "ai":
   *     [
   *         "Lane line",
   *         "Water horse",
   *         "Sunny day"
   *     ],
   *     "user":
   *     [
   *         "Everett",
   *         "Intelligent driving Dataset 1",
   *         "Cloudy day"
   *     ],
   *     "user-delete-ai-tags":
   *     [
   *         "Sunny day"
   *     ]
   * }
   */
  tags?: string;
  /**
   * @remarks
   * The URL of the thumbnail.
   * 
   * @example
   * https://test-bucket.oss-cn-shanghai.aliyuncs.com/dataset/cat.png?Expires=171280****&OSSAccessKeyId=LTAI************&Signature=****jZcXOn7FHMCT1DLE22NuNjs%3D
   */
  thumbnailUrl?: string;
  /**
   * @remarks
   * The unique URI of the file. It records the unique path of the file. Paths for files in OSS and NAS are supported.
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
   * @example
   * oss://test-bucket/dataset/cat.png
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      dataSize: 'DataSize',
      datasetFileMetaId: 'DatasetFileMetaId',
      downloadUrl: 'DownloadUrl',
      fileCreateTime: 'FileCreateTime',
      fileFingerPrint: 'FileFingerPrint',
      fileName: 'FileName',
      fileType: 'FileType',
      fileUpdateTime: 'FileUpdateTime',
      metaAttributes: 'MetaAttributes',
      score: 'Score',
      semanticIndexJobId: 'SemanticIndexJobId',
      semanticIndexUpdateTime: 'SemanticIndexUpdateTime',
      status: 'Status',
      tags: 'Tags',
      thumbnailUrl: 'ThumbnailUrl',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      dataSize: 'number',
      datasetFileMetaId: 'string',
      downloadUrl: 'string',
      fileCreateTime: 'string',
      fileFingerPrint: 'string',
      fileName: 'string',
      fileType: 'string',
      fileUpdateTime: 'string',
      metaAttributes: 'string',
      score: 'number',
      semanticIndexJobId: 'string',
      semanticIndexUpdateTime: 'string',
      status: 'string',
      tags: 'string',
      thumbnailUrl: 'string',
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

