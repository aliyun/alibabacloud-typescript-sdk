// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AcceptMemberRequest extends $tea.Model {
  ledgerId?: string;
  keyType?: string;
  publicKey?: string;
  static names(): { [key: string]: string } {
    return {
      ledgerId: 'LedgerId',
      keyType: 'KeyType',
      publicKey: 'PublicKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ledgerId: 'string',
      keyType: 'string',
      publicKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptMemberResponseBody extends $tea.Model {
  memberId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      memberId: 'MemberId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AcceptMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AcceptMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointRequest extends $tea.Model {
  ledgerId?: string;
  vpcId?: string;
  vSwitchId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      ledgerId: 'LedgerId',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ledgerId: 'string',
      vpcId: 'string',
      vSwitchId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointResponseBody extends $tea.Model {
  requestId?: string;
  vpcEndpointId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vpcEndpointId: 'VpcEndpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vpcEndpointId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateVpcEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVpcEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLedgerRequest extends $tea.Model {
  ledgerId?: string;
  static names(): { [key: string]: string } {
    return {
      ledgerId: 'LedgerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ledgerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLedgerResponseBody extends $tea.Model {
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

export class DeleteLedgerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLedgerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLedgerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMemberRequest extends $tea.Model {
  ledgerId?: string;
  memberId?: string;
  static names(): { [key: string]: string } {
    return {
      ledgerId: 'LedgerId',
      memberId: 'MemberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ledgerId: 'string',
      memberId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMemberResponseBody extends $tea.Model {
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

export class DeleteMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcEndpointRequest extends $tea.Model {
  ledgerId?: string;
  vpcId?: string;
  vSwitchId?: string;
  vpcEndpointId?: string;
  static names(): { [key: string]: string } {
    return {
      ledgerId: 'LedgerId',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      vpcEndpointId: 'VpcEndpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ledgerId: 'string',
      vpcId: 'string',
      vSwitchId: 'string',
      vpcEndpointId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcEndpointResponseBody extends $tea.Model {
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

export class DeleteVpcEndpointResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVpcEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVpcEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLedgerRequest extends $tea.Model {
  ledgerId?: string;
  static names(): { [key: string]: string } {
    return {
      ledgerId: 'LedgerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ledgerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLedgerResponseBody extends $tea.Model {
  requestId?: string;
  ledger?: DescribeLedgerResponseBodyLedger;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ledger: 'Ledger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ledger: DescribeLedgerResponseBodyLedger,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLedgerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLedgerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLedgerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLedgersRequest extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLedgersResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  maxResults?: number;
  ledgers?: DescribeLedgersResponseBodyLedgers[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
      ledgers: 'Ledgers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'number',
      ledgers: { 'type': 'array', 'itemType': DescribeLedgersResponseBodyLedgers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLedgersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLedgersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLedgersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
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

export class DescribeRegionsResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeRegionsResponseBodyRegions[];
  errorCode?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      errorCode: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTSARequest extends $tea.Model {
  sequenceWithinLedger?: number;
  static names(): { [key: string]: string } {
    return {
      sequenceWithinLedger: 'SequenceWithinLedger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sequenceWithinLedger: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTSAResponseBody extends $tea.Model {
  requestId?: string;
  TSADetail?: DescribeTSAResponseBodyTSADetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      TSADetail: 'TSADetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      TSADetail: DescribeTSAResponseBodyTSADetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTSAResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTSAResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTSAResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableMemberRequest extends $tea.Model {
  ledgerId?: string;
  memberId?: string;
  static names(): { [key: string]: string } {
    return {
      ledgerId: 'LedgerId',
      memberId: 'MemberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ledgerId: 'string',
      memberId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableMemberResponseBody extends $tea.Model {
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

export class DisableMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableMemberRequest extends $tea.Model {
  ledgerId?: string;
  memberId?: string;
  static names(): { [key: string]: string } {
    return {
      ledgerId: 'LedgerId',
      memberId: 'MemberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ledgerId: 'string',
      memberId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableMemberResponseBody extends $tea.Model {
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

export class EnableMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessAttributeRequest extends $tea.Model {
  ledgerId?: string;
  static names(): { [key: string]: string } {
    return {
      ledgerId: 'LedgerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ledgerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessAttributeResponseBody extends $tea.Model {
  enableOpenAccess?: string;
  requestId?: string;
  ledgerId?: string;
  openUri?: string;
  static names(): { [key: string]: string } {
    return {
      enableOpenAccess: 'EnableOpenAccess',
      requestId: 'RequestId',
      ledgerId: 'LedgerId',
      openUri: 'OpenUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableOpenAccess: 'string',
      requestId: 'string',
      ledgerId: 'string',
      openUri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAccessAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAccessAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpWhiteListRequest extends $tea.Model {
  ledgerId?: string;
  static names(): { [key: string]: string } {
    return {
      ledgerId: 'LedgerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ledgerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpWhiteListResponseBody extends $tea.Model {
  requestId?: string;
  ipList?: string;
  ledgerId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ipList: 'IpList',
      ledgerId: 'LedgerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ipList: 'string',
      ledgerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIpWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetIpWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetIpWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJournalRequest extends $tea.Model {
  ledgerId?: string;
  journalId?: number;
  static names(): { [key: string]: string } {
    return {
      ledgerId: 'LedgerId',
      journalId: 'JournalId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ledgerId: 'string',
      journalId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJournalResponseBody extends $tea.Model {
  requestId?: string;
  journal?: GetJournalResponseBodyJournal;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      journal: 'Journal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      journal: GetJournalResponseBodyJournal,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJournalResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetJournalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetJournalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemberRequest extends $tea.Model {
  ledgerId?: string;
  memberId?: string;
  static names(): { [key: string]: string } {
    return {
      ledgerId: 'LedgerId',
      memberId: 'MemberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ledgerId: 'string',
      memberId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemberResponseBody extends $tea.Model {
  KMSKeyId?: string;
  keyType?: string;
  requestId?: string;
  publicKey?: string;
  createTime?: number;
  ledgerId?: string;
  keySource?: string;
  role?: string;
  memberId?: string;
  state?: string;
  updateTime?: number;
  KMSKeyVersion?: string;
  keyMeta?: string;
  aliUid?: string;
  static names(): { [key: string]: string } {
    return {
      KMSKeyId: 'KMSKeyId',
      keyType: 'KeyType',
      requestId: 'RequestId',
      publicKey: 'PublicKey',
      createTime: 'CreateTime',
      ledgerId: 'LedgerId',
      keySource: 'KeySource',
      role: 'Role',
      memberId: 'MemberId',
      state: 'State',
      updateTime: 'UpdateTime',
      KMSKeyVersion: 'KMSKeyVersion',
      keyMeta: 'KeyMeta',
      aliUid: 'AliUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      KMSKeyId: 'string',
      keyType: 'string',
      requestId: 'string',
      publicKey: 'string',
      createTime: 'number',
      ledgerId: 'string',
      keySource: 'string',
      role: 'string',
      memberId: 'string',
      state: 'string',
      updateTime: 'number',
      KMSKeyVersion: 'string',
      keyMeta: 'string',
      aliUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantServiceLinkedRoleRequest extends $tea.Model {
  ledgerId?: string;
  static names(): { [key: string]: string } {
    return {
      ledgerId: 'LedgerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ledgerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantServiceLinkedRoleResponseBody extends $tea.Model {
  SLRStatus?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      SLRStatus: 'SLRStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SLRStatus: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantServiceLinkedRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GrantServiceLinkedRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GrantServiceLinkedRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteMembersRequest extends $tea.Model {
  ledgerId?: string;
  aliUids?: string;
  static names(): { [key: string]: string } {
    return {
      ledgerId: 'LedgerId',
      aliUids: 'AliUids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ledgerId: 'string',
      aliUids: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteMembersResponseBody extends $tea.Model {
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

export class InviteMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InviteMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InviteMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJournalsRequest extends $tea.Model {
  ledgerId?: string;
  clue?: string;
  memberId?: string;
  nextToken?: string;
  maxResults?: number;
  reverse?: boolean;
  static names(): { [key: string]: string } {
    return {
      ledgerId: 'LedgerId',
      clue: 'Clue',
      memberId: 'MemberId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      reverse: 'Reverse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ledgerId: 'string',
      clue: 'string',
      memberId: 'string',
      nextToken: 'string',
      maxResults: 'number',
      reverse: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJournalsResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  maxResults?: number;
  journals?: ListJournalsResponseBodyJournals[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
      journals: 'Journals',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'number',
      journals: { 'type': 'array', 'itemType': ListJournalsResponseBodyJournals },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJournalsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListJournalsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListJournalsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersRequest extends $tea.Model {
  ledgerId?: string;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      ledgerId: 'LedgerId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ledgerId: 'string',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  maxResults?: number;
  members?: ListMembersResponseBodyMembers[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
      members: 'Members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'number',
      members: { 'type': 'array', 'itemType': ListMembersResponseBodyMembers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTimeAnchorsRequest extends $tea.Model {
  ledgerId?: string;
  reverse?: boolean;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      ledgerId: 'LedgerId',
      reverse: 'Reverse',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ledgerId: 'string',
      reverse: 'boolean',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTimeAnchorsResponseBody extends $tea.Model {
  timeAnchors?: ListTimeAnchorsResponseBodyTimeAnchors[];
  nextToken?: string;
  requestId?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      timeAnchors: 'TimeAnchors',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeAnchors: { 'type': 'array', 'itemType': ListTimeAnchorsResponseBodyTimeAnchors },
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTimeAnchorsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTimeAnchorsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTimeAnchorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointsRequest extends $tea.Model {
  ledgerId?: string;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      ledgerId: 'LedgerId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ledgerId: 'string',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointsResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  vpcEndpoints?: ListVpcEndpointsResponseBodyVpcEndpoints[];
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      vpcEndpoints: 'VpcEndpoints',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      vpcEndpoints: { 'type': 'array', 'itemType': ListVpcEndpointsResponseBodyVpcEndpoints },
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVpcEndpointsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVpcEndpointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccessAttributeRequest extends $tea.Model {
  ledgerId?: string;
  enableOpenAccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      ledgerId: 'LedgerId',
      enableOpenAccess: 'EnableOpenAccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ledgerId: 'string',
      enableOpenAccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccessAttributeResponseBody extends $tea.Model {
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

export class ModifyAccessAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyAccessAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyAccessAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIpWhiteListRequest extends $tea.Model {
  ledgerId?: string;
  modifyType?: string;
  ipList?: string;
  static names(): { [key: string]: string } {
    return {
      ledgerId: 'LedgerId',
      modifyType: 'ModifyType',
      ipList: 'IpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ledgerId: 'string',
      modifyType: 'string',
      ipList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIpWhiteListResponseBody extends $tea.Model {
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

export class ModifyIpWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyIpWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyIpWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLedgerAttributeRequest extends $tea.Model {
  ledgerId?: string;
  ledgerName?: string;
  ledgerDescription?: string;
  static names(): { [key: string]: string } {
    return {
      ledgerId: 'LedgerId',
      ledgerName: 'LedgerName',
      ledgerDescription: 'LedgerDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ledgerId: 'string',
      ledgerName: 'string',
      ledgerDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLedgerAttributeResponseBody extends $tea.Model {
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

export class ModifyLedgerAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyLedgerAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyLedgerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMemberACLsRequest extends $tea.Model {
  ledgerId?: string;
  memberId?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      ledgerId: 'LedgerId',
      memberId: 'MemberId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ledgerId: 'string',
      memberId: 'string',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMemberACLsResponseBody extends $tea.Model {
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

export class ModifyMemberACLsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyMemberACLsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyMemberACLsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMemberKeyRequest extends $tea.Model {
  ledgerId?: string;
  memberId?: string;
  keyType?: string;
  publicKey?: string;
  static names(): { [key: string]: string } {
    return {
      ledgerId: 'LedgerId',
      memberId: 'MemberId',
      keyType: 'KeyType',
      publicKey: 'PublicKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ledgerId: 'string',
      memberId: 'string',
      keyType: 'string',
      publicKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMemberKeyResponseBody extends $tea.Model {
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

export class ModifyMemberKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyMemberKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyMemberKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMemberKeyByKMSRequest extends $tea.Model {
  ledgerId?: string;
  memberId?: string;
  keyType?: string;
  KMSKeyId?: string;
  KMSKeyVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ledgerId: 'LedgerId',
      memberId: 'MemberId',
      keyType: 'KeyType',
      KMSKeyId: 'KMSKeyId',
      KMSKeyVersion: 'KMSKeyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ledgerId: 'string',
      memberId: 'string',
      keyType: 'string',
      KMSKeyId: 'string',
      KMSKeyVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMemberKeyByKMSResponseBody extends $tea.Model {
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

export class UpdateMemberKeyByKMSResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateMemberKeyByKMSResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateMemberKeyByKMSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLedgerResponseBodyLedgerLastTimeAnchor extends $tea.Model {
  journalId?: string;
  ledgerVersion?: string;
  timeStamp?: string;
  ledgerDigest?: string;
  ledgerDigestType?: string;
  proof?: string;
  static names(): { [key: string]: string } {
    return {
      journalId: 'JournalId',
      ledgerVersion: 'LedgerVersion',
      timeStamp: 'TimeStamp',
      ledgerDigest: 'LedgerDigest',
      ledgerDigestType: 'LedgerDigestType',
      proof: 'Proof',
    };
  }

  static types(): { [key: string]: any } {
    return {
      journalId: 'string',
      ledgerVersion: 'string',
      timeStamp: 'string',
      ledgerDigest: 'string',
      ledgerDigestType: 'string',
      proof: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLedgerResponseBodyLedger extends $tea.Model {
  storageClass?: string;
  updateTime?: string;
  journalCount?: number;
  ledgerDescription?: string;
  createTime?: string;
  ledgerType?: string;
  lastTimeAnchor?: DescribeLedgerResponseBodyLedgerLastTimeAnchor;
  ledgerId?: string;
  regionId?: string;
  memberCount?: number;
  ledgerStatus?: string;
  timeAnchorCount?: number;
  zoneId?: string;
  ledgerName?: string;
  ownerAliUid?: string;
  static names(): { [key: string]: string } {
    return {
      storageClass: 'StorageClass',
      updateTime: 'UpdateTime',
      journalCount: 'JournalCount',
      ledgerDescription: 'LedgerDescription',
      createTime: 'CreateTime',
      ledgerType: 'LedgerType',
      lastTimeAnchor: 'LastTimeAnchor',
      ledgerId: 'LedgerId',
      regionId: 'RegionId',
      memberCount: 'MemberCount',
      ledgerStatus: 'LedgerStatus',
      timeAnchorCount: 'TimeAnchorCount',
      zoneId: 'ZoneId',
      ledgerName: 'LedgerName',
      ownerAliUid: 'OwnerAliUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageClass: 'string',
      updateTime: 'string',
      journalCount: 'number',
      ledgerDescription: 'string',
      createTime: 'string',
      ledgerType: 'string',
      lastTimeAnchor: DescribeLedgerResponseBodyLedgerLastTimeAnchor,
      ledgerId: 'string',
      regionId: 'string',
      memberCount: 'number',
      ledgerStatus: 'string',
      timeAnchorCount: 'number',
      zoneId: 'string',
      ledgerName: 'string',
      ownerAliUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLedgersResponseBodyLedgersLastTimeAnchor extends $tea.Model {
  journalId?: string;
  ledgerVersion?: string;
  timeStamp?: string;
  ledgerDigest?: string;
  ledgerDigestType?: string;
  proof?: string;
  static names(): { [key: string]: string } {
    return {
      journalId: 'JournalId',
      ledgerVersion: 'LedgerVersion',
      timeStamp: 'TimeStamp',
      ledgerDigest: 'LedgerDigest',
      ledgerDigestType: 'LedgerDigestType',
      proof: 'Proof',
    };
  }

  static types(): { [key: string]: any } {
    return {
      journalId: 'string',
      ledgerVersion: 'string',
      timeStamp: 'string',
      ledgerDigest: 'string',
      ledgerDigestType: 'string',
      proof: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLedgersResponseBodyLedgers extends $tea.Model {
  storageClass?: string;
  updateTime?: string;
  journalCount?: number;
  ledgerDescription?: string;
  createTime?: string;
  ledgerType?: string;
  lastTimeAnchor?: DescribeLedgersResponseBodyLedgersLastTimeAnchor;
  ledgerId?: string;
  regionId?: string;
  memberCount?: number;
  ledgerStatus?: string;
  timeAnchorCount?: number;
  zoneId?: string;
  ledgerName?: string;
  ownerAliUid?: string;
  static names(): { [key: string]: string } {
    return {
      storageClass: 'StorageClass',
      updateTime: 'UpdateTime',
      journalCount: 'JournalCount',
      ledgerDescription: 'LedgerDescription',
      createTime: 'CreateTime',
      ledgerType: 'LedgerType',
      lastTimeAnchor: 'LastTimeAnchor',
      ledgerId: 'LedgerId',
      regionId: 'RegionId',
      memberCount: 'MemberCount',
      ledgerStatus: 'LedgerStatus',
      timeAnchorCount: 'TimeAnchorCount',
      zoneId: 'ZoneId',
      ledgerName: 'LedgerName',
      ownerAliUid: 'OwnerAliUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageClass: 'string',
      updateTime: 'string',
      journalCount: 'number',
      ledgerDescription: 'string',
      createTime: 'string',
      ledgerType: 'string',
      lastTimeAnchor: DescribeLedgersResponseBodyLedgersLastTimeAnchor,
      ledgerId: 'string',
      regionId: 'string',
      memberCount: 'number',
      ledgerStatus: 'string',
      timeAnchorCount: 'number',
      zoneId: 'string',
      ledgerName: 'string',
      ownerAliUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
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

export class DescribeTSAResponseBodyTSADetail extends $tea.Model {
  TS?: number;
  SN?: string;
  rootHash?: string;
  blockNumber?: number;
  CTSR?: string;
  static names(): { [key: string]: string } {
    return {
      TS: 'TS',
      SN: 'SN',
      rootHash: 'RootHash',
      blockNumber: 'BlockNumber',
      CTSR: 'CTSR',
    };
  }

  static types(): { [key: string]: any } {
    return {
      TS: 'number',
      SN: 'string',
      rootHash: 'string',
      blockNumber: 'number',
      CTSR: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJournalResponseBodyJournal extends $tea.Model {
  journalId?: string;
  clues?: string[];
  payloadJsonString?: string;
  journalHash?: string;
  timestamp?: number;
  ledgerId?: string;
  memberId?: string;
  payloadType?: string;
  clientId?: string;
  static names(): { [key: string]: string } {
    return {
      journalId: 'JournalId',
      clues: 'Clues',
      payloadJsonString: 'PayloadJsonString',
      journalHash: 'JournalHash',
      timestamp: 'Timestamp',
      ledgerId: 'LedgerId',
      memberId: 'MemberId',
      payloadType: 'PayloadType',
      clientId: 'ClientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      journalId: 'string',
      clues: { 'type': 'array', 'itemType': 'string' },
      payloadJsonString: 'string',
      journalHash: 'string',
      timestamp: 'number',
      ledgerId: 'string',
      memberId: 'string',
      payloadType: 'string',
      clientId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJournalsResponseBodyJournals extends $tea.Model {
  journalId?: string;
  clues?: string[];
  payloadJsonString?: string;
  journalHash?: string;
  timestamp?: number;
  ledgerId?: string;
  memberId?: string;
  payloadType?: string;
  clientId?: string;
  static names(): { [key: string]: string } {
    return {
      journalId: 'JournalId',
      clues: 'Clues',
      payloadJsonString: 'PayloadJsonString',
      journalHash: 'JournalHash',
      timestamp: 'Timestamp',
      ledgerId: 'LedgerId',
      memberId: 'MemberId',
      payloadType: 'PayloadType',
      clientId: 'ClientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      journalId: 'string',
      clues: { 'type': 'array', 'itemType': 'string' },
      payloadJsonString: 'string',
      journalHash: 'string',
      timestamp: 'number',
      ledgerId: 'string',
      memberId: 'string',
      payloadType: 'string',
      clientId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersResponseBodyMembers extends $tea.Model {
  updateTime?: number;
  keyType?: string;
  state?: string;
  createTime?: number;
  publicKey?: string;
  aliUid?: string;
  memberId?: string;
  ledgerId?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      keyType: 'KeyType',
      state: 'State',
      createTime: 'CreateTime',
      publicKey: 'PublicKey',
      aliUid: 'AliUid',
      memberId: 'MemberId',
      ledgerId: 'LedgerId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      keyType: 'string',
      state: 'string',
      createTime: 'number',
      publicKey: 'string',
      aliUid: 'string',
      memberId: 'string',
      ledgerId: 'string',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTimeAnchorsResponseBodyTimeAnchors extends $tea.Model {
  journalId?: number;
  ledgerVersion?: number;
  timeStamp?: number;
  ledgerDigest?: string;
  ledgerDigestType?: string;
  proof?: string;
  static names(): { [key: string]: string } {
    return {
      journalId: 'JournalId',
      ledgerVersion: 'LedgerVersion',
      timeStamp: 'TimeStamp',
      ledgerDigest: 'LedgerDigest',
      ledgerDigestType: 'LedgerDigestType',
      proof: 'Proof',
    };
  }

  static types(): { [key: string]: any } {
    return {
      journalId: 'number',
      ledgerVersion: 'number',
      timeStamp: 'number',
      ledgerDigest: 'string',
      ledgerDigestType: 'string',
      proof: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointsResponseBodyVpcEndpoints extends $tea.Model {
  status?: string;
  vpcId?: string;
  vSwitchId?: string;
  createTime?: number;
  address?: string;
  vpcEndpointId?: string;
  memberId?: string;
  ledgerId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      createTime: 'CreateTime',
      address: 'Address',
      vpcEndpointId: 'VpcEndpointId',
      memberId: 'MemberId',
      ledgerId: 'LedgerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      vpcId: 'string',
      vSwitchId: 'string',
      createTime: 'number',
      address: 'string',
      vpcEndpointId: 'string',
      memberId: 'string',
      ledgerId: 'string',
      regionId: 'string',
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
    this._endpoint = this.getEndpoint("ledgerdb", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async acceptMemberWithOptions(request: AcceptMemberRequest, runtime: $Util.RuntimeOptions): Promise<AcceptMemberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AcceptMemberResponse>(await this.doRPCRequest("AcceptMember", "2019-11-22", "HTTPS", "POST", "AK", "json", req, runtime), new AcceptMemberResponse({}));
  }

  async acceptMember(request: AcceptMemberRequest): Promise<AcceptMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.acceptMemberWithOptions(request, runtime);
  }

  async createVpcEndpointWithOptions(request: CreateVpcEndpointRequest, runtime: $Util.RuntimeOptions): Promise<CreateVpcEndpointResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVpcEndpointResponse>(await this.doRPCRequest("CreateVpcEndpoint", "2019-11-22", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVpcEndpointResponse({}));
  }

  async createVpcEndpoint(request: CreateVpcEndpointRequest): Promise<CreateVpcEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVpcEndpointWithOptions(request, runtime);
  }

  async deleteLedgerWithOptions(request: DeleteLedgerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLedgerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLedgerResponse>(await this.doRPCRequest("DeleteLedger", "2019-11-22", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLedgerResponse({}));
  }

  async deleteLedger(request: DeleteLedgerRequest): Promise<DeleteLedgerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLedgerWithOptions(request, runtime);
  }

  async deleteMemberWithOptions(request: DeleteMemberRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMemberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteMemberResponse>(await this.doRPCRequest("DeleteMember", "2019-11-22", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteMemberResponse({}));
  }

  async deleteMember(request: DeleteMemberRequest): Promise<DeleteMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMemberWithOptions(request, runtime);
  }

  async deleteVpcEndpointWithOptions(request: DeleteVpcEndpointRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVpcEndpointResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVpcEndpointResponse>(await this.doRPCRequest("DeleteVpcEndpoint", "2019-11-22", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVpcEndpointResponse({}));
  }

  async deleteVpcEndpoint(request: DeleteVpcEndpointRequest): Promise<DeleteVpcEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVpcEndpointWithOptions(request, runtime);
  }

  async describeLedgerWithOptions(request: DescribeLedgerRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLedgerResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeLedgerResponse>(await this.doRPCRequest("DescribeLedger", "2019-11-22", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeLedgerResponse({}));
  }

  async describeLedger(request: DescribeLedgerRequest): Promise<DescribeLedgerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLedgerWithOptions(request, runtime);
  }

  async describeLedgersWithOptions(request: DescribeLedgersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLedgersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeLedgersResponse>(await this.doRPCRequest("DescribeLedgers", "2019-11-22", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeLedgersResponse({}));
  }

  async describeLedgers(request: DescribeLedgersRequest): Promise<DescribeLedgersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLedgersWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2019-11-22", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeTSAWithOptions(request: DescribeTSARequest, runtime: $Util.RuntimeOptions): Promise<DescribeTSAResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTSAResponse>(await this.doRPCRequest("DescribeTSA", "2019-11-22", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTSAResponse({}));
  }

  async describeTSA(request: DescribeTSARequest): Promise<DescribeTSAResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTSAWithOptions(request, runtime);
  }

  async disableMemberWithOptions(request: DisableMemberRequest, runtime: $Util.RuntimeOptions): Promise<DisableMemberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableMemberResponse>(await this.doRPCRequest("DisableMember", "2019-11-22", "HTTPS", "POST", "AK", "json", req, runtime), new DisableMemberResponse({}));
  }

  async disableMember(request: DisableMemberRequest): Promise<DisableMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableMemberWithOptions(request, runtime);
  }

  async enableMemberWithOptions(request: EnableMemberRequest, runtime: $Util.RuntimeOptions): Promise<EnableMemberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableMemberResponse>(await this.doRPCRequest("EnableMember", "2019-11-22", "HTTPS", "POST", "AK", "json", req, runtime), new EnableMemberResponse({}));
  }

  async enableMember(request: EnableMemberRequest): Promise<EnableMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableMemberWithOptions(request, runtime);
  }

  async getAccessAttributeWithOptions(request: GetAccessAttributeRequest, runtime: $Util.RuntimeOptions): Promise<GetAccessAttributeResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAccessAttributeResponse>(await this.doRPCRequest("GetAccessAttribute", "2019-11-22", "HTTPS", "GET", "AK", "json", req, runtime), new GetAccessAttributeResponse({}));
  }

  async getAccessAttribute(request: GetAccessAttributeRequest): Promise<GetAccessAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccessAttributeWithOptions(request, runtime);
  }

  async getIpWhiteListWithOptions(request: GetIpWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<GetIpWhiteListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetIpWhiteListResponse>(await this.doRPCRequest("GetIpWhiteList", "2019-11-22", "HTTPS", "GET", "AK", "json", req, runtime), new GetIpWhiteListResponse({}));
  }

  async getIpWhiteList(request: GetIpWhiteListRequest): Promise<GetIpWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIpWhiteListWithOptions(request, runtime);
  }

  async getJournalWithOptions(request: GetJournalRequest, runtime: $Util.RuntimeOptions): Promise<GetJournalResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetJournalResponse>(await this.doRPCRequest("GetJournal", "2019-11-22", "HTTPS", "GET", "AK", "json", req, runtime), new GetJournalResponse({}));
  }

  async getJournal(request: GetJournalRequest): Promise<GetJournalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJournalWithOptions(request, runtime);
  }

  async getMemberWithOptions(request: GetMemberRequest, runtime: $Util.RuntimeOptions): Promise<GetMemberResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetMemberResponse>(await this.doRPCRequest("GetMember", "2019-11-22", "HTTPS", "GET", "AK", "json", req, runtime), new GetMemberResponse({}));
  }

  async getMember(request: GetMemberRequest): Promise<GetMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMemberWithOptions(request, runtime);
  }

  async grantServiceLinkedRoleWithOptions(request: GrantServiceLinkedRoleRequest, runtime: $Util.RuntimeOptions): Promise<GrantServiceLinkedRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GrantServiceLinkedRoleResponse>(await this.doRPCRequest("GrantServiceLinkedRole", "2019-11-22", "HTTPS", "POST", "AK", "json", req, runtime), new GrantServiceLinkedRoleResponse({}));
  }

  async grantServiceLinkedRole(request: GrantServiceLinkedRoleRequest): Promise<GrantServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantServiceLinkedRoleWithOptions(request, runtime);
  }

  async inviteMembersWithOptions(request: InviteMembersRequest, runtime: $Util.RuntimeOptions): Promise<InviteMembersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InviteMembersResponse>(await this.doRPCRequest("InviteMembers", "2019-11-22", "HTTPS", "POST", "AK", "json", req, runtime), new InviteMembersResponse({}));
  }

  async inviteMembers(request: InviteMembersRequest): Promise<InviteMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.inviteMembersWithOptions(request, runtime);
  }

  async listJournalsWithOptions(request: ListJournalsRequest, runtime: $Util.RuntimeOptions): Promise<ListJournalsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListJournalsResponse>(await this.doRPCRequest("ListJournals", "2019-11-22", "HTTPS", "GET", "AK", "json", req, runtime), new ListJournalsResponse({}));
  }

  async listJournals(request: ListJournalsRequest): Promise<ListJournalsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJournalsWithOptions(request, runtime);
  }

  async listMembersWithOptions(request: ListMembersRequest, runtime: $Util.RuntimeOptions): Promise<ListMembersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListMembersResponse>(await this.doRPCRequest("ListMembers", "2019-11-22", "HTTPS", "GET", "AK", "json", req, runtime), new ListMembersResponse({}));
  }

  async listMembers(request: ListMembersRequest): Promise<ListMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMembersWithOptions(request, runtime);
  }

  async listTimeAnchorsWithOptions(request: ListTimeAnchorsRequest, runtime: $Util.RuntimeOptions): Promise<ListTimeAnchorsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListTimeAnchorsResponse>(await this.doRPCRequest("ListTimeAnchors", "2019-11-22", "HTTPS", "GET", "AK", "json", req, runtime), new ListTimeAnchorsResponse({}));
  }

  async listTimeAnchors(request: ListTimeAnchorsRequest): Promise<ListTimeAnchorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTimeAnchorsWithOptions(request, runtime);
  }

  async listVpcEndpointsWithOptions(request: ListVpcEndpointsRequest, runtime: $Util.RuntimeOptions): Promise<ListVpcEndpointsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListVpcEndpointsResponse>(await this.doRPCRequest("ListVpcEndpoints", "2019-11-22", "HTTPS", "GET", "AK", "json", req, runtime), new ListVpcEndpointsResponse({}));
  }

  async listVpcEndpoints(request: ListVpcEndpointsRequest): Promise<ListVpcEndpointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVpcEndpointsWithOptions(request, runtime);
  }

  async modifyAccessAttributeWithOptions(request: ModifyAccessAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccessAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyAccessAttributeResponse>(await this.doRPCRequest("ModifyAccessAttribute", "2019-11-22", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAccessAttributeResponse({}));
  }

  async modifyAccessAttribute(request: ModifyAccessAttributeRequest): Promise<ModifyAccessAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccessAttributeWithOptions(request, runtime);
  }

  async modifyIpWhiteListWithOptions(request: ModifyIpWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<ModifyIpWhiteListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyIpWhiteListResponse>(await this.doRPCRequest("ModifyIpWhiteList", "2019-11-22", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyIpWhiteListResponse({}));
  }

  async modifyIpWhiteList(request: ModifyIpWhiteListRequest): Promise<ModifyIpWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyIpWhiteListWithOptions(request, runtime);
  }

  async modifyLedgerAttributeWithOptions(request: ModifyLedgerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLedgerAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyLedgerAttributeResponse>(await this.doRPCRequest("ModifyLedgerAttribute", "2019-11-22", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyLedgerAttributeResponse({}));
  }

  async modifyLedgerAttribute(request: ModifyLedgerAttributeRequest): Promise<ModifyLedgerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLedgerAttributeWithOptions(request, runtime);
  }

  async modifyMemberACLsWithOptions(request: ModifyMemberACLsRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMemberACLsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyMemberACLsResponse>(await this.doRPCRequest("ModifyMemberACLs", "2019-11-22", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyMemberACLsResponse({}));
  }

  async modifyMemberACLs(request: ModifyMemberACLsRequest): Promise<ModifyMemberACLsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMemberACLsWithOptions(request, runtime);
  }

  async modifyMemberKeyWithOptions(request: ModifyMemberKeyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMemberKeyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyMemberKeyResponse>(await this.doRPCRequest("ModifyMemberKey", "2019-11-22", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyMemberKeyResponse({}));
  }

  async modifyMemberKey(request: ModifyMemberKeyRequest): Promise<ModifyMemberKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMemberKeyWithOptions(request, runtime);
  }

  async updateMemberKeyByKMSWithOptions(request: UpdateMemberKeyByKMSRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMemberKeyByKMSResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateMemberKeyByKMSResponse>(await this.doRPCRequest("UpdateMemberKeyByKMS", "2019-11-22", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateMemberKeyByKMSResponse({}));
  }

  async updateMemberKeyByKMS(request: UpdateMemberKeyByKMSRequest): Promise<UpdateMemberKeyByKMSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMemberKeyByKMSWithOptions(request, runtime);
  }

}
