// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsAppIcpRecordResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The approval date.
   * 
   * @example
   * 2020-01-01
   */
  appApprovalDate?: string;
  /**
   * @remarks
   * The icp filing/license number.
   * 
   * @example
   * 123
   */
  appIcpLicenseNumber?: string;
  /**
   * @remarks
   * The ID of the APP-ICP record material.
   * 
   * @example
   * 51
   */
  appIcpRecordId?: number;
  /**
   * @remarks
   * The OSS fileKey for the APP-ICP record screenshot.
   * 
   * @example
   * 10000025*****02/ac181696-****-49c6-90dc-50689267aa00_mhsjd8b8_17*****662348.jpeg
   */
  appIcpRecordPic?: string;
  /**
   * @remarks
   * The URL of the APP-ICP record screenshot.
   * 
   * @example
   * https://alicom-fc-media.oss-cn-zhangjiakou.aliyuncs.com/100000****50802/afde****-496d-46e4-899d-b43758****8_mhk9oz0p_176224****542.png?Expires=1762****6&OSSAccessKeyId=bypFN****73PsLI&Signature=BygI9X****h7%2FXmFIo****FB2c%3D
   */
  appIcpRecordPicUrl?: string;
  /**
   * @remarks
   * The hosting unit name.
   * 
   * @example
   * 阿里云
   */
  appPrincipalUnitName?: string;
  /**
   * @remarks
   * APP实际运行截图Osskey
   * 
   * @example
   * 示例值示例值
   */
  appRuntimePic?: string;
  /**
   * @remarks
   * APP实际运行截图url地址
   * 
   * @example
   * 示例值示例值示例值
   */
  appRuntimePicUrl?: string;
  /**
   * @remarks
   * The app service name.
   * 
   * @example
   * 测试
   */
  appServiceName?: string;
  /**
   * @remarks
   * APP应用商店下载截图Osskey
   * 
   * @example
   * 示例值示例值
   */
  appStoreDownloadPic?: string;
  /**
   * @remarks
   * APP应用商店下载截图url地址
   * 
   * @example
   * 示例值示例值示例值
   */
  appStoreDownloadPicUrl?: string;
  /**
   * @remarks
   * The app store link.
   * 
   * @example
   * https://apps.apple.com/cn/app/阿里云/id981011420
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
      appRuntimePic: 'AppRuntimePic',
      appRuntimePicUrl: 'AppRuntimePicUrl',
      appServiceName: 'AppServiceName',
      appStoreDownloadPic: 'AppStoreDownloadPic',
      appStoreDownloadPicUrl: 'AppStoreDownloadPicUrl',
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
      appRuntimePic: 'string',
      appRuntimePicUrl: 'string',
      appServiceName: 'string',
      appStoreDownloadPic: 'string',
      appStoreDownloadPicUrl: 'string',
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
  /**
   * @remarks
   * The access denial details.
   * 
   * @example
   * 无
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code of the request.
   * 
   * - OK indicates a successful request.
   * 
   * - For other error codes, see the [error code list](https://help.aliyun.com/document_detail/101346.htm).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * A list of APP-ICP record entity details.
   */
  data?: QuerySmsAppIcpRecordResponseBodyData[];
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C9955E63-8BFF-101D-80A1-E6998DFEFF1A
   */
  requestId?: string;
  /**
   * @remarks
   * Specifies whether the API call was successful. Valid values:
   * 
   * - **true**: The call was successful.
   * 
   * - **false**: The call failed.
   * 
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

