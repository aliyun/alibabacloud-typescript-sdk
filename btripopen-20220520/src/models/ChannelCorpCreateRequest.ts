// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChannelCorpCreateRequest extends $dara.Model {
  administratorEmail?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 张三
   */
  administratorName?: string;
  /**
   * @example
   * 18378889782
   */
  administratorPhone?: string;
  baseCurrency?: string;
  btripRegion?: string;
  /**
   * @example
   * 杭州市
   */
  city?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 阿里巴巴有限公司
   */
  corpName?: string;
  corpNameEn?: string;
  extendField?: string;
  /**
   * @example
   * 浙江省
   */
  province?: string;
  /**
   * @example
   * 1
   */
  scope?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 00001
   */
  thirdCorpId?: string;
  /**
   * @example
   * user_1234
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      administratorEmail: 'administrator_email',
      administratorName: 'administrator_name',
      administratorPhone: 'administrator_phone',
      baseCurrency: 'base_currency',
      btripRegion: 'btrip_region',
      city: 'city',
      corpName: 'corp_name',
      corpNameEn: 'corp_name_en',
      extendField: 'extend_field',
      province: 'province',
      scope: 'scope',
      thirdCorpId: 'third_corp_id',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      administratorEmail: 'string',
      administratorName: 'string',
      administratorPhone: 'string',
      baseCurrency: 'string',
      btripRegion: 'string',
      city: 'string',
      corpName: 'string',
      corpNameEn: 'string',
      extendField: 'string',
      province: 'string',
      scope: 'number',
      thirdCorpId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

