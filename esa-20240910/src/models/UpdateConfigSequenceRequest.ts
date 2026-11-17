// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConfigSequenceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the configuration. You can call the [ListSiteFunctions](~~ListSiteFunctions~~) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 27490172680****
   */
  configId?: number;
  /**
   * @remarks
   * The target priority of the configuration. The value must be greater than 0. If the specified value is greater than the maximum priority of the rule configurations under this feature, the priority of the configuration is changed to the current maximum priority. For example, if the CacheRules feature has three rule configurations with priorities 1, 2, and 3, and you change the priority of the rule configuration with priority 1 to 5, the priority of this rule configuration is changed to 3. The priorities of the other two rule configurations are changed to 1 and 2.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  sequence?: number;
  /**
   * @remarks
   * The ID of the site. You can call the [ListSites](~~ListSites~~) operation to obtain the ID.
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

