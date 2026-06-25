// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatasetFileMetaConentUpdate extends $dara.Model {
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
   * The MIME type of the file. It includes a type and a subtype.
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
   * The ID of the dataset file metadata.
   * 
   * This parameter is required.
   * 
   * @example
   * 07914c9534586e4e7aa6e9dbca5009082df******fd8a0d857b33296c59bf6
   */
  datasetFileMetaId?: string;
  /**
   * @remarks
   * The time when the file was created, in ISO 8601 format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2025-01-12T14:36:01.001Z
   */
  fileCreateTime?: string;
  /**
   * @remarks
   * The file fingerprint information.
   * 
   * @example
   * 124FB71******7BE45608CDEA4DE54B3
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
   * The file type. This is the primary type from the Multipurpose Internet Mail Extensions (MIME) type.
   * 
   * @example
   * image
   */
  fileType?: string;
  /**
   * @remarks
   * The time when the file was last modified, in ISO 8601 format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2025-01-12T14:36:01.001Z
   */
  fileUpdateTime?: string;
  /**
   * @remarks
   * Specific file metadata, such as the width and height of an image, and the bitrate and resolution of a video. Retrieval based on this metadata is not yet supported. The value is a JSON string.
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
   * The ID of the job that builds the semantic index.
   * 
   * @example
   * dsjob-klfwt*****l0escvt3
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
  /**
   * @remarks
   * The tag groups to update.
   * 
   * - Update tags using an algorithm. Set a valid TagJobId.
   * 
   * ```
   * {
   *    "ai":["lane line", "water barrier", "sunny day"]
   * }
   * ```
   * 
   * - Manual tagging: Use add or remove to add or delete tags within a tag group. The modifiable tag groups are:
   * 
   *   - user: A list of tag names to add to or delete from a single metadata entry.
   * 
   *   - user-delete-ai-tags: A list of tag names to delete from the algorithm-generated tag group for a single metadata entry.
   * 
   * ```
   * {
   *     "user":{
   *         "add":["lane line","sunny day"],
   *         "remove":["water barrier"]
   *     },
   *     "user-delete-ai-tags":{
   *         "add": ["ground shade"],
   *         "remove": []
   *     }
   * }
   * ```
   * 
   * @example
   * {
   *     "user":{
   *         "add":["Lane line","Sunny day"],
   *         "remove":["Water horse"]
   *     },
   *     "user-delete-ai-tags":{
   *         "add": ["Ground shadow"],
   *         "remove": []
   *     }
   * }
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      contentType: 'ContentType',
      dataSize: 'DataSize',
      datasetFileMetaId: 'DatasetFileMetaId',
      fileCreateTime: 'FileCreateTime',
      fileFingerPrint: 'FileFingerPrint',
      fileName: 'FileName',
      fileType: 'FileType',
      fileUpdateTime: 'FileUpdateTime',
      metaAttributes: 'MetaAttributes',
      semanticIndexJobId: 'SemanticIndexJobId',
      semanticIndexUpdateTime: 'SemanticIndexUpdateTime',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      contentType: 'string',
      dataSize: 'number',
      datasetFileMetaId: 'string',
      fileCreateTime: 'string',
      fileFingerPrint: 'string',
      fileName: 'string',
      fileType: 'string',
      fileUpdateTime: 'string',
      metaAttributes: 'string',
      semanticIndexJobId: 'string',
      semanticIndexUpdateTime: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

