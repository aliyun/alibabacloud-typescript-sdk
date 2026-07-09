// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConnectorProperties extends $dara.Model {
  channelType?: string;
  dryRunRequestBody?: string;
  modelList?: string;
  network?: string;
  protocol?: string;
  region?: string;
  responseBodyPath?: string;
  securityGroupId?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'channelType',
      dryRunRequestBody: 'dryRunRequestBody',
      modelList: 'modelList',
      network: 'network',
      protocol: 'protocol',
      region: 'region',
      responseBodyPath: 'responseBodyPath',
      securityGroupId: 'securityGroupId',
      vSwitchId: 'vSwitchId',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      dryRunRequestBody: 'string',
      modelList: 'string',
      network: 'string',
      protocol: 'string',
      region: 'string',
      responseBodyPath: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

