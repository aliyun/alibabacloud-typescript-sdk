// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatasetFileMetaConentUpdate extends $dara.Model {
  /**
   * @remarks
   * The file comment.
   */
  comment?: string;
  /**
   * @remarks
   * The MIME type of the file. The value consists of a type and a subtype.
   * 
   * Valid values:
   * 
   * *   image/png
   * *   image/svg+xml
   * *   image/jpeg
   * *   image/tiff
   * *   image/gif
   * *   image/bmp
   * *   image/x-icon
   * *   image/heic
   * *   image/webp
   * 
   * @example
   * image/jpeg
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
   * This parameter is required.
   * 
   * @example
   * 07914c9534586e4e7aa6e9dbca5009082df******fd8a0d857b33296c59bf6
   */
  datasetFileMetaId?: string;
  /**
   * @remarks
   * The time when the file is created. The time follows the ISO 8601 standard.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2025-01-12T14:36:01Z
   */
  fileCreateTime?: string;
  /**
   * @remarks
   * The fingerprint information of the file.
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
   * The file type, which is the same as Multipurpose Internet Mail Extensions (MIME) type.
   * 
   * Valid values:
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
   * The time when the file is last modified. The time follows the ISO 8601 standard.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2025-01-12T14:36:01Z
   */
  fileUpdateTime?: string;
  /**
   * @remarks
   * The specific metadata of the file, such as the width and height of an image and the bitrate and resolution of a video file. You cannot retrieve the metadata. The value is a JSON string.
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
   * dsjob-klfwt*****l0escvt3
   */
  semanticIndexJobId?: string;
  /**
   * @remarks
   * The time when the semantic index is created.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01.000Z
   */
  semanticIndexUpdateTime?: string;
  /**
   * @remarks
   * The tags to be updated.
   * 
   * *   Update an algorithm tag group (a valid TagJobId must be set):
   * 
   * <!---->
   * 
   *     {
   *        "ai":["Lane line", "Water horse", "Sunny day"]
   *     }
   * 
   * *   Update a user-defined tag group (add or remove indicates that tags are added or deleted): Tag groups that can be updated:
   * 
   *     *   user: a list of user-defined tags that can be added to or deleted from a single piece of metadata.
   *     *   user-delete-ai-tags: a list of tags that you want to delete from an algorithm tag group.
   * 
   * <!---->
   * 
   *     {
   *         "user":{
   *             "add":["Lane line","Sunny day"],
   *             "remove":["Water horse"]    },
   *         "user-delete-ai-tags":{
   *             "add": ["Ground shadow"],
   *             "remove": []
   *         }
   *     }
   * 
   * @example
   * {"ai":["cat"], "user":["black"]}
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

