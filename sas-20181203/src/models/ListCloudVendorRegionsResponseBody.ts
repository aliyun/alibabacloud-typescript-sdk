// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudVendorRegionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The area to which the region belongs. The valid values vary based on the value of the Vendor parameter.
   * 
   * *   Valid values if **Vendor** is set to Tencent:
   * *   **cn**: China
   * *   **southeast_asia**: Southeast Asia Pacific
   * *   **northeast_asia**: Northeast Asia Pacific
   * *   **southern_asia**: South Asia Pacific
   * *   **north_America**: North America
   * *   **south_America**: South America
   * *   **western_America**: Western United States
   * *   **eastern_America**: Eastern United States
   * *   **european**: Europe
   * *   Valid values if **Vendor** is set to HUAWEICLOUD:
   * *   **cn**: China
   * *   **africa**: Africa
   * *   **latin_america**: Latin America
   * *   **asia**: Asia Pacific
   * *   Valid values if **Vendor** is set to Azure:
   * *   **middle_east**: Middle East
   * *   **south_america**: South America
   * *   **canada**: Canada
   * *   **asia-pacific**: Asia Pacific
   * *   **europe**: Europe
   * *   **africa**: Africa
   * *   **us**: United States
   * *   **other**: other regions
   * *   Valid values if **Vendor** is set to AWS:
   * *   **cn**: China
   * *   **us**: United States
   * *   **eu**: Europe
   * *   **asia**: Asia Pacific
   * *   **south_america**: South America
   * *   **me**: Middle East
   * *   **ca**: Canada
   * *   **af**: Africa
   * 
   * @example
   * cn
   */
  area?: string;
  /**
   * @remarks
   * Indicates whether the region is configured as a synchronization region on another site. Valid values:
   * 
   * *   **0**: The region is not configured as a synchronization region on another site.
   * *   **1**: The region is configured as a synchronization region on another site.
   * 
   * @example
   * 1
   */
  disable?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Indicates whether the region is configured as a synchronization region on this site. Valid values:
   * 
   * *   **0**: The region is not configured as a synchronization region on this site.
   * *   **1**: The region is configured as a synchronization region on this site.
   * 
   * @example
   * 0
   */
  selected?: number;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      disable: 'Disable',
      regionId: 'RegionId',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      disable: 'number',
      regionId: 'string',
      selected: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudVendorRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The regions that the service provider supports.
   */
  data?: ListCloudVendorRegionsResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C87EC6AD-4590-5546-9DF6-B8956579D***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: { 'type': 'array', 'itemType': ListCloudVendorRegionsResponseBodyData },
      httpStatusCode: 'number',
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

