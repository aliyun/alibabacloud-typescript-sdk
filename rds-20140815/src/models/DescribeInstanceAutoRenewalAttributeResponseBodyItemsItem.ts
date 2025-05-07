// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceAutoRenewalAttributeResponseBodyItemsItem extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to enable auto-renewal for the instance.
   * 
   * @example
   * True
   */
  autoRenew?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-bpxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The renewal period.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * Normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      DBInstanceId: 'DBInstanceId',
      duration: 'Duration',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'string',
      DBInstanceId: 'string',
      duration: 'number',
      regionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

