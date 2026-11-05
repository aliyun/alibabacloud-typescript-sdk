// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 100931896542****
   */
  aliUid?: number;
  /**
   * @remarks
   * The URL used to access the application icon.
   * 
   * @example
   * https://example.com/apps/business/icon.png
   */
  appIconUrl?: string;
  /**
   * @remarks
   * The application ID, which is used for subsequent application queries or unbinding the image.
   * 
   * @example
   * app-bp1example****
   */
  appId?: string;
  /**
   * @remarks
   * The display name of the application.
   * 
   * @example
   * Business management platform
   */
  appName?: string;
  /**
   * @remarks
   * The theme color saved for the application. If no theme color is specified when the application is created, #FFFFFF (white) is saved by default. The saved value is returned during a query. This field may not be configured for legacy applications.
   * 
   * @example
   * #FFFFFF
   */
  appThemeColor?: string;
  /**
   * @remarks
   * The source type of the application. Valid values:
   * 
   * - **USER_APP**: user-created application
   * - **SYS_APP**: system-provided application
   * - **VIRTUAL_APP**: virtual application
   * 
   * @example
   * USER_APP
   */
  appType?: string;
  /**
   * @remarks
   * The business type to which the application belongs. Valid values:
   * 
   * - **1**: basic product
   * - **2**: personal cloud
   * - **3**: cloud office
   * - **4**: cloud flow
   * - **10**: personal edition
   * - **20**: business edition
   * - **60**: Linggou team edition
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * Indicates whether the current application is not referenced by any image. A value of true indicates that no image references the application. A value of false indicates that the application is still referenced by an image, and the reference must be removed before deletion.
   */
  deletable?: boolean;
  /**
   * @remarks
   * The path of the executable file saved when the application is created or modified. This field is returned only if the path is configured for the application. An example is the installation path of a Windows business application.
   * 
   * @example
   * C:\\Program Files\\BusinessApp\\BusinessApp.exe
   */
  executeFileAddress?: string;
  /**
   * @remarks
   * The time when the application was created. The time is in ISO 8601 format, accurate to milliseconds, and the time zone offset is +00:00.
   * 
   * @example
   * 2026-08-25T07:41:30.000+00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the application was last modified. The time is in ISO 8601 format, accurate to milliseconds, and the time zone offset is +00:00.
   * 
   * @example
   * 2026-08-25T07:41:30.000+00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The form of the application. Valid values:
   * 
   * - **CLIENT_BASE**: client application
   * - **WEB_BASE**: browser application
   * - **CLOUD_NATIVE_BASE**: cloud-native application
   * - **PORT_SERVICE_BASE**: port service application
   * - **AGENT_SERVICE_BASE**: agent application
   * 
   * @example
   * WEB_BASE
   */
  originAppType?: string;
  /**
   * @remarks
   * The type of the operating system used by the application. Valid values:
   * 
   * - **Unknown**: unknown operating system
   * - **Windows**: Windows operating system
   * - **Linux**: Linux operating system
   * - **Android**: Android operating system
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The product to which the resource belongs. Valid values:
   * 
   * - **CloudGame**: cloud game
   * - **CloudApp**: Wuying cloud application
   * - **CloudBrowser**: secure browser
   * - **CloudDesktop**: Wuying cloud computer
   * - **ImageBuilder**: image building resource
   * - **ImageValidate**: image validation resource
   * - **AndroidCloud**: Android cloud
   * - **GpuRender**: GPU rendering
   * - **AndroidGpuRender**: Android cloud GPU rendering
   * - **WuyingServer**: enterprise edition workstation
   * - **GpuProxy**: GPU remote rendering proxy
   * - **GpuCache**: GPU remote rendering cache
   * - **AIAgent**: AI agent service
   * - **HostedDesktop**: hosted computer
   * - **WuyingWorkstation**: personal edition container workstation
   * - **WuyingWorkstationBusiness**: business edition container workstation
   * - **WuyingWorkstationTeam**: Linggou team edition container workstation
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The command-line parameters used when the application is started.
   * 
   * @example
   * --lang=zh-CN
   */
  silenceParam?: string;
  /**
   * @remarks
   * The status of the application record. The current list queries only valid and undeleted applications.
   * 
   * @example
   * VALID
   */
  status?: string;
  /**
   * @remarks
   * The subtype of the application. Valid values:
   * 
   * - **PWA**: progressive web application
   * - **SAAS**: software as a service (SaaS) application
   * - **SANDBOX**: sandbox application
   * - **CONTAINER**: container application
   * 
   * @example
   * SAAS
   */
  subAppType?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      appIconUrl: 'AppIconUrl',
      appId: 'AppId',
      appName: 'AppName',
      appThemeColor: 'AppThemeColor',
      appType: 'AppType',
      bizType: 'BizType',
      deletable: 'Deletable',
      executeFileAddress: 'ExecuteFileAddress',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      originAppType: 'OriginAppType',
      osType: 'OsType',
      productType: 'ProductType',
      silenceParam: 'SilenceParam',
      status: 'Status',
      subAppType: 'SubAppType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      appIconUrl: 'string',
      appId: 'string',
      appName: 'string',
      appThemeColor: 'string',
      appType: 'string',
      bizType: 'number',
      deletable: 'boolean',
      executeFileAddress: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      originAppType: 'string',
      osType: 'string',
      productType: 'string',
      silenceParam: 'string',
      status: 'string',
      subAppType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This field is returned when the request fails. A successful response may not contain this field.
   * 
   * @example
   * InternalError
   */
  code?: string;
  /**
   * @remarks
   * The total number of application records that meet the query conditions.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The application records on the current page.
   */
  data?: ListAppResponseBodyData[];
  /**
   * @remarks
   * The error or result message. This field describes the cause when the request fails. A successful response may not contain this field.
   * 
   * @example
   * Internal error.
   */
  message?: string;
  /**
   * @remarks
   * The page number of the current query. The name of this response field is PageNmuber.
   * 
   * @example
   * 1
   */
  pageNmuber?: number;
  /**
   * @remarks
   * The number of records per page in the paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique identifier of the request. You can provide this value when troubleshooting issues.
   * 
   * @example
   * 01A1A962-5503-107B-AC8F-EBA85DF905AC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was processed successfully. A value of true indicates that the current request was processed successfully. To check whether an asynchronous task is completed, you must query the task status separately.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      pageNmuber: 'PageNmuber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: { 'type': 'array', 'itemType': ListAppResponseBodyData },
      message: 'string',
      pageNmuber: 'number',
      pageSize: 'number',
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

