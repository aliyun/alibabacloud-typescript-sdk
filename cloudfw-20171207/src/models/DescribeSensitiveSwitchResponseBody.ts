// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSensitiveSwitchResponseBodyUserSensitiveDataSwitchList extends $dara.Model {
  /**
   * @remarks
   * The name of the sensitive credential category.
   * 
   * @example
   * Identity card
   */
  categoryName?: string;
  /**
   * @remarks
   * The description of the sensitive credential.
   * 
   * @example
   * Sensitive ID card data leakage
   */
  description?: string;
  /**
   * @remarks
   * The type of the sensitive credential.
   * 
   * @example
   * id_card
   */
  sensitiveCategory?: string;
  /**
   * @remarks
   * The sensitivity level.
   * 
   * @example
   * S3
   */
  sensitiveLevel?: string;
  /**
   * @remarks
   * The status of the sensitive data detection switch.
   * 
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
   * @remarks
   * The total number of enabled items.
   * 
   * @example
   * 80
   */
  openCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A7F3ED45-5556-5AF3-ADE3-EE48FFF0****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of sensitive data detection switches.
   */
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

