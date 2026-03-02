// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployInstanceInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 192.1.1.1
   */
  ip?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * EXECUTING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'ip',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

