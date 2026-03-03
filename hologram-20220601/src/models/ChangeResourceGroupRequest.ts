// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * hgprecn-cn-zvp25ysv3006
   */
  instanceId?: string;
  /**
   * @remarks
   * new resource group id
   * 
   * @example
   * rg-acfmxwerqwerasfd
   */
  newResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      newResourceGroupId: 'newResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      newResourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

