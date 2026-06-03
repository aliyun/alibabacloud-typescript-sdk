// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AppOperateAction } from "./AppOperateAction";


export class AppOperationAddress extends $dara.Model {
  actions?: AppOperateAction[];
  aiCustomerConfigUrl?: string;
  aiDesignUrl?: string;
  appPublishUrl?: string;
  dashboardActions?: AppOperateAction[];
  designUrl?: string;
  instanceLoginUrl?: string;
  renewBuyUrl?: string;
  serverDeliveryUrl?: string;
  upgradeBuyUrl?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      aiCustomerConfigUrl: 'AiCustomerConfigUrl',
      aiDesignUrl: 'AiDesignUrl',
      appPublishUrl: 'AppPublishUrl',
      dashboardActions: 'DashboardActions',
      designUrl: 'DesignUrl',
      instanceLoginUrl: 'InstanceLoginUrl',
      renewBuyUrl: 'RenewBuyUrl',
      serverDeliveryUrl: 'ServerDeliveryUrl',
      upgradeBuyUrl: 'UpgradeBuyUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': AppOperateAction },
      aiCustomerConfigUrl: 'string',
      aiDesignUrl: 'string',
      appPublishUrl: 'string',
      dashboardActions: { 'type': 'array', 'itemType': AppOperateAction },
      designUrl: 'string',
      instanceLoginUrl: 'string',
      renewBuyUrl: 'string',
      serverDeliveryUrl: 'string',
      upgradeBuyUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    if(Array.isArray(this.dashboardActions)) {
      $dara.Model.validateArray(this.dashboardActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

