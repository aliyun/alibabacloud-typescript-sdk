// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVulAutoRepairConfigRequestVulAutoRepairConfigList extends $dara.Model {
  /**
   * @remarks
   * The alias of the vulnerability.
   * 
   * This parameter is required.
   * 
   * @example
   * CVE-2018-25032:zlib 1.2.11 memory corruption
   */
  aliasName?: string;
  /**
   * @remarks
   * The name of the vulnerability.
   * 
   * This parameter is required.
   * 
   * @example
   * anolisos:8.4:ANSA-2022:0001
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVulAutoRepairConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The reason why the vulnerability can be automatically fixed.
   * 
   * @example
   * TestAutoRepair
   */
  reason?: string;
  /**
   * @remarks
   * The type of the vulnerability. Valid values: -**cve**: Linux software vulnerability -**sys**: Windows system vulnerability
   * 
   * This parameter is required.
   * 
   * @example
   * cve
   */
  type?: string;
  /**
   * @remarks
   * The vulnerabilities that can be automatically fixed.
   * 
   * This parameter is required.
   */
  vulAutoRepairConfigList?: CreateVulAutoRepairConfigRequestVulAutoRepairConfigList[];
  static names(): { [key: string]: string } {
    return {
      reason: 'Reason',
      type: 'Type',
      vulAutoRepairConfigList: 'VulAutoRepairConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
      type: 'string',
      vulAutoRepairConfigList: { 'type': 'array', 'itemType': CreateVulAutoRepairConfigRequestVulAutoRepairConfigList },
    };
  }

  validate() {
    if(Array.isArray(this.vulAutoRepairConfigList)) {
      $dara.Model.validateArray(this.vulAutoRepairConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

