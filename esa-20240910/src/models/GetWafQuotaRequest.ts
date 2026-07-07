// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWafQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The paths of WAF quotas. Valid values:
   * * managed_rules_group: the quota for WAF managed rule groups.
   * * list: the quota for custom lists.
   * * page: the quota for custom response pages.
   * * scene_policy: the quota for scenario-specific protection rules.
   * 
   * @example
   * page
   */
  paths?: string;
  static names(): { [key: string]: string } {
    return {
      paths: 'Paths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paths: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

