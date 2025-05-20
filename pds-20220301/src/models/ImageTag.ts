// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageTag extends $dara.Model {
  /**
   * @example
   * 10
   */
  count?: number;
  /**
   * @example
   * image
   */
  coverFileCategory?: string;
  /**
   * @example
   * 5d79206586bb5dd69fb34c349282718146c55da7
   */
  coverFileId?: string;
  /**
   * @example
   * 0.736
   */
  coverOverallScore?: number;
  /**
   * @example
   * 1
   */
  coverTagConfidence?: number;
  /**
   * @example
   * https://data.aliyunpds.com/hz22%2F5d5b986facbec311ef844c25954f96821497b383%2F5d5b986f955410dd991646bb87c6b4e899eff525?Expires=xxx&OSSAccessKeyId=xxx&Signature=xxx
   */
  coverUrl?: string;
  /**
   * @example
   * 动物
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

