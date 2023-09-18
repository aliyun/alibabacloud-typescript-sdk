// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AllocatePublicConnectionRequest extends $tea.Model {
  clientToken?: string;
  databaseInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      databaseInstanceId: 'DatabaseInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      databaseInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocatePublicConnectionResponseBody extends $tea.Model {
  publicConnection?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      publicConnection: 'PublicConnection',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicConnection: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocatePublicConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AllocatePublicConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AllocatePublicConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCommandRequest extends $tea.Model {
  commandContent?: string;
  description?: string;
  enableParameter?: boolean;
  name?: string;
  regionId?: string;
  timeout?: number;
  type?: string;
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      description: 'Description',
      enableParameter: 'EnableParameter',
      name: 'Name',
      regionId: 'RegionId',
      timeout: 'Timeout',
      type: 'Type',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      description: 'string',
      enableParameter: 'boolean',
      name: 'string',
      regionId: 'string',
      timeout: 'number',
      type: 'string',
      workingDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCommandResponseBody extends $tea.Model {
  commandId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCommandResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateCommandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCommandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomImageRequest extends $tea.Model {
  clientToken?: string;
  dataSnapshotId?: string;
  description?: string;
  imageName?: string;
  instanceId?: string;
  regionId?: string;
  systemSnapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dataSnapshotId: 'DataSnapshotId',
      description: 'Description',
      imageName: 'ImageName',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      systemSnapshotId: 'SystemSnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dataSnapshotId: 'string',
      description: 'string',
      imageName: 'string',
      instanceId: 'string',
      regionId: 'string',
      systemSnapshotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomImageResponseBody extends $tea.Model {
  imageId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateCustomImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCustomImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirewallRuleRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  port?: string;
  regionId?: string;
  remark?: string;
  ruleProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      port: 'Port',
      regionId: 'RegionId',
      remark: 'Remark',
      ruleProtocol: 'RuleProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      port: 'string',
      regionId: 'string',
      remark: 'string',
      ruleProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirewallRuleResponseBody extends $tea.Model {
  firewallId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      firewallId: 'FirewallId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirewallRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateFirewallRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFirewallRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirewallRulesRequest extends $tea.Model {
  clientToken?: string;
  firewallRules?: CreateFirewallRulesRequestFirewallRules[];
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      firewallRules: 'FirewallRules',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      firewallRules: { 'type': 'array', 'itemType': CreateFirewallRulesRequestFirewallRules },
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirewallRulesShrinkRequest extends $tea.Model {
  clientToken?: string;
  firewallRulesShrink?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      firewallRulesShrink: 'FirewallRules',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      firewallRulesShrink: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirewallRulesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirewallRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateFirewallRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFirewallRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceKeyPairRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  keyPairName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      keyPairName: 'KeyPairName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      keyPairName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceKeyPairResponseBody extends $tea.Model {
  fingerprint?: string;
  keyPairName?: string;
  privateKey?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fingerprint: 'Fingerprint',
      keyPairName: 'KeyPairName',
      privateKey: 'PrivateKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fingerprint: 'string',
      keyPairName: 'string',
      privateKey: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceKeyPairResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateInstanceKeyPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateInstanceKeyPairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstancesRequest extends $tea.Model {
  amount?: number;
  autoRenew?: boolean;
  autoRenewPeriod?: number;
  chargeType?: string;
  clientToken?: string;
  dataDiskSize?: number;
  imageId?: string;
  period?: number;
  planId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      dataDiskSize: 'DataDiskSize',
      imageId: 'ImageId',
      period: 'Period',
      planId: 'PlanId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      chargeType: 'string',
      clientToken: 'string',
      dataDiskSize: 'number',
      imageId: 'string',
      period: 'number',
      planId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstancesResponseBody extends $tea.Model {
  instanceIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotRequest extends $tea.Model {
  clientToken?: string;
  diskId?: string;
  regionId?: string;
  snapshotName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      diskId: 'DiskId',
      regionId: 'RegionId',
      snapshotName: 'SnapshotName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      diskId: 'string',
      regionId: 'string',
      snapshotName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotResponseBody extends $tea.Model {
  requestId?: string;
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snapshotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCommandRequest extends $tea.Model {
  commandId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCommandResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCommandResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteCommandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCommandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomImageRequest extends $tea.Model {
  clientToken?: string;
  imageId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      imageId: 'ImageId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      imageId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomImageResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteCustomImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCustomImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFirewallRuleRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  regionId?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      regionId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFirewallRuleResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFirewallRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteFirewallRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFirewallRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceKeyPairRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceKeyPairResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceKeyPairResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteInstanceKeyPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteInstanceKeyPairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      snapshotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotsRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  snapshotIds?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      snapshotIds: 'SnapshotIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      snapshotIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSnapshotsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSnapshotsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudAssistantStatusRequest extends $tea.Model {
  instanceIds?: string[];
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudAssistantStatusShrinkRequest extends $tea.Model {
  instanceIdsShrink?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIdsShrink: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdsShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudAssistantStatusResponseBody extends $tea.Model {
  cloudAssistantStatus?: DescribeCloudAssistantStatusResponseBodyCloudAssistantStatus[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cloudAssistantStatus: 'CloudAssistantStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAssistantStatus: { 'type': 'array', 'itemType': DescribeCloudAssistantStatusResponseBodyCloudAssistantStatus },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudAssistantStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCloudAssistantStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCloudAssistantStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudMonitorAgentStatusesRequest extends $tea.Model {
  clientToken?: string;
  instanceIds?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceIds: 'InstanceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceIds: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudMonitorAgentStatusesResponseBody extends $tea.Model {
  instanceStatusList?: DescribeCloudMonitorAgentStatusesResponseBodyInstanceStatusList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceStatusList: 'InstanceStatusList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceStatusList: { 'type': 'array', 'itemType': DescribeCloudMonitorAgentStatusesResponseBodyInstanceStatusList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudMonitorAgentStatusesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCloudMonitorAgentStatusesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCloudMonitorAgentStatusesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandInvocationsRequest extends $tea.Model {
  commandId?: string;
  commandName?: string;
  commandType?: string;
  instanceId?: string;
  invocationStatus?: string;
  invokeId?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      commandName: 'CommandName',
      commandType: 'CommandType',
      instanceId: 'InstanceId',
      invocationStatus: 'InvocationStatus',
      invokeId: 'InvokeId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      commandName: 'string',
      commandType: 'string',
      instanceId: 'string',
      invocationStatus: 'string',
      invokeId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandInvocationsResponseBody extends $tea.Model {
  commandInvocations?: DescribeCommandInvocationsResponseBodyCommandInvocations[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      commandInvocations: 'CommandInvocations',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandInvocations: { 'type': 'array', 'itemType': DescribeCommandInvocationsResponseBodyCommandInvocations },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandInvocationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCommandInvocationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCommandInvocationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandsRequest extends $tea.Model {
  commandId?: string;
  name?: string;
  pageNumber?: string;
  pageSize?: string;
  provider?: string;
  regionId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      provider: 'Provider',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      name: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      provider: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandsResponseBody extends $tea.Model {
  commands?: DescribeCommandsResponseBodyCommands[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      commands: 'Commands',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commands: { 'type': 'array', 'itemType': DescribeCommandsResponseBodyCommands },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCommandsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCommandsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseErrorLogsRequest extends $tea.Model {
  databaseInstanceId?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      databaseInstanceId: 'DatabaseInstanceId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseInstanceId: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseErrorLogsResponseBody extends $tea.Model {
  errorLogs?: DescribeDatabaseErrorLogsResponseBodyErrorLogs[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorLogs: 'ErrorLogs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorLogs: { 'type': 'array', 'itemType': DescribeDatabaseErrorLogsResponseBodyErrorLogs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseErrorLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDatabaseErrorLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDatabaseErrorLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseInstanceMetricDataRequest extends $tea.Model {
  databaseInstanceId?: string;
  endTime?: string;
  metricName?: string;
  regionId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      databaseInstanceId: 'DatabaseInstanceId',
      endTime: 'EndTime',
      metricName: 'MetricName',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseInstanceId: 'string',
      endTime: 'string',
      metricName: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseInstanceMetricDataResponseBody extends $tea.Model {
  dataFormat?: string;
  metricData?: string;
  metricName?: string;
  requestId?: string;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      metricData: 'MetricData',
      metricName: 'MetricName',
      requestId: 'RequestId',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      metricData: 'string',
      metricName: 'string',
      requestId: 'string',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseInstanceMetricDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDatabaseInstanceMetricDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDatabaseInstanceMetricDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseInstanceParametersRequest extends $tea.Model {
  databaseInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseInstanceId: 'DatabaseInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseInstanceParametersResponseBody extends $tea.Model {
  configParameters?: DescribeDatabaseInstanceParametersResponseBodyConfigParameters[];
  engine?: string;
  engineVersion?: string;
  requestId?: string;
  runningParameters?: DescribeDatabaseInstanceParametersResponseBodyRunningParameters[];
  static names(): { [key: string]: string } {
    return {
      configParameters: 'ConfigParameters',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      requestId: 'RequestId',
      runningParameters: 'RunningParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configParameters: { 'type': 'array', 'itemType': DescribeDatabaseInstanceParametersResponseBodyConfigParameters },
      engine: 'string',
      engineVersion: 'string',
      requestId: 'string',
      runningParameters: { 'type': 'array', 'itemType': DescribeDatabaseInstanceParametersResponseBodyRunningParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseInstanceParametersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDatabaseInstanceParametersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDatabaseInstanceParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseInstancesRequest extends $tea.Model {
  databaseInstanceIds?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseInstanceIds: 'DatabaseInstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseInstanceIds: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseInstancesResponseBody extends $tea.Model {
  databaseInstances?: DescribeDatabaseInstancesResponseBodyDatabaseInstances[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      databaseInstances: 'DatabaseInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseInstances: { 'type': 'array', 'itemType': DescribeDatabaseInstancesResponseBodyDatabaseInstances },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDatabaseInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDatabaseInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseSlowLogRecordsRequest extends $tea.Model {
  acsProduct?: string;
  databaseInstanceId?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      acsProduct: 'AcsProduct',
      databaseInstanceId: 'DatabaseInstanceId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acsProduct: 'string',
      databaseInstanceId: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseSlowLogRecordsResponseBody extends $tea.Model {
  engine?: string;
  pageNumber?: number;
  pageSize?: number;
  physicalIORead?: number;
  requestId?: string;
  slowLogs?: DescribeDatabaseSlowLogRecordsResponseBodySlowLogs[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      physicalIORead: 'PhysicalIORead',
      requestId: 'RequestId',
      slowLogs: 'SlowLogs',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      physicalIORead: 'number',
      requestId: 'string',
      slowLogs: { 'type': 'array', 'itemType': DescribeDatabaseSlowLogRecordsResponseBodySlowLogs },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseSlowLogRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDatabaseSlowLogRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDatabaseSlowLogRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceKeyPairRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceKeyPairResponseBody extends $tea.Model {
  fingerprint?: string;
  keyPairName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fingerprint: 'Fingerprint',
      keyPairName: 'KeyPairName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fingerprint: 'string',
      keyPairName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceKeyPairResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceKeyPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceKeyPairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePasswordsSettingRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePasswordsSettingResponseBody extends $tea.Model {
  instancePasswordSetting?: boolean;
  requestId?: string;
  vncPasswordSetting?: boolean;
  static names(): { [key: string]: string } {
    return {
      instancePasswordSetting: 'InstancePasswordSetting',
      requestId: 'RequestId',
      vncPasswordSetting: 'VncPasswordSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instancePasswordSetting: 'boolean',
      requestId: 'string',
      vncPasswordSetting: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePasswordsSettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstancePasswordsSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstancePasswordsSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceVncUrlRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceVncUrlResponseBody extends $tea.Model {
  requestId?: string;
  vncUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vncUrl: 'VncUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vncUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceVncUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceVncUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceVncUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationResultRequest extends $tea.Model {
  instanceId?: string;
  invokeId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      invokeId: 'InvokeId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      invokeId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationResultResponseBody extends $tea.Model {
  invocationResult?: DescribeInvocationResultResponseBodyInvocationResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invocationResult: 'InvocationResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocationResult: DescribeInvocationResultResponseBodyInvocationResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInvocationResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInvocationResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsRequest extends $tea.Model {
  instanceId?: string;
  invokeStatus?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      invokeStatus: 'InvokeStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      invokeStatus: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBody extends $tea.Model {
  invocations?: DescribeInvocationsResponseBodyInvocations[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      invocations: 'Invocations',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocations: { 'type': 'array', 'itemType': DescribeInvocationsResponseBodyInvocations },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInvocationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInvocationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorDataRequest extends $tea.Model {
  clientToken?: string;
  endTime?: string;
  instanceId?: string;
  length?: string;
  metricName?: string;
  nextToken?: string;
  period?: string;
  regionId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      length: 'Length',
      metricName: 'MetricName',
      nextToken: 'NextToken',
      period: 'Period',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      endTime: 'string',
      instanceId: 'string',
      length: 'string',
      metricName: 'string',
      nextToken: 'string',
      period: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorDataResponseBody extends $tea.Model {
  datapoints?: string;
  nextToken?: string;
  period?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datapoints: 'Datapoints',
      nextToken: 'NextToken',
      period: 'Period',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datapoints: 'string',
      nextToken: 'string',
      period: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeMonitorDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMonitorDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityAgentStatusRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityAgentStatusResponseBody extends $tea.Model {
  clientStatus?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientStatus: 'ClientStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientStatus: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityAgentStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSecurityAgentStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSecurityAgentStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableFirewallRuleRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  regionId?: string;
  remark?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      remark: 'Remark',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      regionId: 'string',
      remark: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableFirewallRuleResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableFirewallRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableFirewallRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableFirewallRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableFirewallRuleRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  regionId?: string;
  remark?: string;
  ruleId?: string;
  sourceCidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      remark: 'Remark',
      ruleId: 'RuleId',
      sourceCidrIp: 'SourceCidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      regionId: 'string',
      remark: 'string',
      ruleId: 'string',
      sourceCidrIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableFirewallRuleResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableFirewallRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableFirewallRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableFirewallRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallCloudAssistantRequest extends $tea.Model {
  instanceIds?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallCloudAssistantShrinkRequest extends $tea.Model {
  instanceIdsShrink?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIdsShrink: 'InstanceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdsShrink: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallCloudAssistantResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallCloudAssistantResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InstallCloudAssistantResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InstallCloudAssistantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallCloudMonitorAgentRequest extends $tea.Model {
  clientToken?: string;
  force?: boolean;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      force: 'Force',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      force: 'boolean',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallCloudMonitorAgentResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallCloudMonitorAgentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InstallCloudMonitorAgentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InstallCloudMonitorAgentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeCommandRequest extends $tea.Model {
  commandId?: string;
  instanceIds?: string;
  parameters?: { [key: string]: any };
  regionId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      instanceIds: 'InstanceIds',
      parameters: 'Parameters',
      regionId: 'RegionId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      instanceIds: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeCommandShrinkRequest extends $tea.Model {
  commandId?: string;
  instanceIds?: string;
  parametersShrink?: string;
  regionId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      instanceIds: 'InstanceIds',
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      instanceIds: 'string',
      parametersShrink: 'string',
      regionId: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeCommandResponseBody extends $tea.Model {
  invokeId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invokeId: 'InvokeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeCommandResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InvokeCommandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InvokeCommandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesRequest extends $tea.Model {
  clientToken?: string;
  dataSnapshotId?: string;
  imageIds?: string;
  imageNames?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  systemSnapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dataSnapshotId: 'DataSnapshotId',
      imageIds: 'ImageIds',
      imageNames: 'ImageNames',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      systemSnapshotId: 'SystemSnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dataSnapshotId: 'string',
      imageIds: 'string',
      imageNames: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      systemSnapshotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesResponseBody extends $tea.Model {
  customImages?: ListCustomImagesResponseBodyCustomImages[];
  pageNumber?: string;
  pageSize?: string;
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      customImages: 'CustomImages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customImages: { 'type': 'array', 'itemType': ListCustomImagesResponseBodyCustomImages },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCustomImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCustomImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisksRequest extends $tea.Model {
  diskIds?: string;
  diskType?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      diskIds: 'DiskIds',
      diskType: 'DiskType',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskIds: 'string',
      diskType: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisksResponseBody extends $tea.Model {
  disks?: ListDisksResponseBodyDisks[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      disks: 'Disks',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disks: { 'type': 'array', 'itemType': ListDisksResponseBodyDisks },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDisksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDisksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFirewallRulesRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFirewallRulesResponseBody extends $tea.Model {
  firewallRules?: ListFirewallRulesResponseBodyFirewallRules[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      firewallRules: 'FirewallRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallRules: { 'type': 'array', 'itemType': ListFirewallRulesResponseBodyFirewallRules },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFirewallRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListFirewallRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFirewallRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesRequest extends $tea.Model {
  imageIds?: string;
  imageType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      imageIds: 'ImageIds',
      imageType: 'ImageType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageIds: 'string',
      imageType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBody extends $tea.Model {
  images?: ListImagesResponseBodyImages[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': ListImagesResponseBodyImages },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancePlansModificationRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancePlansModificationResponseBody extends $tea.Model {
  plans?: ListInstancePlansModificationResponseBodyPlans[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      plans: 'Plans',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      plans: { 'type': 'array', 'itemType': ListInstancePlansModificationResponseBodyPlans },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancePlansModificationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListInstancePlansModificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstancePlansModificationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceStatusRequest extends $tea.Model {
  instanceIds?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceStatusResponseBody extends $tea.Model {
  instanceStatuses?: ListInstanceStatusResponseBodyInstanceStatuses[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceStatuses: 'InstanceStatuses',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceStatuses: { 'type': 'array', 'itemType': ListInstanceStatusResponseBodyInstanceStatuses },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListInstanceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstanceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $tea.Model {
  chargeType?: string;
  instanceIds?: string;
  pageNumber?: number;
  pageSize?: number;
  publicIpAddresses?: string;
  regionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      instanceIds: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      publicIpAddresses: 'PublicIpAddresses',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      instanceIds: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      publicIpAddresses: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $tea.Model {
  instances?: ListInstancesResponseBodyInstances[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstances },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesTrafficPackagesRequest extends $tea.Model {
  acsProduct?: string;
  instanceIds?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acsProduct: 'AcsProduct',
      instanceIds: 'InstanceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acsProduct: 'string',
      instanceIds: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesTrafficPackagesResponseBody extends $tea.Model {
  instanceTrafficPackageUsages?: ListInstancesTrafficPackagesResponseBodyInstanceTrafficPackageUsages[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceTrafficPackageUsages: 'InstanceTrafficPackageUsages',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTrafficPackageUsages: { 'type': 'array', 'itemType': ListInstancesTrafficPackagesResponseBodyInstanceTrafficPackageUsages },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesTrafficPackagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListInstancesTrafficPackagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstancesTrafficPackagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlansRequest extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlansResponseBody extends $tea.Model {
  plans?: ListPlansResponseBodyPlans[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      plans: 'Plans',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      plans: { 'type': 'array', 'itemType': ListPlansResponseBodyPlans },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlansResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPlansResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPlansResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBody extends $tea.Model {
  regions?: ListRegionsResponseBodyRegions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': ListRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotsRequest extends $tea.Model {
  acsProduct?: string;
  diskId?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  snapshotIds?: string;
  sourceDiskType?: string;
  static names(): { [key: string]: string } {
    return {
      acsProduct: 'AcsProduct',
      diskId: 'DiskId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      snapshotIds: 'SnapshotIds',
      sourceDiskType: 'SourceDiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acsProduct: 'string',
      diskId: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      snapshotIds: 'string',
      sourceDiskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  snapshots?: ListSnapshotsResponseBodySnapshots[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      snapshots: 'Snapshots',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      snapshots: { 'type': 'array', 'itemType': ListSnapshotsResponseBodySnapshots },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSnapshotsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSnapshotsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceRequest extends $tea.Model {
  instanceId?: string;
  password?: string;
  regionId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      password: 'Password',
      regionId: 'RegionId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      password: 'string',
      regionId: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceResponseBody extends $tea.Model {
  redirectUrl?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      redirectUrl: 'RedirectUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      redirectUrl: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: LoginInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LoginInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatabaseInstanceDescriptionRequest extends $tea.Model {
  clientToken?: string;
  databaseInstanceDescription?: string;
  databaseInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      databaseInstanceDescription: 'DatabaseInstanceDescription',
      databaseInstanceId: 'DatabaseInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      databaseInstanceDescription: 'string',
      databaseInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatabaseInstanceDescriptionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatabaseInstanceDescriptionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDatabaseInstanceDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDatabaseInstanceDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatabaseInstanceParameterRequest extends $tea.Model {
  clientToken?: string;
  databaseInstanceId?: string;
  forceRestart?: boolean;
  parameters?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      databaseInstanceId: 'DatabaseInstanceId',
      forceRestart: 'ForceRestart',
      parameters: 'Parameters',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      databaseInstanceId: 'string',
      forceRestart: 'boolean',
      parameters: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatabaseInstanceParameterResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatabaseInstanceParameterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDatabaseInstanceParameterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDatabaseInstanceParameterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFirewallRuleRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  port?: string;
  regionId?: string;
  remark?: string;
  ruleId?: string;
  ruleProtocol?: string;
  sourceCidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      port: 'Port',
      regionId: 'RegionId',
      remark: 'Remark',
      ruleId: 'RuleId',
      ruleProtocol: 'RuleProtocol',
      sourceCidrIp: 'SourceCidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      port: 'string',
      regionId: 'string',
      remark: 'string',
      ruleId: 'string',
      ruleProtocol: 'string',
      sourceCidrIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFirewallRuleResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFirewallRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyFirewallRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyFirewallRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageShareStatusRequest extends $tea.Model {
  clientToken?: string;
  imageId?: string;
  operation?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      imageId: 'ImageId',
      operation: 'Operation',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      imageId: 'string',
      operation: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageShareStatusResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageShareStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyImageShareStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyImageShareStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceVncPasswordRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  regionId?: string;
  vncPassword?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      vncPassword: 'VncPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      regionId: 'string',
      vncPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceVncPasswordResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceVncPasswordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyInstanceVncPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyInstanceVncPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootInstanceRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RebootInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RebootInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootInstancesRequest extends $tea.Model {
  clientToken?: string;
  forceReboot?: boolean;
  instanceIds?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      forceReboot: 'ForceReboot',
      instanceIds: 'InstanceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      forceReboot: 'boolean',
      instanceIds: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootInstancesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RebootInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RebootInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePublicConnectionRequest extends $tea.Model {
  clientToken?: string;
  databaseInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      databaseInstanceId: 'DatabaseInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      databaseInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePublicConnectionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePublicConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReleasePublicConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleasePublicConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  period?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      period: 'Period',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      period: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RenewInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenewInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDatabaseAccountPasswordRequest extends $tea.Model {
  accountPassword?: string;
  clientToken?: string;
  databaseInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountPassword: 'AccountPassword',
      clientToken: 'ClientToken',
      databaseInstanceId: 'DatabaseInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountPassword: 'string',
      clientToken: 'string',
      databaseInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDatabaseAccountPasswordResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDatabaseAccountPasswordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResetDatabaseAccountPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetDatabaseAccountPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDiskRequest extends $tea.Model {
  clientToken?: string;
  diskId?: string;
  regionId?: string;
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      diskId: 'DiskId',
      regionId: 'RegionId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      diskId: 'string',
      regionId: 'string',
      snapshotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDiskResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDiskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResetDiskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetDiskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSystemRequest extends $tea.Model {
  clientToken?: string;
  imageId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      imageId: 'ImageId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      imageId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSystemResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSystemResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResetSystemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetSystemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDatabaseInstanceRequest extends $tea.Model {
  clientToken?: string;
  databaseInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      databaseInstanceId: 'DatabaseInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      databaseInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDatabaseInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDatabaseInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RestartDatabaseInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RestartDatabaseInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandRequest extends $tea.Model {
  commandContent?: string;
  enableParameter?: boolean;
  instanceId?: string;
  name?: string;
  parameters?: { [key: string]: any };
  regionId?: string;
  timeout?: number;
  type?: string;
  windowsPasswordName?: string;
  workingDir?: string;
  workingUser?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      enableParameter: 'EnableParameter',
      instanceId: 'InstanceId',
      name: 'Name',
      parameters: 'Parameters',
      regionId: 'RegionId',
      timeout: 'Timeout',
      type: 'Type',
      windowsPasswordName: 'WindowsPasswordName',
      workingDir: 'WorkingDir',
      workingUser: 'WorkingUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      enableParameter: 'boolean',
      instanceId: 'string',
      name: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      timeout: 'number',
      type: 'string',
      windowsPasswordName: 'string',
      workingDir: 'string',
      workingUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandShrinkRequest extends $tea.Model {
  commandContent?: string;
  enableParameter?: boolean;
  instanceId?: string;
  name?: string;
  parametersShrink?: string;
  regionId?: string;
  timeout?: number;
  type?: string;
  windowsPasswordName?: string;
  workingDir?: string;
  workingUser?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      enableParameter: 'EnableParameter',
      instanceId: 'InstanceId',
      name: 'Name',
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      timeout: 'Timeout',
      type: 'Type',
      windowsPasswordName: 'WindowsPasswordName',
      workingDir: 'WorkingDir',
      workingUser: 'WorkingUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      enableParameter: 'boolean',
      instanceId: 'string',
      name: 'string',
      parametersShrink: 'string',
      regionId: 'string',
      timeout: 'number',
      type: 'string',
      windowsPasswordName: 'string',
      workingDir: 'string',
      workingUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandResponseBody extends $tea.Model {
  invokeId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invokeId: 'InvokeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RunCommandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunCommandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDatabaseInstanceRequest extends $tea.Model {
  clientToken?: string;
  databaseInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      databaseInstanceId: 'DatabaseInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      databaseInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDatabaseInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDatabaseInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartDatabaseInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartDatabaseInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstancesRequest extends $tea.Model {
  clientToken?: string;
  instanceIds?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceIds: 'InstanceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceIds: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstancesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTerminalSessionRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTerminalSessionResponseBody extends $tea.Model {
  requestId?: string;
  securityToken?: string;
  sessionId?: string;
  webSocketUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityToken: 'SecurityToken',
      sessionId: 'SessionId',
      webSocketUrl: 'WebSocketUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityToken: 'string',
      sessionId: 'string',
      webSocketUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTerminalSessionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartTerminalSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartTerminalSessionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDatabaseInstanceRequest extends $tea.Model {
  clientToken?: string;
  databaseInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      databaseInstanceId: 'DatabaseInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      databaseInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDatabaseInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDatabaseInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopDatabaseInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopDatabaseInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstancesRequest extends $tea.Model {
  clientToken?: string;
  forceStop?: boolean;
  instanceIds?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      forceStop: 'ForceStop',
      instanceIds: 'InstanceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      forceStop: 'boolean',
      instanceIds: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstancesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCommandAttributeRequest extends $tea.Model {
  commandId?: string;
  description?: string;
  name?: string;
  regionId?: string;
  timeout?: number;
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      timeout: 'Timeout',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
      timeout: 'number',
      workingDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCommandAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCommandAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateCommandAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCommandAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDiskAttributeRequest extends $tea.Model {
  clientToken?: string;
  diskId?: string;
  regionId?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      diskId: 'DiskId',
      regionId: 'RegionId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      diskId: 'string',
      regionId: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDiskAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDiskAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateDiskAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDiskAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceAttributeRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  instanceName?: string;
  password?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      password: 'Password',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      instanceName: 'string',
      password: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateInstanceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateInstanceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSnapshotAttributeRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  remark?: string;
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      remark: 'Remark',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      remark: 'string',
      snapshotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSnapshotAttributeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSnapshotAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSnapshotAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSnapshotAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  planId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      planId: 'PlanId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      planId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpgradeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpgradeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadInstanceKeyPairRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  keyPairName?: string;
  publicKey?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      keyPairName: 'KeyPairName',
      publicKey: 'PublicKey',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      keyPairName: 'string',
      publicKey: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadInstanceKeyPairResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadInstanceKeyPairResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UploadInstanceKeyPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UploadInstanceKeyPairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirewallRulesRequestFirewallRules extends $tea.Model {
  port?: string;
  remark?: string;
  ruleProtocol?: string;
  sourceCidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      remark: 'Remark',
      ruleProtocol: 'RuleProtocol',
      sourceCidrIp: 'SourceCidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'string',
      remark: 'string',
      ruleProtocol: 'string',
      sourceCidrIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudAssistantStatusResponseBodyCloudAssistantStatus extends $tea.Model {
  instanceId?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudMonitorAgentStatusesResponseBodyInstanceStatusList extends $tea.Model {
  autoInstall?: boolean;
  instanceId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      autoInstall: 'AutoInstall',
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoInstall: 'boolean',
      instanceId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandInvocationsResponseBodyCommandInvocationsInvokeInstances extends $tea.Model {
  errorCode?: string;
  errorInfo?: string;
  exitCode?: number;
  finishTime?: string;
  instanceId?: string;
  invocationStatus?: string;
  output?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      exitCode: 'ExitCode',
      finishTime: 'FinishTime',
      instanceId: 'InstanceId',
      invocationStatus: 'InvocationStatus',
      output: 'Output',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorInfo: 'string',
      exitCode: 'number',
      finishTime: 'string',
      instanceId: 'string',
      invocationStatus: 'string',
      output: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandInvocationsResponseBodyCommandInvocations extends $tea.Model {
  commandContent?: string;
  commandDescription?: string;
  commandId?: string;
  commandName?: string;
  commandType?: string;
  creationTime?: string;
  invocationStatus?: string;
  invokeId?: string;
  invokeInstances?: DescribeCommandInvocationsResponseBodyCommandInvocationsInvokeInstances[];
  parameters?: string;
  timeout?: number;
  username?: string;
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      commandDescription: 'CommandDescription',
      commandId: 'CommandId',
      commandName: 'CommandName',
      commandType: 'CommandType',
      creationTime: 'CreationTime',
      invocationStatus: 'InvocationStatus',
      invokeId: 'InvokeId',
      invokeInstances: 'InvokeInstances',
      parameters: 'Parameters',
      timeout: 'Timeout',
      username: 'Username',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      commandDescription: 'string',
      commandId: 'string',
      commandName: 'string',
      commandType: 'string',
      creationTime: 'string',
      invocationStatus: 'string',
      invokeId: 'string',
      invokeInstances: { 'type': 'array', 'itemType': DescribeCommandInvocationsResponseBodyCommandInvocationsInvokeInstances },
      parameters: 'string',
      timeout: 'number',
      username: 'string',
      workingDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandsResponseBodyCommandsParameterDefinitions extends $tea.Model {
  defaultValue?: string;
  description?: string;
  parameterName?: string;
  possibleValues?: string[];
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      description: 'Description',
      parameterName: 'ParameterName',
      possibleValues: 'PossibleValues',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      description: 'string',
      parameterName: 'string',
      possibleValues: { 'type': 'array', 'itemType': 'string' },
      required: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandsResponseBodyCommands extends $tea.Model {
  commandContent?: string;
  commandId?: string;
  creationTime?: string;
  description?: string;
  enableParameter?: boolean;
  name?: string;
  parameterDefinitions?: DescribeCommandsResponseBodyCommandsParameterDefinitions[];
  parameterNames?: string[];
  provider?: string;
  timeout?: number;
  type?: string;
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      commandId: 'CommandId',
      creationTime: 'CreationTime',
      description: 'Description',
      enableParameter: 'EnableParameter',
      name: 'Name',
      parameterDefinitions: 'ParameterDefinitions',
      parameterNames: 'ParameterNames',
      provider: 'Provider',
      timeout: 'Timeout',
      type: 'Type',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      commandId: 'string',
      creationTime: 'string',
      description: 'string',
      enableParameter: 'boolean',
      name: 'string',
      parameterDefinitions: { 'type': 'array', 'itemType': DescribeCommandsResponseBodyCommandsParameterDefinitions },
      parameterNames: { 'type': 'array', 'itemType': 'string' },
      provider: 'string',
      timeout: 'number',
      type: 'string',
      workingDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseErrorLogsResponseBodyErrorLogs extends $tea.Model {
  createTime?: string;
  errorInfo?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      errorInfo: 'ErrorInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseInstanceParametersResponseBodyConfigParameters extends $tea.Model {
  checkingCode?: string;
  forceModify?: string;
  forceRestart?: string;
  parameterDescription?: string;
  parameterName?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      checkingCode: 'CheckingCode',
      forceModify: 'ForceModify',
      forceRestart: 'ForceRestart',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingCode: 'string',
      forceModify: 'string',
      forceRestart: 'string',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseInstanceParametersResponseBodyRunningParameters extends $tea.Model {
  checkingCode?: string;
  forceModify?: string;
  forceRestart?: string;
  parameterDescription?: string;
  parameterName?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      checkingCode: 'CheckingCode',
      forceModify: 'ForceModify',
      forceRestart: 'ForceRestart',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingCode: 'string',
      forceModify: 'string',
      forceRestart: 'string',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseInstancesResponseBodyDatabaseInstances extends $tea.Model {
  businessStatus?: string;
  chargeType?: string;
  cpu?: string;
  creationTime?: string;
  databaseInstanceEdition?: string;
  databaseInstanceId?: string;
  databaseInstanceName?: string;
  databaseInstanceStatus?: string;
  databaseVersion?: string;
  expiredTime?: string;
  memory?: string;
  privateConnection?: string;
  publicConnection?: string;
  regionId?: string;
  storage?: number;
  superAccountName?: string;
  static names(): { [key: string]: string } {
    return {
      businessStatus: 'BusinessStatus',
      chargeType: 'ChargeType',
      cpu: 'Cpu',
      creationTime: 'CreationTime',
      databaseInstanceEdition: 'DatabaseInstanceEdition',
      databaseInstanceId: 'DatabaseInstanceId',
      databaseInstanceName: 'DatabaseInstanceName',
      databaseInstanceStatus: 'DatabaseInstanceStatus',
      databaseVersion: 'DatabaseVersion',
      expiredTime: 'ExpiredTime',
      memory: 'Memory',
      privateConnection: 'PrivateConnection',
      publicConnection: 'PublicConnection',
      regionId: 'RegionId',
      storage: 'Storage',
      superAccountName: 'SuperAccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessStatus: 'string',
      chargeType: 'string',
      cpu: 'string',
      creationTime: 'string',
      databaseInstanceEdition: 'string',
      databaseInstanceId: 'string',
      databaseInstanceName: 'string',
      databaseInstanceStatus: 'string',
      databaseVersion: 'string',
      expiredTime: 'string',
      memory: 'string',
      privateConnection: 'string',
      publicConnection: 'string',
      regionId: 'string',
      storage: 'number',
      superAccountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseSlowLogRecordsResponseBodySlowLogs extends $tea.Model {
  DBName?: string;
  executionStartTime?: string;
  hostAddress?: string;
  lockTimes?: number;
  parseRowCounts?: number;
  queryTimeMS?: number;
  queryTimes?: number;
  returnRowCounts?: number;
  SQLText?: string;
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
      executionStartTime: 'ExecutionStartTime',
      hostAddress: 'HostAddress',
      lockTimes: 'LockTimes',
      parseRowCounts: 'ParseRowCounts',
      queryTimeMS: 'QueryTimeMS',
      queryTimes: 'QueryTimes',
      returnRowCounts: 'ReturnRowCounts',
      SQLText: 'SQLText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
      executionStartTime: 'string',
      hostAddress: 'string',
      lockTimes: 'number',
      parseRowCounts: 'number',
      queryTimeMS: 'number',
      queryTimes: 'number',
      returnRowCounts: 'number',
      SQLText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationResultResponseBodyInvocationResult extends $tea.Model {
  errorCode?: string;
  errorInfo?: string;
  exitCode?: number;
  finishedTime?: string;
  instanceId?: string;
  invocationStatus?: string;
  invokeId?: string;
  invokeRecordStatus?: string;
  invokeUser?: string;
  output?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      exitCode: 'ExitCode',
      finishedTime: 'FinishedTime',
      instanceId: 'InstanceId',
      invocationStatus: 'InvocationStatus',
      invokeId: 'InvokeId',
      invokeRecordStatus: 'InvokeRecordStatus',
      invokeUser: 'InvokeUser',
      output: 'Output',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorInfo: 'string',
      exitCode: 'number',
      finishedTime: 'string',
      instanceId: 'string',
      invocationStatus: 'string',
      invokeId: 'string',
      invokeRecordStatus: 'string',
      invokeUser: 'string',
      output: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBodyInvocations extends $tea.Model {
  commandContent?: string;
  commandName?: string;
  commandType?: string;
  creationTime?: string;
  invocationStatus?: string;
  invokeId?: string;
  invokeStatus?: string;
  parameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      commandName: 'CommandName',
      commandType: 'CommandType',
      creationTime: 'CreationTime',
      invocationStatus: 'InvocationStatus',
      invokeId: 'InvokeId',
      invokeStatus: 'InvokeStatus',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      commandName: 'string',
      commandType: 'string',
      creationTime: 'string',
      invocationStatus: 'string',
      invokeId: 'string',
      invokeStatus: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesResponseBodyCustomImages extends $tea.Model {
  creationTime?: string;
  dataSnapshotId?: string;
  dataSnapshotName?: string;
  description?: string;
  imageId?: string;
  inShare?: boolean;
  instanceId?: string;
  instanceName?: string;
  name?: string;
  regionId?: string;
  status?: string;
  systemSnapshotId?: string;
  systemSnapshotName?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      dataSnapshotId: 'DataSnapshotId',
      dataSnapshotName: 'DataSnapshotName',
      description: 'Description',
      imageId: 'ImageId',
      inShare: 'InShare',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      name: 'Name',
      regionId: 'RegionId',
      status: 'Status',
      systemSnapshotId: 'SystemSnapshotId',
      systemSnapshotName: 'SystemSnapshotName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      dataSnapshotId: 'string',
      dataSnapshotName: 'string',
      description: 'string',
      imageId: 'string',
      inShare: 'boolean',
      instanceId: 'string',
      instanceName: 'string',
      name: 'string',
      regionId: 'string',
      status: 'string',
      systemSnapshotId: 'string',
      systemSnapshotName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisksResponseBodyDisks extends $tea.Model {
  category?: string;
  creationTime?: string;
  device?: string;
  diskChargeType?: string;
  diskId?: string;
  diskName?: string;
  diskType?: string;
  instanceId?: string;
  instanceName?: string;
  regionId?: string;
  remark?: string;
  size?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      creationTime: 'CreationTime',
      device: 'Device',
      diskChargeType: 'DiskChargeType',
      diskId: 'DiskId',
      diskName: 'DiskName',
      diskType: 'DiskType',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
      remark: 'Remark',
      size: 'Size',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      creationTime: 'string',
      device: 'string',
      diskChargeType: 'string',
      diskId: 'string',
      diskName: 'string',
      diskType: 'string',
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
      remark: 'string',
      size: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFirewallRulesResponseBodyFirewallRules extends $tea.Model {
  policy?: string;
  port?: string;
  remark?: string;
  ruleId?: string;
  ruleProtocol?: string;
  sourceCidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      port: 'Port',
      remark: 'Remark',
      ruleId: 'RuleId',
      ruleProtocol: 'RuleProtocol',
      sourceCidrIp: 'SourceCidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: 'string',
      port: 'string',
      remark: 'string',
      ruleId: 'string',
      ruleProtocol: 'string',
      sourceCidrIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBodyImages extends $tea.Model {
  description?: string;
  imageId?: string;
  imageName?: string;
  imageType?: string;
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageType: 'ImageType',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      imageId: 'string',
      imageName: 'string',
      imageType: 'string',
      platform: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancePlansModificationResponseBodyPlans extends $tea.Model {
  bandwidth?: number;
  core?: number;
  currency?: string;
  diskSize?: number;
  diskType?: string;
  flow?: number;
  memory?: number;
  originPrice?: number;
  planId?: string;
  supportPlatform?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      core: 'Core',
      currency: 'Currency',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      flow: 'Flow',
      memory: 'Memory',
      originPrice: 'OriginPrice',
      planId: 'PlanId',
      supportPlatform: 'SupportPlatform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      core: 'number',
      currency: 'string',
      diskSize: 'number',
      diskType: 'string',
      flow: 'number',
      memory: 'number',
      originPrice: 'number',
      planId: 'string',
      supportPlatform: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceStatusResponseBodyInstanceStatuses extends $tea.Model {
  instanceId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesImage extends $tea.Model {
  imageContact?: string;
  imageIconUrl?: string;
  imageName?: string;
  imageType?: string;
  imageVersion?: string;
  osType?: string;
  static names(): { [key: string]: string } {
    return {
      imageContact: 'ImageContact',
      imageIconUrl: 'ImageIconUrl',
      imageName: 'ImageName',
      imageType: 'ImageType',
      imageVersion: 'ImageVersion',
      osType: 'OsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageContact: 'string',
      imageIconUrl: 'string',
      imageName: 'string',
      imageType: 'string',
      imageVersion: 'string',
      osType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesResourceSpec extends $tea.Model {
  bandwidth?: number;
  cpu?: number;
  diskCategory?: string;
  diskSize?: number;
  flow?: number;
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      cpu: 'Cpu',
      diskCategory: 'DiskCategory',
      diskSize: 'DiskSize',
      flow: 'Flow',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      cpu: 'number',
      diskCategory: 'string',
      diskSize: 'number',
      flow: 'number',
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstances extends $tea.Model {
  businessStatus?: string;
  chargeType?: string;
  combination?: boolean;
  combinationInstanceId?: string;
  creationTime?: string;
  ddosStatus?: string;
  disableReason?: string;
  expiredTime?: string;
  image?: ListInstancesResponseBodyInstancesImage;
  imageId?: string;
  innerIpAddress?: string;
  instanceId?: string;
  instanceName?: string;
  planId?: string;
  publicIpAddress?: string;
  regionId?: string;
  resourceSpec?: ListInstancesResponseBodyInstancesResourceSpec;
  status?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      businessStatus: 'BusinessStatus',
      chargeType: 'ChargeType',
      combination: 'Combination',
      combinationInstanceId: 'CombinationInstanceId',
      creationTime: 'CreationTime',
      ddosStatus: 'DdosStatus',
      disableReason: 'DisableReason',
      expiredTime: 'ExpiredTime',
      image: 'Image',
      imageId: 'ImageId',
      innerIpAddress: 'InnerIpAddress',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      planId: 'PlanId',
      publicIpAddress: 'PublicIpAddress',
      regionId: 'RegionId',
      resourceSpec: 'ResourceSpec',
      status: 'Status',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessStatus: 'string',
      chargeType: 'string',
      combination: 'boolean',
      combinationInstanceId: 'string',
      creationTime: 'string',
      ddosStatus: 'string',
      disableReason: 'string',
      expiredTime: 'string',
      image: ListInstancesResponseBodyInstancesImage,
      imageId: 'string',
      innerIpAddress: 'string',
      instanceId: 'string',
      instanceName: 'string',
      planId: 'string',
      publicIpAddress: 'string',
      regionId: 'string',
      resourceSpec: ListInstancesResponseBodyInstancesResourceSpec,
      status: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesTrafficPackagesResponseBodyInstanceTrafficPackageUsages extends $tea.Model {
  instanceId?: string;
  trafficOverflow?: number;
  trafficPackageRemaining?: number;
  trafficPackageTotal?: number;
  trafficUsed?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      trafficOverflow: 'TrafficOverflow',
      trafficPackageRemaining: 'TrafficPackageRemaining',
      trafficPackageTotal: 'TrafficPackageTotal',
      trafficUsed: 'TrafficUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      trafficOverflow: 'number',
      trafficPackageRemaining: 'number',
      trafficPackageTotal: 'number',
      trafficUsed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlansResponseBodyPlans extends $tea.Model {
  bandwidth?: number;
  core?: number;
  currency?: string;
  diskSize?: number;
  diskType?: string;
  flow?: number;
  memory?: number;
  originPrice?: number;
  planId?: string;
  supportPlatform?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      core: 'Core',
      currency: 'Currency',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      flow: 'Flow',
      memory: 'Memory',
      originPrice: 'OriginPrice',
      planId: 'PlanId',
      supportPlatform: 'SupportPlatform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      core: 'number',
      currency: 'string',
      diskSize: 'number',
      diskType: 'string',
      flow: 'number',
      memory: 'number',
      originPrice: 'number',
      planId: 'string',
      supportPlatform: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBodyRegions extends $tea.Model {
  localName?: string;
  regionEndpoint?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotsResponseBodySnapshots extends $tea.Model {
  creationTime?: string;
  instanceId?: string;
  progress?: string;
  regionId?: string;
  remark?: string;
  rollbackTime?: string;
  snapshotId?: string;
  snapshotName?: string;
  sourceDiskId?: string;
  sourceDiskType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      instanceId: 'InstanceId',
      progress: 'Progress',
      regionId: 'RegionId',
      remark: 'Remark',
      rollbackTime: 'RollbackTime',
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
      sourceDiskId: 'SourceDiskId',
      sourceDiskType: 'SourceDiskType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      instanceId: 'string',
      progress: 'string',
      regionId: 'string',
      remark: 'string',
      rollbackTime: 'string',
      snapshotId: 'string',
      snapshotName: 'string',
      sourceDiskId: 'string',
      sourceDiskType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("swas-open", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
    * By default, no public endpoints are assigned to Simple Database Service instances. If you want to access the databases of a Simple Database Service instance over the Internet by using Simple Container Service or Data Management (DMS), you must apply for a public endpoint for the Simple Database Service instance.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request AllocatePublicConnectionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AllocatePublicConnectionResponse
   */
  async allocatePublicConnectionWithOptions(request: AllocatePublicConnectionRequest, runtime: $Util.RuntimeOptions): Promise<AllocatePublicConnectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AllocatePublicConnection",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AllocatePublicConnectionResponse>(await this.callApi(params, req, runtime), new AllocatePublicConnectionResponse({}));
  }

  /**
    * By default, no public endpoints are assigned to Simple Database Service instances. If you want to access the databases of a Simple Database Service instance over the Internet by using Simple Container Service or Data Management (DMS), you must apply for a public endpoint for the Simple Database Service instance.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request AllocatePublicConnectionRequest
    * @return AllocatePublicConnectionResponse
   */
  async allocatePublicConnection(request: AllocatePublicConnectionRequest): Promise<AllocatePublicConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocatePublicConnectionWithOptions(request, runtime);
  }

  async createCommandWithOptions(request: CreateCommandRequest, runtime: $Util.RuntimeOptions): Promise<CreateCommandResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.commandContent)) {
      query["CommandContent"] = request.commandContent;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.enableParameter)) {
      query["EnableParameter"] = request.enableParameter;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.workingDir)) {
      query["WorkingDir"] = request.workingDir;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCommand",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCommandResponse>(await this.callApi(params, req, runtime), new CreateCommandResponse({}));
  }

  async createCommand(request: CreateCommandRequest): Promise<CreateCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCommandWithOptions(request, runtime);
  }

  /**
    * A custom image is created based on a snapshot of a simple application server. You can use a custom image to create multiple simple application servers that have the same configurations. You can also share custom images to ECS and use the shared images to create ECS instances or replace the OSs of existing ECS instances. For more information about custom images, see [Overview of custom images](~~199375~~).
    * You must create a system disk snapshot of a simple application server before you create a custom image based on the snapshot. For more information, see [CreateSnapshot](~~190452~~).
    * > If you need the data on the data disk of a simple application server when you create a custom image, create a snapshot for the data disk first.
    * Before you create a custom image, take note of the following items:
    * *   The custom image and the corresponding simple application server must reside in the same region.
    * *   The maximum number of custom images that can be maintained in an Alibaba Cloud account is triple the number of simple application servers in the account. The value cannot be greater than 15.
    * *   You can directly create a custom image only based on the system disk snapshot of a simple application server. If you want a custom image to contain the data on the data disk of the simple application server, you must select a data disk snapshot when you create the custom image.
    * *   If a simple application server is released due to expiration or refunds, the custom images that are created based on a snapshot of the server are also released.
    * *   If you reset a simple application server by changing the application system or OS of the server or replacing the image of the server, the disk data on the server is cleared. Back up the disk data as needed.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request CreateCustomImageRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateCustomImageResponse
   */
  async createCustomImageWithOptions(request: CreateCustomImageRequest, runtime: $Util.RuntimeOptions): Promise<CreateCustomImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dataSnapshotId)) {
      query["DataSnapshotId"] = request.dataSnapshotId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.systemSnapshotId)) {
      query["SystemSnapshotId"] = request.systemSnapshotId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCustomImage",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCustomImageResponse>(await this.callApi(params, req, runtime), new CreateCustomImageResponse({}));
  }

  /**
    * A custom image is created based on a snapshot of a simple application server. You can use a custom image to create multiple simple application servers that have the same configurations. You can also share custom images to ECS and use the shared images to create ECS instances or replace the OSs of existing ECS instances. For more information about custom images, see [Overview of custom images](~~199375~~).
    * You must create a system disk snapshot of a simple application server before you create a custom image based on the snapshot. For more information, see [CreateSnapshot](~~190452~~).
    * > If you need the data on the data disk of a simple application server when you create a custom image, create a snapshot for the data disk first.
    * Before you create a custom image, take note of the following items:
    * *   The custom image and the corresponding simple application server must reside in the same region.
    * *   The maximum number of custom images that can be maintained in an Alibaba Cloud account is triple the number of simple application servers in the account. The value cannot be greater than 15.
    * *   You can directly create a custom image only based on the system disk snapshot of a simple application server. If you want a custom image to contain the data on the data disk of the simple application server, you must select a data disk snapshot when you create the custom image.
    * *   If a simple application server is released due to expiration or refunds, the custom images that are created based on a snapshot of the server are also released.
    * *   If you reset a simple application server by changing the application system or OS of the server or replacing the image of the server, the disk data on the server is cleared. Back up the disk data as needed.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request CreateCustomImageRequest
    * @return CreateCustomImageResponse
   */
  async createCustomImage(request: CreateCustomImageRequest): Promise<CreateCustomImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCustomImageWithOptions(request, runtime);
  }

  /**
    * Firewalls serve to control network access to simple application servers and isolate security domains in the cloud. By default, SSH port 22, HTTP port 80, and HTTPS port 443 are enabled for simple application servers. Other ports are disabled. You can add firewall rules to enable more ports.
    * ### QPS limits
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request CreateFirewallRuleRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateFirewallRuleResponse
   */
  async createFirewallRuleWithOptions(request: CreateFirewallRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateFirewallRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.ruleProtocol)) {
      query["RuleProtocol"] = request.ruleProtocol;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateFirewallRule",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFirewallRuleResponse>(await this.callApi(params, req, runtime), new CreateFirewallRuleResponse({}));
  }

  /**
    * Firewalls serve to control network access to simple application servers and isolate security domains in the cloud. By default, SSH port 22, HTTP port 80, and HTTPS port 443 are enabled for simple application servers. Other ports are disabled. You can add firewall rules to enable more ports.
    * ### QPS limits
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request CreateFirewallRuleRequest
    * @return CreateFirewallRuleResponse
   */
  async createFirewallRule(request: CreateFirewallRuleRequest): Promise<CreateFirewallRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFirewallRuleWithOptions(request, runtime);
  }

  /**
    * Firewalls serve to control network access to simple application servers and isolate security domains in the cloud. By default, SSH port 22, HTTP port 80, and HTTPS port 443 are enabled for simple application servers. Other ports are disabled. You can add firewall rules to enable more ports.
    *
    * @param tmpReq CreateFirewallRulesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateFirewallRulesResponse
   */
  async createFirewallRulesWithOptions(tmpReq: CreateFirewallRulesRequest, runtime: $Util.RuntimeOptions): Promise<CreateFirewallRulesResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateFirewallRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.firewallRules)) {
      request.firewallRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.firewallRules, "FirewallRules", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.firewallRulesShrink)) {
      query["FirewallRules"] = request.firewallRulesShrink;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateFirewallRules",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFirewallRulesResponse>(await this.callApi(params, req, runtime), new CreateFirewallRulesResponse({}));
  }

  /**
    * Firewalls serve to control network access to simple application servers and isolate security domains in the cloud. By default, SSH port 22, HTTP port 80, and HTTPS port 443 are enabled for simple application servers. Other ports are disabled. You can add firewall rules to enable more ports.
    *
    * @param request CreateFirewallRulesRequest
    * @return CreateFirewallRulesResponse
   */
  async createFirewallRules(request: CreateFirewallRulesRequest): Promise<CreateFirewallRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFirewallRulesWithOptions(request, runtime);
  }

  async createInstanceKeyPairWithOptions(request: CreateInstanceKeyPairRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceKeyPairResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstanceKeyPair",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceKeyPairResponse>(await this.callApi(params, req, runtime), new CreateInstanceKeyPairResponse({}));
  }

  async createInstanceKeyPair(request: CreateInstanceKeyPairRequest): Promise<CreateInstanceKeyPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceKeyPairWithOptions(request, runtime);
  }

  /**
    * *   Before you call this operation, we recommend that you understand the billing of Simple Application Server. For more information, see [Billable items](~~58623~~).
    * *   A maximum of 20 simple application servers can be maintained in an Alibaba Cloud account.
    * *   When you call this operation to create simple application servers, make sure that the balance in your account is sufficient to pay for the servers. If the balance in your account is insufficient, the servers cannot be created.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request CreateInstancesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateInstancesResponse
   */
  async createInstancesWithOptions(request: CreateInstancesRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dataDiskSize)) {
      query["DataDiskSize"] = request.dataDiskSize;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstances",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateInstancesResponse>(await this.callApi(params, req, runtime), new CreateInstancesResponse({}));
  }

  /**
    * *   Before you call this operation, we recommend that you understand the billing of Simple Application Server. For more information, see [Billable items](~~58623~~).
    * *   A maximum of 20 simple application servers can be maintained in an Alibaba Cloud account.
    * *   When you call this operation to create simple application servers, make sure that the balance in your account is sufficient to pay for the servers. If the balance in your account is insufficient, the servers cannot be created.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request CreateInstancesRequest
    * @return CreateInstancesResponse
   */
  async createInstances(request: CreateInstancesRequest): Promise<CreateInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstancesWithOptions(request, runtime);
  }

  /**
    * A snapshot is a point-in-time backup of a disk. Snapshots can be used to back up data, recover data after accidental operations on instances, recover data after network attacks, and create custom images.
    * > You are not charged for creating snapshots for disks of simple application servers.
    * ### Precautions
    * *   You can create up to three snapshots for disks of each simple application server.
    * *   The maximum number of snapshots that can be retained in an Alibaba Cloud account is triple the number of simple application servers that you maintain. The value cannot be greater than 15.
    * *   If a simple application server is automatically released due to expiration, the snapshots created for the server are deleted.
    * *   If you reset the simple application server after you create a snapshot for a server, the snapshot is retained but cannot be used to roll back the disks of the server.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request CreateSnapshotRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateSnapshotResponse
   */
  async createSnapshotWithOptions(request: CreateSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<CreateSnapshotResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.snapshotName)) {
      query["SnapshotName"] = request.snapshotName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSnapshot",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSnapshotResponse>(await this.callApi(params, req, runtime), new CreateSnapshotResponse({}));
  }

  /**
    * A snapshot is a point-in-time backup of a disk. Snapshots can be used to back up data, recover data after accidental operations on instances, recover data after network attacks, and create custom images.
    * > You are not charged for creating snapshots for disks of simple application servers.
    * ### Precautions
    * *   You can create up to three snapshots for disks of each simple application server.
    * *   The maximum number of snapshots that can be retained in an Alibaba Cloud account is triple the number of simple application servers that you maintain. The value cannot be greater than 15.
    * *   If a simple application server is automatically released due to expiration, the snapshots created for the server are deleted.
    * *   If you reset the simple application server after you create a snapshot for a server, the snapshot is retained but cannot be used to roll back the disks of the server.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request CreateSnapshotRequest
    * @return CreateSnapshotResponse
   */
  async createSnapshot(request: CreateSnapshotRequest): Promise<CreateSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSnapshotWithOptions(request, runtime);
  }

  async deleteCommandWithOptions(request: DeleteCommandRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCommandResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.commandId)) {
      query["CommandId"] = request.commandId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCommand",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCommandResponse>(await this.callApi(params, req, runtime), new DeleteCommandResponse({}));
  }

  async deleteCommand(request: DeleteCommandRequest): Promise<DeleteCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCommandWithOptions(request, runtime);
  }

  /**
    * You can delete a custom image that you no longer need. After the custom image is deleted, you cannot use the custom image to reset the simple application servers that were created based on the custom image.
    * > If a custom image is shared to Elastic Compute Service (ECS), you must unshare the image before you can delete it. After you unshare the custom image, you cannot query the custom image by using the ECS console or by calling ECS API operations. If you need to use the custom image in ECS, we recommend that you copy the image before you delete it. For more information, see [Copy a shared image of a simple application server in the ECS console](~~199378~~).
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request DeleteCustomImageRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteCustomImageResponse
   */
  async deleteCustomImageWithOptions(request: DeleteCustomImageRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCustomImage",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCustomImageResponse>(await this.callApi(params, req, runtime), new DeleteCustomImageResponse({}));
  }

  /**
    * You can delete a custom image that you no longer need. After the custom image is deleted, you cannot use the custom image to reset the simple application servers that were created based on the custom image.
    * > If a custom image is shared to Elastic Compute Service (ECS), you must unshare the image before you can delete it. After you unshare the custom image, you cannot query the custom image by using the ECS console or by calling ECS API operations. If you need to use the custom image in ECS, we recommend that you copy the image before you delete it. For more information, see [Copy a shared image of a simple application server in the ECS console](~~199378~~).
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request DeleteCustomImageRequest
    * @return DeleteCustomImageResponse
   */
  async deleteCustomImage(request: DeleteCustomImageRequest): Promise<DeleteCustomImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomImageWithOptions(request, runtime);
  }

  /**
    * After a firewall rule is deleted, your business deployed on the simple application server may become inaccessible. Before you delete a firewall rule, make sure that the firewall rule is no longer needed by the simple application server.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request DeleteFirewallRuleRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteFirewallRuleResponse
   */
  async deleteFirewallRuleWithOptions(request: DeleteFirewallRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFirewallRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFirewallRule",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFirewallRuleResponse>(await this.callApi(params, req, runtime), new DeleteFirewallRuleResponse({}));
  }

  /**
    * After a firewall rule is deleted, your business deployed on the simple application server may become inaccessible. Before you delete a firewall rule, make sure that the firewall rule is no longer needed by the simple application server.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request DeleteFirewallRuleRequest
    * @return DeleteFirewallRuleResponse
   */
  async deleteFirewallRule(request: DeleteFirewallRuleRequest): Promise<DeleteFirewallRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFirewallRuleWithOptions(request, runtime);
  }

  async deleteInstanceKeyPairWithOptions(request: DeleteInstanceKeyPairRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceKeyPairResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstanceKeyPair",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceKeyPairResponse>(await this.callApi(params, req, runtime), new DeleteInstanceKeyPairResponse({}));
  }

  async deleteInstanceKeyPair(request: DeleteInstanceKeyPairRequest): Promise<DeleteInstanceKeyPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceKeyPairWithOptions(request, runtime);
  }

  /**
    * You can delete a snapshot if you no longer need it.
    * > If a custom image was created based on the snapshot, delete the custom image before you delete the snapshot.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request DeleteSnapshotRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteSnapshotResponse
   */
  async deleteSnapshotWithOptions(request: DeleteSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSnapshotResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSnapshot",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSnapshotResponse>(await this.callApi(params, req, runtime), new DeleteSnapshotResponse({}));
  }

  /**
    * You can delete a snapshot if you no longer need it.
    * > If a custom image was created based on the snapshot, delete the custom image before you delete the snapshot.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request DeleteSnapshotRequest
    * @return DeleteSnapshotResponse
   */
  async deleteSnapshot(request: DeleteSnapshotRequest): Promise<DeleteSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSnapshotWithOptions(request, runtime);
  }

  async deleteSnapshotsWithOptions(request: DeleteSnapshotsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSnapshotsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.snapshotIds)) {
      query["SnapshotIds"] = request.snapshotIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSnapshots",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSnapshotsResponse>(await this.callApi(params, req, runtime), new DeleteSnapshotsResponse({}));
  }

  async deleteSnapshots(request: DeleteSnapshotsRequest): Promise<DeleteSnapshotsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSnapshotsWithOptions(request, runtime);
  }

  /**
    * By default, the Cloud Assistant client is installed on simple application servers. If you have manually uninstalled the client, you must reinstall the client. Otherwise, you cannot run commands on the servers.
    *
    * @param tmpReq DescribeCloudAssistantStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCloudAssistantStatusResponse
   */
  async describeCloudAssistantStatusWithOptions(tmpReq: DescribeCloudAssistantStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCloudAssistantStatusResponse> {
    Util.validateModel(tmpReq);
    let request = new DescribeCloudAssistantStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCloudAssistantStatus",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCloudAssistantStatusResponse>(await this.callApi(params, req, runtime), new DescribeCloudAssistantStatusResponse({}));
  }

  /**
    * By default, the Cloud Assistant client is installed on simple application servers. If you have manually uninstalled the client, you must reinstall the client. Otherwise, you cannot run commands on the servers.
    *
    * @param request DescribeCloudAssistantStatusRequest
    * @return DescribeCloudAssistantStatusResponse
   */
  async describeCloudAssistantStatus(request: DescribeCloudAssistantStatusRequest): Promise<DescribeCloudAssistantStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudAssistantStatusWithOptions(request, runtime);
  }

  async describeCloudMonitorAgentStatusesWithOptions(request: DescribeCloudMonitorAgentStatusesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCloudMonitorAgentStatusesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCloudMonitorAgentStatuses",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCloudMonitorAgentStatusesResponse>(await this.callApi(params, req, runtime), new DescribeCloudMonitorAgentStatusesResponse({}));
  }

  async describeCloudMonitorAgentStatuses(request: DescribeCloudMonitorAgentStatusesRequest): Promise<DescribeCloudMonitorAgentStatusesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudMonitorAgentStatusesWithOptions(request, runtime);
  }

  async describeCommandInvocationsWithOptions(request: DescribeCommandInvocationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCommandInvocationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.commandId)) {
      query["CommandId"] = request.commandId;
    }

    if (!Util.isUnset(request.commandName)) {
      query["CommandName"] = request.commandName;
    }

    if (!Util.isUnset(request.commandType)) {
      query["CommandType"] = request.commandType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.invocationStatus)) {
      query["InvocationStatus"] = request.invocationStatus;
    }

    if (!Util.isUnset(request.invokeId)) {
      query["InvokeId"] = request.invokeId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCommandInvocations",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCommandInvocationsResponse>(await this.callApi(params, req, runtime), new DescribeCommandInvocationsResponse({}));
  }

  async describeCommandInvocations(request: DescribeCommandInvocationsRequest): Promise<DescribeCommandInvocationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCommandInvocationsWithOptions(request, runtime);
  }

  async describeCommandsWithOptions(request: DescribeCommandsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCommandsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.commandId)) {
      query["CommandId"] = request.commandId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.provider)) {
      query["Provider"] = request.provider;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCommands",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCommandsResponse>(await this.callApi(params, req, runtime), new DescribeCommandsResponse({}));
  }

  async describeCommands(request: DescribeCommandsRequest): Promise<DescribeCommandsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCommandsWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query the error logs of databases in a Simple Database Service instance and locate faults based on the error logs.
    * \\### QPS limit You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request DescribeDatabaseErrorLogsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDatabaseErrorLogsResponse
   */
  async describeDatabaseErrorLogsWithOptions(request: DescribeDatabaseErrorLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDatabaseErrorLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDatabaseErrorLogs",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDatabaseErrorLogsResponse>(await this.callApi(params, req, runtime), new DescribeDatabaseErrorLogsResponse({}));
  }

  /**
    * You can call this operation to query the error logs of databases in a Simple Database Service instance and locate faults based on the error logs.
    * \\### QPS limit You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request DescribeDatabaseErrorLogsRequest
    * @return DescribeDatabaseErrorLogsResponse
   */
  async describeDatabaseErrorLogs(request: DescribeDatabaseErrorLogsRequest): Promise<DescribeDatabaseErrorLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDatabaseErrorLogsWithOptions(request, runtime);
  }

  /**
    * After you create a Simple Database Service instance, you can query the details about the vCPU, memory, disk size, storage IOPS (input/output operations per second), and total current connection number of the instance.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request DescribeDatabaseInstanceMetricDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDatabaseInstanceMetricDataResponse
   */
  async describeDatabaseInstanceMetricDataWithOptions(request: DescribeDatabaseInstanceMetricDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDatabaseInstanceMetricDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDatabaseInstanceMetricData",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDatabaseInstanceMetricDataResponse>(await this.callApi(params, req, runtime), new DescribeDatabaseInstanceMetricDataResponse({}));
  }

  /**
    * After you create a Simple Database Service instance, you can query the details about the vCPU, memory, disk size, storage IOPS (input/output operations per second), and total current connection number of the instance.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request DescribeDatabaseInstanceMetricDataRequest
    * @return DescribeDatabaseInstanceMetricDataResponse
   */
  async describeDatabaseInstanceMetricData(request: DescribeDatabaseInstanceMetricDataRequest): Promise<DescribeDatabaseInstanceMetricDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDatabaseInstanceMetricDataWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query the information about parameters of a Simple Database Service instance.
    *
    * @param request DescribeDatabaseInstanceParametersRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDatabaseInstanceParametersResponse
   */
  async describeDatabaseInstanceParametersWithOptions(request: DescribeDatabaseInstanceParametersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDatabaseInstanceParametersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDatabaseInstanceParameters",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDatabaseInstanceParametersResponse>(await this.callApi(params, req, runtime), new DescribeDatabaseInstanceParametersResponse({}));
  }

  /**
    * You can call this operation to query the information about parameters of a Simple Database Service instance.
    *
    * @param request DescribeDatabaseInstanceParametersRequest
    * @return DescribeDatabaseInstanceParametersResponse
   */
  async describeDatabaseInstanceParameters(request: DescribeDatabaseInstanceParametersRequest): Promise<DescribeDatabaseInstanceParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDatabaseInstanceParametersWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query the details of Simple Database Service instances in a region, including the IDs, names, plans, database versions, public endpoint, internal endpoint, creation time, and expiration time of the instances.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request DescribeDatabaseInstancesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDatabaseInstancesResponse
   */
  async describeDatabaseInstancesWithOptions(request: DescribeDatabaseInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDatabaseInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.databaseInstanceIds)) {
      query["DatabaseInstanceIds"] = request.databaseInstanceIds;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDatabaseInstances",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDatabaseInstancesResponse>(await this.callApi(params, req, runtime), new DescribeDatabaseInstancesResponse({}));
  }

  /**
    * You can call this operation to query the details of Simple Database Service instances in a region, including the IDs, names, plans, database versions, public endpoint, internal endpoint, creation time, and expiration time of the instances.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request DescribeDatabaseInstancesRequest
    * @return DescribeDatabaseInstancesResponse
   */
  async describeDatabaseInstances(request: DescribeDatabaseInstancesRequest): Promise<DescribeDatabaseInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDatabaseInstancesWithOptions(request, runtime);
  }

  /**
    * You can query the slow query log details of a Simple Database Service instance and locate faults based on the log details.
    * > Slow query log details are retained for 7 days.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request DescribeDatabaseSlowLogRecordsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDatabaseSlowLogRecordsResponse
   */
  async describeDatabaseSlowLogRecordsWithOptions(request: DescribeDatabaseSlowLogRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDatabaseSlowLogRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acsProduct)) {
      query["AcsProduct"] = request.acsProduct;
    }

    if (!Util.isUnset(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDatabaseSlowLogRecords",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDatabaseSlowLogRecordsResponse>(await this.callApi(params, req, runtime), new DescribeDatabaseSlowLogRecordsResponse({}));
  }

  /**
    * You can query the slow query log details of a Simple Database Service instance and locate faults based on the log details.
    * > Slow query log details are retained for 7 days.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request DescribeDatabaseSlowLogRecordsRequest
    * @return DescribeDatabaseSlowLogRecordsResponse
   */
  async describeDatabaseSlowLogRecords(request: DescribeDatabaseSlowLogRecordsRequest): Promise<DescribeDatabaseSlowLogRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDatabaseSlowLogRecordsWithOptions(request, runtime);
  }

  async describeInstanceKeyPairWithOptions(request: DescribeInstanceKeyPairRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceKeyPairResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceKeyPair",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceKeyPairResponse>(await this.callApi(params, req, runtime), new DescribeInstanceKeyPairResponse({}));
  }

  async describeInstanceKeyPair(request: DescribeInstanceKeyPairRequest): Promise<DescribeInstanceKeyPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceKeyPairWithOptions(request, runtime);
  }

  async describeInstancePasswordsSettingWithOptions(request: DescribeInstancePasswordsSettingRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancePasswordsSettingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstancePasswordsSetting",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstancePasswordsSettingResponse>(await this.callApi(params, req, runtime), new DescribeInstancePasswordsSettingResponse({}));
  }

  async describeInstancePasswordsSetting(request: DescribeInstancePasswordsSettingRequest): Promise<DescribeInstancePasswordsSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancePasswordsSettingWithOptions(request, runtime);
  }

  async describeInstanceVncUrlWithOptions(request: DescribeInstanceVncUrlRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceVncUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceVncUrl",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceVncUrlResponse>(await this.callApi(params, req, runtime), new DescribeInstanceVncUrlResponse({}));
  }

  async describeInstanceVncUrl(request: DescribeInstanceVncUrlRequest): Promise<DescribeInstanceVncUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceVncUrlWithOptions(request, runtime);
  }

  /**
    * *   After you execute a command, the command may not succeed or return the expected results. You can call this operation to query the execution result of a command.
    * *   You can query the execution results that were generated within the last two weeks. A maximum of 100,000 entries of execution results can be retained.
    *
    * @param request DescribeInvocationResultRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeInvocationResultResponse
   */
  async describeInvocationResultWithOptions(request: DescribeInvocationResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInvocationResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.invokeId)) {
      query["InvokeId"] = request.invokeId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInvocationResult",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInvocationResultResponse>(await this.callApi(params, req, runtime), new DescribeInvocationResultResponse({}));
  }

  /**
    * *   After you execute a command, the command may not succeed or return the expected results. You can call this operation to query the execution result of a command.
    * *   You can query the execution results that were generated within the last two weeks. A maximum of 100,000 entries of execution results can be retained.
    *
    * @param request DescribeInvocationResultRequest
    * @return DescribeInvocationResultResponse
   */
  async describeInvocationResult(request: DescribeInvocationResultRequest): Promise<DescribeInvocationResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInvocationResultWithOptions(request, runtime);
  }

  /**
    * *   After you execute a command, the command may not succeed or return the expected results. You can call this operation to query the actual execution results.
    * *   You can query the execution results that were generated within the last two weeks. Up to 100,000 entries of execution results can be retained.
    *
    * @param request DescribeInvocationsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeInvocationsResponse
   */
  async describeInvocationsWithOptions(request: DescribeInvocationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInvocationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.invokeStatus)) {
      query["InvokeStatus"] = request.invokeStatus;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInvocations",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInvocationsResponse>(await this.callApi(params, req, runtime), new DescribeInvocationsResponse({}));
  }

  /**
    * *   After you execute a command, the command may not succeed or return the expected results. You can call this operation to query the actual execution results.
    * *   You can query the execution results that were generated within the last two weeks. Up to 100,000 entries of execution results can be retained.
    *
    * @param request DescribeInvocationsRequest
    * @return DescribeInvocationsResponse
   */
  async describeInvocations(request: DescribeInvocationsRequest): Promise<DescribeInvocationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInvocationsWithOptions(request, runtime);
  }

  async describeMonitorDataWithOptions(request: DescribeMonitorDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitorDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.length)) {
      query["Length"] = request.length;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMonitorData",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMonitorDataResponse>(await this.callApi(params, req, runtime), new DescribeMonitorDataResponse({}));
  }

  async describeMonitorData(request: DescribeMonitorDataRequest): Promise<DescribeMonitorDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitorDataWithOptions(request, runtime);
  }

  async describeSecurityAgentStatusWithOptions(request: DescribeSecurityAgentStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityAgentStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSecurityAgentStatus",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSecurityAgentStatusResponse>(await this.callApi(params, req, runtime), new DescribeSecurityAgentStatusResponse({}));
  }

  async describeSecurityAgentStatus(request: DescribeSecurityAgentStatusRequest): Promise<DescribeSecurityAgentStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityAgentStatusWithOptions(request, runtime);
  }

  async disableFirewallRuleWithOptions(request: DisableFirewallRuleRequest, runtime: $Util.RuntimeOptions): Promise<DisableFirewallRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableFirewallRule",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableFirewallRuleResponse>(await this.callApi(params, req, runtime), new DisableFirewallRuleResponse({}));
  }

  async disableFirewallRule(request: DisableFirewallRuleRequest): Promise<DisableFirewallRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableFirewallRuleWithOptions(request, runtime);
  }

  async enableFirewallRuleWithOptions(request: EnableFirewallRuleRequest, runtime: $Util.RuntimeOptions): Promise<EnableFirewallRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.sourceCidrIp)) {
      query["SourceCidrIp"] = request.sourceCidrIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableFirewallRule",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableFirewallRuleResponse>(await this.callApi(params, req, runtime), new EnableFirewallRuleResponse({}));
  }

  async enableFirewallRule(request: EnableFirewallRuleRequest): Promise<EnableFirewallRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableFirewallRuleWithOptions(request, runtime);
  }

  /**
    * To run commands on your simple application servers, you must install the Cloud Assistant client on your servers. You can call the [DescribeCloudAssistantStatus](~~439512~~) operation to check whether the Cloud Assistant client is installed on your simple application servers. If you have not installed the Cloud Assistant client, you can call the InstallCloudAssistant operation to install the client. Then, you can call the [RebootInstance](~~190443~~) operation to restart the servers to allow the client to take effect.
    *
    * @param tmpReq InstallCloudAssistantRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return InstallCloudAssistantResponse
   */
  async installCloudAssistantWithOptions(tmpReq: InstallCloudAssistantRequest, runtime: $Util.RuntimeOptions): Promise<InstallCloudAssistantResponse> {
    Util.validateModel(tmpReq);
    let request = new InstallCloudAssistantShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InstallCloudAssistant",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InstallCloudAssistantResponse>(await this.callApi(params, req, runtime), new InstallCloudAssistantResponse({}));
  }

  /**
    * To run commands on your simple application servers, you must install the Cloud Assistant client on your servers. You can call the [DescribeCloudAssistantStatus](~~439512~~) operation to check whether the Cloud Assistant client is installed on your simple application servers. If you have not installed the Cloud Assistant client, you can call the InstallCloudAssistant operation to install the client. Then, you can call the [RebootInstance](~~190443~~) operation to restart the servers to allow the client to take effect.
    *
    * @param request InstallCloudAssistantRequest
    * @return InstallCloudAssistantResponse
   */
  async installCloudAssistant(request: InstallCloudAssistantRequest): Promise<InstallCloudAssistantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.installCloudAssistantWithOptions(request, runtime);
  }

  async installCloudMonitorAgentWithOptions(request: InstallCloudMonitorAgentRequest, runtime: $Util.RuntimeOptions): Promise<InstallCloudMonitorAgentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InstallCloudMonitorAgent",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InstallCloudMonitorAgentResponse>(await this.callApi(params, req, runtime), new InstallCloudMonitorAgentResponse({}));
  }

  async installCloudMonitorAgent(request: InstallCloudMonitorAgentRequest): Promise<InstallCloudMonitorAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.installCloudMonitorAgentWithOptions(request, runtime);
  }

  async invokeCommandWithOptions(tmpReq: InvokeCommandRequest, runtime: $Util.RuntimeOptions): Promise<InvokeCommandResponse> {
    Util.validateModel(tmpReq);
    let request = new InvokeCommandShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!Util.isUnset(request.commandId)) {
      query["CommandId"] = request.commandId;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InvokeCommand",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InvokeCommandResponse>(await this.callApi(params, req, runtime), new InvokeCommandResponse({}));
  }

  async invokeCommand(request: InvokeCommandRequest): Promise<InvokeCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.invokeCommandWithOptions(request, runtime);
  }

  async listCustomImagesWithOptions(request: ListCustomImagesRequest, runtime: $Util.RuntimeOptions): Promise<ListCustomImagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dataSnapshotId)) {
      query["DataSnapshotId"] = request.dataSnapshotId;
    }

    if (!Util.isUnset(request.imageIds)) {
      query["ImageIds"] = request.imageIds;
    }

    if (!Util.isUnset(request.imageNames)) {
      query["ImageNames"] = request.imageNames;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.systemSnapshotId)) {
      query["SystemSnapshotId"] = request.systemSnapshotId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCustomImages",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCustomImagesResponse>(await this.callApi(params, req, runtime), new ListCustomImagesResponse({}));
  }

  async listCustomImages(request: ListCustomImagesRequest): Promise<ListCustomImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCustomImagesWithOptions(request, runtime);
  }

  /**
    * You can specify multiple request parameters such as `InstanceId` and `DiskIds`. Specified parameters have logical AND relations. Only the specified parameters are included in the filter conditions.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](~~347607~~).
    *
    * @param request ListDisksRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListDisksResponse
   */
  async listDisksWithOptions(request: ListDisksRequest, runtime: $Util.RuntimeOptions): Promise<ListDisksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.diskIds)) {
      query["DiskIds"] = request.diskIds;
    }

    if (!Util.isUnset(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDisks",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDisksResponse>(await this.callApi(params, req, runtime), new ListDisksResponse({}));
  }

  /**
    * You can specify multiple request parameters such as `InstanceId` and `DiskIds`. Specified parameters have logical AND relations. Only the specified parameters are included in the filter conditions.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limit](~~347607~~).
    *
    * @param request ListDisksRequest
    * @return ListDisksResponse
   */
  async listDisks(request: ListDisksRequest): Promise<ListDisksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDisksWithOptions(request, runtime);
  }

  /**
    * You can call the ListFirewallRules operation to query the firewall rule details of a simple application server, including the port range, firewall rule ID, and transport layer protocol.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request ListFirewallRulesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListFirewallRulesResponse
   */
  async listFirewallRulesWithOptions(request: ListFirewallRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListFirewallRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFirewallRules",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFirewallRulesResponse>(await this.callApi(params, req, runtime), new ListFirewallRulesResponse({}));
  }

  /**
    * You can call the ListFirewallRules operation to query the firewall rule details of a simple application server, including the port range, firewall rule ID, and transport layer protocol.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request ListFirewallRulesRequest
    * @return ListFirewallRulesResponse
   */
  async listFirewallRules(request: ListFirewallRulesRequest): Promise<ListFirewallRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFirewallRulesWithOptions(request, runtime);
  }

  /**
    * You can query information about images in a region, including the IDs, names, and types of the images.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request ListImagesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListImagesResponse
   */
  async listImagesWithOptions(request: ListImagesRequest, runtime: $Util.RuntimeOptions): Promise<ListImagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.imageIds)) {
      query["ImageIds"] = request.imageIds;
    }

    if (!Util.isUnset(request.imageType)) {
      query["ImageType"] = request.imageType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListImages",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListImagesResponse>(await this.callApi(params, req, runtime), new ListImagesResponse({}));
  }

  /**
    * You can query information about images in a region, including the IDs, names, and types of the images.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request ListImagesRequest
    * @return ListImagesResponse
   */
  async listImages(request: ListImagesRequest): Promise<ListImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listImagesWithOptions(request, runtime);
  }

  /**
    * If the plan of your simple application server does not meet your business requirements, you can call the ListInstancePlansModification operation to obtain a list of plans to which you can upgrade your simple application server. Then, you can call the [UpgradeInstance](~~190445~~) operation to upgrade the server.
    * > We recommend that you create snapshots for the disks of your simple application server to back up data before you upgrade the server. For more information, see [CreateSnapshot](~~190452~~).
    * For the precautions about plan upgrade, see [Upgrade a simple application server](~~61433~~).
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request ListInstancePlansModificationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListInstancePlansModificationResponse
   */
  async listInstancePlansModificationWithOptions(request: ListInstancePlansModificationRequest, runtime: $Util.RuntimeOptions): Promise<ListInstancePlansModificationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstancePlansModification",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstancePlansModificationResponse>(await this.callApi(params, req, runtime), new ListInstancePlansModificationResponse({}));
  }

  /**
    * If the plan of your simple application server does not meet your business requirements, you can call the ListInstancePlansModification operation to obtain a list of plans to which you can upgrade your simple application server. Then, you can call the [UpgradeInstance](~~190445~~) operation to upgrade the server.
    * > We recommend that you create snapshots for the disks of your simple application server to back up data before you upgrade the server. For more information, see [CreateSnapshot](~~190452~~).
    * For the precautions about plan upgrade, see [Upgrade a simple application server](~~61433~~).
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request ListInstancePlansModificationRequest
    * @return ListInstancePlansModificationResponse
   */
  async listInstancePlansModification(request: ListInstancePlansModificationRequest): Promise<ListInstancePlansModificationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstancePlansModificationWithOptions(request, runtime);
  }

  async listInstanceStatusWithOptions(request: ListInstanceStatusRequest, runtime: $Util.RuntimeOptions): Promise<ListInstanceStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstanceStatus",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceStatusResponse>(await this.callApi(params, req, runtime), new ListInstanceStatusResponse({}));
  }

  async listInstanceStatus(request: ListInstanceStatusRequest): Promise<ListInstanceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstanceStatusWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query the details of simple application servers in a specified region, including the names, public IP addresses, internal IP addresses, creation time, and expiration time of the servers.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request ListInstancesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListInstancesResponse
   */
  async listInstancesWithOptions(request: ListInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.publicIpAddresses)) {
      query["PublicIpAddresses"] = request.publicIpAddresses;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstances",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstancesResponse>(await this.callApi(params, req, runtime), new ListInstancesResponse({}));
  }

  /**
    * You can call this operation to query the details of simple application servers in a specified region, including the names, public IP addresses, internal IP addresses, creation time, and expiration time of the servers.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request ListInstancesRequest
    * @return ListInstancesResponse
   */
  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  /**
    * You can query the details of data transfer plans of simple application servers, including the data transfer quota, used amount and unused amount of the data transfer quota, and excess data transfers beyond the quota in the current month.
    * Simple Application Server provides data transfer quotas in plans. Plan prices include prices of data transfer quotas. You are charged for data transfers that exceed the quotas. Take note of the following items:
    * *   Only outbound data transfers of simple application servers over the Internet are calculated. Outbound data transfers include the data transfer quota and the excess data transfers beyond the quota. Inbound data transfers of simple application servers over the Internet are not calculated.
    * *   Outbound data transfers from simple application servers to other Alibaba Cloud services over the Internet first consume data transfer quotas. If the quotas are exhausted, you are charged for excess data transfers.
    * *   You are not charged for data transfers between simple application servers within the same virtual private cloud (VPC).
    * For more information, see [Quotas and billing of data transfers](~~86281~~).
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request ListInstancesTrafficPackagesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListInstancesTrafficPackagesResponse
   */
  async listInstancesTrafficPackagesWithOptions(request: ListInstancesTrafficPackagesRequest, runtime: $Util.RuntimeOptions): Promise<ListInstancesTrafficPackagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acsProduct)) {
      query["AcsProduct"] = request.acsProduct;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstancesTrafficPackages",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstancesTrafficPackagesResponse>(await this.callApi(params, req, runtime), new ListInstancesTrafficPackagesResponse({}));
  }

  /**
    * You can query the details of data transfer plans of simple application servers, including the data transfer quota, used amount and unused amount of the data transfer quota, and excess data transfers beyond the quota in the current month.
    * Simple Application Server provides data transfer quotas in plans. Plan prices include prices of data transfer quotas. You are charged for data transfers that exceed the quotas. Take note of the following items:
    * *   Only outbound data transfers of simple application servers over the Internet are calculated. Outbound data transfers include the data transfer quota and the excess data transfers beyond the quota. Inbound data transfers of simple application servers over the Internet are not calculated.
    * *   Outbound data transfers from simple application servers to other Alibaba Cloud services over the Internet first consume data transfer quotas. If the quotas are exhausted, you are charged for excess data transfers.
    * *   You are not charged for data transfers between simple application servers within the same virtual private cloud (VPC).
    * For more information, see [Quotas and billing of data transfers](~~86281~~).
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request ListInstancesTrafficPackagesRequest
    * @return ListInstancesTrafficPackagesResponse
   */
  async listInstancesTrafficPackages(request: ListInstancesTrafficPackagesRequest): Promise<ListInstancesTrafficPackagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstancesTrafficPackagesWithOptions(request, runtime);
  }

  /**
    * You can query the details of all plans provided by Simple Application Server in a region, including the IDs, prices, disk sizes, and disk categories of the plans.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request ListPlansRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListPlansResponse
   */
  async listPlansWithOptions(request: ListPlansRequest, runtime: $Util.RuntimeOptions): Promise<ListPlansResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPlans",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPlansResponse>(await this.callApi(params, req, runtime), new ListPlansResponse({}));
  }

  /**
    * You can query the details of all plans provided by Simple Application Server in a region, including the IDs, prices, disk sizes, and disk categories of the plans.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request ListPlansRequest
    * @return ListPlansResponse
   */
  async listPlans(request: ListPlansRequest): Promise<ListPlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPlansWithOptions(request, runtime);
  }

  /**
    * The query results include all the Alibaba Cloud regions where Simple Application Server is supported on the international site (alibabacloud.com) and the China site (aliyun.com).
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request ListRegionsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListRegionsResponse
   */
  async listRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListRegions",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRegionsResponse>(await this.callApi(params, req, runtime), new ListRegionsResponse({}));
  }

  /**
    * The query results include all the Alibaba Cloud regions where Simple Application Server is supported on the international site (alibabacloud.com) and the China site (aliyun.com).
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @return ListRegionsResponse
   */
  async listRegions(): Promise<ListRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRegionsWithOptions(runtime);
  }

  /**
    * You can specify multiple request parameters such as `InstanceId`, `DiskId`, and `SnapshotIds` to query snapshots. Specified parameters have logical AND relations. Only the specified parameters are included in the filter conditions.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request ListSnapshotsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListSnapshotsResponse
   */
  async listSnapshotsWithOptions(request: ListSnapshotsRequest, runtime: $Util.RuntimeOptions): Promise<ListSnapshotsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acsProduct)) {
      query["AcsProduct"] = request.acsProduct;
    }

    if (!Util.isUnset(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.snapshotIds)) {
      query["SnapshotIds"] = request.snapshotIds;
    }

    if (!Util.isUnset(request.sourceDiskType)) {
      query["SourceDiskType"] = request.sourceDiskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSnapshots",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSnapshotsResponse>(await this.callApi(params, req, runtime), new ListSnapshotsResponse({}));
  }

  /**
    * You can specify multiple request parameters such as `InstanceId`, `DiskId`, and `SnapshotIds` to query snapshots. Specified parameters have logical AND relations. Only the specified parameters are included in the filter conditions.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request ListSnapshotsRequest
    * @return ListSnapshotsResponse
   */
  async listSnapshots(request: ListSnapshotsRequest): Promise<ListSnapshotsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSnapshotsWithOptions(request, runtime);
  }

  /**
    * ##
    * After you create a simple application server, you can log on to the simple application server to build environments and applications on the server.
    *
    * @param request LoginInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return LoginInstanceResponse
   */
  async loginInstanceWithOptions(request: LoginInstanceRequest, runtime: $Util.RuntimeOptions): Promise<LoginInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "LoginInstance",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LoginInstanceResponse>(await this.callApi(params, req, runtime), new LoginInstanceResponse({}));
  }

  /**
    * ##
    * After you create a simple application server, you can log on to the simple application server to build environments and applications on the server.
    *
    * @param request LoginInstanceRequest
    * @return LoginInstanceResponse
   */
  async loginInstance(request: LoginInstanceRequest): Promise<LoginInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.loginInstanceWithOptions(request, runtime);
  }

  /**
    * You can call this operation to modify the description of a Simple Database Service instance.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request ModifyDatabaseInstanceDescriptionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyDatabaseInstanceDescriptionResponse
   */
  async modifyDatabaseInstanceDescriptionWithOptions(request: ModifyDatabaseInstanceDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDatabaseInstanceDescriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.databaseInstanceDescription)) {
      query["DatabaseInstanceDescription"] = request.databaseInstanceDescription;
    }

    if (!Util.isUnset(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDatabaseInstanceDescription",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDatabaseInstanceDescriptionResponse>(await this.callApi(params, req, runtime), new ModifyDatabaseInstanceDescriptionResponse({}));
  }

  /**
    * You can call this operation to modify the description of a Simple Database Service instance.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request ModifyDatabaseInstanceDescriptionRequest
    * @return ModifyDatabaseInstanceDescriptionResponse
   */
  async modifyDatabaseInstanceDescription(request: ModifyDatabaseInstanceDescriptionRequest): Promise<ModifyDatabaseInstanceDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDatabaseInstanceDescriptionWithOptions(request, runtime);
  }

  /**
    * After you create a Simple Database Service instance, you can view the parameters of the instance or modify the parameters of the instance based on your business requirements.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request ModifyDatabaseInstanceParameterRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyDatabaseInstanceParameterResponse
   */
  async modifyDatabaseInstanceParameterWithOptions(request: ModifyDatabaseInstanceParameterRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDatabaseInstanceParameterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!Util.isUnset(request.forceRestart)) {
      query["ForceRestart"] = request.forceRestart;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDatabaseInstanceParameter",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDatabaseInstanceParameterResponse>(await this.callApi(params, req, runtime), new ModifyDatabaseInstanceParameterResponse({}));
  }

  /**
    * After you create a Simple Database Service instance, you can view the parameters of the instance or modify the parameters of the instance based on your business requirements.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request ModifyDatabaseInstanceParameterRequest
    * @return ModifyDatabaseInstanceParameterResponse
   */
  async modifyDatabaseInstanceParameter(request: ModifyDatabaseInstanceParameterRequest): Promise<ModifyDatabaseInstanceParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDatabaseInstanceParameterWithOptions(request, runtime);
  }

  async modifyFirewallRuleWithOptions(request: ModifyFirewallRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFirewallRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleProtocol)) {
      query["RuleProtocol"] = request.ruleProtocol;
    }

    if (!Util.isUnset(request.sourceCidrIp)) {
      query["SourceCidrIp"] = request.sourceCidrIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyFirewallRule",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyFirewallRuleResponse>(await this.callApi(params, req, runtime), new ModifyFirewallRuleResponse({}));
  }

  async modifyFirewallRule(request: ModifyFirewallRuleRequest): Promise<ModifyFirewallRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFirewallRuleWithOptions(request, runtime);
  }

  /**
    * You can share a custom image with ECS. If the configurations of your simple application server cannot meet your business requirements, or you want to use ECS instances to deploy your business, you can share your custom image with ECS to transfer your business from Simple Application Server to ECS.
    * > The shared image in ECS resides in the same region as the custom image in Simple Application Server.
    * You can unshare a custom image based on your business requirements or when you want to delete the custom image. Take note of the following items:
    * *   After you unshare a custom image, you cannot query or use the custom image in the ECS console or by calling ECS API operations.
    * *   After you unshare a custom image, you cannot re-initialize the disks of the ECS instances that were created based on the shared image.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request ModifyImageShareStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyImageShareStatusResponse
   */
  async modifyImageShareStatusWithOptions(request: ModifyImageShareStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyImageShareStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.operation)) {
      query["Operation"] = request.operation;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyImageShareStatus",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyImageShareStatusResponse>(await this.callApi(params, req, runtime), new ModifyImageShareStatusResponse({}));
  }

  /**
    * You can share a custom image with ECS. If the configurations of your simple application server cannot meet your business requirements, or you want to use ECS instances to deploy your business, you can share your custom image with ECS to transfer your business from Simple Application Server to ECS.
    * > The shared image in ECS resides in the same region as the custom image in Simple Application Server.
    * You can unshare a custom image based on your business requirements or when you want to delete the custom image. Take note of the following items:
    * *   After you unshare a custom image, you cannot query or use the custom image in the ECS console or by calling ECS API operations.
    * *   After you unshare a custom image, you cannot re-initialize the disks of the ECS instances that were created based on the shared image.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request ModifyImageShareStatusRequest
    * @return ModifyImageShareStatusResponse
   */
  async modifyImageShareStatus(request: ModifyImageShareStatusRequest): Promise<ModifyImageShareStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyImageShareStatusWithOptions(request, runtime);
  }

  async modifyInstanceVncPasswordWithOptions(request: ModifyInstanceVncPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceVncPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.vncPassword)) {
      query["VncPassword"] = request.vncPassword;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyInstanceVncPassword",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstanceVncPasswordResponse>(await this.callApi(params, req, runtime), new ModifyInstanceVncPasswordResponse({}));
  }

  async modifyInstanceVncPassword(request: ModifyInstanceVncPasswordRequest): Promise<ModifyInstanceVncPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceVncPasswordWithOptions(request, runtime);
  }

  /**
    * *   Only simple application servers that are in the Running state can be restarted.
    * *   After you restart a simple application server, it enters the Starting state.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request RebootInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RebootInstanceResponse
   */
  async rebootInstanceWithOptions(request: RebootInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RebootInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RebootInstance",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RebootInstanceResponse>(await this.callApi(params, req, runtime), new RebootInstanceResponse({}));
  }

  /**
    * *   Only simple application servers that are in the Running state can be restarted.
    * *   After you restart a simple application server, it enters the Starting state.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request RebootInstanceRequest
    * @return RebootInstanceResponse
   */
  async rebootInstance(request: RebootInstanceRequest): Promise<RebootInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebootInstanceWithOptions(request, runtime);
  }

  async rebootInstancesWithOptions(request: RebootInstancesRequest, runtime: $Util.RuntimeOptions): Promise<RebootInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.forceReboot)) {
      query["ForceReboot"] = request.forceReboot;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RebootInstances",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RebootInstancesResponse>(await this.callApi(params, req, runtime), new RebootInstancesResponse({}));
  }

  async rebootInstances(request: RebootInstancesRequest): Promise<RebootInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebootInstancesWithOptions(request, runtime);
  }

  /**
    * If you no longer need to use a public endpoint to access a Simple Database Service instance, you can release the public endpoint.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request ReleasePublicConnectionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ReleasePublicConnectionResponse
   */
  async releasePublicConnectionWithOptions(request: ReleasePublicConnectionRequest, runtime: $Util.RuntimeOptions): Promise<ReleasePublicConnectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleasePublicConnection",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleasePublicConnectionResponse>(await this.callApi(params, req, runtime), new ReleasePublicConnectionResponse({}));
  }

  /**
    * If you no longer need to use a public endpoint to access a Simple Database Service instance, you can release the public endpoint.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request ReleasePublicConnectionRequest
    * @return ReleasePublicConnectionResponse
   */
  async releasePublicConnection(request: ReleasePublicConnectionRequest): Promise<ReleasePublicConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releasePublicConnectionWithOptions(request, runtime);
  }

  /**
    * *   Before you call this operation, we recommend that you understand the billing of Simple Application Server. For more information, see [Billable items](~~58623~~).
    * *   When you call this operation to renew a server, make sure that the balance in your account is sufficient. If the balance in your account is insufficient, the server cannot be renewed.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request RenewInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RenewInstanceResponse
   */
  async renewInstanceWithOptions(request: RenewInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RenewInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenewInstance",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenewInstanceResponse>(await this.callApi(params, req, runtime), new RenewInstanceResponse({}));
  }

  /**
    * *   Before you call this operation, we recommend that you understand the billing of Simple Application Server. For more information, see [Billable items](~~58623~~).
    * *   When you call this operation to renew a server, make sure that the balance in your account is sufficient. If the balance in your account is insufficient, the server cannot be renewed.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request RenewInstanceRequest
    * @return RenewInstanceResponse
   */
  async renewInstance(request: RenewInstanceRequest): Promise<RenewInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewInstanceWithOptions(request, runtime);
  }

  /**
    * If the password of your Simple Database Service instance is not strong, you can call this operation to change the password of the administrator account of the instance. To ensure security of the instance, we recommend that you regularly change the password of the instance.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request ResetDatabaseAccountPasswordRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ResetDatabaseAccountPasswordResponse
   */
  async resetDatabaseAccountPasswordWithOptions(request: ResetDatabaseAccountPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ResetDatabaseAccountPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetDatabaseAccountPassword",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetDatabaseAccountPasswordResponse>(await this.callApi(params, req, runtime), new ResetDatabaseAccountPasswordResponse({}));
  }

  /**
    * If the password of your Simple Database Service instance is not strong, you can call this operation to change the password of the administrator account of the instance. To ensure security of the instance, we recommend that you regularly change the password of the instance.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request ResetDatabaseAccountPasswordRequest
    * @return ResetDatabaseAccountPasswordResponse
   */
  async resetDatabaseAccountPassword(request: ResetDatabaseAccountPasswordRequest): Promise<ResetDatabaseAccountPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetDatabaseAccountPasswordWithOptions(request, runtime);
  }

  /**
    * *   You can call this operation to roll back a disk only if the associated simple application server is in the Stopped state.
    * *   After a disk is rolled back, all data changes that are made from when the snapshot was created to when the disk is rolled back are lost. Back up disk data based on your needs before you roll back the disk.
    * ### Precautions
    * After you reset a simple application server, the disk data on the server is deleted. Snapshots created before the resetting operation are retained but cannot be used to roll back the disks of the server.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request ResetDiskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ResetDiskResponse
   */
  async resetDiskWithOptions(request: ResetDiskRequest, runtime: $Util.RuntimeOptions): Promise<ResetDiskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetDisk",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetDiskResponse>(await this.callApi(params, req, runtime), new ResetDiskResponse({}));
  }

  /**
    * *   You can call this operation to roll back a disk only if the associated simple application server is in the Stopped state.
    * *   After a disk is rolled back, all data changes that are made from when the snapshot was created to when the disk is rolled back are lost. Back up disk data based on your needs before you roll back the disk.
    * ### Precautions
    * After you reset a simple application server, the disk data on the server is deleted. Snapshots created before the resetting operation are retained but cannot be used to roll back the disks of the server.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request ResetDiskRequest
    * @return ResetDiskResponse
   */
  async resetDisk(request: ResetDiskRequest): Promise<ResetDiskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetDiskWithOptions(request, runtime);
  }

  /**
    * You can reset a simple application server to re-install its application system or OS and re-initialize the server. You can reset a simple application server by resetting the current system or replacing the image.
    * You can use one of the following methods to reset a simple application server:
    * *   Reset the current system. You can re-install the operating system without replacing the image.
    * *   Replace the image. You can select an Alibaba Cloud image or a custom image that is different from the existing image of the server to reinstall the OS of the server.
    * ### Precautions
    * *   After you reset a simple application server, the disk data on the server is cleared. Back up the data as needed.
    * *   After you reset a simple application server, the monitoring operations that are performed on the server may fail. In this case, you can use one of the following methods to install the CloudMonitor agent on the server:
    *     *   Connect to the server: For more information, see [Manually install the CloudMonitor agent for C++ on an ECS instance](~~183482~~).
    *     *   Use Command Assistant: For more information, see [Use Command Assistant](~~438681~~). You can obtain the command that can be used to install CloudMonitor from the "Common commands" section of the [Use Command Assistant](~~438681~~) topic.
    * ### Limits
    * *   Snapshots that are created before a server is reset are retained, but the snapshots cannot be used to roll back the disks of the server.
    * *   You cannot reset simple application servers that were created based on custom images that contain data of data disks.
    * *   Before you reset a simple application server by replacing the existing image with a custom image, take note of the following items:
    *     *   The custom image must reside in the same region as the current server.
    *     *   The custom image cannot be created based on the current server. If you want to recover the data on the server, you can use a snapshot of the server to roll back the disks of the server.
    *     *   If your simple application server resides outside the Chinese mainland, you cannot switch the OS of the server between Windows Server and Linux. You cannot use a Windows Server custom image to reset a Linux simple application server. You also cannot use a Linux custom image to reset a Windows Server simple application server. You can switch the OSs of simple application servers only between Windows Server OSs or between Linux distributions.
    *     *   The following limits apply to the disks attached to the simple application server:
    *         *   If the custom image contains a system disk and a data disk but only a system disk is attached to the simple application server and no data disk is attached, you cannot use the custom image to reset the simple application server.
    *         *   If the system disk size of the custom image is greater than the system disk size of the simple application server, you cannot directly use the custom image to reset the simple application server.
    *         *   Only if the system disk size of the simple application server is greater than or equal to the system disk size of the custom image, you can use the custom image to reset the simple application server. To increase the system disk size of your simple application server, you can upgrade the server. For more information, see Upgrade a simple application server.
    *         *   If the data disk size of the custom image is greater than the data disk size of the simple application server, you cannot use the custom image to reset the simple application server.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request ResetSystemRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ResetSystemResponse
   */
  async resetSystemWithOptions(request: ResetSystemRequest, runtime: $Util.RuntimeOptions): Promise<ResetSystemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetSystem",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetSystemResponse>(await this.callApi(params, req, runtime), new ResetSystemResponse({}));
  }

  /**
    * You can reset a simple application server to re-install its application system or OS and re-initialize the server. You can reset a simple application server by resetting the current system or replacing the image.
    * You can use one of the following methods to reset a simple application server:
    * *   Reset the current system. You can re-install the operating system without replacing the image.
    * *   Replace the image. You can select an Alibaba Cloud image or a custom image that is different from the existing image of the server to reinstall the OS of the server.
    * ### Precautions
    * *   After you reset a simple application server, the disk data on the server is cleared. Back up the data as needed.
    * *   After you reset a simple application server, the monitoring operations that are performed on the server may fail. In this case, you can use one of the following methods to install the CloudMonitor agent on the server:
    *     *   Connect to the server: For more information, see [Manually install the CloudMonitor agent for C++ on an ECS instance](~~183482~~).
    *     *   Use Command Assistant: For more information, see [Use Command Assistant](~~438681~~). You can obtain the command that can be used to install CloudMonitor from the "Common commands" section of the [Use Command Assistant](~~438681~~) topic.
    * ### Limits
    * *   Snapshots that are created before a server is reset are retained, but the snapshots cannot be used to roll back the disks of the server.
    * *   You cannot reset simple application servers that were created based on custom images that contain data of data disks.
    * *   Before you reset a simple application server by replacing the existing image with a custom image, take note of the following items:
    *     *   The custom image must reside in the same region as the current server.
    *     *   The custom image cannot be created based on the current server. If you want to recover the data on the server, you can use a snapshot of the server to roll back the disks of the server.
    *     *   If your simple application server resides outside the Chinese mainland, you cannot switch the OS of the server between Windows Server and Linux. You cannot use a Windows Server custom image to reset a Linux simple application server. You also cannot use a Linux custom image to reset a Windows Server simple application server. You can switch the OSs of simple application servers only between Windows Server OSs or between Linux distributions.
    *     *   The following limits apply to the disks attached to the simple application server:
    *         *   If the custom image contains a system disk and a data disk but only a system disk is attached to the simple application server and no data disk is attached, you cannot use the custom image to reset the simple application server.
    *         *   If the system disk size of the custom image is greater than the system disk size of the simple application server, you cannot directly use the custom image to reset the simple application server.
    *         *   Only if the system disk size of the simple application server is greater than or equal to the system disk size of the custom image, you can use the custom image to reset the simple application server. To increase the system disk size of your simple application server, you can upgrade the server. For more information, see Upgrade a simple application server.
    *         *   If the data disk size of the custom image is greater than the data disk size of the simple application server, you cannot use the custom image to reset the simple application server.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request ResetSystemRequest
    * @return ResetSystemResponse
   */
  async resetSystem(request: ResetSystemRequest): Promise<ResetSystemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetSystemWithOptions(request, runtime);
  }

  /**
    * You can call this operation to restart a Simple Database Service instance that is in the Running state.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request RestartDatabaseInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RestartDatabaseInstanceResponse
   */
  async restartDatabaseInstanceWithOptions(request: RestartDatabaseInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RestartDatabaseInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestartDatabaseInstance",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestartDatabaseInstanceResponse>(await this.callApi(params, req, runtime), new RestartDatabaseInstanceResponse({}));
  }

  /**
    * You can call this operation to restart a Simple Database Service instance that is in the Running state.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request RestartDatabaseInstanceRequest
    * @return RestartDatabaseInstanceResponse
   */
  async restartDatabaseInstance(request: RestartDatabaseInstanceRequest): Promise<RestartDatabaseInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartDatabaseInstanceWithOptions(request, runtime);
  }

  /**
    * Command Assistant is an automated O\\&M tool for Simple Application Server. You can maintain simple application servers by running shell, PowerShell, and batch commands in the Simple Application Server console without remotely logging on to the servers.
    * Before you use Command Assistant, take note of the following items:
    * *   The simple application server must be in the Running state.
    * *   The Cloud Assistant client is installed on the server. By default, the Cloud Assistant client is installed on simple application servers. If you have manually uninstalled the client, you must reinstall it. For more information, see [Install the Cloud Assistant Agent](~~64921~~).
    *
    * @param tmpReq RunCommandRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RunCommandResponse
   */
  async runCommandWithOptions(tmpReq: RunCommandRequest, runtime: $Util.RuntimeOptions): Promise<RunCommandResponse> {
    Util.validateModel(tmpReq);
    let request = new RunCommandShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!Util.isUnset(request.commandContent)) {
      query["CommandContent"] = request.commandContent;
    }

    if (!Util.isUnset(request.enableParameter)) {
      query["EnableParameter"] = request.enableParameter;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.windowsPasswordName)) {
      query["WindowsPasswordName"] = request.windowsPasswordName;
    }

    if (!Util.isUnset(request.workingDir)) {
      query["WorkingDir"] = request.workingDir;
    }

    if (!Util.isUnset(request.workingUser)) {
      query["WorkingUser"] = request.workingUser;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RunCommand",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunCommandResponse>(await this.callApi(params, req, runtime), new RunCommandResponse({}));
  }

  /**
    * Command Assistant is an automated O\\&M tool for Simple Application Server. You can maintain simple application servers by running shell, PowerShell, and batch commands in the Simple Application Server console without remotely logging on to the servers.
    * Before you use Command Assistant, take note of the following items:
    * *   The simple application server must be in the Running state.
    * *   The Cloud Assistant client is installed on the server. By default, the Cloud Assistant client is installed on simple application servers. If you have manually uninstalled the client, you must reinstall it. For more information, see [Install the Cloud Assistant Agent](~~64921~~).
    *
    * @param request RunCommandRequest
    * @return RunCommandResponse
   */
  async runCommand(request: RunCommandRequest): Promise<RunCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runCommandWithOptions(request, runtime);
  }

  /**
    * You can call this operation to start a Simple Database Service instance that is in the Stopped state.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request StartDatabaseInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StartDatabaseInstanceResponse
   */
  async startDatabaseInstanceWithOptions(request: StartDatabaseInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StartDatabaseInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartDatabaseInstance",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartDatabaseInstanceResponse>(await this.callApi(params, req, runtime), new StartDatabaseInstanceResponse({}));
  }

  /**
    * You can call this operation to start a Simple Database Service instance that is in the Stopped state.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request StartDatabaseInstanceRequest
    * @return StartDatabaseInstanceResponse
   */
  async startDatabaseInstance(request: StartDatabaseInstanceRequest): Promise<StartDatabaseInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDatabaseInstanceWithOptions(request, runtime);
  }

  /**
    * You can call this operation to start a simple application server that is in the Stopped state.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request StartInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StartInstanceResponse
   */
  async startInstanceWithOptions(request: StartInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StartInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartInstance",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartInstanceResponse>(await this.callApi(params, req, runtime), new StartInstanceResponse({}));
  }

  /**
    * You can call this operation to start a simple application server that is in the Stopped state.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request StartInstanceRequest
    * @return StartInstanceResponse
   */
  async startInstance(request: StartInstanceRequest): Promise<StartInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startInstanceWithOptions(request, runtime);
  }

  async startInstancesWithOptions(request: StartInstancesRequest, runtime: $Util.RuntimeOptions): Promise<StartInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartInstances",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartInstancesResponse>(await this.callApi(params, req, runtime), new StartInstancesResponse({}));
  }

  async startInstances(request: StartInstancesRequest): Promise<StartInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startInstancesWithOptions(request, runtime);
  }

  async startTerminalSessionWithOptions(request: StartTerminalSessionRequest, runtime: $Util.RuntimeOptions): Promise<StartTerminalSessionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartTerminalSession",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartTerminalSessionResponse>(await this.callApi(params, req, runtime), new StartTerminalSessionResponse({}));
  }

  async startTerminalSession(request: StartTerminalSessionRequest): Promise<StartTerminalSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startTerminalSessionWithOptions(request, runtime);
  }

  /**
    * You can call this operation to stop a Simple Database Service instance that is in the Running state. After the instance is stopped, you cannot log on to or access the instance.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request StopDatabaseInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StopDatabaseInstanceResponse
   */
  async stopDatabaseInstanceWithOptions(request: StopDatabaseInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StopDatabaseInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopDatabaseInstance",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopDatabaseInstanceResponse>(await this.callApi(params, req, runtime), new StopDatabaseInstanceResponse({}));
  }

  /**
    * You can call this operation to stop a Simple Database Service instance that is in the Running state. After the instance is stopped, you cannot log on to or access the instance.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request StopDatabaseInstanceRequest
    * @return StopDatabaseInstanceResponse
   */
  async stopDatabaseInstance(request: StopDatabaseInstanceRequest): Promise<StopDatabaseInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDatabaseInstanceWithOptions(request, runtime);
  }

  /**
    * You can stop a simple application server that you do not use for the time being.
    * >  Stopping a simple application server may interrupt your business. We recommend that you perform the stop operation during off-peak hours.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request StopInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StopInstanceResponse
   */
  async stopInstanceWithOptions(request: StopInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StopInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopInstance",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopInstanceResponse>(await this.callApi(params, req, runtime), new StopInstanceResponse({}));
  }

  /**
    * You can stop a simple application server that you do not use for the time being.
    * >  Stopping a simple application server may interrupt your business. We recommend that you perform the stop operation during off-peak hours.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request StopInstanceRequest
    * @return StopInstanceResponse
   */
  async stopInstance(request: StopInstanceRequest): Promise<StopInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopInstanceWithOptions(request, runtime);
  }

  async stopInstancesWithOptions(request: StopInstancesRequest, runtime: $Util.RuntimeOptions): Promise<StopInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.forceStop)) {
      query["ForceStop"] = request.forceStop;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopInstances",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopInstancesResponse>(await this.callApi(params, req, runtime), new StopInstancesResponse({}));
  }

  async stopInstances(request: StopInstancesRequest): Promise<StopInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopInstancesWithOptions(request, runtime);
  }

  async updateCommandAttributeWithOptions(request: UpdateCommandAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCommandAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.commandId)) {
      query["CommandId"] = request.commandId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!Util.isUnset(request.workingDir)) {
      query["WorkingDir"] = request.workingDir;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCommandAttribute",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCommandAttributeResponse>(await this.callApi(params, req, runtime), new UpdateCommandAttributeResponse({}));
  }

  async updateCommandAttribute(request: UpdateCommandAttributeRequest): Promise<UpdateCommandAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCommandAttributeWithOptions(request, runtime);
  }

  async updateDiskAttributeWithOptions(request: UpdateDiskAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDiskAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDiskAttribute",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDiskAttributeResponse>(await this.callApi(params, req, runtime), new UpdateDiskAttributeResponse({}));
  }

  async updateDiskAttribute(request: UpdateDiskAttributeRequest): Promise<UpdateDiskAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDiskAttributeWithOptions(request, runtime);
  }

  /**
    * ## Usage notes
    * After you change the password of a simple application server, you must restart the server by calling the [RebootInstance](~~190443~~) operation to allow the new password to take effect.
    * ### QPS limits
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request UpdateInstanceAttributeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateInstanceAttributeResponse
   */
  async updateInstanceAttributeWithOptions(request: UpdateInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateInstanceAttribute",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateInstanceAttributeResponse>(await this.callApi(params, req, runtime), new UpdateInstanceAttributeResponse({}));
  }

  /**
    * ## Usage notes
    * After you change the password of a simple application server, you must restart the server by calling the [RebootInstance](~~190443~~) operation to allow the new password to take effect.
    * ### QPS limits
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request UpdateInstanceAttributeRequest
    * @return UpdateInstanceAttributeResponse
   */
  async updateInstanceAttribute(request: UpdateInstanceAttributeRequest): Promise<UpdateInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateInstanceAttributeWithOptions(request, runtime);
  }

  async updateSnapshotAttributeWithOptions(request: UpdateSnapshotAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSnapshotAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSnapshotAttribute",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSnapshotAttributeResponse>(await this.callApi(params, req, runtime), new UpdateSnapshotAttributeResponse({}));
  }

  async updateSnapshotAttribute(request: UpdateSnapshotAttributeRequest): Promise<UpdateSnapshotAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSnapshotAttributeWithOptions(request, runtime);
  }

  /**
    * *   The plan of a simple application server cannot be downgraded, but can only be upgraded. For more information about plans, see [Billable items](~~58623~~).
    * *   When you call this operation to upgrade a server, make sure that the balance in your account is sufficient. If the balance in your account is insufficient, the server cannot be upgraded.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request UpgradeInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpgradeInstanceResponse
   */
  async upgradeInstanceWithOptions(request: UpgradeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeInstance",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeInstanceResponse>(await this.callApi(params, req, runtime), new UpgradeInstanceResponse({}));
  }

  /**
    * *   The plan of a simple application server cannot be downgraded, but can only be upgraded. For more information about plans, see [Billable items](~~58623~~).
    * *   When you call this operation to upgrade a server, make sure that the balance in your account is sufficient. If the balance in your account is insufficient, the server cannot be upgraded.
    * ### QPS limit
    * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](~~347607~~).
    *
    * @param request UpgradeInstanceRequest
    * @return UpgradeInstanceResponse
   */
  async upgradeInstance(request: UpgradeInstanceRequest): Promise<UpgradeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeInstanceWithOptions(request, runtime);
  }

  async uploadInstanceKeyPairWithOptions(request: UploadInstanceKeyPairRequest, runtime: $Util.RuntimeOptions): Promise<UploadInstanceKeyPairResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!Util.isUnset(request.publicKey)) {
      query["PublicKey"] = request.publicKey;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadInstanceKeyPair",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadInstanceKeyPairResponse>(await this.callApi(params, req, runtime), new UploadInstanceKeyPairResponse({}));
  }

  async uploadInstanceKeyPair(request: UploadInstanceKeyPairRequest): Promise<UploadInstanceKeyPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadInstanceKeyPairWithOptions(request, runtime);
  }

}
