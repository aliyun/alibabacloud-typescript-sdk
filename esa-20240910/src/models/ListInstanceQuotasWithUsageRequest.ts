// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceQuotasWithUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The plan ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * @example
   * sp-xcdn-96wblslz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The quota names in the plan. Separate the quota names with commas (,). You can query up to 10 quota names at a time. Valid values:
   * 
   * *   **customHttpCert**: the custom certificates.
   * *   **transition_rule**: the transform rules.
   * *   **waiting_room**: the waiting rooms.
   * *   **https|rule_quota**: the SSL/TLS rules.
   * *   **cache_rules|rule_quota**: the cache rules.
   * *   **configuration_rules|rule_quota**: the configuration rules.
   * *   **redirect_rules|rule_quota**: the redirect rules.
   * *   **compression_rules|rule_quota**: the compression rules.
   * *   **origin_rules|rule_quota**: the origin rules.
   * 
   * This parameter is required.
   * 
   * @example
   * customHttpCert
   */
  quotaNames?: string;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * @example
   * 1232223****
   * 
   * **if can be null:**
   * false
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      quotaNames: 'QuotaNames',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      quotaNames: 'string',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

