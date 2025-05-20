// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CheckServiceLinkedRoleEfloCnpForDeletingResponseBodyResources extends $dara.Model {
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The resources.
   */
  resources?: string[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      resources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

