// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the application ID for exact match. If omitted, applications are not filtered by application ID.
   * 
   * @example
   * app-bp1example****
   */
  appId?: string;
  /**
   * @remarks
   * The application name used to filter applications. Partial match is supported.
   * 
   * @example
   * Business management
   */
  appName?: string;
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
   * Filters by a single business type. If specified simultaneously with BizTypeList, the intersection is used. Valid values:
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
   * The list of business types used to filter applications. An application is matched if it matches any business type in the list. If specified simultaneously with BizType, the single-value condition must still be met.
   */
  bizTypeList?: number[];
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
   * The page number for the query. Query pages starting from 1. If omitted, set to 0, or set to 1, the first page is queried.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records returned per page. If omitted or set to a value less than 1, the value is processed as 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters by a single associated product. If specified simultaneously with ProductTypeList, the intersection is used. Valid values:
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
   * The list of associated products used to filter applications. An application is matched if it matches any product in the list. If specified simultaneously with ProductType, the single-value condition must still be met.
   */
  productTypeList?: string[];
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

