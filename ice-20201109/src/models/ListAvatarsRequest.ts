// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAvatarsRequest extends $dara.Model {
  /**
   * @remarks
   * *   The type of the digital human.
   * *   2DAvatar
   * 
   * @example
   * 2DAvatar
   */
  avatarType?: string;
  /**
   * @remarks
   * *   The page number.
   * *   Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * *   The number of entries per page.
   * *   Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      avatarType: 'AvatarType',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarType: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

