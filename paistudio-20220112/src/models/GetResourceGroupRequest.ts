// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResourceGroupRequestTag } from "./GetResourceGroupRequestTag";


export class GetResourceGroupRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  isAIWorkspaceDataEnabled?: boolean;
  tag?: GetResourceGroupRequestTag[];
  static names(): { [key: string]: string } {
    return {
      isAIWorkspaceDataEnabled: 'IsAIWorkspaceDataEnabled',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isAIWorkspaceDataEnabled: 'boolean',
      tag: { 'type': 'array', 'itemType': GetResourceGroupRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

