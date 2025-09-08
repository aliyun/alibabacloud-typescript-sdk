// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudSiemAssetsCounterResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of assets.
   * 
   * @example
   * 1
   */
  assetNum?: number;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * *   ip
   * *   domain
   * *   url
   * *   process
   * *   file
   * *   host
   * 
   * @example
   * domain
   */
  assetType?: string;
  static names(): { [key: string]: string } {
    return {
      assetNum: 'AssetNum',
      assetType: 'AssetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetNum: 'number',
      assetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudSiemAssetsCounterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeCloudSiemAssetsCounterResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeCloudSiemAssetsCounterResponseBodyData },
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

