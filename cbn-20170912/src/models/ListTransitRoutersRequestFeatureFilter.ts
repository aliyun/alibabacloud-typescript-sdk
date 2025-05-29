// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRoutersRequestFeatureFilter extends $dara.Model {
  /**
   * @remarks
   * The value of the field that is used to enable or disable a feature of the transit router. Supported fields:
   * 
   * *   **Multicast**: the multicast feature.
   * 
   * @example
   * Multicast
   */
  key?: string;
  /**
   * @remarks
   * The fields that are used to enable or disable the features of the transit router. The **Multicast** field supports only one value. Valid values:
   * 
   * *   **Enabled**: enables multicast.
   * *   **Disabled**: disables multicast.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

