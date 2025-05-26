// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCompactionServiceSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp14t95lun0w****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable the remote build feature.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableCompactionService?: boolean;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      enableCompactionService: 'EnableCompactionService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      enableCompactionService: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

