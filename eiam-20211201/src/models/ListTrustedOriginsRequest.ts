// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrustedOriginsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the IDaaS EIAM instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_example
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Maximum value: 100. If you set this parameter to 0, the default value is used.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The NextToken returned by the previous call.
   * 
   * @example
   * NT_example
   */
  nextToken?: string;
  /**
   * @remarks
   * Filters by the exact normalized origin.
   * 
   * @example
   * https://console.qoder.com
   */
  origin?: string;
  /**
   * @remarks
   * Filters by exact status. Valid values: Enabled or Disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * Filters by exact name.
   * 
   * @example
   * Qoder Production Console
   */
  trustOriginName?: string;
  /**
   * @remarks
   * Filters by exact trusted origin scene. You can specify at most one value.
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

