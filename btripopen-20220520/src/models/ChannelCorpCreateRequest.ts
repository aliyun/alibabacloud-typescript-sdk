// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChannelCorpCreateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  administratorName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 18378889782
   */
  administratorPhone?: string;
  city?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  corpName?: string;
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
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      administratorName: 'administrator_name',
      administratorPhone: 'administrator_phone',
      city: 'city',
      corpName: 'corp_name',
      province: 'province',
      scope: 'scope',
      thirdCorpId: 'third_corp_id',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      administratorName: 'string',
      administratorPhone: 'string',
      city: 'string',
      corpName: 'string',
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

