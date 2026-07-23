// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManagedDaOrderSummaryVO extends $dara.Model {
  availableQuota?: number;
  totalQuota?: number;
  trialExpireTime?: string;
  trialUsed?: boolean;
  usedQuota?: number;
  validOrderCount?: number;
  static names(): { [key: string]: string } {
    return {
      availableQuota: 'availableQuota',
      totalQuota: 'totalQuota',
      trialExpireTime: 'trialExpireTime',
      trialUsed: 'trialUsed',
      usedQuota: 'usedQuota',
      validOrderCount: 'validOrderCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableQuota: 'number',
      totalQuota: 'number',
      trialExpireTime: 'string',
      trialUsed: 'boolean',
      usedQuota: 'number',
      validOrderCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

