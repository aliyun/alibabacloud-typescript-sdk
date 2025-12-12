// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAutoGroupingConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the Transfer Existing Associated Resources feature. Valid values:
   * 
   * *   false
   * *   true
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

