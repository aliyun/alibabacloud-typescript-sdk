// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrustedOriginsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_example
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of results per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * NT_example
   */
  nextToken?: string;
  /**
   * @remarks
   * The origin filter.
   * 
   * @example
   * https://console.qoder.com
   */
  origin?: string;
  /**
   * @remarks
   * The status filter. Valid values:
   * 
   * - Enabled: Enabled.
   * - Disabled: Disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The name filter.
   * 
   * @example
   * Qoder Production Console
   */
  trustOriginName?: string;
  /**
   * @remarks
   * The trusted origin scene filter.
   * 
   * @example
   * iframe_embed
   */
  trustedOriginScene?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      origin: 'Origin',
      status: 'Status',
      trustOriginName: 'TrustOriginName',
      trustedOriginScene: 'TrustedOriginScene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      origin: 'string',
      status: 'string',
      trustOriginName: 'string',
      trustedOriginScene: { 'type': 'array', 'itemType': 'string' },
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

