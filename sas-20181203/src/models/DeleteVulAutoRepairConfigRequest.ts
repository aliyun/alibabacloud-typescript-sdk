// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVulAutoRepairConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The alias of the vulnerability.
   * 
   * @example
   * RHSA-2017:0184-Important: mysql security update
   */
  aliasName?: string;
  /**
   * @remarks
   * The IDs of the configurations.
   * 
   * >  You can call the [ListVulAutoRepairConfig](~~ListVulAutoRepairConfig~~) operation to query the IDs.
   */
  configIdList?: number[];
  /**
   * @remarks
   * The type of the vulnerability. Valid values:
   * 
   * *   cve: Linux software vulnerability
   * *   sys: Windows system vulnerability
   * 
   * @example
   * cve
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      configIdList: 'ConfigIdList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      configIdList: { 'type': 'array', 'itemType': 'number' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configIdList)) {
      $dara.Model.validateArray(this.configIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

