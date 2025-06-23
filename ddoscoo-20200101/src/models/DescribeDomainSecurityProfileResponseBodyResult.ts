// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainSecurityProfileResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the global mitigation policy is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  globalEnable?: boolean;
  /**
   * @remarks
   * The mode of the global mitigation policy. Valid values:
   * 
   * *   **weak**: the Low mode
   * *   **default**: the Normal mode
   * *   **hard**: the Strict mode
   * 
   * @example
   * default
   */
  globalMode?: string;
  static names(): { [key: string]: string } {
    return {
      globalEnable: 'GlobalEnable',
      globalMode: 'GlobalMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalEnable: 'boolean',
      globalMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

