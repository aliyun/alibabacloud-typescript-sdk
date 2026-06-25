// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatasetFileMetaContentGet extends $dara.Model {
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
   * @example
   * image/png
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
   * The ID of the dataset file metadata.
   * 
   * @example
   * 07914c9534586e4e7aa6e9dbca5009082df******fd8a0d857b33296c59bf6
   */
  datasetFileMetaId?: string;
  /**
   * @remarks
   * The time when the file was created. The time is in the ISO 8601 format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2025-01-12T14:36:01Z
   */
  fileCreateTime?: string;
  /**
   * @remarks
   * The path of the folder where the OSS, NAS, or CPFS file is located.
   * 
   * @example
   * icp_certificate_card/icp/1577179298694813/1716429710367
   */
  fileDir?: string;
  /**
   * @remarks
   * The fingerprint of the file. This value ensures the uniqueness of the file content. The value changes if the file content is modified. For OSS files, the ETag is used. For NAS files, the MD5 hash is used.
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
   * The file type. This is the same as the Multipurpose Internet Mail Extensions (MIME) type.
   * 
   * @example
   * image
   */
  fileType?: string;
  /**
   * @remarks
   * The time when the file was last modified. The time is in the ISO 8601 format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2025-01-12T14:36:01Z
   */
  fileUpdateTime?: string;
  /**
   * @remarks
   * The specific metadata of the file. This metadata cannot be used for retrieval. The format is a JSON string.
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
   * The ID of the job that builds the semantic index.
   * 
   * @example
   * dsjob-klfwtjtov*****scvt3
   */
  semanticIndexJobId?: string;
  /**
   * @remarks
   * The time when the semantic index was built.
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
   * The time when the tag was last modified. The time is in the ISO 8601 format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01.000Z
   */
  tagUpdateTime?: string;
  /**
   * @remarks
   * A collection of tags for the metadata. It includes the following groups:
   * 
   * - Algorithm tag group:
   * 
   *   - ai: A list of tag names aggregated from all algorithmic tagging tasks for a single metadata record.
   * 
   * - User-defined tag group:
   * 
   *   - user: A list of tag names that a user adds to a single metadata record.
   * 
   *   - user-delete-ai-tags: A list of tag names from the algorithm tag group that the user wants to delete from a single metadata record.
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
   * The unique URI of the file. This URI records the unique path of the file. Paths for files in OSS and NAS are supported.
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

