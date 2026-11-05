// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNumberBindingsOfInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 4eee9bf8-1319-468f-ac82-83c50ae389f8
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of phone numbers.
   */
  numbersShrink?: string;
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
      numbersShrink: 'Numbers',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      numbersShrink: 'string',
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

