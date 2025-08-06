// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetCustomerConfigRequest extends $dara.Model {
  AIConfig?: string;
  appId?: string;
  auditConfig?: string;
  downloadSwitch?: string;
  metricConfig?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      AIConfig: 'AIConfig',
      appId: 'AppId',
      auditConfig: 'AuditConfig',
      downloadSwitch: 'DownloadSwitch',
      metricConfig: 'MetricConfig',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIConfig: 'string',
      appId: 'string',
      auditConfig: 'string',
      downloadSwitch: 'string',
      metricConfig: 'string',
      ownerId: 'number',
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

