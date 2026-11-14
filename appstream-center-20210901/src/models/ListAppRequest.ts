// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID used for exact match. If omitted, applications are not filtered by application ID.
   * 
   * @example
   * app-bp1example****
   */
  appId?: string;
  /**
   * @remarks
   * The application name used for filtering. Contains matching is supported.
   * 
   * @example
   * Business management
   */
  appName?: string;
  /**
   * @remarks
   * The source type of the application. Valid values:
   * 
   * - **USER_APP**: user-created applications
   * - **SYS_APP**: system-provided applications
   * - **VIRTUAL_APP**: virtual applications
   * 
   * @example
   * USER_APP
   */
  appType?: string;
  /**
   * @remarks
   * Filters by a single business type. If specified together with BizTypeList, the intersection is used. Valid values:
   * 
   * - **1**: basic products
   * - **2**: personal cloud
   * - **3**: cloud office
   * - **4**: Cloud Flow
   * - **10**: Personal Edition
   * - **20**: Business Edition
   * - **60**: Linggou Team Edition
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * The list of business types for filtering. An application is matched if it belongs to any business type in the list. If specified together with BizType, the single-value condition must still be met.
   */
  bizTypeList?: number[];
  /**
   * @remarks
   * The form of the application. Valid values:
   * 
   * - **CLIENT_BASE**: client applications
   * - **WEB_BASE**: browser applications
   * - **CLOUD_NATIVE_BASE**: cloud-native applications
   * - **PORT_SERVICE_BASE**: port service applications
   * - **AGENT_SERVICE_BASE**: agent applications
   * 
   * @example
   * WEB_BASE
   */
  originAppType?: string;
  /**
   * @remarks
   * The type of operating system used by the application. Valid values:
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
   * The page number. We recommend that you start from 1. If this parameter is omitted, set to 0, or set to 1, the first page is queried.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. If this parameter is omitted or set to a value less than 1, the value 10 is used.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters by a single associated product. If specified together with ProductTypeList, the intersection is used. Valid values:
   * 
   * - **CloudGame**: cloud gaming
   * - **CloudApp**: Wuying Cloud Application
   * - **CloudBrowser**: secure browser
   * - **CloudDesktop**: Wuying Cloud Computer
   * - **ImageBuilder**: image builder resources
   * - **ImageValidate**: image validation resources
   * - **AndroidCloud**: Android cloud
   * - **GpuRender**: GPU rendering
   * - **AndroidGpuRender**: Android cloud GPU rendering
   * - **WuyingServer**: Enterprise Edition workstation
   * - **GpuProxy**: GPU remote rendering proxy
   * - **GpuCache**: GPU remote rendering cache
   * - **AIAgent**: AI agent service
   * - **HostedDesktop**: hosted computer
   * - **WuyingWorkstation**: Personal Edition container workstation
   * - **WuyingWorkstationBusiness**: Business Edition container workstation
   * - **WuyingWorkstationTeam**: Linggou Team Edition container workstation
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The list of associated products for filtering. An application is matched if it belongs to any product in the list. If specified together with ProductType, the single-value condition must still be met.
   */
  productTypeList?: string[];
  /**
   * @remarks
   * The subtype of the application. Valid values:
   * 
   * - **PWA**: progressive web applications
   * - **SAAS**: SaaS applications
   * - **SANDBOX**: sandbox applications
   * - **CONTAINER**: container applications
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

