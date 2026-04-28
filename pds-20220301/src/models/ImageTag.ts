// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageTag extends $dara.Model {
  /**
   * @remarks
   * The number of files in the group.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The category of the cover image.
   * 
   * @example
   * image
   */
  coverFileCategory?: string;
  /**
   * @remarks
   * The ID of the cover file.
   * 
   * @example
   * 5d79206586bb5dd69fb34c349282718146c55da7
   */
  coverFileId?: string;
  /**
   * @remarks
   * The score of the cover image.
   * 
   * @example
   * 0.736
   */
  coverOverallScore?: number;
  /**
   * @remarks
   * The confidence level of the cover image tag.
   * 
   * @example
   * 1
   */
  coverTagConfidence?: number;
  /**
   * @remarks
   * The URL of the cover image.
   * 
   * @example
   * https://data.aliyunpds.com/hz22%2F5d5b986facbec311ef844c25954f96821497b383%2F5d5b986f955410dd991646bb87c6b4e899eff525?Expires=xxx&OSSAccessKeyId=xxx&Signature=xxx
   */
  coverUrl?: string;
  /**
   * @remarks
   * The name of the tag.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      coverFileCategory: 'cover_file_category',
      coverFileId: 'cover_file_id',
      coverOverallScore: 'cover_overall_score',
      coverTagConfidence: 'cover_tag_confidence',
      coverUrl: 'cover_url',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      coverFileCategory: 'string',
      coverFileId: 'string',
      coverOverallScore: 'number',
      coverTagConfidence: 'number',
      coverUrl: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

