// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsAppIcpRecordResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 审核通过日期，示例2025-09-01
   * 
   * @example
   * 2020-01-01
   */
  appApprovalDate?: string;
  /**
   * @remarks
   * ICP备案/许可证号
   * 
   * @example
   * 123
   */
  appIcpLicenseNumber?: string;
  /**
   * @remarks
   * app-icp备案材料id
   * 
   * @example
   * 51
   */
  appIcpRecordId?: number;
  /**
   * @remarks
   * app-icp备案截图图片Osskey（给签名传工单用）
   * 
   * @example
   * 10000025*****02/ac181696-****-49c6-90dc-50689267aa00_mhsjd8b8_17*****662348.jpeg
   */
  appIcpRecordPic?: string;
  /**
   * @remarks
   * app-icp备案截图url地址
   * 
   * @example
   * https://alicom-fc-media.oss-cn-zhangjiakou.aliyuncs.com/100000****50802/afde****-496d-46e4-899d-b43758****8_mhk9oz0p_176224****542.png?Expires=1762****6&OSSAccessKeyId=bypFN****73PsLI&Signature=BygI9X****h7%2FXmFIo****FB2c%3D
   */
  appIcpRecordPicUrl?: string;
  /**
   * @remarks
   * 主办单位名称
   * 
   * @example
   * 示例值示例值
   */
  appPrincipalUnitName?: string;
  /**
   * @remarks
   * app服务名称
   * 
   * @example
   * 示例值
   */
  appServiceName?: string;
  /**
   * @remarks
   * APP应用商店链接
   * 
   * @example
   * https://test
   */
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      appApprovalDate: 'AppApprovalDate',
      appIcpLicenseNumber: 'AppIcpLicenseNumber',
      appIcpRecordId: 'AppIcpRecordId',
      appIcpRecordPic: 'AppIcpRecordPic',
      appIcpRecordPicUrl: 'AppIcpRecordPicUrl',
      appPrincipalUnitName: 'AppPrincipalUnitName',
      appServiceName: 'AppServiceName',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appApprovalDate: 'string',
      appIcpLicenseNumber: 'string',
      appIcpRecordId: 'number',
      appIcpRecordPic: 'string',
      appIcpRecordPicUrl: 'string',
      appPrincipalUnitName: 'string',
      appServiceName: 'string',
      domain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsAppIcpRecordResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: QuerySmsAppIcpRecordResponseBodyData[];
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * C9955E63-8BFF-101D-80A1-E6998DFEFF1A
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': QuerySmsAppIcpRecordResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

