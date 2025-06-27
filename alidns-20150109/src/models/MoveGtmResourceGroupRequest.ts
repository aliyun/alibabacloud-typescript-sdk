// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveGtmResourceGroupRequest extends $dara.Model {
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AgIDE1MA_XXX
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rg-aekzzk7hx3*****
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      newResourceGroupId: 'NewResourceGroupId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      newResourceGroupId: 'string',
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

