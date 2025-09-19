// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateVulsRequest extends $dara.Model {
  /**
   * @remarks
   * The operation on the vulnerabilities. Set the value to **vul_fix**, which indicates vulnerability fixing.
   * 
   * This parameter is required.
   * 
   * @example
   * vul_fix
   */
  operateType?: string;
  /**
   * @remarks
   * The type of the vulnerabilities that you want to fix. Set the value to **cve**, which indicates Linux software vulnerabilities.
   * 
   * This parameter is required.
   * 
   * @example
   * cve
   */
  type?: string;
  /**
   * @remarks
   * The UUIDs of servers for which you want to fix vulnerabilities.
   * 
   * This parameter is required.
   */
  uuids?: string[];
  /**
   * @remarks
   * The names of the vulnerabilities that you want to fix.
   * 
   * This parameter is required.
   */
  vulNames?: string[];
  static names(): { [key: string]: string } {
    return {
      operateType: 'OperateType',
      type: 'Type',
      uuids: 'Uuids',
      vulNames: 'VulNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateType: 'string',
      type: 'string',
      uuids: { 'type': 'array', 'itemType': 'string' },
      vulNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.uuids)) {
      $dara.Model.validateArray(this.uuids);
    }
    if(Array.isArray(this.vulNames)) {
      $dara.Model.validateArray(this.vulNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

