// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWarningThresholdRequest extends $dara.Model {
  bizType?: string;
  dailyHaltLimit?: number;
  dailyWarningLimit?: number;
  monthlyHaltLimit?: number;
  monthlyWarningLimit?: number;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      dailyHaltLimit: 'DailyHaltLimit',
      dailyWarningLimit: 'DailyWarningLimit',
      monthlyHaltLimit: 'MonthlyHaltLimit',
      monthlyWarningLimit: 'MonthlyWarningLimit',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      dailyHaltLimit: 'number',
      dailyWarningLimit: 'number',
      monthlyHaltLimit: 'number',
      monthlyWarningLimit: 'number',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

