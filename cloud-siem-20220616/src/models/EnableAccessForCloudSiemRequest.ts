// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableAccessForCloudSiemRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically integrate alert logs from Security Center, Web Application Firewall (WAF), and Cloud Firewall. By default, the logs are automatically integrated.
   * 
   * @example
   * 1
   */
  autoSubmit?: number;
  /**
   * @remarks
   * The idempotency token.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426614174000
   */
  clientToken?: string;
  /**
   * @remarks
   * The region where the threat detection and response data management center resides. Select the management center based on the region of your assets. Valid values:
   * - cn-hangzhou: assets in the Chinese mainland and Hong Kong (China).
   * - ap-southeast-1: assets outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the member account to which the administrator switches the view.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type.
   * 
   * - 0: the view of the current Alibaba Cloud account.
   * - 1: the view of all accounts in the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      autoSubmit: 'AutoSubmit',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSubmit: 'number',
      clientToken: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

