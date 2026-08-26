// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrustedOriginsResponseBodyTrustedOrigins extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-08-20T08:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_example
   */
  instanceId?: string;
  /**
   * @remarks
   * The browser origin.
   * 
   * @example
   * https://console.qoder.com
   */
  origin?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The trusted origin name.
   * 
   * @example
   * Qoder Production Console
   */
  trustOriginName?: string;
  /**
   * @remarks
   * The trusted origin ID.
   * 
   * @example
   * to_example
   */
  trustedOriginId?: string;
  /**
   * @remarks
   * The trusted origin scene.
   */
  trustedOriginScene?: string[];
  /**
   * @remarks
   * The update time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-08-20T08:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      origin: 'Origin',
      status: 'Status',
      trustOriginName: 'TrustOriginName',
      trustedOriginId: 'TrustedOriginId',
      trustedOriginScene: 'TrustedOriginScene',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      instanceId: 'string',
      origin: 'string',
      status: 'string',
      trustOriginName: 'string',
      trustedOriginId: 'string',
      trustedOriginScene: { 'type': 'array', 'itemType': 'string' },
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.trustedOriginScene)) {
      $dara.Model.validateArray(this.trustedOriginScene);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrustedOriginsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page that takes effect for this request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page query.
   * 
   * @example
   * NT_example
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-example
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of trusted origins.
   */
  trustedOrigins?: ListTrustedOriginsResponseBodyTrustedOrigins[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trustedOrigins: 'TrustedOrigins',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      trustedOrigins: { 'type': 'array', 'itemType': ListTrustedOriginsResponseBodyTrustedOrigins },
    };
  }

  validate() {
    if(Array.isArray(this.trustedOrigins)) {
      $dara.Model.validateArray(this.trustedOrigins);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

