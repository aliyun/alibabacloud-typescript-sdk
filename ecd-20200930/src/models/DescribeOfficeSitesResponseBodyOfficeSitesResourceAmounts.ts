// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOfficeSitesResponseBodyOfficeSitesResourceAmounts extends $dara.Model {
  /**
   * @remarks
   * The number of resources.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The resource type.
   * 
   * Valid values:
   * 
   * *   desktop: the cloud computer.
   * *   DesktopGroup: the cloud computer share.
   * 
   * @example
   * desktop
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

