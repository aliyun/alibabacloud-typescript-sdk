// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWafQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The path of the WAF quota. Valid values:
   * 
   * - managed_rules_group: The quota for managed rule groups.
   * 
   * - list: The quota for custom lists.
   * 
   * - page: The quota for custom response pages.
   * 
   * - scene_policy: The quota for scene-based protection.
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

