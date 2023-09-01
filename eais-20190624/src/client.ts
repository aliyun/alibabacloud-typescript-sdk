// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AttachEaiRequest extends $tea.Model {
  clientInstanceId?: string;
  elasticAcceleratedInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInstanceId: 'ClientInstanceId',
      elasticAcceleratedInstanceId: 'ElasticAcceleratedInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInstanceId: 'string',
      elasticAcceleratedInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachEaiResponseBody extends $tea.Model {
  clientInstanceId?: string;
  elasticAcceleratedInstanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInstanceId: 'ClientInstanceId',
      elasticAcceleratedInstanceId: 'ElasticAcceleratedInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInstanceId: 'string',
      elasticAcceleratedInstanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachEaiResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AttachEaiResponseBody;
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
      body: AttachEaiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachEaisEiRequest extends $tea.Model {
  clientInstanceId?: string;
  eiInstanceId?: string;
  eiInstanceType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInstanceId: 'ClientInstanceId',
      eiInstanceId: 'EiInstanceId',
      eiInstanceType: 'EiInstanceType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInstanceId: 'string',
      eiInstanceId: 'string',
      eiInstanceType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachEaisEiResponseBody extends $tea.Model {
  clientInstanceId?: string;
  eiInstanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInstanceId: 'ClientInstanceId',
      eiInstanceId: 'EiInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInstanceId: 'string',
      eiInstanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachEaisEiResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AttachEaisEiResponseBody;
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
      body: AttachEaisEiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupRequest extends $tea.Model {
  resourceGroupId?: string;
  resourceId?: string;
  resourceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceRegionId: 'ResourceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $tea.Model {
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

export class ChangeResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ChangeResourceGroupResponseBody;
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
      body: ChangeResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiRequest extends $tea.Model {
  clientToken?: string;
  image?: string;
  instanceName?: string;
  instanceType?: string;
  regionId?: string;
  resourceGroupId?: string;
  securityGroupId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      image: 'Image',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      image: 'string',
      instanceName: 'string',
      instanceType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiResponseBody extends $tea.Model {
  elasticAcceleratedInstanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticAcceleratedInstanceId: 'ElasticAcceleratedInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticAcceleratedInstanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateEaiResponseBody;
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
      body: CreateEaiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiAllRequest extends $tea.Model {
  clientImageId?: string;
  clientInstanceName?: string;
  clientInstanceType?: string;
  clientInternetMaxBandwidthIn?: number;
  clientInternetMaxBandwidthOut?: number;
  clientPassword?: string;
  clientSecurityGroupId?: string;
  clientSystemDiskCategory?: string;
  clientSystemDiskSize?: number;
  clientToken?: string;
  clientVSwitchId?: string;
  clientZoneId?: string;
  eaiInstanceType?: string;
  instanceName?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientImageId: 'ClientImageId',
      clientInstanceName: 'ClientInstanceName',
      clientInstanceType: 'ClientInstanceType',
      clientInternetMaxBandwidthIn: 'ClientInternetMaxBandwidthIn',
      clientInternetMaxBandwidthOut: 'ClientInternetMaxBandwidthOut',
      clientPassword: 'ClientPassword',
      clientSecurityGroupId: 'ClientSecurityGroupId',
      clientSystemDiskCategory: 'ClientSystemDiskCategory',
      clientSystemDiskSize: 'ClientSystemDiskSize',
      clientToken: 'ClientToken',
      clientVSwitchId: 'ClientVSwitchId',
      clientZoneId: 'ClientZoneId',
      eaiInstanceType: 'EaiInstanceType',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientImageId: 'string',
      clientInstanceName: 'string',
      clientInstanceType: 'string',
      clientInternetMaxBandwidthIn: 'number',
      clientInternetMaxBandwidthOut: 'number',
      clientPassword: 'string',
      clientSecurityGroupId: 'string',
      clientSystemDiskCategory: 'string',
      clientSystemDiskSize: 'number',
      clientToken: 'string',
      clientVSwitchId: 'string',
      clientZoneId: 'string',
      eaiInstanceType: 'string',
      instanceName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiAllResponseBody extends $tea.Model {
  clientInstanceId?: string;
  elasticAcceleratedInstanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInstanceId: 'ClientInstanceId',
      elasticAcceleratedInstanceId: 'ElasticAcceleratedInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInstanceId: 'string',
      elasticAcceleratedInstanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiAllResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateEaiAllResponseBody;
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
      body: CreateEaiAllResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiEciRequest extends $tea.Model {
  clientToken?: string;
  eaisName?: string;
  eaisType?: string;
  eci?: CreateEaiEciRequestEci;
  regionId?: string;
  resourceGroupId?: string;
  securityGroupId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      eaisName: 'EaisName',
      eaisType: 'EaisType',
      eci: 'Eci',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      eaisName: 'string',
      eaisType: 'string',
      eci: CreateEaiEciRequestEci,
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiEciShrinkRequest extends $tea.Model {
  clientToken?: string;
  eaisName?: string;
  eaisType?: string;
  eciShrink?: string;
  regionId?: string;
  resourceGroupId?: string;
  securityGroupId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      eaisName: 'EaisName',
      eaisType: 'EaisType',
      eciShrink: 'Eci',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      eaisName: 'string',
      eaisType: 'string',
      eciShrink: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiEciResponseBody extends $tea.Model {
  clientInstanceId?: string;
  elasticAcceleratedInstanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInstanceId: 'ClientInstanceId',
      elasticAcceleratedInstanceId: 'ElasticAcceleratedInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInstanceId: 'string',
      elasticAcceleratedInstanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiEciResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateEaiEciResponseBody;
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
      body: CreateEaiEciResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiEcsRequest extends $tea.Model {
  clientToken?: string;
  eaisName?: string;
  eaisType?: string;
  ecs?: CreateEaiEcsRequestEcs;
  regionId?: string;
  resourceGroupId?: string;
  securityGroupId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      eaisName: 'EaisName',
      eaisType: 'EaisType',
      ecs: 'Ecs',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      eaisName: 'string',
      eaisType: 'string',
      ecs: CreateEaiEcsRequestEcs,
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiEcsShrinkRequest extends $tea.Model {
  clientToken?: string;
  eaisName?: string;
  eaisType?: string;
  ecsShrink?: string;
  regionId?: string;
  resourceGroupId?: string;
  securityGroupId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      eaisName: 'EaisName',
      eaisType: 'EaisType',
      ecsShrink: 'Ecs',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      eaisName: 'string',
      eaisType: 'string',
      ecsShrink: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiEcsResponseBody extends $tea.Model {
  clientInstanceId?: string;
  elasticAcceleratedInstanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInstanceId: 'ClientInstanceId',
      elasticAcceleratedInstanceId: 'ElasticAcceleratedInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInstanceId: 'string',
      elasticAcceleratedInstanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiEcsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateEaiEcsResponseBody;
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
      body: CreateEaiEcsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiJupyterRequest extends $tea.Model {
  clientToken?: string;
  eaisName?: string;
  eaisType?: string;
  environmentVar?: CreateEaiJupyterRequestEnvironmentVar[];
  regionId?: string;
  resourceGroupId?: string;
  securityGroupId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      eaisName: 'EaisName',
      eaisType: 'EaisType',
      environmentVar: 'EnvironmentVar',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      eaisName: 'string',
      eaisType: 'string',
      environmentVar: { 'type': 'array', 'itemType': CreateEaiJupyterRequestEnvironmentVar },
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiJupyterShrinkRequest extends $tea.Model {
  clientToken?: string;
  eaisName?: string;
  eaisType?: string;
  environmentVarShrink?: string;
  regionId?: string;
  resourceGroupId?: string;
  securityGroupId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      eaisName: 'EaisName',
      eaisType: 'EaisType',
      environmentVarShrink: 'EnvironmentVar',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      eaisName: 'string',
      eaisType: 'string',
      environmentVarShrink: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiJupyterResponseBody extends $tea.Model {
  elasticAcceleratedInstanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticAcceleratedInstanceId: 'ElasticAcceleratedInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticAcceleratedInstanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiJupyterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateEaiJupyterResponseBody;
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
      body: CreateEaiJupyterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaisEiRequest extends $tea.Model {
  clientToken?: string;
  instanceName?: string;
  instanceType?: string;
  regionId?: string;
  resourceGroupId?: string;
  securityGroupId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceName: 'string',
      instanceType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaisEiResponseBody extends $tea.Model {
  eiInstanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eiInstanceId: 'EiInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eiInstanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaisEiResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateEaisEiResponseBody;
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
      body: CreateEaisEiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEaiRequest extends $tea.Model {
  elasticAcceleratedInstanceId?: string;
  force?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticAcceleratedInstanceId: 'ElasticAcceleratedInstanceId',
      force: 'Force',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticAcceleratedInstanceId: 'string',
      force: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEaiResponseBody extends $tea.Model {
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

export class DeleteEaiResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteEaiResponseBody;
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
      body: DeleteEaiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEaiAllRequest extends $tea.Model {
  clientInstanceId?: string;
  elasticAcceleratedInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInstanceId: 'ClientInstanceId',
      elasticAcceleratedInstanceId: 'ElasticAcceleratedInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInstanceId: 'string',
      elasticAcceleratedInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEaiAllResponseBody extends $tea.Model {
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

export class DeleteEaiAllResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteEaiAllResponseBody;
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
      body: DeleteEaiAllResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEaisEiRequest extends $tea.Model {
  eiInstanceId?: string;
  force?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      eiInstanceId: 'EiInstanceId',
      force: 'Force',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eiInstanceId: 'string',
      force: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEaisEiResponseBody extends $tea.Model {
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

export class DeleteEaisEiResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteEaisEiResponseBody;
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
      body: DeleteEaisEiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEaisRequest extends $tea.Model {
  elasticAcceleratedInstanceIds?: string;
  instanceName?: string;
  instanceType?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  status?: string;
  tag?: DescribeEaisRequestTag[];
  static names(): { [key: string]: string } {
    return {
      elasticAcceleratedInstanceIds: 'ElasticAcceleratedInstanceIds',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticAcceleratedInstanceIds: 'string',
      instanceName: 'string',
      instanceType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeEaisRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEaisResponseBody extends $tea.Model {
  instances?: DescribeEaisResponseBodyInstances;
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
      instances: DescribeEaisResponseBodyInstances,
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

export class DescribeEaisResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEaisResponseBody;
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
      body: DescribeEaisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  regions?: DescribeRegionsResponseBodyRegions;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: DescribeRegionsResponseBodyRegions,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRegionsResponseBody;
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
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachEaiRequest extends $tea.Model {
  elasticAcceleratedInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticAcceleratedInstanceId: 'ElasticAcceleratedInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticAcceleratedInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachEaiResponseBody extends $tea.Model {
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

export class DetachEaiResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetachEaiResponseBody;
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
      body: DetachEaiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachEaisEiRequest extends $tea.Model {
  eiInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      eiInstanceId: 'EiInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eiInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachEaisEiResponseBody extends $tea.Model {
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

export class DetachEaisEiResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetachEaisEiResponseBody;
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
      body: DetachEaisEiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceMetricsRequest extends $tea.Model {
  endTime?: string;
  instanceId?: string;
  metricType?: string;
  regionId?: string;
  startTime?: string;
  timeStep?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      metricType: 'MetricType',
      regionId: 'RegionId',
      startTime: 'StartTime',
      timeStep: 'TimeStep',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      metricType: 'string',
      regionId: 'string',
      startTime: 'string',
      timeStep: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceMetricsResponseBody extends $tea.Model {
  instanceId?: string;
  podMetrics?: GetInstanceMetricsResponseBodyPodMetrics[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      podMetrics: 'PodMetrics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      podMetrics: { 'type': 'array', 'itemType': GetInstanceMetricsResponseBodyPodMetrics },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceMetricsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetInstanceMetricsResponseBody;
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
      body: GetInstanceMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartEaisEiRequest extends $tea.Model {
  eiInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      eiInstanceId: 'EiInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eiInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartEaisEiResponseBody extends $tea.Model {
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

export class StartEaisEiResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartEaisEiResponseBody;
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
      body: StartEaisEiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopEaisEiRequest extends $tea.Model {
  eiInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      eiInstanceId: 'EiInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eiInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopEaisEiResponseBody extends $tea.Model {
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

export class StopEaisEiResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopEaisEiResponseBody;
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
      body: StopEaisEiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiEciRequestEciContainer extends $tea.Model {
  arg?: string;
  command?: string;
  image?: string;
  name?: string;
  volumes?: string;
  static names(): { [key: string]: string } {
    return {
      arg: 'Arg',
      command: 'Command',
      image: 'Image',
      name: 'Name',
      volumes: 'Volumes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: 'string',
      command: 'string',
      image: 'string',
      name: 'string',
      volumes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiEciRequestEci extends $tea.Model {
  container?: CreateEaiEciRequestEciContainer;
  eipId?: string;
  name?: string;
  type?: string;
  volume?: string;
  static names(): { [key: string]: string } {
    return {
      container: 'Container',
      eipId: 'EipId',
      name: 'Name',
      type: 'Type',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      container: CreateEaiEciRequestEciContainer,
      eipId: 'string',
      name: 'string',
      type: 'string',
      volume: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiEcsRequestEcs extends $tea.Model {
  imageId?: string;
  internetMaxBandwidthIn?: string;
  internetMaxBandwidthOut?: string;
  name?: string;
  password?: string;
  systemDiskCategory?: string;
  systemDiskSize?: number;
  type?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      name: 'Name',
      password: 'Password',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskSize: 'SystemDiskSize',
      type: 'Type',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      internetMaxBandwidthIn: 'string',
      internetMaxBandwidthOut: 'string',
      name: 'string',
      password: 'string',
      systemDiskCategory: 'string',
      systemDiskSize: 'number',
      type: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiJupyterRequestEnvironmentVar extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEaisRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEaisResponseBodyInstancesInstanceTagsTag extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEaisResponseBodyInstancesInstanceTags extends $tea.Model {
  tag?: DescribeEaisResponseBodyInstancesInstanceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeEaisResponseBodyInstancesInstanceTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEaisResponseBodyInstancesInstance extends $tea.Model {
  category?: string;
  clientInstanceId?: string;
  clientInstanceName?: string;
  clientInstanceType?: string;
  creationTime?: string;
  description?: string;
  elasticAcceleratedInstanceId?: string;
  instanceName?: string;
  instanceType?: string;
  jupyterUrl?: string;
  regionId?: string;
  resourceGroupId?: string;
  securityGroupId?: string;
  startTime?: string;
  status?: string;
  tags?: DescribeEaisResponseBodyInstancesInstanceTags;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      clientInstanceId: 'ClientInstanceId',
      clientInstanceName: 'ClientInstanceName',
      clientInstanceType: 'ClientInstanceType',
      creationTime: 'CreationTime',
      description: 'Description',
      elasticAcceleratedInstanceId: 'ElasticAcceleratedInstanceId',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      jupyterUrl: 'JupyterUrl',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      startTime: 'StartTime',
      status: 'Status',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      clientInstanceId: 'string',
      clientInstanceName: 'string',
      clientInstanceType: 'string',
      creationTime: 'string',
      description: 'string',
      elasticAcceleratedInstanceId: 'string',
      instanceName: 'string',
      instanceType: 'string',
      jupyterUrl: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      startTime: 'string',
      status: 'string',
      tags: DescribeEaisResponseBodyInstancesInstanceTags,
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEaisResponseBodyInstances extends $tea.Model {
  instance?: DescribeEaisResponseBodyInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeEaisResponseBodyInstancesInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
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

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  region?: DescribeRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceMetricsResponseBodyPodMetricsMetrics extends $tea.Model {
  time?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceMetricsResponseBodyPodMetrics extends $tea.Model {
  metrics?: GetInstanceMetricsResponseBodyPodMetricsMetrics[];
  podId?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      podId: 'PodId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': GetInstanceMetricsResponseBodyPodMetricsMetrics },
      podId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-1': "eais.aliyuncs.com",
      'ap-northeast-2-pop': "eais.aliyuncs.com",
      'ap-south-1': "eais.aliyuncs.com",
      'ap-southeast-1': "eais.aliyuncs.com",
      'ap-southeast-2': "eais.aliyuncs.com",
      'ap-southeast-3': "eais.aliyuncs.com",
      'ap-southeast-5': "eais.aliyuncs.com",
      'cn-beijing-finance-1': "eais.aliyuncs.com",
      'cn-beijing-finance-pop': "eais.aliyuncs.com",
      'cn-beijing-gov-1': "eais.aliyuncs.com",
      'cn-beijing-nu16-b01': "eais.aliyuncs.com",
      'cn-edge-1': "eais.aliyuncs.com",
      'cn-fujian': "eais.aliyuncs.com",
      'cn-haidian-cm12-c01': "eais.aliyuncs.com",
      'cn-hangzhou-bj-b01': "eais.aliyuncs.com",
      'cn-hangzhou-finance': "eais.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "eais.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "eais.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "eais.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "eais.aliyuncs.com",
      'cn-hangzhou-test-306': "eais.aliyuncs.com",
      'cn-hongkong': "eais.aliyuncs.com",
      'cn-hongkong-finance-pop': "eais.aliyuncs.com",
      'cn-huhehaote': "eais.aliyuncs.com",
      'cn-huhehaote-nebula-1': "eais.aliyuncs.com",
      'cn-north-2-gov-1': "eais.aliyuncs.com",
      'cn-qingdao': "eais.aliyuncs.com",
      'cn-qingdao-nebula': "eais.aliyuncs.com",
      'cn-shanghai-et15-b01': "eais.aliyuncs.com",
      'cn-shanghai-et2-b01': "eais.aliyuncs.com",
      'cn-shanghai-finance-1': "eais.aliyuncs.com",
      'cn-shanghai-inner': "eais.aliyuncs.com",
      'cn-shanghai-internal-test-1': "eais.aliyuncs.com",
      'cn-shenzhen-finance-1': "eais.aliyuncs.com",
      'cn-shenzhen-inner': "eais.aliyuncs.com",
      'cn-shenzhen-st4-d01': "eais.aliyuncs.com",
      'cn-shenzhen-su18-b01': "eais.aliyuncs.com",
      'cn-wuhan': "eais.aliyuncs.com",
      'cn-wulanchabu': "eais.aliyuncs.com",
      'cn-yushanfang': "eais.aliyuncs.com",
      'cn-zhangbei': "eais.aliyuncs.com",
      'cn-zhangbei-na61-b01': "eais.aliyuncs.com",
      'cn-zhangjiakou': "eais.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "eais.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "eais.aliyuncs.com",
      'eu-central-1': "eais.aliyuncs.com",
      'eu-west-1': "eais.aliyuncs.com",
      'eu-west-1-oxs': "eais.aliyuncs.com",
      'me-east-1': "eais.aliyuncs.com",
      'rus-west-1-pop': "eais.aliyuncs.com",
      'us-east-1': "eais.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("eais", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async attachEaiWithOptions(request: AttachEaiRequest, runtime: $Util.RuntimeOptions): Promise<AttachEaiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientInstanceId)) {
      query["ClientInstanceId"] = request.clientInstanceId;
    }

    if (!Util.isUnset(request.elasticAcceleratedInstanceId)) {
      query["ElasticAcceleratedInstanceId"] = request.elasticAcceleratedInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachEai",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachEaiResponse>(await this.callApi(params, req, runtime), new AttachEaiResponse({}));
  }

  async attachEai(request: AttachEaiRequest): Promise<AttachEaiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachEaiWithOptions(request, runtime);
  }

  async attachEaisEiWithOptions(request: AttachEaisEiRequest, runtime: $Util.RuntimeOptions): Promise<AttachEaisEiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientInstanceId)) {
      query["ClientInstanceId"] = request.clientInstanceId;
    }

    if (!Util.isUnset(request.eiInstanceId)) {
      query["EiInstanceId"] = request.eiInstanceId;
    }

    if (!Util.isUnset(request.eiInstanceType)) {
      query["EiInstanceType"] = request.eiInstanceType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachEaisEi",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachEaisEiResponse>(await this.callApi(params, req, runtime), new AttachEaisEiResponse({}));
  }

  async attachEaisEi(request: AttachEaisEiRequest): Promise<AttachEaisEiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachEaisEiWithOptions(request, runtime);
  }

  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeResourceGroup",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
  }

  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  async createEaiWithOptions(request: CreateEaiRequest, runtime: $Util.RuntimeOptions): Promise<CreateEaiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.image)) {
      query["Image"] = request.image;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateEai",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateEaiResponse>(await this.callApi(params, req, runtime), new CreateEaiResponse({}));
  }

  async createEai(request: CreateEaiRequest): Promise<CreateEaiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEaiWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param request CreateEaiAllRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateEaiAllResponse
   */
  // Deprecated
  async createEaiAllWithOptions(request: CreateEaiAllRequest, runtime: $Util.RuntimeOptions): Promise<CreateEaiAllResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientImageId)) {
      query["ClientImageId"] = request.clientImageId;
    }

    if (!Util.isUnset(request.clientInstanceName)) {
      query["ClientInstanceName"] = request.clientInstanceName;
    }

    if (!Util.isUnset(request.clientInstanceType)) {
      query["ClientInstanceType"] = request.clientInstanceType;
    }

    if (!Util.isUnset(request.clientInternetMaxBandwidthIn)) {
      query["ClientInternetMaxBandwidthIn"] = request.clientInternetMaxBandwidthIn;
    }

    if (!Util.isUnset(request.clientInternetMaxBandwidthOut)) {
      query["ClientInternetMaxBandwidthOut"] = request.clientInternetMaxBandwidthOut;
    }

    if (!Util.isUnset(request.clientPassword)) {
      query["ClientPassword"] = request.clientPassword;
    }

    if (!Util.isUnset(request.clientSecurityGroupId)) {
      query["ClientSecurityGroupId"] = request.clientSecurityGroupId;
    }

    if (!Util.isUnset(request.clientSystemDiskCategory)) {
      query["ClientSystemDiskCategory"] = request.clientSystemDiskCategory;
    }

    if (!Util.isUnset(request.clientSystemDiskSize)) {
      query["ClientSystemDiskSize"] = request.clientSystemDiskSize;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.clientVSwitchId)) {
      query["ClientVSwitchId"] = request.clientVSwitchId;
    }

    if (!Util.isUnset(request.clientZoneId)) {
      query["ClientZoneId"] = request.clientZoneId;
    }

    if (!Util.isUnset(request.eaiInstanceType)) {
      query["EaiInstanceType"] = request.eaiInstanceType;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateEaiAll",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateEaiAllResponse>(await this.callApi(params, req, runtime), new CreateEaiAllResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request CreateEaiAllRequest
    * @return CreateEaiAllResponse
   */
  // Deprecated
  async createEaiAll(request: CreateEaiAllRequest): Promise<CreateEaiAllResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEaiAllWithOptions(request, runtime);
  }

  async createEaiEciWithOptions(tmpReq: CreateEaiEciRequest, runtime: $Util.RuntimeOptions): Promise<CreateEaiEciResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateEaiEciShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.eci)) {
      request.eciShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.eci, "Eci", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.eaisName)) {
      query["EaisName"] = request.eaisName;
    }

    if (!Util.isUnset(request.eaisType)) {
      query["EaisType"] = request.eaisType;
    }

    if (!Util.isUnset(request.eciShrink)) {
      query["Eci"] = request.eciShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateEaiEci",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateEaiEciResponse>(await this.callApi(params, req, runtime), new CreateEaiEciResponse({}));
  }

  async createEaiEci(request: CreateEaiEciRequest): Promise<CreateEaiEciResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEaiEciWithOptions(request, runtime);
  }

  async createEaiEcsWithOptions(tmpReq: CreateEaiEcsRequest, runtime: $Util.RuntimeOptions): Promise<CreateEaiEcsResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateEaiEcsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.ecs)) {
      request.ecsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ecs, "Ecs", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.eaisName)) {
      query["EaisName"] = request.eaisName;
    }

    if (!Util.isUnset(request.eaisType)) {
      query["EaisType"] = request.eaisType;
    }

    if (!Util.isUnset(request.ecsShrink)) {
      query["Ecs"] = request.ecsShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateEaiEcs",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateEaiEcsResponse>(await this.callApi(params, req, runtime), new CreateEaiEcsResponse({}));
  }

  async createEaiEcs(request: CreateEaiEcsRequest): Promise<CreateEaiEcsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEaiEcsWithOptions(request, runtime);
  }

  async createEaiJupyterWithOptions(tmpReq: CreateEaiJupyterRequest, runtime: $Util.RuntimeOptions): Promise<CreateEaiJupyterResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateEaiJupyterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.environmentVar)) {
      request.environmentVarShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.environmentVar, "EnvironmentVar", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.eaisName)) {
      query["EaisName"] = request.eaisName;
    }

    if (!Util.isUnset(request.eaisType)) {
      query["EaisType"] = request.eaisType;
    }

    if (!Util.isUnset(request.environmentVarShrink)) {
      query["EnvironmentVar"] = request.environmentVarShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateEaiJupyter",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateEaiJupyterResponse>(await this.callApi(params, req, runtime), new CreateEaiJupyterResponse({}));
  }

  async createEaiJupyter(request: CreateEaiJupyterRequest): Promise<CreateEaiJupyterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEaiJupyterWithOptions(request, runtime);
  }

  async createEaisEiWithOptions(request: CreateEaisEiRequest, runtime: $Util.RuntimeOptions): Promise<CreateEaisEiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateEaisEi",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateEaisEiResponse>(await this.callApi(params, req, runtime), new CreateEaisEiResponse({}));
  }

  async createEaisEi(request: CreateEaisEiRequest): Promise<CreateEaisEiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEaisEiWithOptions(request, runtime);
  }

  async deleteEaiWithOptions(request: DeleteEaiRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEaiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.elasticAcceleratedInstanceId)) {
      query["ElasticAcceleratedInstanceId"] = request.elasticAcceleratedInstanceId;
    }

    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEai",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEaiResponse>(await this.callApi(params, req, runtime), new DeleteEaiResponse({}));
  }

  async deleteEai(request: DeleteEaiRequest): Promise<DeleteEaiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEaiWithOptions(request, runtime);
  }

  async deleteEaiAllWithOptions(request: DeleteEaiAllRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEaiAllResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientInstanceId)) {
      query["ClientInstanceId"] = request.clientInstanceId;
    }

    if (!Util.isUnset(request.elasticAcceleratedInstanceId)) {
      query["ElasticAcceleratedInstanceId"] = request.elasticAcceleratedInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEaiAll",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEaiAllResponse>(await this.callApi(params, req, runtime), new DeleteEaiAllResponse({}));
  }

  async deleteEaiAll(request: DeleteEaiAllRequest): Promise<DeleteEaiAllResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEaiAllWithOptions(request, runtime);
  }

  async deleteEaisEiWithOptions(request: DeleteEaisEiRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEaisEiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eiInstanceId)) {
      query["EiInstanceId"] = request.eiInstanceId;
    }

    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEaisEi",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEaisEiResponse>(await this.callApi(params, req, runtime), new DeleteEaisEiResponse({}));
  }

  async deleteEaisEi(request: DeleteEaisEiRequest): Promise<DeleteEaisEiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEaisEiWithOptions(request, runtime);
  }

  async describeEaisWithOptions(request: DescribeEaisRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEaisResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.elasticAcceleratedInstanceIds)) {
      query["ElasticAcceleratedInstanceIds"] = request.elasticAcceleratedInstanceIds;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEais",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEaisResponse>(await this.callApi(params, req, runtime), new DescribeEaisResponse({}));
  }

  async describeEais(request: DescribeEaisRequest): Promise<DescribeEaisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEaisWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(runtime);
  }

  async detachEaiWithOptions(request: DetachEaiRequest, runtime: $Util.RuntimeOptions): Promise<DetachEaiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.elasticAcceleratedInstanceId)) {
      query["ElasticAcceleratedInstanceId"] = request.elasticAcceleratedInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachEai",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachEaiResponse>(await this.callApi(params, req, runtime), new DetachEaiResponse({}));
  }

  async detachEai(request: DetachEaiRequest): Promise<DetachEaiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachEaiWithOptions(request, runtime);
  }

  async detachEaisEiWithOptions(request: DetachEaisEiRequest, runtime: $Util.RuntimeOptions): Promise<DetachEaisEiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eiInstanceId)) {
      query["EiInstanceId"] = request.eiInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachEaisEi",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachEaisEiResponse>(await this.callApi(params, req, runtime), new DetachEaisEiResponse({}));
  }

  async detachEaisEi(request: DetachEaisEiRequest): Promise<DetachEaisEiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachEaisEiWithOptions(request, runtime);
  }

  async getInstanceMetricsWithOptions(request: GetInstanceMetricsRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceMetricsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.timeStep)) {
      query["TimeStep"] = request.timeStep;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceMetrics",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceMetricsResponse>(await this.callApi(params, req, runtime), new GetInstanceMetricsResponse({}));
  }

  async getInstanceMetrics(request: GetInstanceMetricsRequest): Promise<GetInstanceMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceMetricsWithOptions(request, runtime);
  }

  async startEaisEiWithOptions(request: StartEaisEiRequest, runtime: $Util.RuntimeOptions): Promise<StartEaisEiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eiInstanceId)) {
      query["EiInstanceId"] = request.eiInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartEaisEi",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartEaisEiResponse>(await this.callApi(params, req, runtime), new StartEaisEiResponse({}));
  }

  async startEaisEi(request: StartEaisEiRequest): Promise<StartEaisEiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startEaisEiWithOptions(request, runtime);
  }

  async stopEaisEiWithOptions(request: StopEaisEiRequest, runtime: $Util.RuntimeOptions): Promise<StopEaisEiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eiInstanceId)) {
      query["EiInstanceId"] = request.eiInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopEaisEi",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopEaisEiResponse>(await this.callApi(params, req, runtime), new StopEaisEiResponse({}));
  }

  async stopEaisEi(request: StopEaisEiRequest): Promise<StopEaisEiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopEaisEiWithOptions(request, runtime);
  }

}
