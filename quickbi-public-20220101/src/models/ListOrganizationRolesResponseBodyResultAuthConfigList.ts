// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOrganizationRolesResponseBodyResultAuthConfigList extends $dara.Model {
  /**
   * @remarks
   * Permission type:
   * - quick_monitor: Metric monitoring
   * - subscription: Subscription management
   * - offline_download: Self-service data retrieval
   * - resource_package: Resource package management
   * - organization_ask: Organization identification code (AK/SK)
   * - developer_openapi: OpenAPI
   * - data_service: Data service
   * - admin_authorize3rd: Embedded analysis
   * - component_manage: Custom component
   * - template_open: Custom template
   * - custom_driver: Custom driver (supported only in standalone deployment)
   * - open_platform_custom_plugin: Custom plugin (supported only in standalone deployment)
   * - enterprise_safety: Enterprise security
   * 
   * @example
   * enterprise_safety
   */
  authKey?: string;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

