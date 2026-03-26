// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatasetFileMeta extends $dara.Model {
  /**
   * @remarks
   * The MIME Type of the file.
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
   * 120000
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
   * The download URL of the file.
   * 
   * @example
   * https://test-bucket.oss-cn-shanghai.aliyuncs.com/dataset/cat.png?Expires=1712801702&OSSAccessKeyId=****************&Signature=x4oSjZcXOn7FHMCT1D****NuNjs%3D
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The time when the file was created. A UTC timestamp in the ISO 8601 format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01.000Z
   */
  fileCreateTime?: string;
  /**
   * @remarks
   * The file fingerprint, used to determine the uniqueness of the file content. This value changes after the file content is modified. OSS files use ETags, and NAS files use MD5 values.
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
   * The file type.
   * 
   * @example
   * image
   */
  fileType?: string;
  /**
   * @remarks
   * The last modified time of the file. A UTC timestamp in the ISO 8601 format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2025-01-12T14:36:01Z
   */
  fileUpdateTime?: string;
  /**
   * @remarks
   * The specific metadata of the file. For example, the width and height of an image file, or the bitrate and resolution of a video file. This parameter cannot be used for retrieval. In JSON String format.
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
   * The ID of the last semantic indexing job.
   * 
   * @example
   * dsjob-klfwtjto****scvt3
   */
  semanticIndexJobId?: string;
  /**
   * @remarks
   * The last update time of the semantic index. A UTC timestamp in the ISO 8601 format.
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
   * The tags of the metadata, in JSON string format. Including:
   * 
   * *   Algorithm tag group:
   * 
   *     *   ai: tags from all algorithm tagging tasks on this metadata.
   * 
   * *   User-defined tag group:
   * 
   *     *   user: tags added by the user to this metadata.
   *     *   user-delete-ai-tags: tags from the algorithm tag group that the user needs to delete.
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
   * The URL of the thumbnail.
   * 
   * @example
   * https://test-bucket.oss-cn-shanghai.aliyuncs.com/dataset/cat.png?Expires=171280****&OSSAccessKeyId=LTAI************&Signature=****jZcXOn7FHMCT1DLE22NuNjs%3D
   */
  thumbnailUrl?: string;
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

