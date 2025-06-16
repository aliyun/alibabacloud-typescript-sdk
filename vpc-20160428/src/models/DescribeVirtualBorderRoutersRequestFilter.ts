// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVirtualBorderRoutersRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter conditions. You can specify up to five filter conditions. Valid values:
   * 
   * *   **PhysicalConnectionId**: Filter by Express Connect circuit ID.
   * *   **VbrId**: Filter by VBR ID.
   * *   **Status**: Filter by VBR status.
   * *   **Name**: Filter by VBR name.
   * *   **AccessPointId**: Filter by access point ID.
   * *   **eccId:** Filter by Express Cloud Connect (ECC) instance ID.
   * *   **type**: Filter by Express Connect circuit type.
   * 
   * @example
   * Status
   */
  key?: string;
  /**
   * @remarks
   * The filter values for keys. You can specify multiple filter values for one key. The logical operator between filter values is OR. If one filter value is matched, the filter condition is matched.
   * 
   * @example
   * Active
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

