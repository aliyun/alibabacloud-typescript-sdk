// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsInstanceCreateRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the instance. The name must meet the following rules:
   * 
   * *   The name of the instance must be unique in the region where the instance is deployed.
   * *   The name must be 3 to 64 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * Test instance
   */
  instanceName?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * Description
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

