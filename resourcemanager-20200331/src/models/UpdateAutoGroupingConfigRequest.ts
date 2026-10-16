// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAutoGroupingConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable existing associated resources to follow the group transfer task. Valid values:
   * 
   * - false: Existing associated resources do not follow the group transfer task.
   * - true: Existing associated resources follow the group transfer task.
   * 
   * @example
   * false
   */
  enableExistingResourcesTransfer?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableExistingResourcesTransfer: 'EnableExistingResourcesTransfer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableExistingResourcesTransfer: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

