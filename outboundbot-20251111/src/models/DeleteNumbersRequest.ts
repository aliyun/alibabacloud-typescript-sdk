// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNumbersRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * e5035654-1745-484a-8c5b-165f7c7bcd79
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of numbers to be deleted.
   */
  numbers?: string[];
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 1234567890
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      numbers: 'Numbers',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      numbers: { 'type': 'array', 'itemType': 'string' },
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.numbers)) {
      $dara.Model.validateArray(this.numbers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

