// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedCensAssociatedCen extends $dara.Model {
  /**
   * @remarks
   * The CEN instance ID.
   * 
   * @example
   * cen-kojok19xxx****
   */
  cenId?: string;
  /**
   * @remarks
   * The ID of the account to which the CEN instance belongs.
   * 
   * @example
   * 1688000000000****
   */
  cenOwnerId?: number;
  /**
   * @remarks
   * The status of the CEN instance. Valid values:
   * 
   * *   **Attached**
   * *   **Attaching**
   * *   **Detached**
   * *   **Detaching**
   * *   If no value is returned, the VBR is not attached to a CEN instance.
   * 
   * @example
   * Attached
   */
  cenStatus?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      cenOwnerId: 'CenOwnerId',
      cenStatus: 'CenStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      cenOwnerId: 'number',
      cenStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

