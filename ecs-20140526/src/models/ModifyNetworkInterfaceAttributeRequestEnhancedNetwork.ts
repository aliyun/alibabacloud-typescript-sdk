// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNetworkInterfaceAttributeRequestEnhancedNetwork extends $dara.Model {
  /**
   * @remarks
   * >This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * false
   */
  enableRss?: boolean;
  /**
   * @remarks
   * This parameter is not publicly available.
   * 
   * @example
   * true
   */
  enableSriov?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableRss: 'EnableRss',
      enableSriov: 'EnableSriov',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableRss: 'boolean',
      enableSriov: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

