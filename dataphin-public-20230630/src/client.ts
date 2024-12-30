// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddTenantMembersRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  addCommand?: AddTenantMembersRequestAddCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      addCommand: 'AddCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addCommand: AddTenantMembersRequestAddCommand,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTenantMembersShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  addCommandShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      addCommandShrink: 'AddCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addCommandShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTenantMembersResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTenantMembersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddTenantMembersResponseBody;
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
      body: AddTenantMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTenantMembersBySourceUserRequest extends $tea.Model {
  addCommand?: AddTenantMembersBySourceUserRequestAddCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      addCommand: 'AddCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addCommand: AddTenantMembersBySourceUserRequestAddCommand,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTenantMembersBySourceUserShrinkRequest extends $tea.Model {
  addCommandShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      addCommandShrink: 'AddCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addCommandShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTenantMembersBySourceUserResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTenantMembersBySourceUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddTenantMembersBySourceUserResponseBody;
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
      body: AddTenantMembersBySourceUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserGroupMemberRequest extends $tea.Model {
  addCommand?: AddUserGroupMemberRequestAddCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      addCommand: 'AddCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addCommand: AddUserGroupMemberRequestAddCommand,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserGroupMemberShrinkRequest extends $tea.Model {
  addCommandShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      addCommandShrink: 'AddCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addCommandShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserGroupMemberResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserGroupMemberResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddUserGroupMemberResponseBody;
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
      body: AddUserGroupMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDataSourceConnectivityRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  checkCommand?: CheckDataSourceConnectivityRequestCheckCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      checkCommand: 'CheckCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkCommand: CheckDataSourceConnectivityRequestCheckCommand,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDataSourceConnectivityShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  checkCommandShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      checkCommandShrink: 'CheckCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkCommandShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDataSourceConnectivityResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDataSourceConnectivityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckDataSourceConnectivityResponseBody;
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
      body: CheckDataSourceConnectivityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDataSourceConnectivityByIdRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDataSourceConnectivityByIdResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDataSourceConnectivityByIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckDataSourceConnectivityByIdResponseBody;
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
      body: CheckDataSourceConnectivityByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourcePermissionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  checkCommand?: CheckResourcePermissionRequestCheckCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      checkCommand: 'CheckCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkCommand: CheckResourcePermissionRequestCheckCommand,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourcePermissionShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  checkCommandShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      checkCommandShrink: 'CheckCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkCommandShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourcePermissionResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  resourcePermissionList?: CheckResourcePermissionResponseBodyResourcePermissionList[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      resourcePermissionList: 'ResourcePermissionList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      resourcePermissionList: { 'type': 'array', 'itemType': CheckResourcePermissionResponseBodyResourcePermissionList },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourcePermissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckResourcePermissionResponseBody;
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
      body: CheckResourcePermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAdHocFileRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createCommand?: CreateAdHocFileRequestCreateCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateAdHocFileRequestCreateCommand,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAdHocFileShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createCommandShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommandShrink: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommandShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAdHocFileResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 1212313222
   */
  fileId?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      fileId: 'FileId',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      fileId: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAdHocFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAdHocFileResponseBody;
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
      body: CreateAdHocFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createCommand?: CreateBatchTaskRequestCreateCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateBatchTaskRequestCreateCommand,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchTaskShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createCommandShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommandShrink: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommandShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchTaskResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  createResult?: CreateBatchTaskResponseBodyCreateResult;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createResult: 'CreateResult',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createResult: CreateBatchTaskResponseBodyCreateResult,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateBatchTaskResponseBody;
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
      body: CreateBatchTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBizEntityRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createCommand?: CreateBizEntityRequestCreateCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateBizEntityRequestCreateCommand,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBizEntityShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createCommandShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommandShrink: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommandShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBizEntityResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  createResult?: CreateBizEntityResponseBodyCreateResult;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createResult: 'CreateResult',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createResult: CreateBizEntityResponseBodyCreateResult,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBizEntityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateBizEntityResponseBody;
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
      body: CreateBizEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBizUnitRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createCommand?: CreateBizUnitRequestCreateCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateBizUnitRequestCreateCommand,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBizUnitShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createCommandShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommandShrink: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommandShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBizUnitResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  createResult?: CreateBizUnitResponseBodyCreateResult;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createResult: 'CreateResult',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createResult: CreateBizUnitResponseBodyCreateResult,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBizUnitResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateBizUnitResponseBody;
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
      body: CreateBizUnitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataDomainRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createCommand?: CreateDataDomainRequestCreateCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateDataDomainRequestCreateCommand,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataDomainShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createCommandShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommandShrink: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommandShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataDomainResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  createResult?: CreateDataDomainResponseBodyCreateResult;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createResult: 'CreateResult',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createResult: CreateDataDomainResponseBodyCreateResult,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDataDomainResponseBody;
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
      body: CreateDataDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceRequest extends $tea.Model {
  createCommand?: CreateDataSourceRequestCreateCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateDataSourceRequestCreateCommand,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceShrinkRequest extends $tea.Model {
  createCommandShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommandShrink: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommandShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  createResult?: CreateDataSourceResponseBodyCreateResult;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createResult: 'CreateResult',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createResult: CreateDataSourceResponseBodyCreateResult,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDataSourceResponseBody;
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
      body: CreateDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDirectoryRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createCommand?: CreateDirectoryRequestCreateCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateDirectoryRequestCreateCommand,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDirectoryShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createCommandShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommandShrink: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommandShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDirectoryResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 1311113211
   */
  fileId?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      fileId: 'FileId',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      fileId: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDirectoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDirectoryResponseBody;
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
      body: CreateDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeSupplementRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createCommand?: CreateNodeSupplementRequestCreateCommand;
  /**
   * @example
   * DEV/PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      env: 'Env',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateNodeSupplementRequestCreateCommand,
      env: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeSupplementShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createCommandShrink?: string;
  /**
   * @example
   * DEV/PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommandShrink: 'CreateCommand',
      env: 'Env',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommandShrink: 'string',
      env: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeSupplementResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * f_2264518792396800000_20210223_2329354897145659392
   */
  submitId?: string;
  /**
   * @example
   * true/false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      submitId: 'SubmitId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      submitId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeSupplementResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateNodeSupplementResponseBody;
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
      body: CreateNodeSupplementResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineNodeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createPipelineNodeCommand?: CreatePipelineNodeRequestCreatePipelineNodeCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createPipelineNodeCommand: 'CreatePipelineNodeCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createPipelineNodeCommand: CreatePipelineNodeRequestCreatePipelineNodeCommand,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineNodeShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createPipelineNodeCommandShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createPipelineNodeCommandShrink: 'CreatePipelineNodeCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createPipelineNodeCommandShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineNodeResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CreatePipelineNodeResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreatePipelineNodeResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePipelineNodeResponseBody;
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
      body: CreatePipelineNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStreamBatchJobMappingRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  streamBatchJobMappingCreateCommand?: CreateStreamBatchJobMappingRequestStreamBatchJobMappingCreateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      streamBatchJobMappingCreateCommand: 'StreamBatchJobMappingCreateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      streamBatchJobMappingCreateCommand: CreateStreamBatchJobMappingRequestStreamBatchJobMappingCreateCommand,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStreamBatchJobMappingShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  streamBatchJobMappingCreateCommandShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      streamBatchJobMappingCreateCommandShrink: 'StreamBatchJobMappingCreateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      streamBatchJobMappingCreateCommandShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStreamBatchJobMappingResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CreateStreamBatchJobMappingResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateStreamBatchJobMappingResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStreamBatchJobMappingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateStreamBatchJobMappingResponseBody;
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
      body: CreateStreamBatchJobMappingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupRequest extends $tea.Model {
  createCommand?: CreateUserGroupRequestCreateCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateUserGroupRequestCreateCommand,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupShrinkRequest extends $tea.Model {
  createCommandShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommandShrink: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommandShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2313131
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateUserGroupResponseBody;
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
      body: CreateUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAdHocFileRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12121111
   */
  fileId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12132323
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      opTenantId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAdHocFileResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAdHocFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAdHocFileResponseBody;
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
      body: DeleteAdHocFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBatchTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deleteCommand?: DeleteBatchTaskRequestDeleteCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      deleteCommand: 'DeleteCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteCommand: DeleteBatchTaskRequestDeleteCommand,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBatchTaskShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deleteCommandShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      deleteCommandShrink: 'DeleteCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteCommandShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBatchTaskResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBatchTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteBatchTaskResponseBody;
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
      body: DeleteBatchTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBizEntityRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6798087749072704
   */
  bizUnitId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 101001201
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BIZ_OBJECT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizUnitId: 'BizUnitId',
      id: 'Id',
      opTenantId: 'OpTenantId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitId: 'number',
      id: 'number',
      opTenantId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBizEntityResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBizEntityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteBizEntityResponseBody;
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
      body: DeleteBizEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBizUnitRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6798087749072704
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBizUnitResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBizUnitResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteBizUnitResponseBody;
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
      body: DeleteBizUnitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataDomainRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6798087749072704
   */
  bizUnitId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1241844456
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      bizUnitId: 'BizUnitId',
      id: 'Id',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitId: 'number',
      id: 'number',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataDomainResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDataDomainResponseBody;
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
      body: DeleteDataDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deleteCommand?: DeleteDataSourceRequestDeleteCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      deleteCommand: 'DeleteCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteCommand: DeleteDataSourceRequestDeleteCommand,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deleteCommandShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      deleteCommandShrink: 'DeleteCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteCommandShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDataSourceResponseBody;
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
      body: DeleteDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDirectoryRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12121111
   */
  fileId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12132323
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      opTenantId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDirectoryResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDirectoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDirectoryResponseBody;
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
      body: DeleteDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 232131
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserGroupResponseBody;
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
      body: DeleteUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAdHocTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  executeCommand?: ExecuteAdHocTaskRequestExecuteCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      executeCommand: 'ExecuteCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executeCommand: ExecuteAdHocTaskRequestExecuteCommand,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAdHocTaskShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  executeCommandShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      executeCommandShrink: 'ExecuteCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executeCommandShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAdHocTaskResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  executeResult?: ExecuteAdHocTaskResponseBodyExecuteResult;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      executeResult: 'ExecuteResult',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      executeResult: ExecuteAdHocTaskResponseBodyExecuteResult,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAdHocTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteAdHocTaskResponseBody;
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
      body: ExecuteAdHocTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteManualNodeRequest extends $tea.Model {
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  executeCommand?: ExecuteManualNodeRequestExecuteCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      executeCommand: 'ExecuteCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      executeCommand: ExecuteManualNodeRequestExecuteCommand,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteManualNodeShrinkRequest extends $tea.Model {
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  executeCommandShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      executeCommandShrink: 'ExecuteCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      executeCommandShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteManualNodeResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * f_1231_121324
   */
  flowId?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      flowId: 'FlowId',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      flowId: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteManualNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteManualNodeResponseBody;
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
      body: ExecuteManualNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FixDataRequest extends $tea.Model {
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fixDataCommand?: FixDataRequestFixDataCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      fixDataCommand: 'FixDataCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      fixDataCommand: FixDataRequestFixDataCommand,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FixDataShrinkRequest extends $tea.Model {
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fixDataCommandShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      fixDataCommandShrink: 'FixDataCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      fixDataCommandShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FixDataResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * 12324234
   */
  submitId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      submitId: 'SubmitId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      submitId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FixDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FixDataResponseBody;
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
      body: FixDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdHocFileRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12121111
   */
  fileId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12132323
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      opTenantId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdHocFileResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  fileInfo?: GetAdHocFileResponseBodyFileInfo;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      fileInfo: 'FileInfo',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      fileInfo: GetAdHocFileResponseBodyFileInfo,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdHocFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAdHocFileResponseBody;
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
      body: GetAdHocFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdHocTaskLogRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1021
   */
  offset?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 131211211
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  subTaskId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MaxCompute_SQL_300000843_1611548758327
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      offset: 'Offset',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
      subTaskId: 'SubTaskId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      opTenantId: 'number',
      projectId: 'number',
      subTaskId: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdHocTaskLogResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  logInfo?: GetAdHocTaskLogResponseBodyLogInfo;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      logInfo: 'LogInfo',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      logInfo: GetAdHocTaskLogResponseBodyLogInfo,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdHocTaskLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAdHocTaskLogResponseBody;
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
      body: GetAdHocTaskLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdHocTaskResultRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 131211211
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  subTaskId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MaxCompute_SQL_300000843_1611548758327
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
      subTaskId: 'SubTaskId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      projectId: 'number',
      subTaskId: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdHocTaskResultResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  executeResult?: GetAdHocTaskResultResponseBodyExecuteResult;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      executeResult: 'ExecuteResult',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      executeResult: GetAdHocTaskResultResponseBodyExecuteResult,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdHocTaskResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAdHocTaskResultResponseBody;
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
      body: GetAdHocTaskResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertEventRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertEventResponseBody extends $tea.Model {
  alertEventInfo?: GetAlertEventResponseBodyAlertEventInfo;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      alertEventInfo: 'AlertEventInfo',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertEventInfo: GetAlertEventResponseBodyAlertEventInfo,
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAlertEventResponseBody;
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
      body: GetAlertEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskInfoRequest extends $tea.Model {
  /**
   * @example
   * dev
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12113111
   */
  fileId?: number;
  includeAllUpStreams?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 131211211
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      fileId: 'FileId',
      includeAllUpStreams: 'IncludeAllUpStreams',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      fileId: 'number',
      includeAllUpStreams: 'boolean',
      opTenantId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskInfoResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  taskInfo?: GetBatchTaskInfoResponseBodyTaskInfo;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskInfo: 'TaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskInfo: GetBatchTaskInfoResponseBodyTaskInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBatchTaskInfoResponseBody;
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
      body: GetBatchTaskInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskInfoByVersionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12113111
   */
  fileId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 131211211
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      opTenantId: 'number',
      projectId: 'number',
      versionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskInfoByVersionResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  taskInfo?: GetBatchTaskInfoByVersionResponseBodyTaskInfo;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskInfo: 'TaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskInfo: GetBatchTaskInfoByVersionResponseBodyTaskInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskInfoByVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBatchTaskInfoByVersionResponseBody;
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
      body: GetBatchTaskInfoByVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskUdfLineagesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12113111
   */
  fileId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 131211211
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      opTenantId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskUdfLineagesResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetBatchTaskUdfLineagesResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetBatchTaskUdfLineagesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskUdfLineagesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBatchTaskUdfLineagesResponseBody;
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
      body: GetBatchTaskUdfLineagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskVersionsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12113111
   */
  fileId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 131211211
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      opTenantId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskVersionsResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetBatchTaskVersionsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetBatchTaskVersionsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskVersionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBatchTaskVersionsResponseBody;
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
      body: GetBatchTaskVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBizEntityInfoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 101001201
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BIZ_OBJECT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      opTenantId: 'OpTenantId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      opTenantId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBizEntityInfoResponseBody extends $tea.Model {
  bizEntityInfo?: GetBizEntityInfoResponseBodyBizEntityInfo;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizEntityInfo: 'BizEntityInfo',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizEntityInfo: GetBizEntityInfoResponseBodyBizEntityInfo,
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBizEntityInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBizEntityInfoResponseBody;
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
      body: GetBizEntityInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBizEntityInfoByVersionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 101001201
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BIZ_OBJECT
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      opTenantId: 'OpTenantId',
      type: 'Type',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      opTenantId: 'number',
      type: 'string',
      versionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBizEntityInfoByVersionResponseBody extends $tea.Model {
  bizEntityInfo?: GetBizEntityInfoByVersionResponseBodyBizEntityInfo;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizEntityInfo: 'BizEntityInfo',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizEntityInfo: GetBizEntityInfoByVersionResponseBodyBizEntityInfo,
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBizEntityInfoByVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBizEntityInfoByVersionResponseBody;
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
      body: GetBizEntityInfoByVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBizUnitInfoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 101001201
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBizUnitInfoResponseBody extends $tea.Model {
  bizUnitInfo?: GetBizUnitInfoResponseBodyBizUnitInfo;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizUnitInfo: 'BizUnitInfo',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitInfo: GetBizUnitInfoResponseBodyBizUnitInfo,
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBizUnitInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBizUnitInfoResponseBody;
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
      body: GetBizUnitInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterQueueInfoByEnvRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7081229106458752
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BOTH
   */
  streamBatchMode?: string;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
      streamBatchMode: 'StreamBatchMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      opTenantId: 'number',
      projectId: 'number',
      streamBatchMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterQueueInfoByEnvResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetClusterQueueInfoByEnvResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetClusterQueueInfoByEnvResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterQueueInfoByEnvResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetClusterQueueInfoByEnvResponseBody;
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
      body: GetClusterQueueInfoByEnvResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataDomainInfoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1241844456
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataDomainInfoResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  dataDomainInfo?: GetDataDomainInfoResponseBodyDataDomainInfo;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataDomainInfo: 'DataDomainInfo',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataDomainInfo: GetDataDomainInfoResponseBodyDataDomainInfo,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataDomainInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDataDomainInfoResponseBody;
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
      body: GetDataDomainInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevObjectDependencyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DATA_PROCESS
   */
  objectFrom?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7026498387616064
   */
  objectId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7026498387616064
   */
  objectType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7021037162911616L
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      objectFrom: 'ObjectFrom',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectFrom: 'string',
      objectId: 'string',
      objectType: 'string',
      opTenantId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevObjectDependencyResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  devObjectDependencyList?: GetDevObjectDependencyResponseBodyDevObjectDependencyList[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      devObjectDependencyList: 'DevObjectDependencyList',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      devObjectDependencyList: { 'type': 'array', 'itemType': GetDevObjectDependencyResponseBodyDevObjectDependencyList },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevObjectDependencyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDevObjectDependencyResponseBody;
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
      body: GetDevObjectDependencyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectoryTreeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * codeManage
   */
  category?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7081229106458752
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      opTenantId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectoryTreeResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetDirectoryTreeResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetDirectoryTreeResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectoryTreeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDirectoryTreeResponseBody;
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
      body: GetDirectoryTreeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDownStreamRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  downStreamDepth?: number;
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceGet?: GetInstanceDownStreamRequestInstanceGet;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @example
   * SUCCESS
   */
  runStatus?: string;
  static names(): { [key: string]: string } {
    return {
      downStreamDepth: 'DownStreamDepth',
      env: 'Env',
      instanceGet: 'InstanceGet',
      opTenantId: 'OpTenantId',
      runStatus: 'RunStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downStreamDepth: 'number',
      env: 'string',
      instanceGet: GetInstanceDownStreamRequestInstanceGet,
      opTenantId: 'number',
      runStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDownStreamShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  downStreamDepth?: number;
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceGetShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @example
   * SUCCESS
   */
  runStatus?: string;
  static names(): { [key: string]: string } {
    return {
      downStreamDepth: 'DownStreamDepth',
      env: 'Env',
      instanceGetShrink: 'InstanceGet',
      opTenantId: 'OpTenantId',
      runStatus: 'RunStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downStreamDepth: 'number',
      env: 'string',
      instanceGetShrink: 'string',
      opTenantId: 'number',
      runStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDownStreamResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  instanceRelationList?: GetInstanceDownStreamResponseBodyInstanceRelationList[];
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceRelationList: 'InstanceRelationList',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceRelationList: { 'type': 'array', 'itemType': GetInstanceDownStreamResponseBodyInstanceRelationList },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDownStreamResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceDownStreamResponseBody;
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
      body: GetInstanceDownStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceUpDownStreamRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  downStreamDepth?: number;
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: GetInstanceUpDownStreamRequestInstanceId;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1001121
   */
  projectId?: number;
  /**
   * @example
   * 1
   */
  upStreamDepth?: number;
  static names(): { [key: string]: string } {
    return {
      downStreamDepth: 'DownStreamDepth',
      env: 'Env',
      instanceId: 'InstanceId',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
      upStreamDepth: 'UpStreamDepth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downStreamDepth: 'number',
      env: 'string',
      instanceId: GetInstanceUpDownStreamRequestInstanceId,
      opTenantId: 'number',
      projectId: 'number',
      upStreamDepth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceUpDownStreamShrinkRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  downStreamDepth?: number;
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceIdShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1001121
   */
  projectId?: number;
  /**
   * @example
   * 1
   */
  upStreamDepth?: number;
  static names(): { [key: string]: string } {
    return {
      downStreamDepth: 'DownStreamDepth',
      env: 'Env',
      instanceIdShrink: 'InstanceId',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
      upStreamDepth: 'UpStreamDepth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downStreamDepth: 'number',
      env: 'string',
      instanceIdShrink: 'string',
      opTenantId: 'number',
      projectId: 'number',
      upStreamDepth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceUpDownStreamResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  instanceDagInfo?: GetInstanceUpDownStreamResponseBodyInstanceDagInfo;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceDagInfo: 'InstanceDagInfo',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceDagInfo: GetInstanceUpDownStreamResponseBodyInstanceDagInfo,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceUpDownStreamResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceUpDownStreamResponseBody;
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
      body: GetInstanceUpDownStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLatestSubmitDetailRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  submitDetailQuery?: GetLatestSubmitDetailRequestSubmitDetailQuery;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      submitDetailQuery: 'SubmitDetailQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      submitDetailQuery: GetLatestSubmitDetailRequestSubmitDetailQuery,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLatestSubmitDetailShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  submitDetailQueryShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      submitDetailQueryShrink: 'SubmitDetailQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      submitDetailQueryShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLatestSubmitDetailResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  submitDetailResult?: GetLatestSubmitDetailResponseBodySubmitDetailResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      submitDetailResult: 'SubmitDetailResult',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      submitDetailResult: GetLatestSubmitDetailResponseBodySubmitDetailResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLatestSubmitDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLatestSubmitDetailResponseBody;
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
      body: GetLatestSubmitDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMyRolesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMyRolesResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  roleList?: GetMyRolesResponseBodyRoleList[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      roleList: 'RoleList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      roleList: { 'type': 'array', 'itemType': GetMyRolesResponseBodyRoleList },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMyRolesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMyRolesResponseBody;
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
      body: GetMyRolesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMyTenantsRequest extends $tea.Model {
  featureCodeList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      featureCodeList: 'FeatureCodeList',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureCodeList: { 'type': 'array', 'itemType': 'string' },
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMyTenantsShrinkRequest extends $tea.Model {
  featureCodeListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      featureCodeListShrink: 'FeatureCodeList',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureCodeListShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMyTenantsResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  tenantList?: GetMyTenantsResponseBodyTenantList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tenantList: 'TenantList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tenantList: { 'type': 'array', 'itemType': GetMyTenantsResponseBodyTenantList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMyTenantsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMyTenantsResponseBody;
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
      body: GetMyTenantsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeUpDownStreamRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  downStreamDepth?: number;
  /**
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  nodeId?: GetNodeUpDownStreamRequestNodeId;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @example
   * 113123
   */
  projectId?: number;
  /**
   * @example
   * 1
   */
  upStreamDepth?: number;
  static names(): { [key: string]: string } {
    return {
      downStreamDepth: 'DownStreamDepth',
      env: 'Env',
      nodeId: 'NodeId',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
      upStreamDepth: 'UpStreamDepth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downStreamDepth: 'number',
      env: 'string',
      nodeId: GetNodeUpDownStreamRequestNodeId,
      opTenantId: 'number',
      projectId: 'number',
      upStreamDepth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeUpDownStreamShrinkRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  downStreamDepth?: number;
  /**
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  nodeIdShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @example
   * 113123
   */
  projectId?: number;
  /**
   * @example
   * 1
   */
  upStreamDepth?: number;
  static names(): { [key: string]: string } {
    return {
      downStreamDepth: 'DownStreamDepth',
      env: 'Env',
      nodeIdShrink: 'NodeId',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
      upStreamDepth: 'UpStreamDepth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downStreamDepth: 'number',
      env: 'string',
      nodeIdShrink: 'string',
      opTenantId: 'number',
      projectId: 'number',
      upStreamDepth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeUpDownStreamResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  nodeDagInfo?: GetNodeUpDownStreamResponseBodyNodeDagInfo;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      nodeDagInfo: 'NodeDagInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      nodeDagInfo: GetNodeUpDownStreamResponseBodyNodeDagInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeUpDownStreamResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetNodeUpDownStreamResponseBody;
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
      body: GetNodeUpDownStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOperationSubmitStatusRequest extends $tea.Model {
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1324444131
   */
  jobId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      jobId: 'JobId',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      jobId: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOperationSubmitStatusResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  operationSubmitJob?: GetOperationSubmitStatusResponseBodyOperationSubmitJob;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      operationSubmitJob: 'OperationSubmitJob',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      operationSubmitJob: GetOperationSubmitStatusResponseBodyOperationSubmitJob,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOperationSubmitStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOperationSubmitStatusResponseBody;
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
      body: GetOperationSubmitStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalInstanceRequest extends $tea.Model {
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * t_23231
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2323131
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      instanceId: 'InstanceId',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      instanceId: 'string',
      opTenantId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  instance?: GetPhysicalInstanceResponseBodyInstance;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instance: 'Instance',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instance: GetPhysicalInstanceResponseBodyInstance,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPhysicalInstanceResponseBody;
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
      body: GetPhysicalInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalInstanceLogRequest extends $tea.Model {
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * t_5929472_20210411_9577721
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123131
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      instanceId: 'InstanceId',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      instanceId: 'string',
      opTenantId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalInstanceLogResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  taskrunLogList?: GetPhysicalInstanceLogResponseBodyTaskrunLogList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskrunLogList: 'TaskrunLogList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskrunLogList: { 'type': 'array', 'itemType': GetPhysicalInstanceLogResponseBodyTaskrunLogList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalInstanceLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPhysicalInstanceLogResponseBody;
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
      body: GetPhysicalInstanceLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalNodeRequest extends $tea.Model {
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * n_232132
   */
  nodeId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      nodeId: 'NodeId',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      nodeId: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalNodeResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  nodeInfo?: GetPhysicalNodeResponseBodyNodeInfo;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      nodeInfo: 'NodeInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      nodeInfo: GetPhysicalNodeResponseBodyNodeInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPhysicalNodeResponseBody;
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
      body: GetPhysicalNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalNodeByOutputNameRequest extends $tea.Model {
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * t_test
   */
  outputName?: string;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      opTenantId: 'OpTenantId',
      outputName: 'OutputName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      opTenantId: 'number',
      outputName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalNodeByOutputNameResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  nodeInfo?: GetPhysicalNodeByOutputNameResponseBodyNodeInfo;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      nodeInfo: 'NodeInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      nodeInfo: GetPhysicalNodeByOutputNameResponseBodyNodeInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalNodeByOutputNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPhysicalNodeByOutputNameResponseBody;
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
      body: GetPhysicalNodeByOutputNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalNodeContentRequest extends $tea.Model {
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * n_232411
   */
  nodeId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      nodeId: 'NodeId',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      nodeId: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalNodeContentResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetPhysicalNodeContentResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetPhysicalNodeContentResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalNodeContentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPhysicalNodeContentResponseBody;
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
      body: GetPhysicalNodeContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalNodeOperationLogRequest extends $tea.Model {
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * n_231131
   */
  nodeId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      nodeId: 'NodeId',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      nodeId: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalNodeOperationLogResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  operationLogList?: GetPhysicalNodeOperationLogResponseBodyOperationLogList[];
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      operationLogList: 'OperationLogList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      operationLogList: { 'type': 'array', 'itemType': GetPhysicalNodeOperationLogResponseBodyOperationLogList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalNodeOperationLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPhysicalNodeOperationLogResponseBody;
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
      body: GetPhysicalNodeOperationLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectProduceUserRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 131311111321
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectProduceUserResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  user?: GetProjectProduceUserResponseBodyUser;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      user: GetProjectProduceUserResponseBodyUser,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectProduceUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProjectProduceUserResponseBody;
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
      body: GetProjectProduceUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueEngineVersionByEnvRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 61187014-a3ba-4cdd-8609-1f0aa3df4a3d
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7081229106458752
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default-queue
   */
  queueName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BOTH
   */
  streamBatchMode?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      env: 'Env',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
      queueName: 'QueueName',
      streamBatchMode: 'StreamBatchMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      env: 'string',
      opTenantId: 'number',
      projectId: 'number',
      queueName: 'string',
      streamBatchMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueEngineVersionByEnvResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: string[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': 'string' },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueEngineVersionByEnvResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQueueEngineVersionByEnvResponseBody;
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
      body: GetQueueEngineVersionByEnvResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupplementDagrunRequest extends $tea.Model {
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f_8241792_20201202_2099680
   */
  supplementId?: string;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      opTenantId: 'OpTenantId',
      supplementId: 'SupplementId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      opTenantId: 'number',
      supplementId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupplementDagrunResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  dagrunList?: GetSupplementDagrunResponseBodyDagrunList[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dagrunList: 'DagrunList',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dagrunList: { 'type': 'array', 'itemType': GetSupplementDagrunResponseBodyDagrunList },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupplementDagrunResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSupplementDagrunResponseBody;
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
      body: GetSupplementDagrunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupplementDagrunInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * Dagrun ID
   * 
   * This parameter is required.
   * 
   * @example
   * dr_2242792_14542
   */
  dagrunId?: string;
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      dagrunId: 'DagrunId',
      env: 'Env',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagrunId: 'string',
      env: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupplementDagrunInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  instanceList?: GetSupplementDagrunInstanceResponseBodyInstanceList[];
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceList: 'InstanceList',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceList: { 'type': 'array', 'itemType': GetSupplementDagrunInstanceResponseBodyInstanceList },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupplementDagrunInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSupplementDagrunInstanceResponseBody;
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
      body: GetSupplementDagrunInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserBySourceIdRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 323131
   */
  sourceId?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      sourceId: 'SourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      sourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserBySourceIdResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  user?: GetUserBySourceIdResponseBodyUser;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      user: GetUserBySourceIdResponseBodyUser,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserBySourceIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserBySourceIdResponseBody;
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
      body: GetUserBySourceIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1313213
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  userGroupInfo?: GetUserGroupResponseBodyUserGroupInfo;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      userGroupInfo: 'UserGroupInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      userGroupInfo: GetUserGroupResponseBodyUserGroupInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserGroupResponseBody;
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
      body: GetUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUsersRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  userIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      userIdList: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      userIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUsersShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  userIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      userIdListShrink: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      userIdListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUsersResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  userList?: GetUsersResponseBodyUserList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      userList: { 'type': 'array', 'itemType': GetUsersResponseBodyUserList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUsersResponseBody;
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
      body: GetUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantResourcePermissionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  grantCommand?: GrantResourcePermissionRequestGrantCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      grantCommand: 'GrantCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantCommand: GrantResourcePermissionRequestGrantCommand,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantResourcePermissionShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  grantCommandShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      grantCommandShrink: 'GrantCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantCommandShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantResourcePermissionResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantResourcePermissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GrantResourcePermissionResponseBody;
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
      body: GrantResourcePermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddableRolesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddableRolesResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  roleList?: ListAddableRolesResponseBodyRoleList[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      roleList: 'RoleList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      roleList: { 'type': 'array', 'itemType': ListAddableRolesResponseBodyRoleList },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddableRolesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAddableRolesResponseBody;
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
      body: ListAddableRolesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddableUsersRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQuery?: ListAddableUsersRequestListQuery;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListAddableUsersRequestListQuery,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddableUsersShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQueryShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQueryShrink: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQueryShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddableUsersResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  pageResult?: ListAddableUsersResponseBodyPageResult;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListAddableUsersResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddableUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAddableUsersResponseBody;
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
      body: ListAddableUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertEventsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQuery?: ListAlertEventsRequestListQuery;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListAlertEventsRequestListQuery,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertEventsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQueryShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQueryShrink: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQueryShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertEventsResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  listResult?: ListAlertEventsResponseBodyListResult;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      listResult: 'ListResult',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      listResult: ListAlertEventsResponseBodyListResult,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertEventsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAlertEventsResponseBody;
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
      body: ListAlertEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertNotificationsRequest extends $tea.Model {
  listQuery?: ListAlertNotificationsRequestListQuery;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListAlertNotificationsRequestListQuery,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertNotificationsShrinkRequest extends $tea.Model {
  listQueryShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQueryShrink: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQueryShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertNotificationsResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  listResult?: ListAlertNotificationsResponseBodyListResult;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      listResult: 'ListResult',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      listResult: ListAlertNotificationsResponseBodyListResult,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertNotificationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAlertNotificationsResponseBody;
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
      body: ListAlertNotificationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBizEntitiesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQuery?: ListBizEntitiesRequestListQuery;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListBizEntitiesRequestListQuery,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBizEntitiesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQueryShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQueryShrink: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQueryShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBizEntitiesResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  pageResult?: ListBizEntitiesResponseBodyPageResult;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListBizEntitiesResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBizEntitiesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListBizEntitiesResponseBody;
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
      body: ListBizEntitiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBizUnitsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBizUnitsResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListBizUnitsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListBizUnitsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBizUnitsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListBizUnitsResponseBody;
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
      body: ListBizUnitsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataDomainsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQuery?: ListDataDomainsRequestListQuery;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListDataDomainsRequestListQuery,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataDomainsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQueryShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQueryShrink: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQueryShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataDomainsResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListDataDomainsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListDataDomainsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataDomainsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDataDomainsResponseBody;
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
      body: ListDataDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceWithConfigRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQuery?: ListDataSourceWithConfigRequestListQuery;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListDataSourceWithConfigRequestListQuery,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceWithConfigShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQueryShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQueryShrink: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQueryShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceWithConfigResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  pageResult?: ListDataSourceWithConfigResponseBodyPageResult;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListDataSourceWithConfigResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceWithConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDataSourceWithConfigResponseBody;
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
      body: ListDataSourceWithConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQuery?: ListFilesRequestListQuery;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListFilesRequestListQuery,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQueryShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQueryShrink: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQueryShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  fileList?: ListFilesResponseBodyFileList[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      fileList: 'FileList',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      fileList: { 'type': 'array', 'itemType': ListFilesResponseBodyFileList },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFilesResponseBody;
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
      body: ListFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $tea.Model {
  /**
   * @example
   * PROD
   */
  env?: string;
  listQuery?: ListInstancesRequestListQuery;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      listQuery: ListInstancesRequestListQuery,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesShrinkRequest extends $tea.Model {
  /**
   * @example
   * PROD
   */
  env?: string;
  listQueryShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      listQueryShrink: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      listQueryShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  pageResult?: ListInstancesResponseBodyPageResult;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListInstancesResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstancesResponseBody;
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

export class ListNodeDownStreamRequest extends $tea.Model {
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  listQuery?: ListNodeDownStreamRequestListQuery;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      listQuery: ListNodeDownStreamRequestListQuery,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDownStreamShrinkRequest extends $tea.Model {
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  listQueryShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      listQueryShrink: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      listQueryShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDownStreamResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  nodeInfoList?: ListNodeDownStreamResponseBodyNodeInfoList[];
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      nodeInfoList: 'NodeInfoList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      nodeInfoList: { 'type': 'array', 'itemType': ListNodeDownStreamResponseBodyNodeInfoList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDownStreamResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNodeDownStreamResponseBody;
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
      body: ListNodeDownStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesRequest extends $tea.Model {
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  listQuery?: ListNodesRequestListQuery;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      listQuery: ListNodesRequestListQuery,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesShrinkRequest extends $tea.Model {
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  listQueryShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      listQueryShrink: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      listQueryShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  pageResult?: ListNodesResponseBodyPageResult;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListNodesResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNodesResponseBody;
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
      body: ListNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishRecordsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQuery?: ListPublishRecordsRequestListQuery;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListPublishRecordsRequestListQuery,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishRecordsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQueryShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQueryShrink: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQueryShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishRecordsResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  listResult?: ListPublishRecordsResponseBodyListResult;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      listResult: 'ListResult',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      listResult: ListPublishRecordsResponseBodyListResult,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPublishRecordsResponseBody;
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
      body: ListPublishRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionOperationLogRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQuery?: ListResourcePermissionOperationLogRequestListQuery;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListResourcePermissionOperationLogRequestListQuery,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionOperationLogShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQueryShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQueryShrink: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQueryShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionOperationLogResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  pageResult?: ListResourcePermissionOperationLogResponseBodyPageResult;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListResourcePermissionOperationLogResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionOperationLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourcePermissionOperationLogResponseBody;
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
      body: ListResourcePermissionOperationLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQuery?: ListResourcePermissionsRequestListQuery;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListResourcePermissionsRequestListQuery,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQueryShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQueryShrink: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQueryShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionsResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  pageResult?: ListResourcePermissionsResponseBodyPageResult;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListResourcePermissionsResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourcePermissionsResponseBody;
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
      body: ListResourcePermissionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubmitRecordsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQuery?: ListSubmitRecordsRequestListQuery;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListSubmitRecordsRequestListQuery,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubmitRecordsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQueryShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQueryShrink: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQueryShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubmitRecordsResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  listResult?: ListSubmitRecordsResponseBodyListResult;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      listResult: 'ListResult',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      listResult: ListSubmitRecordsResponseBodyListResult,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubmitRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSubmitRecordsResponseBody;
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
      body: ListSubmitRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantMembersRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQuery?: ListTenantMembersRequestListQuery;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListTenantMembersRequestListQuery,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantMembersShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQueryShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQueryShrink: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQueryShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantMembersResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  pageResult?: ListTenantMembersResponseBodyPageResult;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListTenantMembersResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantMembersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTenantMembersResponseBody;
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
      body: ListTenantMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupMembersRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQuery?: ListUserGroupMembersRequestListQuery;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListUserGroupMembersRequestListQuery,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupMembersShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQueryShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQueryShrink: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQueryShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupMembersResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  pageResult?: ListUserGroupMembersResponseBodyPageResult;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListUserGroupMembersResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupMembersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserGroupMembersResponseBody;
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
      body: ListUserGroupMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQuery?: ListUserGroupsRequestListQuery;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListUserGroupsRequestListQuery,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  listQueryShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listQueryShrink: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQueryShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  pageResult?: ListUserGroupsResponseBodyPageResult;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListUserGroupsResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserGroupsResponseBody;
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
      body: ListUserGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineBatchTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test xx
   */
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12113111
   */
  fileId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 131211211
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      fileId: 'FileId',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      fileId: 'number',
      opTenantId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineBatchTaskResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  offlineResult?: OfflineBatchTaskResponseBodyOfflineResult;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      offlineResult: 'OfflineResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      offlineResult: OfflineBatchTaskResponseBodyOfflineResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineBatchTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OfflineBatchTaskResponseBody;
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
      body: OfflineBatchTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineBizEntityRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  offlineCommand?: OfflineBizEntityRequestOfflineCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      offlineCommand: 'OfflineCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offlineCommand: OfflineBizEntityRequestOfflineCommand,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineBizEntityShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  offlineCommandShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      offlineCommandShrink: 'OfflineCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offlineCommandShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineBizEntityResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineBizEntityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OfflineBizEntityResponseBody;
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
      body: OfflineBizEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnlineBizEntityRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  onlineCommand?: OnlineBizEntityRequestOnlineCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      onlineCommand: 'OnlineCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlineCommand: OnlineBizEntityRequestOnlineCommand,
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnlineBizEntityShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  onlineCommandShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      onlineCommandShrink: 'OnlineCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlineCommandShrink: 'string',
      opTenantId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnlineBizEntityResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnlineBizEntityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnlineBizEntityResponseBody;
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
      body: OnlineBizEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateInstanceRequest extends $tea.Model {
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  operateCommand?: OperateInstanceRequestOperateCommand;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      opTenantId: 'OpTenantId',
      operateCommand: 'OperateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      opTenantId: 'number',
      operateCommand: OperateInstanceRequestOperateCommand,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateInstanceShrinkRequest extends $tea.Model {
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  operateCommandShrink?: string;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      opTenantId: 'OpTenantId',
      operateCommandShrink: 'OperateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      opTenantId: 'number',
      operateCommandShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  instanceStatusList?: OperateInstanceResponseBodyInstanceStatusList[];
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instanceStatusList: 'InstanceStatusList',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instanceStatusList: { 'type': 'array', 'itemType': OperateInstanceResponseBodyInstanceStatusList },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OperateInstanceResponseBody;
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
      body: OperateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ParseBatchTaskDependencyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  parseCommand?: ParseBatchTaskDependencyRequestParseCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      parseCommand: 'ParseCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      parseCommand: ParseBatchTaskDependencyRequestParseCommand,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ParseBatchTaskDependencyShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  parseCommandShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      parseCommandShrink: 'ParseCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      parseCommandShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ParseBatchTaskDependencyResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  parseResult?: ParseBatchTaskDependencyResponseBodyParseResult;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      parseResult: 'ParseResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      parseResult: ParseBatchTaskDependencyResponseBodyParseResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ParseBatchTaskDependencyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ParseBatchTaskDependencyResponseBody;
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
      body: ParseBatchTaskDependencyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PausePhysicalNodeRequest extends $tea.Model {
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pauseCommand?: PausePhysicalNodeRequestPauseCommand;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      opTenantId: 'OpTenantId',
      pauseCommand: 'PauseCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      opTenantId: 'number',
      pauseCommand: PausePhysicalNodeRequestPauseCommand,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PausePhysicalNodeShrinkRequest extends $tea.Model {
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pauseCommandShrink?: string;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      opTenantId: 'OpTenantId',
      pauseCommandShrink: 'PauseCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      opTenantId: 'number',
      pauseCommandShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PausePhysicalNodeResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  nodeOperateResultList?: PausePhysicalNodeResponseBodyNodeOperateResultList[];
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      nodeOperateResultList: 'NodeOperateResultList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      nodeOperateResultList: { 'type': 'array', 'itemType': PausePhysicalNodeResponseBodyNodeOperateResultList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PausePhysicalNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PausePhysicalNodeResponseBody;
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
      body: PausePhysicalNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishObjectListRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  publishCommand?: PublishObjectListRequestPublishCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      publishCommand: 'PublishCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      publishCommand: PublishObjectListRequestPublishCommand,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishObjectListShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  publishCommandShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      publishCommandShrink: 'PublishCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      publishCommandShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishObjectListResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  publishResult?: PublishObjectListResponseBodyPublishResult;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      publishResult: 'PublishResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      publishResult: PublishObjectListResponseBodyPublishResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishObjectListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PublishObjectListResponseBody;
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
      body: PublishObjectListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTenantMemberRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  removeCommand?: RemoveTenantMemberRequestRemoveCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      removeCommand: 'RemoveCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      removeCommand: RemoveTenantMemberRequestRemoveCommand,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTenantMemberShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  removeCommandShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      removeCommandShrink: 'RemoveCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      removeCommandShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTenantMemberResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTenantMemberResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveTenantMemberResponseBody;
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
      body: RemoveTenantMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserGroupMemberRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  removeCommand?: RemoveUserGroupMemberRequestRemoveCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      removeCommand: 'RemoveCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      removeCommand: RemoveUserGroupMemberRequestRemoveCommand,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserGroupMemberShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  removeCommandShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      removeCommandShrink: 'RemoveCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      removeCommandShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserGroupMemberResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserGroupMemberResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveUserGroupMemberResponseBody;
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
      body: RemoveUserGroupMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumePhysicalNodeRequest extends $tea.Model {
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  resumeCommand?: ResumePhysicalNodeRequestResumeCommand;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      opTenantId: 'OpTenantId',
      resumeCommand: 'ResumeCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      opTenantId: 'number',
      resumeCommand: ResumePhysicalNodeRequestResumeCommand,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumePhysicalNodeShrinkRequest extends $tea.Model {
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  resumeCommandShrink?: string;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      opTenantId: 'OpTenantId',
      resumeCommandShrink: 'ResumeCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      opTenantId: 'number',
      resumeCommandShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumePhysicalNodeResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  nodeOperateResultList?: ResumePhysicalNodeResponseBodyNodeOperateResultList[];
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      nodeOperateResultList: 'NodeOperateResultList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      nodeOperateResultList: { 'type': 'array', 'itemType': ResumePhysicalNodeResponseBodyNodeOperateResultList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumePhysicalNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResumePhysicalNodeResponseBody;
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
      body: ResumePhysicalNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeResourcePermissionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  revokeCommand?: RevokeResourcePermissionRequestRevokeCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      revokeCommand: 'RevokeCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      revokeCommand: RevokeResourcePermissionRequestRevokeCommand,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeResourcePermissionShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  revokeCommandShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      revokeCommandShrink: 'RevokeCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      revokeCommandShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeResourcePermissionResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeResourcePermissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevokeResourcePermissionResponseBody;
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
      body: RevokeResourcePermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAdHocTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 131211211
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MaxCompute_SQL_300000843_1611548758327
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      projectId: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAdHocTaskResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAdHocTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopAdHocTaskResponseBody;
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
      body: StopAdHocTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBatchTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  submitCommand?: SubmitBatchTaskRequestSubmitCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      submitCommand: 'SubmitCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      submitCommand: SubmitBatchTaskRequestSubmitCommand,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBatchTaskShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  submitCommandShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      submitCommandShrink: 'SubmitCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      submitCommandShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBatchTaskResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  submitResult?: SubmitBatchTaskResponseBodySubmitResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      submitResult: 'SubmitResult',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      submitResult: SubmitBatchTaskResponseBodySubmitResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBatchTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitBatchTaskResponseBody;
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
      body: SubmitBatchTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAdHocFileRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  updateCommand?: UpdateAdHocFileRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommand: UpdateAdHocFileRequestUpdateCommand,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAdHocFileShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  updateCommandShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommandShrink: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommandShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAdHocFileResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAdHocFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAdHocFileResponseBody;
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
      body: UpdateAdHocFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  updateCommand?: UpdateBatchTaskRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommand: UpdateBatchTaskRequestUpdateCommand,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchTaskShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  updateCommandShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommandShrink: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommandShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchTaskResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  updateResult?: UpdateBatchTaskResponseBodyUpdateResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      updateResult: 'UpdateResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      updateResult: UpdateBatchTaskResponseBodyUpdateResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateBatchTaskResponseBody;
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
      body: UpdateBatchTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchTaskUdfLineagesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  updateCommand?: UpdateBatchTaskUdfLineagesRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommand: UpdateBatchTaskUdfLineagesRequestUpdateCommand,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchTaskUdfLineagesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  updateCommandShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommandShrink: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommandShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchTaskUdfLineagesResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchTaskUdfLineagesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateBatchTaskUdfLineagesResponseBody;
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
      body: UpdateBatchTaskUdfLineagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBizEntityRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  updateCommand?: UpdateBizEntityRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommand: UpdateBizEntityRequestUpdateCommand,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBizEntityShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  updateCommandShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommandShrink: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommandShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBizEntityResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBizEntityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateBizEntityResponseBody;
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
      body: UpdateBizEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBizUnitRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  updateCommand?: UpdateBizUnitRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommand: UpdateBizUnitRequestUpdateCommand,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBizUnitShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  updateCommandShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommandShrink: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommandShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBizUnitResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBizUnitResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateBizUnitResponseBody;
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
      body: UpdateBizUnitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataDomainRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  updateCommand?: UpdateDataDomainRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommand: UpdateDataDomainRequestUpdateCommand,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataDomainShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  updateCommandShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommandShrink: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommandShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataDomainResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDataDomainResponseBody;
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
      body: UpdateDataDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataSourceBasicInfoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  updateCommand?: UpdateDataSourceBasicInfoRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommand: UpdateDataSourceBasicInfoRequestUpdateCommand,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataSourceBasicInfoShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  updateCommandShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommandShrink: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommandShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataSourceBasicInfoResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataSourceBasicInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDataSourceBasicInfoResponseBody;
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
      body: UpdateDataSourceBasicInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataSourceConfigRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  updateCommand?: UpdateDataSourceConfigRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommand: UpdateDataSourceConfigRequestUpdateCommand,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataSourceConfigShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  updateCommandShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommandShrink: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommandShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataSourceConfigResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataSourceConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDataSourceConfigResponseBody;
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
      body: UpdateDataSourceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileDirectoryRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /xx测试/目录new
   */
  directory?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12121111
   */
  fileId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12132323
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      directory: 'Directory',
      fileId: 'FileId',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directory: 'string',
      fileId: 'number',
      opTenantId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileDirectoryResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileDirectoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateFileDirectoryResponseBody;
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
      body: UpdateFileDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileNameRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12121111
   */
  fileId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxNew
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12132323
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      name: 'Name',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      name: 'string',
      opTenantId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileNameResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateFileNameResponseBody;
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
      body: UpdateFileNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTenantMemberRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  updateCommand?: UpdateTenantMemberRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommand: UpdateTenantMemberRequestUpdateCommand,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTenantMemberShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  updateCommandShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommandShrink: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommandShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTenantMemberResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTenantMemberResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTenantMemberResponseBody;
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
      body: UpdateTenantMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  updateCommand?: UpdateUserGroupRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommand: UpdateUserGroupRequestUpdateCommand,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  updateCommandShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommandShrink: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommandShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserGroupResponseBody;
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
      body: UpdateUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupSwitchRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 31323
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      opTenantId: 'OpTenantId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      opTenantId: 'number',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupSwitchResponseBody extends $tea.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupSwitchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserGroupSwitchResponseBody;
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
      body: UpdateUserGroupSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTenantMembersRequestAddCommandUserList extends $tea.Model {
  /**
   * @example
   * 1323241
   */
  id?: string;
  roleList?: string[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      roleList: 'RoleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      roleList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTenantMembersRequestAddCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  userList?: AddTenantMembersRequestAddCommandUserList[];
  static names(): { [key: string]: string } {
    return {
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userList: { 'type': 'array', 'itemType': AddTenantMembersRequestAddCommandUserList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTenantMembersBySourceUserRequestAddCommandSourceUserList extends $tea.Model {
  /**
   * @example
   * 123@xx.com
   */
  accountName?: string;
  /**
   * @example
   * 123@dingding
   */
  dingNumber?: string;
  displayName?: string;
  /**
   * @example
   * 123@xx.com
   */
  mail?: string;
  /**
   * @example
   * 13888888888
   */
  mobilePhone?: string;
  /**
   * @example
   * 2323131
   */
  sourceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dingNumber: 'DingNumber',
      displayName: 'DisplayName',
      mail: 'Mail',
      mobilePhone: 'MobilePhone',
      sourceId: 'SourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      dingNumber: 'string',
      displayName: 'string',
      mail: 'string',
      mobilePhone: 'string',
      sourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTenantMembersBySourceUserRequestAddCommand extends $tea.Model {
  sourceUserList?: AddTenantMembersBySourceUserRequestAddCommandSourceUserList[];
  static names(): { [key: string]: string } {
    return {
      sourceUserList: 'SourceUserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceUserList: { 'type': 'array', 'itemType': AddTenantMembersBySourceUserRequestAddCommandSourceUserList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserGroupMemberRequestAddCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 132331
   */
  userGroupId?: string;
  userIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      userGroupId: 'UserGroupId',
      userIdList: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupId: 'string',
      userIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDataSourceConnectivityRequestCheckCommandConfigItemList extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v1
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

export class CheckDataSourceConnectivityRequestCheckCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configItemList?: CheckDataSourceConnectivityRequestCheckCommandConfigItemList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MAX_COMPUTE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configItemList: 'ConfigItemList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configItemList: { 'type': 'array', 'itemType': CheckDataSourceConnectivityRequestCheckCommandConfigItemList },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourcePermissionRequestCheckCommandResourceList extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hadoop.300000806.data_distill.behavior_gameinfor_01
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourcePermissionRequestCheckCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * UPDATE
   */
  operate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceList?: CheckResourcePermissionRequestCheckCommandResourceList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PHYSICAL_TABLE
   */
  resourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 323231
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      operate: 'Operate',
      resourceList: 'ResourceList',
      resourceType: 'ResourceType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operate: 'string',
      resourceList: { 'type': 'array', 'itemType': CheckResourcePermissionRequestCheckCommandResourceList },
      resourceType: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourcePermissionResponseBodyResourcePermissionList extends $tea.Model {
  /**
   * @example
   * true
   */
  hasPermission?: boolean;
  /**
   * @example
   * hadoop.300000806.data_distill.behavior_gameinfor_01
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      hasPermission: 'HasPermission',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasPermission: 'boolean',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAdHocFileRequestCreateCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * select 1;
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /xx1/xx2/
   */
  directory?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_xx
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11212133
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      directory: 'Directory',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      directory: 'string',
      name: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchTaskRequestCreateCommand extends $tea.Model {
  /**
   * @example
   * mysql_catalog
   */
  dataSourceCatalog?: string;
  /**
   * @example
   * 12131111
   */
  dataSourceId?: string;
  /**
   * @example
   * erp
   */
  dataSourceSchema?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xx test.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /a/b
   */
  directory?: string;
  /**
   * @example
   * PYTHON3_7
   */
  engine?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test111
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10121101
   */
  projectId?: number;
  pythonModuleList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  scheduleType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5
   */
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceCatalog: 'DataSourceCatalog',
      dataSourceId: 'DataSourceId',
      dataSourceSchema: 'DataSourceSchema',
      description: 'Description',
      directory: 'Directory',
      engine: 'Engine',
      name: 'Name',
      projectId: 'ProjectId',
      pythonModuleList: 'PythonModuleList',
      scheduleType: 'ScheduleType',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceCatalog: 'string',
      dataSourceId: 'string',
      dataSourceSchema: 'string',
      description: 'string',
      directory: 'string',
      engine: 'string',
      name: 'string',
      projectId: 'number',
      pythonModuleList: { 'type': 'array', 'itemType': 'string' },
      scheduleType: 'number',
      taskType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchTaskResponseBodyCreateResult extends $tea.Model {
  /**
   * @example
   * 12113111
   */
  fileId?: number;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBizEntityRequestCreateCommandBizObject extends $tea.Model {
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * create_object_name
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * create_object_code_name
   */
  name?: string;
  /**
   * @example
   * 30010010
   */
  ownerUserId?: string;
  /**
   * @example
   * 116306
   */
  parentId?: number;
  refBizEntityIdList?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NORMAL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
      ownerUserId: 'OwnerUserId',
      parentId: 'ParentId',
      refBizEntityIdList: 'RefBizEntityIdList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      name: 'string',
      ownerUserId: 'string',
      parentId: 'number',
      refBizEntityIdList: { 'type': 'array', 'itemType': 'number' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBizEntityRequestCreateCommandBizProcess extends $tea.Model {
  bizEventEntityIdList?: number[];
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * create_process_name
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * create_process_code_name
   */
  name?: string;
  /**
   * @example
   * 30010010
   */
  ownerUserId?: string;
  preBizProcessIdList?: number[];
  refBizEntityIdList?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BIZ_EVENT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizEventEntityIdList: 'BizEventEntityIdList',
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
      ownerUserId: 'OwnerUserId',
      preBizProcessIdList: 'PreBizProcessIdList',
      refBizEntityIdList: 'RefBizEntityIdList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizEventEntityIdList: { 'type': 'array', 'itemType': 'number' },
      description: 'string',
      displayName: 'string',
      name: 'string',
      ownerUserId: 'string',
      preBizProcessIdList: { 'type': 'array', 'itemType': 'number' },
      refBizEntityIdList: { 'type': 'array', 'itemType': 'number' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBizEntityRequestCreateCommand extends $tea.Model {
  bizObject?: CreateBizEntityRequestCreateCommandBizObject;
  bizProcess?: CreateBizEntityRequestCreateCommandBizProcess;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6798087749072704
   */
  bizUnitId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20101011
   */
  dataDomainId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BIZ_OBJECT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizObject: 'BizObject',
      bizProcess: 'BizProcess',
      bizUnitId: 'BizUnitId',
      dataDomainId: 'DataDomainId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizObject: CreateBizEntityRequestCreateCommandBizObject,
      bizProcess: CreateBizEntityRequestCreateCommandBizProcess,
      bizUnitId: 'number',
      dataDomainId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBizEntityResponseBodyCreateResult extends $tea.Model {
  /**
   * @example
   * 12113111
   */
  bizEntityId?: number;
  static names(): { [key: string]: string } {
    return {
      bizEntityId: 'BizEntityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizEntityId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBizUnitRequestCreateCommandBizUnitAccountList extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20001201
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBizUnitRequestCreateCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bizUnitAccountList?: CreateBizUnitRequestCreateCommandBizUnitAccountList[];
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * create_object_name
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * icon-environment
   */
  icon?: string;
  /**
   * @example
   * DEV_PROD
   */
  mode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * create_object_code_name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      bizUnitAccountList: 'BizUnitAccountList',
      description: 'Description',
      displayName: 'DisplayName',
      icon: 'Icon',
      mode: 'Mode',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitAccountList: { 'type': 'array', 'itemType': CreateBizUnitRequestCreateCommandBizUnitAccountList },
      description: 'string',
      displayName: 'string',
      icon: 'string',
      mode: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBizUnitResponseBodyCreateResult extends $tea.Model {
  /**
   * @example
   * 545844456
   */
  bizUnitId?: number;
  static names(): { [key: string]: string } {
    return {
      bizUnitId: 'BizUnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataDomainRequestCreateCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dm_code_name
   */
  abbreviation?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 545844456
   */
  bizUnitId?: number;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 主题域测试
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dm_code_name
   */
  name?: string;
  /**
   * @example
   * 10232311
   */
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      abbreviation: 'Abbreviation',
      bizUnitId: 'BizUnitId',
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abbreviation: 'string',
      bizUnitId: 'number',
      description: 'string',
      displayName: 'string',
      name: 'string',
      parentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataDomainResponseBodyCreateResult extends $tea.Model {
  /**
   * @example
   * 1241844456
   */
  dataDomainId?: number;
  static names(): { [key: string]: string } {
    return {
      dataDomainId: 'DataDomainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDomainId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceRequestCreateCommandDevDataSourceCreateDataSourceCreateConfigItemList extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v1
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

export class CreateDataSourceRequestCreateCommandDevDataSourceCreateDataSourceCreate extends $tea.Model {
  /**
   * @example
   * true
   */
  checkActivity?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  configItemList?: CreateDataSourceRequestCreateCommandDevDataSourceCreateDataSourceCreateConfigItemList[];
  /**
   * @example
   * datasource for xxx in dev
   */
  description?: string;
  /**
   * @example
   * dp_test_dev
   */
  name?: string;
  /**
   * @example
   * MAX_COMPUTE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      checkActivity: 'CheckActivity',
      configItemList: 'ConfigItemList',
      description: 'Description',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkActivity: 'boolean',
      configItemList: { 'type': 'array', 'itemType': CreateDataSourceRequestCreateCommandDevDataSourceCreateDataSourceCreateConfigItemList },
      description: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceRequestCreateCommandDevDataSourceCreate extends $tea.Model {
  /**
   * @remarks
   * 数据源创建结构体
   */
  dataSourceCreate?: CreateDataSourceRequestCreateCommandDevDataSourceCreateDataSourceCreate;
  /**
   * @example
   * 1011
   */
  prodDataSourceId?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceCreate: 'DataSourceCreate',
      prodDataSourceId: 'ProdDataSourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceCreate: CreateDataSourceRequestCreateCommandDevDataSourceCreateDataSourceCreate,
      prodDataSourceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceRequestCreateCommandProdDataSourceCreateConfigItemList extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v1
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

export class CreateDataSourceRequestCreateCommandProdDataSourceCreate extends $tea.Model {
  /**
   * @example
   * true
   */
  checkActivity?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  configItemList?: CreateDataSourceRequestCreateCommandProdDataSourceCreateConfigItemList[];
  /**
   * @example
   * datasource for xx
   */
  description?: string;
  /**
   * @example
   * dp_test
   */
  name?: string;
  /**
   * @example
   * MAX_COMPUTE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      checkActivity: 'CheckActivity',
      configItemList: 'ConfigItemList',
      description: 'Description',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkActivity: 'boolean',
      configItemList: { 'type': 'array', 'itemType': CreateDataSourceRequestCreateCommandProdDataSourceCreateConfigItemList },
      description: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceRequestCreateCommand extends $tea.Model {
  devDataSourceCreate?: CreateDataSourceRequestCreateCommandDevDataSourceCreate;
  /**
   * @remarks
   * 数据源创建结构体
   */
  prodDataSourceCreate?: CreateDataSourceRequestCreateCommandProdDataSourceCreate;
  static names(): { [key: string]: string } {
    return {
      devDataSourceCreate: 'DevDataSourceCreate',
      prodDataSourceCreate: 'ProdDataSourceCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devDataSourceCreate: CreateDataSourceRequestCreateCommandDevDataSourceCreate,
      prodDataSourceCreate: CreateDataSourceRequestCreateCommandProdDataSourceCreate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceResponseBodyCreateResult extends $tea.Model {
  /**
   * @example
   * 123
   */
  devDataSourceId?: number;
  /**
   * @example
   * 12345
   */
  prodDataSourceId?: number;
  static names(): { [key: string]: string } {
    return {
      devDataSourceId: 'DevDataSourceId',
      prodDataSourceId: 'ProdDataSourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devDataSourceId: 'number',
      prodDataSourceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDirectoryRequestCreateCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tempCode
   */
  category?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /
   */
  directory?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_xx
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1212344
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      directory: 'Directory',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      directory: 'string',
      name: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeSupplementRequestCreateCommandDownStreamNodeIdList extends $tea.Model {
  fieldIdList?: string[];
  id?: string;
  static names(): { [key: string]: string } {
    return {
      fieldIdList: 'FieldIdList',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldIdList: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeSupplementRequestCreateCommandFilterList extends $tea.Model {
  exclude?: boolean;
  key?: string;
  valueList?: string[];
  static names(): { [key: string]: string } {
    return {
      exclude: 'Exclude',
      key: 'Key',
      valueList: 'ValueList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exclude: 'boolean',
      key: 'string',
      valueList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeSupplementRequestCreateCommandGlobalParamList extends $tea.Model {
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

export class CreateNodeSupplementRequestCreateCommandNodeIdList extends $tea.Model {
  fieldIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      fieldIdList: 'FieldIdList',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldIdList: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeSupplementRequestCreateCommandNodeParamsListParamList extends $tea.Model {
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

export class CreateNodeSupplementRequestCreateCommandNodeParamsList extends $tea.Model {
  nodeId?: string;
  paramList?: CreateNodeSupplementRequestCreateCommandNodeParamsListParamList[];
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      paramList: 'ParamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      paramList: { 'type': 'array', 'itemType': CreateNodeSupplementRequestCreateCommandNodeParamsListParamList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeSupplementRequestCreateCommand extends $tea.Model {
  containAllDownStream?: boolean;
  downStreamNodeIdList?: CreateNodeSupplementRequestCreateCommandDownStreamNodeIdList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2021-06-01
   */
  endBizDate?: string;
  filterList?: CreateNodeSupplementRequestCreateCommandFilterList[];
  globalParamList?: CreateNodeSupplementRequestCreateCommandGlobalParamList[];
  maxDueTime?: string;
  minDueTime?: string;
  /**
   * @example
   * xx测试
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  nodeIdList?: CreateNodeSupplementRequestCreateCommandNodeIdList[];
  nodeParamsList?: CreateNodeSupplementRequestCreateCommandNodeParamsList[];
  parallelism?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 101121
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2021-06-01
   */
  startBizDate?: string;
  static names(): { [key: string]: string } {
    return {
      containAllDownStream: 'ContainAllDownStream',
      downStreamNodeIdList: 'DownStreamNodeIdList',
      endBizDate: 'EndBizDate',
      filterList: 'FilterList',
      globalParamList: 'GlobalParamList',
      maxDueTime: 'MaxDueTime',
      minDueTime: 'MinDueTime',
      name: 'Name',
      nodeIdList: 'NodeIdList',
      nodeParamsList: 'NodeParamsList',
      parallelism: 'Parallelism',
      projectId: 'ProjectId',
      startBizDate: 'StartBizDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containAllDownStream: 'boolean',
      downStreamNodeIdList: { 'type': 'array', 'itemType': CreateNodeSupplementRequestCreateCommandDownStreamNodeIdList },
      endBizDate: 'string',
      filterList: { 'type': 'array', 'itemType': CreateNodeSupplementRequestCreateCommandFilterList },
      globalParamList: { 'type': 'array', 'itemType': CreateNodeSupplementRequestCreateCommandGlobalParamList },
      maxDueTime: 'string',
      minDueTime: 'string',
      name: 'string',
      nodeIdList: { 'type': 'array', 'itemType': CreateNodeSupplementRequestCreateCommandNodeIdList },
      nodeParamsList: { 'type': 'array', 'itemType': CreateNodeSupplementRequestCreateCommandNodeParamsList },
      parallelism: 'number',
      projectId: 'number',
      startBizDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineNodeRequestCreatePipelineNodeCommandFileInfo extends $tea.Model {
  /**
   * @example
   * desc
   */
  description?: string;
  /**
   * @example
   * test
   */
  directory?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_pipeline
   */
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      directory: 'Directory',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      directory: 'string',
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineNodeRequestCreatePipelineNodeCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  fileInfo?: CreatePipelineNodeRequestCreatePipelineNodeCommandFileInfo;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * REAL_TIME
   */
  nodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_pipeline
   */
  pipelineName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * REAL_TIME_PIPELINE
   */
  pipelineType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7091124176569088
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      fileInfo: 'FileInfo',
      nodeType: 'NodeType',
      pipelineName: 'PipelineName',
      pipelineType: 'PipelineType',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileInfo: CreatePipelineNodeRequestCreatePipelineNodeCommandFileInfo,
      nodeType: 'string',
      pipelineName: 'string',
      pipelineType: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineNodeResponseBodyData extends $tea.Model {
  errorCodeList?: string[];
  errorMessageList?: string[];
  /**
   * @example
   * 33749
   */
  pipelineId?: number;
  static names(): { [key: string]: string } {
    return {
      errorCodeList: 'ErrorCodeList',
      errorMessageList: 'ErrorMessageList',
      pipelineId: 'PipelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCodeList: { 'type': 'array', 'itemType': 'string' },
      errorMessageList: { 'type': 'array', 'itemType': 'string' },
      pipelineId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStreamBatchJobMappingRequestStreamBatchJobMappingCreateCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 61187014-a3ba-4cdd-8609-1f0aa3df4a3d
   */
  clusterId?: string;
  /**
   * @example
   * 这是一段任务的描述信息
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /karel
   */
  directory?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vvr-8.0.9-flink-1.17
   */
  engineVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * karel_hover_3
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FLINK_SQL
   */
  fileType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7081229106458752
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default-queue
   */
  queueName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PREJOB
   */
  vvpClusterType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      description: 'Description',
      directory: 'Directory',
      engineVersion: 'EngineVersion',
      env: 'Env',
      fileName: 'FileName',
      fileType: 'FileType',
      projectId: 'ProjectId',
      queueName: 'QueueName',
      vvpClusterType: 'VvpClusterType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      description: 'string',
      directory: 'string',
      engineVersion: 'string',
      env: 'string',
      fileName: 'string',
      fileType: 'string',
      projectId: 'number',
      queueName: 'string',
      vvpClusterType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStreamBatchJobMappingResponseBodyData extends $tea.Model {
  /**
   * @example
   * 7083701105376640
   */
  fileId?: string;
  /**
   * @example
   * /dev/streamJob/7083701105376640?env=DEV&projectId=7081229106458752&tenantId=300001420
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupRequestCreateCommand extends $tea.Model {
  /**
   * @example
   * true
   */
  active?: boolean;
  adminUserIdList?: string[];
  /**
   * @example
   * xx
   */
  description?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      adminUserIdList: 'AdminUserIdList',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      adminUserIdList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBatchTaskRequestDeleteCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test task
   */
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12113111
   */
  fileId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 131211211
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      fileId: 'FileId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      fileId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceRequestDeleteCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DEV
   */
  mode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 13121
   */
  prodDataSourceId?: number;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      prodDataSourceId: 'ProdDataSourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      prodDataSourceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAdHocTaskRequestExecuteCommandParamList extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * param1
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * value1
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

export class ExecuteAdHocTaskRequestExecuteCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * show tables;
   */
  code?: string;
  /**
   * @example
   * mysql_catalog
   */
  dataSourceCatalog?: string;
  /**
   * @example
   * 12131111
   */
  dataSourceId?: number;
  /**
   * @example
   * erp
   */
  dataSourceSchema?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MaxCompute_SQL
   */
  operatorType?: string;
  paramList?: ExecuteAdHocTaskRequestExecuteCommandParamList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123222121
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataSourceCatalog: 'DataSourceCatalog',
      dataSourceId: 'DataSourceId',
      dataSourceSchema: 'DataSourceSchema',
      operatorType: 'OperatorType',
      paramList: 'ParamList',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataSourceCatalog: 'string',
      dataSourceId: 'number',
      dataSourceSchema: 'string',
      operatorType: 'string',
      paramList: { 'type': 'array', 'itemType': ExecuteAdHocTaskRequestExecuteCommandParamList },
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteAdHocTaskResponseBodyExecuteResult extends $tea.Model {
  /**
   * @example
   * 1
   */
  subTaskCount?: number;
  /**
   * @example
   * MaxCompute_SQL_300000843_1611548758327
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      subTaskCount: 'SubTaskCount',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subTaskCount: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteManualNodeRequestExecuteCommandParamList extends $tea.Model {
  /**
   * @example
   * param1
   */
  key?: string;
  /**
   * @example
   * 1
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

export class ExecuteManualNodeRequestExecuteCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-05-07
   */
  endBizDate?: string;
  /**
   * @example
   * xx测试
   */
  flowName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * n_12132
   */
  nodeId?: string;
  paramList?: ExecuteManualNodeRequestExecuteCommandParamList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123324
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-05-01
   */
  startBizDate?: string;
  static names(): { [key: string]: string } {
    return {
      endBizDate: 'EndBizDate',
      flowName: 'FlowName',
      nodeId: 'NodeId',
      paramList: 'ParamList',
      projectId: 'ProjectId',
      startBizDate: 'StartBizDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endBizDate: 'string',
      flowName: 'string',
      nodeId: 'string',
      paramList: { 'type': 'array', 'itemType': ExecuteManualNodeRequestExecuteCommandParamList },
      projectId: 'number',
      startBizDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FixDataRequestFixDataCommandDownStreamInstanceIdList extends $tea.Model {
  fieldInstanceIdList?: string[];
  /**
   * @example
   * t_2323421
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      fieldInstanceIdList: 'FieldInstanceIdList',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FixDataRequestFixDataCommandRootInstanceId extends $tea.Model {
  fieldInstanceIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * t_2323111
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      fieldInstanceIdList: 'FieldInstanceIdList',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FixDataRequestFixDataCommand extends $tea.Model {
  /**
   * @example
   * false
   */
  containRootInstance?: boolean;
  downStreamInstanceIdList?: FixDataRequestFixDataCommandDownStreamInstanceIdList[];
  /**
   * @example
   * ALL_INSTANCE
   */
  downstreamRange?: string;
  /**
   * @example
   * false
   */
  forceRerun?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 132344
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  rootInstanceId?: FixDataRequestFixDataCommandRootInstanceId;
  static names(): { [key: string]: string } {
    return {
      containRootInstance: 'ContainRootInstance',
      downStreamInstanceIdList: 'DownStreamInstanceIdList',
      downstreamRange: 'DownstreamRange',
      forceRerun: 'ForceRerun',
      projectId: 'ProjectId',
      rootInstanceId: 'RootInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containRootInstance: 'boolean',
      downStreamInstanceIdList: { 'type': 'array', 'itemType': FixDataRequestFixDataCommandDownStreamInstanceIdList },
      downstreamRange: 'string',
      forceRerun: 'boolean',
      projectId: 'number',
      rootInstanceId: FixDataRequestFixDataCommandRootInstanceId,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdHocFileResponseBodyFileInfo extends $tea.Model {
  /**
   * @example
   * select 1;
   */
  content?: string;
  /**
   * @example
   * 12121
   */
  creator?: string;
  /**
   * @example
   * /xx1/xx2/
   */
  directory?: string;
  /**
   * @example
   * 12121111
   */
  id?: number;
  /**
   * @example
   * 12121
   */
  lastModifier?: string;
  /**
   * @example
   * xx测试
   */
  name?: string;
  /**
   * @example
   * 12132323
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      creator: 'Creator',
      directory: 'Directory',
      id: 'Id',
      lastModifier: 'LastModifier',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      creator: 'string',
      directory: 'string',
      id: 'number',
      lastModifier: 'string',
      name: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdHocTaskLogResponseBodyLogInfo extends $tea.Model {
  /**
   * @example
   * test
   */
  content?: string;
  hasNext?: boolean;
  hasResult?: boolean;
  /**
   * @example
   * 2021
   */
  nextOffset?: number;
  /**
   * @example
   * 0
   */
  subTaskId?: number;
  /**
   * @example
   * MaxCompute_SQL_300000843_1611548758327
   */
  taskId?: string;
  /**
   * @example
   * WAIT_RESOURCE
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      hasNext: 'HasNext',
      hasResult: 'HasResult',
      nextOffset: 'NextOffset',
      subTaskId: 'SubTaskId',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      hasNext: 'boolean',
      hasResult: 'boolean',
      nextOffset: 'number',
      subTaskId: 'number',
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdHocTaskResultResponseBodyExecuteResult extends $tea.Model {
  /**
   * @example
   * 1
   */
  result?: string;
  /**
   * @example
   * t_2242892326444990464_20210125_2242892326444990465
   */
  scheduleTaskId?: string;
  /**
   * @example
   * MaxCompute_SQL_300000843_1611548758327
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      scheduleTaskId: 'ScheduleTaskId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
      scheduleTaskId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertEventResponseBodyAlertEventInfoAlertObject extends $tea.Model {
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * ALL
   */
  sourceSystemType?: string;
  /**
   * @example
   * VDM_BATCH_PYTHON37
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      sourceSystemType: 'SourceSystemType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      sourceSystemType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertEventResponseBodyAlertEventInfoAlertReasonAlertReasonParamList extends $tea.Model {
  /**
   * @example
   * biz_date
   */
  key?: string;
  /**
   * @example
   * 2024-11-04 00:00:00
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

export class GetAlertEventResponseBodyAlertEventInfoAlertReason extends $tea.Model {
  alertReasonParamList?: GetAlertEventResponseBodyAlertEventInfoAlertReasonAlertReasonParamList[];
  /**
   * @example
   * 2024-11-05 16:19:32
   */
  bizDate?: string;
  /**
   * @example
   * VDM_BATCH_FINISH
   */
  type?: string;
  /**
   * @example
   * t_6340131422711644160_20241104_6340142
   */
  uniqueKey?: string;
  static names(): { [key: string]: string } {
    return {
      alertReasonParamList: 'AlertReasonParamList',
      bizDate: 'BizDate',
      type: 'Type',
      uniqueKey: 'UniqueKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertReasonParamList: { 'type': 'array', 'itemType': GetAlertEventResponseBodyAlertEventInfoAlertReasonAlertReasonParamList },
      bizDate: 'string',
      type: 'string',
      uniqueKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertEventResponseBodyAlertEventInfoAlertReceiverListUserList extends $tea.Model {
  /**
   * @example
   * Admin
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertEventResponseBodyAlertEventInfoAlertReceiverList extends $tea.Model {
  alertChannelTypeList?: string[];
  customAlertChannelIdList?: string[];
  /**
   * @example
   * test
   */
  onCallTableName?: string;
  /**
   * @example
   * OWNER
   */
  type?: string;
  userList?: GetAlertEventResponseBodyAlertEventInfoAlertReceiverListUserList[];
  static names(): { [key: string]: string } {
    return {
      alertChannelTypeList: 'AlertChannelTypeList',
      customAlertChannelIdList: 'CustomAlertChannelIdList',
      onCallTableName: 'OnCallTableName',
      type: 'Type',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertChannelTypeList: { 'type': 'array', 'itemType': 'string' },
      customAlertChannelIdList: { 'type': 'array', 'itemType': 'string' },
      onCallTableName: 'string',
      type: 'string',
      userList: { 'type': 'array', 'itemType': GetAlertEventResponseBodyAlertEventInfoAlertReceiverListUserList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertEventResponseBodyAlertEventInfoBelongProject extends $tea.Model {
  /**
   * @example
   * biz_1
   */
  bizName?: string;
  /**
   * @example
   * project_1
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      bizName: 'BizName',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizName: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertEventResponseBodyAlertEventInfoUrlConfig extends $tea.Model {
  /**
   * @example
   * https://dataphin.com/ops/test3
   */
  alertConfigUrl?: string;
  /**
   * @example
   * https://dataphin.com/ops/test2
   */
  logUrl?: string;
  /**
   * @example
   * https://dataphin.com/ops/test1
   */
  objectUrl?: string;
  static names(): { [key: string]: string } {
    return {
      alertConfigUrl: 'AlertConfigUrl',
      logUrl: 'LogUrl',
      objectUrl: 'ObjectUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfigUrl: 'string',
      logUrl: 'string',
      objectUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertEventResponseBodyAlertEventInfo extends $tea.Model {
  /**
   * @example
   * ONCE
   */
  alertFrequency?: string;
  alertObject?: GetAlertEventResponseBodyAlertEventInfoAlertObject;
  alertReason?: GetAlertEventResponseBodyAlertEventInfoAlertReason;
  alertReceiverList?: GetAlertEventResponseBodyAlertEventInfoAlertReceiverList[];
  belongProject?: GetAlertEventResponseBodyAlertEventInfoBelongProject;
  /**
   * @example
   * 2024-11-05 00:00:00
   */
  doNotDisturbEndTime?: string;
  /**
   * @example
   * 2024-11-05 16:19:33
   */
  firstAlertTime?: string;
  /**
   * @example
   * 12345
   */
  id?: number;
  /**
   * @example
   * 2024-11-05 16:19:33
   */
  latestAlertTime?: string;
  /**
   * @example
   * FINISH
   */
  status?: string;
  /**
   * @example
   * 1
   */
  totalAlertTimes?: number;
  urlConfig?: GetAlertEventResponseBodyAlertEventInfoUrlConfig;
  static names(): { [key: string]: string } {
    return {
      alertFrequency: 'AlertFrequency',
      alertObject: 'AlertObject',
      alertReason: 'AlertReason',
      alertReceiverList: 'AlertReceiverList',
      belongProject: 'BelongProject',
      doNotDisturbEndTime: 'DoNotDisturbEndTime',
      firstAlertTime: 'FirstAlertTime',
      id: 'Id',
      latestAlertTime: 'LatestAlertTime',
      status: 'Status',
      totalAlertTimes: 'TotalAlertTimes',
      urlConfig: 'UrlConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertFrequency: 'string',
      alertObject: GetAlertEventResponseBodyAlertEventInfoAlertObject,
      alertReason: GetAlertEventResponseBodyAlertEventInfoAlertReason,
      alertReceiverList: { 'type': 'array', 'itemType': GetAlertEventResponseBodyAlertEventInfoAlertReceiverList },
      belongProject: GetAlertEventResponseBodyAlertEventInfoBelongProject,
      doNotDisturbEndTime: 'string',
      firstAlertTime: 'string',
      id: 'number',
      latestAlertTime: 'string',
      status: 'string',
      totalAlertTimes: 'number',
      urlConfig: GetAlertEventResponseBodyAlertEventInfoUrlConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskInfoResponseBodyTaskInfoCustomScheduleConfig extends $tea.Model {
  /**
   * @example
   * 20:59
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  interval?: number;
  /**
   * @example
   * HOUR
   */
  intervalUnit?: string;
  /**
   * @example
   * DAILY
   */
  schedulePeriod?: string;
  /**
   * @example
   * 08:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      interval: 'Interval',
      intervalUnit: 'IntervalUnit',
      schedulePeriod: 'SchedulePeriod',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      interval: 'number',
      intervalUnit: 'string',
      schedulePeriod: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskInfoResponseBodyTaskInfoParamList extends $tea.Model {
  /**
   * @example
   * key
   */
  key?: string;
  /**
   * @example
   * Value
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

export class GetBatchTaskInfoResponseBodyTaskInfoSparkClientInfo extends $tea.Model {
  /**
   * @example
   * abc
   */
  sparkClientVersion?: string;
  static names(): { [key: string]: string } {
    return {
      sparkClientVersion: 'SparkClientVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sparkClientVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskInfoResponseBodyTaskInfoUpStreamListDependPeriod extends $tea.Model {
  /**
   * @example
   * 1
   */
  periodOffset?: number;
  /**
   * @example
   * CURRENT_PERIOD
   */
  periodType?: string;
  static names(): { [key: string]: string } {
    return {
      periodOffset: 'PeriodOffset',
      periodType: 'PeriodType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodOffset: 'number',
      periodType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskInfoResponseBodyTaskInfoUpStreamList extends $tea.Model {
  dependPeriod?: GetBatchTaskInfoResponseBodyTaskInfoUpStreamListDependPeriod;
  /**
   * @example
   * LAST
   */
  dependStrategy?: string;
  fieldList?: string[];
  /**
   * @example
   * PHYSICAL
   */
  nodeType?: string;
  /**
   * @example
   * 1
   */
  periodDiff?: number;
  sourceNodeEnabled?: boolean;
  /**
   * @example
   * n_2001
   */
  sourceNodeId?: string;
  /**
   * @example
   * t_input1
   */
  sourceNodeName?: string;
  /**
   * @example
   * t_input1
   */
  sourceNodeOutputName?: string;
  /**
   * @example
   * 张三
   */
  sourceNodeUserName?: string;
  /**
   * @example
   * t_input1
   */
  sourceTableName?: string;
  static names(): { [key: string]: string } {
    return {
      dependPeriod: 'DependPeriod',
      dependStrategy: 'DependStrategy',
      fieldList: 'FieldList',
      nodeType: 'NodeType',
      periodDiff: 'PeriodDiff',
      sourceNodeEnabled: 'SourceNodeEnabled',
      sourceNodeId: 'SourceNodeId',
      sourceNodeName: 'SourceNodeName',
      sourceNodeOutputName: 'SourceNodeOutputName',
      sourceNodeUserName: 'SourceNodeUserName',
      sourceTableName: 'SourceTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependPeriod: GetBatchTaskInfoResponseBodyTaskInfoUpStreamListDependPeriod,
      dependStrategy: 'string',
      fieldList: { 'type': 'array', 'itemType': 'string' },
      nodeType: 'string',
      periodDiff: 'number',
      sourceNodeEnabled: 'boolean',
      sourceNodeId: 'string',
      sourceNodeName: 'string',
      sourceNodeOutputName: 'string',
      sourceNodeUserName: 'string',
      sourceTableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskInfoResponseBodyTaskInfo extends $tea.Model {
  /**
   * @example
   * show tables;
   */
  code?: string;
  /**
   * @example
   * 0 0 1 * * ?
   */
  cronExpression?: string;
  customScheduleConfig?: GetBatchTaskInfoResponseBodyTaskInfoCustomScheduleConfig;
  /**
   * @example
   * dag_102121211
   */
  dagId?: string;
  /**
   * @example
   * mysql_catalog
   */
  dataSourceCatalog?: string;
  /**
   * @example
   * 12131111
   */
  dataSourceId?: string;
  /**
   * @example
   * erp
   */
  dataSourceSchema?: string;
  /**
   * @example
   * 12113111
   */
  fileId?: number;
  hasDevNode?: boolean;
  /**
   * @example
   * 测试任务1
   */
  name?: string;
  needPublish?: boolean;
  /**
   * @example
   * xx测试
   */
  nodeDescription?: string;
  /**
   * @example
   * openapi
   */
  nodeFrom?: string;
  /**
   * @example
   * n_1011_21232132322
   */
  nodeId?: string;
  /**
   * @example
   * 测试任务1
   */
  nodeName?: string;
  nodeOutputNameList?: string[];
  /**
   * @example
   * 1
   */
  nodeStatus?: number;
  /**
   * @example
   * 30231123
   */
  operatorUserId?: string;
  /**
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @example
   * 30231123
   */
  ownerUserId?: string;
  paramList?: GetBatchTaskInfoResponseBodyTaskInfoParamList[];
  paused?: boolean;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * 131211211
   */
  projectId?: number;
  published?: boolean;
  /**
   * @example
   * test xx
   */
  remark?: string;
  rerunable?: boolean;
  /**
   * @example
   * DAILY
   */
  schedulePeriod?: string;
  /**
   * @example
   * 3
   */
  scheduleType?: number;
  sparkClientInfo?: GetBatchTaskInfoResponseBodyTaskInfoSparkClientInfo;
  /**
   * @example
   * 测试任务1
   */
  status?: string;
  /**
   * @example
   * 21
   */
  taskType?: number;
  upStreamList?: GetBatchTaskInfoResponseBodyTaskInfoUpStreamList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      cronExpression: 'CronExpression',
      customScheduleConfig: 'CustomScheduleConfig',
      dagId: 'DagId',
      dataSourceCatalog: 'DataSourceCatalog',
      dataSourceId: 'DataSourceId',
      dataSourceSchema: 'DataSourceSchema',
      fileId: 'FileId',
      hasDevNode: 'HasDevNode',
      name: 'Name',
      needPublish: 'NeedPublish',
      nodeDescription: 'NodeDescription',
      nodeFrom: 'NodeFrom',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeOutputNameList: 'NodeOutputNameList',
      nodeStatus: 'NodeStatus',
      operatorUserId: 'OperatorUserId',
      ownerName: 'OwnerName',
      ownerUserId: 'OwnerUserId',
      paramList: 'ParamList',
      paused: 'Paused',
      priority: 'Priority',
      projectId: 'ProjectId',
      published: 'Published',
      remark: 'Remark',
      rerunable: 'Rerunable',
      schedulePeriod: 'SchedulePeriod',
      scheduleType: 'ScheduleType',
      sparkClientInfo: 'SparkClientInfo',
      status: 'Status',
      taskType: 'TaskType',
      upStreamList: 'UpStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      cronExpression: 'string',
      customScheduleConfig: GetBatchTaskInfoResponseBodyTaskInfoCustomScheduleConfig,
      dagId: 'string',
      dataSourceCatalog: 'string',
      dataSourceId: 'string',
      dataSourceSchema: 'string',
      fileId: 'number',
      hasDevNode: 'boolean',
      name: 'string',
      needPublish: 'boolean',
      nodeDescription: 'string',
      nodeFrom: 'string',
      nodeId: 'string',
      nodeName: 'string',
      nodeOutputNameList: { 'type': 'array', 'itemType': 'string' },
      nodeStatus: 'number',
      operatorUserId: 'string',
      ownerName: 'string',
      ownerUserId: 'string',
      paramList: { 'type': 'array', 'itemType': GetBatchTaskInfoResponseBodyTaskInfoParamList },
      paused: 'boolean',
      priority: 'number',
      projectId: 'number',
      published: 'boolean',
      remark: 'string',
      rerunable: 'boolean',
      schedulePeriod: 'string',
      scheduleType: 'number',
      sparkClientInfo: GetBatchTaskInfoResponseBodyTaskInfoSparkClientInfo,
      status: 'string',
      taskType: 'number',
      upStreamList: { 'type': 'array', 'itemType': GetBatchTaskInfoResponseBodyTaskInfoUpStreamList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskInfoByVersionResponseBodyTaskInfoCustomScheduleConfig extends $tea.Model {
  /**
   * @example
   * 20:59
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  interval?: number;
  /**
   * @example
   * HOUR
   */
  intervalUnit?: string;
  /**
   * @example
   * DAILY
   */
  schedulePeriod?: string;
  /**
   * @example
   * 08:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      interval: 'Interval',
      intervalUnit: 'IntervalUnit',
      schedulePeriod: 'SchedulePeriod',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      interval: 'number',
      intervalUnit: 'string',
      schedulePeriod: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskInfoByVersionResponseBodyTaskInfoParamList extends $tea.Model {
  /**
   * @example
   * key
   */
  key?: string;
  /**
   * @example
   * Value
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

export class GetBatchTaskInfoByVersionResponseBodyTaskInfoSparkClientInfo extends $tea.Model {
  /**
   * @example
   * abc
   */
  sparkClientVersion?: string;
  static names(): { [key: string]: string } {
    return {
      sparkClientVersion: 'SparkClientVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sparkClientVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskInfoByVersionResponseBodyTaskInfoUpStreamListDependPeriod extends $tea.Model {
  /**
   * @example
   * 1
   */
  periodOffset?: number;
  /**
   * @example
   * CURRENT_PERIOD
   */
  periodType?: string;
  static names(): { [key: string]: string } {
    return {
      periodOffset: 'PeriodOffset',
      periodType: 'PeriodType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodOffset: 'number',
      periodType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskInfoByVersionResponseBodyTaskInfoUpStreamList extends $tea.Model {
  dependPeriod?: GetBatchTaskInfoByVersionResponseBodyTaskInfoUpStreamListDependPeriod;
  /**
   * @example
   * LAST
   */
  dependStrategy?: string;
  fieldList?: string[];
  /**
   * @example
   * PHYSICAL
   */
  nodeType?: string;
  /**
   * @example
   * 1
   */
  periodDiff?: number;
  sourceNodeEnabled?: boolean;
  /**
   * @example
   * n_2001
   */
  sourceNodeId?: string;
  /**
   * @example
   * t_input1
   */
  sourceNodeName?: string;
  /**
   * @example
   * t_input1
   */
  sourceNodeOutputName?: string;
  /**
   * @example
   * 张三
   */
  sourceNodeUserName?: string;
  /**
   * @example
   * t_input1
   */
  sourceTableName?: string;
  static names(): { [key: string]: string } {
    return {
      dependPeriod: 'DependPeriod',
      dependStrategy: 'DependStrategy',
      fieldList: 'FieldList',
      nodeType: 'NodeType',
      periodDiff: 'PeriodDiff',
      sourceNodeEnabled: 'SourceNodeEnabled',
      sourceNodeId: 'SourceNodeId',
      sourceNodeName: 'SourceNodeName',
      sourceNodeOutputName: 'SourceNodeOutputName',
      sourceNodeUserName: 'SourceNodeUserName',
      sourceTableName: 'SourceTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependPeriod: GetBatchTaskInfoByVersionResponseBodyTaskInfoUpStreamListDependPeriod,
      dependStrategy: 'string',
      fieldList: { 'type': 'array', 'itemType': 'string' },
      nodeType: 'string',
      periodDiff: 'number',
      sourceNodeEnabled: 'boolean',
      sourceNodeId: 'string',
      sourceNodeName: 'string',
      sourceNodeOutputName: 'string',
      sourceNodeUserName: 'string',
      sourceTableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskInfoByVersionResponseBodyTaskInfo extends $tea.Model {
  /**
   * @example
   * show tables;
   */
  code?: string;
  /**
   * @example
   * 0 0 1 * * ?
   */
  cronExpression?: string;
  customScheduleConfig?: GetBatchTaskInfoByVersionResponseBodyTaskInfoCustomScheduleConfig;
  /**
   * @example
   * dag_102121211
   */
  dagId?: string;
  /**
   * @example
   * mysql_catalog
   */
  dataSourceCatalog?: string;
  /**
   * @example
   * 12131111
   */
  dataSourceId?: string;
  /**
   * @example
   * erp
   */
  dataSourceSchema?: string;
  /**
   * @example
   * 12113111
   */
  fileId?: number;
  hasDevNode?: boolean;
  /**
   * @example
   * 测试任务1
   */
  name?: string;
  needPublish?: boolean;
  /**
   * @example
   * xx测试
   */
  nodeDescription?: string;
  /**
   * @example
   * openapi
   */
  nodeFrom?: string;
  /**
   * @example
   * n_1011_21232132322
   */
  nodeId?: string;
  /**
   * @example
   * 测试任务1
   */
  nodeName?: string;
  nodeOutputNameList?: string[];
  /**
   * @example
   * 1
   */
  nodeStatus?: number;
  /**
   * @example
   * 30231123
   */
  operatorUserId?: string;
  /**
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @example
   * 30231123
   */
  ownerUserId?: string;
  paramList?: GetBatchTaskInfoByVersionResponseBodyTaskInfoParamList[];
  paused?: boolean;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * 131211211
   */
  projectId?: number;
  published?: boolean;
  /**
   * @example
   * test xx
   */
  remark?: string;
  rerunable?: boolean;
  /**
   * @example
   * DAILY
   */
  schedulePeriod?: string;
  /**
   * @example
   * 3
   */
  scheduleType?: number;
  sparkClientInfo?: GetBatchTaskInfoByVersionResponseBodyTaskInfoSparkClientInfo;
  /**
   * @example
   * 测试任务1
   */
  status?: string;
  /**
   * @example
   * 21
   */
  taskType?: number;
  upStreamList?: GetBatchTaskInfoByVersionResponseBodyTaskInfoUpStreamList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      cronExpression: 'CronExpression',
      customScheduleConfig: 'CustomScheduleConfig',
      dagId: 'DagId',
      dataSourceCatalog: 'DataSourceCatalog',
      dataSourceId: 'DataSourceId',
      dataSourceSchema: 'DataSourceSchema',
      fileId: 'FileId',
      hasDevNode: 'HasDevNode',
      name: 'Name',
      needPublish: 'NeedPublish',
      nodeDescription: 'NodeDescription',
      nodeFrom: 'NodeFrom',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeOutputNameList: 'NodeOutputNameList',
      nodeStatus: 'NodeStatus',
      operatorUserId: 'OperatorUserId',
      ownerName: 'OwnerName',
      ownerUserId: 'OwnerUserId',
      paramList: 'ParamList',
      paused: 'Paused',
      priority: 'Priority',
      projectId: 'ProjectId',
      published: 'Published',
      remark: 'Remark',
      rerunable: 'Rerunable',
      schedulePeriod: 'SchedulePeriod',
      scheduleType: 'ScheduleType',
      sparkClientInfo: 'SparkClientInfo',
      status: 'Status',
      taskType: 'TaskType',
      upStreamList: 'UpStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      cronExpression: 'string',
      customScheduleConfig: GetBatchTaskInfoByVersionResponseBodyTaskInfoCustomScheduleConfig,
      dagId: 'string',
      dataSourceCatalog: 'string',
      dataSourceId: 'string',
      dataSourceSchema: 'string',
      fileId: 'number',
      hasDevNode: 'boolean',
      name: 'string',
      needPublish: 'boolean',
      nodeDescription: 'string',
      nodeFrom: 'string',
      nodeId: 'string',
      nodeName: 'string',
      nodeOutputNameList: { 'type': 'array', 'itemType': 'string' },
      nodeStatus: 'number',
      operatorUserId: 'string',
      ownerName: 'string',
      ownerUserId: 'string',
      paramList: { 'type': 'array', 'itemType': GetBatchTaskInfoByVersionResponseBodyTaskInfoParamList },
      paused: 'boolean',
      priority: 'number',
      projectId: 'number',
      published: 'boolean',
      remark: 'string',
      rerunable: 'boolean',
      schedulePeriod: 'string',
      scheduleType: 'number',
      sparkClientInfo: GetBatchTaskInfoByVersionResponseBodyTaskInfoSparkClientInfo,
      status: 'string',
      taskType: 'number',
      upStreamList: { 'type': 'array', 'itemType': GetBatchTaskInfoByVersionResponseBodyTaskInfoUpStreamList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskUdfLineagesResponseBodyDataLineageGroupListInputLineageListColumnList extends $tea.Model {
  /**
   * @example
   * varchar
   */
  dataType?: string;
  /**
   * @example
   * xx
   */
  description?: string;
  /**
   * @example
   * c011
   */
  id?: string;
  /**
   * @example
   * c011
   */
  name?: string;
  partitionKey?: boolean;
  primaryKey?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      partitionKey: 'PartitionKey',
      primaryKey: 'PrimaryKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      partitionKey: 'boolean',
      primaryKey: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskUdfLineagesResponseBodyDataLineageGroupListInputLineageList extends $tea.Model {
  /**
   * @example
   * 103111231
   */
  bizUnitId?: string;
  /**
   * @example
   * xx测试
   */
  bizUnitName?: string;
  columnList?: GetBatchTaskUdfLineagesResponseBodyDataLineageGroupListInputLineageListColumnList[];
  /**
   * @example
   * test xx
   */
  description?: string;
  /**
   * @example
   * t_input
   */
  displayName?: string;
  /**
   * @example
   * dev
   */
  env?: string;
  fullTable?: boolean;
  /**
   * @example
   * Guid_101121
   */
  guid?: string;
  /**
   * @example
   * t_input
   */
  name?: string;
  /**
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @example
   * 20112101
   */
  ownerUserId?: string;
  /**
   * @example
   * 131211211
   */
  projectId?: string;
  /**
   * @example
   * prj_test
   */
  projectName?: string;
  /**
   * @example
   * dim
   */
  subType?: string;
  static names(): { [key: string]: string } {
    return {
      bizUnitId: 'BizUnitId',
      bizUnitName: 'BizUnitName',
      columnList: 'ColumnList',
      description: 'Description',
      displayName: 'DisplayName',
      env: 'Env',
      fullTable: 'FullTable',
      guid: 'Guid',
      name: 'Name',
      ownerName: 'OwnerName',
      ownerUserId: 'OwnerUserId',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitId: 'string',
      bizUnitName: 'string',
      columnList: { 'type': 'array', 'itemType': GetBatchTaskUdfLineagesResponseBodyDataLineageGroupListInputLineageListColumnList },
      description: 'string',
      displayName: 'string',
      env: 'string',
      fullTable: 'boolean',
      guid: 'string',
      name: 'string',
      ownerName: 'string',
      ownerUserId: 'string',
      projectId: 'string',
      projectName: 'string',
      subType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskUdfLineagesResponseBodyDataLineageGroupListOutputLineageListColumnList extends $tea.Model {
  /**
   * @example
   * varchar
   */
  dataType?: string;
  /**
   * @example
   * xx
   */
  description?: string;
  /**
   * @example
   * c011
   */
  id?: string;
  /**
   * @example
   * c011
   */
  name?: string;
  partitionKey?: boolean;
  primaryKey?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      partitionKey: 'PartitionKey',
      primaryKey: 'PrimaryKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      partitionKey: 'boolean',
      primaryKey: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskUdfLineagesResponseBodyDataLineageGroupListOutputLineageList extends $tea.Model {
  /**
   * @example
   * 103111231
   */
  bizUnitId?: string;
  /**
   * @example
   * xx测试
   */
  bizUnitName?: string;
  columnList?: GetBatchTaskUdfLineagesResponseBodyDataLineageGroupListOutputLineageListColumnList[];
  /**
   * @example
   * test xx
   */
  description?: string;
  /**
   * @example
   * t_input
   */
  displayName?: string;
  /**
   * @example
   * dev
   */
  env?: string;
  fullTable?: boolean;
  /**
   * @example
   * Guid_101121
   */
  guid?: string;
  /**
   * @example
   * t_input
   */
  name?: string;
  /**
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @example
   * 20112101
   */
  ownerUserId?: string;
  /**
   * @example
   * 131211211
   */
  projectId?: string;
  /**
   * @example
   * prj_test
   */
  projectName?: string;
  /**
   * @example
   * dim
   */
  subType?: string;
  static names(): { [key: string]: string } {
    return {
      bizUnitId: 'BizUnitId',
      bizUnitName: 'BizUnitName',
      columnList: 'ColumnList',
      description: 'Description',
      displayName: 'DisplayName',
      env: 'Env',
      fullTable: 'FullTable',
      guid: 'Guid',
      name: 'Name',
      ownerName: 'OwnerName',
      ownerUserId: 'OwnerUserId',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitId: 'string',
      bizUnitName: 'string',
      columnList: { 'type': 'array', 'itemType': GetBatchTaskUdfLineagesResponseBodyDataLineageGroupListOutputLineageListColumnList },
      description: 'string',
      displayName: 'string',
      env: 'string',
      fullTable: 'boolean',
      guid: 'string',
      name: 'string',
      ownerName: 'string',
      ownerUserId: 'string',
      projectId: 'string',
      projectName: 'string',
      subType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskUdfLineagesResponseBodyDataLineageGroupList extends $tea.Model {
  inputLineageList?: GetBatchTaskUdfLineagesResponseBodyDataLineageGroupListInputLineageList[];
  outputLineageList?: GetBatchTaskUdfLineagesResponseBodyDataLineageGroupListOutputLineageList[];
  static names(): { [key: string]: string } {
    return {
      inputLineageList: 'InputLineageList',
      outputLineageList: 'OutputLineageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputLineageList: { 'type': 'array', 'itemType': GetBatchTaskUdfLineagesResponseBodyDataLineageGroupListInputLineageList },
      outputLineageList: { 'type': 'array', 'itemType': GetBatchTaskUdfLineagesResponseBodyDataLineageGroupListOutputLineageList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskUdfLineagesResponseBodyData extends $tea.Model {
  lineageGroupList?: GetBatchTaskUdfLineagesResponseBodyDataLineageGroupList[];
  static names(): { [key: string]: string } {
    return {
      lineageGroupList: 'LineageGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineageGroupList: { 'type': 'array', 'itemType': GetBatchTaskUdfLineagesResponseBodyDataLineageGroupList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskVersionsResponseBodyDataBatchTaskVersionList extends $tea.Model {
  /**
   * @example
   * test
   */
  comment?: string;
  /**
   * @example
   * 2024-10-10 10:10:10
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-10-10 10:10:10
   */
  gmtModified?: string;
  /**
   * @example
   * n_10231001
   */
  nodeId?: string;
  /**
   * @example
   * 10232111011
   */
  projectId?: number;
  published?: boolean;
  /**
   * @example
   * 20110110
   */
  userId?: string;
  /**
   * @example
   * 张三
   */
  userName?: string;
  /**
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      nodeId: 'NodeId',
      projectId: 'ProjectId',
      published: 'Published',
      userId: 'UserId',
      userName: 'UserName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      nodeId: 'string',
      projectId: 'number',
      published: 'boolean',
      userId: 'string',
      userName: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskVersionsResponseBodyData extends $tea.Model {
  batchTaskVersionList?: GetBatchTaskVersionsResponseBodyDataBatchTaskVersionList[];
  static names(): { [key: string]: string } {
    return {
      batchTaskVersionList: 'BatchTaskVersionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchTaskVersionList: { 'type': 'array', 'itemType': GetBatchTaskVersionsResponseBodyDataBatchTaskVersionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBizEntityInfoResponseBodyBizEntityInfoBizObject extends $tea.Model {
  /**
   * @example
   * 221323121212
   */
  approvalId?: string;
  /**
   * @example
   * APPROVING
   */
  approvalStatus?: string;
  childBizEntityIdList?: number[];
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * create_object_name
   */
  displayName?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * 1011
   */
  id?: number;
  /**
   * @example
   * 30010010
   */
  lastModifier?: string;
  /**
   * @example
   * 张三
   */
  lastModifierName?: string;
  /**
   * @example
   * create_object_code_name
   */
  name?: string;
  /**
   * @example
   * SUBMITTED
   */
  onlineStatus?: string;
  /**
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @example
   * 30010010
   */
  ownerUserId?: string;
  /**
   * @example
   * 116306
   */
  parentId?: number;
  refBizEntityIdList?: number[];
  /**
   * @example
   * 1
   */
  refDimTableCount?: number;
  /**
   * @example
   * 1
   */
  refSummaryTableCount?: number;
  /**
   * @example
   * SUBMITTED
   */
  status?: string;
  /**
   * @example
   * NORMAL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      approvalId: 'ApprovalId',
      approvalStatus: 'ApprovalStatus',
      childBizEntityIdList: 'ChildBizEntityIdList',
      description: 'Description',
      displayName: 'DisplayName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      lastModifier: 'LastModifier',
      lastModifierName: 'LastModifierName',
      name: 'Name',
      onlineStatus: 'OnlineStatus',
      ownerName: 'OwnerName',
      ownerUserId: 'OwnerUserId',
      parentId: 'ParentId',
      refBizEntityIdList: 'RefBizEntityIdList',
      refDimTableCount: 'RefDimTableCount',
      refSummaryTableCount: 'RefSummaryTableCount',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalId: 'string',
      approvalStatus: 'string',
      childBizEntityIdList: { 'type': 'array', 'itemType': 'number' },
      description: 'string',
      displayName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      lastModifier: 'string',
      lastModifierName: 'string',
      name: 'string',
      onlineStatus: 'string',
      ownerName: 'string',
      ownerUserId: 'string',
      parentId: 'number',
      refBizEntityIdList: { 'type': 'array', 'itemType': 'number' },
      refDimTableCount: 'number',
      refSummaryTableCount: 'number',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBizEntityInfoResponseBodyBizEntityInfoBizProcess extends $tea.Model {
  /**
   * @example
   * 221323121212
   */
  approvalId?: string;
  /**
   * @example
   * APPROVING
   */
  approvalStatus?: string;
  bizEventEntityIdList?: number[];
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 业务活动测试
   */
  displayName?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  gmtModified?: string;
  hasDependent?: boolean;
  /**
   * @example
   * 1011
   */
  id?: number;
  /**
   * @example
   * 30010010
   */
  lastModifier?: string;
  /**
   * @example
   * 张三
   */
  lastModifierName?: string;
  /**
   * @example
   * create_process_code_name
   */
  name?: string;
  /**
   * @example
   * SUBMITTED
   */
  onlineStatus?: string;
  /**
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @example
   * 30010010
   */
  ownerUserId?: string;
  preBizProcessIdList?: number[];
  refBizEntityIdList?: number[];
  /**
   * @example
   * 1
   */
  refFactTableCount?: number;
  /**
   * @example
   * SUBMITTED
   */
  status?: string;
  /**
   * @example
   * BIZ_EVENT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      approvalId: 'ApprovalId',
      approvalStatus: 'ApprovalStatus',
      bizEventEntityIdList: 'BizEventEntityIdList',
      description: 'Description',
      displayName: 'DisplayName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hasDependent: 'HasDependent',
      id: 'Id',
      lastModifier: 'LastModifier',
      lastModifierName: 'LastModifierName',
      name: 'Name',
      onlineStatus: 'OnlineStatus',
      ownerName: 'OwnerName',
      ownerUserId: 'OwnerUserId',
      preBizProcessIdList: 'PreBizProcessIdList',
      refBizEntityIdList: 'RefBizEntityIdList',
      refFactTableCount: 'RefFactTableCount',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalId: 'string',
      approvalStatus: 'string',
      bizEventEntityIdList: { 'type': 'array', 'itemType': 'number' },
      description: 'string',
      displayName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      hasDependent: 'boolean',
      id: 'number',
      lastModifier: 'string',
      lastModifierName: 'string',
      name: 'string',
      onlineStatus: 'string',
      ownerName: 'string',
      ownerUserId: 'string',
      preBizProcessIdList: { 'type': 'array', 'itemType': 'number' },
      refBizEntityIdList: { 'type': 'array', 'itemType': 'number' },
      refFactTableCount: 'number',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBizEntityInfoResponseBodyBizEntityInfo extends $tea.Model {
  bizObject?: GetBizEntityInfoResponseBodyBizEntityInfoBizObject;
  bizProcess?: GetBizEntityInfoResponseBodyBizEntityInfoBizProcess;
  /**
   * @example
   * 6798087749072704
   */
  bizUnitId?: number;
  /**
   * @example
   * 20101011
   */
  dataDomainId?: number;
  /**
   * @example
   * BIZ_OBJECT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizObject: 'BizObject',
      bizProcess: 'BizProcess',
      bizUnitId: 'BizUnitId',
      dataDomainId: 'DataDomainId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizObject: GetBizEntityInfoResponseBodyBizEntityInfoBizObject,
      bizProcess: GetBizEntityInfoResponseBodyBizEntityInfoBizProcess,
      bizUnitId: 'number',
      dataDomainId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBizEntityInfoByVersionResponseBodyBizEntityInfoBizObject extends $tea.Model {
  /**
   * @example
   * 221323121212
   */
  approvalId?: string;
  /**
   * @example
   * APPROVING
   */
  approvalStatus?: string;
  childBizEntityIdList?: number[];
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * create_object_name
   */
  displayName?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * 1011
   */
  id?: number;
  /**
   * @example
   * 30010010
   */
  lastModifier?: string;
  /**
   * @example
   * 张三
   */
  lastModifierName?: string;
  /**
   * @example
   * create_object_code_name
   */
  name?: string;
  /**
   * @example
   * 1
   */
  onlineStatus?: string;
  /**
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @example
   * 30010010
   */
  ownerUserId?: string;
  /**
   * @example
   * 116306
   */
  parentId?: number;
  refBizEntityIdList?: number[];
  /**
   * @example
   * 1
   */
  refDimTableCount?: number;
  /**
   * @example
   * 1
   */
  refSummaryTableCount?: number;
  /**
   * @example
   * 100
   */
  status?: string;
  /**
   * @example
   * NORMAL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      approvalId: 'ApprovalId',
      approvalStatus: 'ApprovalStatus',
      childBizEntityIdList: 'ChildBizEntityIdList',
      description: 'Description',
      displayName: 'DisplayName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      lastModifier: 'LastModifier',
      lastModifierName: 'LastModifierName',
      name: 'Name',
      onlineStatus: 'OnlineStatus',
      ownerName: 'OwnerName',
      ownerUserId: 'OwnerUserId',
      parentId: 'ParentId',
      refBizEntityIdList: 'RefBizEntityIdList',
      refDimTableCount: 'RefDimTableCount',
      refSummaryTableCount: 'RefSummaryTableCount',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalId: 'string',
      approvalStatus: 'string',
      childBizEntityIdList: { 'type': 'array', 'itemType': 'number' },
      description: 'string',
      displayName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      lastModifier: 'string',
      lastModifierName: 'string',
      name: 'string',
      onlineStatus: 'string',
      ownerName: 'string',
      ownerUserId: 'string',
      parentId: 'number',
      refBizEntityIdList: { 'type': 'array', 'itemType': 'number' },
      refDimTableCount: 'number',
      refSummaryTableCount: 'number',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBizEntityInfoByVersionResponseBodyBizEntityInfoBizProcess extends $tea.Model {
  /**
   * @example
   * 221323121212
   */
  approvalId?: string;
  /**
   * @example
   * APPROVING
   */
  approvalStatus?: string;
  bizEventEntityIdList?: number[];
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 业务活动测试
   */
  displayName?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  gmtModified?: string;
  hasDependent?: boolean;
  /**
   * @example
   * 1011
   */
  id?: number;
  /**
   * @example
   * 30010010
   */
  lastModifier?: string;
  /**
   * @example
   * 张三
   */
  lastModifierName?: string;
  /**
   * @example
   * create_process_code_name
   */
  name?: string;
  /**
   * @example
   * 1
   */
  onlineStatus?: string;
  /**
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @example
   * 30010010
   */
  ownerUserId?: string;
  preBizProcessIdList?: number[];
  refBizEntityIdList?: number[];
  /**
   * @example
   * 1
   */
  refFactTableCount?: number;
  /**
   * @example
   * 100
   */
  status?: string;
  /**
   * @example
   * BIZ_EVENT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      approvalId: 'ApprovalId',
      approvalStatus: 'ApprovalStatus',
      bizEventEntityIdList: 'BizEventEntityIdList',
      description: 'Description',
      displayName: 'DisplayName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hasDependent: 'HasDependent',
      id: 'Id',
      lastModifier: 'LastModifier',
      lastModifierName: 'LastModifierName',
      name: 'Name',
      onlineStatus: 'OnlineStatus',
      ownerName: 'OwnerName',
      ownerUserId: 'OwnerUserId',
      preBizProcessIdList: 'PreBizProcessIdList',
      refBizEntityIdList: 'RefBizEntityIdList',
      refFactTableCount: 'RefFactTableCount',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalId: 'string',
      approvalStatus: 'string',
      bizEventEntityIdList: { 'type': 'array', 'itemType': 'number' },
      description: 'string',
      displayName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      hasDependent: 'boolean',
      id: 'number',
      lastModifier: 'string',
      lastModifierName: 'string',
      name: 'string',
      onlineStatus: 'string',
      ownerName: 'string',
      ownerUserId: 'string',
      preBizProcessIdList: { 'type': 'array', 'itemType': 'number' },
      refBizEntityIdList: { 'type': 'array', 'itemType': 'number' },
      refFactTableCount: 'number',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBizEntityInfoByVersionResponseBodyBizEntityInfo extends $tea.Model {
  bizObject?: GetBizEntityInfoByVersionResponseBodyBizEntityInfoBizObject;
  bizProcess?: GetBizEntityInfoByVersionResponseBodyBizEntityInfoBizProcess;
  /**
   * @example
   * 6798087749072704
   */
  bizUnitId?: number;
  /**
   * @example
   * 20101011
   */
  dataDomainId?: number;
  /**
   * @example
   * BIZ_OBJECT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizObject: 'BizObject',
      bizProcess: 'BizProcess',
      bizUnitId: 'BizUnitId',
      dataDomainId: 'DataDomainId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizObject: GetBizEntityInfoByVersionResponseBodyBizEntityInfoBizObject,
      bizProcess: GetBizEntityInfoByVersionResponseBodyBizEntityInfoBizProcess,
      bizUnitId: 'number',
      dataDomainId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBizUnitInfoResponseBodyBizUnitInfoAccountList extends $tea.Model {
  /**
   * @example
   * 20001201
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBizUnitInfoResponseBodyBizUnitInfoBusinessLeaderList extends $tea.Model {
  /**
   * @example
   * 20001201
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBizUnitInfoResponseBodyBizUnitInfoDataLeaderList extends $tea.Model {
  /**
   * @example
   * 20001201
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBizUnitInfoResponseBodyBizUnitInfoEnvList extends $tea.Model {
  /**
   * @example
   * 测试数据板块001_开发
   */
  displayName?: string;
  /**
   * @example
   * DEV
   */
  envName?: string;
  /**
   * @example
   * LD_test001_dev
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      envName: 'EnvName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      envName: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBizUnitInfoResponseBodyBizUnitInfo extends $tea.Model {
  accountList?: GetBizUnitInfoResponseBodyBizUnitInfoAccountList[];
  /**
   * @example
   * 1
   */
  bizObjectCount?: number;
  /**
   * @example
   * 1
   */
  bizProcessCount?: number;
  businessLeaderList?: GetBizUnitInfoResponseBodyBizUnitInfoBusinessLeaderList[];
  /**
   * @example
   * 1
   */
  dataDomainCount?: number;
  dataLeaderList?: GetBizUnitInfoResponseBodyBizUnitInfoDataLeaderList[];
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 测试
   */
  displayName?: string;
  envList?: GetBizUnitInfoResponseBodyBizUnitInfoEnvList[];
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * icon-e-commerce
   */
  icon?: string;
  /**
   * @example
   * 101001201
   */
  id?: number;
  /**
   * @example
   * 30010010
   */
  lastModifier?: string;
  /**
   * @example
   * 张三
   */
  lastModifierName?: string;
  /**
   * @example
   * DEV_PROD
   */
  mode?: string;
  /**
   * @example
   * test01
   */
  name?: string;
  /**
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @example
   * 30010010
   */
  ownerUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accountList: 'AccountList',
      bizObjectCount: 'BizObjectCount',
      bizProcessCount: 'BizProcessCount',
      businessLeaderList: 'BusinessLeaderList',
      dataDomainCount: 'DataDomainCount',
      dataLeaderList: 'DataLeaderList',
      description: 'Description',
      displayName: 'DisplayName',
      envList: 'EnvList',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      icon: 'Icon',
      id: 'Id',
      lastModifier: 'LastModifier',
      lastModifierName: 'LastModifierName',
      mode: 'Mode',
      name: 'Name',
      ownerName: 'OwnerName',
      ownerUserId: 'OwnerUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountList: { 'type': 'array', 'itemType': GetBizUnitInfoResponseBodyBizUnitInfoAccountList },
      bizObjectCount: 'number',
      bizProcessCount: 'number',
      businessLeaderList: { 'type': 'array', 'itemType': GetBizUnitInfoResponseBodyBizUnitInfoBusinessLeaderList },
      dataDomainCount: 'number',
      dataLeaderList: { 'type': 'array', 'itemType': GetBizUnitInfoResponseBodyBizUnitInfoDataLeaderList },
      description: 'string',
      displayName: 'string',
      envList: { 'type': 'array', 'itemType': GetBizUnitInfoResponseBodyBizUnitInfoEnvList },
      gmtCreate: 'string',
      gmtModified: 'string',
      icon: 'string',
      id: 'number',
      lastModifier: 'string',
      lastModifierName: 'string',
      mode: 'string',
      name: 'string',
      ownerName: 'string',
      ownerUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterQueueInfoByEnvResponseBodyData extends $tea.Model {
  /**
   * @example
   * {  "creator": "new_datasource@test.aliyunid.com",  "modifier": "new_datasource@test.aliyunid.com" }
   */
  annotations?: string;
  /**
   * @example
   * 61187014-a3ba-4cdd-8609-1f0aa3df4a3d
   */
  clusterId?: string;
  /**
   * @example
   * 2024-10-31 10:29:17
   */
  createAt?: string;
  /**
   * @example
   * xxxx-registry-vpc.cn-shanghai.cr.aliyuncs.com/xxxx/flink:1.15.4-scala_2.12
   */
  flinkImageRegistry?: string;
  /**
   * @example
   * xxxx-registry-vpc.cn-shanghai.cr.aliyuncs.com
   */
  flinkImageRepository?: string;
  /**
   * @example
   * 1.15.4
   */
  flinkImageTag?: string;
  /**
   * @example
   * 1.15
   */
  flinkVersion?: string;
  /**
   * @example
   * cdh
   */
  labels?: string;
  /**
   * @example
   * 10
   */
  maxVcore?: string;
  /**
   * @example
   * 2024-10-31 10:29:17
   */
  modifiedAt?: string;
  /**
   * @example
   * dataphinv45prod
   */
  namespace?: string;
  /**
   * @example
   * default-queue
   */
  queueName?: string;
  /**
   * @example
   * 1
   */
  resourceVersion?: string;
  /**
   * @example
   * {\\n  \\"kind\\" : \\"kubernetes\\",\\n  \\"kubernetes\\{"namespace" : "n1730341728989z7",    "clusterName" : "a51578bdcce145"  },  "state" : "ONLINE"}
   */
  spec?: string;
  /**
   * @example
   * PREJOB
   */
  vvpClusterType?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'Annotations',
      clusterId: 'ClusterId',
      createAt: 'CreateAt',
      flinkImageRegistry: 'FlinkImageRegistry',
      flinkImageRepository: 'FlinkImageRepository',
      flinkImageTag: 'FlinkImageTag',
      flinkVersion: 'FlinkVersion',
      labels: 'Labels',
      maxVcore: 'MaxVcore',
      modifiedAt: 'ModifiedAt',
      namespace: 'Namespace',
      queueName: 'QueueName',
      resourceVersion: 'ResourceVersion',
      spec: 'Spec',
      vvpClusterType: 'VvpClusterType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: 'string',
      clusterId: 'string',
      createAt: 'string',
      flinkImageRegistry: 'string',
      flinkImageRepository: 'string',
      flinkImageTag: 'string',
      flinkVersion: 'string',
      labels: 'string',
      maxVcore: 'string',
      modifiedAt: 'string',
      namespace: 'string',
      queueName: 'string',
      resourceVersion: 'string',
      spec: 'string',
      vvpClusterType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataDomainInfoResponseBodyDataDomainInfo extends $tea.Model {
  /**
   * @example
   * dm_code_name
   */
  abbreviation?: string;
  /**
   * @example
   * 545844456
   */
  bizUnitId?: number;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 测试
   */
  displayName?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * 1241844456
   */
  id?: number;
  /**
   * @example
   * 30010010
   */
  lastModifier?: string;
  /**
   * @example
   * 张三
   */
  lastModifierName?: string;
  /**
   * @example
   * dm_code_name
   */
  name?: string;
  /**
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @example
   * 30010010
   */
  ownerUserId?: string;
  /**
   * @example
   * 10232311
   */
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      abbreviation: 'Abbreviation',
      bizUnitId: 'BizUnitId',
      description: 'Description',
      displayName: 'DisplayName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      lastModifier: 'LastModifier',
      lastModifierName: 'LastModifierName',
      name: 'Name',
      ownerName: 'OwnerName',
      ownerUserId: 'OwnerUserId',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abbreviation: 'string',
      bizUnitId: 'number',
      description: 'string',
      displayName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      lastModifier: 'string',
      lastModifierName: 'string',
      name: 'string',
      ownerName: 'string',
      ownerUserId: 'string',
      parentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevObjectDependencyResponseBodyDevObjectDependencyListDependencyPeriod extends $tea.Model {
  /**
   * @example
   * 1
   */
  periodOffset?: number;
  /**
   * @example
   * CURRENT_PERIOD
   */
  periodType?: string;
  static names(): { [key: string]: string } {
    return {
      periodOffset: 'PeriodOffset',
      periodType: 'PeriodType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodOffset: 'number',
      periodType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevObjectDependencyResponseBodyDevObjectDependencyListOutputContextParamList extends $tea.Model {
  /**
   * @example
   * v1
   */
  defaultValue?: string;
  /**
   * @example
   * xxtest
   */
  description?: string;
  /**
   * @example
   * v1
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      description: 'Description',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      description: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevObjectDependencyResponseBodyDevObjectDependencyListOwnerList extends $tea.Model {
  /**
   * @example
   * 11123
   */
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDevObjectDependencyResponseBodyDevObjectDependencyList extends $tea.Model {
  /**
   * @example
   * true
   */
  autoParse?: boolean;
  /**
   * @example
   * SCRIPT
   */
  bizType?: string;
  /**
   * @example
   * 13111
   */
  bizUnitId?: string;
  bizUnitName?: string;
  /**
   * @example
   * 0 0 0 * * ?
   */
  cronExpression?: string;
  /**
   * @example
   * true
   */
  customCronExpression?: boolean;
  dependFieldList?: string[];
  dependencyPeriod?: GetDevObjectDependencyResponseBodyDevObjectDependencyListDependencyPeriod;
  /**
   * @example
   * ALL
   */
  dependencyStrategy?: string;
  /**
   * @example
   * true
   */
  dimMidNode?: boolean;
  effectFieldList?: string[];
  externalBizInfo?: string;
  /**
   * @example
   * false
   */
  manuallyAdd?: boolean;
  /**
   * @example
   * n_13211
   */
  nodeId?: string;
  nodeName?: string;
  /**
   * @example
   * n_xx
   */
  nodeOutputName?: string;
  /**
   * @example
   * t_xx
   */
  nodeOutputTableName?: string;
  /**
   * @example
   * DATA_PROCESS
   */
  nodeType?: string;
  outputContextParamList?: GetDevObjectDependencyResponseBodyDevObjectDependencyListOutputContextParamList[];
  ownerList?: GetDevObjectDependencyResponseBodyDevObjectDependencyListOwnerList[];
  /**
   * @example
   * 1
   */
  periodDiff?: number;
  /**
   * @example
   * 123131
   */
  projectId?: number;
  projectName?: string;
  /**
   * @example
   * DAILY
   */
  scheduleType?: string;
  /**
   * @example
   * true
   */
  selfDepend?: boolean;
  /**
   * @example
   * SHELL
   */
  subBizType?: string;
  /**
   * @example
   * true
   */
  valid?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoParse: 'AutoParse',
      bizType: 'BizType',
      bizUnitId: 'BizUnitId',
      bizUnitName: 'BizUnitName',
      cronExpression: 'CronExpression',
      customCronExpression: 'CustomCronExpression',
      dependFieldList: 'DependFieldList',
      dependencyPeriod: 'DependencyPeriod',
      dependencyStrategy: 'DependencyStrategy',
      dimMidNode: 'DimMidNode',
      effectFieldList: 'EffectFieldList',
      externalBizInfo: 'ExternalBizInfo',
      manuallyAdd: 'ManuallyAdd',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeOutputName: 'NodeOutputName',
      nodeOutputTableName: 'NodeOutputTableName',
      nodeType: 'NodeType',
      outputContextParamList: 'OutputContextParamList',
      ownerList: 'OwnerList',
      periodDiff: 'PeriodDiff',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      scheduleType: 'ScheduleType',
      selfDepend: 'SelfDepend',
      subBizType: 'SubBizType',
      valid: 'Valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoParse: 'boolean',
      bizType: 'string',
      bizUnitId: 'string',
      bizUnitName: 'string',
      cronExpression: 'string',
      customCronExpression: 'boolean',
      dependFieldList: { 'type': 'array', 'itemType': 'string' },
      dependencyPeriod: GetDevObjectDependencyResponseBodyDevObjectDependencyListDependencyPeriod,
      dependencyStrategy: 'string',
      dimMidNode: 'boolean',
      effectFieldList: { 'type': 'array', 'itemType': 'string' },
      externalBizInfo: 'string',
      manuallyAdd: 'boolean',
      nodeId: 'string',
      nodeName: 'string',
      nodeOutputName: 'string',
      nodeOutputTableName: 'string',
      nodeType: 'string',
      outputContextParamList: { 'type': 'array', 'itemType': GetDevObjectDependencyResponseBodyDevObjectDependencyListOutputContextParamList },
      ownerList: { 'type': 'array', 'itemType': GetDevObjectDependencyResponseBodyDevObjectDependencyListOwnerList },
      periodDiff: 'number',
      projectId: 'number',
      projectName: 'string',
      scheduleType: 'string',
      selfDepend: 'boolean',
      subBizType: 'string',
      valid: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectoryTreeResponseBodyDataChildren extends $tea.Model {
  /**
   * @example
   * codeManage
   */
  categoryType?: string;
  /**
   * @example
   * 300000907
   */
  creator?: string;
  /**
   * @example
   * John
   */
  creatorName?: string;
  /**
   * @example
   * 41342
   */
  dataCellId?: number;
  /**
   * @example
   * /
   */
  dirName?: string;
  /**
   * @example
   * 2024-11-01 18:08:17
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-11-01 18:08:17
   */
  gmtModified?: string;
  /**
   * @example
   * 3
   */
  id?: number;
  /**
   * @example
   * 300000907
   */
  lastModifier?: string;
  /**
   * @example
   * John
   */
  lastModifierName?: string;
  /**
   * @example
   * 代码管理
   */
  name?: string;
  /**
   * @example
   * 7081229106458752
   */
  projectId?: number;
  /**
   * @example
   * 3
   */
  stringId?: string;
  /**
   * @example
   * codeManage
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      categoryType: 'CategoryType',
      creator: 'Creator',
      creatorName: 'CreatorName',
      dataCellId: 'DataCellId',
      dirName: 'DirName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      lastModifier: 'LastModifier',
      lastModifierName: 'LastModifierName',
      name: 'Name',
      projectId: 'ProjectId',
      stringId: 'StringId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryType: 'string',
      creator: 'string',
      creatorName: 'string',
      dataCellId: 'number',
      dirName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      lastModifier: 'string',
      lastModifierName: 'string',
      name: 'string',
      projectId: 'number',
      stringId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectoryTreeResponseBodyDataParent extends $tea.Model {
  /**
   * @example
   * codeManage
   */
  categoryType?: string;
  /**
   * @example
   * 300000907
   */
  creator?: string;
  /**
   * @example
   * John
   */
  creatorName?: string;
  /**
   * @example
   * 3213
   */
  dataCellId?: number;
  /**
   * @example
   * /
   */
  dirName?: string;
  /**
   * @example
   * 2024-11-01 18:08:17
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-11-01 18:08:17
   */
  gmtModified?: string;
  /**
   * @example
   * 3
   */
  id?: number;
  /**
   * @example
   * 300000907
   */
  lastModifier?: string;
  /**
   * @example
   * John
   */
  lastModifierName?: string;
  /**
   * @example
   * 代码管理
   */
  name?: string;
  /**
   * @example
   * 7081229106458752
   */
  projectId?: number;
  /**
   * @example
   * 3
   */
  stringId?: string;
  /**
   * @example
   * codeManage
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      categoryType: 'CategoryType',
      creator: 'Creator',
      creatorName: 'CreatorName',
      dataCellId: 'DataCellId',
      dirName: 'DirName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      lastModifier: 'LastModifier',
      lastModifierName: 'LastModifierName',
      name: 'Name',
      projectId: 'ProjectId',
      stringId: 'StringId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryType: 'string',
      creator: 'string',
      creatorName: 'string',
      dataCellId: 'number',
      dirName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      lastModifier: 'string',
      lastModifierName: 'string',
      name: 'string',
      projectId: 'number',
      stringId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectoryTreeResponseBodyData extends $tea.Model {
  children?: GetDirectoryTreeResponseBodyDataChildren;
  parent?: GetDirectoryTreeResponseBodyDataParent;
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      parent: 'Parent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: GetDirectoryTreeResponseBodyDataChildren,
      parent: GetDirectoryTreeResponseBodyDataParent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDownStreamRequestInstanceGet extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * t_5929472_20210411_9577721
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DATA_PROCESS
   */
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nodeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDownStreamResponseBodyInstanceRelationListFieldInstanceList extends $tea.Model {
  /**
   * @example
   * t_23211
   */
  fieldInstanceId?: string;
  /**
   * @example
   * SUCCESS
   */
  runStatus?: string;
  /**
   * @example
   * OPTIONAL
   */
  selectStatus?: string;
  static names(): { [key: string]: string } {
    return {
      fieldInstanceId: 'FieldInstanceId',
      runStatus: 'RunStatus',
      selectStatus: 'SelectStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldInstanceId: 'string',
      runStatus: 'string',
      selectStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDownStreamResponseBodyInstanceRelationListInstanceInfo extends $tea.Model {
  /**
   * @example
   * t_232411
   */
  id?: string;
  name?: string;
  /**
   * @example
   * DATA_PROCESS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDownStreamResponseBodyInstanceRelationList extends $tea.Model {
  /**
   * @example
   * 1
   */
  downStreamDepth?: number;
  /**
   * @example
   * {"a":"x"}
   */
  extendInfo?: string;
  fieldInstanceList?: GetInstanceDownStreamResponseBodyInstanceRelationListFieldInstanceList[];
  instanceInfo?: GetInstanceDownStreamResponseBodyInstanceRelationListInstanceInfo;
  /**
   * @example
   * RUNNING
   */
  runStatus?: string;
  /**
   * @example
   * OPTIONAL
   */
  selectStatus?: string;
  /**
   * @example
   * FIELD_DELETED
   */
  selectStatusCause?: string;
  static names(): { [key: string]: string } {
    return {
      downStreamDepth: 'DownStreamDepth',
      extendInfo: 'ExtendInfo',
      fieldInstanceList: 'FieldInstanceList',
      instanceInfo: 'InstanceInfo',
      runStatus: 'RunStatus',
      selectStatus: 'SelectStatus',
      selectStatusCause: 'SelectStatusCause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downStreamDepth: 'number',
      extendInfo: 'string',
      fieldInstanceList: { 'type': 'array', 'itemType': GetInstanceDownStreamResponseBodyInstanceRelationListFieldInstanceList },
      instanceInfo: GetInstanceDownStreamResponseBodyInstanceRelationListInstanceInfo,
      runStatus: 'string',
      selectStatus: 'string',
      selectStatusCause: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceUpDownStreamRequestInstanceId extends $tea.Model {
  fieldInstanceIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * t_123456
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      fieldInstanceIdList: 'FieldInstanceIdList',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceUpDownStreamResponseBodyInstanceDagInfoDownInstanceList extends $tea.Model {
  fieldInstanceIdList?: string[];
  /**
   * @example
   * t_1234567
   */
  id?: string;
  /**
   * @example
   * xx测试
   */
  name?: string;
  /**
   * @example
   * n_1234567
   */
  nodeId?: string;
  /**
   * @example
   * DATA_PROCESS
   */
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      fieldInstanceIdList: 'FieldInstanceIdList',
      id: 'Id',
      name: 'Name',
      nodeId: 'NodeId',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      name: 'string',
      nodeId: 'string',
      nodeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceUpDownStreamResponseBodyInstanceDagInfoStartInstanceList extends $tea.Model {
  fieldInstanceIdList?: string[];
  /**
   * @example
   * t_1234567
   */
  id?: string;
  /**
   * @example
   * xx测试
   */
  name?: string;
  /**
   * @example
   * n_1234567
   */
  nodeId?: string;
  /**
   * @example
   * DATA_PROCESS
   */
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      fieldInstanceIdList: 'FieldInstanceIdList',
      id: 'Id',
      name: 'Name',
      nodeId: 'NodeId',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      name: 'string',
      nodeId: 'string',
      nodeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceUpDownStreamResponseBodyInstanceDagInfoUpInstanceList extends $tea.Model {
  fieldInstanceIdList?: string[];
  /**
   * @example
   * t_1234567
   */
  id?: string;
  /**
   * @example
   * xx测试
   */
  name?: string;
  /**
   * @example
   * n_1234567
   */
  nodeId?: string;
  /**
   * @example
   * DATA_PROCESS
   */
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      fieldInstanceIdList: 'FieldInstanceIdList',
      id: 'Id',
      name: 'Name',
      nodeId: 'NodeId',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      name: 'string',
      nodeId: 'string',
      nodeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceUpDownStreamResponseBodyInstanceDagInfo extends $tea.Model {
  downInstanceList?: GetInstanceUpDownStreamResponseBodyInstanceDagInfoDownInstanceList[];
  startInstanceList?: GetInstanceUpDownStreamResponseBodyInstanceDagInfoStartInstanceList[];
  upInstanceList?: GetInstanceUpDownStreamResponseBodyInstanceDagInfoUpInstanceList[];
  static names(): { [key: string]: string } {
    return {
      downInstanceList: 'DownInstanceList',
      startInstanceList: 'StartInstanceList',
      upInstanceList: 'UpInstanceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downInstanceList: { 'type': 'array', 'itemType': GetInstanceUpDownStreamResponseBodyInstanceDagInfoDownInstanceList },
      startInstanceList: { 'type': 'array', 'itemType': GetInstanceUpDownStreamResponseBodyInstanceDagInfoStartInstanceList },
      upInstanceList: { 'type': 'array', 'itemType': GetInstanceUpDownStreamResponseBodyInstanceDagInfoUpInstanceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLatestSubmitDetailRequestSubmitDetailQuery extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  objectId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MAX_COMPUTE_SQL
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      objectId: 'ObjectId',
      objectType: 'ObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectId: 'string',
      objectType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLatestSubmitDetailResponseBodySubmitDetailResultReleaseObjectSubmitObject extends $tea.Model {
  /**
   * @example
   * 1234
   */
  objectId?: string;
  /**
   * @example
   * abc
   */
  objectName?: string;
  /**
   * @example
   * MAX_COMPUTE_SQL
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      objectId: 'ObjectId',
      objectName: 'ObjectName',
      objectType: 'ObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectId: 'string',
      objectName: 'string',
      objectType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLatestSubmitDetailResponseBodySubmitDetailResultReleaseObject extends $tea.Model {
  /**
   * @example
   * DELETE
   */
  changeType?: string;
  /**
   * @example
   * n_1234
   */
  nodeId?: string;
  /**
   * @example
   * 1
   */
  objectVersion?: string;
  /**
   * @example
   * 1234
   */
  projectId?: number;
  /**
   * @example
   * 提交说明
   */
  submitComment?: string;
  submitObject?: GetLatestSubmitDetailResponseBodySubmitDetailResultReleaseObjectSubmitObject;
  static names(): { [key: string]: string } {
    return {
      changeType: 'ChangeType',
      nodeId: 'NodeId',
      objectVersion: 'ObjectVersion',
      projectId: 'ProjectId',
      submitComment: 'SubmitComment',
      submitObject: 'SubmitObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeType: 'string',
      nodeId: 'string',
      objectVersion: 'string',
      projectId: 'number',
      submitComment: 'string',
      submitObject: GetLatestSubmitDetailResponseBodySubmitDetailResultReleaseObjectSubmitObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLatestSubmitDetailResponseBodySubmitDetailResult extends $tea.Model {
  /**
   * @example
   * 1234
   */
  id?: number;
  /**
   * @example
   * SUCCESS
   */
  publishStatus?: string;
  releaseObject?: GetLatestSubmitDetailResponseBodySubmitDetailResultReleaseObject;
  /**
   * @example
   * TO_BE_PUBLISHED
   */
  submitStatus?: string;
  /**
   * @example
   * tag
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      publishStatus: 'PublishStatus',
      releaseObject: 'ReleaseObject',
      submitStatus: 'SubmitStatus',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      publishStatus: 'string',
      releaseObject: GetLatestSubmitDetailResponseBodySubmitDetailResultReleaseObject,
      submitStatus: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMyRolesResponseBodyRoleList extends $tea.Model {
  description?: string;
  /**
   * @example
   * 300047957
   */
  id?: number;
  /**
   * @example
   * dataphinAdmin
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMyTenantsResponseBodyTenantList extends $tea.Model {
  /**
   * @example
   * 1717343597000
   */
  deleteTime?: number;
  /**
   * @example
   * false
   */
  deleted?: boolean;
  description?: string;
  /**
   * @example
   * 132311
   */
  id?: number;
  name?: string;
  /**
   * @example
   * false
   */
  opsTenant?: boolean;
  /**
   * @example
   * 21323231
   */
  ownerId?: string;
  /**
   * @example
   * false
   */
  resourceLimited?: boolean;
  tenantTypeList?: string[];
  /**
   * @example
   * icon
   */
  titleType?: string;
  /**
   * @example
   * true
   */
  visible?: boolean;
  static names(): { [key: string]: string } {
    return {
      deleteTime: 'DeleteTime',
      deleted: 'Deleted',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      opsTenant: 'OpsTenant',
      ownerId: 'OwnerId',
      resourceLimited: 'ResourceLimited',
      tenantTypeList: 'TenantTypeList',
      titleType: 'TitleType',
      visible: 'Visible',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteTime: 'number',
      deleted: 'boolean',
      description: 'string',
      id: 'number',
      name: 'string',
      opsTenant: 'boolean',
      ownerId: 'string',
      resourceLimited: 'boolean',
      tenantTypeList: { 'type': 'array', 'itemType': 'string' },
      titleType: 'string',
      visible: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeUpDownStreamRequestNodeId extends $tea.Model {
  /**
   * @example
   * 12
   */
  fieldIdList?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11313
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      fieldIdList: 'FieldIdList',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldIdList: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeUpDownStreamResponseBodyNodeDagInfoDownStreamNodeList extends $tea.Model {
  fieldIdList?: string[];
  /**
   * @example
   * n_123456
   */
  id?: string;
  /**
   * @example
   * xx测试
   */
  name?: string;
  /**
   * @example
   * DATA_PROCESS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fieldIdList: 'FieldIdList',
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldIdList: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeUpDownStreamResponseBodyNodeDagInfoStartNodeList extends $tea.Model {
  fieldIdList?: string[];
  /**
   * @example
   * n_123456
   */
  id?: string;
  /**
   * @example
   * xx测试
   */
  name?: string;
  /**
   * @example
   * DATA_PROCESS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fieldIdList: 'FieldIdList',
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldIdList: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeUpDownStreamResponseBodyNodeDagInfoUpStreamNodeList extends $tea.Model {
  fieldIdList?: string[];
  /**
   * @example
   * n_123456
   */
  id?: string;
  /**
   * @example
   * xx测试
   */
  name?: string;
  /**
   * @example
   * DATA_PROCESS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fieldIdList: 'FieldIdList',
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldIdList: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeUpDownStreamResponseBodyNodeDagInfo extends $tea.Model {
  downStreamNodeList?: GetNodeUpDownStreamResponseBodyNodeDagInfoDownStreamNodeList[];
  startNodeList?: GetNodeUpDownStreamResponseBodyNodeDagInfoStartNodeList[];
  upStreamNodeList?: GetNodeUpDownStreamResponseBodyNodeDagInfoUpStreamNodeList[];
  static names(): { [key: string]: string } {
    return {
      downStreamNodeList: 'DownStreamNodeList',
      startNodeList: 'StartNodeList',
      upStreamNodeList: 'UpStreamNodeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downStreamNodeList: { 'type': 'array', 'itemType': GetNodeUpDownStreamResponseBodyNodeDagInfoDownStreamNodeList },
      startNodeList: { 'type': 'array', 'itemType': GetNodeUpDownStreamResponseBodyNodeDagInfoStartNodeList },
      upStreamNodeList: { 'type': 'array', 'itemType': GetNodeUpDownStreamResponseBodyNodeDagInfoUpStreamNodeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOperationSubmitStatusResponseBodyOperationSubmitJob extends $tea.Model {
  /**
   * @example
   * f_122_232342
   */
  externalBizId?: string;
  /**
   * @example
   * 123456
   */
  jobId?: string;
  /**
   * @example
   * SUPPLY_DATA
   */
  operation?: string;
  /**
   * @example
   * SUCCESS
   */
  operationStatus?: string;
  /**
   * @example
   * 132344
   */
  operator?: string;
  /**
   * @example
   * 80
   */
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      externalBizId: 'ExternalBizId',
      jobId: 'JobId',
      operation: 'Operation',
      operationStatus: 'OperationStatus',
      operator: 'Operator',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalBizId: 'string',
      jobId: 'string',
      operation: 'string',
      operationStatus: 'string',
      operator: 'string',
      progress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalInstanceResponseBodyInstanceNodeInfoCreator extends $tea.Model {
  /**
   * @example
   * 2323111
   */
  id?: string;
  /**
   * @example
   * zhangsan
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalInstanceResponseBodyInstanceNodeInfoModifier extends $tea.Model {
  /**
   * @example
   * 2323111
   */
  id?: string;
  /**
   * @example
   * zhangsan
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalInstanceResponseBodyInstanceNodeInfoOwnerList extends $tea.Model {
  /**
   * @example
   * 2323111
   */
  id?: string;
  /**
   * @example
   * zhangsan
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalInstanceResponseBodyInstanceNodeInfo extends $tea.Model {
  /**
   * @example
   * xx
   */
  bizUnitName?: string;
  /**
   * @example
   * 2023-02-02 23:53:17
   */
  createTime?: string;
  creator?: GetPhysicalInstanceResponseBodyInstanceNodeInfoCreator;
  description?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @example
   * DATA_PROCESS
   */
  from?: string;
  /**
   * @example
   * true
   */
  hasDev?: boolean;
  /**
   * @example
   * true
   */
  hasProd?: boolean;
  /**
   * @example
   * n_3232312
   */
  id?: string;
  /**
   * @example
   * 2024-02-02 23:53:17
   */
  lastModifiedTime?: string;
  modifier?: GetPhysicalInstanceResponseBodyInstanceNodeInfoModifier;
  name?: string;
  ownerList?: GetPhysicalInstanceResponseBodyInstanceNodeInfoOwnerList[];
  priorityList?: string[];
  resourceGroupList?: string[];
  /**
   * @example
   * false
   */
  schedulePaused?: boolean;
  schedulePeriodList?: string[];
  /**
   * @example
   * SHELL
   */
  subDetailType?: string;
  /**
   * @example
   * DATA_PROCESS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizUnitName: 'BizUnitName',
      createTime: 'CreateTime',
      creator: 'Creator',
      description: 'Description',
      dryRun: 'DryRun',
      from: 'From',
      hasDev: 'HasDev',
      hasProd: 'HasProd',
      id: 'Id',
      lastModifiedTime: 'LastModifiedTime',
      modifier: 'Modifier',
      name: 'Name',
      ownerList: 'OwnerList',
      priorityList: 'PriorityList',
      resourceGroupList: 'ResourceGroupList',
      schedulePaused: 'SchedulePaused',
      schedulePeriodList: 'SchedulePeriodList',
      subDetailType: 'SubDetailType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitName: 'string',
      createTime: 'string',
      creator: GetPhysicalInstanceResponseBodyInstanceNodeInfoCreator,
      description: 'string',
      dryRun: 'boolean',
      from: 'string',
      hasDev: 'boolean',
      hasProd: 'boolean',
      id: 'string',
      lastModifiedTime: 'string',
      modifier: GetPhysicalInstanceResponseBodyInstanceNodeInfoModifier,
      name: 'string',
      ownerList: { 'type': 'array', 'itemType': GetPhysicalInstanceResponseBodyInstanceNodeInfoOwnerList },
      priorityList: { 'type': 'array', 'itemType': 'string' },
      resourceGroupList: { 'type': 'array', 'itemType': 'string' },
      schedulePaused: 'boolean',
      schedulePeriodList: { 'type': 'array', 'itemType': 'string' },
      subDetailType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalInstanceResponseBodyInstance extends $tea.Model {
  /**
   * @example
   * 2023-06-25
   */
  bizDate?: string;
  /**
   * @example
   * 2023-06-27 00:30:00
   */
  dueTime?: string;
  /**
   * @example
   * 3600s
   */
  duration?: string;
  /**
   * @example
   * 2023-06-27 02:30:00
   */
  endExecuteTime?: number;
  /**
   * @example
   * xx
   */
  extendInfo?: string;
  /**
   * @example
   * t_23231
   */
  id?: string;
  /**
   * @example
   * 1
   */
  index?: number;
  nodeInfo?: GetPhysicalInstanceResponseBodyInstanceNodeInfo;
  /**
   * @example
   * 2023-06-27 01:30:00
   */
  startExecuteTime?: number;
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      dueTime: 'DueTime',
      duration: 'Duration',
      endExecuteTime: 'EndExecuteTime',
      extendInfo: 'ExtendInfo',
      id: 'Id',
      index: 'Index',
      nodeInfo: 'NodeInfo',
      startExecuteTime: 'StartExecuteTime',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      dueTime: 'string',
      duration: 'string',
      endExecuteTime: 'number',
      extendInfo: 'string',
      id: 'string',
      index: 'number',
      nodeInfo: GetPhysicalInstanceResponseBodyInstanceNodeInfo,
      startExecuteTime: 'number',
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalInstanceLogResponseBodyTaskrunLogList extends $tea.Model {
  /**
   * @example
   * 60s
   */
  duration?: string;
  /**
   * @example
   * 2024-05-30 16:48:13
   */
  endTime?: string;
  /**
   * @example
   * xx
   */
  logContent?: string;
  /**
   * @example
   * 2024-05-30 16:47:13
   */
  startTime?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * tr_23231
   */
  taskrunId?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      endTime: 'EndTime',
      logContent: 'LogContent',
      startTime: 'StartTime',
      status: 'Status',
      taskrunId: 'TaskrunId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      endTime: 'string',
      logContent: 'string',
      startTime: 'string',
      status: 'string',
      taskrunId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalNodeResponseBodyNodeInfoCreator extends $tea.Model {
  /**
   * @example
   * 101312
   */
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalNodeResponseBodyNodeInfoModifier extends $tea.Model {
  /**
   * @example
   * 101312
   */
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalNodeResponseBodyNodeInfoOwner extends $tea.Model {
  /**
   * @example
   * 101312
   */
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalNodeResponseBodyNodeInfoProjectInfo extends $tea.Model {
  /**
   * @example
   * 102132
   */
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalNodeResponseBodyNodeInfo extends $tea.Model {
  /**
   * @example
   * 1717343597000
   */
  createTime?: number;
  creator?: GetPhysicalNodeResponseBodyNodeInfoCreator;
  /**
   * @example
   * 0 0 10 * * *
   */
  cronExpression?: string;
  /**
   * @example
   * 123456789
   */
  dataSourceId?: number;
  /**
   * @example
   * null
   */
  dataSourceSchema?: string;
  description?: string;
  /**
   * @example
   * DATA_PROCESS
   */
  from?: string;
  /**
   * @example
   * n_232132
   */
  id?: string;
  /**
   * @example
   * 1717343597000
   */
  lastModifiedTime?: number;
  modifier?: GetPhysicalNodeResponseBodyNodeInfoModifier;
  name?: string;
  /**
   * @example
   * SHELL
   */
  operatorType?: string;
  outputNameList?: string[];
  owner?: GetPhysicalNodeResponseBodyNodeInfoOwner;
  /**
   * @example
   * MIDDLE
   */
  priority?: string;
  projectInfo?: GetPhysicalNodeResponseBodyNodeInfoProjectInfo;
  /**
   * @example
   * DAILY
   */
  scheduleType?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * {"expression":"any_success"}
   */
  triggerConfig?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      cronExpression: 'CronExpression',
      dataSourceId: 'DataSourceId',
      dataSourceSchema: 'DataSourceSchema',
      description: 'Description',
      from: 'From',
      id: 'Id',
      lastModifiedTime: 'LastModifiedTime',
      modifier: 'Modifier',
      name: 'Name',
      operatorType: 'OperatorType',
      outputNameList: 'OutputNameList',
      owner: 'Owner',
      priority: 'Priority',
      projectInfo: 'ProjectInfo',
      scheduleType: 'ScheduleType',
      status: 'Status',
      triggerConfig: 'TriggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      creator: GetPhysicalNodeResponseBodyNodeInfoCreator,
      cronExpression: 'string',
      dataSourceId: 'number',
      dataSourceSchema: 'string',
      description: 'string',
      from: 'string',
      id: 'string',
      lastModifiedTime: 'number',
      modifier: GetPhysicalNodeResponseBodyNodeInfoModifier,
      name: 'string',
      operatorType: 'string',
      outputNameList: { 'type': 'array', 'itemType': 'string' },
      owner: GetPhysicalNodeResponseBodyNodeInfoOwner,
      priority: 'string',
      projectInfo: GetPhysicalNodeResponseBodyNodeInfoProjectInfo,
      scheduleType: 'string',
      status: 'string',
      triggerConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalNodeByOutputNameResponseBodyNodeInfoCreator extends $tea.Model {
  /**
   * @example
   * 1311131
   */
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalNodeByOutputNameResponseBodyNodeInfoModifier extends $tea.Model {
  /**
   * @example
   * 1311131
   */
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalNodeByOutputNameResponseBodyNodeInfoOwner extends $tea.Model {
  /**
   * @example
   * 1311131
   */
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalNodeByOutputNameResponseBodyNodeInfoProjectInfo extends $tea.Model {
  /**
   * @example
   * 1324211
   */
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalNodeByOutputNameResponseBodyNodeInfo extends $tea.Model {
  /**
   * @example
   * 1717343597000
   */
  createTime?: number;
  creator?: GetPhysicalNodeByOutputNameResponseBodyNodeInfoCreator;
  description?: string;
  /**
   * @example
   * DATA_PROCESS
   */
  from?: string;
  /**
   * @example
   * n_2321
   */
  id?: string;
  /**
   * @example
   * 1717343597000
   */
  lastModifiedTime?: number;
  modifier?: GetPhysicalNodeByOutputNameResponseBodyNodeInfoModifier;
  name?: string;
  /**
   * @example
   * SHELL
   */
  operatorType?: string;
  owner?: GetPhysicalNodeByOutputNameResponseBodyNodeInfoOwner;
  /**
   * @example
   * MIDDLE
   */
  priority?: string;
  projectInfo?: GetPhysicalNodeByOutputNameResponseBodyNodeInfoProjectInfo;
  /**
   * @example
   * DAILY
   */
  scheduleType?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * {"expression":"any_success"}
   */
  triggerConfig?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      description: 'Description',
      from: 'From',
      id: 'Id',
      lastModifiedTime: 'LastModifiedTime',
      modifier: 'Modifier',
      name: 'Name',
      operatorType: 'OperatorType',
      owner: 'Owner',
      priority: 'Priority',
      projectInfo: 'ProjectInfo',
      scheduleType: 'ScheduleType',
      status: 'Status',
      triggerConfig: 'TriggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      creator: GetPhysicalNodeByOutputNameResponseBodyNodeInfoCreator,
      description: 'string',
      from: 'string',
      id: 'string',
      lastModifiedTime: 'number',
      modifier: GetPhysicalNodeByOutputNameResponseBodyNodeInfoModifier,
      name: 'string',
      operatorType: 'string',
      owner: GetPhysicalNodeByOutputNameResponseBodyNodeInfoOwner,
      priority: 'string',
      projectInfo: GetPhysicalNodeByOutputNameResponseBodyNodeInfoProjectInfo,
      scheduleType: 'string',
      status: 'string',
      triggerConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalNodeContentResponseBodyData extends $tea.Model {
  /**
   * @example
   * select 1;
   */
  codeContent?: string;
  /**
   * @example
   * n_232411
   */
  nodeId?: string;
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      codeContent: 'CodeContent',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeContent: 'string',
      nodeId: 'string',
      nodeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhysicalNodeOperationLogResponseBodyOperationLogList extends $tea.Model {
  /**
   * @example
   * xx
   */
  context?: string;
  /**
   * @example
   * 2024-05-30 16:47:13
   */
  operationTime?: string;
  /**
   * @example
   * PAUSE_TASK
   */
  operationType?: string;
  /**
   * @example
   * 132222
   */
  operator?: string;
  operatorName?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
      operationTime: 'OperationTime',
      operationType: 'OperationType',
      operator: 'Operator',
      operatorName: 'OperatorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'string',
      operationTime: 'string',
      operationType: 'string',
      operator: 'string',
      operatorName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectProduceUserResponseBodyUser extends $tea.Model {
  /**
   * @example
   * 123131
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupplementDagrunResponseBodyDagrunList extends $tea.Model {
  /**
   * @example
   * 2024-04-01
   */
  bizDate?: string;
  /**
   * @example
   * 60s
   */
  duration?: string;
  /**
   * @example
   * 1717081789000
   */
  endExecuteTime?: number;
  /**
   * @remarks
   * Dagrun ID
   * 
   * @example
   * dr_2242792_14542
   */
  id?: string;
  /**
   * @example
   * 1717081729000
   */
  startExecuteTime?: number;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @example
   * f_8241792_20201202_2099680
   */
  supplementId?: string;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      duration: 'Duration',
      endExecuteTime: 'EndExecuteTime',
      id: 'Id',
      startExecuteTime: 'StartExecuteTime',
      status: 'Status',
      supplementId: 'SupplementId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      duration: 'string',
      endExecuteTime: 'number',
      id: 'string',
      startExecuteTime: 'number',
      status: 'string',
      supplementId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupplementDagrunInstanceResponseBodyInstanceListNodeInfoCreator extends $tea.Model {
  /**
   * @example
   * 1001012
   */
  id?: string;
  /**
   * @example
   * xx测试
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupplementDagrunInstanceResponseBodyInstanceListNodeInfoModifier extends $tea.Model {
  /**
   * @example
   * 1001012
   */
  id?: string;
  /**
   * @example
   * xx测试
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupplementDagrunInstanceResponseBodyInstanceListNodeInfoOwnerList extends $tea.Model {
  /**
   * @example
   * 1001012
   */
  id?: string;
  /**
   * @example
   * xx测试
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupplementDagrunInstanceResponseBodyInstanceListNodeInfo extends $tea.Model {
  /**
   * @example
   * xx测试
   */
  bizUnitName?: string;
  /**
   * @example
   * 2024-01-30 10:08:49
   */
  createTime?: string;
  creator?: GetSupplementDagrunInstanceResponseBodyInstanceListNodeInfoCreator;
  /**
   * @example
   * xx测试
   */
  description?: string;
  /**
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @example
   * DATA_PROCESS
   */
  from?: string;
  /**
   * @example
   * true
   */
  hasDev?: boolean;
  /**
   * @example
   * true
   */
  hasProd?: boolean;
  /**
   * @example
   * n_239496
   */
  id?: string;
  /**
   * @example
   * 2024-01-30 10:08:49
   */
  lastModifiedTime?: string;
  modifier?: GetSupplementDagrunInstanceResponseBodyInstanceListNodeInfoModifier;
  /**
   * @example
   * xx测试
   */
  name?: string;
  ownerList?: GetSupplementDagrunInstanceResponseBodyInstanceListNodeInfoOwnerList[];
  priorityList?: string[];
  resourceGroupList?: string[];
  /**
   * @example
   * true
   */
  schedulePaused?: boolean;
  schedulePeriodList?: string[];
  /**
   * @example
   * SHELL
   */
  subDetailType?: string;
  /**
   * @example
   * DATA_PROCESS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizUnitName: 'BizUnitName',
      createTime: 'CreateTime',
      creator: 'Creator',
      description: 'Description',
      dryRun: 'DryRun',
      from: 'From',
      hasDev: 'HasDev',
      hasProd: 'HasProd',
      id: 'Id',
      lastModifiedTime: 'LastModifiedTime',
      modifier: 'Modifier',
      name: 'Name',
      ownerList: 'OwnerList',
      priorityList: 'PriorityList',
      resourceGroupList: 'ResourceGroupList',
      schedulePaused: 'SchedulePaused',
      schedulePeriodList: 'SchedulePeriodList',
      subDetailType: 'SubDetailType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitName: 'string',
      createTime: 'string',
      creator: GetSupplementDagrunInstanceResponseBodyInstanceListNodeInfoCreator,
      description: 'string',
      dryRun: 'boolean',
      from: 'string',
      hasDev: 'boolean',
      hasProd: 'boolean',
      id: 'string',
      lastModifiedTime: 'string',
      modifier: GetSupplementDagrunInstanceResponseBodyInstanceListNodeInfoModifier,
      name: 'string',
      ownerList: { 'type': 'array', 'itemType': GetSupplementDagrunInstanceResponseBodyInstanceListNodeInfoOwnerList },
      priorityList: { 'type': 'array', 'itemType': 'string' },
      resourceGroupList: { 'type': 'array', 'itemType': 'string' },
      schedulePaused: 'boolean',
      schedulePeriodList: { 'type': 'array', 'itemType': 'string' },
      subDetailType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupplementDagrunInstanceResponseBodyInstanceList extends $tea.Model {
  /**
   * @example
   * 2024-04-01
   */
  bizDate?: number;
  /**
   * @example
   * 2024-04-02
   */
  dueTime?: number;
  /**
   * @example
   * 60
   */
  duration?: string;
  /**
   * @example
   * 2024-04-12 00:25:02
   */
  endExecuteTime?: number;
  /**
   * @example
   * {"a":"b"}
   */
  extendInfo?: string;
  /**
   * @example
   * t_239496_20210411_246982077481
   */
  id?: string;
  /**
   * @example
   * 1
   */
  index?: number;
  nodeInfo?: GetSupplementDagrunInstanceResponseBodyInstanceListNodeInfo;
  /**
   * @example
   * 2024-04-12 00:00:00
   */
  startExecuteTime?: number;
  statusList?: string[];
  /**
   * @example
   * SUPPLEMENT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      dueTime: 'DueTime',
      duration: 'Duration',
      endExecuteTime: 'EndExecuteTime',
      extendInfo: 'ExtendInfo',
      id: 'Id',
      index: 'Index',
      nodeInfo: 'NodeInfo',
      startExecuteTime: 'StartExecuteTime',
      statusList: 'StatusList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'number',
      dueTime: 'number',
      duration: 'string',
      endExecuteTime: 'number',
      extendInfo: 'string',
      id: 'string',
      index: 'number',
      nodeInfo: GetSupplementDagrunInstanceResponseBodyInstanceListNodeInfo,
      startExecuteTime: 'number',
      statusList: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserBySourceIdResponseBodyUser extends $tea.Model {
  displayName?: string;
  /**
   * @example
   * 23231231
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupResponseBodyUserGroupInfoAdminList extends $tea.Model {
  /**
   * @example
   * xx
   */
  accountName?: string;
  displayName?: string;
  /**
   * @example
   * 131313
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      displayName: 'DisplayName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      displayName: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupResponseBodyUserGroupInfo extends $tea.Model {
  /**
   * @example
   * true
   */
  active?: boolean;
  adminList?: GetUserGroupResponseBodyUserGroupInfoAdminList[];
  /**
   * @example
   * xx
   */
  description?: string;
  /**
   * @example
   * 1313213
   */
  id?: string;
  /**
   * @example
   * xx
   */
  myRole?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      adminList: 'AdminList',
      description: 'Description',
      id: 'Id',
      myRole: 'MyRole',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      adminList: { 'type': 'array', 'itemType': GetUserGroupResponseBodyUserGroupInfoAdminList },
      description: 'string',
      id: 'string',
      myRole: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUsersResponseBodyUserList extends $tea.Model {
  /**
   * @example
   * 123@xx.com
   */
  accountName?: string;
  /**
   * @example
   * 123@dingding
   */
  dingNumber?: string;
  displayName?: string;
  displayNameWithoutStatus?: string;
  /**
   * @example
   * true
   */
  enableWhiteIp?: string;
  /**
   * @example
   * xx
   */
  feiShuRobot?: string;
  /**
   * @example
   * 1717343597000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1717343597000
   */
  gmtModified?: number;
  /**
   * @example
   * 1233121
   */
  id?: string;
  /**
   * @example
   * 123@xx.com
   */
  mail?: string;
  /**
   * @example
   * 1388888888
   */
  mobilePhone?: string;
  name?: string;
  nickName?: string;
  /**
   * @example
   * 231231
   */
  parentId?: string;
  realName?: string;
  /**
   * @example
   * 123@xx.com
   */
  sourceId?: string;
  /**
   * @example
   * ALIYUN
   */
  sourceType?: string;
  /**
   * @example
   * xx
   */
  weChatRobot?: string;
  /**
   * @example
   * *
   */
  whiteIp?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dingNumber: 'DingNumber',
      displayName: 'DisplayName',
      displayNameWithoutStatus: 'DisplayNameWithoutStatus',
      enableWhiteIp: 'EnableWhiteIp',
      feiShuRobot: 'FeiShuRobot',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      mail: 'Mail',
      mobilePhone: 'MobilePhone',
      name: 'Name',
      nickName: 'NickName',
      parentId: 'ParentId',
      realName: 'RealName',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      weChatRobot: 'WeChatRobot',
      whiteIp: 'WhiteIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      dingNumber: 'string',
      displayName: 'string',
      displayNameWithoutStatus: 'string',
      enableWhiteIp: 'string',
      feiShuRobot: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'string',
      mail: 'string',
      mobilePhone: 'string',
      name: 'string',
      nickName: 'string',
      parentId: 'string',
      realName: 'string',
      sourceId: 'string',
      sourceType: 'string',
      weChatRobot: 'string',
      whiteIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantResourcePermissionRequestGrantCommandResourceList extends $tea.Model {
  /**
   * @example
   * hadoop.300000806.data_distill.behavior_gameinfor_01
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantResourcePermissionRequestGrantCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1717343597000
   */
  effectiveEnd?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  operateList?: string[];
  /**
   * @example
   * xx
   */
  reason?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceList?: GrantResourcePermissionRequestGrantCommandResourceList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PHYSICAL_TABLE
   */
  resourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      effectiveEnd: 'EffectiveEnd',
      operateList: 'OperateList',
      reason: 'Reason',
      resourceList: 'ResourceList',
      resourceType: 'ResourceType',
      userIdList: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveEnd: 'string',
      operateList: { 'type': 'array', 'itemType': 'string' },
      reason: 'string',
      resourceList: { 'type': 'array', 'itemType': GrantResourcePermissionRequestGrantCommandResourceList },
      resourceType: 'string',
      userIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddableRolesResponseBodyRoleList extends $tea.Model {
  /**
   * @example
   * SECURITY_ADMIN
   */
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddableUsersRequestListQuery extends $tea.Model {
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * xx
   */
  searchText?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
      searchText: 'SearchText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      searchText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddableUsersResponseBodyPageResultUserList extends $tea.Model {
  /**
   * @example
   * 123@xx.com
   */
  accountName?: string;
  /**
   * @example
   * 123@dingding
   */
  dingNumber?: string;
  /**
   * @example
   * xx
   */
  displayName?: string;
  /**
   * @example
   * xx
   */
  displayNameWithoutStatus?: string;
  /**
   * @example
   * true
   */
  enableWhiteIp?: string;
  /**
   * @example
   * xx
   */
  feiShuRobot?: string;
  /**
   * @example
   * 1717343597000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1717343597000
   */
  gmtModified?: number;
  /**
   * @example
   * 123231
   */
  id?: string;
  /**
   * @example
   * 123@xx.com
   */
  mail?: string;
  /**
   * @example
   * 13888888888
   */
  mobilePhone?: string;
  /**
   * @example
   * xx
   */
  name?: string;
  /**
   * @example
   * xx
   */
  nickName?: string;
  /**
   * @example
   * 231313
   */
  parentId?: string;
  /**
   * @example
   * xx
   */
  realName?: string;
  /**
   * @example
   * 123@xx.com
   */
  sourceId?: string;
  /**
   * @example
   * aliyun
   */
  sourceType?: string;
  /**
   * @example
   * xx
   */
  weChatRobot?: string;
  /**
   * @example
   * *
   */
  whiteIp?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dingNumber: 'DingNumber',
      displayName: 'DisplayName',
      displayNameWithoutStatus: 'DisplayNameWithoutStatus',
      enableWhiteIp: 'EnableWhiteIp',
      feiShuRobot: 'FeiShuRobot',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      mail: 'Mail',
      mobilePhone: 'MobilePhone',
      name: 'Name',
      nickName: 'NickName',
      parentId: 'ParentId',
      realName: 'RealName',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      weChatRobot: 'WeChatRobot',
      whiteIp: 'WhiteIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      dingNumber: 'string',
      displayName: 'string',
      displayNameWithoutStatus: 'string',
      enableWhiteIp: 'string',
      feiShuRobot: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'string',
      mail: 'string',
      mobilePhone: 'string',
      name: 'string',
      nickName: 'string',
      parentId: 'string',
      realName: 'string',
      sourceId: 'string',
      sourceType: 'string',
      weChatRobot: 'string',
      whiteIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddableUsersResponseBodyPageResult extends $tea.Model {
  /**
   * @example
   * 66
   */
  totalCount?: number;
  userList?: ListAddableUsersResponseBodyPageResultUserList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      userList: { 'type': 'array', 'itemType': ListAddableUsersResponseBodyPageResultUserList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertEventsRequestListQuery extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-11-27 13:47:00
   */
  alertEndTime?: string;
  alertObjectTypeList?: string[];
  alertReasonList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-11-16 00:00:00
   */
  alertStartTime?: string;
  bizNameList?: string[];
  /**
   * @example
   * test
   */
  keyword?: string;
  monitoredItemIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  projectNameList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  sourceSystem?: string;
  statusList?: string[];
  userIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      alertEndTime: 'AlertEndTime',
      alertObjectTypeList: 'AlertObjectTypeList',
      alertReasonList: 'AlertReasonList',
      alertStartTime: 'AlertStartTime',
      bizNameList: 'BizNameList',
      keyword: 'Keyword',
      monitoredItemIdList: 'MonitoredItemIdList',
      page: 'Page',
      pageSize: 'PageSize',
      projectNameList: 'ProjectNameList',
      sourceSystem: 'SourceSystem',
      statusList: 'StatusList',
      userIdList: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertEndTime: 'string',
      alertObjectTypeList: { 'type': 'array', 'itemType': 'string' },
      alertReasonList: { 'type': 'array', 'itemType': 'string' },
      alertStartTime: 'string',
      bizNameList: { 'type': 'array', 'itemType': 'string' },
      keyword: 'string',
      monitoredItemIdList: { 'type': 'array', 'itemType': 'string' },
      page: 'number',
      pageSize: 'number',
      projectNameList: { 'type': 'array', 'itemType': 'string' },
      sourceSystem: 'string',
      statusList: { 'type': 'array', 'itemType': 'string' },
      userIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertEventsResponseBodyListResultDataAlertObject extends $tea.Model {
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * VDM_BATCH
   */
  sourceSystemType?: string;
  /**
   * @example
   * STREAM_TASK
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      sourceSystemType: 'SourceSystemType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      sourceSystemType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertEventsResponseBodyListResultDataAlertReasonAlertReasonParamList extends $tea.Model {
  /**
   * @example
   * biz_date
   */
  key?: string;
  /**
   * @example
   * 2024-11-24 00:00:00
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

export class ListAlertEventsResponseBodyListResultDataAlertReason extends $tea.Model {
  alertReasonParamList?: ListAlertEventsResponseBodyListResultDataAlertReasonAlertReasonParamList[];
  /**
   * @example
   * 2024-11-25 10:02:47
   */
  bizDate?: string;
  /**
   * @example
   * VDM_BATCH_FINISH
   */
  type?: string;
  /**
   * @example
   * t_6340134343289405440_20241124_639873707610
   */
  uniqueKey?: string;
  static names(): { [key: string]: string } {
    return {
      alertReasonParamList: 'AlertReasonParamList',
      bizDate: 'BizDate',
      type: 'Type',
      uniqueKey: 'UniqueKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertReasonParamList: { 'type': 'array', 'itemType': ListAlertEventsResponseBodyListResultDataAlertReasonAlertReasonParamList },
      bizDate: 'string',
      type: 'string',
      uniqueKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertEventsResponseBodyListResultDataAlertReceiverListUserList extends $tea.Model {
  /**
   * @example
   * ADMIN
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertEventsResponseBodyListResultDataAlertReceiverList extends $tea.Model {
  alertChannelTypeList?: string[];
  customAlertChannelIdList?: string[];
  /**
   * @example
   * test
   */
  onCallTableName?: string;
  /**
   * @example
   * OWNER
   */
  type?: string;
  userList?: ListAlertEventsResponseBodyListResultDataAlertReceiverListUserList[];
  static names(): { [key: string]: string } {
    return {
      alertChannelTypeList: 'AlertChannelTypeList',
      customAlertChannelIdList: 'CustomAlertChannelIdList',
      onCallTableName: 'OnCallTableName',
      type: 'Type',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertChannelTypeList: { 'type': 'array', 'itemType': 'string' },
      customAlertChannelIdList: { 'type': 'array', 'itemType': 'string' },
      onCallTableName: 'string',
      type: 'string',
      userList: { 'type': 'array', 'itemType': ListAlertEventsResponseBodyListResultDataAlertReceiverListUserList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertEventsResponseBodyListResultDataBelongProject extends $tea.Model {
  /**
   * @example
   * biz_1
   */
  bizName?: string;
  /**
   * @example
   * project_1
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      bizName: 'BizName',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizName: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertEventsResponseBodyListResultDataUrlConfig extends $tea.Model {
  /**
   * @example
   * https://dataphin.com/ops/test3
   */
  alertConfigUrl?: string;
  /**
   * @example
   * https://dataphin.com/ops/test2
   */
  logUrl?: string;
  /**
   * @example
   * https://dataphin.com/ops/test1
   */
  objectUrl?: string;
  static names(): { [key: string]: string } {
    return {
      alertConfigUrl: 'AlertConfigUrl',
      logUrl: 'LogUrl',
      objectUrl: 'ObjectUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfigUrl: 'string',
      logUrl: 'string',
      objectUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertEventsResponseBodyListResultData extends $tea.Model {
  /**
   * @example
   * ONCE
   */
  alertFrequency?: string;
  alertObject?: ListAlertEventsResponseBodyListResultDataAlertObject;
  alertReason?: ListAlertEventsResponseBodyListResultDataAlertReason;
  alertReceiverList?: ListAlertEventsResponseBodyListResultDataAlertReceiverList[];
  belongProject?: ListAlertEventsResponseBodyListResultDataBelongProject;
  /**
   * @example
   * 2024-11-25 00:00:00
   */
  doNotDisturbEndTime?: string;
  /**
   * @example
   * 2024-11-25 10:02:47
   */
  firstAlertTime?: string;
  /**
   * @example
   * 12345
   */
  id?: string;
  /**
   * @example
   * 2024-11-25 10:02:47
   */
  latestAlertTime?: string;
  /**
   * @example
   * FINISH
   */
  status?: string;
  /**
   * @example
   * 1
   */
  totalAlertTimes?: number;
  urlConfig?: ListAlertEventsResponseBodyListResultDataUrlConfig;
  static names(): { [key: string]: string } {
    return {
      alertFrequency: 'AlertFrequency',
      alertObject: 'AlertObject',
      alertReason: 'AlertReason',
      alertReceiverList: 'AlertReceiverList',
      belongProject: 'BelongProject',
      doNotDisturbEndTime: 'DoNotDisturbEndTime',
      firstAlertTime: 'FirstAlertTime',
      id: 'Id',
      latestAlertTime: 'LatestAlertTime',
      status: 'Status',
      totalAlertTimes: 'TotalAlertTimes',
      urlConfig: 'UrlConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertFrequency: 'string',
      alertObject: ListAlertEventsResponseBodyListResultDataAlertObject,
      alertReason: ListAlertEventsResponseBodyListResultDataAlertReason,
      alertReceiverList: { 'type': 'array', 'itemType': ListAlertEventsResponseBodyListResultDataAlertReceiverList },
      belongProject: ListAlertEventsResponseBodyListResultDataBelongProject,
      doNotDisturbEndTime: 'string',
      firstAlertTime: 'string',
      id: 'string',
      latestAlertTime: 'string',
      status: 'string',
      totalAlertTimes: 'number',
      urlConfig: ListAlertEventsResponseBodyListResultDataUrlConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertEventsResponseBodyListResult extends $tea.Model {
  data?: ListAlertEventsResponseBodyListResultData[];
  /**
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListAlertEventsResponseBodyListResultData },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertNotificationsRequestListQuery extends $tea.Model {
  alertReasonList?: string[];
  channelTypeList?: string[];
  customChannelIdList?: string[];
  /**
   * @example
   * test
   */
  keyword?: string;
  monitoredItemIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-11-27 13:47:00
   */
  notifyEndTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-11-16 00:00:00
   */
  notifyStartTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  sourceSystem?: string;
  statusList?: string[];
  userIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      alertReasonList: 'AlertReasonList',
      channelTypeList: 'ChannelTypeList',
      customChannelIdList: 'CustomChannelIdList',
      keyword: 'Keyword',
      monitoredItemIdList: 'MonitoredItemIdList',
      notifyEndTime: 'NotifyEndTime',
      notifyStartTime: 'NotifyStartTime',
      page: 'Page',
      pageSize: 'PageSize',
      sourceSystem: 'SourceSystem',
      statusList: 'StatusList',
      userIdList: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertReasonList: { 'type': 'array', 'itemType': 'string' },
      channelTypeList: { 'type': 'array', 'itemType': 'string' },
      customChannelIdList: { 'type': 'array', 'itemType': 'string' },
      keyword: 'string',
      monitoredItemIdList: { 'type': 'array', 'itemType': 'string' },
      notifyEndTime: 'string',
      notifyStartTime: 'string',
      page: 'number',
      pageSize: 'number',
      sourceSystem: 'string',
      statusList: { 'type': 'array', 'itemType': 'string' },
      userIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertNotificationsResponseBodyListResultDataAlertObject extends $tea.Model {
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * VDM_BATCH
   */
  sourceSystemType?: string;
  /**
   * @example
   * VDM_BATCH_SHELL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      sourceSystemType: 'SourceSystemType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      sourceSystemType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertNotificationsResponseBodyListResultDataAlertReasonAlertReasonParamList extends $tea.Model {
  /**
   * @example
   * biz_date
   */
  key?: string;
  /**
   * @example
   * 2024-11-24 00:00:00
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

export class ListAlertNotificationsResponseBodyListResultDataAlertReason extends $tea.Model {
  alertReasonParamList?: ListAlertNotificationsResponseBodyListResultDataAlertReasonAlertReasonParamList[];
  /**
   * @example
   * 20241125
   */
  bizDate?: string;
  /**
   * @example
   * VDM_BATCH_FINISH
   */
  type?: string;
  /**
   * @example
   * 123456
   */
  uniqueKey?: string;
  static names(): { [key: string]: string } {
    return {
      alertReasonParamList: 'AlertReasonParamList',
      bizDate: 'BizDate',
      type: 'Type',
      uniqueKey: 'UniqueKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertReasonParamList: { 'type': 'array', 'itemType': ListAlertNotificationsResponseBodyListResultDataAlertReasonAlertReasonParamList },
      bizDate: 'string',
      type: 'string',
      uniqueKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertNotificationsResponseBodyListResultDataAlertReceiverUser extends $tea.Model {
  /**
   * @example
   * ADMIN
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertNotificationsResponseBodyListResultDataAlertReceiver extends $tea.Model {
  /**
   * @example
   * SMS
   */
  alertChannelType?: string;
  /**
   * @example
   * 123456
   */
  customAlertChannelId?: string;
  /**
   * @example
   * 12345
   */
  onCallTableId?: string;
  /**
   * @example
   * test
   */
  onCallTableName?: string;
  /**
   * @example
   * OWNER
   */
  type?: string;
  user?: ListAlertNotificationsResponseBodyListResultDataAlertReceiverUser;
  static names(): { [key: string]: string } {
    return {
      alertChannelType: 'AlertChannelType',
      customAlertChannelId: 'CustomAlertChannelId',
      onCallTableId: 'OnCallTableId',
      onCallTableName: 'OnCallTableName',
      type: 'Type',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertChannelType: 'string',
      customAlertChannelId: 'string',
      onCallTableId: 'string',
      onCallTableName: 'string',
      type: 'string',
      user: ListAlertNotificationsResponseBodyListResultDataAlertReceiverUser,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertNotificationsResponseBodyListResultDataAlertSend extends $tea.Model {
  failReason?: string;
  /**
   * @example
   * test
   */
  sendContent?: string;
  /**
   * @example
   * 2024-11-25 10:02:47
   */
  sendTime?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      failReason: 'FailReason',
      sendContent: 'SendContent',
      sendTime: 'SendTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failReason: 'string',
      sendContent: 'string',
      sendTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertNotificationsResponseBodyListResultData extends $tea.Model {
  /**
   * @example
   * 12345
   */
  alertEventId?: string;
  alertObject?: ListAlertNotificationsResponseBodyListResultDataAlertObject;
  alertReason?: ListAlertNotificationsResponseBodyListResultDataAlertReason;
  alertReceiver?: ListAlertNotificationsResponseBodyListResultDataAlertReceiver;
  alertSend?: ListAlertNotificationsResponseBodyListResultDataAlertSend;
  static names(): { [key: string]: string } {
    return {
      alertEventId: 'AlertEventId',
      alertObject: 'AlertObject',
      alertReason: 'AlertReason',
      alertReceiver: 'AlertReceiver',
      alertSend: 'AlertSend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertEventId: 'string',
      alertObject: ListAlertNotificationsResponseBodyListResultDataAlertObject,
      alertReason: ListAlertNotificationsResponseBodyListResultDataAlertReason,
      alertReceiver: ListAlertNotificationsResponseBodyListResultDataAlertReceiver,
      alertSend: ListAlertNotificationsResponseBodyListResultDataAlertSend,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertNotificationsResponseBodyListResult extends $tea.Model {
  data?: ListAlertNotificationsResponseBodyListResultData[];
  /**
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListAlertNotificationsResponseBodyListResultData },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBizEntitiesRequestListQueryFilterCriteria extends $tea.Model {
  bizUnitIdList?: number[];
  bizUnitNameList?: string[];
  dataDomainIdList?: number[];
  dataDomainNameList?: string[];
  hasTableRef?: boolean;
  ownerUserIdList?: string[];
  statusList?: string[];
  subTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      bizUnitIdList: 'BizUnitIdList',
      bizUnitNameList: 'BizUnitNameList',
      dataDomainIdList: 'DataDomainIdList',
      dataDomainNameList: 'DataDomainNameList',
      hasTableRef: 'HasTableRef',
      ownerUserIdList: 'OwnerUserIdList',
      statusList: 'StatusList',
      subTypeList: 'SubTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitIdList: { 'type': 'array', 'itemType': 'number' },
      bizUnitNameList: { 'type': 'array', 'itemType': 'string' },
      dataDomainIdList: { 'type': 'array', 'itemType': 'number' },
      dataDomainNameList: { 'type': 'array', 'itemType': 'string' },
      hasTableRef: 'boolean',
      ownerUserIdList: { 'type': 'array', 'itemType': 'string' },
      statusList: { 'type': 'array', 'itemType': 'string' },
      subTypeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBizEntitiesRequestListQuery extends $tea.Model {
  filterCriteria?: ListBizEntitiesRequestListQueryFilterCriteria;
  /**
   * @example
   * object_
   */
  keyword?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      filterCriteria: 'FilterCriteria',
      keyword: 'Keyword',
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterCriteria: ListBizEntitiesRequestListQueryFilterCriteria,
      keyword: 'string',
      page: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBizEntitiesResponseBodyPageResultBizEntityList extends $tea.Model {
  belongToBizEntityIdList?: number[];
  /**
   * @example
   * 6798087749072704
   */
  bizUnitId?: number;
  childBizEntityIdList?: number[];
  /**
   * @example
   * 20101011
   */
  dataDomainId?: number;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 业务活动测试
   */
  displayName?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  gmtModified?: string;
  hasChildBizEntity?: boolean;
  /**
   * @example
   * 12121111
   */
  id?: number;
  /**
   * @example
   * 30010010
   */
  lastModifier?: string;
  /**
   * @example
   * 张三
   */
  lastModifierName?: string;
  levelSubBizObject?: boolean;
  /**
   * @example
   * create_process_code_name
   */
  name?: string;
  /**
   * @example
   * SUBMITTED
   */
  onlineStatus?: string;
  /**
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @example
   * 30010010
   */
  ownerUserId?: string;
  refBizEntityIdList?: number[];
  /**
   * @example
   * 1
   */
  refTableCount?: number;
  /**
   * @example
   * SUBMITTED
   */
  status?: string;
  /**
   * @example
   * NORMAL
   */
  subType?: string;
  suffixBizEntityIdList?: number[];
  /**
   * @example
   * BIZ_OBJECT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      belongToBizEntityIdList: 'BelongToBizEntityIdList',
      bizUnitId: 'BizUnitId',
      childBizEntityIdList: 'ChildBizEntityIdList',
      dataDomainId: 'DataDomainId',
      description: 'Description',
      displayName: 'DisplayName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hasChildBizEntity: 'HasChildBizEntity',
      id: 'Id',
      lastModifier: 'LastModifier',
      lastModifierName: 'LastModifierName',
      levelSubBizObject: 'LevelSubBizObject',
      name: 'Name',
      onlineStatus: 'OnlineStatus',
      ownerName: 'OwnerName',
      ownerUserId: 'OwnerUserId',
      refBizEntityIdList: 'RefBizEntityIdList',
      refTableCount: 'RefTableCount',
      status: 'Status',
      subType: 'SubType',
      suffixBizEntityIdList: 'SuffixBizEntityIdList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      belongToBizEntityIdList: { 'type': 'array', 'itemType': 'number' },
      bizUnitId: 'number',
      childBizEntityIdList: { 'type': 'array', 'itemType': 'number' },
      dataDomainId: 'number',
      description: 'string',
      displayName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      hasChildBizEntity: 'boolean',
      id: 'number',
      lastModifier: 'string',
      lastModifierName: 'string',
      levelSubBizObject: 'boolean',
      name: 'string',
      onlineStatus: 'string',
      ownerName: 'string',
      ownerUserId: 'string',
      refBizEntityIdList: { 'type': 'array', 'itemType': 'number' },
      refTableCount: 'number',
      status: 'string',
      subType: 'string',
      suffixBizEntityIdList: { 'type': 'array', 'itemType': 'number' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBizEntitiesResponseBodyPageResult extends $tea.Model {
  bizEntityList?: ListBizEntitiesResponseBodyPageResultBizEntityList[];
  /**
   * @example
   * 66
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bizEntityList: 'BizEntityList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizEntityList: { 'type': 'array', 'itemType': ListBizEntitiesResponseBodyPageResultBizEntityList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBizUnitsResponseBodyDataBizUnitListAccountList extends $tea.Model {
  /**
   * @example
   * 20001201
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBizUnitsResponseBodyDataBizUnitList extends $tea.Model {
  accountList?: ListBizUnitsResponseBodyDataBizUnitListAccountList[];
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 测试
   */
  displayName?: string;
  /**
   * @example
   * DEV
   */
  env?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * icon-e-commerce
   */
  icon?: string;
  /**
   * @example
   * 101001201
   */
  id?: number;
  /**
   * @example
   * 30010010
   */
  lastModifier?: string;
  /**
   * @example
   * 张三
   */
  lastModifierName?: string;
  /**
   * @example
   * DEV_PROD
   */
  mode?: string;
  /**
   * @example
   * test01
   */
  name?: string;
  /**
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @example
   * 30010010
   */
  ownerUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accountList: 'AccountList',
      description: 'Description',
      displayName: 'DisplayName',
      env: 'Env',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      icon: 'Icon',
      id: 'Id',
      lastModifier: 'LastModifier',
      lastModifierName: 'LastModifierName',
      mode: 'Mode',
      name: 'Name',
      ownerName: 'OwnerName',
      ownerUserId: 'OwnerUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountList: { 'type': 'array', 'itemType': ListBizUnitsResponseBodyDataBizUnitListAccountList },
      description: 'string',
      displayName: 'string',
      env: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      icon: 'string',
      id: 'number',
      lastModifier: 'string',
      lastModifierName: 'string',
      mode: 'string',
      name: 'string',
      ownerName: 'string',
      ownerUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBizUnitsResponseBodyData extends $tea.Model {
  bizUnitList?: ListBizUnitsResponseBodyDataBizUnitList[];
  static names(): { [key: string]: string } {
    return {
      bizUnitList: 'BizUnitList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitList: { 'type': 'array', 'itemType': ListBizUnitsResponseBodyDataBizUnitList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataDomainsRequestListQuery extends $tea.Model {
  bizUnitIdList?: number[];
  /**
   * @example
   * test
   */
  keyword?: string;
  parentIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      bizUnitIdList: 'BizUnitIdList',
      keyword: 'Keyword',
      parentIdList: 'ParentIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitIdList: { 'type': 'array', 'itemType': 'number' },
      keyword: 'string',
      parentIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataDomainsResponseBodyDataDataDomainList extends $tea.Model {
  /**
   * @example
   * dm_code_name
   */
  abbreviation?: string;
  /**
   * @example
   * 545844456
   */
  bizUnitId?: number;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 测试
   */
  displayName?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * 1241844456
   */
  id?: number;
  /**
   * @example
   * 30010010
   */
  lastModifier?: string;
  /**
   * @example
   * 张三
   */
  lastModifierName?: string;
  /**
   * @example
   * dm_code_name
   */
  name?: string;
  /**
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @example
   * 30010010
   */
  ownerUserId?: string;
  /**
   * @example
   * 10232311
   */
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      abbreviation: 'Abbreviation',
      bizUnitId: 'BizUnitId',
      description: 'Description',
      displayName: 'DisplayName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      lastModifier: 'LastModifier',
      lastModifierName: 'LastModifierName',
      name: 'Name',
      ownerName: 'OwnerName',
      ownerUserId: 'OwnerUserId',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abbreviation: 'string',
      bizUnitId: 'number',
      description: 'string',
      displayName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      lastModifier: 'string',
      lastModifierName: 'string',
      name: 'string',
      ownerName: 'string',
      ownerUserId: 'string',
      parentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataDomainsResponseBodyData extends $tea.Model {
  dataDomainList?: ListDataDomainsResponseBodyDataDataDomainList[];
  static names(): { [key: string]: string } {
    return {
      dataDomainList: 'DataDomainList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDomainList: { 'type': 'array', 'itemType': ListDataDomainsResponseBodyDataDataDomainList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceWithConfigRequestListQuery extends $tea.Model {
  /**
   * @example
   * vcns-test
   */
  name?: string;
  ownerList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  scopeList?: string[];
  tag?: string;
  typeList?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ownerList: 'OwnerList',
      page: 'Page',
      pageSize: 'PageSize',
      scopeList: 'ScopeList',
      tag: 'Tag',
      typeList: 'TypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ownerList: { 'type': 'array', 'itemType': 'string' },
      page: 'number',
      pageSize: 'number',
      scopeList: { 'type': 'array', 'itemType': 'string' },
      tag: 'string',
      typeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceWithConfigResponseBodyPageResultDataSourceListDevDataSourceInfoConfigItemList extends $tea.Model {
  /**
   * @example
   * param1
   */
  key?: string;
  /**
   * @example
   * value1
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

export class ListDataSourceWithConfigResponseBodyPageResultDataSourceListDevDataSourceInfo extends $tea.Model {
  configItemList?: ListDataSourceWithConfigResponseBodyPageResultDataSourceListDevDataSourceInfoConfigItemList[];
  /**
   * @example
   * 1710209552704
   */
  createTime?: number;
  /**
   * @example
   * 212211111
   */
  creator?: string;
  creatorName?: string;
  description?: string;
  /**
   * @example
   * DEV
   */
  env?: string;
  /**
   * @example
   * 12313123131
   */
  id?: number;
  /**
   * @example
   * 1710209552704
   */
  modifyTime?: number;
  name?: string;
  /**
   * @example
   * 212211111
   */
  owner?: string;
  ownerName?: string;
  /**
   * @example
   * ALL
   */
  scope?: string;
  /**
   * @example
   * MAX_COMPUTE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configItemList: 'ConfigItemList',
      createTime: 'CreateTime',
      creator: 'Creator',
      creatorName: 'CreatorName',
      description: 'Description',
      env: 'Env',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      ownerName: 'OwnerName',
      scope: 'Scope',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configItemList: { 'type': 'array', 'itemType': ListDataSourceWithConfigResponseBodyPageResultDataSourceListDevDataSourceInfoConfigItemList },
      createTime: 'number',
      creator: 'string',
      creatorName: 'string',
      description: 'string',
      env: 'string',
      id: 'number',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      ownerName: 'string',
      scope: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceWithConfigResponseBodyPageResultDataSourceListProdDataSourceInfoConfigItemList extends $tea.Model {
  /**
   * @example
   * param1
   */
  key?: string;
  /**
   * @example
   * value1
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

export class ListDataSourceWithConfigResponseBodyPageResultDataSourceListProdDataSourceInfo extends $tea.Model {
  configItemList?: ListDataSourceWithConfigResponseBodyPageResultDataSourceListProdDataSourceInfoConfigItemList[];
  /**
   * @example
   * 1708303959000
   */
  createTime?: number;
  /**
   * @example
   * 212211111
   */
  creator?: string;
  creatorName?: string;
  description?: string;
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @example
   * 300000028799
   */
  id?: number;
  /**
   * @example
   * 1708303959000
   */
  modifyTime?: number;
  name?: string;
  /**
   * @example
   * 212211111
   */
  owner?: string;
  ownerName?: string;
  /**
   * @example
   * ALL
   */
  scope?: string;
  /**
   * @example
   * MAX_COMPUTE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configItemList: 'ConfigItemList',
      createTime: 'CreateTime',
      creator: 'Creator',
      creatorName: 'CreatorName',
      description: 'Description',
      env: 'Env',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      ownerName: 'OwnerName',
      scope: 'Scope',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configItemList: { 'type': 'array', 'itemType': ListDataSourceWithConfigResponseBodyPageResultDataSourceListProdDataSourceInfoConfigItemList },
      createTime: 'number',
      creator: 'string',
      creatorName: 'string',
      description: 'string',
      env: 'string',
      id: 'number',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      ownerName: 'string',
      scope: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceWithConfigResponseBodyPageResultDataSourceList extends $tea.Model {
  /**
   * @remarks
   * 开发环境数据源信息
   */
  devDataSourceInfo?: ListDataSourceWithConfigResponseBodyPageResultDataSourceListDevDataSourceInfo;
  /**
   * @remarks
   * 生产环境数据源
   */
  prodDataSourceInfo?: ListDataSourceWithConfigResponseBodyPageResultDataSourceListProdDataSourceInfo;
  static names(): { [key: string]: string } {
    return {
      devDataSourceInfo: 'DevDataSourceInfo',
      prodDataSourceInfo: 'ProdDataSourceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devDataSourceInfo: ListDataSourceWithConfigResponseBodyPageResultDataSourceListDevDataSourceInfo,
      prodDataSourceInfo: ListDataSourceWithConfigResponseBodyPageResultDataSourceListProdDataSourceInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceWithConfigResponseBodyPageResult extends $tea.Model {
  dataSourceList?: ListDataSourceWithConfigResponseBodyPageResultDataSourceList[];
  /**
   * @example
   * 39
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceList: 'DataSourceList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceList: { 'type': 'array', 'itemType': ListDataSourceWithConfigResponseBodyPageResultDataSourceList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesRequestListQuery extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tempCode
   */
  category?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /xx/x
   */
  directory?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11112311
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  recursive?: boolean;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      directory: 'Directory',
      env: 'Env',
      projectId: 'ProjectId',
      recursive: 'Recursive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      directory: 'string',
      env: 'string',
      projectId: 'number',
      recursive: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFilesResponseBodyFileList extends $tea.Model {
  /**
   * @example
   * tempCode
   */
  category?: string;
  /**
   * @example
   * select 1;
   */
  content?: string;
  /**
   * @example
   * 1212111
   */
  creator?: string;
  /**
   * @example
   * /xx/x
   */
  directory?: string;
  /**
   * @example
   * directory
   */
  fileType?: string;
  /**
   * @example
   * 1717483193830
   */
  gmtCreate?: number;
  /**
   * @example
   * 1717483193830
   */
  gmtModified?: number;
  /**
   * @example
   * 111231112
   */
  id?: number;
  /**
   * @example
   * 1212111
   */
  lastModifier?: string;
  /**
   * @example
   * xx测试
   */
  name?: string;
  /**
   * @example
   * 312112121
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      creator: 'Creator',
      directory: 'Directory',
      fileType: 'FileType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      lastModifier: 'LastModifier',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      content: 'string',
      creator: 'string',
      directory: 'string',
      fileType: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      lastModifier: 'string',
      name: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequestListQuery extends $tea.Model {
  /**
   * @example
   * SCRIPT
   */
  bizType?: string;
  bizUnitId?: number;
  /**
   * @example
   * 2024-05-31
   */
  maxBizDate?: string;
  /**
   * @example
   * 2024-05-31
   */
  maxRunDate?: string;
  /**
   * @example
   * 2024-05-30
   */
  minBizDate?: string;
  /**
   * @example
   * 2024-05-30
   */
  minRunDate?: string;
  /**
   * @example
   * n_23131
   */
  nodeId?: string;
  ownerList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  priorityList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 131311111321
   */
  projectId?: number;
  runStatusList?: string[];
  schedulePaused?: boolean;
  schedulePeriodList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NORMAL
   */
  scheduleType?: string;
  /**
   * @example
   * xx
   */
  searchText?: string;
  subBizTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      bizUnitId: 'BizUnitId',
      maxBizDate: 'MaxBizDate',
      maxRunDate: 'MaxRunDate',
      minBizDate: 'MinBizDate',
      minRunDate: 'MinRunDate',
      nodeId: 'NodeId',
      ownerList: 'OwnerList',
      page: 'Page',
      pageSize: 'PageSize',
      priorityList: 'PriorityList',
      projectId: 'ProjectId',
      runStatusList: 'RunStatusList',
      schedulePaused: 'SchedulePaused',
      schedulePeriodList: 'SchedulePeriodList',
      scheduleType: 'ScheduleType',
      searchText: 'SearchText',
      subBizTypeList: 'SubBizTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      bizUnitId: 'number',
      maxBizDate: 'string',
      maxRunDate: 'string',
      minBizDate: 'string',
      minRunDate: 'string',
      nodeId: 'string',
      ownerList: { 'type': 'array', 'itemType': 'string' },
      page: 'number',
      pageSize: 'number',
      priorityList: { 'type': 'array', 'itemType': 'string' },
      projectId: 'number',
      runStatusList: { 'type': 'array', 'itemType': 'string' },
      schedulePaused: 'boolean',
      schedulePeriodList: { 'type': 'array', 'itemType': 'string' },
      scheduleType: 'string',
      searchText: 'string',
      subBizTypeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyPageResultDataNodeInfoCreator extends $tea.Model {
  /**
   * @example
   * 21313112
   */
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyPageResultDataNodeInfoModifier extends $tea.Model {
  /**
   * @example
   * 21313112
   */
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyPageResultDataNodeInfoOwnerList extends $tea.Model {
  /**
   * @example
   * 21313112
   */
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyPageResultDataNodeInfo extends $tea.Model {
  bizUnitName?: string;
  /**
   * @example
   * 2024-05-30 16:47:13
   */
  createTime?: string;
  creator?: ListInstancesResponseBodyPageResultDataNodeInfoCreator;
  description?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @example
   * DATA_PROCES
   */
  from?: string;
  /**
   * @example
   * false
   */
  hasDev?: boolean;
  /**
   * @example
   * true
   */
  hasProd?: boolean;
  /**
   * @example
   * n_132331
   */
  id?: string;
  /**
   * @example
   * 2024-05-30 16:47:13
   */
  lastModifiedTime?: string;
  modifier?: ListInstancesResponseBodyPageResultDataNodeInfoModifier;
  name?: string;
  ownerList?: ListInstancesResponseBodyPageResultDataNodeInfoOwnerList[];
  priorityList?: string[];
  resourceGroupList?: string[];
  /**
   * @example
   * false
   */
  schedulePaused?: boolean;
  schedulePeriodList?: string[];
  /**
   * @example
   * SHELL
   */
  subDetailType?: string;
  /**
   * @example
   * DATA_PROCES
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizUnitName: 'BizUnitName',
      createTime: 'CreateTime',
      creator: 'Creator',
      description: 'Description',
      dryRun: 'DryRun',
      from: 'From',
      hasDev: 'HasDev',
      hasProd: 'HasProd',
      id: 'Id',
      lastModifiedTime: 'LastModifiedTime',
      modifier: 'Modifier',
      name: 'Name',
      ownerList: 'OwnerList',
      priorityList: 'PriorityList',
      resourceGroupList: 'ResourceGroupList',
      schedulePaused: 'SchedulePaused',
      schedulePeriodList: 'SchedulePeriodList',
      subDetailType: 'SubDetailType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitName: 'string',
      createTime: 'string',
      creator: ListInstancesResponseBodyPageResultDataNodeInfoCreator,
      description: 'string',
      dryRun: 'boolean',
      from: 'string',
      hasDev: 'boolean',
      hasProd: 'boolean',
      id: 'string',
      lastModifiedTime: 'string',
      modifier: ListInstancesResponseBodyPageResultDataNodeInfoModifier,
      name: 'string',
      ownerList: { 'type': 'array', 'itemType': ListInstancesResponseBodyPageResultDataNodeInfoOwnerList },
      priorityList: { 'type': 'array', 'itemType': 'string' },
      resourceGroupList: { 'type': 'array', 'itemType': 'string' },
      schedulePaused: 'boolean',
      schedulePeriodList: { 'type': 'array', 'itemType': 'string' },
      subDetailType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyPageResultData extends $tea.Model {
  /**
   * @example
   * 2024-05-30
   */
  bizDate?: string;
  /**
   * @example
   * 2024-05-30 16:47:13
   */
  dueTime?: string;
  /**
   * @example
   * 60s
   */
  duration?: string;
  /**
   * @example
   * 2024-05-30 16:47:13
   */
  endExecuteTime?: number;
  /**
   * @example
   * xx
   */
  extendInfo?: string;
  /**
   * @example
   * t_23231
   */
  id?: string;
  /**
   * @example
   * 1
   */
  index?: number;
  nodeInfo?: ListInstancesResponseBodyPageResultDataNodeInfo;
  /**
   * @example
   * 2024-05-30 16:46:13
   */
  startExecuteTime?: number;
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      dueTime: 'DueTime',
      duration: 'Duration',
      endExecuteTime: 'EndExecuteTime',
      extendInfo: 'ExtendInfo',
      id: 'Id',
      index: 'Index',
      nodeInfo: 'NodeInfo',
      startExecuteTime: 'StartExecuteTime',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      dueTime: 'string',
      duration: 'string',
      endExecuteTime: 'number',
      extendInfo: 'string',
      id: 'string',
      index: 'number',
      nodeInfo: ListInstancesResponseBodyPageResultDataNodeInfo,
      startExecuteTime: 'number',
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyPageResult extends $tea.Model {
  data?: ListInstancesResponseBodyPageResultData[];
  /**
   * @example
   * 107
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListInstancesResponseBodyPageResultData },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDownStreamRequestListQueryFilterList extends $tea.Model {
  /**
   * @example
   * false
   */
  exclude?: boolean;
  /**
   * @example
   * PROJECT
   */
  key?: string;
  valueList?: string[];
  static names(): { [key: string]: string } {
    return {
      exclude: 'Exclude',
      key: 'Key',
      valueList: 'ValueList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exclude: 'boolean',
      key: 'string',
      valueList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDownStreamRequestListQueryNodeIdList extends $tea.Model {
  /**
   * @example
   * 112
   */
  fieldIdList?: string[];
  /**
   * @example
   * n_23431
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      fieldIdList: 'FieldIdList',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldIdList: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDownStreamRequestListQuery extends $tea.Model {
  /**
   * @example
   * 1
   */
  downStreamDepth?: number;
  filterList?: ListNodeDownStreamRequestListQueryFilterList[];
  /**
   * @remarks
   * This parameter is required.
   */
  nodeIdList?: ListNodeDownStreamRequestListQueryNodeIdList[];
  /**
   * @example
   * 123011
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      downStreamDepth: 'DownStreamDepth',
      filterList: 'FilterList',
      nodeIdList: 'NodeIdList',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downStreamDepth: 'number',
      filterList: { 'type': 'array', 'itemType': ListNodeDownStreamRequestListQueryFilterList },
      nodeIdList: { 'type': 'array', 'itemType': ListNodeDownStreamRequestListQueryNodeIdList },
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDownStreamResponseBodyNodeInfoList extends $tea.Model {
  /**
   * @example
   * 1
   */
  depth?: number;
  fieldIdList?: string[];
  /**
   * @example
   * n_2423351
   */
  id?: string;
  name?: string;
  /**
   * @example
   * DATA_PROCESS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      depth: 'Depth',
      fieldIdList: 'FieldIdList',
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depth: 'number',
      fieldIdList: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesRequestListQuery extends $tea.Model {
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SCRIPT
   */
  nodeBizType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  nodeSubBizTypeList?: string[];
  ownerList?: string[];
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  priorityList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12111
   */
  projectId?: number;
  /**
   * @example
   * true
   */
  schedulePaused?: boolean;
  schedulePeriodList?: string[];
  /**
   * @example
   * NORMAL
   */
  scheduleType?: string;
  /**
   * @example
   * xx
   */
  searchText?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      nodeBizType: 'NodeBizType',
      nodeSubBizTypeList: 'NodeSubBizTypeList',
      ownerList: 'OwnerList',
      page: 'Page',
      pageSize: 'PageSize',
      priorityList: 'PriorityList',
      projectId: 'ProjectId',
      schedulePaused: 'SchedulePaused',
      schedulePeriodList: 'SchedulePeriodList',
      scheduleType: 'ScheduleType',
      searchText: 'SearchText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      nodeBizType: 'string',
      nodeSubBizTypeList: { 'type': 'array', 'itemType': 'string' },
      ownerList: { 'type': 'array', 'itemType': 'string' },
      page: 'number',
      pageSize: 'number',
      priorityList: { 'type': 'array', 'itemType': 'string' },
      projectId: 'number',
      schedulePaused: 'boolean',
      schedulePeriodList: { 'type': 'array', 'itemType': 'string' },
      scheduleType: 'string',
      searchText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPageResultNodeListCreator extends $tea.Model {
  /**
   * @example
   * 23222
   */
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPageResultNodeListModifier extends $tea.Model {
  /**
   * @example
   * 311131
   */
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPageResultNodeListOwnerList extends $tea.Model {
  /**
   * @example
   * 23222
   */
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPageResultNodeListProjectInfo extends $tea.Model {
  /**
   * @example
   * 1121321
   */
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPageResultNodeList extends $tea.Model {
  bizUnitName?: string;
  /**
   * @example
   * 2024-05-30 16:47:13
   */
  createTime?: string;
  creator?: ListNodesResponseBodyPageResultNodeListCreator;
  /**
   * @example
   * xx test
   */
  description?: string;
  /**
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @example
   * {"xx":"zz"}
   */
  extendInfo?: string;
  /**
   * @example
   * DATA_PROCESS
   */
  from?: string;
  /**
   * @example
   * true
   */
  hasDev?: boolean;
  /**
   * @example
   * true
   */
  hasProd?: boolean;
  /**
   * @example
   * n_31111
   */
  id?: string;
  /**
   * @example
   * 2024-05-30 16:47:13
   */
  lastModifiedTime?: string;
  modifier?: ListNodesResponseBodyPageResultNodeListModifier;
  name?: string;
  ownerList?: ListNodesResponseBodyPageResultNodeListOwnerList[];
  priorityList?: string[];
  projectInfo?: ListNodesResponseBodyPageResultNodeListProjectInfo;
  /**
   * @example
   * true
   */
  schedulePaused?: boolean;
  schedulePeriodList?: string[];
  /**
   * @example
   * SHELL
   */
  subDetailType?: string;
  /**
   * @example
   * DATA_PROCESS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizUnitName: 'BizUnitName',
      createTime: 'CreateTime',
      creator: 'Creator',
      description: 'Description',
      dryRun: 'DryRun',
      extendInfo: 'ExtendInfo',
      from: 'From',
      hasDev: 'HasDev',
      hasProd: 'HasProd',
      id: 'Id',
      lastModifiedTime: 'LastModifiedTime',
      modifier: 'Modifier',
      name: 'Name',
      ownerList: 'OwnerList',
      priorityList: 'PriorityList',
      projectInfo: 'ProjectInfo',
      schedulePaused: 'SchedulePaused',
      schedulePeriodList: 'SchedulePeriodList',
      subDetailType: 'SubDetailType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitName: 'string',
      createTime: 'string',
      creator: ListNodesResponseBodyPageResultNodeListCreator,
      description: 'string',
      dryRun: 'boolean',
      extendInfo: 'string',
      from: 'string',
      hasDev: 'boolean',
      hasProd: 'boolean',
      id: 'string',
      lastModifiedTime: 'string',
      modifier: ListNodesResponseBodyPageResultNodeListModifier,
      name: 'string',
      ownerList: { 'type': 'array', 'itemType': ListNodesResponseBodyPageResultNodeListOwnerList },
      priorityList: { 'type': 'array', 'itemType': 'string' },
      projectInfo: ListNodesResponseBodyPageResultNodeListProjectInfo,
      schedulePaused: 'boolean',
      schedulePeriodList: { 'type': 'array', 'itemType': 'string' },
      subDetailType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPageResult extends $tea.Model {
  nodeList?: ListNodesResponseBodyPageResultNodeList[];
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nodeList: 'NodeList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeList: { 'type': 'array', 'itemType': ListNodesResponseBodyPageResultNodeList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishRecordsRequestListQuerySearchFilter extends $tea.Model {
  changeTypeList?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  projectIdList?: number[];
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  publishEndTime?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  publishStartTime?: string;
  publishStatusList?: number[];
  submitterList?: string[];
  static names(): { [key: string]: string } {
    return {
      changeTypeList: 'ChangeTypeList',
      page: 'Page',
      pageSize: 'PageSize',
      projectIdList: 'ProjectIdList',
      publishEndTime: 'PublishEndTime',
      publishStartTime: 'PublishStartTime',
      publishStatusList: 'PublishStatusList',
      submitterList: 'SubmitterList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeTypeList: { 'type': 'array', 'itemType': 'number' },
      page: 'number',
      pageSize: 'number',
      projectIdList: { 'type': 'array', 'itemType': 'number' },
      publishEndTime: 'string',
      publishStartTime: 'string',
      publishStatusList: { 'type': 'array', 'itemType': 'number' },
      submitterList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishRecordsRequestListQuery extends $tea.Model {
  /**
   * @example
   * abc
   */
  keyword?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  searchFilter?: ListPublishRecordsRequestListQuerySearchFilter;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      searchFilter: 'SearchFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      searchFilter: ListPublishRecordsRequestListQuerySearchFilter,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishRecordsResponseBodyListResultData extends $tea.Model {
  /**
   * @example
   * 0
   */
  changeType?: number;
  /**
   * @example
   * error
   */
  errorMessage?: string;
  /**
   * @example
   * 2024-10-10 10:10:10
   */
  finishTime?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  gmtModify?: string;
  /**
   * @example
   * 1241844456
   */
  id?: number;
  /**
   * @example
   * n_123456
   */
  nodeId?: string;
  /**
   * @example
   * 1234567
   */
  objectId?: string;
  /**
   * @example
   * 对象A
   */
  objectName?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  objectType?: string;
  /**
   * @example
   * 1
   */
  objectVersion?: string;
  /**
   * @example
   * 1241844456
   */
  projectId?: string;
  /**
   * @example
   * test_lc__20241118171502
   */
  publishName?: string;
  /**
   * @example
   * 1
   */
  publishStatus?: number;
  /**
   * @example
   * 307999999
   */
  publisher?: string;
  /**
   * @example
   * 张三
   */
  publisherName?: string;
  static names(): { [key: string]: string } {
    return {
      changeType: 'ChangeType',
      errorMessage: 'ErrorMessage',
      finishTime: 'FinishTime',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      id: 'Id',
      nodeId: 'NodeId',
      objectId: 'ObjectId',
      objectName: 'ObjectName',
      objectType: 'ObjectType',
      objectVersion: 'ObjectVersion',
      projectId: 'ProjectId',
      publishName: 'PublishName',
      publishStatus: 'PublishStatus',
      publisher: 'Publisher',
      publisherName: 'PublisherName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeType: 'number',
      errorMessage: 'string',
      finishTime: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      id: 'number',
      nodeId: 'string',
      objectId: 'string',
      objectName: 'string',
      objectType: 'string',
      objectVersion: 'string',
      projectId: 'string',
      publishName: 'string',
      publishStatus: 'number',
      publisher: 'string',
      publisherName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishRecordsResponseBodyListResult extends $tea.Model {
  data?: ListPublishRecordsResponseBodyListResultData[];
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListPublishRecordsResponseBodyListResultData },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionOperationLogRequestListQuery extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * xx测试
   */
  searchText?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TABLE
   */
  tabType?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
      searchText: 'SearchText',
      tabType: 'TabType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      searchText: 'string',
      tabType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionOperationLogResponseBodyPageResultDataAccount extends $tea.Model {
  /**
   * @example
   * 1212131
   */
  id?: string;
  /**
   * @example
   * xx
   */
  name?: string;
  /**
   * @example
   * PERSONAL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionOperationLogResponseBodyPageResultDataPeriod extends $tea.Model {
  /**
   * @example
   * 1712000000000
   */
  endTime?: string;
  /**
   * @example
   * CUSTOM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionOperationLogResponseBodyPageResultDataResourceInfoBizUnitInfo extends $tea.Model {
  /**
   * @example
   * xx
   */
  displayName?: string;
  /**
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * Id
   * 
   * @example
   * 121323
   */
  id?: string;
  /**
   * @example
   * xx
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      env: 'Env',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      env: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionOperationLogResponseBodyPageResultDataResourceInfoProjectInfo extends $tea.Model {
  /**
   * @example
   * xx
   */
  displayName?: string;
  /**
   * @example
   * DEV
   */
  env?: string;
  /**
   * @example
   * 1123131
   */
  id?: number;
  /**
   * @example
   * xx
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      env: 'Env',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      env: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionOperationLogResponseBodyPageResultDataResourceInfo extends $tea.Model {
  bizUnitInfo?: ListResourcePermissionOperationLogResponseBodyPageResultDataResourceInfoBizUnitInfo;
  /**
   * @example
   * tb1
   */
  displayName?: string;
  /**
   * @example
   * DEV
   */
  env?: string;
  /**
   * @example
   * a.tb1
   */
  id?: string;
  /**
   * @example
   * tb1
   */
  name?: string;
  projectInfo?: ListResourcePermissionOperationLogResponseBodyPageResultDataResourceInfoProjectInfo;
  /**
   * @example
   * PHYSICAL_TABLE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizUnitInfo: 'BizUnitInfo',
      displayName: 'DisplayName',
      env: 'Env',
      id: 'Id',
      name: 'Name',
      projectInfo: 'ProjectInfo',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitInfo: ListResourcePermissionOperationLogResponseBodyPageResultDataResourceInfoBizUnitInfo,
      displayName: 'string',
      env: 'string',
      id: 'string',
      name: 'string',
      projectInfo: ListResourcePermissionOperationLogResponseBodyPageResultDataResourceInfoProjectInfo,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionOperationLogResponseBodyPageResultDataTargetAccount extends $tea.Model {
  /**
   * @example
   * 1212131
   */
  id?: string;
  /**
   * @example
   * xx
   */
  name?: string;
  /**
   * @example
   * PERSONAL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionOperationLogResponseBodyPageResultData extends $tea.Model {
  account?: ListResourcePermissionOperationLogResponseBodyPageResultDataAccount;
  /**
   * @example
   * selectTable
   */
  authScope?: string;
  /**
   * @example
   * 123133
   */
  operateId?: number;
  /**
   * @example
   * 1710012121000
   */
  operateTime?: number;
  /**
   * @example
   * APPLY
   */
  operateType?: string;
  period?: ListResourcePermissionOperationLogResponseBodyPageResultDataPeriod;
  /**
   * @example
   * xx测试
   */
  reason?: string;
  resourceInfo?: ListResourcePermissionOperationLogResponseBodyPageResultDataResourceInfo;
  targetAccount?: ListResourcePermissionOperationLogResponseBodyPageResultDataTargetAccount;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      authScope: 'AuthScope',
      operateId: 'OperateId',
      operateTime: 'OperateTime',
      operateType: 'OperateType',
      period: 'Period',
      reason: 'Reason',
      resourceInfo: 'ResourceInfo',
      targetAccount: 'TargetAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: ListResourcePermissionOperationLogResponseBodyPageResultDataAccount,
      authScope: 'string',
      operateId: 'number',
      operateTime: 'number',
      operateType: 'string',
      period: ListResourcePermissionOperationLogResponseBodyPageResultDataPeriod,
      reason: 'string',
      resourceInfo: ListResourcePermissionOperationLogResponseBodyPageResultDataResourceInfo,
      targetAccount: ListResourcePermissionOperationLogResponseBodyPageResultDataTargetAccount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionOperationLogResponseBodyPageResult extends $tea.Model {
  data?: ListResourcePermissionOperationLogResponseBodyPageResultData[];
  /**
   * @example
   * 121
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListResourcePermissionOperationLogResponseBodyPageResultData },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionsRequestListQuery extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * xx测试
   */
  searchText?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TABLE
   */
  tabType?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
      searchText: 'SearchText',
      tabType: 'TabType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      searchText: 'string',
      tabType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionsResponseBodyPageResultDataPeriod extends $tea.Model {
  /**
   * @example
   * 1712000000000
   */
  endTime?: string;
  /**
   * @example
   * CUSTOM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionsResponseBodyPageResultDataPermissionPeriodListPeriod extends $tea.Model {
  /**
   * @example
   * 1712000000000
   */
  endTime?: string;
  /**
   * @example
   * CUSTOM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionsResponseBodyPageResultDataPermissionPeriodList extends $tea.Model {
  period?: ListResourcePermissionsResponseBodyPageResultDataPermissionPeriodListPeriod;
  /**
   * @example
   * SELECT
   */
  permissionType?: string;
  static names(): { [key: string]: string } {
    return {
      period: 'Period',
      permissionType: 'PermissionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      period: ListResourcePermissionsResponseBodyPageResultDataPermissionPeriodListPeriod,
      permissionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionsResponseBodyPageResultDataResourceInfoBizUnitInfo extends $tea.Model {
  /**
   * @example
   * xx
   */
  displayName?: string;
  /**
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * Id
   * 
   * @example
   * 121323
   */
  id?: string;
  /**
   * @example
   * xx
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      env: 'Env',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      env: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionsResponseBodyPageResultDataResourceInfoProjectInfo extends $tea.Model {
  /**
   * @example
   * xx
   */
  displayName?: string;
  /**
   * @example
   * DEV
   */
  env?: string;
  /**
   * @example
   * 1123131
   */
  id?: number;
  /**
   * @example
   * xx
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      env: 'Env',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      env: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionsResponseBodyPageResultDataResourceInfo extends $tea.Model {
  bizUnitInfo?: ListResourcePermissionsResponseBodyPageResultDataResourceInfoBizUnitInfo;
  /**
   * @example
   * tb1
   */
  displayName?: string;
  /**
   * @example
   * DEV
   */
  env?: string;
  /**
   * @example
   * a.tb1
   */
  id?: string;
  /**
   * @example
   * tb1
   */
  name?: string;
  projectInfo?: ListResourcePermissionsResponseBodyPageResultDataResourceInfoProjectInfo;
  /**
   * @example
   * PHYSICAL_TABLE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizUnitInfo: 'BizUnitInfo',
      displayName: 'DisplayName',
      env: 'Env',
      id: 'Id',
      name: 'Name',
      projectInfo: 'ProjectInfo',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitInfo: ListResourcePermissionsResponseBodyPageResultDataResourceInfoBizUnitInfo,
      displayName: 'string',
      env: 'string',
      id: 'string',
      name: 'string',
      projectInfo: ListResourcePermissionsResponseBodyPageResultDataResourceInfoProjectInfo,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionsResponseBodyPageResultDataTargetAccount extends $tea.Model {
  /**
   * @example
   * 1212131
   */
  id?: string;
  /**
   * @example
   * xx
   */
  name?: string;
  /**
   * @example
   * PERSONAL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionsResponseBodyPageResultData extends $tea.Model {
  /**
   * @example
   * selectTable
   */
  authScope?: string;
  period?: ListResourcePermissionsResponseBodyPageResultDataPeriod;
  permissionPeriodList?: ListResourcePermissionsResponseBodyPageResultDataPermissionPeriodList[];
  /**
   * @example
   * 12123111
   */
  recordId?: string;
  resourceInfo?: ListResourcePermissionsResponseBodyPageResultDataResourceInfo;
  targetAccount?: ListResourcePermissionsResponseBodyPageResultDataTargetAccount;
  static names(): { [key: string]: string } {
    return {
      authScope: 'AuthScope',
      period: 'Period',
      permissionPeriodList: 'PermissionPeriodList',
      recordId: 'RecordId',
      resourceInfo: 'ResourceInfo',
      targetAccount: 'TargetAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authScope: 'string',
      period: ListResourcePermissionsResponseBodyPageResultDataPeriod,
      permissionPeriodList: { 'type': 'array', 'itemType': ListResourcePermissionsResponseBodyPageResultDataPermissionPeriodList },
      recordId: 'string',
      resourceInfo: ListResourcePermissionsResponseBodyPageResultDataResourceInfo,
      targetAccount: ListResourcePermissionsResponseBodyPageResultDataTargetAccount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePermissionsResponseBodyPageResult extends $tea.Model {
  data?: ListResourcePermissionsResponseBodyPageResultData[];
  /**
   * @example
   * 121
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListResourcePermissionsResponseBodyPageResultData },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubmitRecordsRequestListQuerySearchFilter extends $tea.Model {
  changeTypeList?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  projectIdList?: number[];
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  submitEndTime?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  submitStartTime?: string;
  submitterList?: string[];
  static names(): { [key: string]: string } {
    return {
      changeTypeList: 'ChangeTypeList',
      page: 'Page',
      pageSize: 'PageSize',
      projectIdList: 'ProjectIdList',
      submitEndTime: 'SubmitEndTime',
      submitStartTime: 'SubmitStartTime',
      submitterList: 'SubmitterList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeTypeList: { 'type': 'array', 'itemType': 'number' },
      page: 'number',
      pageSize: 'number',
      projectIdList: { 'type': 'array', 'itemType': 'number' },
      submitEndTime: 'string',
      submitStartTime: 'string',
      submitterList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubmitRecordsRequestListQuery extends $tea.Model {
  /**
   * @example
   * abc
   */
  keyword?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  searchFilter?: ListSubmitRecordsRequestListQuerySearchFilter;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      searchFilter: 'SearchFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      searchFilter: ListSubmitRecordsRequestListQuerySearchFilter,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubmitRecordsResponseBodyListResultData extends $tea.Model {
  /**
   * @example
   * 0
   */
  changeType?: number;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  gmtModify?: string;
  /**
   * @example
   * 1241844456
   */
  id?: number;
  /**
   * @example
   * n_123456
   */
  nodeId?: string;
  /**
   * @example
   * 1234567
   */
  objectId?: string;
  /**
   * @example
   * 对象A
   */
  objectName?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  objectType?: string;
  /**
   * @example
   * 1
   */
  objectVersion?: string;
  /**
   * @example
   * 1241844456
   */
  projectId?: string;
  /**
   * @example
   * 提交信息
   */
  submitComment?: string;
  /**
   * @example
   * 307999999
   */
  submitter?: string;
  /**
   * @example
   * 张三
   */
  submitterName?: string;
  static names(): { [key: string]: string } {
    return {
      changeType: 'ChangeType',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      id: 'Id',
      nodeId: 'NodeId',
      objectId: 'ObjectId',
      objectName: 'ObjectName',
      objectType: 'ObjectType',
      objectVersion: 'ObjectVersion',
      projectId: 'ProjectId',
      submitComment: 'SubmitComment',
      submitter: 'Submitter',
      submitterName: 'SubmitterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeType: 'number',
      gmtCreate: 'string',
      gmtModify: 'string',
      id: 'number',
      nodeId: 'string',
      objectId: 'string',
      objectName: 'string',
      objectType: 'string',
      objectVersion: 'string',
      projectId: 'string',
      submitComment: 'string',
      submitter: 'string',
      submitterName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubmitRecordsResponseBodyListResult extends $tea.Model {
  data?: ListSubmitRecordsResponseBodyListResultData[];
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListSubmitRecordsResponseBodyListResultData },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantMembersRequestListQuery extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  roleList?: string[];
  searchText?: string;
  userGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
      roleList: 'RoleList',
      searchText: 'SearchText',
      userGroupIdList: 'UserGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      roleList: { 'type': 'array', 'itemType': 'string' },
      searchText: 'string',
      userGroupIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantMembersResponseBodyPageResultUserListUserGroupList extends $tea.Model {
  /**
   * @example
   * true
   */
  active?: boolean;
  description?: string;
  /**
   * @example
   * 121313
   */
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      description: 'Description',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      description: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantMembersResponseBodyPageResultUserList extends $tea.Model {
  /**
   * @example
   * zhangsan
   */
  accountName?: string;
  /**
   * @example
   * dd123123
   */
  dingNumber?: string;
  /**
   * @example
   * zhangsan
   */
  displayName?: string;
  /**
   * @example
   * zhangsan
   */
  displayNameWithoutStatus?: string;
  /**
   * @example
   * true
   */
  enableWhiteIp?: string;
  /**
   * @example
   * 1730000000000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1730000000000
   */
  gmtModified?: number;
  /**
   * @example
   * 132321
   */
  id?: string;
  /**
   * @example
   * 123@aliyun.com
   */
  mail?: string;
  /**
   * @example
   * 13888888888
   */
  mobilePhone?: string;
  /**
   * @example
   * zhangsan
   */
  name?: string;
  /**
   * @example
   * susan
   */
  nickName?: string;
  realName?: string;
  roleList?: string[];
  /**
   * @example
   * 213213232422222
   */
  sourceId?: string;
  /**
   * @example
   * aliyun
   */
  sourceType?: string;
  userGroupList?: ListTenantMembersResponseBodyPageResultUserListUserGroupList[];
  /**
   * @example
   * 0.0.0.0/0
   */
  whiteIp?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dingNumber: 'DingNumber',
      displayName: 'DisplayName',
      displayNameWithoutStatus: 'DisplayNameWithoutStatus',
      enableWhiteIp: 'EnableWhiteIp',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      mail: 'Mail',
      mobilePhone: 'MobilePhone',
      name: 'Name',
      nickName: 'NickName',
      realName: 'RealName',
      roleList: 'RoleList',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      userGroupList: 'UserGroupList',
      whiteIp: 'WhiteIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      dingNumber: 'string',
      displayName: 'string',
      displayNameWithoutStatus: 'string',
      enableWhiteIp: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'string',
      mail: 'string',
      mobilePhone: 'string',
      name: 'string',
      nickName: 'string',
      realName: 'string',
      roleList: { 'type': 'array', 'itemType': 'string' },
      sourceId: 'string',
      sourceType: 'string',
      userGroupList: { 'type': 'array', 'itemType': ListTenantMembersResponseBodyPageResultUserListUserGroupList },
      whiteIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantMembersResponseBodyPageResult extends $tea.Model {
  /**
   * @example
   * 110
   */
  totalCount?: number;
  userList?: ListTenantMembersResponseBodyPageResultUserList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      userList: { 'type': 'array', 'itemType': ListTenantMembersResponseBodyPageResultUserList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupMembersRequestListQuery extends $tea.Model {
  /**
   * @example
   * a
   */
  keyword?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 232231
   */
  userGroupId?: string;
  userIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      userGroupId: 'UserGroupId',
      userIdList: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNo: 'number',
      pageSize: 'number',
      userGroupId: 'string',
      userIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupMembersResponseBodyPageResultMemberListCreator extends $tea.Model {
  /**
   * @example
   * 12121111
   */
  accountName?: string;
  /**
   * @example
   * zhangsan
   */
  displayName?: string;
  /**
   * @example
   * 12121111
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      displayName: 'DisplayName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      displayName: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupMembersResponseBodyPageResultMemberListUserInfo extends $tea.Model {
  /**
   * @example
   * atest
   */
  accountName?: string;
  displayName?: string;
  /**
   * @example
   * 13232
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      displayName: 'DisplayName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      displayName: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupMembersResponseBodyPageResultMemberList extends $tea.Model {
  creator?: ListUserGroupMembersResponseBodyPageResultMemberListCreator;
  /**
   * @example
   * zhangsan
   */
  gmtCreate?: number;
  /**
   * @example
   * 2324211
   */
  id?: string;
  /**
   * @example
   * 231111
   */
  userGroupId?: string;
  userInfo?: ListUserGroupMembersResponseBodyPageResultMemberListUserInfo;
  /**
   * @example
   * SECURITY_ADMIN
   */
  userRole?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      userGroupId: 'UserGroupId',
      userInfo: 'UserInfo',
      userRole: 'UserRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: ListUserGroupMembersResponseBodyPageResultMemberListCreator,
      gmtCreate: 'number',
      id: 'string',
      userGroupId: 'string',
      userInfo: ListUserGroupMembersResponseBodyPageResultMemberListUserInfo,
      userRole: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupMembersResponseBodyPageResult extends $tea.Model {
  memberList?: ListUserGroupMembersResponseBodyPageResultMemberList[];
  /**
   * @example
   * 217
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      memberList: 'MemberList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberList: { 'type': 'array', 'itemType': ListUserGroupMembersResponseBodyPageResultMemberList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsRequestListQuery extends $tea.Model {
  /**
   * @example
   * true
   */
  active?: boolean;
  adminIdList?: string[];
  /**
   * @example
   * false
   */
  filterMine?: boolean;
  keyword?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      adminIdList: 'AdminIdList',
      filterMine: 'FilterMine',
      keyword: 'Keyword',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      adminIdList: { 'type': 'array', 'itemType': 'string' },
      filterMine: 'boolean',
      keyword: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsResponseBodyPageResultUserGroupListAdminList extends $tea.Model {
  /**
   * @example
   * zhangsan
   */
  accountName?: string;
  displayName?: string;
  /**
   * @example
   * 32313131
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      displayName: 'DisplayName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      displayName: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsResponseBodyPageResultUserGroupList extends $tea.Model {
  /**
   * @example
   * true
   */
  active?: boolean;
  adminList?: ListUserGroupsResponseBodyPageResultUserGroupListAdminList[];
  description?: string;
  /**
   * @example
   * 31313232
   */
  id?: string;
  /**
   * @example
   * SECURITY_ADMIN
   */
  myRole?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      adminList: 'AdminList',
      description: 'Description',
      id: 'Id',
      myRole: 'MyRole',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      adminList: { 'type': 'array', 'itemType': ListUserGroupsResponseBodyPageResultUserGroupListAdminList },
      description: 'string',
      id: 'string',
      myRole: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsResponseBodyPageResult extends $tea.Model {
  /**
   * @example
   * 49
   */
  totalCount?: number;
  userGroupList?: ListUserGroupsResponseBodyPageResultUserGroupList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      userGroupList: 'UserGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      userGroupList: { 'type': 'array', 'itemType': ListUserGroupsResponseBodyPageResultUserGroupList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineBatchTaskResponseBodyOfflineResult extends $tea.Model {
  /**
   * @example
   * 10211123
   */
  publishObjectId?: number;
  static names(): { [key: string]: string } {
    return {
      publishObjectId: 'PublishObjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publishObjectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineBizEntityRequestOfflineCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6798087749072704
   */
  bizUnitId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 101001201
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BIZ_OBJECT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizUnitId: 'BizUnitId',
      comment: 'Comment',
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitId: 'number',
      comment: 'string',
      id: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnlineBizEntityRequestOnlineCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6798087749072704
   */
  bizUnitId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 101001201
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BIZ_OBJECT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizUnitId: 'BizUnitId',
      comment: 'Comment',
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitId: 'number',
      comment: 'string',
      id: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateInstanceRequestOperateCommandInstanceIdList extends $tea.Model {
  fieldInstanceIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * t_32111312
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      fieldInstanceIdList: 'FieldInstanceIdList',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateInstanceRequestOperateCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceIdList?: OperateInstanceRequestOperateCommandInstanceIdList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RERUN
   */
  operation?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 132311
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceIdList: 'InstanceIdList',
      operation: 'Operation',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdList: { 'type': 'array', 'itemType': OperateInstanceRequestOperateCommandInstanceIdList },
      operation: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateInstanceResponseBodyInstanceStatusList extends $tea.Model {
  displayName?: string;
  /**
   * @example
   * xx
   */
  errorMessage?: string;
  /**
   * @example
   * t_132435
   */
  id?: string;
  name?: string;
  /**
   * @example
   * 121311
   */
  ownerId?: string;
  ownerName?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      errorMessage: 'ErrorMessage',
      id: 'Id',
      name: 'Name',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      errorMessage: 'string',
      id: 'string',
      name: 'string',
      ownerId: 'string',
      ownerName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ParseBatchTaskDependencyRequestParseCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * select * from t_test limit 1;
   */
  code?: string;
  /**
   * @example
   * mysql_catalog
   */
  dataSourceCatalog?: string;
  /**
   * @example
   * 12131111
   */
  dataSourceId?: number;
  /**
   * @example
   * erp
   */
  dataSourceSchema?: string;
  includeAllInputTables?: boolean;
  needQueryLineages?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MaxCompute_SQL
   */
  operatorType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 131211211
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataSourceCatalog: 'DataSourceCatalog',
      dataSourceId: 'DataSourceId',
      dataSourceSchema: 'DataSourceSchema',
      includeAllInputTables: 'IncludeAllInputTables',
      needQueryLineages: 'NeedQueryLineages',
      operatorType: 'OperatorType',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataSourceCatalog: 'string',
      dataSourceId: 'number',
      dataSourceSchema: 'string',
      includeAllInputTables: 'boolean',
      needQueryLineages: 'boolean',
      operatorType: 'string',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ParseBatchTaskDependencyResponseBodyParseResultDependNodeListScheduleNodeInfoList extends $tea.Model {
  fieldList?: string[];
  /**
   * @example
   * n_11013121
   */
  nodeId?: string;
  /**
   * @example
   * test11
   */
  nodeName?: string;
  /**
   * @example
   * t_test
   */
  outputName?: string;
  /**
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @example
   * 201122301
   */
  ownerUserId?: string;
  /**
   * @example
   * t_test
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      fieldList: 'FieldList',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      outputName: 'OutputName',
      ownerName: 'OwnerName',
      ownerUserId: 'OwnerUserId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldList: { 'type': 'array', 'itemType': 'string' },
      nodeId: 'string',
      nodeName: 'string',
      outputName: 'string',
      ownerName: 'string',
      ownerUserId: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ParseBatchTaskDependencyResponseBodyParseResultDependNodeList extends $tea.Model {
  /**
   * @example
   * input
   */
  nodeIoType?: string;
  scheduleNodeInfoList?: ParseBatchTaskDependencyResponseBodyParseResultDependNodeListScheduleNodeInfoList[];
  static names(): { [key: string]: string } {
    return {
      nodeIoType: 'NodeIoType',
      scheduleNodeInfoList: 'ScheduleNodeInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeIoType: 'string',
      scheduleNodeInfoList: { 'type': 'array', 'itemType': ParseBatchTaskDependencyResponseBodyParseResultDependNodeListScheduleNodeInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ParseBatchTaskDependencyResponseBodyParseResult extends $tea.Model {
  dependNodeList?: ParseBatchTaskDependencyResponseBodyParseResultDependNodeList[];
  static names(): { [key: string]: string } {
    return {
      dependNodeList: 'DependNodeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependNodeList: { 'type': 'array', 'itemType': ParseBatchTaskDependencyResponseBodyParseResultDependNodeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PausePhysicalNodeRequestPauseCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  nodeIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 13222210
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      nodeIdList: 'NodeIdList',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeIdList: { 'type': 'array', 'itemType': 'string' },
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PausePhysicalNodeResponseBodyNodeOperateResultList extends $tea.Model {
  /**
   * @example
   * xx
   */
  errorMessage?: string;
  /**
   * @example
   * n_123456
   */
  nodeId?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      nodeId: 'NodeId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      nodeId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishObjectListRequestPublishCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 发布
   */
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  submitIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      projectId: 'ProjectId',
      submitIdList: 'SubmitIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      projectId: 'number',
      submitIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishObjectListResponseBodyPublishResult extends $tea.Model {
  submitIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      submitIdList: 'SubmitIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      submitIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTenantMemberRequestRemoveCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123@xx.com
   */
  sourceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceId: 'SourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserGroupMemberRequestRemoveCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2311
   */
  userGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      userGroupId: 'UserGroupId',
      userIdList: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupId: 'string',
      userIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumePhysicalNodeRequestResumeCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  nodeIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 102011
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      nodeIdList: 'NodeIdList',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeIdList: { 'type': 'array', 'itemType': 'string' },
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumePhysicalNodeResponseBodyNodeOperateResultList extends $tea.Model {
  /**
   * @example
   * xx
   */
  errorMessage?: string;
  /**
   * @example
   * n_123456
   */
  nodeId?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      nodeId: 'NodeId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      nodeId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeResourcePermissionRequestRevokeCommandResourceList extends $tea.Model {
  /**
   * @example
   * odps.300002102.beginner_test.amin_table
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeResourcePermissionRequestRevokeCommand extends $tea.Model {
  operateList?: string[];
  /**
   * @example
   * xx
   */
  reason?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceList?: RevokeResourcePermissionRequestRevokeCommandResourceList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PHYSICAL_TABLE
   */
  resourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 13131
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      operateList: 'OperateList',
      reason: 'Reason',
      resourceList: 'ResourceList',
      resourceType: 'ResourceType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateList: { 'type': 'array', 'itemType': 'string' },
      reason: 'string',
      resourceList: { 'type': 'array', 'itemType': RevokeResourcePermissionRequestRevokeCommandResourceList },
      resourceType: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBatchTaskRequestSubmitCommandCustomScheduleConfig extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10:00
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  interval?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HOUR
   */
  intervalUnit?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DAILY
   */
  schedulePeriod?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      interval: 'Interval',
      intervalUnit: 'IntervalUnit',
      schedulePeriod: 'SchedulePeriod',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      interval: 'number',
      intervalUnit: 'string',
      schedulePeriod: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBatchTaskRequestSubmitCommandParamList extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * key
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

export class SubmitBatchTaskRequestSubmitCommandSparkClientInfo extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abc
   */
  sparkClientVersion?: string;
  static names(): { [key: string]: string } {
    return {
      sparkClientVersion: 'SparkClientVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sparkClientVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBatchTaskRequestSubmitCommandUpStreamListDependPeriod extends $tea.Model {
  /**
   * @example
   * 1
   */
  periodOffset?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CURRENT_PERIOD
   */
  periodType?: string;
  static names(): { [key: string]: string } {
    return {
      periodOffset: 'PeriodOffset',
      periodType: 'PeriodType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodOffset: 'number',
      periodType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBatchTaskRequestSubmitCommandUpStreamList extends $tea.Model {
  dependPeriod?: SubmitBatchTaskRequestSubmitCommandUpStreamListDependPeriod;
  /**
   * @example
   * ALL
   */
  dependStrategy?: string;
  fieldList?: string[];
  /**
   * @example
   * PHYSICAL
   */
  nodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  periodDiff?: number;
  sourceNodeEnabled?: boolean;
  /**
   * @example
   * n_2001
   */
  sourceNodeId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * t_input1
   */
  sourceNodeOutputName?: string;
  /**
   * @example
   * t_input1
   */
  sourceTableName?: string;
  static names(): { [key: string]: string } {
    return {
      dependPeriod: 'DependPeriod',
      dependStrategy: 'DependStrategy',
      fieldList: 'FieldList',
      nodeType: 'NodeType',
      periodDiff: 'PeriodDiff',
      sourceNodeEnabled: 'SourceNodeEnabled',
      sourceNodeId: 'SourceNodeId',
      sourceNodeOutputName: 'SourceNodeOutputName',
      sourceTableName: 'SourceTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependPeriod: SubmitBatchTaskRequestSubmitCommandUpStreamListDependPeriod,
      dependStrategy: 'string',
      fieldList: { 'type': 'array', 'itemType': 'string' },
      nodeType: 'string',
      periodDiff: 'number',
      sourceNodeEnabled: 'boolean',
      sourceNodeId: 'string',
      sourceNodeOutputName: 'string',
      sourceTableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBatchTaskRequestSubmitCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * show tables;
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @example
   * 0 0 1 * * ?
   */
  cronExpression?: string;
  customScheduleConfig?: SubmitBatchTaskRequestSubmitCommandCustomScheduleConfig;
  /**
   * @example
   * PYTHON3_7
   */
  engine?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12113111
   */
  fileId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test111
   */
  name?: string;
  /**
   * @example
   * xx测试
   */
  nodeDescription?: string;
  nodeOutputNameList?: string[];
  /**
   * @example
   * 1
   */
  nodeStatus?: number;
  paramList?: SubmitBatchTaskRequestSubmitCommandParamList[];
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10121101
   */
  projectId?: number;
  pythonModuleList?: string[];
  /**
   * @example
   * DAILY
   */
  schedulePeriod?: string;
  sparkClientInfo?: SubmitBatchTaskRequestSubmitCommandSparkClientInfo;
  upStreamList?: SubmitBatchTaskRequestSubmitCommandUpStreamList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      comment: 'Comment',
      cronExpression: 'CronExpression',
      customScheduleConfig: 'CustomScheduleConfig',
      engine: 'Engine',
      fileId: 'FileId',
      name: 'Name',
      nodeDescription: 'NodeDescription',
      nodeOutputNameList: 'NodeOutputNameList',
      nodeStatus: 'NodeStatus',
      paramList: 'ParamList',
      priority: 'Priority',
      projectId: 'ProjectId',
      pythonModuleList: 'PythonModuleList',
      schedulePeriod: 'SchedulePeriod',
      sparkClientInfo: 'SparkClientInfo',
      upStreamList: 'UpStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      comment: 'string',
      cronExpression: 'string',
      customScheduleConfig: SubmitBatchTaskRequestSubmitCommandCustomScheduleConfig,
      engine: 'string',
      fileId: 'number',
      name: 'string',
      nodeDescription: 'string',
      nodeOutputNameList: { 'type': 'array', 'itemType': 'string' },
      nodeStatus: 'number',
      paramList: { 'type': 'array', 'itemType': SubmitBatchTaskRequestSubmitCommandParamList },
      priority: 'number',
      projectId: 'number',
      pythonModuleList: { 'type': 'array', 'itemType': 'string' },
      schedulePeriod: 'string',
      sparkClientInfo: SubmitBatchTaskRequestSubmitCommandSparkClientInfo,
      upStreamList: { 'type': 'array', 'itemType': SubmitBatchTaskRequestSubmitCommandUpStreamList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBatchTaskResponseBodySubmitResult extends $tea.Model {
  /**
   * @example
   * n_12113111
   */
  nodeId?: string;
  /**
   * @example
   * 1010312911
   */
  submitId?: number;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      submitId: 'SubmitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      submitId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAdHocFileRequestUpdateCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * select 1;
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2311113
   */
  fileId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1212313
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      fileId: 'FileId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      fileId: 'number',
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchTaskRequestUpdateCommandCustomScheduleConfig extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20:59
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  interval?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HOUR
   */
  intervalUnit?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DAILY
   */
  schedulePeriod?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 08:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      interval: 'Interval',
      intervalUnit: 'IntervalUnit',
      schedulePeriod: 'SchedulePeriod',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      interval: 'number',
      intervalUnit: 'string',
      schedulePeriod: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchTaskRequestUpdateCommandParamList extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * value
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

export class UpdateBatchTaskRequestUpdateCommandSparkClientInfo extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abc
   */
  sparkClientVersion?: string;
  static names(): { [key: string]: string } {
    return {
      sparkClientVersion: 'SparkClientVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sparkClientVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchTaskRequestUpdateCommandUpStreamListDependPeriod extends $tea.Model {
  /**
   * @example
   * 1
   */
  periodOffset?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CURRENT_PERIOD
   */
  periodType?: string;
  static names(): { [key: string]: string } {
    return {
      periodOffset: 'PeriodOffset',
      periodType: 'PeriodType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodOffset: 'number',
      periodType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchTaskRequestUpdateCommandUpStreamList extends $tea.Model {
  dependPeriod?: UpdateBatchTaskRequestUpdateCommandUpStreamListDependPeriod;
  /**
   * @example
   * LAST
   */
  dependStrategy?: string;
  fieldList?: string[];
  /**
   * @example
   * PHYSICAL
   */
  nodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  periodDiff?: number;
  sourceNodeEnabled?: boolean;
  /**
   * @example
   * n_2001
   */
  sourceNodeId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * t_input1
   */
  sourceNodeOutputName?: string;
  /**
   * @example
   * t_input1
   */
  sourceTableName?: string;
  static names(): { [key: string]: string } {
    return {
      dependPeriod: 'DependPeriod',
      dependStrategy: 'DependStrategy',
      fieldList: 'FieldList',
      nodeType: 'NodeType',
      periodDiff: 'PeriodDiff',
      sourceNodeEnabled: 'SourceNodeEnabled',
      sourceNodeId: 'SourceNodeId',
      sourceNodeOutputName: 'SourceNodeOutputName',
      sourceTableName: 'SourceTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependPeriod: UpdateBatchTaskRequestUpdateCommandUpStreamListDependPeriod,
      dependStrategy: 'string',
      fieldList: { 'type': 'array', 'itemType': 'string' },
      nodeType: 'string',
      periodDiff: 'number',
      sourceNodeEnabled: 'boolean',
      sourceNodeId: 'string',
      sourceNodeOutputName: 'string',
      sourceTableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchTaskRequestUpdateCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * show tables;
   */
  code?: string;
  /**
   * @example
   * 0 0 1 * * ?
   */
  cronExpression?: string;
  customScheduleConfig?: UpdateBatchTaskRequestUpdateCommandCustomScheduleConfig;
  /**
   * @example
   * mysql_catalog
   */
  dataSourceCatalog?: string;
  /**
   * @example
   * 12131111
   */
  dataSourceId?: string;
  /**
   * @example
   * erp
   */
  dataSourceSchema?: string;
  /**
   * @example
   * PYTHON3_7
   */
  engine?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12113111
   */
  fileId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test111
   */
  name?: string;
  /**
   * @example
   * xx测试
   */
  nodeDescription?: string;
  nodeOutputNameList?: string[];
  /**
   * @example
   * 1
   */
  nodeStatus?: number;
  paramList?: UpdateBatchTaskRequestUpdateCommandParamList[];
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10121101
   */
  projectId?: number;
  pythonModuleList?: string[];
  /**
   * @example
   * DAILY
   */
  schedulePeriod?: string;
  sparkClientInfo?: UpdateBatchTaskRequestUpdateCommandSparkClientInfo;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 21
   */
  taskType?: number;
  upStreamList?: UpdateBatchTaskRequestUpdateCommandUpStreamList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      cronExpression: 'CronExpression',
      customScheduleConfig: 'CustomScheduleConfig',
      dataSourceCatalog: 'DataSourceCatalog',
      dataSourceId: 'DataSourceId',
      dataSourceSchema: 'DataSourceSchema',
      engine: 'Engine',
      fileId: 'FileId',
      name: 'Name',
      nodeDescription: 'NodeDescription',
      nodeOutputNameList: 'NodeOutputNameList',
      nodeStatus: 'NodeStatus',
      paramList: 'ParamList',
      priority: 'Priority',
      projectId: 'ProjectId',
      pythonModuleList: 'PythonModuleList',
      schedulePeriod: 'SchedulePeriod',
      sparkClientInfo: 'SparkClientInfo',
      taskType: 'TaskType',
      upStreamList: 'UpStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      cronExpression: 'string',
      customScheduleConfig: UpdateBatchTaskRequestUpdateCommandCustomScheduleConfig,
      dataSourceCatalog: 'string',
      dataSourceId: 'string',
      dataSourceSchema: 'string',
      engine: 'string',
      fileId: 'number',
      name: 'string',
      nodeDescription: 'string',
      nodeOutputNameList: { 'type': 'array', 'itemType': 'string' },
      nodeStatus: 'number',
      paramList: { 'type': 'array', 'itemType': UpdateBatchTaskRequestUpdateCommandParamList },
      priority: 'number',
      projectId: 'number',
      pythonModuleList: { 'type': 'array', 'itemType': 'string' },
      schedulePeriod: 'string',
      sparkClientInfo: UpdateBatchTaskRequestUpdateCommandSparkClientInfo,
      taskType: 'number',
      upStreamList: { 'type': 'array', 'itemType': UpdateBatchTaskRequestUpdateCommandUpStreamList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchTaskResponseBodyUpdateResult extends $tea.Model {
  /**
   * @example
   * 12113111
   */
  fileId?: number;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchTaskUdfLineagesRequestUpdateCommandLineageGroupListInputLineageList extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  columnList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dev
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fullTable?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * t_input
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      columnList: 'ColumnList',
      env: 'Env',
      fullTable: 'FullTable',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnList: { 'type': 'array', 'itemType': 'string' },
      env: 'string',
      fullTable: 'boolean',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchTaskUdfLineagesRequestUpdateCommandLineageGroupListOutputLineageList extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  columnList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dev
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fullTable?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * t_output
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      columnList: 'ColumnList',
      env: 'Env',
      fullTable: 'FullTable',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnList: { 'type': 'array', 'itemType': 'string' },
      env: 'string',
      fullTable: 'boolean',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchTaskUdfLineagesRequestUpdateCommandLineageGroupList extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  inputLineageList?: UpdateBatchTaskUdfLineagesRequestUpdateCommandLineageGroupListInputLineageList[];
  /**
   * @remarks
   * This parameter is required.
   */
  outputLineageList?: UpdateBatchTaskUdfLineagesRequestUpdateCommandLineageGroupListOutputLineageList[];
  static names(): { [key: string]: string } {
    return {
      inputLineageList: 'InputLineageList',
      outputLineageList: 'OutputLineageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputLineageList: { 'type': 'array', 'itemType': UpdateBatchTaskUdfLineagesRequestUpdateCommandLineageGroupListInputLineageList },
      outputLineageList: { 'type': 'array', 'itemType': UpdateBatchTaskUdfLineagesRequestUpdateCommandLineageGroupListOutputLineageList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchTaskUdfLineagesRequestUpdateCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12113111
   */
  fileId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  lineageGroupList?: UpdateBatchTaskUdfLineagesRequestUpdateCommandLineageGroupList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 131211211
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      lineageGroupList: 'LineageGroupList',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      lineageGroupList: { 'type': 'array', 'itemType': UpdateBatchTaskUdfLineagesRequestUpdateCommandLineageGroupList },
      projectId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBizEntityRequestUpdateCommandBizObject extends $tea.Model {
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * create_object_name
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * create_object_code_name
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30010010
   */
  ownerUserId?: string;
  /**
   * @example
   * 116306
   */
  parentId?: number;
  refBizEntityIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
      ownerUserId: 'OwnerUserId',
      parentId: 'ParentId',
      refBizEntityIdList: 'RefBizEntityIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      name: 'string',
      ownerUserId: 'string',
      parentId: 'number',
      refBizEntityIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBizEntityRequestUpdateCommandBizProcess extends $tea.Model {
  bizEventEntityIdList?: number[];
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * create_process_name
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * create_process_code_name
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30010010
   */
  ownerUserId?: string;
  preBizProcessIdList?: number[];
  refBizEntityIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      bizEventEntityIdList: 'BizEventEntityIdList',
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
      ownerUserId: 'OwnerUserId',
      preBizProcessIdList: 'PreBizProcessIdList',
      refBizEntityIdList: 'RefBizEntityIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizEventEntityIdList: { 'type': 'array', 'itemType': 'number' },
      description: 'string',
      displayName: 'string',
      name: 'string',
      ownerUserId: 'string',
      preBizProcessIdList: { 'type': 'array', 'itemType': 'number' },
      refBizEntityIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBizEntityRequestUpdateCommand extends $tea.Model {
  bizObject?: UpdateBizEntityRequestUpdateCommandBizObject;
  bizProcess?: UpdateBizEntityRequestUpdateCommandBizProcess;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6798087749072704
   */
  bizUnitId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20101011
   */
  dataDomainId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 101001201
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BIZ_OBJECT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizObject: 'BizObject',
      bizProcess: 'BizProcess',
      bizUnitId: 'BizUnitId',
      dataDomainId: 'DataDomainId',
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizObject: UpdateBizEntityRequestUpdateCommandBizObject,
      bizProcess: UpdateBizEntityRequestUpdateCommandBizProcess,
      bizUnitId: 'number',
      dataDomainId: 'number',
      id: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBizUnitRequestUpdateCommandBizUnitAccountList extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20001201
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBizUnitRequestUpdateCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bizUnitAccountList?: UpdateBizUnitRequestUpdateCommandBizUnitAccountList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 545844456
   */
  bizUnitId?: number;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 测试
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * icon-environment
   */
  icon?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bz_code_name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      bizUnitAccountList: 'BizUnitAccountList',
      bizUnitId: 'BizUnitId',
      description: 'Description',
      displayName: 'DisplayName',
      icon: 'Icon',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitAccountList: { 'type': 'array', 'itemType': UpdateBizUnitRequestUpdateCommandBizUnitAccountList },
      bizUnitId: 'number',
      description: 'string',
      displayName: 'string',
      icon: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataDomainRequestUpdateCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dm_code_name
   */
  abbreviation?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 545844456
   */
  bizUnitId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1241844456
   */
  dataDomainId?: number;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 主题域测试
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dm_code_name
   */
  name?: string;
  /**
   * @example
   * 10232311
   */
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      abbreviation: 'Abbreviation',
      bizUnitId: 'BizUnitId',
      dataDomainId: 'DataDomainId',
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abbreviation: 'string',
      bizUnitId: 'number',
      dataDomainId: 'number',
      description: 'string',
      displayName: 'string',
      name: 'string',
      parentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataSourceBasicInfoRequestUpdateCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xx
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23231
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataSourceConfigRequestUpdateCommandConfigItemList extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v1
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

export class UpdateDataSourceConfigRequestUpdateCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configItemList?: UpdateDataSourceConfigRequestUpdateCommandConfigItemList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 13231313
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      configItemList: 'ConfigItemList',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configItemList: { 'type': 'array', 'itemType': UpdateDataSourceConfigRequestUpdateCommandConfigItemList },
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTenantMemberRequestUpdateCommandMemberList extends $tea.Model {
  /**
   * @example
   * 123@dingding
   */
  dingNumber?: string;
  /**
   * @example
   * 123@xx.com
   */
  mail?: string;
  /**
   * @example
   * 13888888888
   */
  mobilePhone?: string;
  roleList?: string[];
  /**
   * @example
   * 2331
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      dingNumber: 'DingNumber',
      mail: 'Mail',
      mobilePhone: 'MobilePhone',
      roleList: 'RoleList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingNumber: 'string',
      mail: 'string',
      mobilePhone: 'string',
      roleList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTenantMemberRequestUpdateCommand extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  memberList?: UpdateTenantMemberRequestUpdateCommandMemberList[];
  static names(): { [key: string]: string } {
    return {
      memberList: 'MemberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberList: { 'type': 'array', 'itemType': UpdateTenantMemberRequestUpdateCommandMemberList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupRequestUpdateCommand extends $tea.Model {
  adminUserIdList?: string[];
  /**
   * @example
   * xx
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 13423
   */
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      adminUserIdList: 'AdminUserIdList',
      description: 'Description',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminUserIdList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      id: 'string',
      name: 'string',
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
    this._endpoint = this.getEndpoint("dataphin-public", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 新增租户成员
   * 
   * @param tmpReq - AddTenantMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTenantMembersResponse
   */
  async addTenantMembersWithOptions(tmpReq: AddTenantMembersRequest, runtime: $Util.RuntimeOptions): Promise<AddTenantMembersResponse> {
    Util.validateModel(tmpReq);
    let request = new AddTenantMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.addCommand)) {
      request.addCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addCommand, "AddCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.addCommandShrink)) {
      body["AddCommand"] = request.addCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddTenantMembers",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddTenantMembersResponse>(await this.callApi(params, req, runtime), new AddTenantMembersResponse({}));
  }

  /**
   * 新增租户成员
   * 
   * @param request - AddTenantMembersRequest
   * @returns AddTenantMembersResponse
   */
  async addTenantMembers(request: AddTenantMembersRequest): Promise<AddTenantMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTenantMembersWithOptions(request, runtime);
  }

  /**
   * 通过原始用户添加租户成员.
   * 
   * @param tmpReq - AddTenantMembersBySourceUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTenantMembersBySourceUserResponse
   */
  async addTenantMembersBySourceUserWithOptions(tmpReq: AddTenantMembersBySourceUserRequest, runtime: $Util.RuntimeOptions): Promise<AddTenantMembersBySourceUserResponse> {
    Util.validateModel(tmpReq);
    let request = new AddTenantMembersBySourceUserShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.addCommand)) {
      request.addCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addCommand, "AddCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.addCommandShrink)) {
      body["AddCommand"] = request.addCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddTenantMembersBySourceUser",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddTenantMembersBySourceUserResponse>(await this.callApi(params, req, runtime), new AddTenantMembersBySourceUserResponse({}));
  }

  /**
   * 通过原始用户添加租户成员.
   * 
   * @param request - AddTenantMembersBySourceUserRequest
   * @returns AddTenantMembersBySourceUserResponse
   */
  async addTenantMembersBySourceUser(request: AddTenantMembersBySourceUserRequest): Promise<AddTenantMembersBySourceUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTenantMembersBySourceUserWithOptions(request, runtime);
  }

  /**
   * 添加用户组成员.
   * 
   * @param tmpReq - AddUserGroupMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserGroupMemberResponse
   */
  async addUserGroupMemberWithOptions(tmpReq: AddUserGroupMemberRequest, runtime: $Util.RuntimeOptions): Promise<AddUserGroupMemberResponse> {
    Util.validateModel(tmpReq);
    let request = new AddUserGroupMemberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.addCommand)) {
      request.addCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addCommand, "AddCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.addCommandShrink)) {
      body["AddCommand"] = request.addCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddUserGroupMember",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddUserGroupMemberResponse>(await this.callApi(params, req, runtime), new AddUserGroupMemberResponse({}));
  }

  /**
   * 添加用户组成员.
   * 
   * @param request - AddUserGroupMemberRequest
   * @returns AddUserGroupMemberResponse
   */
  async addUserGroupMember(request: AddUserGroupMemberRequest): Promise<AddUserGroupMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserGroupMemberWithOptions(request, runtime);
  }

  /**
   * 检查数据源连通性
   * 
   * @param tmpReq - CheckDataSourceConnectivityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckDataSourceConnectivityResponse
   */
  async checkDataSourceConnectivityWithOptions(tmpReq: CheckDataSourceConnectivityRequest, runtime: $Util.RuntimeOptions): Promise<CheckDataSourceConnectivityResponse> {
    Util.validateModel(tmpReq);
    let request = new CheckDataSourceConnectivityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.checkCommand)) {
      request.checkCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.checkCommand, "CheckCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.checkCommandShrink)) {
      body["CheckCommand"] = request.checkCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CheckDataSourceConnectivity",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckDataSourceConnectivityResponse>(await this.callApi(params, req, runtime), new CheckDataSourceConnectivityResponse({}));
  }

  /**
   * 检查数据源连通性
   * 
   * @param request - CheckDataSourceConnectivityRequest
   * @returns CheckDataSourceConnectivityResponse
   */
  async checkDataSourceConnectivity(request: CheckDataSourceConnectivityRequest): Promise<CheckDataSourceConnectivityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDataSourceConnectivityWithOptions(request, runtime);
  }

  /**
   * 检查已创建的数据源是否正常连通
   * 
   * @param request - CheckDataSourceConnectivityByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckDataSourceConnectivityByIdResponse
   */
  async checkDataSourceConnectivityByIdWithOptions(request: CheckDataSourceConnectivityByIdRequest, runtime: $Util.RuntimeOptions): Promise<CheckDataSourceConnectivityByIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckDataSourceConnectivityById",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckDataSourceConnectivityByIdResponse>(await this.callApi(params, req, runtime), new CheckDataSourceConnectivityByIdResponse({}));
  }

  /**
   * 检查已创建的数据源是否正常连通
   * 
   * @param request - CheckDataSourceConnectivityByIdRequest
   * @returns CheckDataSourceConnectivityByIdResponse
   */
  async checkDataSourceConnectivityById(request: CheckDataSourceConnectivityByIdRequest): Promise<CheckDataSourceConnectivityByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDataSourceConnectivityByIdWithOptions(request, runtime);
  }

  /**
   * 校验用户是否有指定资源权限点.
   * 
   * @param tmpReq - CheckResourcePermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckResourcePermissionResponse
   */
  async checkResourcePermissionWithOptions(tmpReq: CheckResourcePermissionRequest, runtime: $Util.RuntimeOptions): Promise<CheckResourcePermissionResponse> {
    Util.validateModel(tmpReq);
    let request = new CheckResourcePermissionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.checkCommand)) {
      request.checkCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.checkCommand, "CheckCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.checkCommandShrink)) {
      body["CheckCommand"] = request.checkCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CheckResourcePermission",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckResourcePermissionResponse>(await this.callApi(params, req, runtime), new CheckResourcePermissionResponse({}));
  }

  /**
   * 校验用户是否有指定资源权限点.
   * 
   * @param request - CheckResourcePermissionRequest
   * @returns CheckResourcePermissionResponse
   */
  async checkResourcePermission(request: CheckResourcePermissionRequest): Promise<CheckResourcePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkResourcePermissionWithOptions(request, runtime);
  }

  /**
   * 创建即席查询文件
   * 
   * @param tmpReq - CreateAdHocFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAdHocFileResponse
   */
  async createAdHocFileWithOptions(tmpReq: CreateAdHocFileRequest, runtime: $Util.RuntimeOptions): Promise<CreateAdHocFileResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateAdHocFileShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAdHocFile",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAdHocFileResponse>(await this.callApi(params, req, runtime), new CreateAdHocFileResponse({}));
  }

  /**
   * 创建即席查询文件
   * 
   * @param request - CreateAdHocFileRequest
   * @returns CreateAdHocFileResponse
   */
  async createAdHocFile(request: CreateAdHocFileRequest): Promise<CreateAdHocFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAdHocFileWithOptions(request, runtime);
  }

  /**
   * 创建离线计算任务。
   * 
   * @param tmpReq - CreateBatchTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBatchTaskResponse
   */
  async createBatchTaskWithOptions(tmpReq: CreateBatchTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateBatchTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateBatchTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateBatchTask",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBatchTaskResponse>(await this.callApi(params, req, runtime), new CreateBatchTaskResponse({}));
  }

  /**
   * 创建离线计算任务。
   * 
   * @param request - CreateBatchTaskRequest
   * @returns CreateBatchTaskResponse
   */
  async createBatchTask(request: CreateBatchTaskRequest): Promise<CreateBatchTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBatchTaskWithOptions(request, runtime);
  }

  /**
   * 创建业务实体。
   * 
   * @param tmpReq - CreateBizEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBizEntityResponse
   */
  async createBizEntityWithOptions(tmpReq: CreateBizEntityRequest, runtime: $Util.RuntimeOptions): Promise<CreateBizEntityResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateBizEntityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateBizEntity",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBizEntityResponse>(await this.callApi(params, req, runtime), new CreateBizEntityResponse({}));
  }

  /**
   * 创建业务实体。
   * 
   * @param request - CreateBizEntityRequest
   * @returns CreateBizEntityResponse
   */
  async createBizEntity(request: CreateBizEntityRequest): Promise<CreateBizEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBizEntityWithOptions(request, runtime);
  }

  /**
   * 创建数据板块。
   * 
   * @param tmpReq - CreateBizUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBizUnitResponse
   */
  async createBizUnitWithOptions(tmpReq: CreateBizUnitRequest, runtime: $Util.RuntimeOptions): Promise<CreateBizUnitResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateBizUnitShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateBizUnit",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBizUnitResponse>(await this.callApi(params, req, runtime), new CreateBizUnitResponse({}));
  }

  /**
   * 创建数据板块。
   * 
   * @param request - CreateBizUnitRequest
   * @returns CreateBizUnitResponse
   */
  async createBizUnit(request: CreateBizUnitRequest): Promise<CreateBizUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBizUnitWithOptions(request, runtime);
  }

  /**
   * 创建主题域。
   * 
   * @param tmpReq - CreateDataDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataDomainResponse
   */
  async createDataDomainWithOptions(tmpReq: CreateDataDomainRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataDomainResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateDataDomainShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDataDomain",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDataDomainResponse>(await this.callApi(params, req, runtime), new CreateDataDomainResponse({}));
  }

  /**
   * 创建主题域。
   * 
   * @param request - CreateDataDomainRequest
   * @returns CreateDataDomainResponse
   */
  async createDataDomain(request: CreateDataDomainRequest): Promise<CreateDataDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataDomainWithOptions(request, runtime);
  }

  /**
   * 新建数据源
   * 
   * @param tmpReq - CreateDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataSourceResponse
   */
  async createDataSourceWithOptions(tmpReq: CreateDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataSourceResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateDataSourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDataSource",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDataSourceResponse>(await this.callApi(params, req, runtime), new CreateDataSourceResponse({}));
  }

  /**
   * 新建数据源
   * 
   * @param request - CreateDataSourceRequest
   * @returns CreateDataSourceResponse
   */
  async createDataSource(request: CreateDataSourceRequest): Promise<CreateDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataSourceWithOptions(request, runtime);
  }

  /**
   * 创建菜单树文件目录
   * 
   * @param tmpReq - CreateDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDirectoryResponse
   */
  async createDirectoryWithOptions(tmpReq: CreateDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<CreateDirectoryResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateDirectoryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDirectory",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDirectoryResponse>(await this.callApi(params, req, runtime), new CreateDirectoryResponse({}));
  }

  /**
   * 创建菜单树文件目录
   * 
   * @param request - CreateDirectoryRequest
   * @returns CreateDirectoryResponse
   */
  async createDirectory(request: CreateDirectoryRequest): Promise<CreateDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDirectoryWithOptions(request, runtime);
  }

  /**
   * 通用补数据接口 1.会生成补数据实例运行：影响相关产产出表数据 2.会进行任务运行：造成计算的费用以及存储的费用
   * 
   * @param tmpReq - CreateNodeSupplementRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNodeSupplementResponse
   */
  async createNodeSupplementWithOptions(tmpReq: CreateNodeSupplementRequest, runtime: $Util.RuntimeOptions): Promise<CreateNodeSupplementResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateNodeSupplementShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.env)) {
      query["Env"] = request.env;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateNodeSupplement",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNodeSupplementResponse>(await this.callApi(params, req, runtime), new CreateNodeSupplementResponse({}));
  }

  /**
   * 通用补数据接口 1.会生成补数据实例运行：影响相关产产出表数据 2.会进行任务运行：造成计算的费用以及存储的费用
   * 
   * @param request - CreateNodeSupplementRequest
   * @returns CreateNodeSupplementResponse
   */
  async createNodeSupplement(request: CreateNodeSupplementRequest): Promise<CreateNodeSupplementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNodeSupplementWithOptions(request, runtime);
  }

  /**
   * 创建数据集成任务。
   * 
   * @param tmpReq - CreatePipelineNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePipelineNodeResponse
   */
  async createPipelineNodeWithOptions(tmpReq: CreatePipelineNodeRequest, runtime: $Util.RuntimeOptions): Promise<CreatePipelineNodeResponse> {
    Util.validateModel(tmpReq);
    let request = new CreatePipelineNodeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.createPipelineNodeCommand)) {
      request.createPipelineNodeCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createPipelineNodeCommand, "CreatePipelineNodeCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.createPipelineNodeCommandShrink)) {
      body["CreatePipelineNodeCommand"] = request.createPipelineNodeCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreatePipelineNode",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePipelineNodeResponse>(await this.callApi(params, req, runtime), new CreatePipelineNodeResponse({}));
  }

  /**
   * 创建数据集成任务。
   * 
   * @param request - CreatePipelineNodeRequest
   * @returns CreatePipelineNodeResponse
   */
  async createPipelineNode(request: CreatePipelineNodeRequest): Promise<CreatePipelineNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPipelineNodeWithOptions(request, runtime);
  }

  /**
   * 创建流批一体任务
   * 
   * @param tmpReq - CreateStreamBatchJobMappingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStreamBatchJobMappingResponse
   */
  async createStreamBatchJobMappingWithOptions(tmpReq: CreateStreamBatchJobMappingRequest, runtime: $Util.RuntimeOptions): Promise<CreateStreamBatchJobMappingResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateStreamBatchJobMappingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.streamBatchJobMappingCreateCommand)) {
      request.streamBatchJobMappingCreateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.streamBatchJobMappingCreateCommand, "StreamBatchJobMappingCreateCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.streamBatchJobMappingCreateCommandShrink)) {
      body["StreamBatchJobMappingCreateCommand"] = request.streamBatchJobMappingCreateCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateStreamBatchJobMapping",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateStreamBatchJobMappingResponse>(await this.callApi(params, req, runtime), new CreateStreamBatchJobMappingResponse({}));
  }

  /**
   * 创建流批一体任务
   * 
   * @param request - CreateStreamBatchJobMappingRequest
   * @returns CreateStreamBatchJobMappingResponse
   */
  async createStreamBatchJobMapping(request: CreateStreamBatchJobMappingRequest): Promise<CreateStreamBatchJobMappingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createStreamBatchJobMappingWithOptions(request, runtime);
  }

  /**
   * 新建用户组.
   * 
   * @param tmpReq - CreateUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserGroupResponse
   */
  async createUserGroupWithOptions(tmpReq: CreateUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserGroupResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateUserGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.createCommand)) {
      request.createCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createCommand, "CreateCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.createCommandShrink)) {
      body["CreateCommand"] = request.createCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateUserGroup",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUserGroupResponse>(await this.callApi(params, req, runtime), new CreateUserGroupResponse({}));
  }

  /**
   * 新建用户组.
   * 
   * @param request - CreateUserGroupRequest
   * @returns CreateUserGroupResponse
   */
  async createUserGroup(request: CreateUserGroupRequest): Promise<CreateUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserGroupWithOptions(request, runtime);
  }

  /**
   * 删除菜单树即席查询文件
   * 
   * @param request - DeleteAdHocFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAdHocFileResponse
   */
  async deleteAdHocFileWithOptions(request: DeleteAdHocFileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAdHocFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAdHocFile",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAdHocFileResponse>(await this.callApi(params, req, runtime), new DeleteAdHocFileResponse({}));
  }

  /**
   * 删除菜单树即席查询文件
   * 
   * @param request - DeleteAdHocFileRequest
   * @returns DeleteAdHocFileResponse
   */
  async deleteAdHocFile(request: DeleteAdHocFileRequest): Promise<DeleteAdHocFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAdHocFileWithOptions(request, runtime);
  }

  /**
   * 删除离线计算任务，如果任务还没下线需要先下线再删除。
   * 
   * @param tmpReq - DeleteBatchTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBatchTaskResponse
   */
  async deleteBatchTaskWithOptions(tmpReq: DeleteBatchTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBatchTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteBatchTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deleteCommand)) {
      request.deleteCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deleteCommand, "DeleteCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deleteCommandShrink)) {
      body["DeleteCommand"] = request.deleteCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBatchTask",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBatchTaskResponse>(await this.callApi(params, req, runtime), new DeleteBatchTaskResponse({}));
  }

  /**
   * 删除离线计算任务，如果任务还没下线需要先下线再删除。
   * 
   * @param request - DeleteBatchTaskRequest
   * @returns DeleteBatchTaskResponse
   */
  async deleteBatchTask(request: DeleteBatchTaskRequest): Promise<DeleteBatchTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBatchTaskWithOptions(request, runtime);
  }

  /**
   * 删除业务实体。
   * 
   * @param request - DeleteBizEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBizEntityResponse
   */
  async deleteBizEntityWithOptions(request: DeleteBizEntityRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBizEntityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizUnitId)) {
      query["BizUnitId"] = request.bizUnitId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBizEntity",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBizEntityResponse>(await this.callApi(params, req, runtime), new DeleteBizEntityResponse({}));
  }

  /**
   * 删除业务实体。
   * 
   * @param request - DeleteBizEntityRequest
   * @returns DeleteBizEntityResponse
   */
  async deleteBizEntity(request: DeleteBizEntityRequest): Promise<DeleteBizEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBizEntityWithOptions(request, runtime);
  }

  /**
   * 删除数据板块。
   * 
   * @param request - DeleteBizUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBizUnitResponse
   */
  async deleteBizUnitWithOptions(request: DeleteBizUnitRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBizUnitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBizUnit",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBizUnitResponse>(await this.callApi(params, req, runtime), new DeleteBizUnitResponse({}));
  }

  /**
   * 删除数据板块。
   * 
   * @param request - DeleteBizUnitRequest
   * @returns DeleteBizUnitResponse
   */
  async deleteBizUnit(request: DeleteBizUnitRequest): Promise<DeleteBizUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBizUnitWithOptions(request, runtime);
  }

  /**
   * 删除主题域。
   * 
   * @param request - DeleteDataDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataDomainResponse
   */
  async deleteDataDomainWithOptions(request: DeleteDataDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizUnitId)) {
      query["BizUnitId"] = request.bizUnitId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDataDomain",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDataDomainResponse>(await this.callApi(params, req, runtime), new DeleteDataDomainResponse({}));
  }

  /**
   * 删除主题域。
   * 
   * @param request - DeleteDataDomainRequest
   * @returns DeleteDataDomainResponse
   */
  async deleteDataDomain(request: DeleteDataDomainRequest): Promise<DeleteDataDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataDomainWithOptions(request, runtime);
  }

  /**
   * 删除数据源
   * 
   * @param tmpReq - DeleteDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataSourceResponse
   */
  async deleteDataSourceWithOptions(tmpReq: DeleteDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataSourceResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteDataSourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deleteCommand)) {
      request.deleteCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deleteCommand, "DeleteCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deleteCommandShrink)) {
      body["DeleteCommand"] = request.deleteCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDataSource",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDataSourceResponse>(await this.callApi(params, req, runtime), new DeleteDataSourceResponse({}));
  }

  /**
   * 删除数据源
   * 
   * @param request - DeleteDataSourceRequest
   * @returns DeleteDataSourceResponse
   */
  async deleteDataSource(request: DeleteDataSourceRequest): Promise<DeleteDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataSourceWithOptions(request, runtime);
  }

  /**
   * 删除菜单树文件目录
   * 
   * @param request - DeleteDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDirectoryResponse
   */
  async deleteDirectoryWithOptions(request: DeleteDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDirectoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDirectory",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDirectoryResponse>(await this.callApi(params, req, runtime), new DeleteDirectoryResponse({}));
  }

  /**
   * 删除菜单树文件目录
   * 
   * @param request - DeleteDirectoryRequest
   * @returns DeleteDirectoryResponse
   */
  async deleteDirectory(request: DeleteDirectoryRequest): Promise<DeleteDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDirectoryWithOptions(request, runtime);
  }

  /**
   * 删除用户组.
   * 
   * @param request - DeleteUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserGroupResponse
   */
  async deleteUserGroupWithOptions(request: DeleteUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUserGroup",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserGroupResponse>(await this.callApi(params, req, runtime), new DeleteUserGroupResponse({}));
  }

  /**
   * 删除用户组.
   * 
   * @param request - DeleteUserGroupRequest
   * @returns DeleteUserGroupResponse
   */
  async deleteUserGroup(request: DeleteUserGroupRequest): Promise<DeleteUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserGroupWithOptions(request, runtime);
  }

  /**
   * 执行即席查询任务。
   * 
   * @param tmpReq - ExecuteAdHocTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteAdHocTaskResponse
   */
  async executeAdHocTaskWithOptions(tmpReq: ExecuteAdHocTaskRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteAdHocTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new ExecuteAdHocTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.executeCommand)) {
      request.executeCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.executeCommand, "ExecuteCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.executeCommandShrink)) {
      body["ExecuteCommand"] = request.executeCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteAdHocTask",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecuteAdHocTaskResponse>(await this.callApi(params, req, runtime), new ExecuteAdHocTaskResponse({}));
  }

  /**
   * 执行即席查询任务。
   * 
   * @param request - ExecuteAdHocTaskRequest
   * @returns ExecuteAdHocTaskResponse
   */
  async executeAdHocTask(request: ExecuteAdHocTaskRequest): Promise<ExecuteAdHocTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeAdHocTaskWithOptions(request, runtime);
  }

  /**
   * 运行手动调度节点。
   * 
   * @param tmpReq - ExecuteManualNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteManualNodeResponse
   */
  async executeManualNodeWithOptions(tmpReq: ExecuteManualNodeRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteManualNodeResponse> {
    Util.validateModel(tmpReq);
    let request = new ExecuteManualNodeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.executeCommand)) {
      request.executeCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.executeCommand, "ExecuteCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.env)) {
      query["Env"] = request.env;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.executeCommandShrink)) {
      body["ExecuteCommand"] = request.executeCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteManualNode",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecuteManualNodeResponse>(await this.callApi(params, req, runtime), new ExecuteManualNodeResponse({}));
  }

  /**
   * 运行手动调度节点。
   * 
   * @param request - ExecuteManualNodeRequest
   * @returns ExecuteManualNodeResponse
   */
  async executeManualNode(request: ExecuteManualNodeRequest): Promise<ExecuteManualNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeManualNodeWithOptions(request, runtime);
  }

  /**
   * 重跑下游(修复链路数据), 支持强制重跑下游。影响范围: 1. 会产生计算成本；2. 会影响数据产出
   * 
   * @param tmpReq - FixDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FixDataResponse
   */
  async fixDataWithOptions(tmpReq: FixDataRequest, runtime: $Util.RuntimeOptions): Promise<FixDataResponse> {
    Util.validateModel(tmpReq);
    let request = new FixDataShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.fixDataCommand)) {
      request.fixDataCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fixDataCommand, "FixDataCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.env)) {
      query["Env"] = request.env;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fixDataCommandShrink)) {
      body["FixDataCommand"] = request.fixDataCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "FixData",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FixDataResponse>(await this.callApi(params, req, runtime), new FixDataResponse({}));
  }

  /**
   * 重跑下游(修复链路数据), 支持强制重跑下游。影响范围: 1. 会产生计算成本；2. 会影响数据产出
   * 
   * @param request - FixDataRequest
   * @returns FixDataResponse
   */
  async fixData(request: FixDataRequest): Promise<FixDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.fixDataWithOptions(request, runtime);
  }

  /**
   * 查询即席查询文件。
   * 
   * @param request - GetAdHocFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAdHocFileResponse
   */
  async getAdHocFileWithOptions(request: GetAdHocFileRequest, runtime: $Util.RuntimeOptions): Promise<GetAdHocFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAdHocFile",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAdHocFileResponse>(await this.callApi(params, req, runtime), new GetAdHocFileResponse({}));
  }

  /**
   * 查询即席查询文件。
   * 
   * @param request - GetAdHocFileRequest
   * @returns GetAdHocFileResponse
   */
  async getAdHocFile(request: GetAdHocFileRequest): Promise<GetAdHocFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAdHocFileWithOptions(request, runtime);
  }

  /**
   * 获取即席查询任务运行日志。
   * 
   * @param request - GetAdHocTaskLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAdHocTaskLogResponse
   */
  async getAdHocTaskLogWithOptions(request: GetAdHocTaskLogRequest, runtime: $Util.RuntimeOptions): Promise<GetAdHocTaskLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.subTaskId)) {
      query["SubTaskId"] = request.subTaskId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAdHocTaskLog",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAdHocTaskLogResponse>(await this.callApi(params, req, runtime), new GetAdHocTaskLogResponse({}));
  }

  /**
   * 获取即席查询任务运行日志。
   * 
   * @param request - GetAdHocTaskLogRequest
   * @returns GetAdHocTaskLogResponse
   */
  async getAdHocTaskLog(request: GetAdHocTaskLogRequest): Promise<GetAdHocTaskLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAdHocTaskLogWithOptions(request, runtime);
  }

  /**
   * 获取即席查询的任务运行结果。
   * 
   * @param request - GetAdHocTaskResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAdHocTaskResultResponse
   */
  async getAdHocTaskResultWithOptions(request: GetAdHocTaskResultRequest, runtime: $Util.RuntimeOptions): Promise<GetAdHocTaskResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.subTaskId)) {
      query["SubTaskId"] = request.subTaskId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAdHocTaskResult",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAdHocTaskResultResponse>(await this.callApi(params, req, runtime), new GetAdHocTaskResultResponse({}));
  }

  /**
   * 获取即席查询的任务运行结果。
   * 
   * @param request - GetAdHocTaskResultRequest
   * @returns GetAdHocTaskResultResponse
   */
  async getAdHocTaskResult(request: GetAdHocTaskResultRequest): Promise<GetAdHocTaskResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAdHocTaskResultWithOptions(request, runtime);
  }

  /**
   * 获取告警事件详情
   * 
   * @param request - GetAlertEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAlertEventResponse
   */
  async getAlertEventWithOptions(request: GetAlertEventRequest, runtime: $Util.RuntimeOptions): Promise<GetAlertEventResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAlertEvent",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAlertEventResponse>(await this.callApi(params, req, runtime), new GetAlertEventResponse({}));
  }

  /**
   * 获取告警事件详情
   * 
   * @param request - GetAlertEventRequest
   * @returns GetAlertEventResponse
   */
  async getAlertEvent(request: GetAlertEventRequest): Promise<GetAlertEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAlertEventWithOptions(request, runtime);
  }

  /**
   * 获取离线计算任务详情。
   * 
   * @param request - GetBatchTaskInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBatchTaskInfoResponse
   */
  async getBatchTaskInfoWithOptions(request: GetBatchTaskInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetBatchTaskInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.env)) {
      query["Env"] = request.env;
    }

    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.includeAllUpStreams)) {
      query["IncludeAllUpStreams"] = request.includeAllUpStreams;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBatchTaskInfo",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBatchTaskInfoResponse>(await this.callApi(params, req, runtime), new GetBatchTaskInfoResponse({}));
  }

  /**
   * 获取离线计算任务详情。
   * 
   * @param request - GetBatchTaskInfoRequest
   * @returns GetBatchTaskInfoResponse
   */
  async getBatchTaskInfo(request: GetBatchTaskInfoRequest): Promise<GetBatchTaskInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBatchTaskInfoWithOptions(request, runtime);
  }

  /**
   * 获取离线计算任务指定版本任务详情。
   * 
   * @param request - GetBatchTaskInfoByVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBatchTaskInfoByVersionResponse
   */
  async getBatchTaskInfoByVersionWithOptions(request: GetBatchTaskInfoByVersionRequest, runtime: $Util.RuntimeOptions): Promise<GetBatchTaskInfoByVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBatchTaskInfoByVersion",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBatchTaskInfoByVersionResponse>(await this.callApi(params, req, runtime), new GetBatchTaskInfoByVersionResponse({}));
  }

  /**
   * 获取离线计算任务指定版本任务详情。
   * 
   * @param request - GetBatchTaskInfoByVersionRequest
   * @returns GetBatchTaskInfoByVersionResponse
   */
  async getBatchTaskInfoByVersion(request: GetBatchTaskInfoByVersionRequest): Promise<GetBatchTaskInfoByVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBatchTaskInfoByVersionWithOptions(request, runtime);
  }

  /**
   * 获取离线任务自定义血缘。
   * 
   * @param request - GetBatchTaskUdfLineagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBatchTaskUdfLineagesResponse
   */
  async getBatchTaskUdfLineagesWithOptions(request: GetBatchTaskUdfLineagesRequest, runtime: $Util.RuntimeOptions): Promise<GetBatchTaskUdfLineagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBatchTaskUdfLineages",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBatchTaskUdfLineagesResponse>(await this.callApi(params, req, runtime), new GetBatchTaskUdfLineagesResponse({}));
  }

  /**
   * 获取离线任务自定义血缘。
   * 
   * @param request - GetBatchTaskUdfLineagesRequest
   * @returns GetBatchTaskUdfLineagesResponse
   */
  async getBatchTaskUdfLineages(request: GetBatchTaskUdfLineagesRequest): Promise<GetBatchTaskUdfLineagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBatchTaskUdfLineagesWithOptions(request, runtime);
  }

  /**
   * 获取离线计算任务版本列表。
   * 
   * @param request - GetBatchTaskVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBatchTaskVersionsResponse
   */
  async getBatchTaskVersionsWithOptions(request: GetBatchTaskVersionsRequest, runtime: $Util.RuntimeOptions): Promise<GetBatchTaskVersionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBatchTaskVersions",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBatchTaskVersionsResponse>(await this.callApi(params, req, runtime), new GetBatchTaskVersionsResponse({}));
  }

  /**
   * 获取离线计算任务版本列表。
   * 
   * @param request - GetBatchTaskVersionsRequest
   * @returns GetBatchTaskVersionsResponse
   */
  async getBatchTaskVersions(request: GetBatchTaskVersionsRequest): Promise<GetBatchTaskVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBatchTaskVersionsWithOptions(request, runtime);
  }

  /**
   * 获取业务实体详情。
   * 
   * @param request - GetBizEntityInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBizEntityInfoResponse
   */
  async getBizEntityInfoWithOptions(request: GetBizEntityInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetBizEntityInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBizEntityInfo",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBizEntityInfoResponse>(await this.callApi(params, req, runtime), new GetBizEntityInfoResponse({}));
  }

  /**
   * 获取业务实体详情。
   * 
   * @param request - GetBizEntityInfoRequest
   * @returns GetBizEntityInfoResponse
   */
  async getBizEntityInfo(request: GetBizEntityInfoRequest): Promise<GetBizEntityInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBizEntityInfoWithOptions(request, runtime);
  }

  /**
   * 查询指定版本的业务实体的详情。
   * 
   * @param request - GetBizEntityInfoByVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBizEntityInfoByVersionResponse
   */
  async getBizEntityInfoByVersionWithOptions(request: GetBizEntityInfoByVersionRequest, runtime: $Util.RuntimeOptions): Promise<GetBizEntityInfoByVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBizEntityInfoByVersion",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBizEntityInfoByVersionResponse>(await this.callApi(params, req, runtime), new GetBizEntityInfoByVersionResponse({}));
  }

  /**
   * 查询指定版本的业务实体的详情。
   * 
   * @param request - GetBizEntityInfoByVersionRequest
   * @returns GetBizEntityInfoByVersionResponse
   */
  async getBizEntityInfoByVersion(request: GetBizEntityInfoByVersionRequest): Promise<GetBizEntityInfoByVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBizEntityInfoByVersionWithOptions(request, runtime);
  }

  /**
   * 获取数据板块详情。
   * 
   * @param request - GetBizUnitInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBizUnitInfoResponse
   */
  async getBizUnitInfoWithOptions(request: GetBizUnitInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetBizUnitInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBizUnitInfo",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBizUnitInfoResponse>(await this.callApi(params, req, runtime), new GetBizUnitInfoResponse({}));
  }

  /**
   * 获取数据板块详情。
   * 
   * @param request - GetBizUnitInfoRequest
   * @returns GetBizUnitInfoResponse
   */
  async getBizUnitInfo(request: GetBizUnitInfoRequest): Promise<GetBizUnitInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBizUnitInfoWithOptions(request, runtime);
  }

  /**
   * 根据环境获取集群信息
   * 
   * @param request - GetClusterQueueInfoByEnvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterQueueInfoByEnvResponse
   */
  async getClusterQueueInfoByEnvWithOptions(request: GetClusterQueueInfoByEnvRequest, runtime: $Util.RuntimeOptions): Promise<GetClusterQueueInfoByEnvResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.env)) {
      query["Env"] = request.env;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.streamBatchMode)) {
      query["StreamBatchMode"] = request.streamBatchMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetClusterQueueInfoByEnv",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetClusterQueueInfoByEnvResponse>(await this.callApi(params, req, runtime), new GetClusterQueueInfoByEnvResponse({}));
  }

  /**
   * 根据环境获取集群信息
   * 
   * @param request - GetClusterQueueInfoByEnvRequest
   * @returns GetClusterQueueInfoByEnvResponse
   */
  async getClusterQueueInfoByEnv(request: GetClusterQueueInfoByEnvRequest): Promise<GetClusterQueueInfoByEnvResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getClusterQueueInfoByEnvWithOptions(request, runtime);
  }

  /**
   * 获取主题域详情。
   * 
   * @param request - GetDataDomainInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataDomainInfoResponse
   */
  async getDataDomainInfoWithOptions(request: GetDataDomainInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetDataDomainInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDataDomainInfo",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDataDomainInfoResponse>(await this.callApi(params, req, runtime), new GetDataDomainInfoResponse({}));
  }

  /**
   * 获取主题域详情。
   * 
   * @param request - GetDataDomainInfoRequest
   * @returns GetDataDomainInfoResponse
   */
  async getDataDomainInfo(request: GetDataDomainInfoRequest): Promise<GetDataDomainInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataDomainInfoWithOptions(request, runtime);
  }

  /**
   * 查询开发态对象上游依赖。
   * 
   * @param request - GetDevObjectDependencyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDevObjectDependencyResponse
   */
  async getDevObjectDependencyWithOptions(request: GetDevObjectDependencyRequest, runtime: $Util.RuntimeOptions): Promise<GetDevObjectDependencyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.objectFrom)) {
      query["ObjectFrom"] = request.objectFrom;
    }

    if (!Util.isUnset(request.objectId)) {
      query["ObjectId"] = request.objectId;
    }

    if (!Util.isUnset(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDevObjectDependency",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDevObjectDependencyResponse>(await this.callApi(params, req, runtime), new GetDevObjectDependencyResponse({}));
  }

  /**
   * 查询开发态对象上游依赖。
   * 
   * @param request - GetDevObjectDependencyRequest
   * @returns GetDevObjectDependencyResponse
   */
  async getDevObjectDependency(request: GetDevObjectDependencyRequest): Promise<GetDevObjectDependencyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDevObjectDependencyWithOptions(request, runtime);
  }

  /**
   * 获取文件夹目录树
   * 
   * @param request - GetDirectoryTreeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDirectoryTreeResponse
   */
  async getDirectoryTreeWithOptions(request: GetDirectoryTreeRequest, runtime: $Util.RuntimeOptions): Promise<GetDirectoryTreeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDirectoryTree",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDirectoryTreeResponse>(await this.callApi(params, req, runtime), new GetDirectoryTreeResponse({}));
  }

  /**
   * 获取文件夹目录树
   * 
   * @param request - GetDirectoryTreeRequest
   * @returns GetDirectoryTreeResponse
   */
  async getDirectoryTree(request: GetDirectoryTreeRequest): Promise<GetDirectoryTreeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDirectoryTreeWithOptions(request, runtime);
  }

  /**
   * 根据起始的实例查询该实例的下游
   * 
   * @param tmpReq - GetInstanceDownStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceDownStreamResponse
   */
  async getInstanceDownStreamWithOptions(tmpReq: GetInstanceDownStreamRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceDownStreamResponse> {
    Util.validateModel(tmpReq);
    let request = new GetInstanceDownStreamShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.instanceGet)) {
      request.instanceGetShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceGet, "InstanceGet", "json");
    }

    let query = { };
    if (!Util.isUnset(request.downStreamDepth)) {
      query["DownStreamDepth"] = request.downStreamDepth;
    }

    if (!Util.isUnset(request.env)) {
      query["Env"] = request.env;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.runStatus)) {
      query["RunStatus"] = request.runStatus;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceGetShrink)) {
      body["InstanceGet"] = request.instanceGetShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceDownStream",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceDownStreamResponse>(await this.callApi(params, req, runtime), new GetInstanceDownStreamResponse({}));
  }

  /**
   * 根据起始的实例查询该实例的下游
   * 
   * @param request - GetInstanceDownStreamRequest
   * @returns GetInstanceDownStreamResponse
   */
  async getInstanceDownStream(request: GetInstanceDownStreamRequest): Promise<GetInstanceDownStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceDownStreamWithOptions(request, runtime);
  }

  /**
   * 查询实例的上下游，支持逻辑表和代码任务。
   * 
   * @param tmpReq - GetInstanceUpDownStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceUpDownStreamResponse
   */
  async getInstanceUpDownStreamWithOptions(tmpReq: GetInstanceUpDownStreamRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceUpDownStreamResponse> {
    Util.validateModel(tmpReq);
    let request = new GetInstanceUpDownStreamShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.instanceId)) {
      request.instanceIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceId, "InstanceId", "json");
    }

    let query = { };
    if (!Util.isUnset(request.downStreamDepth)) {
      query["DownStreamDepth"] = request.downStreamDepth;
    }

    if (!Util.isUnset(request.env)) {
      query["Env"] = request.env;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.upStreamDepth)) {
      query["UpStreamDepth"] = request.upStreamDepth;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceIdShrink)) {
      body["InstanceId"] = request.instanceIdShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceUpDownStream",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceUpDownStreamResponse>(await this.callApi(params, req, runtime), new GetInstanceUpDownStreamResponse({}));
  }

  /**
   * 查询实例的上下游，支持逻辑表和代码任务。
   * 
   * @param request - GetInstanceUpDownStreamRequest
   * @returns GetInstanceUpDownStreamResponse
   */
  async getInstanceUpDownStream(request: GetInstanceUpDownStreamRequest): Promise<GetInstanceUpDownStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceUpDownStreamWithOptions(request, runtime);
  }

  /**
   * 获取最新的待发布记录详情
   * 
   * @param tmpReq - GetLatestSubmitDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLatestSubmitDetailResponse
   */
  async getLatestSubmitDetailWithOptions(tmpReq: GetLatestSubmitDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetLatestSubmitDetailResponse> {
    Util.validateModel(tmpReq);
    let request = new GetLatestSubmitDetailShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.submitDetailQuery)) {
      request.submitDetailQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.submitDetailQuery, "SubmitDetailQuery", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.submitDetailQueryShrink)) {
      body["SubmitDetailQuery"] = request.submitDetailQueryShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetLatestSubmitDetail",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLatestSubmitDetailResponse>(await this.callApi(params, req, runtime), new GetLatestSubmitDetailResponse({}));
  }

  /**
   * 获取最新的待发布记录详情
   * 
   * @param request - GetLatestSubmitDetailRequest
   * @returns GetLatestSubmitDetailResponse
   */
  async getLatestSubmitDetail(request: GetLatestSubmitDetailRequest): Promise<GetLatestSubmitDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLatestSubmitDetailWithOptions(request, runtime);
  }

  /**
   * 获取用户角色列表
   * 
   * @param request - GetMyRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMyRolesResponse
   */
  async getMyRolesWithOptions(request: GetMyRolesRequest, runtime: $Util.RuntimeOptions): Promise<GetMyRolesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMyRoles",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMyRolesResponse>(await this.callApi(params, req, runtime), new GetMyRolesResponse({}));
  }

  /**
   * 获取用户角色列表
   * 
   * @param request - GetMyRolesRequest
   * @returns GetMyRolesResponse
   */
  async getMyRoles(request: GetMyRolesRequest): Promise<GetMyRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMyRolesWithOptions(request, runtime);
  }

  /**
   * 获取当前用户归属租户.
   * 
   * @param tmpReq - GetMyTenantsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMyTenantsResponse
   */
  async getMyTenantsWithOptions(tmpReq: GetMyTenantsRequest, runtime: $Util.RuntimeOptions): Promise<GetMyTenantsResponse> {
    Util.validateModel(tmpReq);
    let request = new GetMyTenantsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.featureCodeList)) {
      request.featureCodeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.featureCodeList, "FeatureCodeList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.featureCodeListShrink)) {
      body["FeatureCodeList"] = request.featureCodeListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetMyTenants",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMyTenantsResponse>(await this.callApi(params, req, runtime), new GetMyTenantsResponse({}));
  }

  /**
   * 获取当前用户归属租户.
   * 
   * @param request - GetMyTenantsRequest
   * @returns GetMyTenantsResponse
   */
  async getMyTenants(request: GetMyTenantsRequest): Promise<GetMyTenantsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMyTenantsWithOptions(request, runtime);
  }

  /**
   * 通用查询节点上下游接口
   * 
   * @param tmpReq - GetNodeUpDownStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNodeUpDownStreamResponse
   */
  async getNodeUpDownStreamWithOptions(tmpReq: GetNodeUpDownStreamRequest, runtime: $Util.RuntimeOptions): Promise<GetNodeUpDownStreamResponse> {
    Util.validateModel(tmpReq);
    let request = new GetNodeUpDownStreamShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.nodeId)) {
      request.nodeIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeId, "NodeId", "json");
    }

    let query = { };
    if (!Util.isUnset(request.downStreamDepth)) {
      query["DownStreamDepth"] = request.downStreamDepth;
    }

    if (!Util.isUnset(request.env)) {
      query["Env"] = request.env;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.upStreamDepth)) {
      query["UpStreamDepth"] = request.upStreamDepth;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nodeIdShrink)) {
      body["NodeId"] = request.nodeIdShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetNodeUpDownStream",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNodeUpDownStreamResponse>(await this.callApi(params, req, runtime), new GetNodeUpDownStreamResponse({}));
  }

  /**
   * 通用查询节点上下游接口
   * 
   * @param request - GetNodeUpDownStreamRequest
   * @returns GetNodeUpDownStreamResponse
   */
  async getNodeUpDownStream(request: GetNodeUpDownStreamRequest): Promise<GetNodeUpDownStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNodeUpDownStreamWithOptions(request, runtime);
  }

  /**
   * 查询补数据提交的状态
   * 
   * @param request - GetOperationSubmitStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOperationSubmitStatusResponse
   */
  async getOperationSubmitStatusWithOptions(request: GetOperationSubmitStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetOperationSubmitStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.env)) {
      query["Env"] = request.env;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOperationSubmitStatus",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOperationSubmitStatusResponse>(await this.callApi(params, req, runtime), new GetOperationSubmitStatusResponse({}));
  }

  /**
   * 查询补数据提交的状态
   * 
   * @param request - GetOperationSubmitStatusRequest
   * @returns GetOperationSubmitStatusResponse
   */
  async getOperationSubmitStatus(request: GetOperationSubmitStatusRequest): Promise<GetOperationSubmitStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOperationSubmitStatusWithOptions(request, runtime);
  }

  /**
   * 查询脚本的实例信息, 包括实例状态、运行时间等信息.
   * 
   * @param request - GetPhysicalInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPhysicalInstanceResponse
   */
  async getPhysicalInstanceWithOptions(request: GetPhysicalInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetPhysicalInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.env)) {
      query["Env"] = request.env;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPhysicalInstance",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPhysicalInstanceResponse>(await this.callApi(params, req, runtime), new GetPhysicalInstanceResponse({}));
  }

  /**
   * 查询脚本的实例信息, 包括实例状态、运行时间等信息.
   * 
   * @param request - GetPhysicalInstanceRequest
   * @returns GetPhysicalInstanceResponse
   */
  async getPhysicalInstance(request: GetPhysicalInstanceRequest): Promise<GetPhysicalInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPhysicalInstanceWithOptions(request, runtime);
  }

  /**
   * 获取实例执行的日志，如果实例重跑了多次，则会有多条日志
   * 
   * @param request - GetPhysicalInstanceLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPhysicalInstanceLogResponse
   */
  async getPhysicalInstanceLogWithOptions(request: GetPhysicalInstanceLogRequest, runtime: $Util.RuntimeOptions): Promise<GetPhysicalInstanceLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.env)) {
      query["Env"] = request.env;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPhysicalInstanceLog",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPhysicalInstanceLogResponse>(await this.callApi(params, req, runtime), new GetPhysicalInstanceLogResponse({}));
  }

  /**
   * 获取实例执行的日志，如果实例重跑了多次，则会有多条日志
   * 
   * @param request - GetPhysicalInstanceLogRequest
   * @returns GetPhysicalInstanceLogResponse
   */
  async getPhysicalInstanceLog(request: GetPhysicalInstanceLogRequest): Promise<GetPhysicalInstanceLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPhysicalInstanceLogWithOptions(request, runtime);
  }

  /**
   * 查询物理调度节点。
   * 
   * @param request - GetPhysicalNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPhysicalNodeResponse
   */
  async getPhysicalNodeWithOptions(request: GetPhysicalNodeRequest, runtime: $Util.RuntimeOptions): Promise<GetPhysicalNodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.env)) {
      query["Env"] = request.env;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPhysicalNode",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPhysicalNodeResponse>(await this.callApi(params, req, runtime), new GetPhysicalNodeResponse({}));
  }

  /**
   * 查询物理调度节点。
   * 
   * @param request - GetPhysicalNodeRequest
   * @returns GetPhysicalNodeResponse
   */
  async getPhysicalNode(request: GetPhysicalNodeRequest): Promise<GetPhysicalNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPhysicalNodeWithOptions(request, runtime);
  }

  /**
   * 根据输出名查询对应的物理节点。
   * 
   * @param request - GetPhysicalNodeByOutputNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPhysicalNodeByOutputNameResponse
   */
  async getPhysicalNodeByOutputNameWithOptions(request: GetPhysicalNodeByOutputNameRequest, runtime: $Util.RuntimeOptions): Promise<GetPhysicalNodeByOutputNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.env)) {
      query["Env"] = request.env;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.outputName)) {
      query["OutputName"] = request.outputName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPhysicalNodeByOutputName",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPhysicalNodeByOutputNameResponse>(await this.callApi(params, req, runtime), new GetPhysicalNodeByOutputNameResponse({}));
  }

  /**
   * 根据输出名查询对应的物理节点。
   * 
   * @param request - GetPhysicalNodeByOutputNameRequest
   * @returns GetPhysicalNodeByOutputNameResponse
   */
  async getPhysicalNodeByOutputName(request: GetPhysicalNodeByOutputNameRequest): Promise<GetPhysicalNodeByOutputNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPhysicalNodeByOutputNameWithOptions(request, runtime);
  }

  /**
   * 查询调度节点代码内容。
   * 
   * @param request - GetPhysicalNodeContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPhysicalNodeContentResponse
   */
  async getPhysicalNodeContentWithOptions(request: GetPhysicalNodeContentRequest, runtime: $Util.RuntimeOptions): Promise<GetPhysicalNodeContentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.env)) {
      query["Env"] = request.env;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPhysicalNodeContent",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPhysicalNodeContentResponse>(await this.callApi(params, req, runtime), new GetPhysicalNodeContentResponse({}));
  }

  /**
   * 查询调度节点代码内容。
   * 
   * @param request - GetPhysicalNodeContentRequest
   * @returns GetPhysicalNodeContentResponse
   */
  async getPhysicalNodeContent(request: GetPhysicalNodeContentRequest): Promise<GetPhysicalNodeContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPhysicalNodeContentWithOptions(request, runtime);
  }

  /**
   * 查询节点的操作日志。
   * 
   * @param request - GetPhysicalNodeOperationLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPhysicalNodeOperationLogResponse
   */
  async getPhysicalNodeOperationLogWithOptions(request: GetPhysicalNodeOperationLogRequest, runtime: $Util.RuntimeOptions): Promise<GetPhysicalNodeOperationLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.env)) {
      query["Env"] = request.env;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPhysicalNodeOperationLog",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPhysicalNodeOperationLogResponse>(await this.callApi(params, req, runtime), new GetPhysicalNodeOperationLogResponse({}));
  }

  /**
   * 查询节点的操作日志。
   * 
   * @param request - GetPhysicalNodeOperationLogRequest
   * @returns GetPhysicalNodeOperationLogResponse
   */
  async getPhysicalNodeOperationLog(request: GetPhysicalNodeOperationLogRequest): Promise<GetPhysicalNodeOperationLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPhysicalNodeOperationLogWithOptions(request, runtime);
  }

  /**
   * 获取项目生产账号
   * 
   * @param request - GetProjectProduceUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectProduceUserResponse
   */
  async getProjectProduceUserWithOptions(request: GetProjectProduceUserRequest, runtime: $Util.RuntimeOptions): Promise<GetProjectProduceUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetProjectProduceUser",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetProjectProduceUserResponse>(await this.callApi(params, req, runtime), new GetProjectProduceUserResponse({}));
  }

  /**
   * 获取项目生产账号
   * 
   * @param request - GetProjectProduceUserRequest
   * @returns GetProjectProduceUserResponse
   */
  async getProjectProduceUser(request: GetProjectProduceUserRequest): Promise<GetProjectProduceUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProjectProduceUserWithOptions(request, runtime);
  }

  /**
   * 根据集群ID获取集群版本
   * 
   * @param request - GetQueueEngineVersionByEnvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQueueEngineVersionByEnvResponse
   */
  async getQueueEngineVersionByEnvWithOptions(request: GetQueueEngineVersionByEnvRequest, runtime: $Util.RuntimeOptions): Promise<GetQueueEngineVersionByEnvResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.env)) {
      query["Env"] = request.env;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    if (!Util.isUnset(request.streamBatchMode)) {
      query["StreamBatchMode"] = request.streamBatchMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetQueueEngineVersionByEnv",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQueueEngineVersionByEnvResponse>(await this.callApi(params, req, runtime), new GetQueueEngineVersionByEnvResponse({}));
  }

  /**
   * 根据集群ID获取集群版本
   * 
   * @param request - GetQueueEngineVersionByEnvRequest
   * @returns GetQueueEngineVersionByEnvResponse
   */
  async getQueueEngineVersionByEnv(request: GetQueueEngineVersionByEnvRequest): Promise<GetQueueEngineVersionByEnvResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQueueEngineVersionByEnvWithOptions(request, runtime);
  }

  /**
   * 获取补数据工作流所有业务日期的Dagrun信息。
   * 
   * @param request - GetSupplementDagrunRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSupplementDagrunResponse
   */
  async getSupplementDagrunWithOptions(request: GetSupplementDagrunRequest, runtime: $Util.RuntimeOptions): Promise<GetSupplementDagrunResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.env)) {
      query["Env"] = request.env;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.supplementId)) {
      query["SupplementId"] = request.supplementId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSupplementDagrun",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSupplementDagrunResponse>(await this.callApi(params, req, runtime), new GetSupplementDagrunResponse({}));
  }

  /**
   * 获取补数据工作流所有业务日期的Dagrun信息。
   * 
   * @param request - GetSupplementDagrunRequest
   * @returns GetSupplementDagrunResponse
   */
  async getSupplementDagrun(request: GetSupplementDagrunRequest): Promise<GetSupplementDagrunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSupplementDagrunWithOptions(request, runtime);
  }

  /**
   * 列出补数据工作流下具体一个业务日期的所有节点的实例。
   * 
   * @param request - GetSupplementDagrunInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSupplementDagrunInstanceResponse
   */
  async getSupplementDagrunInstanceWithOptions(request: GetSupplementDagrunInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetSupplementDagrunInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dagrunId)) {
      query["DagrunId"] = request.dagrunId;
    }

    if (!Util.isUnset(request.env)) {
      query["Env"] = request.env;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSupplementDagrunInstance",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSupplementDagrunInstanceResponse>(await this.callApi(params, req, runtime), new GetSupplementDagrunInstanceResponse({}));
  }

  /**
   * 列出补数据工作流下具体一个业务日期的所有节点的实例。
   * 
   * @param request - GetSupplementDagrunInstanceRequest
   * @returns GetSupplementDagrunInstanceResponse
   */
  async getSupplementDagrunInstance(request: GetSupplementDagrunInstanceRequest): Promise<GetSupplementDagrunInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSupplementDagrunInstanceWithOptions(request, runtime);
  }

  /**
   * 通过用户原始Id（如阿里云Id）获取用户详情
   * 
   * @param request - GetUserBySourceIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserBySourceIdResponse
   */
  async getUserBySourceIdWithOptions(request: GetUserBySourceIdRequest, runtime: $Util.RuntimeOptions): Promise<GetUserBySourceIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserBySourceId",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserBySourceIdResponse>(await this.callApi(params, req, runtime), new GetUserBySourceIdResponse({}));
  }

  /**
   * 通过用户原始Id（如阿里云Id）获取用户详情
   * 
   * @param request - GetUserBySourceIdRequest
   * @returns GetUserBySourceIdResponse
   */
  async getUserBySourceId(request: GetUserBySourceIdRequest): Promise<GetUserBySourceIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserBySourceIdWithOptions(request, runtime);
  }

  /**
   * 获取用户组详情.
   * 
   * @param request - GetUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserGroupResponse
   */
  async getUserGroupWithOptions(request: GetUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetUserGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserGroup",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserGroupResponse>(await this.callApi(params, req, runtime), new GetUserGroupResponse({}));
  }

  /**
   * 获取用户组详情.
   * 
   * @param request - GetUserGroupRequest
   * @returns GetUserGroupResponse
   */
  async getUserGroup(request: GetUserGroupRequest): Promise<GetUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserGroupWithOptions(request, runtime);
  }

  /**
   * 获取用户详情
   * 
   * @param tmpReq - GetUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUsersResponse
   */
  async getUsersWithOptions(tmpReq: GetUsersRequest, runtime: $Util.RuntimeOptions): Promise<GetUsersResponse> {
    Util.validateModel(tmpReq);
    let request = new GetUsersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.userIdList)) {
      request.userIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userIdList, "UserIdList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userIdListShrink)) {
      body["UserIdList"] = request.userIdListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetUsers",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUsersResponse>(await this.callApi(params, req, runtime), new GetUsersResponse({}));
  }

  /**
   * 获取用户详情
   * 
   * @param request - GetUsersRequest
   * @returns GetUsersResponse
   */
  async getUsers(request: GetUsersRequest): Promise<GetUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUsersWithOptions(request, runtime);
  }

  /**
   * 通过资源点对用户授权
   * 
   * @param tmpReq - GrantResourcePermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantResourcePermissionResponse
   */
  async grantResourcePermissionWithOptions(tmpReq: GrantResourcePermissionRequest, runtime: $Util.RuntimeOptions): Promise<GrantResourcePermissionResponse> {
    Util.validateModel(tmpReq);
    let request = new GrantResourcePermissionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.grantCommand)) {
      request.grantCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.grantCommand, "GrantCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.grantCommandShrink)) {
      body["GrantCommand"] = request.grantCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GrantResourcePermission",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GrantResourcePermissionResponse>(await this.callApi(params, req, runtime), new GrantResourcePermissionResponse({}));
  }

  /**
   * 通过资源点对用户授权
   * 
   * @param request - GrantResourcePermissionRequest
   * @returns GrantResourcePermissionResponse
   */
  async grantResourcePermission(request: GrantResourcePermissionRequest): Promise<GrantResourcePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantResourcePermissionWithOptions(request, runtime);
  }

  /**
   * 获取用户角色列表
   * 
   * @param request - ListAddableRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAddableRolesResponse
   */
  async listAddableRolesWithOptions(request: ListAddableRolesRequest, runtime: $Util.RuntimeOptions): Promise<ListAddableRolesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAddableRoles",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAddableRolesResponse>(await this.callApi(params, req, runtime), new ListAddableRolesResponse({}));
  }

  /**
   * 获取用户角色列表
   * 
   * @param request - ListAddableRolesRequest
   * @returns ListAddableRolesResponse
   */
  async listAddableRoles(request: ListAddableRolesRequest): Promise<ListAddableRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAddableRolesWithOptions(request, runtime);
  }

  /**
   * 获取可加入租户成员列表的用户
   * 
   * @param tmpReq - ListAddableUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAddableUsersResponse
   */
  async listAddableUsersWithOptions(tmpReq: ListAddableUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListAddableUsersResponse> {
    Util.validateModel(tmpReq);
    let request = new ListAddableUsersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListAddableUsers",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAddableUsersResponse>(await this.callApi(params, req, runtime), new ListAddableUsersResponse({}));
  }

  /**
   * 获取可加入租户成员列表的用户
   * 
   * @param request - ListAddableUsersRequest
   * @returns ListAddableUsersResponse
   */
  async listAddableUsers(request: ListAddableUsersRequest): Promise<ListAddableUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAddableUsersWithOptions(request, runtime);
  }

  /**
   * 根据条件查询多个告警事件
   * 
   * @param tmpReq - ListAlertEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlertEventsResponse
   */
  async listAlertEventsWithOptions(tmpReq: ListAlertEventsRequest, runtime: $Util.RuntimeOptions): Promise<ListAlertEventsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListAlertEventsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListAlertEvents",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAlertEventsResponse>(await this.callApi(params, req, runtime), new ListAlertEventsResponse({}));
  }

  /**
   * 根据条件查询多个告警事件
   * 
   * @param request - ListAlertEventsRequest
   * @returns ListAlertEventsResponse
   */
  async listAlertEvents(request: ListAlertEventsRequest): Promise<ListAlertEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAlertEventsWithOptions(request, runtime);
  }

  /**
   * 根据条件查询多个推送记录
   * 
   * @param tmpReq - ListAlertNotificationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlertNotificationsResponse
   */
  async listAlertNotificationsWithOptions(tmpReq: ListAlertNotificationsRequest, runtime: $Util.RuntimeOptions): Promise<ListAlertNotificationsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListAlertNotificationsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListAlertNotifications",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAlertNotificationsResponse>(await this.callApi(params, req, runtime), new ListAlertNotificationsResponse({}));
  }

  /**
   * 根据条件查询多个推送记录
   * 
   * @param request - ListAlertNotificationsRequest
   * @returns ListAlertNotificationsResponse
   */
  async listAlertNotifications(request: ListAlertNotificationsRequest): Promise<ListAlertNotificationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAlertNotificationsWithOptions(request, runtime);
  }

  /**
   * 查询业务实体列表。
   * 
   * @param tmpReq - ListBizEntitiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBizEntitiesResponse
   */
  async listBizEntitiesWithOptions(tmpReq: ListBizEntitiesRequest, runtime: $Util.RuntimeOptions): Promise<ListBizEntitiesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListBizEntitiesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListBizEntities",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListBizEntitiesResponse>(await this.callApi(params, req, runtime), new ListBizEntitiesResponse({}));
  }

  /**
   * 查询业务实体列表。
   * 
   * @param request - ListBizEntitiesRequest
   * @returns ListBizEntitiesResponse
   */
  async listBizEntities(request: ListBizEntitiesRequest): Promise<ListBizEntitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBizEntitiesWithOptions(request, runtime);
  }

  /**
   * 获取当前租户下的所有数据板块
   * 
   * @param request - ListBizUnitsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBizUnitsResponse
   */
  async listBizUnitsWithOptions(request: ListBizUnitsRequest, runtime: $Util.RuntimeOptions): Promise<ListBizUnitsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListBizUnits",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListBizUnitsResponse>(await this.callApi(params, req, runtime), new ListBizUnitsResponse({}));
  }

  /**
   * 获取当前租户下的所有数据板块
   * 
   * @param request - ListBizUnitsRequest
   * @returns ListBizUnitsResponse
   */
  async listBizUnits(request: ListBizUnitsRequest): Promise<ListBizUnitsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBizUnitsWithOptions(request, runtime);
  }

  /**
   * 获取主题域列表。
   * 
   * @param tmpReq - ListDataDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataDomainsResponse
   */
  async listDataDomainsWithOptions(tmpReq: ListDataDomainsRequest, runtime: $Util.RuntimeOptions): Promise<ListDataDomainsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListDataDomainsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDataDomains",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDataDomainsResponse>(await this.callApi(params, req, runtime), new ListDataDomainsResponse({}));
  }

  /**
   * 获取主题域列表。
   * 
   * @param request - ListDataDomainsRequest
   * @returns ListDataDomainsResponse
   */
  async listDataDomains(request: ListDataDomainsRequest): Promise<ListDataDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataDomainsWithOptions(request, runtime);
  }

  /**
   * 搜索数据源，所属结果包含数据源配置项
   * 
   * @param tmpReq - ListDataSourceWithConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourceWithConfigResponse
   */
  async listDataSourceWithConfigWithOptions(tmpReq: ListDataSourceWithConfigRequest, runtime: $Util.RuntimeOptions): Promise<ListDataSourceWithConfigResponse> {
    Util.validateModel(tmpReq);
    let request = new ListDataSourceWithConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDataSourceWithConfig",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDataSourceWithConfigResponse>(await this.callApi(params, req, runtime), new ListDataSourceWithConfigResponse({}));
  }

  /**
   * 搜索数据源，所属结果包含数据源配置项
   * 
   * @param request - ListDataSourceWithConfigRequest
   * @returns ListDataSourceWithConfigResponse
   */
  async listDataSourceWithConfig(request: ListDataSourceWithConfigRequest): Promise<ListDataSourceWithConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataSourceWithConfigWithOptions(request, runtime);
  }

  /**
   * 遍历菜单树目录文件。
   * 
   * @param tmpReq - ListFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFilesResponse
   */
  async listFilesWithOptions(tmpReq: ListFilesRequest, runtime: $Util.RuntimeOptions): Promise<ListFilesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListFilesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListFiles",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFilesResponse>(await this.callApi(params, req, runtime), new ListFilesResponse({}));
  }

  /**
   * 遍历菜单树目录文件。
   * 
   * @param request - ListFilesRequest
   * @returns ListFilesResponse
   */
  async listFiles(request: ListFilesRequest): Promise<ListFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFilesWithOptions(request, runtime);
  }

  /**
   * 分页查询实例。
   * 
   * @param tmpReq - ListInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(tmpReq: ListInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!Util.isUnset(request.env)) {
      query["Env"] = request.env;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListInstances",
      version: "2023-06-30",
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
   * 分页查询实例。
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  /**
   * 查询节点下游，创建补数据工作流时可以作为数据参考
   * 
   * @param tmpReq - ListNodeDownStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodeDownStreamResponse
   */
  async listNodeDownStreamWithOptions(tmpReq: ListNodeDownStreamRequest, runtime: $Util.RuntimeOptions): Promise<ListNodeDownStreamResponse> {
    Util.validateModel(tmpReq);
    let request = new ListNodeDownStreamShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!Util.isUnset(request.env)) {
      query["Env"] = request.env;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListNodeDownStream",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNodeDownStreamResponse>(await this.callApi(params, req, runtime), new ListNodeDownStreamResponse({}));
  }

  /**
   * 查询节点下游，创建补数据工作流时可以作为数据参考
   * 
   * @param request - ListNodeDownStreamRequest
   * @returns ListNodeDownStreamResponse
   */
  async listNodeDownStream(request: ListNodeDownStreamRequest): Promise<ListNodeDownStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodeDownStreamWithOptions(request, runtime);
  }

  /**
   * 查询调度节点列表。
   * 
   * @param tmpReq - ListNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodesResponse
   */
  async listNodesWithOptions(tmpReq: ListNodesRequest, runtime: $Util.RuntimeOptions): Promise<ListNodesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!Util.isUnset(request.env)) {
      query["Env"] = request.env;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListNodes",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNodesResponse>(await this.callApi(params, req, runtime), new ListNodesResponse({}));
  }

  /**
   * 查询调度节点列表。
   * 
   * @param request - ListNodesRequest
   * @returns ListNodesResponse
   */
  async listNodes(request: ListNodesRequest): Promise<ListNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodesWithOptions(request, runtime);
  }

  /**
   * 分页获取发布记录列表
   * 
   * @param tmpReq - ListPublishRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPublishRecordsResponse
   */
  async listPublishRecordsWithOptions(tmpReq: ListPublishRecordsRequest, runtime: $Util.RuntimeOptions): Promise<ListPublishRecordsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListPublishRecordsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListPublishRecords",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPublishRecordsResponse>(await this.callApi(params, req, runtime), new ListPublishRecordsResponse({}));
  }

  /**
   * 分页获取发布记录列表
   * 
   * @param request - ListPublishRecordsRequest
   * @returns ListPublishRecordsResponse
   */
  async listPublishRecords(request: ListPublishRecordsRequest): Promise<ListPublishRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPublishRecordsWithOptions(request, runtime);
  }

  /**
   * 分页获取权限操作列表
   * 
   * @param tmpReq - ListResourcePermissionOperationLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourcePermissionOperationLogResponse
   */
  async listResourcePermissionOperationLogWithOptions(tmpReq: ListResourcePermissionOperationLogRequest, runtime: $Util.RuntimeOptions): Promise<ListResourcePermissionOperationLogResponse> {
    Util.validateModel(tmpReq);
    let request = new ListResourcePermissionOperationLogShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListResourcePermissionOperationLog",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListResourcePermissionOperationLogResponse>(await this.callApi(params, req, runtime), new ListResourcePermissionOperationLogResponse({}));
  }

  /**
   * 分页获取权限操作列表
   * 
   * @param request - ListResourcePermissionOperationLogRequest
   * @returns ListResourcePermissionOperationLogResponse
   */
  async listResourcePermissionOperationLog(request: ListResourcePermissionOperationLogRequest): Promise<ListResourcePermissionOperationLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourcePermissionOperationLogWithOptions(request, runtime);
  }

  /**
   * 分页获取权限记录列表
   * 
   * @param tmpReq - ListResourcePermissionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourcePermissionsResponse
   */
  async listResourcePermissionsWithOptions(tmpReq: ListResourcePermissionsRequest, runtime: $Util.RuntimeOptions): Promise<ListResourcePermissionsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListResourcePermissionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListResourcePermissions",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListResourcePermissionsResponse>(await this.callApi(params, req, runtime), new ListResourcePermissionsResponse({}));
  }

  /**
   * 分页获取权限记录列表
   * 
   * @param request - ListResourcePermissionsRequest
   * @returns ListResourcePermissionsResponse
   */
  async listResourcePermissions(request: ListResourcePermissionsRequest): Promise<ListResourcePermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourcePermissionsWithOptions(request, runtime);
  }

  /**
   * 分页获取待发布记录列表
   * 
   * @param tmpReq - ListSubmitRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSubmitRecordsResponse
   */
  async listSubmitRecordsWithOptions(tmpReq: ListSubmitRecordsRequest, runtime: $Util.RuntimeOptions): Promise<ListSubmitRecordsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListSubmitRecordsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListSubmitRecords",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSubmitRecordsResponse>(await this.callApi(params, req, runtime), new ListSubmitRecordsResponse({}));
  }

  /**
   * 分页获取待发布记录列表
   * 
   * @param request - ListSubmitRecordsRequest
   * @returns ListSubmitRecordsResponse
   */
  async listSubmitRecords(request: ListSubmitRecordsRequest): Promise<ListSubmitRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSubmitRecordsWithOptions(request, runtime);
  }

  /**
   * 查询租户成员列表
   * 
   * @param tmpReq - ListTenantMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTenantMembersResponse
   */
  async listTenantMembersWithOptions(tmpReq: ListTenantMembersRequest, runtime: $Util.RuntimeOptions): Promise<ListTenantMembersResponse> {
    Util.validateModel(tmpReq);
    let request = new ListTenantMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListTenantMembers",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTenantMembersResponse>(await this.callApi(params, req, runtime), new ListTenantMembersResponse({}));
  }

  /**
   * 查询租户成员列表
   * 
   * @param request - ListTenantMembersRequest
   * @returns ListTenantMembersResponse
   */
  async listTenantMembers(request: ListTenantMembersRequest): Promise<ListTenantMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTenantMembersWithOptions(request, runtime);
  }

  /**
   * 用户组成员列表分页查询.
   * 
   * @param tmpReq - ListUserGroupMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserGroupMembersResponse
   */
  async listUserGroupMembersWithOptions(tmpReq: ListUserGroupMembersRequest, runtime: $Util.RuntimeOptions): Promise<ListUserGroupMembersResponse> {
    Util.validateModel(tmpReq);
    let request = new ListUserGroupMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListUserGroupMembers",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserGroupMembersResponse>(await this.callApi(params, req, runtime), new ListUserGroupMembersResponse({}));
  }

  /**
   * 用户组成员列表分页查询.
   * 
   * @param request - ListUserGroupMembersRequest
   * @returns ListUserGroupMembersResponse
   */
  async listUserGroupMembers(request: ListUserGroupMembersRequest): Promise<ListUserGroupMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserGroupMembersWithOptions(request, runtime);
  }

  /**
   * 用户组列表分页查询.
   * 
   * @param tmpReq - ListUserGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserGroupsResponse
   */
  async listUserGroupsWithOptions(tmpReq: ListUserGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserGroupsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListUserGroupsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.listQuery)) {
      request.listQueryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listQuery, "ListQuery", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.listQueryShrink)) {
      body["ListQuery"] = request.listQueryShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListUserGroups",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserGroupsResponse>(await this.callApi(params, req, runtime), new ListUserGroupsResponse({}));
  }

  /**
   * 用户组列表分页查询.
   * 
   * @param request - ListUserGroupsRequest
   * @returns ListUserGroupsResponse
   */
  async listUserGroups(request: ListUserGroupsRequest): Promise<ListUserGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserGroupsWithOptions(request, runtime);
  }

  /**
   * 下线离线计算任务。
   * 
   * @param request - OfflineBatchTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OfflineBatchTaskResponse
   */
  async offlineBatchTaskWithOptions(request: OfflineBatchTaskRequest, runtime: $Util.RuntimeOptions): Promise<OfflineBatchTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OfflineBatchTask",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OfflineBatchTaskResponse>(await this.callApi(params, req, runtime), new OfflineBatchTaskResponse({}));
  }

  /**
   * 下线离线计算任务。
   * 
   * @param request - OfflineBatchTaskRequest
   * @returns OfflineBatchTaskResponse
   */
  async offlineBatchTask(request: OfflineBatchTaskRequest): Promise<OfflineBatchTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.offlineBatchTaskWithOptions(request, runtime);
  }

  /**
   * 下线业务实体、
   * 
   * @param tmpReq - OfflineBizEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OfflineBizEntityResponse
   */
  async offlineBizEntityWithOptions(tmpReq: OfflineBizEntityRequest, runtime: $Util.RuntimeOptions): Promise<OfflineBizEntityResponse> {
    Util.validateModel(tmpReq);
    let request = new OfflineBizEntityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.offlineCommand)) {
      request.offlineCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.offlineCommand, "OfflineCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.offlineCommandShrink)) {
      body["OfflineCommand"] = request.offlineCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "OfflineBizEntity",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OfflineBizEntityResponse>(await this.callApi(params, req, runtime), new OfflineBizEntityResponse({}));
  }

  /**
   * 下线业务实体、
   * 
   * @param request - OfflineBizEntityRequest
   * @returns OfflineBizEntityResponse
   */
  async offlineBizEntity(request: OfflineBizEntityRequest): Promise<OfflineBizEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.offlineBizEntityWithOptions(request, runtime);
  }

  /**
   * 上线业务实体。
   * 
   * @param tmpReq - OnlineBizEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnlineBizEntityResponse
   */
  async onlineBizEntityWithOptions(tmpReq: OnlineBizEntityRequest, runtime: $Util.RuntimeOptions): Promise<OnlineBizEntityResponse> {
    Util.validateModel(tmpReq);
    let request = new OnlineBizEntityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.onlineCommand)) {
      request.onlineCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.onlineCommand, "OnlineCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.onlineCommandShrink)) {
      body["OnlineCommand"] = request.onlineCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "OnlineBizEntity",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnlineBizEntityResponse>(await this.callApi(params, req, runtime), new OnlineBizEntityResponse({}));
  }

  /**
   * 上线业务实体。
   * 
   * @param request - OnlineBizEntityRequest
   * @returns OnlineBizEntityResponse
   */
  async onlineBizEntity(request: OnlineBizEntityRequest): Promise<OnlineBizEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onlineBizEntityWithOptions(request, runtime);
  }

  /**
   * 运维实例。
   * 
   * @param tmpReq - OperateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateInstanceResponse
   */
  async operateInstanceWithOptions(tmpReq: OperateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<OperateInstanceResponse> {
    Util.validateModel(tmpReq);
    let request = new OperateInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.operateCommand)) {
      request.operateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operateCommand, "OperateCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.env)) {
      query["Env"] = request.env;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operateCommandShrink)) {
      body["OperateCommand"] = request.operateCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "OperateInstance",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OperateInstanceResponse>(await this.callApi(params, req, runtime), new OperateInstanceResponse({}));
  }

  /**
   * 运维实例。
   * 
   * @param request - OperateInstanceRequest
   * @returns OperateInstanceResponse
   */
  async operateInstance(request: OperateInstanceRequest): Promise<OperateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operateInstanceWithOptions(request, runtime);
  }

  /**
   * 解析离线计算任务的逻辑表依赖，注意解析结果上游依赖信息中可能包含自依赖节点（上游节点ID和解析代码的任务节点ID相同）需要用户自己进行处理。
   * 
   * @param tmpReq - ParseBatchTaskDependencyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ParseBatchTaskDependencyResponse
   */
  async parseBatchTaskDependencyWithOptions(tmpReq: ParseBatchTaskDependencyRequest, runtime: $Util.RuntimeOptions): Promise<ParseBatchTaskDependencyResponse> {
    Util.validateModel(tmpReq);
    let request = new ParseBatchTaskDependencyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.parseCommand)) {
      request.parseCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parseCommand, "ParseCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.parseCommandShrink)) {
      body["ParseCommand"] = request.parseCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ParseBatchTaskDependency",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ParseBatchTaskDependencyResponse>(await this.callApi(params, req, runtime), new ParseBatchTaskDependencyResponse({}));
  }

  /**
   * 解析离线计算任务的逻辑表依赖，注意解析结果上游依赖信息中可能包含自依赖节点（上游节点ID和解析代码的任务节点ID相同）需要用户自己进行处理。
   * 
   * @param request - ParseBatchTaskDependencyRequest
   * @returns ParseBatchTaskDependencyResponse
   */
  async parseBatchTaskDependency(request: ParseBatchTaskDependencyRequest): Promise<ParseBatchTaskDependencyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.parseBatchTaskDependencyWithOptions(request, runtime);
  }

  /**
   * 暂停物理节点调度。
   * 
   * @param tmpReq - PausePhysicalNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PausePhysicalNodeResponse
   */
  async pausePhysicalNodeWithOptions(tmpReq: PausePhysicalNodeRequest, runtime: $Util.RuntimeOptions): Promise<PausePhysicalNodeResponse> {
    Util.validateModel(tmpReq);
    let request = new PausePhysicalNodeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.pauseCommand)) {
      request.pauseCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.pauseCommand, "PauseCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.env)) {
      query["Env"] = request.env;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pauseCommandShrink)) {
      body["PauseCommand"] = request.pauseCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PausePhysicalNode",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PausePhysicalNodeResponse>(await this.callApi(params, req, runtime), new PausePhysicalNodeResponse({}));
  }

  /**
   * 暂停物理节点调度。
   * 
   * @param request - PausePhysicalNodeRequest
   * @returns PausePhysicalNodeResponse
   */
  async pausePhysicalNode(request: PausePhysicalNodeRequest): Promise<PausePhysicalNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pausePhysicalNodeWithOptions(request, runtime);
  }

  /**
   * 批量发布对象
   * 
   * @param tmpReq - PublishObjectListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishObjectListResponse
   */
  async publishObjectListWithOptions(tmpReq: PublishObjectListRequest, runtime: $Util.RuntimeOptions): Promise<PublishObjectListResponse> {
    Util.validateModel(tmpReq);
    let request = new PublishObjectListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.publishCommand)) {
      request.publishCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.publishCommand, "PublishCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.publishCommandShrink)) {
      body["PublishCommand"] = request.publishCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PublishObjectList",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PublishObjectListResponse>(await this.callApi(params, req, runtime), new PublishObjectListResponse({}));
  }

  /**
   * 批量发布对象
   * 
   * @param request - PublishObjectListRequest
   * @returns PublishObjectListResponse
   */
  async publishObjectList(request: PublishObjectListRequest): Promise<PublishObjectListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishObjectListWithOptions(request, runtime);
  }

  /**
   * 删除租户成员
   * 
   * @param tmpReq - RemoveTenantMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveTenantMemberResponse
   */
  async removeTenantMemberWithOptions(tmpReq: RemoveTenantMemberRequest, runtime: $Util.RuntimeOptions): Promise<RemoveTenantMemberResponse> {
    Util.validateModel(tmpReq);
    let request = new RemoveTenantMemberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.removeCommand)) {
      request.removeCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.removeCommand, "RemoveCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.removeCommandShrink)) {
      body["RemoveCommand"] = request.removeCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RemoveTenantMember",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveTenantMemberResponse>(await this.callApi(params, req, runtime), new RemoveTenantMemberResponse({}));
  }

  /**
   * 删除租户成员
   * 
   * @param request - RemoveTenantMemberRequest
   * @returns RemoveTenantMemberResponse
   */
  async removeTenantMember(request: RemoveTenantMemberRequest): Promise<RemoveTenantMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeTenantMemberWithOptions(request, runtime);
  }

  /**
   * 移除用户组成员.
   * 
   * @param tmpReq - RemoveUserGroupMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUserGroupMemberResponse
   */
  async removeUserGroupMemberWithOptions(tmpReq: RemoveUserGroupMemberRequest, runtime: $Util.RuntimeOptions): Promise<RemoveUserGroupMemberResponse> {
    Util.validateModel(tmpReq);
    let request = new RemoveUserGroupMemberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.removeCommand)) {
      request.removeCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.removeCommand, "RemoveCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.removeCommandShrink)) {
      body["RemoveCommand"] = request.removeCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RemoveUserGroupMember",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveUserGroupMemberResponse>(await this.callApi(params, req, runtime), new RemoveUserGroupMemberResponse({}));
  }

  /**
   * 移除用户组成员.
   * 
   * @param request - RemoveUserGroupMemberRequest
   * @returns RemoveUserGroupMemberResponse
   */
  async removeUserGroupMember(request: RemoveUserGroupMemberRequest): Promise<RemoveUserGroupMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUserGroupMemberWithOptions(request, runtime);
  }

  /**
   * 恢复物理节点调度。
   * 
   * @param tmpReq - ResumePhysicalNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumePhysicalNodeResponse
   */
  async resumePhysicalNodeWithOptions(tmpReq: ResumePhysicalNodeRequest, runtime: $Util.RuntimeOptions): Promise<ResumePhysicalNodeResponse> {
    Util.validateModel(tmpReq);
    let request = new ResumePhysicalNodeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resumeCommand)) {
      request.resumeCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resumeCommand, "ResumeCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.env)) {
      query["Env"] = request.env;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resumeCommandShrink)) {
      body["ResumeCommand"] = request.resumeCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ResumePhysicalNode",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResumePhysicalNodeResponse>(await this.callApi(params, req, runtime), new ResumePhysicalNodeResponse({}));
  }

  /**
   * 恢复物理节点调度。
   * 
   * @param request - ResumePhysicalNodeRequest
   * @returns ResumePhysicalNodeResponse
   */
  async resumePhysicalNode(request: ResumePhysicalNodeRequest): Promise<ResumePhysicalNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumePhysicalNodeWithOptions(request, runtime);
  }

  /**
   * 回收用户资源授权
   * 
   * @param tmpReq - RevokeResourcePermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeResourcePermissionResponse
   */
  async revokeResourcePermissionWithOptions(tmpReq: RevokeResourcePermissionRequest, runtime: $Util.RuntimeOptions): Promise<RevokeResourcePermissionResponse> {
    Util.validateModel(tmpReq);
    let request = new RevokeResourcePermissionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.revokeCommand)) {
      request.revokeCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.revokeCommand, "RevokeCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.revokeCommandShrink)) {
      body["RevokeCommand"] = request.revokeCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RevokeResourcePermission",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevokeResourcePermissionResponse>(await this.callApi(params, req, runtime), new RevokeResourcePermissionResponse({}));
  }

  /**
   * 回收用户资源授权
   * 
   * @param request - RevokeResourcePermissionRequest
   * @returns RevokeResourcePermissionResponse
   */
  async revokeResourcePermission(request: RevokeResourcePermissionRequest): Promise<RevokeResourcePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeResourcePermissionWithOptions(request, runtime);
  }

  /**
   * 终止即席查询任务。
   * 
   * @param request - StopAdHocTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopAdHocTaskResponse
   */
  async stopAdHocTaskWithOptions(request: StopAdHocTaskRequest, runtime: $Util.RuntimeOptions): Promise<StopAdHocTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopAdHocTask",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopAdHocTaskResponse>(await this.callApi(params, req, runtime), new StopAdHocTaskResponse({}));
  }

  /**
   * 终止即席查询任务。
   * 
   * @param request - StopAdHocTaskRequest
   * @returns StopAdHocTaskResponse
   */
  async stopAdHocTask(request: StopAdHocTaskRequest): Promise<StopAdHocTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopAdHocTaskWithOptions(request, runtime);
  }

  /**
   * 提交离线计算任务。
   * 
   * @param tmpReq - SubmitBatchTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitBatchTaskResponse
   */
  async submitBatchTaskWithOptions(tmpReq: SubmitBatchTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitBatchTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new SubmitBatchTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.submitCommand)) {
      request.submitCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.submitCommand, "SubmitCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.submitCommandShrink)) {
      body["SubmitCommand"] = request.submitCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitBatchTask",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitBatchTaskResponse>(await this.callApi(params, req, runtime), new SubmitBatchTaskResponse({}));
  }

  /**
   * 提交离线计算任务。
   * 
   * @param request - SubmitBatchTaskRequest
   * @returns SubmitBatchTaskResponse
   */
  async submitBatchTask(request: SubmitBatchTaskRequest): Promise<SubmitBatchTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitBatchTaskWithOptions(request, runtime);
  }

  /**
   * 编辑即席查询文件。
   * 
   * @param tmpReq - UpdateAdHocFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAdHocFileResponse
   */
  async updateAdHocFileWithOptions(tmpReq: UpdateAdHocFileRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAdHocFileResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateAdHocFileShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAdHocFile",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAdHocFileResponse>(await this.callApi(params, req, runtime), new UpdateAdHocFileResponse({}));
  }

  /**
   * 编辑即席查询文件。
   * 
   * @param request - UpdateAdHocFileRequest
   * @returns UpdateAdHocFileResponse
   */
  async updateAdHocFile(request: UpdateAdHocFileRequest): Promise<UpdateAdHocFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAdHocFileWithOptions(request, runtime);
  }

  /**
   * 编辑离线计算任务。
   * 
   * @param tmpReq - UpdateBatchTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBatchTaskResponse
   */
  async updateBatchTaskWithOptions(tmpReq: UpdateBatchTaskRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBatchTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateBatchTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateBatchTask",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateBatchTaskResponse>(await this.callApi(params, req, runtime), new UpdateBatchTaskResponse({}));
  }

  /**
   * 编辑离线计算任务。
   * 
   * @param request - UpdateBatchTaskRequest
   * @returns UpdateBatchTaskResponse
   */
  async updateBatchTask(request: UpdateBatchTaskRequest): Promise<UpdateBatchTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBatchTaskWithOptions(request, runtime);
  }

  /**
   * 编辑离线计算任务自定义血缘。
   * 
   * @param tmpReq - UpdateBatchTaskUdfLineagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBatchTaskUdfLineagesResponse
   */
  async updateBatchTaskUdfLineagesWithOptions(tmpReq: UpdateBatchTaskUdfLineagesRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBatchTaskUdfLineagesResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateBatchTaskUdfLineagesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateBatchTaskUdfLineages",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateBatchTaskUdfLineagesResponse>(await this.callApi(params, req, runtime), new UpdateBatchTaskUdfLineagesResponse({}));
  }

  /**
   * 编辑离线计算任务自定义血缘。
   * 
   * @param request - UpdateBatchTaskUdfLineagesRequest
   * @returns UpdateBatchTaskUdfLineagesResponse
   */
  async updateBatchTaskUdfLineages(request: UpdateBatchTaskUdfLineagesRequest): Promise<UpdateBatchTaskUdfLineagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBatchTaskUdfLineagesWithOptions(request, runtime);
  }

  /**
   * 更新业务实体、
   * 
   * @param tmpReq - UpdateBizEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBizEntityResponse
   */
  async updateBizEntityWithOptions(tmpReq: UpdateBizEntityRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBizEntityResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateBizEntityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateBizEntity",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateBizEntityResponse>(await this.callApi(params, req, runtime), new UpdateBizEntityResponse({}));
  }

  /**
   * 更新业务实体、
   * 
   * @param request - UpdateBizEntityRequest
   * @returns UpdateBizEntityResponse
   */
  async updateBizEntity(request: UpdateBizEntityRequest): Promise<UpdateBizEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBizEntityWithOptions(request, runtime);
  }

  /**
   * 更新数据板块。
   * 
   * @param tmpReq - UpdateBizUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBizUnitResponse
   */
  async updateBizUnitWithOptions(tmpReq: UpdateBizUnitRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBizUnitResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateBizUnitShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateBizUnit",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateBizUnitResponse>(await this.callApi(params, req, runtime), new UpdateBizUnitResponse({}));
  }

  /**
   * 更新数据板块。
   * 
   * @param request - UpdateBizUnitRequest
   * @returns UpdateBizUnitResponse
   */
  async updateBizUnit(request: UpdateBizUnitRequest): Promise<UpdateBizUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBizUnitWithOptions(request, runtime);
  }

  /**
   * 更新主题域。
   * 
   * @param tmpReq - UpdateDataDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataDomainResponse
   */
  async updateDataDomainWithOptions(tmpReq: UpdateDataDomainRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDataDomainResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateDataDomainShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDataDomain",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDataDomainResponse>(await this.callApi(params, req, runtime), new UpdateDataDomainResponse({}));
  }

  /**
   * 更新主题域。
   * 
   * @param request - UpdateDataDomainRequest
   * @returns UpdateDataDomainResponse
   */
  async updateDataDomain(request: UpdateDataDomainRequest): Promise<UpdateDataDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDataDomainWithOptions(request, runtime);
  }

  /**
   * 编辑数据源基本信息
   * 
   * @param tmpReq - UpdateDataSourceBasicInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataSourceBasicInfoResponse
   */
  async updateDataSourceBasicInfoWithOptions(tmpReq: UpdateDataSourceBasicInfoRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDataSourceBasicInfoResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateDataSourceBasicInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDataSourceBasicInfo",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDataSourceBasicInfoResponse>(await this.callApi(params, req, runtime), new UpdateDataSourceBasicInfoResponse({}));
  }

  /**
   * 编辑数据源基本信息
   * 
   * @param request - UpdateDataSourceBasicInfoRequest
   * @returns UpdateDataSourceBasicInfoResponse
   */
  async updateDataSourceBasicInfo(request: UpdateDataSourceBasicInfoRequest): Promise<UpdateDataSourceBasicInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDataSourceBasicInfoWithOptions(request, runtime);
  }

  /**
   * 编辑数据源连接配置项
   * 
   * @param tmpReq - UpdateDataSourceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataSourceConfigResponse
   */
  async updateDataSourceConfigWithOptions(tmpReq: UpdateDataSourceConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDataSourceConfigResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateDataSourceConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDataSourceConfig",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDataSourceConfigResponse>(await this.callApi(params, req, runtime), new UpdateDataSourceConfigResponse({}));
  }

  /**
   * 编辑数据源连接配置项
   * 
   * @param request - UpdateDataSourceConfigRequest
   * @returns UpdateDataSourceConfigResponse
   */
  async updateDataSourceConfig(request: UpdateDataSourceConfigRequest): Promise<UpdateDataSourceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDataSourceConfigWithOptions(request, runtime);
  }

  /**
   * 修改菜单树文件所在目录
   * 
   * @param request - UpdateFileDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFileDirectoryResponse
   */
  async updateFileDirectoryWithOptions(request: UpdateFileDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFileDirectoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directory)) {
      query["Directory"] = request.directory;
    }

    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFileDirectory",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateFileDirectoryResponse>(await this.callApi(params, req, runtime), new UpdateFileDirectoryResponse({}));
  }

  /**
   * 修改菜单树文件所在目录
   * 
   * @param request - UpdateFileDirectoryRequest
   * @returns UpdateFileDirectoryResponse
   */
  async updateFileDirectory(request: UpdateFileDirectoryRequest): Promise<UpdateFileDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFileDirectoryWithOptions(request, runtime);
  }

  /**
   * 修改菜单树文件名称
   * 
   * @param request - UpdateFileNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFileNameResponse
   */
  async updateFileNameWithOptions(request: UpdateFileNameRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFileNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFileName",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateFileNameResponse>(await this.callApi(params, req, runtime), new UpdateFileNameResponse({}));
  }

  /**
   * 修改菜单树文件名称
   * 
   * @param request - UpdateFileNameRequest
   * @returns UpdateFileNameResponse
   */
  async updateFileName(request: UpdateFileNameRequest): Promise<UpdateFileNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFileNameWithOptions(request, runtime);
  }

  /**
   * 编辑租户成员
   * 
   * @param tmpReq - UpdateTenantMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTenantMemberResponse
   */
  async updateTenantMemberWithOptions(tmpReq: UpdateTenantMemberRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTenantMemberResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateTenantMemberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTenantMember",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTenantMemberResponse>(await this.callApi(params, req, runtime), new UpdateTenantMemberResponse({}));
  }

  /**
   * 编辑租户成员
   * 
   * @param request - UpdateTenantMemberRequest
   * @returns UpdateTenantMemberResponse
   */
  async updateTenantMember(request: UpdateTenantMemberRequest): Promise<UpdateTenantMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTenantMemberWithOptions(request, runtime);
  }

  /**
   * 编辑用户组.
   * 
   * @param tmpReq - UpdateUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserGroupResponse
   */
  async updateUserGroupWithOptions(tmpReq: UpdateUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserGroupResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateUserGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.updateCommand)) {
      request.updateCommandShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateCommand, "UpdateCommand", "json");
    }

    let query = { };
    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.updateCommandShrink)) {
      body["UpdateCommand"] = request.updateCommandShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUserGroup",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserGroupResponse>(await this.callApi(params, req, runtime), new UpdateUserGroupResponse({}));
  }

  /**
   * 编辑用户组.
   * 
   * @param request - UpdateUserGroupRequest
   * @returns UpdateUserGroupResponse
   */
  async updateUserGroup(request: UpdateUserGroupRequest): Promise<UpdateUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserGroupWithOptions(request, runtime);
  }

  /**
   * 编辑用户组启用开关.
   * 
   * @param request - UpdateUserGroupSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserGroupSwitchResponse
   */
  async updateUserGroupSwitchWithOptions(request: UpdateUserGroupSwitchRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserGroupSwitchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.active)) {
      query["Active"] = request.active;
    }

    if (!Util.isUnset(request.opTenantId)) {
      query["OpTenantId"] = request.opTenantId;
    }

    if (!Util.isUnset(request.userGroupId)) {
      query["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUserGroupSwitch",
      version: "2023-06-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserGroupSwitchResponse>(await this.callApi(params, req, runtime), new UpdateUserGroupSwitchResponse({}));
  }

  /**
   * 编辑用户组启用开关.
   * 
   * @param request - UpdateUserGroupSwitchRequest
   * @returns UpdateUserGroupSwitchResponse
   */
  async updateUserGroupSwitch(request: UpdateUserGroupSwitchRequest): Promise<UpdateUserGroupSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserGroupSwitchWithOptions(request, runtime);
  }

}
