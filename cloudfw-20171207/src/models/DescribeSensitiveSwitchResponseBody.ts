// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSensitiveSwitchResponseBodyUserSensitiveDataSwitchList extends $dara.Model {
  categoryName?: string;
  description?: string;
  /**
   * @example
   * id_card
   */
  sensitiveCategory?: string;
  /**
   * @example
   * S3
   */
  sensitiveLevel?: string;
  /**
   * @example
   * 1
   */
  switchStatus?: number;
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
      description: 'Description',
      sensitiveCategory: 'SensitiveCategory',
      sensitiveLevel: 'SensitiveLevel',
      switchStatus: 'SwitchStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      description: 'string',
      sensitiveCategory: 'string',
      sensitiveLevel: 'string',
      switchStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSensitiveSwitchResponseBody extends $dara.Model {
  /**
   * @example
   * 80
   */
  openCount?: number;
  /**
   * @example
   * A7F3ED45-5556-5AF3-ADE3-EE48FFF0****
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  userSensitiveDataSwitchList?: DescribeSensitiveSwitchResponseBodyUserSensitiveDataSwitchList[];
  static names(): { [key: string]: string } {
    return {
      openCount: 'OpenCount',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      userSensitiveDataSwitchList: 'UserSensitiveDataSwitchList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openCount: 'number',
      requestId: 'string',
      totalCount: 'number',
      userSensitiveDataSwitchList: { 'type': 'array', 'itemType': DescribeSensitiveSwitchResponseBodyUserSensitiveDataSwitchList },
    };
  }

  validate() {
    if(Array.isArray(this.userSensitiveDataSwitchList)) {
      $dara.Model.validateArray(this.userSensitiveDataSwitchList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

