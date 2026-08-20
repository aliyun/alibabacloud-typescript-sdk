// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAvailableConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID. This is a common parameter. Pass it explicitly through --tenant-id in winnexo-cli.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

