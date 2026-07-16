// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConfigSequenceRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration ID. You can call the [ListSiteFunctions](~~ListSiteFunctions~~) operation to obtain the configuration ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 27490172680****
   */
  configId?: number;
  /**
   * @remarks
   * The target priority of the configuration. The value must be greater than 0. If the value is greater than the highest priority among all rule configurations under this feature, the priority of the configuration to be modified is set to the current highest priority. For example, if the CacheRules feature has three rule configurations with priorities 1, 2, and 3, and you change the priority of the rule with priority 1 to 5, the priority of that rule is set to 3, and the rules that originally had priorities 2 and 3 are changed to 1 and 2.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  sequence?: number;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to obtain the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 611133661****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      sequence: 'Sequence',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      sequence: 'number',
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

