// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMachineCanRebootRequest extends $dara.Model {
  /**
   * @remarks
   * The type of vulnerability that requires a restart to fix. Valid values:
   * - cve: Linux software vulnerability
   * - sys: Windows system vulnerability.
   * 
   * @example
   * sys
   */
  type?: string;
  /**
   * @remarks
   * The UUID of the server to restart.
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

