// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResourceGroupOutput extends $dara.Model {
  /**
   * @remarks
   * The ID of the new resource group.
   * 
   * @example
   * rg-aek0example0abc0d
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the original resource group.
   * 
   * @example
   * rg-aek0example0abc0d
   */
  oldResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the resource whose resource group is changed.
   * 
   * @example
   * example-function-one
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      oldResourceGroupId: 'OldResourceGroupId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      oldResourceGroupId: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

