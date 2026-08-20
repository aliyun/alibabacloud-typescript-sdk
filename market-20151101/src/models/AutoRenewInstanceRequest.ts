// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AutoRenewInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The cycle unit. This parameter is required when enabling auto-renewal. Valid values:
   * - Day: day.
   * - Month: month.
   * - Year: year.
   */
  autoRenewCycle?: string;
  /**
   * @remarks
   * The renewal cycle. This parameter is required when enabling auto-renewal.
   */
  autoRenewDuration?: number;
  /**
   * @remarks
   * The Alibaba Cloud Marketplace instance ID. This parameter is required.
   * 
   * This parameter is required.
   */
  orderBizId?: number;
  ownerId?: number;
  /**
   * @remarks
   * The operation type. Valid values:
   * - open: enables auto-renewal.
   * - close: disables auto-renewal.
   * 
   * This parameter is required.
   * 
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewCycle: 'AutoRenewCycle',
      autoRenewDuration: 'AutoRenewDuration',
      orderBizId: 'OrderBizId',
      ownerId: 'OwnerId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewCycle: 'string',
      autoRenewDuration: 'number',
      orderBizId: 'number',
      ownerId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

