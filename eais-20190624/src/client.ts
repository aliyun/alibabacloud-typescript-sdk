// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AttachEaiRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-wz93g6pyat2g7t7o****
   */
  clientInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais-sz8t15a7gt7z7j7i****
   */
  elasticAcceleratedInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
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
  /**
   * @example
   * i-wz93g6pyat2g7t7o****
   */
  clientInstanceId?: string;
  /**
   * @example
   * eais-sz8t15a7gt7z7j7i****
   */
  elasticAcceleratedInstanceId?: string;
  /**
   * @example
   * C3BCB7DA-BEB6-4982-A765-6EA61EC84474
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachEaiResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-bp14ws9hbt1oe0u9****
   */
  clientInstanceId?: string;
  /**
   * @example
   * eais-hzu00xufs1c8j5nn****
   */
  eiInstanceId?: string;
  /**
   * @example
   * eais.ei-a6.2xlarge
   */
  eiInstanceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @example
   * i-bp14ws9hbt1oe0u9****
   */
  clientInstanceId?: string;
  /**
   * @example
   * eais-hzu00xufs1c8j5nn****
   */
  eiInstanceId?: string;
  /**
   * @example
   * C3BCB7DA-BEB6-4982-A765-6EA61EC8****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachEaisEiResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rg-acfmvpuy4a5****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais-hzs4h26yyt5xkcke****
   */
  resourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @example
   * C3BCB7DA-BEB6-4982-A765-6EA61EC8****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeResourceGroupResponseBody;
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
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  image?: string;
  /**
   * @example
   * eais-test01
   */
  instanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais.ei-a6.2xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  resourceGroupId?: string;
  /**
   * @example
   * sg-uf66jeqopgqa9hdn****
   */
  securityGroupId?: string;
  /**
   * @example
   * vsw-uf6h3rbwbm90urjwa****
   */
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
  /**
   * @example
   * eais-sz8t15a7gt7z7j7i****
   */
  elasticAcceleratedInstanceId?: string;
  /**
   * @example
   * A655AB0E-31BB-45AD-9255-FCE93F6*****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEaiResponseBody;
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

export class CreateEaiEciRequest extends $tea.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @example
   * eais-test01
   */
  eaisName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais.ei-a6.2xlarge
   */
  eaisType?: string;
  eci?: CreateEaiEciRequestEci;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @example
   * rg-acfmvpuy4a5****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sg-uf66jeqopgqa9hdn****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-uf6h3rbwbm90urjwa****
   */
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
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @example
   * eais-test01
   */
  eaisName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais.ei-a6.2xlarge
   */
  eaisType?: string;
  eciShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @example
   * rg-acfmvpuy4a5****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sg-uf66jeqopgqa9hdn****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-uf6h3rbwbm90urjwa****
   */
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
  /**
   * @example
   * eci-2zeh03ygxlrzmfi6****
   */
  clientInstanceId?: string;
  /**
   * @example
   * eais-sz8t15a7gt7z7j7i****
   */
  elasticAcceleratedInstanceId?: string;
  /**
   * @example
   * F5FEB9AA-C108-577C-AB3D-D13524AF****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEaiEciResponseBody;
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
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @example
   * eais-test01
   */
  eaisName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais.ei-a6.2xlarge
   */
  eaisType?: string;
  ecs?: CreateEaiEcsRequestEcs;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @example
   * rg-acfmvpuy4a5****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sg-uf66jeqopgqa9hdn****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-uf6h3rbwbm90urjwa****
   */
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
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @example
   * eais-test01
   */
  eaisName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais.ei-a6.2xlarge
   */
  eaisType?: string;
  ecsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @example
   * rg-acfmvpuy4a5****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sg-uf66jeqopgqa9hdn****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-uf6h3rbwbm90urjwa****
   */
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
  /**
   * @example
   * i-bp1hjrvleawl4ogb****
   */
  clientInstanceId?: string;
  /**
   * @example
   * eais-sz8t15a7gt7z7j7i****
   */
  elasticAcceleratedInstanceId?: string;
  /**
   * @example
   * F5FEB9AA-C108-577C-AB3D-D13524AF****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEaiEcsResponseBody;
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
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  eaisName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais.ei-a6.2xlarge
   */
  eaisType?: string;
  environmentVar?: CreateEaiJupyterRequestEnvironmentVar[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sg-uf66jeqopgqa9hdn****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-uf6h3rbwbm90urjwa****
   */
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
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  eaisName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais.ei-a6.2xlarge
   */
  eaisType?: string;
  environmentVarShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sg-uf66jeqopgqa9hdn****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-uf6h3rbwbm90urjwa****
   */
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
  /**
   * @example
   * eais-hz8t15a7gt7z7j7i****
   */
  elasticAcceleratedInstanceId?: string;
  /**
   * @example
   * A655AB0E-31BB-45AD-9255-FCE93F6*****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEaiJupyterResponseBody;
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
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @example
   * test_ei
   */
  instanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais.ei-a6.2xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfmvpuy4a5****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sg-bp16jgp51ttnkbdr****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-bp17wmd1wb6fwlimk****
   */
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
  /**
   * @example
   * eais-hzu00xufs1c8j5nn****
   */
  eiInstanceId?: string;
  /**
   * @example
   * F5FEB9AA-C108-577C-AB3D-D13524AF****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEaisEiResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais-sz8t15a7gt7z7j7i****
   */
  elasticAcceleratedInstanceId?: string;
  /**
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
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
  /**
   * @example
   * F23AEEC7-4D98-4657-A104-0269270*****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEaiResponseBody;
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
  /**
   * @example
   * i-bp1fvhi60e1zizsp****
   */
  clientInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais-hza1ahi0uuw0re33****
   */
  elasticAcceleratedInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
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
  /**
   * @example
   * AD4EA714-A35B-4710-BF92-8275BCDDB69F
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEaiAllResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais-hzu00xufs1c8j5nn****
   */
  eiInstanceId?: string;
  /**
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @example
   * F23AEEC7-4D98-4657-A104-02692701****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEaisEiResponseBody;
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
  clientInstanceId?: string;
  /**
   * @example
   * ["eais-id1", "eais-id2"]
   */
  elasticAcceleratedInstanceIds?: string;
  /**
   * @example
   * eais*
   */
  instanceName?: string;
  /**
   * @example
   * eais.ei-a6.2xlarge
   */
  instanceType?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 200
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  resourceGroupId?: string;
  /**
   * @example
   * InUse
   */
  status?: string;
  tag?: DescribeEaisRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientInstanceId: 'ClientInstanceId',
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
      clientInstanceId: 'string',
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
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1E23D585-BBD8-436F-9615-54CACD6*****
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEaisResponseBody;
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
  /**
   * @example
   * F5FEB9AA-C108-577C-AB3D-D13524AF1840
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais-sz8t15a7gt7z7j7i****
   */
  elasticAcceleratedInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
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
  /**
   * @example
   * 04DEB304-2436-4CB9-BB63-468BCEA03D9D
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachEaiResponseBody;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais-hzu00xufs1c8j5nn****
   */
  eiInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @example
   * 04DEB304-2436-4CB9-BB63-468BCEA0****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachEaisEiResponseBody;
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
  /**
   * @example
   * 2022-11-22T16:30:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais-hznzre6ffmz9num4****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MemoryUsage
   */
  metricType?: string;
  regionId?: string;
  /**
   * @example
   * 2022-11-22T16:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * 5m
   */
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
  /**
   * @example
   * eais-bj8b53it29hfhj******
   */
  instanceId?: string;
  podMetrics?: GetInstanceMetricsResponseBodyPodMetrics[];
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceMetricsResponseBody;
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

export class ListTagResourcesRequest extends $tea.Model {
  /**
   * @example
   * caeba0bbb2be03f84eb48b699f0a4884
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  /**
   * @example
   * caeba0bbb2be03f84eb48b699f0a4885
   */
  nextToken?: string;
  /**
   * @example
   * F23AEEC7-4D98-4657-A104-02692701****
   */
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
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
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartEaiJupyterRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais-hze3x2gv9wimdj0k****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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

export class StartEaiJupyterResponseBody extends $tea.Model {
  accessDeniedDetail?: StartEaiJupyterResponseBodyAccessDeniedDetail;
  /**
   * @example
   * 04DEB304-2436-4CB9-BB63-468BCEA0****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: StartEaiJupyterResponseBodyAccessDeniedDetail,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartEaiJupyterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartEaiJupyterResponseBody;
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
      body: StartEaiJupyterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartEaisEiRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais-hzu00xufs1c8j5nn****
   */
  eiInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @example
   * F23AEEC7-4D98-4657-A104-02692701****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartEaisEiResponseBody;
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

export class StopEaiJupyterRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais-hze3x2gv9wimdj0k****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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

export class StopEaiJupyterResponseBody extends $tea.Model {
  accessDeniedDetail?: StopEaiJupyterResponseBodyAccessDeniedDetail;
  /**
   * @example
   * F5FEB9AA-C108-577C-AB3D-D13524AF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: StopEaiJupyterResponseBodyAccessDeniedDetail,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopEaiJupyterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopEaiJupyterResponseBody;
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
      body: StopEaiJupyterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopEaisEiRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais-hzu00xufs1c8j5nn****
   */
  eiInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @example
   * F23AEEC7-4D98-4657-A104-02692701****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopEaisEiResponseBody;
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

export class TagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
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

export class TagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
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
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  /**
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  /**
   * @example
   * 1E23D585-BBD8-436F-9615-54CACD67****
   */
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

export class UntagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
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
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiEciRequestEciContainer extends $tea.Model {
  /**
   * @example
   * 100
   */
  arg?: string;
  /**
   * @example
   * sleep
   */
  command?: string;
  /**
   * @example
   * nginx
   */
  image?: string;
  /**
   * @example
   * test1
   */
  name?: string;
  /**
   * @example
   * /mnt/eais=eais,/models=eais/models
   */
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
  /**
   * @example
   * eip-uf66jeqopgqa9hdn****
   */
  eipId?: string;
  /**
   * @example
   * test-nginx
   */
  name?: string;
  /**
   * @example
   * ecs.c5.xlarge
   */
  type?: string;
  /**
   * @example
   * 00c7****-rivj.cn-hangzhou.extreme.nas.aliyuncs.com:/share
   */
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
  /**
   * @example
   * aliyun_2_1903_x64_20G_alibase_20200324.vhd
   */
  imageId?: string;
  /**
   * @example
   * 10
   */
  internetMaxBandwidthIn?: string;
  /**
   * @example
   * 10
   */
  internetMaxBandwidthOut?: string;
  /**
   * @example
   * test1
   */
  name?: string;
  /**
   * @example
   * EcsV587!
   */
  password?: string;
  /**
   * @example
   * cloud_ssd
   */
  systemDiskCategory?: string;
  /**
   * @example
   * 40
   */
  systemDiskSize?: number;
  /**
   * @example
   * ecs.g7.4xlarge
   */
  type?: string;
  /**
   * @example
   * cn-shenzhen-e
   */
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
  /**
   * @example
   * MY_USER_NAME
   */
  key?: string;
  /**
   * @example
   * test123
   */
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
  /**
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @example
   * TestValue
   */
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
  /**
   * @example
   * jupyter
   */
  category?: string;
  /**
   * @example
   * i-wz93g6pyat2g****
   */
  clientInstanceId?: string;
  /**
   * @example
   * test1
   */
  clientInstanceName?: string;
  /**
   * @example
   * ecs.g5ne.large
   */
  clientInstanceType?: string;
  /**
   * @example
   * 2020-11-11T03:11Z
   */
  creationTime?: string;
  /**
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @example
   * eais-sz8t15a7gt7****
   */
  elasticAcceleratedInstanceId?: string;
  /**
   * @example
   * testName
   */
  instanceName?: string;
  /**
   * @example
   * eais.ei-a6.2xlarge
   */
  instanceType?: string;
  /**
   * @example
   * http://121.41.**.24:8888
   */
  jupyterUrl?: string;
  /**
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  resourceGroupId?: string;
  /**
   * @example
   * sg-bp1gppir818lx4******
   */
  securityGroupId?: string;
  startTime?: string;
  /**
   * @example
   * InUse
   */
  status?: string;
  tags?: DescribeEaisResponseBodyInstancesInstanceTags;
  /**
   * @example
   * vsw-bp1sd131hfmd76r******
   */
  vSwitchId?: string;
  /**
   * @example
   * cn-shenzhen-e
   */
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
  /**
   * @example
   * eais.cn-shenzhen.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @example
   * cn-shenzhen
   */
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
  /**
   * @example
   * 1669107528450
   */
  time?: string;
  /**
   * @example
   * 4.536552540058814
   */
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
  /**
   * @remarks
   * Pod ID。
   * 
   * @example
   * eais-hznzre6ffmz9num4****-579b587ddf-9txr6
   */
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

export class ListTagResourcesRequestTag extends $tea.Model {
  /**
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @example
   * TestValue
   */
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

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  /**
   * @example
   * eais-hzs4h26yyt5xkcke****
   */
  resourceId?: string;
  /**
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @example
   * TestValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartEaiJupyterResponseBodyAccessDeniedDetail extends $tea.Model {
  /**
   * @example
   * eais:StartEaiJupyter
   */
  authAction?: string;
  /**
   * @example
   * 20560152949032****
   */
  authPrincipalDisplayName?: string;
  /**
   * @example
   * 170718266783****
   */
  authPrincipalOwnerId?: string;
  /**
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  /**
   * @example
   * AQFmfh3BZn4dwUQyNzY4MDVELTgzQkUtNTBEOC04QjQyLTNGM0U1QUI5MjhBRA==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @example
   * ExplicitDeny
   */
  noPermissionType?: string;
  /**
   * @example
   * AccountLevelIdentityBasedPolicy
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopEaiJupyterResponseBodyAccessDeniedDetail extends $tea.Model {
  /**
   * @example
   * eais:StopEaiJupyter
   */
  authAction?: string;
  /**
   * @example
   * 20560152949032****
   */
  authPrincipalDisplayName?: string;
  /**
   * @example
   * 170718266783****
   */
  authPrincipalOwnerId?: string;
  /**
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  /**
   * @example
   * AQFmj0FOZo9BTjMyQTFDRkIzLUE5MTItNUIwNC1BQzkxLTcyMUFFQTUyQjhGQQ==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @example
   * ExplicitDeny
   */
  noPermissionType?: string;
  /**
   * @example
   * AccountLevelIdentityBasedPolicy
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
  /**
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @example
   * TestValue
   */
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

  /**
   * 将弹性加速计算实例挂载到ECS实例上
   * 
   * @param request - AttachEaiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachEaiResponse
   */
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

  /**
   * 将弹性加速计算实例挂载到ECS实例上
   * 
   * @param request - AttachEaiRequest
   * @returns AttachEaiResponse
   */
  async attachEai(request: AttachEaiRequest): Promise<AttachEaiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachEaiWithOptions(request, runtime);
  }

  /**
   * 将EI绑定到ECS或ECI实例上。
   * 
   * @param request - AttachEaisEiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachEaisEiResponse
   */
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

  /**
   * 将EI绑定到ECS或ECI实例上。
   * 
   * @param request - AttachEaisEiRequest
   * @returns AttachEaisEiResponse
   */
  async attachEaisEi(request: AttachEaisEiRequest): Promise<AttachEaisEiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachEaisEiWithOptions(request, runtime);
  }

  /**
   * 资源转组
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
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

  /**
   * 资源转组
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * 创建一个弹性加速计算实例
   * 
   * @param request - CreateEaiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEaiResponse
   */
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

  /**
   * 创建一个弹性加速计算实例
   * 
   * @param request - CreateEaiRequest
   * @returns CreateEaiResponse
   */
  async createEai(request: CreateEaiRequest): Promise<CreateEaiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEaiWithOptions(request, runtime);
  }

  /**
   * 创建一个EAIS实例和ECI实例并绑定
   * 
   * @param tmpReq - CreateEaiEciRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEaiEciResponse
   */
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

  /**
   * 创建一个EAIS实例和ECI实例并绑定
   * 
   * @param request - CreateEaiEciRequest
   * @returns CreateEaiEciResponse
   */
  async createEaiEci(request: CreateEaiEciRequest): Promise<CreateEaiEciResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEaiEciWithOptions(request, runtime);
  }

  /**
   * 创建一个EAIS实例和ECS实例并绑定
   * 
   * @param tmpReq - CreateEaiEcsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEaiEcsResponse
   */
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

  /**
   * 创建一个EAIS实例和ECS实例并绑定
   * 
   * @param request - CreateEaiEcsRequest
   * @returns CreateEaiEcsResponse
   */
  async createEaiEcs(request: CreateEaiEcsRequest): Promise<CreateEaiEcsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEaiEcsWithOptions(request, runtime);
  }

  /**
   * 创建一个EAIS Jupyter环境
   * 
   * @param tmpReq - CreateEaiJupyterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEaiJupyterResponse
   */
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

  /**
   * 创建一个EAIS Jupyter环境
   * 
   * @param request - CreateEaiJupyterRequest
   * @returns CreateEaiJupyterResponse
   */
  async createEaiJupyter(request: CreateEaiJupyterRequest): Promise<CreateEaiJupyterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEaiJupyterWithOptions(request, runtime);
  }

  /**
   * 创建一个弹性加速计算实例
   * 
   * @param request - CreateEaisEiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEaisEiResponse
   */
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

  /**
   * 创建一个弹性加速计算实例
   * 
   * @param request - CreateEaisEiRequest
   * @returns CreateEaisEiResponse
   */
  async createEaisEi(request: CreateEaisEiRequest): Promise<CreateEaisEiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEaisEiWithOptions(request, runtime);
  }

  /**
   * 释放一个弹性加速计算实例
   * 
   * @param request - DeleteEaiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEaiResponse
   */
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

  /**
   * 释放一个弹性加速计算实例
   * 
   * @param request - DeleteEaiRequest
   * @returns DeleteEaiResponse
   */
  async deleteEai(request: DeleteEaiRequest): Promise<DeleteEaiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEaiWithOptions(request, runtime);
  }

  /**
   * 释放一个弹性加速计算实例以及与其绑定的ECS或ECI实例
   * 
   * @param request - DeleteEaiAllRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEaiAllResponse
   */
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

  /**
   * 释放一个弹性加速计算实例以及与其绑定的ECS或ECI实例
   * 
   * @param request - DeleteEaiAllRequest
   * @returns DeleteEaiAllResponse
   */
  async deleteEaiAll(request: DeleteEaiAllRequest): Promise<DeleteEaiAllResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEaiAllWithOptions(request, runtime);
  }

  /**
   * 释放弹性加速计算实例
   * 
   * @param request - DeleteEaisEiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEaisEiResponse
   */
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

  /**
   * 释放弹性加速计算实例
   * 
   * @param request - DeleteEaisEiRequest
   * @returns DeleteEaisEiResponse
   */
  async deleteEaisEi(request: DeleteEaisEiRequest): Promise<DeleteEaisEiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEaisEiWithOptions(request, runtime);
  }

  /**
   * 查询一个或多个弹性加速计算实例的详细信息
   * 
   * @param request - DescribeEaisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEaisResponse
   */
  async describeEaisWithOptions(request: DescribeEaisRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEaisResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientInstanceId)) {
      query["ClientInstanceId"] = request.clientInstanceId;
    }

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

  /**
   * 查询一个或多个弹性加速计算实例的详细信息
   * 
   * @param request - DescribeEaisRequest
   * @returns DescribeEaisResponse
   */
  async describeEais(request: DescribeEaisRequest): Promise<DescribeEaisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEaisWithOptions(request, runtime);
  }

  /**
   * 查询您可以使用的阿里云地域
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
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

  /**
   * 查询您可以使用的阿里云地域
   * @returns DescribeRegionsResponse
   */
  async describeRegions(): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(runtime);
  }

  /**
   * 从ECS实例上卸载弹性加速计算实例
   * 
   * @param request - DetachEaiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachEaiResponse
   */
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

  /**
   * 从ECS实例上卸载弹性加速计算实例
   * 
   * @param request - DetachEaiRequest
   * @returns DetachEaiResponse
   */
  async detachEai(request: DetachEaiRequest): Promise<DetachEaiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachEaiWithOptions(request, runtime);
  }

  /**
   * 将EI实例与ECS或ECI实例解绑
   * 
   * @param request - DetachEaisEiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachEaisEiResponse
   */
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

  /**
   * 将EI实例与ECS或ECI实例解绑
   * 
   * @param request - DetachEaisEiRequest
   * @returns DetachEaisEiResponse
   */
  async detachEaisEi(request: DetachEaisEiRequest): Promise<DetachEaisEiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachEaisEiWithOptions(request, runtime);
  }

  /**
   * 获取EAIS实例级别的监控数据
   * 
   * @param request - GetInstanceMetricsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceMetricsResponse
   */
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

  /**
   * 获取EAIS实例级别的监控数据
   * 
   * @param request - GetInstanceMetricsRequest
   * @returns GetInstanceMetricsResponse
   */
  async getInstanceMetrics(request: GetInstanceMetricsRequest): Promise<GetInstanceMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceMetricsWithOptions(request, runtime);
  }

  /**
   * 查询标签列表
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
   * 查询标签列表
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * 启动一个部署了notebook的弹性加速计算实例
   * 
   * @param request - StartEaiJupyterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartEaiJupyterResponse
   */
  async startEaiJupyterWithOptions(request: StartEaiJupyterRequest, runtime: $Util.RuntimeOptions): Promise<StartEaiJupyterResponse> {
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
      action: "StartEaiJupyter",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartEaiJupyterResponse>(await this.callApi(params, req, runtime), new StartEaiJupyterResponse({}));
  }

  /**
   * 启动一个部署了notebook的弹性加速计算实例
   * 
   * @param request - StartEaiJupyterRequest
   * @returns StartEaiJupyterResponse
   */
  async startEaiJupyter(request: StartEaiJupyterRequest): Promise<StartEaiJupyterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startEaiJupyterWithOptions(request, runtime);
  }

  /**
   * 启动一个弹性加速计算实例
   * 
   * @param request - StartEaisEiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartEaisEiResponse
   */
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

  /**
   * 启动一个弹性加速计算实例
   * 
   * @param request - StartEaisEiRequest
   * @returns StartEaisEiResponse
   */
  async startEaisEi(request: StartEaisEiRequest): Promise<StartEaisEiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startEaisEiWithOptions(request, runtime);
  }

  /**
   * 停止一个部署了notebook的弹性加速计算实例
   * 
   * @param request - StopEaiJupyterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopEaiJupyterResponse
   */
  async stopEaiJupyterWithOptions(request: StopEaiJupyterRequest, runtime: $Util.RuntimeOptions): Promise<StopEaiJupyterResponse> {
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
      action: "StopEaiJupyter",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopEaiJupyterResponse>(await this.callApi(params, req, runtime), new StopEaiJupyterResponse({}));
  }

  /**
   * 停止一个部署了notebook的弹性加速计算实例
   * 
   * @param request - StopEaiJupyterRequest
   * @returns StopEaiJupyterResponse
   */
  async stopEaiJupyter(request: StopEaiJupyterRequest): Promise<StopEaiJupyterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopEaiJupyterWithOptions(request, runtime);
  }

  /**
   * 停止一个弹性加速计算实例
   * 
   * @param request - StopEaisEiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopEaisEiResponse
   */
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

  /**
   * 停止一个弹性加速计算实例
   * 
   * @param request - StopEaisEiRequest
   * @returns StopEaisEiResponse
   */
  async stopEaisEi(request: StopEaisEiRequest): Promise<StopEaisEiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopEaisEiWithOptions(request, runtime);
  }

  /**
   * 为弹性加速计算实例创建并绑定标签
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * 为弹性加速计算实例创建并绑定标签
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * 解绑并删除标签
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2019-06-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
   * 解绑并删除标签
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
