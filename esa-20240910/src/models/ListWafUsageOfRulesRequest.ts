// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafUsageOfRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The WAF instance ID.
   * 
   * If this parameter is left empty, the API returns an empty result. We recommend that you always specify this parameter.
   * 
   * @example
   * esa-site-b0wdsrlba3nk
   */
  instanceId?: string;
  /**
   * @remarks
   * The phase in which the WAF rule runs. This parameter is required.
   * 
   * Common values: http_custom, http_ratelimit, http_anti_scan, http_bot, http_managed, http_whitelist, and http_threat_intelligence.
   * 
   * > Note: This parameter is required on the server side. If this parameter is not specified, the API returns InvalidParameter (400).
   * 
   * @example
   * http_custom
   */
  phase?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the site ID.
   * 
   * @example
   * 1
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      phase: 'Phase',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      phase: 'string',
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

