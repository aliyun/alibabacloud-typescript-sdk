// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkInterfaceAttributeResponseBodyEnhancedNetwork extends $dara.Model {
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * true
   */
  enableRss?: boolean;
  /**
   * @remarks
   * This parameter is not publicly available.
   * 
   * @example
   * false
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

