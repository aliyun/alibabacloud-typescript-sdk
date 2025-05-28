// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOrganizationRoleConfigResponseBodyResultAuthConfigList extends $dara.Model {
  /**
   * @remarks
   * Permission type:
   * - quick_monitor: Metric Monitoring
   * - subscription: Subscription Management
   * - offline_download: Self-service Data Retrieval
   * - resource_package: Resource Package Management
   * - organization_ask: Organization Access Key/Secret (AK/SK)
   * - developer_openapi: OpenAPI
   * - data_service: Data Service
   * - admin_authorize3rd: Embedded Analysis
   * - component_manage: Custom Component
   * - template_open: Custom Template
   * - custom_driver: Custom Driver (supported only in standalone deployment)
   * - open_platform_custom_plugin: Custom Plugin (supported only in standalone deployment)
   * - enterprise_safety: Enterprise Security
   * 
   * @example
   * quick_monitor
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

