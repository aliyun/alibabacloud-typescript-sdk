// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceBindingsOfNumberShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of instance IDs.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The bound number.
   * 
   * This parameter is required.
   * 
   * @example
   * 057100001234
   */
  number?: string;
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
      instanceIdsShrink: 'InstanceIds',
      number: 'Number',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdsShrink: 'string',
      number: 'string',
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

