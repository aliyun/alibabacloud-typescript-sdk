// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUrlObservationsResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 35281609698****
   */
  configId?: number;
  /**
   * @remarks
   * SDK integration. Valid values:
   * 
   * *   **automatic**
   * *   **manual**
   * 
   * @example
   * manual
   */
  sdkType?: string;
  /**
   * @remarks
   * The URL of the web page to monitor.
   * 
   * @example
   * example.com/test
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      sdkType: 'SdkType',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      sdkType: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUrlObservationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configurations of the feature.
   */
  configs?: ListUrlObservationsResponseBodyConfigs[];
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': ListUrlObservationsResponseBodyConfigs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

