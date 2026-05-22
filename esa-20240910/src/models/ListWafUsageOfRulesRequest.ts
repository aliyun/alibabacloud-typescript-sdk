// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafUsageOfRulesRequest extends $dara.Model {
  instanceId?: string;
  /**
   * @example
   * http_anti_scan
   */
  phase?: string;
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

