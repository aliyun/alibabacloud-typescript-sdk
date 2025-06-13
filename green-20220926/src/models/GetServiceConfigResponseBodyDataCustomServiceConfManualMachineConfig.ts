// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceConfigResponseBodyDataCustomServiceConfManualMachineConfig extends $dara.Model {
  auditRiskLevels?: string[];
  callbackId?: number;
  enable?: boolean;
  manualService?: string;
  static names(): { [key: string]: string } {
    return {
      auditRiskLevels: 'AuditRiskLevels',
      callbackId: 'CallbackId',
      enable: 'Enable',
      manualService: 'ManualService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditRiskLevels: { 'type': 'array', 'itemType': 'string' },
      callbackId: 'number',
      enable: 'boolean',
      manualService: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.auditRiskLevels)) {
      $dara.Model.validateArray(this.auditRiskLevels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

