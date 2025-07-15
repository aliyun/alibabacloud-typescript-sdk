// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppSecuritiesResponseBodyAppSecuritysAppSecurity extends $dara.Model {
  /**
   * @remarks
   * The application AppCode.
   * 
   * @example
   * d2350ecd62c44cbfbe35a7f182e35105
   */
  appCode?: string;
  /**
   * @remarks
   * The application AppKey.
   * 
   * @example
   * 34379343
   */
  appKey?: string;
  /**
   * @remarks
   * The application AppSecret.
   * 
   * @example
   * ea5291a7aff343769eb3139a2f6de8c9
   */
  appSecret?: string;
  /**
   * @remarks
   * The time when the AppKey was created.
   * 
   * @example
   * 2021-09-14T18:50:59
   */
  createdTime?: string;
  /**
   * @remarks
   * The time when the AppSecret was last modified. The time is displayed in UTC.
   * 
   * @example
   * 2023-08-14T18:03:00+08:00
   */
  modifiedTime?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appKey: 'AppKey',
      appSecret: 'AppSecret',
      createdTime: 'CreatedTime',
      modifiedTime: 'ModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appKey: 'string',
      appSecret: 'string',
      createdTime: 'string',
      modifiedTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppSecuritiesResponseBodyAppSecuritys extends $dara.Model {
  appSecurity?: DescribeAppSecuritiesResponseBodyAppSecuritysAppSecurity[];
  static names(): { [key: string]: string } {
    return {
      appSecurity: 'AppSecurity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSecurity: { 'type': 'array', 'itemType': DescribeAppSecuritiesResponseBodyAppSecuritysAppSecurity },
    };
  }

  validate() {
    if(Array.isArray(this.appSecurity)) {
      $dara.Model.validateArray(this.appSecurity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppSecuritiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The associated security policy information.
   */
  appSecuritys?: DescribeAppSecuritiesResponseBodyAppSecuritys;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EF924FE4-2EDD-4CD3-89EC-34E4708574E7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appSecuritys: 'AppSecuritys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSecuritys: DescribeAppSecuritiesResponseBodyAppSecuritys,
      requestId: 'string',
    };
  }

  validate() {
    if(this.appSecuritys && typeof (this.appSecuritys as any).validate === 'function') {
      (this.appSecuritys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

