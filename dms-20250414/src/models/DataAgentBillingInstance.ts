// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataAgentBillingInstance extends $dara.Model {
  agentSeats?: number;
  billingInstanceId?: string;
  boundWorkspaceIds?: string[];
  chargeType?: string;
  commodityCode?: string;
  expireTime?: number;
  freeAgentSeats?: number;
  gmtCreated?: number;
  gmtModified?: number;
  isDefault?: boolean;
  LLM?: number;
  payLevel?: string;
  sessionAvailableDurationQuota?: number;
  sessionSeats?: number;
  tokenLimit?: number;
  static names(): { [key: string]: string } {
    return {
      agentSeats: 'AgentSeats',
      billingInstanceId: 'BillingInstanceId',
      boundWorkspaceIds: 'BoundWorkspaceIds',
      chargeType: 'ChargeType',
      commodityCode: 'CommodityCode',
      expireTime: 'ExpireTime',
      freeAgentSeats: 'FreeAgentSeats',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      isDefault: 'IsDefault',
      LLM: 'LLM',
      payLevel: 'PayLevel',
      sessionAvailableDurationQuota: 'SessionAvailableDurationQuota',
      sessionSeats: 'SessionSeats',
      tokenLimit: 'TokenLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSeats: 'number',
      billingInstanceId: 'string',
      boundWorkspaceIds: { 'type': 'array', 'itemType': 'string' },
      chargeType: 'string',
      commodityCode: 'string',
      expireTime: 'number',
      freeAgentSeats: 'number',
      gmtCreated: 'number',
      gmtModified: 'number',
      isDefault: 'boolean',
      LLM: 'number',
      payLevel: 'string',
      sessionAvailableDurationQuota: 'number',
      sessionSeats: 'number',
      tokenLimit: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.boundWorkspaceIds)) {
      $dara.Model.validateArray(this.boundWorkspaceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

