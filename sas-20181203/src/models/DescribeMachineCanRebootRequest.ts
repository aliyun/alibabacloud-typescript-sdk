// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMachineCanRebootRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the vulnerabilities. Valid values:
   * 
   * *   cve: Linux software vulnerabilities
   * *   sys: Windows system vulnerabilities
   * 
   * @example
   * sys
   */
  type?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * 5b268326-273e-44fc-a0e3-9482435c****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

