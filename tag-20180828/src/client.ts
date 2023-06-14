// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AttachPolicyRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  policyId?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  targetId?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      policyId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachPolicyResponseBody extends $tea.Model {
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

export class AttachPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AttachPolicyResponseBody;
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
      body: AttachPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCreatedByEnabledRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCreatedByEnabledResponseBody extends $tea.Model {
  openStatus?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      openStatus: 'OpenStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openStatus: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCreatedByEnabledResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckCreatedByEnabledResponseBody;
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
      body: CheckCreatedByEnabledResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseCreatedByRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseCreatedByResponseBody extends $tea.Model {
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

export class CloseCreatedByResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CloseCreatedByResponseBody;
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
      body: CloseCreatedByResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyRequest extends $tea.Model {
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  policyContent?: string;
  policyDesc?: string;
  policyName?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      policyContent: 'PolicyContent',
      policyDesc: 'PolicyDesc',
      policyName: 'PolicyName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      policyContent: 'string',
      policyDesc: 'string',
      policyName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyResponseBody extends $tea.Model {
  policyId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreatePolicyResponseBody;
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
      body: CreatePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagsRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  tagKeyValueParamList?: CreateTagsRequestTagKeyValueParamList[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      tagKeyValueParamList: 'TagKeyValueParamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      tagKeyValueParamList: { 'type': 'array', 'itemType': CreateTagsRequestTagKeyValueParamList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagsResponseBody extends $tea.Model {
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

export class CreateTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTagsResponseBody;
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
      body: CreateTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  policyId?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      policyId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyResponseBody extends $tea.Model {
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

export class DeletePolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeletePolicyResponseBody;
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
      body: DeletePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTagRequest extends $tea.Model {
  key?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTagResponseBody extends $tea.Model {
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

export class DeleteTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteTagResponseBody;
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
      body: DeleteTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

export class DetachPolicyRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  policyId?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  targetId?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      policyId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachPolicyResponseBody extends $tea.Model {
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

export class DetachPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetachPolicyResponseBody;
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
      body: DetachPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisablePolicyTypeRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisablePolicyTypeResponseBody extends $tea.Model {
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

export class DisablePolicyTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisablePolicyTypeResponseBody;
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
      body: DisablePolicyTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnablePolicyTypeRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnablePolicyTypeResponseBody extends $tea.Model {
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

export class EnablePolicyTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnablePolicyTypeResponseBody;
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
      body: EnablePolicyTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateConfigRuleReportRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  targetId?: string;
  targetType?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      targetId: 'TargetId',
      targetType: 'TargetType',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      targetId: 'string',
      targetType: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateConfigRuleReportResponseBody extends $tea.Model {
  reportId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      reportId: 'ReportId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateConfigRuleReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GenerateConfigRuleReportResponseBody;
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
      body: GenerateConfigRuleReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleReportRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  targetId?: string;
  targetType?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      targetId: 'TargetId',
      targetType: 'TargetType',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      targetId: 'string',
      targetType: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleReportResponseBody extends $tea.Model {
  data?: GetConfigRuleReportResponseBodyData;
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetConfigRuleReportResponseBodyData,
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetConfigRuleReportResponseBody;
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
      body: GetConfigRuleReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEffectivePolicyRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  targetId?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEffectivePolicyResponseBody extends $tea.Model {
  effectivePolicy?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      effectivePolicy: 'EffectivePolicy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectivePolicy: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEffectivePolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetEffectivePolicyResponseBody;
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
      body: GetEffectivePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  policyId?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      policyId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBody extends $tea.Model {
  policy?: GetPolicyResponseBodyPolicy;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: GetPolicyResponseBodyPolicy,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPolicyResponseBody;
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
      body: GetPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyEnableStatusRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyEnableStatusResponseBody extends $tea.Model {
  requestId?: string;
  statusModels?: GetPolicyEnableStatusResponseBodyStatusModels[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statusModels: 'StatusModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statusModels: { 'type': 'array', 'itemType': GetPolicyEnableStatusResponseBodyStatusModels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyEnableStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPolicyEnableStatusResponseBody;
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
      body: GetPolicyEnableStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRulesForTargetRequest extends $tea.Model {
  maxResult?: number;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  policyType?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  tagKey?: string;
  targetId?: string;
  targetType?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResult: 'MaxResult',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      policyType: 'PolicyType',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      tagKey: 'TagKey',
      targetId: 'TargetId',
      targetType: 'TargetType',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResult: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      policyType: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      tagKey: 'string',
      targetId: 'string',
      targetType: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRulesForTargetResponseBody extends $tea.Model {
  data?: ListConfigRulesForTargetResponseBodyData[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListConfigRulesForTargetResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRulesForTargetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListConfigRulesForTargetResponseBody;
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
      body: ListConfigRulesForTargetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesRequest extends $tea.Model {
  maxResult?: number;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  policyIds?: string[];
  policyNames?: string[];
  regionId?: string;
  resourceOwnerAccount?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResult: 'MaxResult',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      policyIds: 'PolicyIds',
      policyNames: 'PolicyNames',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResult: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      policyIds: { 'type': 'array', 'itemType': 'string' },
      policyNames: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceOwnerAccount: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponseBody extends $tea.Model {
  nextToken?: string;
  policyList?: ListPoliciesResponseBodyPolicyList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      policyList: 'PolicyList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      policyList: { 'type': 'array', 'itemType': ListPoliciesResponseBodyPolicyList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPoliciesResponseBody;
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
      body: ListPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesForTargetRequest extends $tea.Model {
  maxResult?: number;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  targetId?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResult: 'MaxResult',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResult: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesForTargetResponseBody extends $tea.Model {
  data?: ListPoliciesForTargetResponseBodyData[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListPoliciesForTargetResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesForTargetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPoliciesForTargetResponseBody;
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
      body: ListPoliciesForTargetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesByTagRequest extends $tea.Model {
  tagFilter?: ListResourcesByTagRequestTagFilter;
  fuzzyType?: string;
  includeAllTags?: boolean;
  maxResult?: number;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      tagFilter: 'TagFilter',
      fuzzyType: 'FuzzyType',
      includeAllTags: 'IncludeAllTags',
      maxResult: 'MaxResult',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagFilter: ListResourcesByTagRequestTagFilter,
      fuzzyType: 'string',
      includeAllTags: 'boolean',
      maxResult: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesByTagResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  resources?: ListResourcesByTagResponseBodyResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': ListResourcesByTagResponseBodyResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesByTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListResourcesByTagResponseBody;
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
      body: ListResourcesByTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportResourceTypesRequest extends $tea.Model {
  maxResult?: number;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  productCode?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceTye?: string;
  showItems?: boolean;
  supportCode?: string;
  static names(): { [key: string]: string } {
    return {
      maxResult: 'MaxResult',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceTye: 'ResourceTye',
      showItems: 'ShowItems',
      supportCode: 'SupportCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResult: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      productCode: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceTye: 'string',
      showItems: 'boolean',
      supportCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportResourceTypesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  supportResourceTypes?: ListSupportResourceTypesResponseBodySupportResourceTypes[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      supportResourceTypes: 'SupportResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      supportResourceTypes: { 'type': 'array', 'itemType': ListSupportResourceTypesResponseBodySupportResourceTypes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportResourceTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSupportResourceTypesResponseBody;
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
      body: ListSupportResourceTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $tea.Model {
  tagFilter?: ListTagKeysRequestTagFilter;
  category?: string;
  fuzzyType?: string;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageSize?: number;
  queryType?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      tagFilter: 'TagFilter',
      category: 'Category',
      fuzzyType: 'FuzzyType',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      queryType: 'QueryType',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagFilter: ListTagKeysRequestTagFilter,
      category: 'string',
      fuzzyType: 'string',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageSize: 'number',
      queryType: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBody extends $tea.Model {
  keys?: ListTagKeysResponseBodyKeys;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keys: 'Keys',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: ListTagKeysResponseBodyKeys,
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTagKeysResponseBody;
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
      body: ListTagKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  category?: string;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageSize?: number;
  regionId?: string;
  resourceARN?: string[];
  resourceOwnerAccount?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceARN: 'ResourceARN',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceARN: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  nextToken?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTagResourcesResponseBody;
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

export class ListTagValuesRequest extends $tea.Model {
  tagFilter?: ListTagValuesRequestTagFilter;
  fuzzyType?: string;
  key?: string;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageSize?: number;
  queryType?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      tagFilter: 'TagFilter',
      fuzzyType: 'FuzzyType',
      key: 'Key',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      queryType: 'QueryType',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagFilter: ListTagValuesRequestTagFilter,
      fuzzyType: 'string',
      key: 'string',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageSize: 'number',
      queryType: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  values?: ListTagValuesResponseBodyValues;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      values: ListTagValuesResponseBodyValues,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTagValuesResponseBody;
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
      body: ListTagValuesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTargetsForPolicyRequest extends $tea.Model {
  maxResult?: number;
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  policyId?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      maxResult: 'MaxResult',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      policyId: 'PolicyId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResult: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      policyId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTargetsForPolicyResponseBody extends $tea.Model {
  isRd?: boolean;
  nextToken?: string;
  rdId?: string;
  requestId?: string;
  targets?: ListTargetsForPolicyResponseBodyTargets[];
  static names(): { [key: string]: string } {
    return {
      isRd: 'IsRd',
      nextToken: 'NextToken',
      rdId: 'RdId',
      requestId: 'RequestId',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isRd: 'boolean',
      nextToken: 'string',
      rdId: 'string',
      requestId: 'string',
      targets: { 'type': 'array', 'itemType': ListTargetsForPolicyResponseBodyTargets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTargetsForPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTargetsForPolicyResponseBody;
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
      body: ListTargetsForPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyRequest extends $tea.Model {
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  policyContent?: string;
  policyDesc?: string;
  policyId?: string;
  policyName?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      policyContent: 'PolicyContent',
      policyDesc: 'PolicyDesc',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      policyContent: 'string',
      policyDesc: 'string',
      policyId: 'string',
      policyName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyResponseBody extends $tea.Model {
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

export class ModifyPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyPolicyResponseBody;
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
      body: ModifyPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenCreatedByRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenCreatedByResponseBody extends $tea.Model {
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

export class OpenCreatedByResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OpenCreatedByResponseBody;
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
      body: OpenCreatedByResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceARN?: string[];
  resourceOwnerAccount?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceARN: 'ResourceARN',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceARN: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  failedResources?: TagResourcesResponseBodyFailedResources;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failedResources: 'FailedResources',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResources: TagResourcesResponseBodyFailedResources,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TagResourcesResponseBody;
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
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceARN?: string[];
  resourceOwnerAccount?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceARN: 'ResourceARN',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceARN: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  failedResources?: UntagResourcesResponseBodyFailedResources;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failedResources: 'FailedResources',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResources: UntagResourcesResponseBodyFailedResources,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UntagResourcesResponseBody;
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

export class CreateTagsRequestTagKeyValueParamListTagValueParamList extends $tea.Model {
  description?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagsRequestTagKeyValueParamList extends $tea.Model {
  description?: string;
  key?: string;
  tagValueParamList?: CreateTagsRequestTagKeyValueParamListTagValueParamList[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      key: 'Key',
      tagValueParamList: 'TagValueParamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      key: 'string',
      tagValueParamList: { 'type': 'array', 'itemType': CreateTagsRequestTagKeyValueParamListTagValueParamList },
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

export class GetConfigRuleReportResponseBodyData extends $tea.Model {
  createdTime?: number;
  reportId?: string;
  targetId?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      reportId: 'ReportId',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'number',
      reportId: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBodyPolicy extends $tea.Model {
  policyContent?: string;
  policyDesc?: string;
  policyName?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      policyContent: 'PolicyContent',
      policyDesc: 'PolicyDesc',
      policyName: 'PolicyName',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyContent: 'string',
      policyDesc: 'string',
      policyName: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyEnableStatusResponseBodyStatusModels extends $tea.Model {
  status?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRulesForTargetResponseBodyData extends $tea.Model {
  aggregatorId?: string;
  configRuleId?: string;
  policyType?: string;
  remediation?: boolean;
  tagKey?: string;
  targetId?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      configRuleId: 'ConfigRuleId',
      policyType: 'PolicyType',
      remediation: 'Remediation',
      tagKey: 'TagKey',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      configRuleId: 'string',
      policyType: 'string',
      remediation: 'boolean',
      tagKey: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponseBodyPolicyList extends $tea.Model {
  policyContent?: string;
  policyDesc?: string;
  policyId?: string;
  policyName?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      policyContent: 'PolicyContent',
      policyDesc: 'PolicyDesc',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyContent: 'string',
      policyDesc: 'string',
      policyId: 'string',
      policyName: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesForTargetResponseBodyData extends $tea.Model {
  policyContent?: string;
  policyDesc?: string;
  policyId?: string;
  policyName?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      policyContent: 'PolicyContent',
      policyDesc: 'PolicyDesc',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyContent: 'string',
      policyDesc: 'string',
      policyId: 'string',
      policyName: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesByTagRequestTagFilter extends $tea.Model {
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

export class ListResourcesByTagResponseBodyResourcesTags extends $tea.Model {
  category?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesByTagResponseBodyResources extends $tea.Model {
  resourceId?: string;
  tags?: ListResourcesByTagResponseBodyResourcesTags[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      tags: { 'type': 'array', 'itemType': ListResourcesByTagResponseBodyResourcesTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportResourceTypesResponseBodySupportResourceTypesSupportItems extends $tea.Model {
  support?: boolean;
  supportCode?: string;
  static names(): { [key: string]: string } {
    return {
      support: 'Support',
      supportCode: 'SupportCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      support: 'boolean',
      supportCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportResourceTypesResponseBodySupportResourceTypes extends $tea.Model {
  productCode?: string;
  resourceType?: string;
  supportItems?: ListSupportResourceTypesResponseBodySupportResourceTypesSupportItems[];
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      resourceType: 'ResourceType',
      supportItems: 'SupportItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      resourceType: 'string',
      supportItems: { 'type': 'array', 'itemType': ListSupportResourceTypesResponseBodySupportResourceTypesSupportItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequestTagFilter extends $tea.Model {
  key?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBodyKeysKey extends $tea.Model {
  category?: string;
  description?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      description: 'Description',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      description: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBodyKeys extends $tea.Model {
  key?: ListTagKeysResponseBodyKeysKey[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: { 'type': 'array', 'itemType': ListTagKeysResponseBodyKeysKey },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResourcesTags extends $tea.Model {
  category?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  resourceARN?: string;
  tags?: ListTagResourcesResponseBodyTagResourcesTags[];
  static names(): { [key: string]: string } {
    return {
      resourceARN: 'ResourceARN',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceARN: 'string',
      tags: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesRequestTagFilter extends $tea.Model {
  value?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponseBodyValues extends $tea.Model {
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTargetsForPolicyResponseBodyTargets extends $tea.Model {
  targetId?: string;
  targetType?: number;
  static names(): { [key: string]: string } {
    return {
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetId: 'string',
      targetType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBodyFailedResourcesFailedResourceResult extends $tea.Model {
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBodyFailedResourcesFailedResource extends $tea.Model {
  resourceARN?: string;
  result?: TagResourcesResponseBodyFailedResourcesFailedResourceResult;
  static names(): { [key: string]: string } {
    return {
      resourceARN: 'ResourceARN',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceARN: 'string',
      result: TagResourcesResponseBodyFailedResourcesFailedResourceResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBodyFailedResources extends $tea.Model {
  failedResource?: TagResourcesResponseBodyFailedResourcesFailedResource[];
  static names(): { [key: string]: string } {
    return {
      failedResource: 'FailedResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResource: { 'type': 'array', 'itemType': TagResourcesResponseBodyFailedResourcesFailedResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBodyFailedResourcesFailedResourceResult extends $tea.Model {
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBodyFailedResourcesFailedResource extends $tea.Model {
  resourceARN?: string;
  result?: UntagResourcesResponseBodyFailedResourcesFailedResourceResult;
  static names(): { [key: string]: string } {
    return {
      resourceARN: 'ResourceARN',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceARN: 'string',
      result: UntagResourcesResponseBodyFailedResourcesFailedResourceResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBodyFailedResources extends $tea.Model {
  failedResource?: UntagResourcesResponseBodyFailedResourcesFailedResource[];
  static names(): { [key: string]: string } {
    return {
      failedResource: 'FailedResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResource: { 'type': 'array', 'itemType': UntagResourcesResponseBodyFailedResourcesFailedResource },
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
      'cn-qingdao': "tag.aliyuncs.com",
      'cn-beijing': "tag.aliyuncs.com",
      'cn-hangzhou': "tag.aliyuncs.com",
      'cn-shanghai': "tag.aliyuncs.com",
      'cn-shenzhen': "tag.aliyuncs.com",
      'cn-hongkong': "tag.aliyuncs.com",
      'ap-southeast-1': "tag.aliyuncs.com",
      'us-west-1': "tag.aliyuncs.com",
      'us-east-1': "tag.aliyuncs.com",
      'cn-hangzhou-finance': "tag.aliyuncs.com",
      'cn-shanghai-finance-1': "tag.aliyuncs.com",
      'ap-northeast-2-pop': "tag.aliyuncs.com",
      'cn-beijing-finance-pop': "tag.aliyuncs.com",
      'cn-beijing-gov-1': "tag.aliyuncs.com",
      'cn-beijing-nu16-b01': "tag.aliyuncs.com",
      'cn-edge-1': "tag.aliyuncs.com",
      'cn-fujian': "tag.aliyuncs.com",
      'cn-haidian-cm12-c01': "tag.aliyuncs.com",
      'cn-hangzhou-bj-b01': "tag.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "tag.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "tag.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "tag.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "tag.aliyuncs.com",
      'cn-hangzhou-test-306': "tag.aliyuncs.com",
      'cn-hongkong-finance-pop': "tag.aliyuncs.com",
      'cn-huhehaote-nebula-1': "tag.aliyuncs.com",
      'cn-shanghai-et15-b01': "tag.aliyuncs.com",
      'cn-shanghai-et2-b01': "tag.aliyuncs.com",
      'cn-shanghai-inner': "tag.aliyuncs.com",
      'cn-shanghai-internal-test-1': "tag.aliyuncs.com",
      'cn-shenzhen-inner': "tag.aliyuncs.com",
      'cn-shenzhen-st4-d01': "tag.aliyuncs.com",
      'cn-shenzhen-su18-b01': "tag.aliyuncs.com",
      'cn-wuhan': "tag.aliyuncs.com",
      'cn-yushanfang': "tag.aliyuncs.com",
      'cn-zhangbei': "tag.aliyuncs.com",
      'cn-zhangbei-na61-b01': "tag.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "tag.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "tag.aliyuncs.com",
      'eu-west-1-oxs': "tag.cn-shenzhen-cloudstone.aliyuncs.com",
      'rus-west-1-pop': "tag.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("tag", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
    * If you use the Tag Policy feature in single-account mode, you can call this API operation to attach a tag policy to the current logon account. If you use the Tag Policy feature in multi-account mode, you can call this API operation to attach a tag policy to the Root folder, a folder other than the Root folder, or a member in a resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](~~417434~~).
    * This topic provides an example on how to call the API operation to attach the tag policy with an ID of `p-de62a0bf400e4b69****` to the current logon account. In this example, the Tag Policy feature in single-account mode is used.
    *
    * @param request AttachPolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AttachPolicyResponse
   */
  async attachPolicyWithOptions(request: AttachPolicyRequest, runtime: $Util.RuntimeOptions): Promise<AttachPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachPolicy",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachPolicyResponse>(await this.callApi(params, req, runtime), new AttachPolicyResponse({}));
  }

  /**
    * If you use the Tag Policy feature in single-account mode, you can call this API operation to attach a tag policy to the current logon account. If you use the Tag Policy feature in multi-account mode, you can call this API operation to attach a tag policy to the Root folder, a folder other than the Root folder, or a member in a resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](~~417434~~).
    * This topic provides an example on how to call the API operation to attach the tag policy with an ID of `p-de62a0bf400e4b69****` to the current logon account. In this example, the Tag Policy feature in single-account mode is used.
    *
    * @param request AttachPolicyRequest
    * @return AttachPolicyResponse
   */
  async attachPolicy(request: AttachPolicyRequest): Promise<AttachPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachPolicyWithOptions(request, runtime);
  }

  async checkCreatedByEnabledWithOptions(request: CheckCreatedByEnabledRequest, runtime: $Util.RuntimeOptions): Promise<CheckCreatedByEnabledResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckCreatedByEnabled",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckCreatedByEnabledResponse>(await this.callApi(params, req, runtime), new CheckCreatedByEnabledResponse({}));
  }

  async checkCreatedByEnabled(request: CheckCreatedByEnabledRequest): Promise<CheckCreatedByEnabledResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkCreatedByEnabledWithOptions(request, runtime);
  }

  async closeCreatedByWithOptions(request: CloseCreatedByRequest, runtime: $Util.RuntimeOptions): Promise<CloseCreatedByResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CloseCreatedBy",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CloseCreatedByResponse>(await this.callApi(params, req, runtime), new CloseCreatedByResponse({}));
  }

  async closeCreatedBy(request: CloseCreatedByRequest): Promise<CloseCreatedByResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.closeCreatedByWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to call the API operation to create a tag policy named `test`. In this example, the Tag Policy feature in multi-account mode is used. The tag policy defines that resources to which the `CostCenter:Beijing` or `CostCenter:Shanghai` tag is added are compliant and other resources are not compliant.
    *
    * @param request CreatePolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreatePolicyResponse
   */
  async createPolicyWithOptions(request: CreatePolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreatePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.policyContent)) {
      query["PolicyContent"] = request.policyContent;
    }

    if (!Util.isUnset(request.policyDesc)) {
      query["PolicyDesc"] = request.policyDesc;
    }

    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePolicy",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePolicyResponse>(await this.callApi(params, req, runtime), new CreatePolicyResponse({}));
  }

  /**
    * This topic provides an example on how to call the API operation to create a tag policy named `test`. In this example, the Tag Policy feature in multi-account mode is used. The tag policy defines that resources to which the `CostCenter:Beijing` or `CostCenter:Shanghai` tag is added are compliant and other resources are not compliant.
    *
    * @param request CreatePolicyRequest
    * @return CreatePolicyResponse
   */
  async createPolicy(request: CreatePolicyRequest): Promise<CreatePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPolicyWithOptions(request, runtime);
  }

  /**
    * The region ID.
    * >  Only `cn-hangzhou` is supported.
    *
    * @param request CreateTagsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateTagsResponse
   */
  async createTagsWithOptions(request: CreateTagsRequest, runtime: $Util.RuntimeOptions): Promise<CreateTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.tagKeyValueParamList)) {
      query["TagKeyValueParamList"] = request.tagKeyValueParamList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTags",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTagsResponse>(await this.callApi(params, req, runtime), new CreateTagsResponse({}));
  }

  /**
    * The region ID.
    * >  Only `cn-hangzhou` is supported.
    *
    * @param request CreateTagsRequest
    * @return CreateTagsResponse
   */
  async createTags(request: CreateTagsRequest): Promise<CreateTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTagsWithOptions(request, runtime);
  }

  /**
    * Before you delete a tag policy, make sure that the tag policy is detached from all objects to which the tag policy is attached. For more information about how to detach a tag policy, see [DetachPolicy](~~429724~~).
    * This topic provides an example on how to call the API operation to delete the tag policy with an ID of `p-557cb141331f41c7****`.
    *
    * @param request DeletePolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeletePolicyResponse
   */
  async deletePolicyWithOptions(request: DeletePolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeletePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePolicy",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePolicyResponse>(await this.callApi(params, req, runtime), new DeletePolicyResponse({}));
  }

  /**
    * Before you delete a tag policy, make sure that the tag policy is detached from all objects to which the tag policy is attached. For more information about how to detach a tag policy, see [DetachPolicy](~~429724~~).
    * This topic provides an example on how to call the API operation to delete the tag policy with an ID of `p-557cb141331f41c7****`.
    *
    * @param request DeletePolicyRequest
    * @return DeletePolicyResponse
   */
  async deletePolicy(request: DeletePolicyRequest): Promise<DeletePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePolicyWithOptions(request, runtime);
  }

  /**
    * The region ID.
    * >  Only `cn-hangzhou` is supported.
    *
    * @param request DeleteTagRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteTagResponse
   */
  async deleteTagWithOptions(request: DeleteTagRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTagResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTag",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTagResponse>(await this.callApi(params, req, runtime), new DeleteTagResponse({}));
  }

  /**
    * The region ID.
    * >  Only `cn-hangzhou` is supported.
    *
    * @param request DeleteTagRequest
    * @return DeleteTagResponse
   */
  async deleteTag(request: DeleteTagRequest): Promise<DeleteTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTagWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2018-08-28",
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

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
    * If you use the Tag Policy feature in single-account mode, you can call this API operation to detach a tag policy from the current logon account. If you use the Tag Policy feature in multi-account mode, you can call this API operation to detach a tag policy from the Root folder, a folder other than the Root folder, or a member in a resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](~~417434~~).
    * This topic provides an example on how to call the API operation to detach the tag policy with an ID of `p-a3381efe2fe34a75****` from the current logon account. In this example, the Tag Policy feature in single-account mode is used.
    *
    * @param request DetachPolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DetachPolicyResponse
   */
  async detachPolicyWithOptions(request: DetachPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DetachPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachPolicy",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachPolicyResponse>(await this.callApi(params, req, runtime), new DetachPolicyResponse({}));
  }

  /**
    * If you use the Tag Policy feature in single-account mode, you can call this API operation to detach a tag policy from the current logon account. If you use the Tag Policy feature in multi-account mode, you can call this API operation to detach a tag policy from the Root folder, a folder other than the Root folder, or a member in a resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](~~417434~~).
    * This topic provides an example on how to call the API operation to detach the tag policy with an ID of `p-a3381efe2fe34a75****` from the current logon account. In this example, the Tag Policy feature in single-account mode is used.
    *
    * @param request DetachPolicyRequest
    * @return DetachPolicyResponse
   */
  async detachPolicy(request: DetachPolicyRequest): Promise<DetachPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachPolicyWithOptions(request, runtime);
  }

  async disablePolicyTypeWithOptions(request: DisablePolicyTypeRequest, runtime: $Util.RuntimeOptions): Promise<DisablePolicyTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisablePolicyType",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisablePolicyTypeResponse>(await this.callApi(params, req, runtime), new DisablePolicyTypeResponse({}));
  }

  async disablePolicyType(request: DisablePolicyTypeRequest): Promise<DisablePolicyTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disablePolicyTypeWithOptions(request, runtime);
  }

  async enablePolicyTypeWithOptions(request: EnablePolicyTypeRequest, runtime: $Util.RuntimeOptions): Promise<EnablePolicyTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnablePolicyType",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnablePolicyTypeResponse>(await this.callApi(params, req, runtime), new EnablePolicyTypeResponse({}));
  }

  async enablePolicyType(request: EnablePolicyTypeRequest): Promise<EnablePolicyTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enablePolicyTypeWithOptions(request, runtime);
  }

  /**
    * If you use the Tag Policy feature in single-account mode, you can call this API operation to generate a resource non-compliance report for the current logon account. If you use the Tag Policy feature in multi-account mode, you can call this API operation to generate a resource non-compliance report for the Root folder, a folder other than the Root folder, or a member in a resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](~~417434~~).
    * This topic provides an example on how to call this API operation to generate a resource non-compliance report for the current logon account. In this example, the Tag Policy feature in single-account mode is used.
    *
    * @param request GenerateConfigRuleReportRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GenerateConfigRuleReportResponse
   */
  async generateConfigRuleReportWithOptions(request: GenerateConfigRuleReportRequest, runtime: $Util.RuntimeOptions): Promise<GenerateConfigRuleReportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateConfigRuleReport",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateConfigRuleReportResponse>(await this.callApi(params, req, runtime), new GenerateConfigRuleReportResponse({}));
  }

  /**
    * If you use the Tag Policy feature in single-account mode, you can call this API operation to generate a resource non-compliance report for the current logon account. If you use the Tag Policy feature in multi-account mode, you can call this API operation to generate a resource non-compliance report for the Root folder, a folder other than the Root folder, or a member in a resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](~~417434~~).
    * This topic provides an example on how to call this API operation to generate a resource non-compliance report for the current logon account. In this example, the Tag Policy feature in single-account mode is used.
    *
    * @param request GenerateConfigRuleReportRequest
    * @return GenerateConfigRuleReportResponse
   */
  async generateConfigRuleReport(request: GenerateConfigRuleReportRequest): Promise<GenerateConfigRuleReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateConfigRuleReportWithOptions(request, runtime);
  }

  /**
    * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the basic information of the resource non-compliance report that is last generated for the account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the basic information of the resource non-compliance report that is last generated for an object in the resource directory. The object can be the Root folder, a folder other than the Root folder, or a member. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](~~417434~~).
    * This topic provides an example on how to call this API operation to query the basic information of the resource non-compliance report that is last generated for the current logon account. In this example, the Tag Policy feature in single-account mode is used. The response shows that the ID of the report is `crp-ao0786618088006c****`.
    *
    * @param request GetConfigRuleReportRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetConfigRuleReportResponse
   */
  async getConfigRuleReportWithOptions(request: GetConfigRuleReportRequest, runtime: $Util.RuntimeOptions): Promise<GetConfigRuleReportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetConfigRuleReport",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetConfigRuleReportResponse>(await this.callApi(params, req, runtime), new GetConfigRuleReportResponse({}));
  }

  /**
    * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the basic information of the resource non-compliance report that is last generated for the account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the basic information of the resource non-compliance report that is last generated for an object in the resource directory. The object can be the Root folder, a folder other than the Root folder, or a member. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](~~417434~~).
    * This topic provides an example on how to call this API operation to query the basic information of the resource non-compliance report that is last generated for the current logon account. In this example, the Tag Policy feature in single-account mode is used. The response shows that the ID of the report is `crp-ao0786618088006c****`.
    *
    * @param request GetConfigRuleReportRequest
    * @return GetConfigRuleReportResponse
   */
  async getConfigRuleReport(request: GetConfigRuleReportRequest): Promise<GetConfigRuleReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConfigRuleReportWithOptions(request, runtime);
  }

  /**
    * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the effective tag policy for the account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the effective tag policy for the Root folder, a folder other than the Root folder, or a member in the resource directory. You can also use a member of a resource directory to call this API operation to query the effective tag policy for the member. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](~~417434~~).
    * An effective tag policy is obtained based on tag policy inheritance. For more information, see [Inheritance of a tag policy and calculation of an effective tag policy](~~417435~~).
    * This topic provides an example on how to call the API operation to query the effective tag policy for the current logon account. In this example, the Tag Policy feature in single-account mode is used.
    *
    * @param request GetEffectivePolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetEffectivePolicyResponse
   */
  async getEffectivePolicyWithOptions(request: GetEffectivePolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetEffectivePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEffectivePolicy",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEffectivePolicyResponse>(await this.callApi(params, req, runtime), new GetEffectivePolicyResponse({}));
  }

  /**
    * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the effective tag policy for the account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the effective tag policy for the Root folder, a folder other than the Root folder, or a member in the resource directory. You can also use a member of a resource directory to call this API operation to query the effective tag policy for the member. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](~~417434~~).
    * An effective tag policy is obtained based on tag policy inheritance. For more information, see [Inheritance of a tag policy and calculation of an effective tag policy](~~417435~~).
    * This topic provides an example on how to call the API operation to query the effective tag policy for the current logon account. In this example, the Tag Policy feature in single-account mode is used.
    *
    * @param request GetEffectivePolicyRequest
    * @return GetEffectivePolicyResponse
   */
  async getEffectivePolicy(request: GetEffectivePolicyRequest): Promise<GetEffectivePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEffectivePolicyWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to call the API operation to query the details of the tag policy with an ID of `p-557cb141331f41c7****`.
    *
    * @param request GetPolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetPolicyResponse
   */
  async getPolicyWithOptions(request: GetPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPolicy",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPolicyResponse>(await this.callApi(params, req, runtime), new GetPolicyResponse({}));
  }

  /**
    * This topic provides an example on how to call the API operation to query the details of the tag policy with an ID of `p-557cb141331f41c7****`.
    *
    * @param request GetPolicyRequest
    * @return GetPolicyResponse
   */
  async getPolicy(request: GetPolicyRequest): Promise<GetPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPolicyWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to call the API operation to query the status of the Tag Policy feature for the current logon account. The response shows that the Tag Policy feature in multi-account mode is enabled for the current logon account.
    *
    * @param request GetPolicyEnableStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetPolicyEnableStatusResponse
   */
  async getPolicyEnableStatusWithOptions(request: GetPolicyEnableStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetPolicyEnableStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPolicyEnableStatus",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPolicyEnableStatusResponse>(await this.callApi(params, req, runtime), new GetPolicyEnableStatusResponse({}));
  }

  /**
    * This topic provides an example on how to call the API operation to query the status of the Tag Policy feature for the current logon account. The response shows that the Tag Policy feature in multi-account mode is enabled for the current logon account.
    *
    * @param request GetPolicyEnableStatusRequest
    * @return GetPolicyEnableStatusResponse
   */
  async getPolicyEnableStatus(request: GetPolicyEnableStatusRequest): Promise<GetPolicyEnableStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPolicyEnableStatusWithOptions(request, runtime);
  }

  /**
    * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the tag detection tasks for the account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the tag detection tasks for the Root folder, a folder other than the Root folder, or a member in the resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](~~417434~~).
    * This topic provides an example on how to call the API operation to query the tag detection tasks for the current logon account. In this example, the Tag Policy feature in single-account mode is used. The response shows that only one tag detection task exists.
    *
    * @param request ListConfigRulesForTargetRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListConfigRulesForTargetResponse
   */
  async listConfigRulesForTargetWithOptions(request: ListConfigRulesForTargetRequest, runtime: $Util.RuntimeOptions): Promise<ListConfigRulesForTargetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResult)) {
      query["MaxResult"] = request.maxResult;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    if (!Util.isUnset(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListConfigRulesForTarget",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListConfigRulesForTargetResponse>(await this.callApi(params, req, runtime), new ListConfigRulesForTargetResponse({}));
  }

  /**
    * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the tag detection tasks for the account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the tag detection tasks for the Root folder, a folder other than the Root folder, or a member in the resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](~~417434~~).
    * This topic provides an example on how to call the API operation to query the tag detection tasks for the current logon account. In this example, the Tag Policy feature in single-account mode is used. The response shows that only one tag detection task exists.
    *
    * @param request ListConfigRulesForTargetRequest
    * @return ListConfigRulesForTargetResponse
   */
  async listConfigRulesForTarget(request: ListConfigRulesForTargetRequest): Promise<ListConfigRulesForTargetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConfigRulesForTargetWithOptions(request, runtime);
  }

  /**
    * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query all tag policies that are created for the account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query all tag policies that are created for the resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](~~417434~~).
    * This topic provides an example on how to call the API operation to query all tag policies that are created for the current logon account. In this example, the Tag Policy feature in single-account mode is used. The response shows that two tag policies are created.
    *
    * @param request ListPoliciesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListPoliciesResponse
   */
  async listPoliciesWithOptions(request: ListPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ListPoliciesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResult)) {
      query["MaxResult"] = request.maxResult;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.policyIds)) {
      query["PolicyIds"] = request.policyIds;
    }

    if (!Util.isUnset(request.policyNames)) {
      query["PolicyNames"] = request.policyNames;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPolicies",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPoliciesResponse>(await this.callApi(params, req, runtime), new ListPoliciesResponse({}));
  }

  /**
    * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query all tag policies that are created for the account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query all tag policies that are created for the resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](~~417434~~).
    * This topic provides an example on how to call the API operation to query all tag policies that are created for the current logon account. In this example, the Tag Policy feature in single-account mode is used. The response shows that two tag policies are created.
    *
    * @param request ListPoliciesRequest
    * @return ListPoliciesResponse
   */
  async listPolicies(request: ListPoliciesRequest): Promise<ListPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPoliciesWithOptions(request, runtime);
  }

  /**
    * For more information about common request parameters, see [Common parameters](~~159973~~).
    *
    * @param request ListPoliciesForTargetRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListPoliciesForTargetResponse
   */
  async listPoliciesForTargetWithOptions(request: ListPoliciesForTargetRequest, runtime: $Util.RuntimeOptions): Promise<ListPoliciesForTargetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResult)) {
      query["MaxResult"] = request.maxResult;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPoliciesForTarget",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPoliciesForTargetResponse>(await this.callApi(params, req, runtime), new ListPoliciesForTargetResponse({}));
  }

  /**
    * For more information about common request parameters, see [Common parameters](~~159973~~).
    *
    * @param request ListPoliciesForTargetRequest
    * @return ListPoliciesForTargetResponse
   */
  async listPoliciesForTarget(request: ListPoliciesForTargetRequest): Promise<ListPoliciesForTargetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPoliciesForTargetWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to call the API operation in the China (Shenzhen) region to query virtual private clouds (VPCs) to which the tag key `k1` is added. The response shows that the tag key is added to two VPCs.
    *
    * @param request ListResourcesByTagRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListResourcesByTagResponse
   */
  async listResourcesByTagWithOptions(request: ListResourcesByTagRequest, runtime: $Util.RuntimeOptions): Promise<ListResourcesByTagResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fuzzyType)) {
      query["FuzzyType"] = request.fuzzyType;
    }

    if (!Util.isUnset(request.includeAllTags)) {
      query["IncludeAllTags"] = request.includeAllTags;
    }

    if (!Util.isUnset(request.maxResult)) {
      query["MaxResult"] = request.maxResult;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagFilter)) {
      query["TagFilter"] = request.tagFilter;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResourcesByTag",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListResourcesByTagResponse>(await this.callApi(params, req, runtime), new ListResourcesByTagResponse({}));
  }

  /**
    * This topic provides an example on how to call the API operation in the China (Shenzhen) region to query virtual private clouds (VPCs) to which the tag key `k1` is added. The response shows that the tag key is added to two VPCs.
    *
    * @param request ListResourcesByTagRequest
    * @return ListResourcesByTagResponse
   */
  async listResourcesByTag(request: ListResourcesByTagRequest): Promise<ListResourcesByTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourcesByTagWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to call the API operation to query the resource types supported by tags.
    *
    * @param request ListSupportResourceTypesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListSupportResourceTypesResponse
   */
  async listSupportResourceTypesWithOptions(request: ListSupportResourceTypesRequest, runtime: $Util.RuntimeOptions): Promise<ListSupportResourceTypesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResult)) {
      query["MaxResult"] = request.maxResult;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceTye)) {
      query["ResourceTye"] = request.resourceTye;
    }

    if (!Util.isUnset(request.showItems)) {
      query["ShowItems"] = request.showItems;
    }

    if (!Util.isUnset(request.supportCode)) {
      query["SupportCode"] = request.supportCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSupportResourceTypes",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSupportResourceTypesResponse>(await this.callApi(params, req, runtime), new ListSupportResourceTypesResponse({}));
  }

  /**
    * This topic provides an example on how to call the API operation to query the resource types supported by tags.
    *
    * @param request ListSupportResourceTypesRequest
    * @return ListSupportResourceTypesResponse
   */
  async listSupportResourceTypes(request: ListSupportResourceTypesRequest): Promise<ListSupportResourceTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSupportResourceTypesWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to call the API operation to query the tag keys in the `cn-hangzhou` region. The response shows that the following tag keys exist: `team`, `k1`, and `k2`.
    *
    * @param request ListTagKeysRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListTagKeysResponse
   */
  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListTagKeysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.fuzzyType)) {
      query["FuzzyType"] = request.fuzzyType;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagFilter)) {
      query["TagFilter"] = request.tagFilter;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagKeys",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagKeysResponse>(await this.callApi(params, req, runtime), new ListTagKeysResponse({}));
  }

  /**
    * This topic provides an example on how to call the API operation to query the tag keys in the `cn-hangzhou` region. The response shows that the following tag keys exist: `team`, `k1`, and `k2`.
    *
    * @param request ListTagKeysRequest
    * @return ListTagKeysResponse
   */
  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to call the API operation to query the tags that are added to resources in the cn-hangzhou region. The response shows the following information:
    * *   The tags `k1:v1` and `k2:v2` are added to the Elastic Compute Service (ECS) instance `i-bp15hr53jws84akg****`.
    * *   The tags `k1:v1` and `k2:v2` are added to the disk `d-bp16cat8zekjocv4****`.
    * *   The tags `k1:v1` and `k2:v2` are added to the virtual private cloud (VPC) `vpc-bp19dd90tkt6tz7wu****`.
    *
    * @param request ListTagResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceARN)) {
      query["ResourceARN"] = request.resourceARN;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2018-08-28",
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
    * This topic provides an example on how to call the API operation to query the tags that are added to resources in the cn-hangzhou region. The response shows the following information:
    * *   The tags `k1:v1` and `k2:v2` are added to the Elastic Compute Service (ECS) instance `i-bp15hr53jws84akg****`.
    * *   The tags `k1:v1` and `k2:v2` are added to the disk `d-bp16cat8zekjocv4****`.
    * *   The tags `k1:v1` and `k2:v2` are added to the virtual private cloud (VPC) `vpc-bp19dd90tkt6tz7wu****`.
    *
    * @param request ListTagResourcesRequest
    * @return ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to call the API operation to query the values of the tag key `k1` in the `cn-hangzhou` region. The response shows that the value of the tag key `k1` is `v1`.
    *
    * @param request ListTagValuesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListTagValuesResponse
   */
  async listTagValuesWithOptions(request: ListTagValuesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagValuesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fuzzyType)) {
      query["FuzzyType"] = request.fuzzyType;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagFilter)) {
      query["TagFilter"] = request.tagFilter;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagValues",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagValuesResponse>(await this.callApi(params, req, runtime), new ListTagValuesResponse({}));
  }

  /**
    * This topic provides an example on how to call the API operation to query the values of the tag key `k1` in the `cn-hangzhou` region. The response shows that the value of the tag key `k1` is `v1`.
    *
    * @param request ListTagValuesRequest
    * @return ListTagValuesResponse
   */
  async listTagValues(request: ListTagValuesRequest): Promise<ListTagValuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  /**
    * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the object to which a tag policy is attached. The object is the current logon account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the objects to which a tag policy is attached. The objects include the Root folder, folders other than the Root folder, and members in the resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](~~417434~~).
    * This topic provides an example on how to call the API operation to query the objects to which the tag policy with an ID of `p-de62a0bf400e4b69****` is attached. In this example, the Tag Policy feature in multi-account mode is used. The response shows that the tag policy is attached to two members in the related resource directory.
    *
    * @param request ListTargetsForPolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListTargetsForPolicyResponse
   */
  async listTargetsForPolicyWithOptions(request: ListTargetsForPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ListTargetsForPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResult)) {
      query["MaxResult"] = request.maxResult;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTargetsForPolicy",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTargetsForPolicyResponse>(await this.callApi(params, req, runtime), new ListTargetsForPolicyResponse({}));
  }

  /**
    * If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the object to which a tag policy is attached. The object is the current logon account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the objects to which a tag policy is attached. The objects include the Root folder, folders other than the Root folder, and members in the resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](~~417434~~).
    * This topic provides an example on how to call the API operation to query the objects to which the tag policy with an ID of `p-de62a0bf400e4b69****` is attached. In this example, the Tag Policy feature in multi-account mode is used. The response shows that the tag policy is attached to two members in the related resource directory.
    *
    * @param request ListTargetsForPolicyRequest
    * @return ListTargetsForPolicyResponse
   */
  async listTargetsForPolicy(request: ListTargetsForPolicyRequest): Promise<ListTargetsForPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTargetsForPolicyWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to call the API operation to change the name of a tag policy to `test`.
    *
    * @param request ModifyPolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyPolicyResponse
   */
  async modifyPolicyWithOptions(request: ModifyPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.policyContent)) {
      query["PolicyContent"] = request.policyContent;
    }

    if (!Util.isUnset(request.policyDesc)) {
      query["PolicyDesc"] = request.policyDesc;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPolicy",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyPolicyResponse>(await this.callApi(params, req, runtime), new ModifyPolicyResponse({}));
  }

  /**
    * This topic provides an example on how to call the API operation to change the name of a tag policy to `test`.
    *
    * @param request ModifyPolicyRequest
    * @return ModifyPolicyResponse
   */
  async modifyPolicy(request: ModifyPolicyRequest): Promise<ModifyPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPolicyWithOptions(request, runtime);
  }

  async openCreatedByWithOptions(request: OpenCreatedByRequest, runtime: $Util.RuntimeOptions): Promise<OpenCreatedByResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OpenCreatedBy",
      version: "2018-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenCreatedByResponse>(await this.callApi(params, req, runtime), new OpenCreatedByResponse({}));
  }

  async openCreatedBy(request: OpenCreatedByRequest): Promise<OpenCreatedByResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openCreatedByWithOptions(request, runtime);
  }

  /**
    * Tags are used to identify resources. Tags allow you to categorize, search for, and aggregate resources that have the same characteristics from different dimensions. This facilitates resource management. For more information, see [Tag overview](~~156983~~).
    * This topic provides an example on how to call the API operation to add the tags `k1:v1` and `k2:v2` to the virtual private cloud (VPC) `vpc-bp19dd90tkt6tz7wu****` in the `cn-hangzhou` region.
    *
    * @param request TagResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceARN)) {
      query["ResourceARN"] = request.resourceARN;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2018-08-28",
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
    * Tags are used to identify resources. Tags allow you to categorize, search for, and aggregate resources that have the same characteristics from different dimensions. This facilitates resource management. For more information, see [Tag overview](~~156983~~).
    * This topic provides an example on how to call the API operation to add the tags `k1:v1` and `k2:v2` to the virtual private cloud (VPC) `vpc-bp19dd90tkt6tz7wu****` in the `cn-hangzhou` region.
    *
    * @param request TagResourcesRequest
    * @return TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
    * After you remove a tag, the tag is automatically deleted within 24 hours if it is not added to other resources.
    * This topic provides an example on how to call the API operation to remove the tag whose tag key is `k1` from the virtual private cloud (VPC) `vpc-bp19dd90tkt6tz7wu****` in the `cn-hangzhou` region.
    *
    * @param request UntagResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceARN)) {
      query["ResourceARN"] = request.resourceARN;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2018-08-28",
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
    * After you remove a tag, the tag is automatically deleted within 24 hours if it is not added to other resources.
    * This topic provides an example on how to call the API operation to remove the tag whose tag key is `k1` from the virtual private cloud (VPC) `vpc-bp19dd90tkt6tz7wu****` in the `cn-hangzhou` region.
    *
    * @param request UntagResourcesRequest
    * @return UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
