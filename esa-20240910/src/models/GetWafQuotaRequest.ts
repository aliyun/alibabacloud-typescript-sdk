// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWafQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The path of the WAF quota, for example:
   * * managed_rules_group: represents the quota for the WAF managed rules group
   * * list: represents the quota for custom lists
   * * page: represents the quota for custom response pages
   * * scene_policy: represents the quota for scenario protection
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

