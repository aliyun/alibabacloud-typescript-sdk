// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DescribeBootRequest extends $tea.Model {
  propertyUuid?: string;
  static names(): { [key: string]: string } {
    return {
      propertyUuid: 'PropertyUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBootResponseBody extends $tea.Model {
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  requestId?: string;
  whiteListAffiliation?: number;
  whiteListDetail?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      requestId: 'RequestId',
      whiteListAffiliation: 'WhiteListAffiliation',
      whiteListDetail: 'WhiteListDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      requestId: 'string',
      whiteListAffiliation: 'number',
      whiteListDetail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBootResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeBootResponseBody;
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
      body: DescribeBootResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsRequest extends $tea.Model {
  createEndDate?: number;
  createStartDate?: number;
  currentPage?: number;
  eventAffiliation?: number;
  eventLevel?: number;
  eventStatus?: number;
  eventType?: number;
  handleEndDate?: number;
  handleStartDate?: number;
  handleType?: number;
  pageSize?: number;
  propertyName?: string;
  propertyPrivateIp?: string;
  propertyPublicIp?: string;
  propertyUuid?: string;
  suspect?: string;
  suspectSig?: string;
  static names(): { [key: string]: string } {
    return {
      createEndDate: 'CreateEndDate',
      createStartDate: 'CreateStartDate',
      currentPage: 'CurrentPage',
      eventAffiliation: 'EventAffiliation',
      eventLevel: 'EventLevel',
      eventStatus: 'EventStatus',
      eventType: 'EventType',
      handleEndDate: 'HandleEndDate',
      handleStartDate: 'HandleStartDate',
      handleType: 'HandleType',
      pageSize: 'PageSize',
      propertyName: 'PropertyName',
      propertyPrivateIp: 'PropertyPrivateIp',
      propertyPublicIp: 'PropertyPublicIp',
      propertyUuid: 'PropertyUuid',
      suspect: 'Suspect',
      suspectSig: 'SuspectSig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createEndDate: 'number',
      createStartDate: 'number',
      currentPage: 'number',
      eventAffiliation: 'number',
      eventLevel: 'number',
      eventStatus: 'number',
      eventType: 'number',
      handleEndDate: 'number',
      handleStartDate: 'number',
      handleType: 'number',
      pageSize: 'number',
      propertyName: 'string',
      propertyPrivateIp: 'string',
      propertyPublicIp: 'string',
      propertyUuid: 'string',
      suspect: 'string',
      suspectSig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponseBody extends $tea.Model {
  currentPage?: number;
  items?: DescribeEventsResponseBodyItems[];
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeEventsResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEventsResponseBody;
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
      body: DescribeEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRequest extends $tea.Model {
  propertyUuid?: string;
  static names(): { [key: string]: string } {
    return {
      propertyUuid: 'PropertyUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBody extends $tea.Model {
  extensions?: string;
  gmtCreate?: number;
  gmtModified?: number;
  gmtRecentReport?: number;
  onlineStatus?: number;
  programExceptionNum?: number;
  programTrustDetail?: string;
  programTrustStatus?: number;
  programWhiteListId?: number;
  programWhiteListName?: string;
  propertyAffiliation?: number;
  propertyName?: string;
  propertyPrivateIp?: string;
  propertyPublicIp?: string;
  propertyUuid?: string;
  requestId?: string;
  systemExceptionNum?: number;
  systemTrustDetail?: string;
  systemTrustStatus?: number;
  systemWhiteListId?: number;
  static names(): { [key: string]: string } {
    return {
      extensions: 'Extensions',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      gmtRecentReport: 'GmtRecentReport',
      onlineStatus: 'OnlineStatus',
      programExceptionNum: 'ProgramExceptionNum',
      programTrustDetail: 'ProgramTrustDetail',
      programTrustStatus: 'ProgramTrustStatus',
      programWhiteListId: 'ProgramWhiteListId',
      programWhiteListName: 'ProgramWhiteListName',
      propertyAffiliation: 'PropertyAffiliation',
      propertyName: 'PropertyName',
      propertyPrivateIp: 'PropertyPrivateIp',
      propertyPublicIp: 'PropertyPublicIp',
      propertyUuid: 'PropertyUuid',
      requestId: 'RequestId',
      systemExceptionNum: 'SystemExceptionNum',
      systemTrustDetail: 'SystemTrustDetail',
      systemTrustStatus: 'SystemTrustStatus',
      systemWhiteListId: 'SystemWhiteListId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extensions: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      gmtRecentReport: 'number',
      onlineStatus: 'number',
      programExceptionNum: 'number',
      programTrustDetail: 'string',
      programTrustStatus: 'number',
      programWhiteListId: 'number',
      programWhiteListName: 'string',
      propertyAffiliation: 'number',
      propertyName: 'string',
      propertyPrivateIp: 'string',
      propertyPublicIp: 'string',
      propertyUuid: 'string',
      requestId: 'string',
      systemExceptionNum: 'number',
      systemTrustDetail: 'string',
      systemTrustStatus: 'number',
      systemWhiteListId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceResponseBody;
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
      body: DescribeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAikcertRequest extends $tea.Model {
  aikName?: string;
  aikPub?: string;
  ekCert?: string;
  ekPub?: string;
  nonceDigest?: string;
  propertyUuid?: string;
  static names(): { [key: string]: string } {
    return {
      aikName: 'AikName',
      aikPub: 'AikPub',
      ekCert: 'EkCert',
      ekPub: 'EkPub',
      nonceDigest: 'NonceDigest',
      propertyUuid: 'PropertyUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aikName: 'string',
      aikPub: 'string',
      ekCert: 'string',
      ekPub: 'string',
      nonceDigest: 'string',
      propertyUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAikcertResponseBody extends $tea.Model {
  requestId?: string;
  data?: GenerateAikcertResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GenerateAikcertResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAikcertResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GenerateAikcertResponseBody;
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
      body: GenerateAikcertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateNonceRequest extends $tea.Model {
  aikName?: string;
  ekCert?: string;
  ekPub?: string;
  propertyUuid?: string;
  static names(): { [key: string]: string } {
    return {
      aikName: 'AikName',
      ekCert: 'EkCert',
      ekPub: 'EkPub',
      propertyUuid: 'PropertyUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aikName: 'string',
      ekCert: 'string',
      ekPub: 'string',
      propertyUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateNonceResponseBody extends $tea.Model {
  requestId?: string;
  data?: GenerateNonceResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GenerateNonceResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateNonceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GenerateNonceResponseBody;
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
      body: GenerateNonceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IgnoreEventsRequest extends $tea.Model {
  eventUuids?: string;
  handleStyle?: number;
  static names(): { [key: string]: string } {
    return {
      eventUuids: 'EventUuids',
      handleStyle: 'HandleStyle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventUuids: 'string',
      handleStyle: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IgnoreEventsResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IgnoreEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: IgnoreEventsResponseBody;
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
      body: IgnoreEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProduceAikcertRequest extends $tea.Model {
  aikName?: string;
  certRequest?: string;
  ekCert?: string;
  ekPubKey?: string;
  includeCertChain?: boolean;
  static names(): { [key: string]: string } {
    return {
      aikName: 'AikName',
      certRequest: 'CertRequest',
      ekCert: 'EkCert',
      ekPubKey: 'EkPubKey',
      includeCertChain: 'IncludeCertChain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aikName: 'string',
      certRequest: 'string',
      ekCert: 'string',
      ekPubKey: 'string',
      includeCertChain: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProduceAikcertResponseBody extends $tea.Model {
  data?: ProduceAikcertResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ProduceAikcertResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProduceAikcertResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ProduceAikcertResponseBody;
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
      body: ProduceAikcertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMessageRequest extends $tea.Model {
  fileData?: string;
  propertyUuid?: string;
  static names(): { [key: string]: string } {
    return {
      fileData: 'FileData',
      propertyUuid: 'PropertyUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileData: 'string',
      propertyUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMessageResponseBody extends $tea.Model {
  requestId?: string;
  data?: PutMessageResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: PutMessageResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PutMessageResponseBody;
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
      body: PutMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterMessageRequest extends $tea.Model {
  extensions?: string;
  instanceId?: string;
  instanceType?: string;
  propertyAffiliation?: number;
  propertyName?: string;
  propertyPrivateIp?: string;
  propertyPublicIp?: string;
  propertyUuid?: string;
  static names(): { [key: string]: string } {
    return {
      extensions: 'Extensions',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      propertyAffiliation: 'PropertyAffiliation',
      propertyName: 'PropertyName',
      propertyPrivateIp: 'PropertyPrivateIp',
      propertyPublicIp: 'PropertyPublicIp',
      propertyUuid: 'PropertyUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extensions: 'string',
      instanceId: 'string',
      instanceType: 'string',
      propertyAffiliation: 'number',
      propertyName: 'string',
      propertyPrivateIp: 'string',
      propertyPublicIp: 'string',
      propertyUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterMessageResponseBody extends $tea.Model {
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

export class RegisterMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RegisterMessageResponseBody;
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
      body: RegisterMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrustEventsRequest extends $tea.Model {
  eventUuids?: string;
  handleStyle?: number;
  static names(): { [key: string]: string } {
    return {
      eventUuids: 'EventUuids',
      handleStyle: 'HandleStyle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventUuids: 'string',
      handleStyle: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrustEventsResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrustEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TrustEventsResponseBody;
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
      body: TrustEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnregisterMessageRequest extends $tea.Model {
  properties?: string;
  static names(): { [key: string]: string } {
    return {
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      properties: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnregisterMessageResponseBody extends $tea.Model {
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

export class UnregisterMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnregisterMessageResponseBody;
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
      body: UnregisterMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMessageRequest extends $tea.Model {
  fileData?: string;
  static names(): { [key: string]: string } {
    return {
      fileData: 'FileData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMessageResponseBody extends $tea.Model {
  data?: VerifyMessageResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: VerifyMessageResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: VerifyMessageResponseBody;
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
      body: VerifyMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponseBodyItems extends $tea.Model {
  accumulation?: string;
  eventAffiliation?: string;
  eventLevel?: string;
  eventStatus?: string;
  eventType?: string;
  eventUuid?: string;
  gmtCreate?: number;
  gmtHandle?: number;
  gmtModified?: number;
  handleType?: string;
  propertyName?: string;
  propertyPrivateIp?: string;
  propertyPublicIp?: string;
  propertyUuid?: string;
  suspect?: string;
  suspectSig?: string;
  suspectWhiteList?: string;
  static names(): { [key: string]: string } {
    return {
      accumulation: 'Accumulation',
      eventAffiliation: 'EventAffiliation',
      eventLevel: 'EventLevel',
      eventStatus: 'EventStatus',
      eventType: 'EventType',
      eventUuid: 'EventUuid',
      gmtCreate: 'GmtCreate',
      gmtHandle: 'GmtHandle',
      gmtModified: 'GmtModified',
      handleType: 'HandleType',
      propertyName: 'PropertyName',
      propertyPrivateIp: 'PropertyPrivateIp',
      propertyPublicIp: 'PropertyPublicIp',
      propertyUuid: 'PropertyUuid',
      suspect: 'Suspect',
      suspectSig: 'SuspectSig',
      suspectWhiteList: 'SuspectWhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accumulation: 'string',
      eventAffiliation: 'string',
      eventLevel: 'string',
      eventStatus: 'string',
      eventType: 'string',
      eventUuid: 'string',
      gmtCreate: 'number',
      gmtHandle: 'number',
      gmtModified: 'number',
      handleType: 'string',
      propertyName: 'string',
      propertyPrivateIp: 'string',
      propertyPublicIp: 'string',
      propertyUuid: 'string',
      suspect: 'string',
      suspectSig: 'string',
      suspectWhiteList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAikcertResponseBodyData extends $tea.Model {
  dataCredentialBlob?: string;
  keyCredentialBlob?: string;
  static names(): { [key: string]: string } {
    return {
      dataCredentialBlob: 'dataCredentialBlob',
      keyCredentialBlob: 'keyCredentialBlob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCredentialBlob: 'string',
      keyCredentialBlob: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateNonceResponseBodyData extends $tea.Model {
  credentialBlob?: string;
  static names(): { [key: string]: string } {
    return {
      credentialBlob: 'CredentialBlob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialBlob: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProduceAikcertResponseBodyData extends $tea.Model {
  dataCredentialBlob?: string;
  keyCredentialBlob?: string;
  static names(): { [key: string]: string } {
    return {
      dataCredentialBlob: 'DataCredentialBlob',
      keyCredentialBlob: 'KeyCredentialBlob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCredentialBlob: 'string',
      keyCredentialBlob: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMessageResponseBodyDataKmoduleVerificationResult extends $tea.Model {
  code?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMessageResponseBodyDataPolicyProcResult extends $tea.Model {
  code?: string;
  procData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      procData: 'procData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      procData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMessageResponseBodyDataProgramVerificationResult extends $tea.Model {
  code?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMessageResponseBodyDataSystemVerificationResult extends $tea.Model {
  code?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMessageResponseBodyData extends $tea.Model {
  kmoduleVerificationResult?: PutMessageResponseBodyDataKmoduleVerificationResult;
  nextClientIMAIndex?: number;
  policyProcResult?: PutMessageResponseBodyDataPolicyProcResult;
  programVerificationResult?: PutMessageResponseBodyDataProgramVerificationResult;
  systemVerificationResult?: PutMessageResponseBodyDataSystemVerificationResult;
  static names(): { [key: string]: string } {
    return {
      kmoduleVerificationResult: 'kmoduleVerificationResult',
      nextClientIMAIndex: 'nextClientIMAIndex',
      policyProcResult: 'policyProcResult',
      programVerificationResult: 'programVerificationResult',
      systemVerificationResult: 'systemVerificationResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kmoduleVerificationResult: PutMessageResponseBodyDataKmoduleVerificationResult,
      nextClientIMAIndex: 'number',
      policyProcResult: PutMessageResponseBodyDataPolicyProcResult,
      programVerificationResult: PutMessageResponseBodyDataProgramVerificationResult,
      systemVerificationResult: PutMessageResponseBodyDataSystemVerificationResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMessageResponseBodyDataImaVerificationResult extends $tea.Model {
  code?: string;
  status?: number;
  tcbObsolete?: string[];
  untrusted?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      status: 'Status',
      tcbObsolete: 'TcbObsolete',
      untrusted: 'Untrusted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      status: 'number',
      tcbObsolete: { 'type': 'array', 'itemType': 'string' },
      untrusted: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMessageResponseBodyDataPcrVerificationResult extends $tea.Model {
  code?: string;
  status?: number;
  tcbObsolete?: string[];
  untrusted?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      status: 'Status',
      tcbObsolete: 'TcbObsolete',
      untrusted: 'Untrusted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      status: 'number',
      tcbObsolete: { 'type': 'array', 'itemType': 'string' },
      untrusted: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMessageResponseBodyData extends $tea.Model {
  imaVerificationResult?: VerifyMessageResponseBodyDataImaVerificationResult;
  pcrVerificationResult?: VerifyMessageResponseBodyDataPcrVerificationResult;
  static names(): { [key: string]: string } {
    return {
      imaVerificationResult: 'ImaVerificationResult',
      pcrVerificationResult: 'PcrVerificationResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imaVerificationResult: VerifyMessageResponseBodyDataImaVerificationResult,
      pcrVerificationResult: VerifyMessageResponseBodyDataPcrVerificationResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("trusted-server", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async describeBootWithOptions(request: DescribeBootRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBootResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.propertyUuid)) {
      query["PropertyUuid"] = request.propertyUuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBoot",
      version: "2020-06-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBootResponse>(await this.callApi(params, req, runtime), new DescribeBootResponse({}));
  }

  async describeBoot(request: DescribeBootRequest): Promise<DescribeBootResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBootWithOptions(request, runtime);
  }

  async describeEventsWithOptions(request: DescribeEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEventsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.createEndDate)) {
      query["CreateEndDate"] = request.createEndDate;
    }

    if (!Util.isUnset(request.createStartDate)) {
      query["CreateStartDate"] = request.createStartDate;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.eventAffiliation)) {
      query["EventAffiliation"] = request.eventAffiliation;
    }

    if (!Util.isUnset(request.eventLevel)) {
      query["EventLevel"] = request.eventLevel;
    }

    if (!Util.isUnset(request.eventStatus)) {
      query["EventStatus"] = request.eventStatus;
    }

    if (!Util.isUnset(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.handleEndDate)) {
      query["HandleEndDate"] = request.handleEndDate;
    }

    if (!Util.isUnset(request.handleStartDate)) {
      query["HandleStartDate"] = request.handleStartDate;
    }

    if (!Util.isUnset(request.handleType)) {
      query["HandleType"] = request.handleType;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.propertyName)) {
      query["PropertyName"] = request.propertyName;
    }

    if (!Util.isUnset(request.propertyPrivateIp)) {
      query["PropertyPrivateIp"] = request.propertyPrivateIp;
    }

    if (!Util.isUnset(request.propertyPublicIp)) {
      query["PropertyPublicIp"] = request.propertyPublicIp;
    }

    if (!Util.isUnset(request.propertyUuid)) {
      query["PropertyUuid"] = request.propertyUuid;
    }

    if (!Util.isUnset(request.suspect)) {
      query["Suspect"] = request.suspect;
    }

    if (!Util.isUnset(request.suspectSig)) {
      query["SuspectSig"] = request.suspectSig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEvents",
      version: "2020-06-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEventsResponse>(await this.callApi(params, req, runtime), new DescribeEventsResponse({}));
  }

  async describeEvents(request: DescribeEventsRequest): Promise<DescribeEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventsWithOptions(request, runtime);
  }

  async describeInstanceWithOptions(request: DescribeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.propertyUuid)) {
      query["PropertyUuid"] = request.propertyUuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstance",
      version: "2020-06-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceResponse>(await this.callApi(params, req, runtime), new DescribeInstanceResponse({}));
  }

  async describeInstance(request: DescribeInstanceRequest): Promise<DescribeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceWithOptions(request, runtime);
  }

  async generateAikcertWithOptions(request: GenerateAikcertRequest, runtime: $Util.RuntimeOptions): Promise<GenerateAikcertResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aikName)) {
      query["AikName"] = request.aikName;
    }

    if (!Util.isUnset(request.aikPub)) {
      query["AikPub"] = request.aikPub;
    }

    if (!Util.isUnset(request.ekCert)) {
      query["EkCert"] = request.ekCert;
    }

    if (!Util.isUnset(request.ekPub)) {
      query["EkPub"] = request.ekPub;
    }

    if (!Util.isUnset(request.nonceDigest)) {
      query["NonceDigest"] = request.nonceDigest;
    }

    if (!Util.isUnset(request.propertyUuid)) {
      query["PropertyUuid"] = request.propertyUuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateAikcert",
      version: "2020-06-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateAikcertResponse>(await this.callApi(params, req, runtime), new GenerateAikcertResponse({}));
  }

  async generateAikcert(request: GenerateAikcertRequest): Promise<GenerateAikcertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateAikcertWithOptions(request, runtime);
  }

  async generateNonceWithOptions(request: GenerateNonceRequest, runtime: $Util.RuntimeOptions): Promise<GenerateNonceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aikName)) {
      query["AikName"] = request.aikName;
    }

    if (!Util.isUnset(request.ekCert)) {
      query["EkCert"] = request.ekCert;
    }

    if (!Util.isUnset(request.ekPub)) {
      query["EkPub"] = request.ekPub;
    }

    if (!Util.isUnset(request.propertyUuid)) {
      query["PropertyUuid"] = request.propertyUuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateNonce",
      version: "2020-06-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateNonceResponse>(await this.callApi(params, req, runtime), new GenerateNonceResponse({}));
  }

  async generateNonce(request: GenerateNonceRequest): Promise<GenerateNonceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateNonceWithOptions(request, runtime);
  }

  async ignoreEventsWithOptions(request: IgnoreEventsRequest, runtime: $Util.RuntimeOptions): Promise<IgnoreEventsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventUuids)) {
      query["EventUuids"] = request.eventUuids;
    }

    if (!Util.isUnset(request.handleStyle)) {
      query["HandleStyle"] = request.handleStyle;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "IgnoreEvents",
      version: "2020-06-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<IgnoreEventsResponse>(await this.callApi(params, req, runtime), new IgnoreEventsResponse({}));
  }

  async ignoreEvents(request: IgnoreEventsRequest): Promise<IgnoreEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.ignoreEventsWithOptions(request, runtime);
  }

  async produceAikcertWithOptions(request: ProduceAikcertRequest, runtime: $Util.RuntimeOptions): Promise<ProduceAikcertResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aikName)) {
      query["AikName"] = request.aikName;
    }

    if (!Util.isUnset(request.certRequest)) {
      query["CertRequest"] = request.certRequest;
    }

    if (!Util.isUnset(request.ekCert)) {
      query["EkCert"] = request.ekCert;
    }

    if (!Util.isUnset(request.ekPubKey)) {
      query["EkPubKey"] = request.ekPubKey;
    }

    if (!Util.isUnset(request.includeCertChain)) {
      query["IncludeCertChain"] = request.includeCertChain;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ProduceAikcert",
      version: "2020-06-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ProduceAikcertResponse>(await this.callApi(params, req, runtime), new ProduceAikcertResponse({}));
  }

  async produceAikcert(request: ProduceAikcertRequest): Promise<ProduceAikcertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.produceAikcertWithOptions(request, runtime);
  }

  async putMessageWithOptions(request: PutMessageRequest, runtime: $Util.RuntimeOptions): Promise<PutMessageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileData)) {
      query["FileData"] = request.fileData;
    }

    if (!Util.isUnset(request.propertyUuid)) {
      query["PropertyUuid"] = request.propertyUuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutMessage",
      version: "2020-06-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutMessageResponse>(await this.callApi(params, req, runtime), new PutMessageResponse({}));
  }

  async putMessage(request: PutMessageRequest): Promise<PutMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putMessageWithOptions(request, runtime);
  }

  async registerMessageWithOptions(request: RegisterMessageRequest, runtime: $Util.RuntimeOptions): Promise<RegisterMessageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.extensions)) {
      query["Extensions"] = request.extensions;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.propertyAffiliation)) {
      query["PropertyAffiliation"] = request.propertyAffiliation;
    }

    if (!Util.isUnset(request.propertyName)) {
      query["PropertyName"] = request.propertyName;
    }

    if (!Util.isUnset(request.propertyPrivateIp)) {
      query["PropertyPrivateIp"] = request.propertyPrivateIp;
    }

    if (!Util.isUnset(request.propertyPublicIp)) {
      query["PropertyPublicIp"] = request.propertyPublicIp;
    }

    if (!Util.isUnset(request.propertyUuid)) {
      query["PropertyUuid"] = request.propertyUuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RegisterMessage",
      version: "2020-06-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegisterMessageResponse>(await this.callApi(params, req, runtime), new RegisterMessageResponse({}));
  }

  async registerMessage(request: RegisterMessageRequest): Promise<RegisterMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerMessageWithOptions(request, runtime);
  }

  async trustEventsWithOptions(request: TrustEventsRequest, runtime: $Util.RuntimeOptions): Promise<TrustEventsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventUuids)) {
      query["EventUuids"] = request.eventUuids;
    }

    if (!Util.isUnset(request.handleStyle)) {
      query["HandleStyle"] = request.handleStyle;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TrustEvents",
      version: "2020-06-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TrustEventsResponse>(await this.callApi(params, req, runtime), new TrustEventsResponse({}));
  }

  async trustEvents(request: TrustEventsRequest): Promise<TrustEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.trustEventsWithOptions(request, runtime);
  }

  async unregisterMessageWithOptions(request: UnregisterMessageRequest, runtime: $Util.RuntimeOptions): Promise<UnregisterMessageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.properties)) {
      query["Properties"] = request.properties;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnregisterMessage",
      version: "2020-06-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnregisterMessageResponse>(await this.callApi(params, req, runtime), new UnregisterMessageResponse({}));
  }

  async unregisterMessage(request: UnregisterMessageRequest): Promise<UnregisterMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unregisterMessageWithOptions(request, runtime);
  }

  async verifyMessageWithOptions(request: VerifyMessageRequest, runtime: $Util.RuntimeOptions): Promise<VerifyMessageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileData)) {
      body["FileData"] = request.fileData;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "VerifyMessage",
      version: "2020-06-13",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyMessageResponse>(await this.callApi(params, req, runtime), new VerifyMessageResponse({}));
  }

  async verifyMessage(request: VerifyMessageRequest): Promise<VerifyMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyMessageWithOptions(request, runtime);
  }

}
