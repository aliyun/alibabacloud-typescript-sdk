// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPictureSearchJobResultResponseBodyDataPageData extends $dara.Model {
  /**
   * @remarks
   * The alias of the device.
   * 
   * > If no alias is set for the device, this parameter is not returned.
   * 
   * @example
   * camera1
   */
  deviceNickName?: string;
  /**
   * @remarks
   * The time when the event was created. The value is a 13-digit timestamp in milliseconds.
   * 
   * @example
   * 1614333155075
   */
  eventTime?: number;
  /**
   * @remarks
   * The IoT ID of the V-series edge all-in-one device.
   * 
   * @example
   * pZJUqijOyfpFOOGNPF7S00****
   */
  gatewayIotId?: string;
  /**
   * @remarks
   * The IoT ID of the queried device.
   * 
   * @example
   * 5RUngwC1RknD4lPiHgH300****
   */
  iotId?: string;
  /**
   * @remarks
   * The URL of the image to be searched.
   * 
   * @example
   * https://xxx.xxx.xxx.com/xxx
   */
  picUrl?: string;
  /**
   * @remarks
   * The face similarity.
   * 
   * @example
   * 0.5
   */
  threshold?: number;
  /**
   * @remarks
   * The ID of the image feature.
   * 
   * @example
   * vectorId86d9a5c32b9947278e526c2eef8a****
   */
  vectorId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceNickName: 'DeviceNickName',
      eventTime: 'EventTime',
      gatewayIotId: 'GatewayIotId',
      iotId: 'IotId',
      picUrl: 'PicUrl',
      threshold: 'Threshold',
      vectorId: 'VectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceNickName: 'string',
      eventTime: 'number',
      gatewayIotId: 'string',
      iotId: 'string',
      picUrl: 'string',
      threshold: 'number',
      vectorId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchJobResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  pageCount?: number;
  /**
   * @remarks
   * The query results.
   */
  pageData?: QueryPictureSearchJobResultResponseBodyDataPageData[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageCount: 'PageCount',
      pageData: 'PageData',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageCount: 'number',
      pageData: { 'type': 'array', 'itemType': QueryPictureSearchJobResultResponseBodyDataPageData },
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pageData)) {
      $dara.Model.validateArray(this.pageData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPictureSearchJobResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/145071.html).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: QueryPictureSearchJobResultResponseBodyData;
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * AppInstanceId is mandatory for this action.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * a06c4750-7cce-11eb-8010-557d50136505
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryPictureSearchJobResultResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
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

