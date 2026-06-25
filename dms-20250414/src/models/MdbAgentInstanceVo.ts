// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MdbAgentInstanceVo extends $dara.Model {
  accessUrl?: string;
  chargeType?: string;
  engineInstanceId?: string;
  engineRegion?: string;
  engineType?: string;
  gmtCreate?: string;
  instanceId?: string;
  instanceName?: string;
  lastActiveTime?: string;
  lockTime?: string;
  orderId?: string;
  publicDomain?: string;
  status?: number;
  statusDesc?: string;
  statusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      accessUrl: 'AccessUrl',
      chargeType: 'ChargeType',
      engineInstanceId: 'EngineInstanceId',
      engineRegion: 'EngineRegion',
      engineType: 'EngineType',
      gmtCreate: 'GmtCreate',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      lastActiveTime: 'LastActiveTime',
      lockTime: 'LockTime',
      orderId: 'OrderId',
      publicDomain: 'PublicDomain',
      status: 'Status',
      statusDesc: 'StatusDesc',
      statusMessage: 'StatusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessUrl: 'string',
      chargeType: 'string',
      engineInstanceId: 'string',
      engineRegion: 'string',
      engineType: 'string',
      gmtCreate: 'string',
      instanceId: 'string',
      instanceName: 'string',
      lastActiveTime: 'string',
      lockTime: 'string',
      orderId: 'string',
      publicDomain: 'string',
      status: 'number',
      statusDesc: 'string',
      statusMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

