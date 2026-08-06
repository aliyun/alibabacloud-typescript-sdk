// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatasetFileMeta extends $dara.Model {
  /**
   * @remarks
   * The MIME type of the file. The value contains the type and subtype.
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
   * The dataset file metadata ID.
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
   * The file creation time. The value is a UTC timestamp in ISO 8601 format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01.000Z
   */
  fileCreateTime?: string;
  /**
   * @remarks
   * The file fingerprint value. This parameter is used to determine the uniqueness of the file content. The value changes when the file content is modified. The ETag is used for OSS files, and the MD5 value is used for NAS files.
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
   * The file type. The value is the same as the MIME type.
   * 
   * @example
   * image
   */
  fileType?: string;
  /**
   * @remarks
   * The last modification time of the file. The value is a UTC timestamp in ISO 8601 format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2025-01-12T14:36:01Z
   */
  fileUpdateTime?: string;
  /**
   * @remarks
   * The specific metadata of the file. For example, image width and height, or video bitrate and resolution. Search is not supported for this field. The value is in JSON string format.
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
   * The last update time of the semantic index. The value is a UTC timestamp in ISO 8601 format.
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
   * * ACTIVE: active.
   * * DELETED: deleted.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The collection of labels for the metadata, in JSON string format. The following label groups are included:
   * - Algorithm label group:
   *   - ai: the list of label names aggregated from all algorithm labeling tasks for a single metadata entry.
   * - User-defined label group:
   *   - user: the list of label names manually added by the user for a single metadata entry.
   *   - user-delete-ai-tags: the list of label names in the algorithm label group that the user wants to delete for a single metadata entry.
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
   * The unique URI of the file. This parameter is used to record the unique path of the file. File paths in OSS and NAS are supported.
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

