// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcAttributeResponseBodyAssociatedCensAssociatedCen extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance to which the VPC is attached.
   * 
   * @example
   * cen-7qthudw0ll6jmc****
   */
  cenId?: string;
  /**
   * @remarks
   * The ID of the account to which the CEN instance belongs.
   * 
   * @example
   * 28311773240248****
   */
  cenOwnerId?: number;
  /**
   * @remarks
   * The status of the CEN instance.
   * 
   * **Attached** is returned only when the VPC is attached to a CEN instance.
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

