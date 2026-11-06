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
   * The application ID, which is used to query the application or unbind an image later.
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
   * - **USER_APP**: User-created applications.
   * - **SYS_APP**: System-provided applications.
   * - **VIRTUAL_APP**: Virtual applications.
   * 
   * @example
   * USER_APP
   */
  appType?: string;
  /**
   * @remarks
   * The business type to which the application belongs. Valid values:
   * 
   * - **1**: Basic products.
   * - **2**: Personal cloud.
   * - **3**: Cloud office.
   * - **4**: Cloud Flow.
   * - **10**: Personal Edition.
   * - **20**: Business Edition.
   * - **60**: Linggou Team Edition.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * Indicates whether the current application is not referenced by any image. A value of true indicates that no image references the application. A value of false indicates that the application is still referenced by an image. You must remove the reference before deleting the application.
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
   * - **CLIENT_BASE**: Client applications.
   * - **WEB_BASE**: Browser applications.
   * - **CLOUD_NATIVE_BASE**: Cloud-native applications.
   * - **PORT_SERVICE_BASE**: Port service applications.
   * - **AGENT_SERVICE_BASE**: Agent applications.
   * 
   * @example
   * WEB_BASE
   */
  originAppType?: string;
  /**
   * @remarks
   * The type of operating system used by the application. Valid values:
   * 
   * - **Unknown**: The operating system is unknown.
   * - **Windows**: Windows operating system.
   * - **Linux**: Linux operating system.
   * - **Android**: Android operating system.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The product to which the resource belongs. Valid values:
   * 
   * - **CloudGame**: Cloud game.
   * - **CloudApp**: Wuying cloud application.
   * - **CloudBrowser**: Secure browser.
   * - **CloudDesktop**: Wuying cloud desktop.
   * - **ImageBuilder**: Image builder resources.
   * - **ImageValidate**: Image validation resources.
   * - **AndroidCloud**: Android cloud.
   * - **GpuRender**: GPU rendering.
   * - **AndroidGpuRender**: Android cloud GPU rendering.
   * - **WuyingServer**: Enterprise Edition workstation.
   * - **GpuProxy**: GPU remote rendering proxy.
   * - **GpuCache**: GPU remote rendering cache.
   * - **AIAgent**: AI Agent service.
   * - **HostedDesktop**: Hosted desktop.
   * - **WuyingWorkstation**: Personal Edition container workstation.
   * - **WuyingWorkstationBusiness**: Business Edition container workstation.
   * - **WuyingWorkstationTeam**: Linggou Team Edition container workstation.
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
   * - **PWA**: Progressive web applications.
   * - **SAAS**: Software as a Service (SaaS) applications.
   * - **SANDBOX**: Sandbox applications.
   * - **CONTAINER**: Container applications.
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
   * The error or result message. This field describes the cause when a request fails. A successful response may not contain this field.
   * 
   * @example
   * Internal error.
   */
  message?: string;
  /**
   * @remarks
   * The page number of this query. The name of this response field is PageNmuber.
   * 
   * @example
   * 1
   */
  pageNmuber?: number;
  /**
   * @remarks
   * The number of records per page in this paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique identifier of the request. You can provide this value for troubleshooting.
   * 
   * @example
   * 01A1A962-5503-107B-AC8F-EBA85DF905AC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was processed successfully. A value of true indicates that the request was processed successfully. To check whether an asynchronous task is completed, query the task status separately.
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

