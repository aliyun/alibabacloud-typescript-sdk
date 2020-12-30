// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddEnterpriseMemberRequest extends $tea.Model {
  instanceId?: string;
  staffId?: string;
  operator?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      staffId: 'StaffId',
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      staffId: 'string',
      operator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEnterpriseMemberResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: boolean;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'boolean',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEnterpriseMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddEnterpriseMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddEnterpriseMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRamMemberRequest extends $tea.Model {
  corpIdentifier?: string;
  staffIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      corpIdentifier: 'CorpIdentifier',
      staffIdentifier: 'StaffIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpIdentifier: 'string',
      staffIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRamMemberResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string[];
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': 'string' },
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRamMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddRamMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddRamMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveJoinCompanyRequest extends $tea.Model {
  corpIdentifier?: string;
  applicationIds?: string;
  static names(): { [key: string]: string } {
    return {
      corpIdentifier: 'CorpIdentifier',
      applicationIds: 'ApplicationIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpIdentifier: 'string',
      applicationIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveJoinCompanyResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string[];
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': 'string' },
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveJoinCompanyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ApproveJoinCompanyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ApproveJoinCompanyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseRequest extends $tea.Model {
  name?: string;
  description?: string;
  emails?: { [key: string]: any };
  domain?: string;
  creatorStaffId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      description: 'Description',
      emails: 'Emails',
      domain: 'Domain',
      creatorStaffId: 'CreatorStaffId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      description: 'string',
      emails: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      domain: 'string',
      creatorStaffId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseShrinkRequest extends $tea.Model {
  name?: string;
  description?: string;
  emailsShrink?: string;
  domain?: string;
  creatorStaffId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      description: 'Description',
      emailsShrink: 'Emails',
      domain: 'Domain',
      creatorStaffId: 'CreatorStaffId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      description: 'string',
      emailsShrink: 'string',
      domain: 'string',
      creatorStaffId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: CreateEnterpriseResponseBodyData;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: CreateEnterpriseResponseBodyData,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateEnterpriseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateEnterpriseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkitemRequest extends $tea.Model {
  corpIdentifier?: string;
  author?: string;
  assignedTo?: string;
  templateId?: number;
  subject?: string;
  description?: string;
  stamp?: string;
  AKProjectId?: number;
  cfList?: string;
  verifier?: string;
  priorityId?: number;
  seriousLevelId?: number;
  watcherUsers?: string;
  moduleIds?: string;
  static names(): { [key: string]: string } {
    return {
      corpIdentifier: 'CorpIdentifier',
      author: 'Author',
      assignedTo: 'AssignedTo',
      templateId: 'TemplateId',
      subject: 'Subject',
      description: 'Description',
      stamp: 'Stamp',
      AKProjectId: 'AKProjectId',
      cfList: 'CfList',
      verifier: 'Verifier',
      priorityId: 'PriorityId',
      seriousLevelId: 'SeriousLevelId',
      watcherUsers: 'WatcherUsers',
      moduleIds: 'ModuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpIdentifier: 'string',
      author: 'string',
      assignedTo: 'string',
      templateId: 'number',
      subject: 'string',
      description: 'string',
      stamp: 'string',
      AKProjectId: 'number',
      cfList: 'string',
      verifier: 'string',
      priorityId: 'number',
      seriousLevelId: 'number',
      watcherUsers: 'string',
      moduleIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkitemResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: number;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'number',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkitemResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateWorkitemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateWorkitemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBindedUserByDingIdRequest extends $tea.Model {
  dingId?: string;
  static names(): { [key: string]: string } {
    return {
      dingId: 'DingId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBindedUserByDingIdResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetBindedUserByDingIdResponseBodyData;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetBindedUserByDingIdResponseBodyData,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBindedUserByDingIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetBindedUserByDingIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetBindedUserByDingIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeLogRequest extends $tea.Model {
  targetType?: string;
  targetIds?: { [key: string]: any };
  corpIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      targetType: 'TargetType',
      targetIds: 'TargetIds',
      corpIdentifier: 'CorpIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetType: 'string',
      targetIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      corpIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeLogShrinkRequest extends $tea.Model {
  targetType?: string;
  targetIdsShrink?: string;
  corpIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      targetType: 'TargetType',
      targetIdsShrink: 'TargetIds',
      corpIdentifier: 'CorpIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetType: 'string',
      targetIdsShrink: 'string',
      corpIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeLogResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetChangeLogResponseBodyData[];
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': GetChangeLogResponseBodyData },
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetChangeLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetChangeLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomFieldsByTemplateIdRequest extends $tea.Model {
  AKProjectId?: number;
  templateId?: number;
  corpIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      AKProjectId: 'AKProjectId',
      templateId: 'TemplateId',
      corpIdentifier: 'CorpIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AKProjectId: 'number',
      templateId: 'number',
      corpIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomFieldsByTemplateIdResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetCustomFieldsByTemplateIdResponseBodyData[];
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': GetCustomFieldsByTemplateIdResponseBodyData },
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomFieldsByTemplateIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCustomFieldsByTemplateIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCustomFieldsByTemplateIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIssueByIdRequest extends $tea.Model {
  id?: number;
  corpIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      corpIdentifier: 'CorpIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      corpIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIssueByIdResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetIssueByIdResponseBodyData;
  code?: number;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetIssueByIdResponseBodyData,
      code: 'number',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIssueByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetIssueByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetIssueByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJoinCodeRequest extends $tea.Model {
  corpIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      corpIdentifier: 'CorpIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJoinCodeResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetJoinCodeResponseBodyData;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetJoinCodeResponseBodyData,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJoinCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetJoinCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetJoinCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectMembersRequest extends $tea.Model {
  corpIdentifier?: string;
  projectId?: number;
  staffId?: string;
  static names(): { [key: string]: string } {
    return {
      corpIdentifier: 'CorpIdentifier',
      projectId: 'ProjectId',
      staffId: 'StaffId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpIdentifier: 'string',
      projectId: 'number',
      staffId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectMembersResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetProjectMembersResponseBodyData[];
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': GetProjectMembersResponseBodyData },
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetProjectMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetProjectMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByAliyunPkRequest extends $tea.Model {
  pk?: string;
  static names(): { [key: string]: string } {
    return {
      pk: 'Pk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pk: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByAliyunPkResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetUserByAliyunPkResponseBodyData;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetUserByAliyunPkResponseBodyData,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByAliyunPkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUserByAliyunPkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserByAliyunPkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkitemByIdRequest extends $tea.Model {
  id?: number;
  corpIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      corpIdentifier: 'CorpIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      corpIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkitemByIdResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetWorkitemByIdResponseBodyData;
  code?: number;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetWorkitemByIdResponseBodyData,
      code: 'number',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkitemByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetWorkitemByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetWorkitemByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinCompanyRequest extends $tea.Model {
  code?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinCompanyResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: JoinCompanyResponseBodyData;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: JoinCompanyResponseBodyData,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinCompanyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: JoinCompanyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: JoinCompanyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchProjectsByRegionRequest extends $tea.Model {
  corpIdentifier?: string;
  region?: string;
  status?: string;
  toPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      corpIdentifier: 'CorpIdentifier',
      region: 'Region',
      status: 'Status',
      toPage: 'ToPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpIdentifier: 'string',
      region: 'string',
      status: 'string',
      toPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchProjectsByRegionResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: SearchProjectsByRegionResponseBodyData[];
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': SearchProjectsByRegionResponseBodyData },
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchProjectsByRegionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchProjectsByRegionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchProjectsByRegionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTestCaseRequest extends $tea.Model {
  pageSize?: number;
  corpIdentifier?: string;
  akProjectId?: string;
  caseTag?: string;
  pageNum?: string;
  createDateStart?: string;
  createDateEnd?: string;
  updateDateStart?: string;
  updateDateEnd?: string;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      corpIdentifier: 'CorpIdentifier',
      akProjectId: 'AkProjectId',
      caseTag: 'CaseTag',
      pageNum: 'PageNum',
      createDateStart: 'CreateDateStart',
      createDateEnd: 'CreateDateEnd',
      updateDateStart: 'UpdateDateStart',
      updateDateEnd: 'UpdateDateEnd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      corpIdentifier: 'string',
      akProjectId: 'string',
      caseTag: 'string',
      pageNum: 'string',
      createDateStart: 'string',
      createDateEnd: 'string',
      updateDateStart: 'string',
      updateDateEnd: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTestCaseResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: SearchTestCaseResponseBodyData;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: SearchTestCaseResponseBodyData,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTestCaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchTestCaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchTestCaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchWorkitemRequest extends $tea.Model {
  stamp?: string;
  AKProjectId?: number;
  toPage?: number;
  pageSize?: number;
  corpIdentifier?: string;
  sprintId?: number;
  createdAtStart?: string;
  createdAtEnd?: string;
  static names(): { [key: string]: string } {
    return {
      stamp: 'Stamp',
      AKProjectId: 'AKProjectId',
      toPage: 'ToPage',
      pageSize: 'PageSize',
      corpIdentifier: 'CorpIdentifier',
      sprintId: 'SprintId',
      createdAtStart: 'CreatedAtStart',
      createdAtEnd: 'CreatedAtEnd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stamp: 'string',
      AKProjectId: 'number',
      toPage: 'number',
      pageSize: 'number',
      corpIdentifier: 'string',
      sprintId: 'number',
      createdAtStart: 'string',
      createdAtEnd: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchWorkitemResponseBody extends $tea.Model {
  totalCount?: number;
  toPage?: number;
  requestId?: string;
  pageSize?: number;
  totalPages?: number;
  data?: SearchWorkitemResponseBodyData[];
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      toPage: 'ToPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalPages: 'TotalPages',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      toPage: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalPages: 'number',
      data: { 'type': 'array', 'itemType': SearchWorkitemResponseBodyData },
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchWorkitemResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchWorkitemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchWorkitemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchWorkitemWithTotalCountRequest extends $tea.Model {
  stamp?: string;
  AKProjectId?: number;
  toPage?: number;
  pageSize?: number;
  corpIdentifier?: string;
  sprintId?: number;
  static names(): { [key: string]: string } {
    return {
      stamp: 'Stamp',
      AKProjectId: 'AKProjectId',
      toPage: 'ToPage',
      pageSize: 'PageSize',
      corpIdentifier: 'CorpIdentifier',
      sprintId: 'SprintId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stamp: 'string',
      AKProjectId: 'number',
      toPage: 'number',
      pageSize: 'number',
      corpIdentifier: 'string',
      sprintId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchWorkitemWithTotalCountResponseBody extends $tea.Model {
  totalCount?: number;
  toPage?: number;
  requestId?: string;
  pageSize?: number;
  totalPages?: number;
  data?: SearchWorkitemWithTotalCountResponseBodyData[];
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      toPage: 'ToPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalPages: 'TotalPages',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      toPage: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalPages: 'number',
      data: { 'type': 'array', 'itemType': SearchWorkitemWithTotalCountResponseBodyData },
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchWorkitemWithTotalCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchWorkitemWithTotalCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchWorkitemWithTotalCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncUserToRdcRequest extends $tea.Model {
  loginTicket?: string;
  static names(): { [key: string]: string } {
    return {
      loginTicket: 'LoginTicket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginTicket: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncUserToRdcResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: SyncUserToRdcResponseBodyData;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: SyncUserToRdcResponseBodyData,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncUserToRdcResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SyncUserToRdcResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SyncUserToRdcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkitemRequest extends $tea.Model {
  AKProjectId?: number;
  corpIdentifier?: string;
  modifier?: string;
  assignedTo?: string;
  templateId?: number;
  subject?: string;
  description?: string;
  stamp?: string;
  cfList?: { [key: string]: any };
  issueId?: number;
  status?: string;
  priority?: string;
  seriousLevel?: string;
  verifier?: string;
  sprintId?: number;
  ignoreCheck?: boolean;
  cfs?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      AKProjectId: 'AKProjectId',
      corpIdentifier: 'CorpIdentifier',
      modifier: 'Modifier',
      assignedTo: 'AssignedTo',
      templateId: 'TemplateId',
      subject: 'Subject',
      description: 'Description',
      stamp: 'Stamp',
      cfList: 'CfList',
      issueId: 'IssueId',
      status: 'Status',
      priority: 'Priority',
      seriousLevel: 'SeriousLevel',
      verifier: 'Verifier',
      sprintId: 'SprintId',
      ignoreCheck: 'IgnoreCheck',
      cfs: 'Cfs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AKProjectId: 'number',
      corpIdentifier: 'string',
      modifier: 'string',
      assignedTo: 'string',
      templateId: 'number',
      subject: 'string',
      description: 'string',
      stamp: 'string',
      cfList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      issueId: 'number',
      status: 'string',
      priority: 'string',
      seriousLevel: 'string',
      verifier: 'string',
      sprintId: 'number',
      ignoreCheck: 'boolean',
      cfs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkitemShrinkRequest extends $tea.Model {
  AKProjectId?: number;
  corpIdentifier?: string;
  modifier?: string;
  assignedTo?: string;
  templateId?: number;
  subject?: string;
  description?: string;
  stamp?: string;
  cfListShrink?: string;
  issueId?: number;
  status?: string;
  priority?: string;
  seriousLevel?: string;
  verifier?: string;
  sprintId?: number;
  ignoreCheck?: boolean;
  cfsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      AKProjectId: 'AKProjectId',
      corpIdentifier: 'CorpIdentifier',
      modifier: 'Modifier',
      assignedTo: 'AssignedTo',
      templateId: 'TemplateId',
      subject: 'Subject',
      description: 'Description',
      stamp: 'Stamp',
      cfListShrink: 'CfList',
      issueId: 'IssueId',
      status: 'Status',
      priority: 'Priority',
      seriousLevel: 'SeriousLevel',
      verifier: 'Verifier',
      sprintId: 'SprintId',
      ignoreCheck: 'IgnoreCheck',
      cfsShrink: 'Cfs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AKProjectId: 'number',
      corpIdentifier: 'string',
      modifier: 'string',
      assignedTo: 'string',
      templateId: 'number',
      subject: 'string',
      description: 'string',
      stamp: 'string',
      cfListShrink: 'string',
      issueId: 'number',
      status: 'string',
      priority: 'string',
      seriousLevel: 'string',
      verifier: 'string',
      sprintId: 'number',
      ignoreCheck: 'boolean',
      cfsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkitemResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: boolean;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'boolean',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkitemResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateWorkitemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateWorkitemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseResponseBodyData extends $tea.Model {
  status?: number;
  type?: number;
  prohibitCode?: number;
  identifier?: string;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      prohibitCode: 'ProhibitCode',
      identifier: 'Identifier',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      type: 'number',
      prohibitCode: 'number',
      identifier: 'string',
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBindedUserByDingIdResponseBodyDataDingtalkUser extends $tea.Model {
  dingtalkUserId?: number;
  dingId?: string;
  unionId?: string;
  nick?: string;
  codeUserName?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      dingtalkUserId: 'DingtalkUserId',
      dingId: 'DingId',
      unionId: 'UnionId',
      nick: 'Nick',
      codeUserName: 'CodeUserName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingtalkUserId: 'number',
      dingId: 'string',
      unionId: 'string',
      nick: 'string',
      codeUserName: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBindedUserByDingIdResponseBodyDataUserProfileDTO extends $tea.Model {
  dataSource?: string;
  avatar?: string;
  email?: string;
  mobile?: string;
  userId?: number;
  createdAt?: number;
  englishName?: string;
  nickName?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      dataSource: 'DataSource',
      avatar: 'Avatar',
      email: 'Email',
      mobile: 'Mobile',
      userId: 'UserId',
      createdAt: 'CreatedAt',
      englishName: 'EnglishName',
      nickName: 'NickName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSource: 'string',
      avatar: 'string',
      email: 'string',
      mobile: 'string',
      userId: 'number',
      createdAt: 'number',
      englishName: 'string',
      nickName: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBindedUserByDingIdResponseBodyDataAliyunUser extends $tea.Model {
  email?: string;
  havanaId?: string;
  taobaoNick?: string;
  kp?: string;
  realname?: string;
  nickName?: string;
  accountStructure?: number;
  aliyunId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      havanaId: 'HavanaId',
      taobaoNick: 'TaobaoNick',
      kp: 'Kp',
      realname: 'Realname',
      nickName: 'NickName',
      accountStructure: 'AccountStructure',
      aliyunId: 'AliyunId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      havanaId: 'string',
      taobaoNick: 'string',
      kp: 'string',
      realname: 'string',
      nickName: 'string',
      accountStructure: 'number',
      aliyunId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBindedUserByDingIdResponseBodyData extends $tea.Model {
  uuid?: string;
  guid?: string;
  dingtalkUser?: GetBindedUserByDingIdResponseBodyDataDingtalkUser;
  userProfileDTO?: GetBindedUserByDingIdResponseBodyDataUserProfileDTO;
  nickName?: string;
  mainAccountType?: string;
  aliyunUser?: GetBindedUserByDingIdResponseBodyDataAliyunUser;
  isValid?: boolean;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
      guid: 'Guid',
      dingtalkUser: 'DingtalkUser',
      userProfileDTO: 'UserProfileDTO',
      nickName: 'NickName',
      mainAccountType: 'MainAccountType',
      aliyunUser: 'AliyunUser',
      isValid: 'IsValid',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
      guid: 'string',
      dingtalkUser: GetBindedUserByDingIdResponseBodyDataDingtalkUser,
      userProfileDTO: GetBindedUserByDingIdResponseBodyDataUserProfileDTO,
      nickName: 'string',
      mainAccountType: 'string',
      aliyunUser: GetBindedUserByDingIdResponseBodyDataAliyunUser,
      isValid: 'boolean',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeLogResponseBodyData extends $tea.Model {
  oldValue?: string;
  propertyType?: string;
  propertyKey?: string;
  targetId?: number;
  other?: string;
  newValue?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      oldValue: 'OldValue',
      propertyType: 'PropertyType',
      propertyKey: 'PropertyKey',
      targetId: 'TargetId',
      other: 'Other',
      newValue: 'NewValue',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oldValue: 'string',
      propertyType: 'string',
      propertyKey: 'string',
      targetId: 'number',
      other: 'string',
      newValue: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomFieldsByTemplateIdResponseBodyData extends $tea.Model {
  type?: string;
  editable?: boolean;
  createdAt?: number;
  isRemember?: boolean;
  isDelete?: boolean;
  defaultValue?: string;
  maxLength?: number;
  fieldFormat?: string;
  description?: string;
  dynamic?: boolean;
  isRequired?: boolean;
  nameI18N?: string;
  possibleValues?: string;
  minLength?: number;
  updatedAt?: number;
  name?: string;
  other?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      editable: 'Editable',
      createdAt: 'CreatedAt',
      isRemember: 'IsRemember',
      isDelete: 'IsDelete',
      defaultValue: 'DefaultValue',
      maxLength: 'MaxLength',
      fieldFormat: 'FieldFormat',
      description: 'Description',
      dynamic: 'Dynamic',
      isRequired: 'IsRequired',
      nameI18N: 'NameI18N',
      possibleValues: 'PossibleValues',
      minLength: 'MinLength',
      updatedAt: 'UpdatedAt',
      name: 'Name',
      other: 'Other',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      editable: 'boolean',
      createdAt: 'number',
      isRemember: 'boolean',
      isDelete: 'boolean',
      defaultValue: 'string',
      maxLength: 'number',
      fieldFormat: 'string',
      description: 'string',
      dynamic: 'boolean',
      isRequired: 'boolean',
      nameI18N: 'string',
      possibleValues: 'string',
      minLength: 'number',
      updatedAt: 'number',
      name: 'string',
      other: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIssueByIdResponseBodyDataCfsList extends $tea.Model {
  type?: string;
  value?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIssueByIdResponseBodyData extends $tea.Model {
  skipCollab?: boolean;
  sendWangwang?: boolean;
  versionList?: string;
  akProjectId?: number;
  userId?: number;
  idPath?: string;
  ignoreIntegrate?: boolean;
  attachmentIds?: string;
  commitDate?: number;
  updateStatusAt?: number;
  trackers?: string;
  subject?: string;
  userStaffId?: string;
  attachmentList?: string;
  verifierId?: number;
  ignoreCheck?: boolean;
  moduleList?: string;
  attachmented?: boolean;
  seriousLevelId?: number;
  tagIdList?: string;
  watched?: boolean;
  assignedTo?: string;
  assignedToIds?: string;
  priorityId?: number;
  recordChangeLog?: boolean;
  updatedAt?: number;
  templateId?: number;
  verifier?: string;
  status?: string;
  relatedUserIds?: string;
  relatedAKProjectIds?: string;
  relatedAKProjectGuids?: string;
  createdAt?: number;
  assignedToIdList?: string;
  cfsList?: GetIssueByIdResponseBodyDataCfsList[];
  priority?: string;
  statusStage?: number;
  assignedToStaffId?: string;
  parentId?: number;
  description?: string;
  logicalStatus?: string;
  versionIds?: string;
  seriousLevel?: string;
  statusId?: number;
  stamp?: string;
  user?: string;
  trackerIds?: string;
  assignedToId?: number;
  changeLogList?: string;
  issueTypeId?: number;
  regionId?: number;
  guid?: string;
  assignedToMaps?: string;
  blackListNotice?: string;
  moduleUpdated?: boolean;
  projectIds?: string;
  commentList?: string;
  verifierStaffId?: string;
  moduleIds?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      skipCollab: 'SkipCollab',
      sendWangwang: 'SendWangwang',
      versionList: 'VersionList',
      akProjectId: 'AkProjectId',
      userId: 'UserId',
      idPath: 'IdPath',
      ignoreIntegrate: 'IgnoreIntegrate',
      attachmentIds: 'AttachmentIds',
      commitDate: 'CommitDate',
      updateStatusAt: 'UpdateStatusAt',
      trackers: 'Trackers',
      subject: 'Subject',
      userStaffId: 'UserStaffId',
      attachmentList: 'AttachmentList',
      verifierId: 'VerifierId',
      ignoreCheck: 'IgnoreCheck',
      moduleList: 'ModuleList',
      attachmented: 'Attachmented',
      seriousLevelId: 'SeriousLevelId',
      tagIdList: 'TagIdList',
      watched: 'Watched',
      assignedTo: 'AssignedTo',
      assignedToIds: 'AssignedToIds',
      priorityId: 'PriorityId',
      recordChangeLog: 'RecordChangeLog',
      updatedAt: 'UpdatedAt',
      templateId: 'TemplateId',
      verifier: 'Verifier',
      status: 'Status',
      relatedUserIds: 'RelatedUserIds',
      relatedAKProjectIds: 'RelatedAKProjectIds',
      relatedAKProjectGuids: 'RelatedAKProjectGuids',
      createdAt: 'CreatedAt',
      assignedToIdList: 'AssignedToIdList',
      cfsList: 'CfsList',
      priority: 'Priority',
      statusStage: 'StatusStage',
      assignedToStaffId: 'AssignedToStaffId',
      parentId: 'ParentId',
      description: 'Description',
      logicalStatus: 'LogicalStatus',
      versionIds: 'VersionIds',
      seriousLevel: 'SeriousLevel',
      statusId: 'StatusId',
      stamp: 'Stamp',
      user: 'User',
      trackerIds: 'TrackerIds',
      assignedToId: 'AssignedToId',
      changeLogList: 'ChangeLogList',
      issueTypeId: 'IssueTypeId',
      regionId: 'RegionId',
      guid: 'Guid',
      assignedToMaps: 'AssignedToMaps',
      blackListNotice: 'BlackListNotice',
      moduleUpdated: 'ModuleUpdated',
      projectIds: 'ProjectIds',
      commentList: 'CommentList',
      verifierStaffId: 'VerifierStaffId',
      moduleIds: 'ModuleIds',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skipCollab: 'boolean',
      sendWangwang: 'boolean',
      versionList: 'string',
      akProjectId: 'number',
      userId: 'number',
      idPath: 'string',
      ignoreIntegrate: 'boolean',
      attachmentIds: 'string',
      commitDate: 'number',
      updateStatusAt: 'number',
      trackers: 'string',
      subject: 'string',
      userStaffId: 'string',
      attachmentList: 'string',
      verifierId: 'number',
      ignoreCheck: 'boolean',
      moduleList: 'string',
      attachmented: 'boolean',
      seriousLevelId: 'number',
      tagIdList: 'string',
      watched: 'boolean',
      assignedTo: 'string',
      assignedToIds: 'string',
      priorityId: 'number',
      recordChangeLog: 'boolean',
      updatedAt: 'number',
      templateId: 'number',
      verifier: 'string',
      status: 'string',
      relatedUserIds: 'string',
      relatedAKProjectIds: 'string',
      relatedAKProjectGuids: 'string',
      createdAt: 'number',
      assignedToIdList: 'string',
      cfsList: { 'type': 'array', 'itemType': GetIssueByIdResponseBodyDataCfsList },
      priority: 'string',
      statusStage: 'number',
      assignedToStaffId: 'string',
      parentId: 'number',
      description: 'string',
      logicalStatus: 'string',
      versionIds: 'string',
      seriousLevel: 'string',
      statusId: 'number',
      stamp: 'string',
      user: 'string',
      trackerIds: 'string',
      assignedToId: 'number',
      changeLogList: 'string',
      issueTypeId: 'number',
      regionId: 'number',
      guid: 'string',
      assignedToMaps: 'string',
      blackListNotice: 'string',
      moduleUpdated: 'boolean',
      projectIds: 'string',
      commentList: 'string',
      verifierStaffId: 'string',
      moduleIds: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJoinCodeResponseBodyData extends $tea.Model {
  code?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectMembersResponseBodyDataUsers extends $tea.Model {
  avatar?: string;
  email?: string;
  realName?: string;
  staffId?: string;
  nickName?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
      email: 'Email',
      realName: 'RealName',
      staffId: 'StaffId',
      nickName: 'NickName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      email: 'string',
      realName: 'string',
      staffId: 'string',
      nickName: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectMembersResponseBodyData extends $tea.Model {
  identifier?: string;
  users?: GetProjectMembersResponseBodyDataUsers[];
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      users: 'Users',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      users: { 'type': 'array', 'itemType': GetProjectMembersResponseBodyDataUsers },
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByAliyunPkResponseBodyDataDingtalkUser extends $tea.Model {
  dingtalkUserId?: number;
  dingId?: string;
  unionId?: string;
  nick?: string;
  codeUserName?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      dingtalkUserId: 'DingtalkUserId',
      dingId: 'DingId',
      unionId: 'UnionId',
      nick: 'Nick',
      codeUserName: 'CodeUserName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingtalkUserId: 'number',
      dingId: 'string',
      unionId: 'string',
      nick: 'string',
      codeUserName: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByAliyunPkResponseBodyDataUserProfileDTO extends $tea.Model {
  dataSource?: string;
  avatar?: string;
  email?: string;
  mobile?: string;
  userId?: number;
  createdAt?: number;
  englishName?: string;
  nickName?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      dataSource: 'DataSource',
      avatar: 'Avatar',
      email: 'Email',
      mobile: 'Mobile',
      userId: 'UserId',
      createdAt: 'CreatedAt',
      englishName: 'EnglishName',
      nickName: 'NickName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSource: 'string',
      avatar: 'string',
      email: 'string',
      mobile: 'string',
      userId: 'number',
      createdAt: 'number',
      englishName: 'string',
      nickName: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByAliyunPkResponseBodyDataAliyunUser extends $tea.Model {
  email?: string;
  havanaId?: string;
  taobaoNick?: string;
  kp?: string;
  realname?: string;
  nickName?: string;
  accountStructure?: number;
  aliyunId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      havanaId: 'HavanaId',
      taobaoNick: 'TaobaoNick',
      kp: 'Kp',
      realname: 'Realname',
      nickName: 'NickName',
      accountStructure: 'AccountStructure',
      aliyunId: 'AliyunId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      havanaId: 'string',
      taobaoNick: 'string',
      kp: 'string',
      realname: 'string',
      nickName: 'string',
      accountStructure: 'number',
      aliyunId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserByAliyunPkResponseBodyData extends $tea.Model {
  uuid?: string;
  guid?: string;
  dingtalkUser?: GetUserByAliyunPkResponseBodyDataDingtalkUser;
  userProfileDTO?: GetUserByAliyunPkResponseBodyDataUserProfileDTO;
  nickName?: string;
  mainAccountType?: string;
  aliyunUser?: GetUserByAliyunPkResponseBodyDataAliyunUser;
  isValid?: boolean;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
      guid: 'Guid',
      dingtalkUser: 'DingtalkUser',
      userProfileDTO: 'UserProfileDTO',
      nickName: 'NickName',
      mainAccountType: 'MainAccountType',
      aliyunUser: 'AliyunUser',
      isValid: 'IsValid',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
      guid: 'string',
      dingtalkUser: GetUserByAliyunPkResponseBodyDataDingtalkUser,
      userProfileDTO: GetUserByAliyunPkResponseBodyDataUserProfileDTO,
      nickName: 'string',
      mainAccountType: 'string',
      aliyunUser: GetUserByAliyunPkResponseBodyDataAliyunUser,
      isValid: 'boolean',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkitemByIdResponseBodyDataCfsList extends $tea.Model {
  type?: string;
  value?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkitemByIdResponseBodyData extends $tea.Model {
  skipCollab?: boolean;
  sendWangwang?: boolean;
  versionList?: string;
  akProjectId?: number;
  userId?: number;
  idPath?: string;
  ignoreIntegrate?: boolean;
  attachmentIds?: string;
  commitDate?: number;
  updateStatusAt?: number;
  trackers?: string;
  subject?: string;
  userStaffId?: string;
  attachmentList?: string;
  verifierId?: number;
  ignoreCheck?: boolean;
  moduleList?: string;
  attachmented?: boolean;
  seriousLevelId?: number;
  tagIdList?: string;
  watched?: boolean;
  assignedTo?: string;
  assignedToIds?: string;
  priorityId?: number;
  recordChangeLog?: boolean;
  updatedAt?: number;
  templateId?: number;
  verifier?: string;
  status?: string;
  relatedUserIds?: string;
  relatedAKProjectIds?: string;
  relatedAKProjectGuids?: string;
  createdAt?: number;
  assignedToIdList?: string;
  cfsList?: GetWorkitemByIdResponseBodyDataCfsList[];
  priority?: string;
  statusStage?: number;
  assignedToStaffId?: string;
  parentId?: number;
  description?: string;
  logicalStatus?: string;
  versionIds?: string;
  seriousLevel?: string;
  statusId?: number;
  stamp?: string;
  user?: string;
  trackerIds?: string;
  assignedToId?: number;
  changeLogList?: string;
  issueTypeId?: number;
  regionId?: number;
  guid?: string;
  assignedToMaps?: string;
  blackListNotice?: string;
  moduleUpdated?: boolean;
  projectIds?: string;
  commentList?: string;
  verifierStaffId?: string;
  moduleIds?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      skipCollab: 'SkipCollab',
      sendWangwang: 'SendWangwang',
      versionList: 'VersionList',
      akProjectId: 'AkProjectId',
      userId: 'UserId',
      idPath: 'IdPath',
      ignoreIntegrate: 'IgnoreIntegrate',
      attachmentIds: 'AttachmentIds',
      commitDate: 'CommitDate',
      updateStatusAt: 'UpdateStatusAt',
      trackers: 'Trackers',
      subject: 'Subject',
      userStaffId: 'UserStaffId',
      attachmentList: 'AttachmentList',
      verifierId: 'VerifierId',
      ignoreCheck: 'IgnoreCheck',
      moduleList: 'ModuleList',
      attachmented: 'Attachmented',
      seriousLevelId: 'SeriousLevelId',
      tagIdList: 'TagIdList',
      watched: 'Watched',
      assignedTo: 'AssignedTo',
      assignedToIds: 'AssignedToIds',
      priorityId: 'PriorityId',
      recordChangeLog: 'RecordChangeLog',
      updatedAt: 'UpdatedAt',
      templateId: 'TemplateId',
      verifier: 'Verifier',
      status: 'Status',
      relatedUserIds: 'RelatedUserIds',
      relatedAKProjectIds: 'RelatedAKProjectIds',
      relatedAKProjectGuids: 'RelatedAKProjectGuids',
      createdAt: 'CreatedAt',
      assignedToIdList: 'AssignedToIdList',
      cfsList: 'CfsList',
      priority: 'Priority',
      statusStage: 'StatusStage',
      assignedToStaffId: 'AssignedToStaffId',
      parentId: 'ParentId',
      description: 'Description',
      logicalStatus: 'LogicalStatus',
      versionIds: 'VersionIds',
      seriousLevel: 'SeriousLevel',
      statusId: 'StatusId',
      stamp: 'Stamp',
      user: 'User',
      trackerIds: 'TrackerIds',
      assignedToId: 'AssignedToId',
      changeLogList: 'ChangeLogList',
      issueTypeId: 'IssueTypeId',
      regionId: 'RegionId',
      guid: 'Guid',
      assignedToMaps: 'AssignedToMaps',
      blackListNotice: 'BlackListNotice',
      moduleUpdated: 'ModuleUpdated',
      projectIds: 'ProjectIds',
      commentList: 'CommentList',
      verifierStaffId: 'VerifierStaffId',
      moduleIds: 'ModuleIds',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skipCollab: 'boolean',
      sendWangwang: 'boolean',
      versionList: 'string',
      akProjectId: 'number',
      userId: 'number',
      idPath: 'string',
      ignoreIntegrate: 'boolean',
      attachmentIds: 'string',
      commitDate: 'number',
      updateStatusAt: 'number',
      trackers: 'string',
      subject: 'string',
      userStaffId: 'string',
      attachmentList: 'string',
      verifierId: 'number',
      ignoreCheck: 'boolean',
      moduleList: 'string',
      attachmented: 'boolean',
      seriousLevelId: 'number',
      tagIdList: 'string',
      watched: 'boolean',
      assignedTo: 'string',
      assignedToIds: 'string',
      priorityId: 'number',
      recordChangeLog: 'boolean',
      updatedAt: 'number',
      templateId: 'number',
      verifier: 'string',
      status: 'string',
      relatedUserIds: 'string',
      relatedAKProjectIds: 'string',
      relatedAKProjectGuids: 'string',
      createdAt: 'number',
      assignedToIdList: 'string',
      cfsList: { 'type': 'array', 'itemType': GetWorkitemByIdResponseBodyDataCfsList },
      priority: 'string',
      statusStage: 'number',
      assignedToStaffId: 'string',
      parentId: 'number',
      description: 'string',
      logicalStatus: 'string',
      versionIds: 'string',
      seriousLevel: 'string',
      statusId: 'number',
      stamp: 'string',
      user: 'string',
      trackerIds: 'string',
      assignedToId: 'number',
      changeLogList: 'string',
      issueTypeId: 'number',
      regionId: 'number',
      guid: 'string',
      assignedToMaps: 'string',
      blackListNotice: 'string',
      moduleUpdated: 'boolean',
      projectIds: 'string',
      commentList: 'string',
      verifierStaffId: 'string',
      moduleIds: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinCompanyResponseBodyData extends $tea.Model {
  applicationId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchProjectsByRegionResponseBodyData extends $tea.Model {
  status?: string;
  type?: string;
  aoneType?: string;
  stamp?: string;
  fullName?: string;
  icons?: string[];
  idPath?: string;
  mode?: string;
  aoneId?: number;
  parentId?: number;
  description?: string;
  customFieldMap?: string[];
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      aoneType: 'AoneType',
      stamp: 'Stamp',
      fullName: 'FullName',
      icons: 'Icons',
      idPath: 'IdPath',
      mode: 'Mode',
      aoneId: 'AoneId',
      parentId: 'ParentId',
      description: 'Description',
      customFieldMap: 'CustomFieldMap',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      aoneType: 'string',
      stamp: 'string',
      fullName: 'string',
      icons: { 'type': 'array', 'itemType': 'string' },
      idPath: 'string',
      mode: 'string',
      aoneId: 'number',
      parentId: 'number',
      description: 'string',
      customFieldMap: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTestCaseResponseBodyData extends $tea.Model {
  pageNum?: string;
  cases?: string;
  pageSize?: string;
  pageTotal?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      cases: 'Cases',
      pageSize: 'PageSize',
      pageTotal: 'PageTotal',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'string',
      cases: 'string',
      pageSize: 'string',
      pageTotal: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchWorkitemResponseBodyData extends $tea.Model {
  fixedUserId?: number;
  sendWangwang?: boolean;
  skipCollab?: boolean;
  versionList?: string;
  akProjectId?: number;
  projectId?: number;
  userId?: number;
  versionId?: number;
  idPath?: string;
  ignoreIntegrate?: boolean;
  attachmentIds?: string;
  commitDate?: number;
  akVersionIds?: string;
  region?: string;
  trackers?: string;
  subject?: string;
  solution?: number;
  attachmentList?: string;
  userStaffId?: string;
  ignoreCheck?: boolean;
  akPaths?: string;
  verifierId?: number;
  moduleList?: string;
  attachmented?: boolean;
  sourceId?: number;
  seriousLevelId?: number;
  tagIdList?: string;
  watched?: boolean;
  assignedTo?: string;
  assignedToIds?: string;
  closedDuration?: number;
  priorityId?: number;
  recordChangeLog?: boolean;
  issueRelations?: string;
  updatedAt?: number;
  templateId?: number;
  verifier?: string;
  status?: string;
  relatedUserIds?: string;
  relatedAKProjectGuids?: string;
  relatedAKProjectIds?: string;
  watcherIdList?: string;
  createdAt?: number;
  assignedToIdList?: string;
  priority?: string;
  statusStage?: number;
  assignedToStaffId?: string;
  parentId?: number;
  logicalStatus?: string;
  versionIds?: string;
  scope?: number;
  seriousLevel?: string;
  statusId?: number;
  stamp?: string;
  user?: string;
  source?: string;
  assignedToId?: number;
  trackerIds?: string;
  issueTypeId?: number;
  changeLogList?: string;
  fixedDuration?: number;
  scopeUserIds?: string;
  devDuration?: number;
  linePath?: string;
  blackListNotice?: string;
  projectIds?: string;
  testsuiteId?: number;
  moduleUpdated?: boolean;
  commentList?: string;
  sprintId?: number;
  respondDuration?: number;
  moduleIds?: string;
  verifierStaffId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      fixedUserId: 'FixedUserId',
      sendWangwang: 'SendWangwang',
      skipCollab: 'SkipCollab',
      versionList: 'VersionList',
      akProjectId: 'AkProjectId',
      projectId: 'ProjectId',
      userId: 'UserId',
      versionId: 'VersionId',
      idPath: 'IdPath',
      ignoreIntegrate: 'IgnoreIntegrate',
      attachmentIds: 'AttachmentIds',
      commitDate: 'CommitDate',
      akVersionIds: 'AkVersionIds',
      region: 'Region',
      trackers: 'Trackers',
      subject: 'Subject',
      solution: 'Solution',
      attachmentList: 'AttachmentList',
      userStaffId: 'UserStaffId',
      ignoreCheck: 'IgnoreCheck',
      akPaths: 'AkPaths',
      verifierId: 'VerifierId',
      moduleList: 'ModuleList',
      attachmented: 'Attachmented',
      sourceId: 'SourceId',
      seriousLevelId: 'SeriousLevelId',
      tagIdList: 'TagIdList',
      watched: 'Watched',
      assignedTo: 'AssignedTo',
      assignedToIds: 'AssignedToIds',
      closedDuration: 'ClosedDuration',
      priorityId: 'PriorityId',
      recordChangeLog: 'RecordChangeLog',
      issueRelations: 'IssueRelations',
      updatedAt: 'UpdatedAt',
      templateId: 'TemplateId',
      verifier: 'Verifier',
      status: 'Status',
      relatedUserIds: 'RelatedUserIds',
      relatedAKProjectGuids: 'RelatedAKProjectGuids',
      relatedAKProjectIds: 'RelatedAKProjectIds',
      watcherIdList: 'WatcherIdList',
      createdAt: 'CreatedAt',
      assignedToIdList: 'AssignedToIdList',
      priority: 'Priority',
      statusStage: 'StatusStage',
      assignedToStaffId: 'AssignedToStaffId',
      parentId: 'ParentId',
      logicalStatus: 'LogicalStatus',
      versionIds: 'VersionIds',
      scope: 'Scope',
      seriousLevel: 'SeriousLevel',
      statusId: 'StatusId',
      stamp: 'Stamp',
      user: 'User',
      source: 'Source',
      assignedToId: 'AssignedToId',
      trackerIds: 'TrackerIds',
      issueTypeId: 'IssueTypeId',
      changeLogList: 'ChangeLogList',
      fixedDuration: 'FixedDuration',
      scopeUserIds: 'ScopeUserIds',
      devDuration: 'DevDuration',
      linePath: 'LinePath',
      blackListNotice: 'BlackListNotice',
      projectIds: 'ProjectIds',
      testsuiteId: 'TestsuiteId',
      moduleUpdated: 'ModuleUpdated',
      commentList: 'CommentList',
      sprintId: 'SprintId',
      respondDuration: 'RespondDuration',
      moduleIds: 'ModuleIds',
      verifierStaffId: 'VerifierStaffId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fixedUserId: 'number',
      sendWangwang: 'boolean',
      skipCollab: 'boolean',
      versionList: 'string',
      akProjectId: 'number',
      projectId: 'number',
      userId: 'number',
      versionId: 'number',
      idPath: 'string',
      ignoreIntegrate: 'boolean',
      attachmentIds: 'string',
      commitDate: 'number',
      akVersionIds: 'string',
      region: 'string',
      trackers: 'string',
      subject: 'string',
      solution: 'number',
      attachmentList: 'string',
      userStaffId: 'string',
      ignoreCheck: 'boolean',
      akPaths: 'string',
      verifierId: 'number',
      moduleList: 'string',
      attachmented: 'boolean',
      sourceId: 'number',
      seriousLevelId: 'number',
      tagIdList: 'string',
      watched: 'boolean',
      assignedTo: 'string',
      assignedToIds: 'string',
      closedDuration: 'number',
      priorityId: 'number',
      recordChangeLog: 'boolean',
      issueRelations: 'string',
      updatedAt: 'number',
      templateId: 'number',
      verifier: 'string',
      status: 'string',
      relatedUserIds: 'string',
      relatedAKProjectGuids: 'string',
      relatedAKProjectIds: 'string',
      watcherIdList: 'string',
      createdAt: 'number',
      assignedToIdList: 'string',
      priority: 'string',
      statusStage: 'number',
      assignedToStaffId: 'string',
      parentId: 'number',
      logicalStatus: 'string',
      versionIds: 'string',
      scope: 'number',
      seriousLevel: 'string',
      statusId: 'number',
      stamp: 'string',
      user: 'string',
      source: 'string',
      assignedToId: 'number',
      trackerIds: 'string',
      issueTypeId: 'number',
      changeLogList: 'string',
      fixedDuration: 'number',
      scopeUserIds: 'string',
      devDuration: 'number',
      linePath: 'string',
      blackListNotice: 'string',
      projectIds: 'string',
      testsuiteId: 'number',
      moduleUpdated: 'boolean',
      commentList: 'string',
      sprintId: 'number',
      respondDuration: 'number',
      moduleIds: 'string',
      verifierStaffId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchWorkitemWithTotalCountResponseBodyData extends $tea.Model {
  fixedUserId?: number;
  sendWangwang?: boolean;
  skipCollab?: boolean;
  versionList?: string;
  akProjectId?: number;
  projectId?: number;
  userId?: number;
  versionId?: number;
  idPath?: string;
  ignoreIntegrate?: boolean;
  attachmentIds?: string;
  commitDate?: number;
  akVersionIds?: string;
  region?: string;
  trackers?: string;
  subject?: string;
  solution?: number;
  attachmentList?: string;
  userStaffId?: string;
  ignoreCheck?: boolean;
  akPaths?: string;
  verifierId?: number;
  moduleList?: string;
  attachmented?: boolean;
  sourceId?: number;
  seriousLevelId?: number;
  tagIdList?: string;
  watched?: boolean;
  assignedTo?: string;
  assignedToIds?: string;
  closedDuration?: number;
  priorityId?: number;
  recordChangeLog?: boolean;
  issueRelations?: string;
  updatedAt?: number;
  templateId?: number;
  verifier?: string;
  status?: string;
  relatedUserIds?: string;
  relatedAKProjectGuids?: string;
  relatedAKProjectIds?: string;
  watcherIdList?: string;
  createdAt?: number;
  assignedToIdList?: string;
  priority?: string;
  statusStage?: number;
  assignedToStaffId?: string;
  parentId?: number;
  logicalStatus?: string;
  versionIds?: string;
  scope?: number;
  seriousLevel?: string;
  statusId?: number;
  stamp?: string;
  user?: string;
  source?: string;
  assignedToId?: number;
  trackerIds?: string;
  issueTypeId?: number;
  changeLogList?: string;
  fixedDuration?: number;
  scopeUserIds?: string;
  devDuration?: number;
  linePath?: string;
  blackListNotice?: string;
  projectIds?: string;
  testsuiteId?: number;
  moduleUpdated?: boolean;
  commentList?: string;
  sprintId?: number;
  respondDuration?: number;
  moduleIds?: string;
  verifierStaffId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      fixedUserId: 'FixedUserId',
      sendWangwang: 'SendWangwang',
      skipCollab: 'SkipCollab',
      versionList: 'VersionList',
      akProjectId: 'AkProjectId',
      projectId: 'ProjectId',
      userId: 'UserId',
      versionId: 'VersionId',
      idPath: 'IdPath',
      ignoreIntegrate: 'IgnoreIntegrate',
      attachmentIds: 'AttachmentIds',
      commitDate: 'CommitDate',
      akVersionIds: 'AkVersionIds',
      region: 'Region',
      trackers: 'Trackers',
      subject: 'Subject',
      solution: 'Solution',
      attachmentList: 'AttachmentList',
      userStaffId: 'UserStaffId',
      ignoreCheck: 'IgnoreCheck',
      akPaths: 'AkPaths',
      verifierId: 'VerifierId',
      moduleList: 'ModuleList',
      attachmented: 'Attachmented',
      sourceId: 'SourceId',
      seriousLevelId: 'SeriousLevelId',
      tagIdList: 'TagIdList',
      watched: 'Watched',
      assignedTo: 'AssignedTo',
      assignedToIds: 'AssignedToIds',
      closedDuration: 'ClosedDuration',
      priorityId: 'PriorityId',
      recordChangeLog: 'RecordChangeLog',
      issueRelations: 'IssueRelations',
      updatedAt: 'UpdatedAt',
      templateId: 'TemplateId',
      verifier: 'Verifier',
      status: 'Status',
      relatedUserIds: 'RelatedUserIds',
      relatedAKProjectGuids: 'RelatedAKProjectGuids',
      relatedAKProjectIds: 'RelatedAKProjectIds',
      watcherIdList: 'WatcherIdList',
      createdAt: 'CreatedAt',
      assignedToIdList: 'AssignedToIdList',
      priority: 'Priority',
      statusStage: 'StatusStage',
      assignedToStaffId: 'AssignedToStaffId',
      parentId: 'ParentId',
      logicalStatus: 'LogicalStatus',
      versionIds: 'VersionIds',
      scope: 'Scope',
      seriousLevel: 'SeriousLevel',
      statusId: 'StatusId',
      stamp: 'Stamp',
      user: 'User',
      source: 'Source',
      assignedToId: 'AssignedToId',
      trackerIds: 'TrackerIds',
      issueTypeId: 'IssueTypeId',
      changeLogList: 'ChangeLogList',
      fixedDuration: 'FixedDuration',
      scopeUserIds: 'ScopeUserIds',
      devDuration: 'DevDuration',
      linePath: 'LinePath',
      blackListNotice: 'BlackListNotice',
      projectIds: 'ProjectIds',
      testsuiteId: 'TestsuiteId',
      moduleUpdated: 'ModuleUpdated',
      commentList: 'CommentList',
      sprintId: 'SprintId',
      respondDuration: 'RespondDuration',
      moduleIds: 'ModuleIds',
      verifierStaffId: 'VerifierStaffId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fixedUserId: 'number',
      sendWangwang: 'boolean',
      skipCollab: 'boolean',
      versionList: 'string',
      akProjectId: 'number',
      projectId: 'number',
      userId: 'number',
      versionId: 'number',
      idPath: 'string',
      ignoreIntegrate: 'boolean',
      attachmentIds: 'string',
      commitDate: 'number',
      akVersionIds: 'string',
      region: 'string',
      trackers: 'string',
      subject: 'string',
      solution: 'number',
      attachmentList: 'string',
      userStaffId: 'string',
      ignoreCheck: 'boolean',
      akPaths: 'string',
      verifierId: 'number',
      moduleList: 'string',
      attachmented: 'boolean',
      sourceId: 'number',
      seriousLevelId: 'number',
      tagIdList: 'string',
      watched: 'boolean',
      assignedTo: 'string',
      assignedToIds: 'string',
      closedDuration: 'number',
      priorityId: 'number',
      recordChangeLog: 'boolean',
      issueRelations: 'string',
      updatedAt: 'number',
      templateId: 'number',
      verifier: 'string',
      status: 'string',
      relatedUserIds: 'string',
      relatedAKProjectGuids: 'string',
      relatedAKProjectIds: 'string',
      watcherIdList: 'string',
      createdAt: 'number',
      assignedToIdList: 'string',
      priority: 'string',
      statusStage: 'number',
      assignedToStaffId: 'string',
      parentId: 'number',
      logicalStatus: 'string',
      versionIds: 'string',
      scope: 'number',
      seriousLevel: 'string',
      statusId: 'number',
      stamp: 'string',
      user: 'string',
      source: 'string',
      assignedToId: 'number',
      trackerIds: 'string',
      issueTypeId: 'number',
      changeLogList: 'string',
      fixedDuration: 'number',
      scopeUserIds: 'string',
      devDuration: 'number',
      linePath: 'string',
      blackListNotice: 'string',
      projectIds: 'string',
      testsuiteId: 'number',
      moduleUpdated: 'boolean',
      commentList: 'string',
      sprintId: 'number',
      respondDuration: 'number',
      moduleIds: 'string',
      verifierStaffId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncUserToRdcResponseBodyData extends $tea.Model {
  isValid?: boolean;
  static names(): { [key: string]: string } {
    return {
      isValid: 'IsValid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isValid: 'boolean',
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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("rdc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addEnterpriseMemberWithOptions(request: AddEnterpriseMemberRequest, runtime: $Util.RuntimeOptions): Promise<AddEnterpriseMemberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddEnterpriseMemberResponse>(await this.doRPCRequest("AddEnterpriseMember", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new AddEnterpriseMemberResponse({}));
  }

  async addEnterpriseMember(request: AddEnterpriseMemberRequest): Promise<AddEnterpriseMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addEnterpriseMemberWithOptions(request, runtime);
  }

  async addRamMemberWithOptions(request: AddRamMemberRequest, runtime: $Util.RuntimeOptions): Promise<AddRamMemberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddRamMemberResponse>(await this.doRPCRequest("AddRamMember", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new AddRamMemberResponse({}));
  }

  async addRamMember(request: AddRamMemberRequest): Promise<AddRamMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addRamMemberWithOptions(request, runtime);
  }

  async approveJoinCompanyWithOptions(request: ApproveJoinCompanyRequest, runtime: $Util.RuntimeOptions): Promise<ApproveJoinCompanyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ApproveJoinCompanyResponse>(await this.doRPCRequest("ApproveJoinCompany", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new ApproveJoinCompanyResponse({}));
  }

  async approveJoinCompany(request: ApproveJoinCompanyRequest): Promise<ApproveJoinCompanyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.approveJoinCompanyWithOptions(request, runtime);
  }

  async createEnterpriseWithOptions(tmpReq: CreateEnterpriseRequest, runtime: $Util.RuntimeOptions): Promise<CreateEnterpriseResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateEnterpriseShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.emails)) {
      request.emailsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.emails, "Emails", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateEnterpriseResponse>(await this.doRPCRequest("CreateEnterprise", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new CreateEnterpriseResponse({}));
  }

  async createEnterprise(request: CreateEnterpriseRequest): Promise<CreateEnterpriseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEnterpriseWithOptions(request, runtime);
  }

  async createWorkitemWithOptions(request: CreateWorkitemRequest, runtime: $Util.RuntimeOptions): Promise<CreateWorkitemResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateWorkitemResponse>(await this.doRPCRequest("CreateWorkitem", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new CreateWorkitemResponse({}));
  }

  async createWorkitem(request: CreateWorkitemRequest): Promise<CreateWorkitemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWorkitemWithOptions(request, runtime);
  }

  async getBindedUserByDingIdWithOptions(request: GetBindedUserByDingIdRequest, runtime: $Util.RuntimeOptions): Promise<GetBindedUserByDingIdResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetBindedUserByDingIdResponse>(await this.doRPCRequest("GetBindedUserByDingId", "2018-08-21", "HTTPS", "GET", "AK", "json", req, runtime), new GetBindedUserByDingIdResponse({}));
  }

  async getBindedUserByDingId(request: GetBindedUserByDingIdRequest): Promise<GetBindedUserByDingIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBindedUserByDingIdWithOptions(request, runtime);
  }

  async getChangeLogWithOptions(tmpReq: GetChangeLogRequest, runtime: $Util.RuntimeOptions): Promise<GetChangeLogResponse> {
    Util.validateModel(tmpReq);
    let request = new GetChangeLogShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.targetIds)) {
      request.targetIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.targetIds, "TargetIds", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetChangeLogResponse>(await this.doRPCRequest("GetChangeLog", "2018-08-21", "HTTPS", "GET", "AK", "json", req, runtime), new GetChangeLogResponse({}));
  }

  async getChangeLog(request: GetChangeLogRequest): Promise<GetChangeLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getChangeLogWithOptions(request, runtime);
  }

  async getCustomFieldsByTemplateIdWithOptions(request: GetCustomFieldsByTemplateIdRequest, runtime: $Util.RuntimeOptions): Promise<GetCustomFieldsByTemplateIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetCustomFieldsByTemplateIdResponse>(await this.doRPCRequest("GetCustomFieldsByTemplateId", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetCustomFieldsByTemplateIdResponse({}));
  }

  async getCustomFieldsByTemplateId(request: GetCustomFieldsByTemplateIdRequest): Promise<GetCustomFieldsByTemplateIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCustomFieldsByTemplateIdWithOptions(request, runtime);
  }

  async getIssueByIdWithOptions(request: GetIssueByIdRequest, runtime: $Util.RuntimeOptions): Promise<GetIssueByIdResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetIssueByIdResponse>(await this.doRPCRequest("GetIssueById", "2018-08-21", "HTTPS", "GET", "AK", "json", req, runtime), new GetIssueByIdResponse({}));
  }

  async getIssueById(request: GetIssueByIdRequest): Promise<GetIssueByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIssueByIdWithOptions(request, runtime);
  }

  async getJoinCodeWithOptions(request: GetJoinCodeRequest, runtime: $Util.RuntimeOptions): Promise<GetJoinCodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetJoinCodeResponse>(await this.doRPCRequest("GetJoinCode", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetJoinCodeResponse({}));
  }

  async getJoinCode(request: GetJoinCodeRequest): Promise<GetJoinCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJoinCodeWithOptions(request, runtime);
  }

  async getProjectMembersWithOptions(request: GetProjectMembersRequest, runtime: $Util.RuntimeOptions): Promise<GetProjectMembersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetProjectMembersResponse>(await this.doRPCRequest("GetProjectMembers", "2018-08-21", "HTTPS", "GET", "AK", "json", req, runtime), new GetProjectMembersResponse({}));
  }

  async getProjectMembers(request: GetProjectMembersRequest): Promise<GetProjectMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProjectMembersWithOptions(request, runtime);
  }

  async getUserByAliyunPkWithOptions(request: GetUserByAliyunPkRequest, runtime: $Util.RuntimeOptions): Promise<GetUserByAliyunPkResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetUserByAliyunPkResponse>(await this.doRPCRequest("GetUserByAliyunPk", "2018-08-21", "HTTPS", "GET", "AK", "json", req, runtime), new GetUserByAliyunPkResponse({}));
  }

  async getUserByAliyunPk(request: GetUserByAliyunPkRequest): Promise<GetUserByAliyunPkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserByAliyunPkWithOptions(request, runtime);
  }

  async getWorkitemByIdWithOptions(request: GetWorkitemByIdRequest, runtime: $Util.RuntimeOptions): Promise<GetWorkitemByIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetWorkitemByIdResponse>(await this.doRPCRequest("GetWorkitemById", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new GetWorkitemByIdResponse({}));
  }

  async getWorkitemById(request: GetWorkitemByIdRequest): Promise<GetWorkitemByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWorkitemByIdWithOptions(request, runtime);
  }

  async joinCompanyWithOptions(request: JoinCompanyRequest, runtime: $Util.RuntimeOptions): Promise<JoinCompanyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<JoinCompanyResponse>(await this.doRPCRequest("JoinCompany", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new JoinCompanyResponse({}));
  }

  async joinCompany(request: JoinCompanyRequest): Promise<JoinCompanyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.joinCompanyWithOptions(request, runtime);
  }

  async searchProjectsByRegionWithOptions(request: SearchProjectsByRegionRequest, runtime: $Util.RuntimeOptions): Promise<SearchProjectsByRegionResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<SearchProjectsByRegionResponse>(await this.doRPCRequest("SearchProjectsByRegion", "2018-08-21", "HTTPS", "GET", "AK", "json", req, runtime), new SearchProjectsByRegionResponse({}));
  }

  async searchProjectsByRegion(request: SearchProjectsByRegionRequest): Promise<SearchProjectsByRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchProjectsByRegionWithOptions(request, runtime);
  }

  async searchTestCaseWithOptions(request: SearchTestCaseRequest, runtime: $Util.RuntimeOptions): Promise<SearchTestCaseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchTestCaseResponse>(await this.doRPCRequest("SearchTestCase", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new SearchTestCaseResponse({}));
  }

  async searchTestCase(request: SearchTestCaseRequest): Promise<SearchTestCaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTestCaseWithOptions(request, runtime);
  }

  async searchWorkitemWithOptions(request: SearchWorkitemRequest, runtime: $Util.RuntimeOptions): Promise<SearchWorkitemResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchWorkitemResponse>(await this.doRPCRequest("SearchWorkitem", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new SearchWorkitemResponse({}));
  }

  async searchWorkitem(request: SearchWorkitemRequest): Promise<SearchWorkitemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchWorkitemWithOptions(request, runtime);
  }

  async searchWorkitemWithTotalCountWithOptions(request: SearchWorkitemWithTotalCountRequest, runtime: $Util.RuntimeOptions): Promise<SearchWorkitemWithTotalCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchWorkitemWithTotalCountResponse>(await this.doRPCRequest("SearchWorkitemWithTotalCount", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new SearchWorkitemWithTotalCountResponse({}));
  }

  async searchWorkitemWithTotalCount(request: SearchWorkitemWithTotalCountRequest): Promise<SearchWorkitemWithTotalCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchWorkitemWithTotalCountWithOptions(request, runtime);
  }

  async syncUserToRdcWithOptions(request: SyncUserToRdcRequest, runtime: $Util.RuntimeOptions): Promise<SyncUserToRdcResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SyncUserToRdcResponse>(await this.doRPCRequest("SyncUserToRdc", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new SyncUserToRdcResponse({}));
  }

  async syncUserToRdc(request: SyncUserToRdcRequest): Promise<SyncUserToRdcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncUserToRdcWithOptions(request, runtime);
  }

  async updateWorkitemWithOptions(tmpReq: UpdateWorkitemRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWorkitemResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateWorkitemShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.cfList)) {
      request.cfListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.cfList, "CfList", "json");
    }

    if (!Util.isUnset(tmpReq.cfs)) {
      request.cfsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.cfs, "Cfs", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateWorkitemResponse>(await this.doRPCRequest("UpdateWorkitem", "2018-08-21", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateWorkitemResponse({}));
  }

  async updateWorkitem(request: UpdateWorkitemRequest): Promise<UpdateWorkitemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWorkitemWithOptions(request, runtime);
  }

}
