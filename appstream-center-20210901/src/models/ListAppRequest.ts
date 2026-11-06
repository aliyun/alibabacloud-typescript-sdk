// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID for exact query. If this parameter is omitted, applications are not filtered by application ID.
   * 
   * @example
   * app-bp1example****
   */
  appId?: string;
  /**
   * @remarks
   * The application name filter. Contains matching is supported.
   * 
   * @example
   * Business management
   */
  appName?: string;
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
   * Filters by a single business type. If specified together with BizTypeList, the intersection is used. Valid values:
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
   * The list of business types for filtering. A match with any business type in the list is considered a match. If specified together with BizType, the single-value condition must still be met.
   */
  bizTypeList?: number[];
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
   * The page number for the query. Start from 1. If this parameter is omitted, set to 0, or set to 1, the first page is queried.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records to return on each page. If this parameter is omitted or set to a value less than 1, the value 10 is used.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters by a single associated product. If specified together with ProductTypeList, the intersection is used. Valid values:
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
   * The list of associated products for filtering. A match with any product in the list is considered a match. If specified together with ProductType, the single-value condition must still be met.
   */
  productTypeList?: string[];
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
      appId: 'AppId',
      appName: 'AppName',
      appType: 'AppType',
      bizType: 'BizType',
      bizTypeList: 'BizTypeList',
      originAppType: 'OriginAppType',
      osType: 'OsType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
      productTypeList: 'ProductTypeList',
      subAppType: 'SubAppType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appType: 'string',
      bizType: 'number',
      bizTypeList: { 'type': 'array', 'itemType': 'number' },
      originAppType: 'string',
      osType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productType: 'string',
      productTypeList: { 'type': 'array', 'itemType': 'string' },
      subAppType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bizTypeList)) {
      $dara.Model.validateArray(this.bizTypeList);
    }
    if(Array.isArray(this.productTypeList)) {
      $dara.Model.validateArray(this.productTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

