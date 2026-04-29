// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudGetAreaCodeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 区号
   * 
   * @example
   * 010
   */
  areaCode?: string;
  /**
   * @remarks
   * 号码所属城市
   * 
   * @example
   * 示例值示例值
   */
  city?: string;
  /**
   * @remarks
   * 号码所属省份
   * 
   * @example
   * 示例值示例值示例值
   */
  province?: string;
  /**
   * @remarks
   * 手机号
   * 
   * @example
   * 183xxxx7093
   */
  tel?: string;
  static names(): { [key: string]: string } {
    return {
      areaCode: 'AreaCode',
      city: 'City',
      province: 'Province',
      tel: 'Tel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaCode: 'string',
      city: 'string',
      province: 'string',
      tel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudGetAreaCodeResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudGetAreaCodeResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 44D40F36-32D9-555E-89A6-26D39C3044D2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: CloudGetAreaCodeResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

