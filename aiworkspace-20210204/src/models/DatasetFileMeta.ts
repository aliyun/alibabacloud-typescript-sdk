// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatasetFileMeta extends $dara.Model {
  /**
   * @remarks
   * The MIME type of the file. Contains Type and SubType.
   * 
   * @example
   * image/jpeg
   */
  contentType?: string;
  /**
   * @remarks
   * The file size, in bytes.
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
   * The file creation time. UTC timestamp in ISO 8601 format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01.000Z
   */
  fileCreateTime?: string;
  /**
   * @remarks
   * The file fingerprint value. Used to determine the uniqueness of the file content. This value changes when the file content is modified. OSS files use ETag, and NAS files use MD5 values.
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
   * cat.png
   */
  fileName?: string;
  /**
   * @remarks
   * The file type. Same as MIME Type.
   * 
   * @example
   * image
   */
  fileType?: string;
  /**
   * @remarks
   * The last modification time of the file. UTC timestamp in ISO 8601 format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2025-01-12T14:36:01Z
   */
  fileUpdateTime?: string;
  /**
   * @remarks
   * The specific metadata of the file. For example, image width and height information, or bitrate and resolution information for video files. Search capability is not currently supported. JSON string format.
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
   * The task ID of the last semantic index build.
   * 
   * @example
   * dsjob-klfwtjto****scvt3
   */
  semanticIndexJobId?: string;
  /**
   * @remarks
   * The last update time of the semantic index. UTC timestamp in ISO 8601 format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01.000Z
   */
  semanticIndexUpdateTime?: string;
  /**
   * @remarks
   * The current status of the metadata. Valid values:
   * * ACTIVE: currently available.
   * * DELETED: deleted.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The tag collection of the metadata in JSON string format. This includes:
   * - Algorithm tag group:
   *   - ai: The list of tag names aggregated from all algorithm tagging tasks for a single metadata entry.
   * - User-defined tag group:
   *   - user: The list of tag names manually added by the user for a single metadata entry.
   *   - user-delete-ai-tags: The list of tag names in the algorithm tag group that the user wants to delete for a single metadata entry.
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
   * The thumbnail URL.
   * 
   * @example
   * https://test-bucket.oss-cn-shanghai.aliyuncs.com/dataset/cat.png?Expires=171280****&OSSAccessKeyId=LTAI************&Signature=****jZcXOn7FHMCT1DLE22NuNjs%3D
   */
  thumbnailUrl?: string;
  /**
   * @remarks
   * The unique URI of the file. Used to record the unique path of the file. Supports file paths in OSS and NAS.
   * <details>
   * <summary>OSS</summary>
   * oss://${bucket}/${path}
   * </details>
   * <details>
   * <summary>NAS</summary>
   * nas://${fileSystemId}/${path}
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

