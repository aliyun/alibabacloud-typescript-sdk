// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppMessageQueueRouteResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * hkhon1po62@54e1f42f37cd65a
   */
  appId?: string;
  /**
   * @remarks
   * Indicates whether the feature is enabled. Valid values:
   * 
   * - `true`: Enabled.
   * - `false`: Disabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The filtering side for message canary release.
   * 
   * @example
   * Server
   */
  filterSide?: string;
  /**
   * @remarks
   * The list of baseline environment labels for MSMQ grayscale rules.
   */
  grayBaseTags?: string[];
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The tags that are not consumed by the untagged environments of the application.
   */
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      enable: 'Enable',
      filterSide: 'FilterSide',
      grayBaseTags: 'GrayBaseTags',
      region: 'Region',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      enable: 'boolean',
      filterSide: 'string',
      grayBaseTags: { 'type': 'array', 'itemType': 'string' },
      region: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.grayBaseTags)) {
      $dara.Model.validateArray(this.grayBaseTags);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppMessageQueueRouteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data.
   */
  data?: GetAppMessageQueueRouteResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * - If the request is successful, a success message is returned.
   * - If the request fails, the cause of the failure is returned.
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
   * 4B00BCB0-105F-5A2A-B75B-641C8E9B18FC
   */
  requestId?: string;
  /**
   * @remarks
   * The request result. Valid values:
   * 
   * - true: The request is successful.
   * - false: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetAppMessageQueueRouteResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
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

