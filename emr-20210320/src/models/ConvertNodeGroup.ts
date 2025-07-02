// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConvertNodeGroup extends $dara.Model {
  /**
   * @remarks
   * 节点组ID。
   * 
   * @example
   * ng-869471354ecd****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * 付费时长。
   * 
   * @example
   * 12
   */
  paymentDuration?: number;
  /**
   * @remarks
   * 付费时长单位。
   * 
   * @example
   * Month
   */
  paymentDurationUnit?: string;
  /**
   * @remarks
   * 付费类型。
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  static names(): { [key: string]: string } {
    return {
      nodeGroupId: 'NodeGroupId',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
      paymentType: 'PaymentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeGroupId: 'string',
      paymentDuration: 'number',
      paymentDurationUnit: 'string',
      paymentType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

