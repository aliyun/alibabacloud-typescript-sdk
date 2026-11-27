// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAutoGroupingConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to transfer existing associated resources along with the group transfer task. Valid values:
   * 
   * - false: Existing associated resources are not transferred along with the group transfer task.
   * - true: Existing associated resources are transferred along with the group transfer task.
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

