// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { File } from "./File";


export class Story extends $dara.Model {
  /**
   * @remarks
   * The ID of the story cover file.
   * 
   * @example
   * 63e5e4340f76cb3ead5f40f68163f0f967c1a7bf
   */
  coverFileId?: string;
  /**
   * @remarks
   * The URL of thumbnail of the story cover file.
   * 
   * @example
   * https://pds-domain-bucket.oss-cn-hangzhou.aliyuncs.com/Bh1HqdAs%2F1001%2F642a88c26f99cad589904fc8a6b2db6021c6601f%2F642a88c29391c47f221e49e88a21fa9b0a9e5063?security-token=CAIS%2BgF1q6Ft5B2yfSjIr5eGE8nGtYZ59bSnbUODlmsjTttVhpbFpjz2IHpPfHdoBe0btvU%2BlWxX6fwZlq5rR4QAXlDfNXD6XXO2qFHPWZHInuDox55m4cTXNAr%2BIhr%2F29CoEIedZdjBe%2FCrRknZnytou9XTfimjWFrXWv%2Fgy%2BQQDLItUxK%2FcCBNCfpPOwJms7V6D3bKMuu3OROY6Qi5TmgQ41En1DIlt%2FXuk5DCtkqB12eXkLFF%2B97DRbG%2FdNRpMZtFVNO44fd7bKKp0lQLsUMSqv8q0fEcqGaW4o7CWQJLnzyCMvvJ9OVDFyN0aKEnH7J%2Bq%2FzxhTPrMnpkSlacGoABVgD3mIAeUoDYKTJrFTPdmAPIrlUUQ1HZstB0ZVHvYByygr3oeitG9FEQ8lcfaZYJOtWRchdgH8tsSwHj2jI1vMeAiLHgbW98SPA3yfN8OR1kLW73uq3LAvekc9Qldz33YTM4JA5MNJzR8x5O6Oe4rY5OMSSVU5F%2Ffr8bJZD%2FXMM%3D&x-oss-access-key-id=STS.NT3XsrXYXBvLoe2rkvBTyiSnD&x-oss-expires=1685966251&x-oss-process=image%2Fresize%2Cw_500&x-oss-signature=XimW6haBxYktKg4cstMfpd%2F2LSoMibj6A%2B7ZqBJcSbQ%3D&x-oss-signature-version=OSS2
   */
  coverFileThumbnailUrl?: string;
  /**
   * @remarks
   * The time when the story was created. The time follows the RFC3339 standard.
   * 
   * @example
   * 2022-01-14T10:17:18.102700407+08:00
   */
  createdAt?: string;
  /**
   * @remarks
   * The custom tags. You can specify key-value pairs based on your business requirements to search for stories by calling the FindStories operation.
   */
  customLabels?: { [key: string]: any };
  /**
   * @remarks
   * The information about face-based groups. This parameter is valid only if story_type is set to PeopleMemory. This parameter is invalid for stories of other types or custom stories.
   */
  faceGroupIds?: string[];
  /**
   * @remarks
   * The time when the story ends. The time follows the RFC3339 standard.
   * 
   * @example
   * 2022-01-14T10:17:18.102700407+08:00
   */
  storyEndTime?: string;
  /**
   * @remarks
   * The story files.
   */
  storyFileList?: File[];
  /**
   * @remarks
   * The story ID.
   * 
   * @example
   * 9132e0d8-fe92-4e56-86c3-f5f112308003
   */
  storyId?: string;
  /**
   * @remarks
   * The name of the story.
   * 
   * @example
   * test_name
   */
  storyName?: string;
  /**
   * @remarks
   * The time when the story starts. The time follows the RFC3339 standard.
   * 
   * @example
   * 2021-01-14T10:17:18.102700407+08:00
   */
  storyStartTime?: string;
  /**
   * @remarks
   * The subtype of the story. It is specified when the story is created.
   * 
   * @example
   * Solo
   */
  storySubType?: string;
  /**
   * @remarks
   * The type of the story. It is specified when the story is created.
   * 
   * @example
   * PeopleMemory
   */
  storyType?: string;
  /**
   * @remarks
   * The time when the story was updated. The time follows the RFC3339 standard.
   * 
   * @example
   * 2022-01-14T10:17:18.102700407+08:00
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      coverFileId: 'cover_file_id',
      coverFileThumbnailUrl: 'cover_file_thumbnail_url',
      createdAt: 'created_at',
      customLabels: 'custom_labels',
      faceGroupIds: 'face_group_ids',
      storyEndTime: 'story_end_time',
      storyFileList: 'story_file_list',
      storyId: 'story_id',
      storyName: 'story_name',
      storyStartTime: 'story_start_time',
      storySubType: 'story_sub_type',
      storyType: 'story_type',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverFileId: 'string',
      coverFileThumbnailUrl: 'string',
      createdAt: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      faceGroupIds: { 'type': 'array', 'itemType': 'string' },
      storyEndTime: 'string',
      storyFileList: { 'type': 'array', 'itemType': File },
      storyId: 'string',
      storyName: 'string',
      storyStartTime: 'string',
      storySubType: 'string',
      storyType: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    if(this.customLabels) {
      $dara.Model.validateMap(this.customLabels);
    }
    if(Array.isArray(this.faceGroupIds)) {
      $dara.Model.validateArray(this.faceGroupIds);
    }
    if(Array.isArray(this.storyFileList)) {
      $dara.Model.validateArray(this.storyFileList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

