// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVirtualBorderRoutersForPhysicalConnectionRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter conditions. You can specify at most five filter conditions. The following filter conditions are supported:
   * 
   * *   **PhysicalConnectionId**: filter VBRs by the Express Connect circuit ID.
   * *   **VbrId**: filter VBRs by ID.
   * *   **Status**: filter VBRs by status.
   * *   **Name**: filter VBRs by name.
   * *   **AccessPointId**: filter VBRs by access point ID.
   * *   **eccId**: filter VBRs by ID of Express Cloud Connect (ECC) instance.
   * *   **type**: filter VBRs by type.
   * 
   * @example
   * Status
   */
  key?: string;
  /**
   * @remarks
   * The filter value for the key. You can specify multiple filter values for one key. The logical operator among filter values is OR. If one filter value is matched, the filter condition is matched.
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

