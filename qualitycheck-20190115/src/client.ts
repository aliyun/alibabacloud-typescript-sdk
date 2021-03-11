// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddBusinessCategoryRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBusinessCategoryResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
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
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBusinessCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddBusinessCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddBusinessCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRuleCategoryRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRuleCategoryResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: AddRuleCategoryResponseBodyData;
  code?: string;
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
      data: AddRuleCategoryResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRuleCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddRuleCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddRuleCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddThesaurusForApiRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddThesaurusForApiResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: number;
  code?: string;
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
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddThesaurusForApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddThesaurusForApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddThesaurusForApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUploadDataSetRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUploadDataSetResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: number;
  code?: string;
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
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUploadDataSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddUploadDataSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddUploadDataSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignReviewerRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignReviewerResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignReviewerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AssignReviewerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AssignReviewerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigDataSetRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigDataSetResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ConfigDataSetResponseBodyData;
  code?: string;
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
      data: ConfigDataSetResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigDataSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigDataSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigDataSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAsrVocabRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAsrVocabResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
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
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAsrVocabResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAsrVocabResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAsrVocabResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: number;
  code?: string;
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
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillGroupConfigRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillGroupConfigResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: number;
  code?: string;
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
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSkillGroupConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSkillGroupConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSkillGroupConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskAssignRuleRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskAssignRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
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
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskAssignRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTaskAssignRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTaskAssignRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWarningConfigRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWarningConfigResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
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
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWarningConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateWarningConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateWarningConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAsrVocabRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAsrVocabResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
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
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAsrVocabResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAsrVocabResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAsrVocabResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBusinessCategoryRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBusinessCategoryResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
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
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBusinessCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteBusinessCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteBusinessCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomizationConfigRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomizationConfigResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
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
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomizationConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCustomizationConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCustomizationConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSetRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSetResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDataSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDataSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePrecisionTaskRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePrecisionTaskResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePrecisionTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeletePrecisionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeletePrecisionTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScoreForApiRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScoreForApiResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScoreForApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteScoreForApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteScoreForApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSkillGroupConfigRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSkillGroupConfigResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSkillGroupConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSkillGroupConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSkillGroupConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubScoreForApiRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubScoreForApiResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubScoreForApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSubScoreForApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSubScoreForApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTaskAssignRuleRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTaskAssignRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTaskAssignRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteTaskAssignRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteTaskAssignRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWarningConfigRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWarningConfigResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWarningConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteWarningConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteWarningConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelRuleCategoryRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelRuleCategoryResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: DelRuleCategoryResponseBodyData;
  code?: string;
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
      data: DelRuleCategoryResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelRuleCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DelRuleCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DelRuleCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelThesaurusForApiRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelThesaurusForApiResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelThesaurusForApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DelThesaurusForApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DelThesaurusForApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditThesaurusForApiRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditThesaurusForApiResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: number;
  code?: string;
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
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditThesaurusForApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EditThesaurusForApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EditThesaurusForApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsrVocabRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsrVocabResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetAsrVocabResponseBodyData;
  code?: string;
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
      data: GetAsrVocabResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsrVocabResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAsrVocabResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAsrVocabResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessCategoryListRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessCategoryListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetBusinessCategoryListResponseBodyData;
  code?: string;
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
      data: GetBusinessCategoryListResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessCategoryListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetBusinessCategoryListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetBusinessCategoryListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomizationConfigListRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomizationConfigListResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetCustomizationConfigListResponseBodyData;
  code?: string;
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
      data: GetCustomizationConfigListResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomizationConfigListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCustomizationConfigListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCustomizationConfigListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHitResultRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHitResultResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: GetHitResultResponseBodyData;
  count?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      count: 'Count',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: GetHitResultResponseBodyData,
      count: 'number',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHitResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetHitResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetHitResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetNextResultToVerifyResponseBodyData;
  code?: string;
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
      data: GetNextResultToVerifyResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetNextResultToVerifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetNextResultToVerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrecisionTaskRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrecisionTaskResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetPrecisionTaskResponseBodyData;
  code?: string;
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
      data: GetPrecisionTaskResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrecisionTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPrecisionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPrecisionTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: GetResultResponseBodyData;
  count?: number;
  code?: string;
  success?: boolean;
  resultCountId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      count: 'Count',
      code: 'Code',
      success: 'Success',
      resultCountId: 'ResultCountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: GetResultResponseBodyData,
      count: 'number',
      code: 'string',
      success: 'boolean',
      resultCountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultCallbackRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultCallbackResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultCallbackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetResultCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetResultCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetResultToReviewResponseBodyData;
  code?: string;
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
      data: GetResultToReviewResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetResultToReviewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetResultToReviewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReviewInfoRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReviewInfoResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetReviewInfoResponseBodyData;
  code?: string;
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
      data: GetReviewInfoResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReviewInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetReviewInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetReviewInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetRuleResponseBodyData;
  code?: string;
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
      data: GetRuleResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleCategoryRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleCategoryResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetRuleCategoryResponseBodyData;
  code?: string;
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
      data: GetRuleCategoryResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRuleCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRuleCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  data?: GetRuleDetailResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: GetRuleDetailResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRuleDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRuleDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDimensionRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDimensionResponseBody extends $tea.Model {
  compSubTaskCount?: number;
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  currentPage?: number;
  reviewStatus?: number;
  dataSize?: number;
  data?: GetRuleDimensionResponseBodyData;
  code?: string;
  success?: boolean;
  totalSubTaskCount?: number;
  static names(): { [key: string]: string } {
    return {
      compSubTaskCount: 'CompSubTaskCount',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      reviewStatus: 'ReviewStatus',
      dataSize: 'DataSize',
      data: 'Data',
      code: 'Code',
      success: 'Success',
      totalSubTaskCount: 'TotalSubTaskCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compSubTaskCount: 'number',
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      currentPage: 'number',
      reviewStatus: 'number',
      dataSize: 'number',
      data: GetRuleDimensionResponseBodyData,
      code: 'string',
      success: 'boolean',
      totalSubTaskCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDimensionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRuleDimensionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRuleDimensionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScoreInfoRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScoreInfoResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetScoreInfoResponseBodyData;
  code?: string;
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
      data: GetScoreInfoResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScoreInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetScoreInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetScoreInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupConfigRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupConfigResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetSkillGroupConfigResponseBodyData;
  code?: string;
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
      data: GetSkillGroupConfigResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSkillGroupConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSkillGroupConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultRequest extends $tea.Model {
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: GetSyncResultResponseBodyData[];
  count?: number;
  code?: string;
  success?: boolean;
  resultCountId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      count: 'Count',
      code: 'Code',
      success: 'Success',
      resultCountId: 'ResultCountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': GetSyncResultResponseBodyData },
      count: 'number',
      code: 'string',
      success: 'boolean',
      resultCountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSyncResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSyncResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskFileResultListRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskFileResultListResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  dataSize?: number;
  data?: GetTaskFileResultListResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      dataSize: 'DataSize',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      dataSize: 'number',
      data: GetTaskFileResultListResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskFileResultListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTaskFileResultListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTaskFileResultListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskRuleListRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskRuleListResponseBody extends $tea.Model {
  compSubTaskCount?: number;
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  currentPage?: number;
  reviewStatus?: number;
  dataSize?: number;
  data?: GetTaskRuleListResponseBodyData;
  code?: string;
  success?: boolean;
  totalSubTaskCount?: number;
  static names(): { [key: string]: string } {
    return {
      compSubTaskCount: 'CompSubTaskCount',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      reviewStatus: 'ReviewStatus',
      dataSize: 'DataSize',
      data: 'Data',
      code: 'Code',
      success: 'Success',
      totalSubTaskCount: 'TotalSubTaskCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compSubTaskCount: 'number',
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      currentPage: 'number',
      reviewStatus: 'number',
      dataSize: 'number',
      data: GetTaskRuleListResponseBodyData,
      code: 'string',
      success: 'boolean',
      totalSubTaskCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskRuleListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTaskRuleListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTaskRuleListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThesaurusBySynonymForApiRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThesaurusBySynonymForApiResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetThesaurusBySynonymForApiResponseBodyData;
  code?: string;
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
      data: GetThesaurusBySynonymForApiResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThesaurusBySynonymForApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetThesaurusBySynonymForApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetThesaurusBySynonymForApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleComplaintRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleComplaintResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
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
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleComplaintResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: HandleComplaintResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: HandleComplaintResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertScoreForApiRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertScoreForApiResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: InsertScoreForApiResponseBodyData;
  code?: string;
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
      data: InsertScoreForApiResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertScoreForApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InsertScoreForApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InsertScoreForApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertSubScoreForApiRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertSubScoreForApiResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: InsertSubScoreForApiResponseBodyData;
  code?: string;
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
      data: InsertSubScoreForApiResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertSubScoreForApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InsertSubScoreForApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InsertSubScoreForApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvalidRuleRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvalidRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: boolean;
  code?: string;
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
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvalidRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InvalidRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InvalidRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsrVocabRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsrVocabResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListAsrVocabResponseBodyData;
  code?: string;
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
      data: ListAsrVocabResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsrVocabResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAsrVocabResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAsrVocabResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetTaskRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetTaskResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  currentPage?: number;
  dataSize?: number;
  data?: ListDataSetTaskResponseBodyData;
  isAllcomplete?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      dataSize: 'DataSize',
      data: 'Data',
      isAllcomplete: 'IsAllcomplete',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      currentPage: 'number',
      dataSize: 'number',
      data: ListDataSetTaskResponseBodyData,
      isAllcomplete: 'number',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDataSetTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDataSetTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotWordsTasksRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotWordsTasksResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListHotWordsTasksResponseBodyData;
  count?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      count: 'Count',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: ListHotWordsTasksResponseBodyData,
      count: 'number',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotWordsTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListHotWordsTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListHotWordsTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrecisionTaskRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrecisionTaskResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListPrecisionTaskResponseBodyData;
  count?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      count: 'Count',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: ListPrecisionTaskResponseBodyData,
      count: 'number',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrecisionTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPrecisionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPrecisionTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListRolesResponseBodyData;
  code?: string;
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
      data: ListRolesResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRolesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRolesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListRulesResponseBodyData[];
  count?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      count: 'Count',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListRulesResponseBodyData },
      count: 'number',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListSkillGroupConfigResponseBodyData;
  code?: string;
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
      data: ListSkillGroupConfigResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSkillGroupConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSkillGroupConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListTaskAssignRulesResponseBodyData;
  count?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      count: 'Count',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: ListTaskAssignRulesResponseBodyData,
      count: 'number',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTaskAssignRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTaskAssignRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListUsersResponseBodyData;
  count?: number;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      count: 'Count',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: ListUsersResponseBodyData,
      count: 'number',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningConfigRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningConfigResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListWarningConfigResponseBodyData;
  code?: string;
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
      data: ListWarningConfigResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListWarningConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListWarningConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAndGetTaskRulesRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAndGetTaskRulesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAndGetTaskRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveAndGetTaskRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveAndGetTaskRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartAsrTaskRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartAsrTaskResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: RestartAsrTaskResponseBodyData;
  code?: string;
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
      data: RestartAsrTaskResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartAsrTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RestartAsrTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RestartAsrTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReviewSingleResultByIdRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReviewSingleResultByIdResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ReviewSingleResultByIdResponseBodyData;
  code?: string;
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
      data: ReviewSingleResultByIdResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReviewSingleResultByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReviewSingleResultByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReviewSingleResultByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveConfigDataSetRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveConfigDataSetResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveConfigDataSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveConfigDataSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveConfigDataSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitComplaintRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitComplaintResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
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
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitComplaintResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitComplaintResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitComplaintResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCustomizationConfigRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCustomizationConfigResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: SubmitCustomizationConfigResponseBodyData;
  code?: string;
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
      data: SubmitCustomizationConfigResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCustomizationConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitCustomizationConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitCustomizationConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPrecisionTaskRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPrecisionTaskResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
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
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitPrecisionTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitPrecisionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitPrecisionTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitQualityCheckTaskRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitQualityCheckTaskResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
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
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitQualityCheckTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitQualityCheckTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitQualityCheckTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitReviewInfoRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitReviewInfoResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
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
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitReviewInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitReviewInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitReviewInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncQualityCheckRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncQualityCheckResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: SyncQualityCheckResponseBodyData;
  code?: string;
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
      data: SyncQualityCheckResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncQualityCheckResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SyncQualityCheckResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SyncQualityCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestRuleRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: TestRuleResponseBodyData;
  code?: string;
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
      data: TestRuleResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TestRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TestRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAsrVocabRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAsrVocabResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
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
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAsrVocabResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAsrVocabResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAsrVocabResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOnPurchaseSuccessRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOnPurchaseSuccessResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
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
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOnPurchaseSuccessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateOnPurchaseSuccessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateOnPurchaseSuccessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
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
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScoreForApiRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScoreForApiResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScoreForApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateScoreForApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateScoreForApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSkillGroupConfigRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSkillGroupConfigResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSkillGroupConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSkillGroupConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSkillGroupConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubScoreForApiRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubScoreForApiResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubScoreForApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSubScoreForApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSubScoreForApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSyncQualityCheckDataRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSyncQualityCheckDataResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: UpdateSyncQualityCheckDataResponseBodyData;
  code?: string;
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
      data: UpdateSyncQualityCheckDataResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSyncQualityCheckDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSyncQualityCheckDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSyncQualityCheckDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskAssignRuleRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskAssignRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskAssignRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateTaskAssignRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateTaskAssignRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserConfigRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserConfigResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateUserConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateUserConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWarningConfigRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWarningConfigResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWarningConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateWarningConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateWarningConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadAudioDataRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadAudioDataResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
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
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadAudioDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UploadAudioDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UploadAudioDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
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
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UploadDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UploadDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: UploadDataSyncResponseBodyData;
  code?: string;
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
      data: UploadDataSyncResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UploadDataSyncResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UploadDataSyncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadRuleRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadRuleResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: UploadRuleResponseBodyData;
  code?: string;
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
      data: UploadRuleResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UploadRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UploadRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyFileRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyFileResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: number;
  code?: string;
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
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: VerifyFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: VerifyFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceRequest extends $tea.Model {
  resourceOwnerId?: number;
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceResponseBody extends $tea.Model {
  sourceRole?: number;
  incorrectWords?: number;
  requestId?: string;
  message?: string;
  targetRole?: number;
  data?: VerifySentenceResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      sourceRole: 'SourceRole',
      incorrectWords: 'IncorrectWords',
      requestId: 'RequestId',
      message: 'Message',
      targetRole: 'TargetRole',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceRole: 'number',
      incorrectWords: 'number',
      requestId: 'string',
      message: 'string',
      targetRole: 'number',
      data: VerifySentenceResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: VerifySentenceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: VerifySentenceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRuleCategoryResponseBodyData extends $tea.Model {
  select?: boolean;
  static names(): { [key: string]: string } {
    return {
      select: 'Select',
    };
  }

  static types(): { [key: string]: any } {
    return {
      select: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigDataSetResponseBodyDataRuleInfoConditionsConditionBasicInfoCheckRangeRange extends $tea.Model {
  from?: number;
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigDataSetResponseBodyDataRuleInfoConditionsConditionBasicInfoCheckRangeAnchor extends $tea.Model {
  cid?: string;
  hitTime?: number;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      hitTime: 'HitTime',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: 'string',
      hitTime: 'number',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigDataSetResponseBodyDataRuleInfoConditionsConditionBasicInfoCheckRange extends $tea.Model {
  range?: ConfigDataSetResponseBodyDataRuleInfoConditionsConditionBasicInfoCheckRangeRange;
  anchor?: ConfigDataSetResponseBodyDataRuleInfoConditionsConditionBasicInfoCheckRangeAnchor;
  role?: string;
  roleId?: number;
  static names(): { [key: string]: string } {
    return {
      range: 'Range',
      anchor: 'Anchor',
      role: 'Role',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      range: ConfigDataSetResponseBodyDataRuleInfoConditionsConditionBasicInfoCheckRangeRange,
      anchor: ConfigDataSetResponseBodyDataRuleInfoConditionsConditionBasicInfoCheckRangeAnchor,
      role: 'string',
      roleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigDataSetResponseBodyDataRuleInfoConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamKeywords extends $tea.Model {
  keywords?: string[];
  static names(): { [key: string]: string } {
    return {
      keywords: 'Keywords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywords: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigDataSetResponseBodyDataRuleInfoConditionsConditionBasicInfoOperatorsOperatorBasicInfoParam extends $tea.Model {
  keywords?: ConfigDataSetResponseBodyDataRuleInfoConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamKeywords;
  inSentence?: boolean;
  static names(): { [key: string]: string } {
    return {
      keywords: 'Keywords',
      inSentence: 'InSentence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywords: ConfigDataSetResponseBodyDataRuleInfoConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamKeywords,
      inSentence: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigDataSetResponseBodyDataRuleInfoConditionsConditionBasicInfoOperatorsOperatorBasicInfo extends $tea.Model {
  type?: string;
  oid?: string;
  param?: ConfigDataSetResponseBodyDataRuleInfoConditionsConditionBasicInfoOperatorsOperatorBasicInfoParam;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      oid: 'Oid',
      param: 'Param',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      oid: 'string',
      param: ConfigDataSetResponseBodyDataRuleInfoConditionsConditionBasicInfoOperatorsOperatorBasicInfoParam,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigDataSetResponseBodyDataRuleInfoConditionsConditionBasicInfoOperators extends $tea.Model {
  operatorBasicInfo?: ConfigDataSetResponseBodyDataRuleInfoConditionsConditionBasicInfoOperatorsOperatorBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      operatorBasicInfo: 'OperatorBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorBasicInfo: { 'type': 'array', 'itemType': ConfigDataSetResponseBodyDataRuleInfoConditionsConditionBasicInfoOperatorsOperatorBasicInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigDataSetResponseBodyDataRuleInfoConditionsConditionBasicInfo extends $tea.Model {
  checkRange?: ConfigDataSetResponseBodyDataRuleInfoConditionsConditionBasicInfoCheckRange;
  cid?: string;
  operators?: ConfigDataSetResponseBodyDataRuleInfoConditionsConditionBasicInfoOperators;
  lambda?: string;
  static names(): { [key: string]: string } {
    return {
      checkRange: 'CheckRange',
      cid: 'Cid',
      operators: 'Operators',
      lambda: 'Lambda',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkRange: ConfigDataSetResponseBodyDataRuleInfoConditionsConditionBasicInfoCheckRange,
      cid: 'string',
      operators: ConfigDataSetResponseBodyDataRuleInfoConditionsConditionBasicInfoOperators,
      lambda: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigDataSetResponseBodyDataRuleInfoConditions extends $tea.Model {
  conditionBasicInfo?: ConfigDataSetResponseBodyDataRuleInfoConditionsConditionBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      conditionBasicInfo: 'ConditionBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionBasicInfo: { 'type': 'array', 'itemType': ConfigDataSetResponseBodyDataRuleInfoConditionsConditionBasicInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigDataSetResponseBodyDataRuleInfoRulesRuleBasicInfo extends $tea.Model {
  externalProperty?: number;
  lambda?: string;
  rid?: string;
  static names(): { [key: string]: string } {
    return {
      externalProperty: 'ExternalProperty',
      lambda: 'Lambda',
      rid: 'Rid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalProperty: 'number',
      lambda: 'string',
      rid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigDataSetResponseBodyDataRuleInfoRules extends $tea.Model {
  ruleBasicInfo?: ConfigDataSetResponseBodyDataRuleInfoRulesRuleBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleBasicInfo: 'RuleBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleBasicInfo: { 'type': 'array', 'itemType': ConfigDataSetResponseBodyDataRuleInfoRulesRuleBasicInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigDataSetResponseBodyDataRuleInfo extends $tea.Model {
  conditions?: ConfigDataSetResponseBodyDataRuleInfoConditions;
  rules?: ConfigDataSetResponseBodyDataRuleInfoRules;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: ConfigDataSetResponseBodyDataRuleInfoConditions,
      rules: ConfigDataSetResponseBodyDataRuleInfoRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigDataSetResponseBodyData extends $tea.Model {
  ruleInfo?: ConfigDataSetResponseBodyDataRuleInfo;
  channelType?: number;
  setId?: number;
  roleConfigStatus?: number;
  judgeType?: number;
  static names(): { [key: string]: string } {
    return {
      ruleInfo: 'RuleInfo',
      channelType: 'ChannelType',
      setId: 'SetId',
      roleConfigStatus: 'RoleConfigStatus',
      judgeType: 'JudgeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleInfo: ConfigDataSetResponseBodyDataRuleInfo,
      channelType: 'number',
      setId: 'number',
      roleConfigStatus: 'number',
      judgeType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelRuleCategoryResponseBodyData extends $tea.Model {
  select?: boolean;
  static names(): { [key: string]: string } {
    return {
      select: 'Select',
    };
  }

  static types(): { [key: string]: any } {
    return {
      select: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsrVocabResponseBodyDataWordsWord extends $tea.Model {
  weight?: number;
  word?: string;
  static names(): { [key: string]: string } {
    return {
      weight: 'Weight',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      weight: 'number',
      word: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsrVocabResponseBodyDataWords extends $tea.Model {
  word?: GetAsrVocabResponseBodyDataWordsWord[];
  static names(): { [key: string]: string } {
    return {
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      word: { 'type': 'array', 'itemType': GetAsrVocabResponseBodyDataWordsWord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsrVocabResponseBodyData extends $tea.Model {
  words?: GetAsrVocabResponseBodyDataWords;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      words: 'Words',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      words: GetAsrVocabResponseBodyDataWords,
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessCategoryListResponseBodyDataBusinessCategoryBasicInfo extends $tea.Model {
  businessName?: string;
  serviceType?: number;
  bid?: number;
  static names(): { [key: string]: string } {
    return {
      businessName: 'BusinessName',
      serviceType: 'ServiceType',
      bid: 'Bid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessName: 'string',
      serviceType: 'number',
      bid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessCategoryListResponseBodyData extends $tea.Model {
  businessCategoryBasicInfo?: GetBusinessCategoryListResponseBodyDataBusinessCategoryBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      businessCategoryBasicInfo: 'BusinessCategoryBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCategoryBasicInfo: { 'type': 'array', 'itemType': GetBusinessCategoryListResponseBodyDataBusinessCategoryBasicInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomizationConfigListResponseBodyDataModelCustomizationDataSetPo extends $tea.Model {
  taskType?: number;
  createTime?: string;
  modelStatus?: number;
  modelName?: string;
  modelId?: number;
  modeCustomizationId?: string;
  static names(): { [key: string]: string } {
    return {
      taskType: 'TaskType',
      createTime: 'CreateTime',
      modelStatus: 'ModelStatus',
      modelName: 'ModelName',
      modelId: 'ModelId',
      modeCustomizationId: 'ModeCustomizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskType: 'number',
      createTime: 'string',
      modelStatus: 'number',
      modelName: 'string',
      modelId: 'number',
      modeCustomizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomizationConfigListResponseBodyData extends $tea.Model {
  modelCustomizationDataSetPo?: GetCustomizationConfigListResponseBodyDataModelCustomizationDataSetPo[];
  static names(): { [key: string]: string } {
    return {
      modelCustomizationDataSetPo: 'ModelCustomizationDataSetPo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelCustomizationDataSetPo: { 'type': 'array', 'itemType': GetCustomizationConfigListResponseBodyDataModelCustomizationDataSetPo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHitResultResponseBodyDataResultInfo extends $tea.Model {
  ruleName?: string;
  rid?: number;
  static names(): { [key: string]: string } {
    return {
      ruleName: 'RuleName',
      rid: 'Rid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleName: 'string',
      rid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHitResultResponseBodyData extends $tea.Model {
  resultInfo?: GetHitResultResponseBodyDataResultInfo[];
  static names(): { [key: string]: string } {
    return {
      resultInfo: 'ResultInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultInfo: { 'type': 'array', 'itemType': GetHitResultResponseBodyDataResultInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSourceLine extends $tea.Model {
  line?: string[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSource extends $tea.Model {
  line?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSourceLine;
  position?: number;
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSourceLine,
      position: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTargetLine extends $tea.Model {
  line?: string[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTarget extends $tea.Model {
  line?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTargetLine;
  position?: number;
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTargetLine,
      position: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDelta extends $tea.Model {
  type?: string;
  source?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSource;
  target?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTarget;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      source: 'Source',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      source: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSource,
      target: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTarget,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltas extends $tea.Model {
  delta?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDelta[];
  static names(): { [key: string]: string } {
    return {
      delta: 'Delta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delta: { 'type': 'array', 'itemType': GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDelta },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBodyDataDialoguesDialogue extends $tea.Model {
  deltas?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltas;
  words?: string;
  identity?: string;
  incorrectWords?: number;
  beginTime?: string;
  sourceWords?: string;
  end?: number;
  speechRate?: number;
  sourceRole?: string;
  hourMinSec?: string;
  begin?: number;
  emotionValue?: number;
  role?: string;
  silenceDuration?: number;
  static names(): { [key: string]: string } {
    return {
      deltas: 'Deltas',
      words: 'Words',
      identity: 'Identity',
      incorrectWords: 'IncorrectWords',
      beginTime: 'BeginTime',
      sourceWords: 'SourceWords',
      end: 'End',
      speechRate: 'SpeechRate',
      sourceRole: 'SourceRole',
      hourMinSec: 'HourMinSec',
      begin: 'Begin',
      emotionValue: 'EmotionValue',
      role: 'Role',
      silenceDuration: 'SilenceDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deltas: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltas,
      words: 'string',
      identity: 'string',
      incorrectWords: 'number',
      beginTime: 'string',
      sourceWords: 'string',
      end: 'number',
      speechRate: 'number',
      sourceRole: 'string',
      hourMinSec: 'string',
      begin: 'number',
      emotionValue: 'number',
      role: 'string',
      silenceDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBodyDataDialogues extends $tea.Model {
  dialogue?: GetNextResultToVerifyResponseBodyDataDialoguesDialogue[];
  static names(): { [key: string]: string } {
    return {
      dialogue: 'Dialogue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogue: { 'type': 'array', 'itemType': GetNextResultToVerifyResponseBodyDataDialoguesDialogue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNextResultToVerifyResponseBodyData extends $tea.Model {
  audioScheme?: string;
  status?: number;
  index?: number;
  audioURL?: string;
  updateTime?: string;
  incorrectWords?: number;
  verifiedCount?: number;
  verified?: boolean;
  fileName?: string;
  totalCount?: number;
  precision?: number;
  fileId?: string;
  dialogues?: GetNextResultToVerifyResponseBodyDataDialogues;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      audioScheme: 'AudioScheme',
      status: 'Status',
      index: 'Index',
      audioURL: 'AudioURL',
      updateTime: 'UpdateTime',
      incorrectWords: 'IncorrectWords',
      verifiedCount: 'VerifiedCount',
      verified: 'Verified',
      fileName: 'FileName',
      totalCount: 'TotalCount',
      precision: 'Precision',
      fileId: 'FileId',
      dialogues: 'Dialogues',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioScheme: 'string',
      status: 'number',
      index: 'number',
      audioURL: 'string',
      updateTime: 'string',
      incorrectWords: 'number',
      verifiedCount: 'number',
      verified: 'boolean',
      fileName: 'string',
      totalCount: 'number',
      precision: 'number',
      fileId: 'string',
      dialogues: GetNextResultToVerifyResponseBodyDataDialogues,
      duration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrecisionTaskResponseBodyDataPrecisionsPrecision extends $tea.Model {
  status?: number;
  modelName?: string;
  taskId?: string;
  precision?: number;
  modelId?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      modelName: 'ModelName',
      taskId: 'TaskId',
      precision: 'Precision',
      modelId: 'ModelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      modelName: 'string',
      taskId: 'string',
      precision: 'number',
      modelId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrecisionTaskResponseBodyDataPrecisions extends $tea.Model {
  precision?: GetPrecisionTaskResponseBodyDataPrecisionsPrecision[];
  static names(): { [key: string]: string } {
    return {
      precision: 'Precision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      precision: { 'type': 'array', 'itemType': GetPrecisionTaskResponseBodyDataPrecisionsPrecision },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrecisionTaskResponseBodyData extends $tea.Model {
  status?: number;
  updateTime?: string;
  incorrectWords?: number;
  dataSetId?: number;
  verifiedCount?: number;
  totalCount?: number;
  source?: number;
  precisions?: GetPrecisionTaskResponseBodyDataPrecisions;
  duration?: number;
  dataSetName?: string;
  name?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      updateTime: 'UpdateTime',
      incorrectWords: 'IncorrectWords',
      dataSetId: 'DataSetId',
      verifiedCount: 'VerifiedCount',
      totalCount: 'TotalCount',
      source: 'Source',
      precisions: 'Precisions',
      duration: 'Duration',
      dataSetName: 'DataSetName',
      name: 'Name',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      updateTime: 'string',
      incorrectWords: 'number',
      dataSetId: 'number',
      verifiedCount: 'number',
      totalCount: 'number',
      source: 'number',
      precisions: GetPrecisionTaskResponseBodyDataPrecisions,
      duration: 'number',
      dataSetName: 'string',
      name: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoAgent extends $tea.Model {
  name?: string;
  skillGroup?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      skillGroup: 'SkillGroup',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      skillGroup: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoAsrResultAsrResult extends $tea.Model {
  words?: string;
  begin?: number;
  emotionValue?: number;
  end?: number;
  speechRate?: number;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      words: 'Words',
      begin: 'Begin',
      emotionValue: 'EmotionValue',
      end: 'End',
      speechRate: 'SpeechRate',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      words: 'string',
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      speechRate: 'number',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoAsrResult extends $tea.Model {
  asrResult?: GetResultResponseBodyDataResultInfoAsrResultAsrResult[];
  static names(): { [key: string]: string } {
    return {
      asrResult: 'AsrResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrResult: { 'type': 'array', 'itemType': GetResultResponseBodyDataResultInfoAsrResultAsrResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitScoreHitScore extends $tea.Model {
  scoreName?: string;
  scoreNumber?: string;
  scoreId?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      scoreName: 'ScoreName',
      scoreNumber: 'ScoreNumber',
      scoreId: 'ScoreId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreName: 'string',
      scoreNumber: 'string',
      scoreId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitScore extends $tea.Model {
  hitScore?: GetResultResponseBodyDataResultInfoHitScoreHitScore[];
  static names(): { [key: string]: string } {
    return {
      hitScore: 'HitScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitScore: { 'type': 'array', 'itemType': GetResultResponseBodyDataResultInfoHitScoreHitScore },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitPhrase extends $tea.Model {
  words?: string;
  begin?: number;
  emotionValue?: number;
  end?: number;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      words: 'Words',
      begin: 'Begin',
      emotionValue: 'EmotionValue',
      end: 'End',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      words: 'string',
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitKeyWordsKeyWord extends $tea.Model {
  from?: number;
  val?: string;
  cid?: string;
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      val: 'Val',
      cid: 'Cid',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      val: 'string',
      cid: 'string',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitKeyWords extends $tea.Model {
  keyWord?: GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitKeyWordsKeyWord[];
  static names(): { [key: string]: string } {
    return {
      keyWord: 'KeyWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWord: { 'type': 'array', 'itemType': GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitKeyWordsKeyWord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitCid extends $tea.Model {
  cid?: string[];
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultHitsHit extends $tea.Model {
  phrase?: GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitPhrase;
  keyWords?: GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitKeyWords;
  cid?: GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitCid;
  static names(): { [key: string]: string } {
    return {
      phrase: 'Phrase',
      keyWords: 'KeyWords',
      cid: 'Cid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phrase: GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitPhrase,
      keyWords: GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitKeyWords,
      cid: GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitCid,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultHits extends $tea.Model {
  hit?: GetResultResponseBodyDataResultInfoHitResultHitResultHitsHit[];
  static names(): { [key: string]: string } {
    return {
      hit: 'Hit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hit: { 'type': 'array', 'itemType': GetResultResponseBodyDataResultInfoHitResultHitResultHitsHit },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResult extends $tea.Model {
  type?: string;
  hits?: GetResultResponseBodyDataResultInfoHitResultHitResultHits;
  reviewResult?: number;
  name?: string;
  rid?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      hits: 'Hits',
      reviewResult: 'ReviewResult',
      name: 'Name',
      rid: 'Rid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      hits: GetResultResponseBodyDataResultInfoHitResultHitResultHits,
      reviewResult: 'number',
      name: 'string',
      rid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResult extends $tea.Model {
  hitResult?: GetResultResponseBodyDataResultInfoHitResultHitResult[];
  static names(): { [key: string]: string } {
    return {
      hitResult: 'HitResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitResult: { 'type': 'array', 'itemType': GetResultResponseBodyDataResultInfoHitResultHitResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoRecording extends $tea.Model {
  remark13?: string;
  callee?: string;
  primaryId?: string;
  remark12?: string;
  remark1?: string;
  remark7?: string;
  remark8?: string;
  remark2?: string;
  callId?: string;
  remark9?: string;
  name?: string;
  remark6?: string;
  remark10?: string;
  remark3?: string;
  business?: string;
  url?: string;
  remark11?: string;
  remark4?: string;
  callType?: number;
  caller?: string;
  duration?: number;
  dataSetName?: string;
  remark5?: number;
  id?: string;
  callTime?: string;
  static names(): { [key: string]: string } {
    return {
      remark13: 'Remark13',
      callee: 'Callee',
      primaryId: 'PrimaryId',
      remark12: 'Remark12',
      remark1: 'Remark1',
      remark7: 'Remark7',
      remark8: 'Remark8',
      remark2: 'Remark2',
      callId: 'CallId',
      remark9: 'Remark9',
      name: 'Name',
      remark6: 'Remark6',
      remark10: 'Remark10',
      remark3: 'Remark3',
      business: 'Business',
      url: 'Url',
      remark11: 'Remark11',
      remark4: 'Remark4',
      callType: 'CallType',
      caller: 'Caller',
      duration: 'Duration',
      dataSetName: 'DataSetName',
      remark5: 'Remark5',
      id: 'Id',
      callTime: 'CallTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark13: 'string',
      callee: 'string',
      primaryId: 'string',
      remark12: 'string',
      remark1: 'string',
      remark7: 'string',
      remark8: 'string',
      remark2: 'string',
      callId: 'string',
      remark9: 'string',
      name: 'string',
      remark6: 'string',
      remark10: 'string',
      remark3: 'string',
      business: 'string',
      url: 'string',
      remark11: 'string',
      remark4: 'string',
      callType: 'number',
      caller: 'string',
      duration: 'number',
      dataSetName: 'string',
      remark5: 'number',
      id: 'string',
      callTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfo extends $tea.Model {
  status?: number;
  assignmentTime?: string;
  lastDataId?: string;
  errorMessage?: string;
  reviewStatus?: number;
  createTime?: string;
  reviewer?: string;
  taskName?: string;
  reviewTimeLong?: string;
  score?: number;
  reviewResult?: number;
  agent?: GetResultResponseBodyDataResultInfoAgent;
  createTimeLong?: string;
  asrResult?: GetResultResponseBodyDataResultInfoAsrResult;
  reviewTime?: string;
  hitScore?: GetResultResponseBodyDataResultInfoHitScore;
  comments?: string;
  hitResult?: GetResultResponseBodyDataResultInfoHitResult;
  recording?: GetResultResponseBodyDataResultInfoRecording;
  taskId?: string;
  reviewType?: number;
  resolver?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      assignmentTime: 'AssignmentTime',
      lastDataId: 'LastDataId',
      errorMessage: 'ErrorMessage',
      reviewStatus: 'ReviewStatus',
      createTime: 'CreateTime',
      reviewer: 'Reviewer',
      taskName: 'TaskName',
      reviewTimeLong: 'ReviewTimeLong',
      score: 'Score',
      reviewResult: 'ReviewResult',
      agent: 'Agent',
      createTimeLong: 'CreateTimeLong',
      asrResult: 'AsrResult',
      reviewTime: 'ReviewTime',
      hitScore: 'HitScore',
      comments: 'Comments',
      hitResult: 'HitResult',
      recording: 'Recording',
      taskId: 'TaskId',
      reviewType: 'ReviewType',
      resolver: 'Resolver',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      assignmentTime: 'string',
      lastDataId: 'string',
      errorMessage: 'string',
      reviewStatus: 'number',
      createTime: 'string',
      reviewer: 'string',
      taskName: 'string',
      reviewTimeLong: 'string',
      score: 'number',
      reviewResult: 'number',
      agent: GetResultResponseBodyDataResultInfoAgent,
      createTimeLong: 'string',
      asrResult: GetResultResponseBodyDataResultInfoAsrResult,
      reviewTime: 'string',
      hitScore: GetResultResponseBodyDataResultInfoHitScore,
      comments: 'string',
      hitResult: GetResultResponseBodyDataResultInfoHitResult,
      recording: GetResultResponseBodyDataResultInfoRecording,
      taskId: 'string',
      reviewType: 'number',
      resolver: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyData extends $tea.Model {
  resultInfo?: GetResultResponseBodyDataResultInfo[];
  static names(): { [key: string]: string } {
    return {
      resultInfo: 'ResultInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultInfo: { 'type': 'array', 'itemType': GetResultResponseBodyDataResultInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataReviewHistoryListReviewHistory extends $tea.Model {
  type?: number;
  operatorName?: string;
  timeStr?: string;
  score?: number;
  reviewResult?: number;
  complainResult?: number;
  oldScore?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      operatorName: 'OperatorName',
      timeStr: 'TimeStr',
      score: 'Score',
      reviewResult: 'ReviewResult',
      complainResult: 'ComplainResult',
      oldScore: 'OldScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      operatorName: 'string',
      timeStr: 'string',
      score: 'number',
      reviewResult: 'number',
      complainResult: 'number',
      oldScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataReviewHistoryList extends $tea.Model {
  reviewHistory?: GetResultToReviewResponseBodyDataReviewHistoryListReviewHistory[];
  static names(): { [key: string]: string } {
    return {
      reviewHistory: 'ReviewHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewHistory: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataReviewHistoryListReviewHistory },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoPhrase extends $tea.Model {
  words?: string;
  begin?: number;
  identity?: string;
  pid?: number;
  emotionValue?: number;
  end?: number;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      words: 'Words',
      begin: 'Begin',
      identity: 'Identity',
      pid: 'Pid',
      emotionValue: 'EmotionValue',
      end: 'End',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      words: 'string',
      begin: 'number',
      identity: 'string',
      pid: 'number',
      emotionValue: 'number',
      end: 'number',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWordsKeyWord extends $tea.Model {
  from?: number;
  val?: string;
  pid?: number;
  tid?: string;
  cid?: string;
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      val: 'Val',
      pid: 'Pid',
      tid: 'Tid',
      cid: 'Cid',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      val: 'string',
      pid: 'number',
      tid: 'string',
      cid: 'string',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWords extends $tea.Model {
  keyWord?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWordsKeyWord[];
  static names(): { [key: string]: string } {
    return {
      keyWord: 'KeyWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWord: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWordsKeyWord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoCid extends $tea.Model {
  cid?: string[];
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfo extends $tea.Model {
  phrase?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoPhrase;
  keyWords?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWords;
  cid?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoCid;
  static names(): { [key: string]: string } {
    return {
      phrase: 'Phrase',
      keyWords: 'KeyWords',
      cid: 'Cid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phrase: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoPhrase,
      keyWords: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWords,
      cid: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoCid,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoList extends $tea.Model {
  conditionHitInfo?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfo[];
  static names(): { [key: string]: string } {
    return {
      conditionHitInfo: 'ConditionHitInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionHitInfo: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoReviewInfo extends $tea.Model {
  reviewTime?: string;
  reviewer?: string;
  reviewResult?: number;
  hitId?: string;
  rid?: number;
  static names(): { [key: string]: string } {
    return {
      reviewTime: 'ReviewTime',
      reviewer: 'Reviewer',
      reviewResult: 'ReviewResult',
      hitId: 'HitId',
      rid: 'Rid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewTime: 'string',
      reviewer: 'string',
      reviewResult: 'number',
      hitId: 'string',
      rid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoComplainHistoriesComplainHistories extends $tea.Model {
  operatorName?: string;
  comments?: string;
  operator?: number;
  operationTime?: string;
  operationType?: number;
  static names(): { [key: string]: string } {
    return {
      operatorName: 'OperatorName',
      comments: 'Comments',
      operator: 'Operator',
      operationTime: 'OperationTime',
      operationType: 'OperationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorName: 'string',
      comments: 'string',
      operator: 'number',
      operationTime: 'string',
      operationType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoComplainHistories extends $tea.Model {
  complainHistories?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoComplainHistoriesComplainHistories[];
  static names(): { [key: string]: string } {
    return {
      complainHistories: 'ComplainHistories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complainHistories: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoComplainHistoriesComplainHistories },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfo extends $tea.Model {
  conditionHitInfoList?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoList;
  scoreSubId?: number;
  reviewInfo?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoReviewInfo;
  ruleName?: string;
  rid?: number;
  scoreSubName?: string;
  scoreNum?: number;
  autoReview?: number;
  complainHistories?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoComplainHistories;
  complainable?: boolean;
  scoreId?: number;
  static names(): { [key: string]: string } {
    return {
      conditionHitInfoList: 'ConditionHitInfoList',
      scoreSubId: 'ScoreSubId',
      reviewInfo: 'ReviewInfo',
      ruleName: 'RuleName',
      rid: 'Rid',
      scoreSubName: 'ScoreSubName',
      scoreNum: 'ScoreNum',
      autoReview: 'AutoReview',
      complainHistories: 'ComplainHistories',
      complainable: 'Complainable',
      scoreId: 'ScoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionHitInfoList: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoList,
      scoreSubId: 'number',
      reviewInfo: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoReviewInfo,
      ruleName: 'string',
      rid: 'number',
      scoreSubName: 'string',
      scoreNum: 'number',
      autoReview: 'number',
      complainHistories: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoComplainHistories,
      complainable: 'boolean',
      scoreId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoList extends $tea.Model {
  hitRuleReviewInfo?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfo[];
  static names(): { [key: string]: string } {
    return {
      hitRuleReviewInfo: 'HitRuleReviewInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitRuleReviewInfo: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfoComplainHistoriesComplainHistories extends $tea.Model {
  operatorName?: string;
  comments?: string;
  operator?: number;
  operationTime?: string;
  operationType?: number;
  static names(): { [key: string]: string } {
    return {
      operatorName: 'OperatorName',
      comments: 'Comments',
      operator: 'Operator',
      operationTime: 'OperationTime',
      operationType: 'OperationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorName: 'string',
      comments: 'string',
      operator: 'number',
      operationTime: 'string',
      operationType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfoComplainHistories extends $tea.Model {
  complainHistories?: GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfoComplainHistoriesComplainHistories[];
  static names(): { [key: string]: string } {
    return {
      complainHistories: 'ComplainHistories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complainHistories: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfoComplainHistoriesComplainHistories },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfo extends $tea.Model {
  scoreSubName?: string;
  scoreNum?: number;
  scoreSubId?: number;
  complainHistories?: GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfoComplainHistories;
  complainable?: boolean;
  scoreId?: number;
  static names(): { [key: string]: string } {
    return {
      scoreSubName: 'ScoreSubName',
      scoreNum: 'ScoreNum',
      scoreSubId: 'ScoreSubId',
      complainHistories: 'ComplainHistories',
      complainable: 'Complainable',
      scoreId: 'ScoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreSubName: 'string',
      scoreNum: 'number',
      scoreSubId: 'number',
      complainHistories: GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfoComplainHistories,
      complainable: 'boolean',
      scoreId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataManualScoreInfoList extends $tea.Model {
  manualScoreInfo?: GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfo[];
  static names(): { [key: string]: string } {
    return {
      manualScoreInfo: 'ManualScoreInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      manualScoreInfo: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataDialoguesDialogue extends $tea.Model {
  words?: string;
  identity?: string;
  begin?: number;
  beginTime?: string;
  emotionValue?: number;
  end?: number;
  speechRate?: number;
  role?: string;
  silenceDuration?: number;
  hourMinSec?: string;
  static names(): { [key: string]: string } {
    return {
      words: 'Words',
      identity: 'Identity',
      begin: 'Begin',
      beginTime: 'BeginTime',
      emotionValue: 'EmotionValue',
      end: 'End',
      speechRate: 'SpeechRate',
      role: 'Role',
      silenceDuration: 'SilenceDuration',
      hourMinSec: 'HourMinSec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      words: 'string',
      identity: 'string',
      begin: 'number',
      beginTime: 'string',
      emotionValue: 'number',
      end: 'number',
      speechRate: 'number',
      role: 'string',
      silenceDuration: 'number',
      hourMinSec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataDialogues extends $tea.Model {
  dialogue?: GetResultToReviewResponseBodyDataDialoguesDialogue[];
  static names(): { [key: string]: string } {
    return {
      dialogue: 'Dialogue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogue: { 'type': 'array', 'itemType': GetResultToReviewResponseBodyDataDialoguesDialogue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyData extends $tea.Model {
  audioScheme?: string;
  audioURL?: string;
  reviewHistoryList?: GetResultToReviewResponseBodyDataReviewHistoryList;
  hitRuleReviewInfoList?: GetResultToReviewResponseBodyDataHitRuleReviewInfoList;
  totalScore?: number;
  fileId?: string;
  manualScoreInfoList?: GetResultToReviewResponseBodyDataManualScoreInfoList;
  fileMergeName?: string;
  comments?: string;
  dialogues?: GetResultToReviewResponseBodyDataDialogues;
  vid?: string;
  static names(): { [key: string]: string } {
    return {
      audioScheme: 'AudioScheme',
      audioURL: 'AudioURL',
      reviewHistoryList: 'ReviewHistoryList',
      hitRuleReviewInfoList: 'HitRuleReviewInfoList',
      totalScore: 'TotalScore',
      fileId: 'FileId',
      manualScoreInfoList: 'ManualScoreInfoList',
      fileMergeName: 'FileMergeName',
      comments: 'Comments',
      dialogues: 'Dialogues',
      vid: 'Vid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioScheme: 'string',
      audioURL: 'string',
      reviewHistoryList: GetResultToReviewResponseBodyDataReviewHistoryList,
      hitRuleReviewInfoList: GetResultToReviewResponseBodyDataHitRuleReviewInfoList,
      totalScore: 'number',
      fileId: 'string',
      manualScoreInfoList: GetResultToReviewResponseBodyDataManualScoreInfoList,
      fileMergeName: 'string',
      comments: 'string',
      dialogues: GetResultToReviewResponseBodyDataDialogues,
      vid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReviewInfoResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoPhrase extends $tea.Model {
  words?: string;
  begin?: number;
  identity?: string;
  pid?: number;
  emotionValue?: number;
  end?: number;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      words: 'Words',
      begin: 'Begin',
      identity: 'Identity',
      pid: 'Pid',
      emotionValue: 'EmotionValue',
      end: 'End',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      words: 'string',
      begin: 'number',
      identity: 'string',
      pid: 'number',
      emotionValue: 'number',
      end: 'number',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReviewInfoResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWordsKeyWord extends $tea.Model {
  from?: number;
  val?: string;
  tid?: string;
  pid?: number;
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      val: 'Val',
      tid: 'Tid',
      pid: 'Pid',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      val: 'string',
      tid: 'string',
      pid: 'number',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReviewInfoResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWords extends $tea.Model {
  keyWord?: GetReviewInfoResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWordsKeyWord[];
  static names(): { [key: string]: string } {
    return {
      keyWord: 'KeyWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWord: { 'type': 'array', 'itemType': GetReviewInfoResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWordsKeyWord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReviewInfoResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoCid extends $tea.Model {
  cid?: string[];
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReviewInfoResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfo extends $tea.Model {
  phrase?: GetReviewInfoResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoPhrase;
  keyWords?: GetReviewInfoResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWords;
  cid?: GetReviewInfoResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoCid;
  static names(): { [key: string]: string } {
    return {
      phrase: 'Phrase',
      keyWords: 'KeyWords',
      cid: 'Cid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phrase: GetReviewInfoResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoPhrase,
      keyWords: GetReviewInfoResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWords,
      cid: GetReviewInfoResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoCid,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReviewInfoResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoList extends $tea.Model {
  conditionHitInfo?: GetReviewInfoResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfo[];
  static names(): { [key: string]: string } {
    return {
      conditionHitInfo: 'ConditionHitInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionHitInfo: { 'type': 'array', 'itemType': GetReviewInfoResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReviewInfoResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoReviewInfo extends $tea.Model {
  hitId?: string;
  rid?: number;
  static names(): { [key: string]: string } {
    return {
      hitId: 'HitId',
      rid: 'Rid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitId: 'string',
      rid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReviewInfoResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfo extends $tea.Model {
  ruleScoreType?: number;
  conditionHitInfoList?: GetReviewInfoResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoList;
  ruleType?: number;
  autoReview?: number;
  scoreSubId?: number;
  reviewInfo?: GetReviewInfoResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoReviewInfo;
  totalNumber?: number;
  scoreId?: number;
  rid?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      ruleScoreType: 'RuleScoreType',
      conditionHitInfoList: 'ConditionHitInfoList',
      ruleType: 'RuleType',
      autoReview: 'AutoReview',
      scoreSubId: 'ScoreSubId',
      reviewInfo: 'ReviewInfo',
      totalNumber: 'TotalNumber',
      scoreId: 'ScoreId',
      rid: 'Rid',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleScoreType: 'number',
      conditionHitInfoList: GetReviewInfoResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoList,
      ruleType: 'number',
      autoReview: 'number',
      scoreSubId: 'number',
      reviewInfo: GetReviewInfoResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoReviewInfo,
      totalNumber: 'number',
      scoreId: 'number',
      rid: 'number',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReviewInfoResponseBodyDataHitRuleReviewInfoList extends $tea.Model {
  hitRuleReviewInfo?: GetReviewInfoResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfo[];
  static names(): { [key: string]: string } {
    return {
      hitRuleReviewInfo: 'HitRuleReviewInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitRuleReviewInfo: { 'type': 'array', 'itemType': GetReviewInfoResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReviewInfoResponseBodyDataManualScoreMappingList extends $tea.Model {
  manualScoreMappingList?: string[];
  static names(): { [key: string]: string } {
    return {
      manualScoreMappingList: 'ManualScoreMappingList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      manualScoreMappingList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReviewInfoResponseBodyDataDialoguesDialogue extends $tea.Model {
  words?: string;
  identity?: string;
  begin?: number;
  beginTime?: string;
  emotionValue?: number;
  end?: number;
  speechRate?: number;
  role?: string;
  silenceDuration?: number;
  hourMinSec?: string;
  static names(): { [key: string]: string } {
    return {
      words: 'Words',
      identity: 'Identity',
      begin: 'Begin',
      beginTime: 'BeginTime',
      emotionValue: 'EmotionValue',
      end: 'End',
      speechRate: 'SpeechRate',
      role: 'Role',
      silenceDuration: 'SilenceDuration',
      hourMinSec: 'HourMinSec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      words: 'string',
      identity: 'string',
      begin: 'number',
      beginTime: 'string',
      emotionValue: 'number',
      end: 'number',
      speechRate: 'number',
      role: 'string',
      silenceDuration: 'number',
      hourMinSec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReviewInfoResponseBodyDataDialogues extends $tea.Model {
  dialogue?: GetReviewInfoResponseBodyDataDialoguesDialogue[];
  static names(): { [key: string]: string } {
    return {
      dialogue: 'Dialogue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogue: { 'type': 'array', 'itemType': GetReviewInfoResponseBodyDataDialoguesDialogue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReviewInfoResponseBodyDataHandScoreInfoListScorePoScoreInfosScoreParam extends $tea.Model {
  scoreSubName?: string;
  scoreNum?: number;
  scoreSubId?: number;
  scoreType?: number;
  hit?: number;
  static names(): { [key: string]: string } {
    return {
      scoreSubName: 'ScoreSubName',
      scoreNum: 'ScoreNum',
      scoreSubId: 'ScoreSubId',
      scoreType: 'ScoreType',
      hit: 'Hit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreSubName: 'string',
      scoreNum: 'number',
      scoreSubId: 'number',
      scoreType: 'number',
      hit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReviewInfoResponseBodyDataHandScoreInfoListScorePoScoreInfos extends $tea.Model {
  scoreParam?: GetReviewInfoResponseBodyDataHandScoreInfoListScorePoScoreInfosScoreParam[];
  static names(): { [key: string]: string } {
    return {
      scoreParam: 'ScoreParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreParam: { 'type': 'array', 'itemType': GetReviewInfoResponseBodyDataHandScoreInfoListScorePoScoreInfosScoreParam },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReviewInfoResponseBodyDataHandScoreInfoListScorePo extends $tea.Model {
  scoreInfos?: GetReviewInfoResponseBodyDataHandScoreInfoListScorePoScoreInfos;
  scoreName?: string;
  scoreId?: number;
  static names(): { [key: string]: string } {
    return {
      scoreInfos: 'ScoreInfos',
      scoreName: 'ScoreName',
      scoreId: 'ScoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreInfos: GetReviewInfoResponseBodyDataHandScoreInfoListScorePoScoreInfos,
      scoreName: 'string',
      scoreId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReviewInfoResponseBodyDataHandScoreInfoList extends $tea.Model {
  scorePo?: GetReviewInfoResponseBodyDataHandScoreInfoListScorePo[];
  static names(): { [key: string]: string } {
    return {
      scorePo: 'ScorePo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scorePo: { 'type': 'array', 'itemType': GetReviewInfoResponseBodyDataHandScoreInfoListScorePo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReviewInfoResponseBodyData extends $tea.Model {
  audioURL?: string;
  hitNumber?: number;
  nextVid?: string;
  preVid?: string;
  isAudio?: boolean;
  hitRuleReviewInfoList?: GetReviewInfoResponseBodyDataHitRuleReviewInfoList;
  audio?: boolean;
  asrWordsCount?: number;
  totalScore?: number;
  businessType?: number;
  manualScoreMappingList?: GetReviewInfoResponseBodyDataManualScoreMappingList;
  fileMergeName?: string;
  isDeleted?: boolean;
  dialogues?: GetReviewInfoResponseBodyDataDialogues;
  deleted?: boolean;
  handScoreInfoList?: GetReviewInfoResponseBodyDataHandScoreInfoList;
  vid?: string;
  reviewNumber?: number;
  static names(): { [key: string]: string } {
    return {
      audioURL: 'AudioURL',
      hitNumber: 'HitNumber',
      nextVid: 'NextVid',
      preVid: 'PreVid',
      isAudio: 'IsAudio',
      hitRuleReviewInfoList: 'HitRuleReviewInfoList',
      audio: 'Audio',
      asrWordsCount: 'AsrWordsCount',
      totalScore: 'TotalScore',
      businessType: 'BusinessType',
      manualScoreMappingList: 'ManualScoreMappingList',
      fileMergeName: 'FileMergeName',
      isDeleted: 'IsDeleted',
      dialogues: 'Dialogues',
      deleted: 'Deleted',
      handScoreInfoList: 'HandScoreInfoList',
      vid: 'Vid',
      reviewNumber: 'ReviewNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioURL: 'string',
      hitNumber: 'number',
      nextVid: 'string',
      preVid: 'string',
      isAudio: 'boolean',
      hitRuleReviewInfoList: GetReviewInfoResponseBodyDataHitRuleReviewInfoList,
      audio: 'boolean',
      asrWordsCount: 'number',
      totalScore: 'number',
      businessType: 'number',
      manualScoreMappingList: GetReviewInfoResponseBodyDataManualScoreMappingList,
      fileMergeName: 'string',
      isDeleted: 'boolean',
      dialogues: GetReviewInfoResponseBodyDataDialogues,
      deleted: 'boolean',
      handScoreInfoList: GetReviewInfoResponseBodyDataHandScoreInfoList,
      vid: 'string',
      reviewNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyDataRulesRuleInfoBusinessCategoryNameList extends $tea.Model {
  businessCategoryNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      businessCategoryNameList: 'BusinessCategoryNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCategoryNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyDataRulesRuleInfo extends $tea.Model {
  type?: number;
  status?: number;
  businessCategoryNameList?: GetRuleResponseBodyDataRulesRuleInfoBusinessCategoryNameList;
  isOnline?: number;
  scoreSubId?: number;
  createEmpid?: string;
  createTime?: string;
  lastUpdateEmpid?: string;
  isDelete?: number;
  rid?: string;
  endTime?: string;
  ruleScoreType?: number;
  weight?: string;
  startTime?: string;
  ruleLambda?: string;
  scoreSubName?: string;
  autoReview?: number;
  comments?: string;
  lastUpdateTime?: string;
  scoreName?: string;
  name?: string;
  scoreId?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      businessCategoryNameList: 'BusinessCategoryNameList',
      isOnline: 'IsOnline',
      scoreSubId: 'ScoreSubId',
      createEmpid: 'CreateEmpid',
      createTime: 'CreateTime',
      lastUpdateEmpid: 'LastUpdateEmpid',
      isDelete: 'IsDelete',
      rid: 'Rid',
      endTime: 'EndTime',
      ruleScoreType: 'RuleScoreType',
      weight: 'Weight',
      startTime: 'StartTime',
      ruleLambda: 'RuleLambda',
      scoreSubName: 'ScoreSubName',
      autoReview: 'AutoReview',
      comments: 'Comments',
      lastUpdateTime: 'LastUpdateTime',
      scoreName: 'ScoreName',
      name: 'Name',
      scoreId: 'ScoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      status: 'number',
      businessCategoryNameList: GetRuleResponseBodyDataRulesRuleInfoBusinessCategoryNameList,
      isOnline: 'number',
      scoreSubId: 'number',
      createEmpid: 'string',
      createTime: 'string',
      lastUpdateEmpid: 'string',
      isDelete: 'number',
      rid: 'string',
      endTime: 'string',
      ruleScoreType: 'number',
      weight: 'string',
      startTime: 'string',
      ruleLambda: 'string',
      scoreSubName: 'string',
      autoReview: 'number',
      comments: 'string',
      lastUpdateTime: 'string',
      scoreName: 'string',
      name: 'string',
      scoreId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyDataRules extends $tea.Model {
  ruleInfo?: GetRuleResponseBodyDataRulesRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleInfo: 'RuleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleInfo: { 'type': 'array', 'itemType': GetRuleResponseBodyDataRulesRuleInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyData extends $tea.Model {
  rules?: GetRuleResponseBodyDataRules;
  static names(): { [key: string]: string } {
    return {
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rules: GetRuleResponseBodyDataRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleCategoryResponseBodyDataRuleCountInfo extends $tea.Model {
  type?: number;
  select?: boolean;
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      select: 'Select',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      select: 'boolean',
      typeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleCategoryResponseBodyData extends $tea.Model {
  ruleCountInfo?: GetRuleCategoryResponseBodyDataRuleCountInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleCountInfo: 'RuleCountInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleCountInfo: { 'type': 'array', 'itemType': GetRuleCategoryResponseBodyDataRuleCountInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamOperKeyWords extends $tea.Model {
  operKeyWord?: string[];
  static names(): { [key: string]: string } {
    return {
      operKeyWord: 'OperKeyWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operKeyWord: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamReferences extends $tea.Model {
  reference?: string[];
  static names(): { [key: string]: string } {
    return {
      reference: 'Reference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reference: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamSimilarlySentences extends $tea.Model {
  similarlySentence?: string[];
  static names(): { [key: string]: string } {
    return {
      similarlySentence: 'SimilarlySentence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      similarlySentence: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamExcludes extends $tea.Model {
  excludes?: string[];
  static names(): { [key: string]: string } {
    return {
      excludes: 'Excludes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParam extends $tea.Model {
  regex?: string;
  phrase?: string;
  interval?: number;
  threshold?: number;
  inSentence?: boolean;
  target?: number;
  fromEnd?: boolean;
  differentRole?: boolean;
  targetRole?: string;
  score?: number;
  contextChatMatch?: boolean;
  keywordMatchSize?: number;
  average?: boolean;
  velocityInMint?: number;
  minWordSize?: number;
  keywordExtension?: boolean;
  hitTime?: number;
  from?: number;
  beginType?: string;
  compareOperator?: string;
  checkType?: number;
  maxEmotionChangeValue?: number;
  operKeyWords?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamOperKeyWords;
  references?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamReferences;
  similarlySentences?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamSimilarlySentences;
  excludes?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamExcludes;
  static names(): { [key: string]: string } {
    return {
      regex: 'Regex',
      phrase: 'Phrase',
      interval: 'Interval',
      threshold: 'Threshold',
      inSentence: 'InSentence',
      target: 'Target',
      fromEnd: 'FromEnd',
      differentRole: 'DifferentRole',
      targetRole: 'TargetRole',
      score: 'Score',
      contextChatMatch: 'ContextChatMatch',
      keywordMatchSize: 'KeywordMatchSize',
      average: 'Average',
      velocityInMint: 'VelocityInMint',
      minWordSize: 'MinWordSize',
      keywordExtension: 'KeywordExtension',
      hitTime: 'HitTime',
      from: 'From',
      beginType: 'BeginType',
      compareOperator: 'CompareOperator',
      checkType: 'CheckType',
      maxEmotionChangeValue: 'MaxEmotionChangeValue',
      operKeyWords: 'OperKeyWords',
      references: 'References',
      similarlySentences: 'SimilarlySentences',
      excludes: 'Excludes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regex: 'string',
      phrase: 'string',
      interval: 'number',
      threshold: 'number',
      inSentence: 'boolean',
      target: 'number',
      fromEnd: 'boolean',
      differentRole: 'boolean',
      targetRole: 'string',
      score: 'number',
      contextChatMatch: 'boolean',
      keywordMatchSize: 'number',
      average: 'boolean',
      velocityInMint: 'number',
      minWordSize: 'number',
      keywordExtension: 'boolean',
      hitTime: 'number',
      from: 'number',
      beginType: 'string',
      compareOperator: 'string',
      checkType: 'number',
      maxEmotionChangeValue: 'number',
      operKeyWords: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamOperKeyWords,
      references: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamReferences,
      similarlySentences: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamSimilarlySentences,
      excludes: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamExcludes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfo extends $tea.Model {
  oid?: string;
  type?: string;
  operName?: string;
  param?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParam;
  static names(): { [key: string]: string } {
    return {
      oid: 'Oid',
      type: 'Type',
      operName: 'OperName',
      param: 'Param',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oid: 'string',
      type: 'string',
      operName: 'string',
      param: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParam,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperators extends $tea.Model {
  operatorBasicInfo?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      operatorBasicInfo: 'OperatorBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorBasicInfo: { 'type': 'array', 'itemType': GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRangeAnchor extends $tea.Model {
  anchorCid?: string;
  location?: string;
  hitTime?: number;
  static names(): { [key: string]: string } {
    return {
      anchorCid: 'AnchorCid',
      location: 'Location',
      hitTime: 'HitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorCid: 'string',
      location: 'string',
      hitTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRangeRange extends $tea.Model {
  from?: number;
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRange extends $tea.Model {
  role?: string;
  absolute?: boolean;
  anchor?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRangeAnchor;
  range?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRangeRange;
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
      absolute: 'Absolute',
      anchor: 'Anchor',
      range: 'Range',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: 'string',
      absolute: 'boolean',
      anchor: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRangeAnchor,
      range: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRangeRange,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfo extends $tea.Model {
  conditionInfoCid?: string;
  operLambda?: string;
  operators?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperators;
  checkRange?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRange;
  static names(): { [key: string]: string } {
    return {
      conditionInfoCid: 'ConditionInfoCid',
      operLambda: 'OperLambda',
      operators: 'Operators',
      checkRange: 'CheckRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionInfoCid: 'string',
      operLambda: 'string',
      operators: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperators,
      checkRange: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRange,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditions extends $tea.Model {
  conditionBasicInfo?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      conditionBasicInfo: 'ConditionBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionBasicInfo: { 'type': 'array', 'itemType': GetRuleDetailResponseBodyDataConditionsConditionBasicInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataRulesRuleBasicInfoTriggers extends $tea.Model {
  trigger?: string[];
  static names(): { [key: string]: string } {
    return {
      trigger: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trigger: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataRulesRuleBasicInfoBusinessCategoriesBusinessCategoryBasicInfo extends $tea.Model {
  bid?: number;
  serviceType?: number;
  businessName?: string;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      serviceType: 'ServiceType',
      businessName: 'BusinessName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'number',
      serviceType: 'number',
      businessName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataRulesRuleBasicInfoBusinessCategories extends $tea.Model {
  businessCategoryBasicInfo?: GetRuleDetailResponseBodyDataRulesRuleBasicInfoBusinessCategoriesBusinessCategoryBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      businessCategoryBasicInfo: 'BusinessCategoryBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCategoryBasicInfo: { 'type': 'array', 'itemType': GetRuleDetailResponseBodyDataRulesRuleBasicInfoBusinessCategoriesBusinessCategoryBasicInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataRulesRuleBasicInfo extends $tea.Model {
  rid?: string;
  ruleLambda?: string;
  triggers?: GetRuleDetailResponseBodyDataRulesRuleBasicInfoTriggers;
  businessCategories?: GetRuleDetailResponseBodyDataRulesRuleBasicInfoBusinessCategories;
  static names(): { [key: string]: string } {
    return {
      rid: 'Rid',
      ruleLambda: 'RuleLambda',
      triggers: 'Triggers',
      businessCategories: 'BusinessCategories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rid: 'string',
      ruleLambda: 'string',
      triggers: GetRuleDetailResponseBodyDataRulesRuleBasicInfoTriggers,
      businessCategories: GetRuleDetailResponseBodyDataRulesRuleBasicInfoBusinessCategories,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataRules extends $tea.Model {
  ruleBasicInfo?: GetRuleDetailResponseBodyDataRulesRuleBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleBasicInfo: 'RuleBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleBasicInfo: { 'type': 'array', 'itemType': GetRuleDetailResponseBodyDataRulesRuleBasicInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyData extends $tea.Model {
  conditions?: GetRuleDetailResponseBodyDataConditions;
  rules?: GetRuleDetailResponseBodyDataRules;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: GetRuleDetailResponseBodyDataConditions,
      rules: GetRuleDetailResponseBodyDataRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDimensionResponseBodyDataRuleCountInfo extends $tea.Model {
  status?: number;
  type?: number;
  preReviewNumber?: number;
  hitNumber?: number;
  select?: boolean;
  createEmpid?: string;
  createTime?: string;
  lastUpdateEmpid?: string;
  realViolationNumber?: number;
  isDelete?: number;
  hitRate?: number;
  rid?: string;
  checkNumber?: number;
  typeName?: string;
  lastUpdateTime?: string;
  name?: string;
  hitRealViolationRate?: number;
  reviewNumber?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      preReviewNumber: 'PreReviewNumber',
      hitNumber: 'HitNumber',
      select: 'Select',
      createEmpid: 'CreateEmpid',
      createTime: 'CreateTime',
      lastUpdateEmpid: 'LastUpdateEmpid',
      realViolationNumber: 'RealViolationNumber',
      isDelete: 'IsDelete',
      hitRate: 'HitRate',
      rid: 'Rid',
      checkNumber: 'CheckNumber',
      typeName: 'TypeName',
      lastUpdateTime: 'LastUpdateTime',
      name: 'Name',
      hitRealViolationRate: 'HitRealViolationRate',
      reviewNumber: 'ReviewNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      type: 'number',
      preReviewNumber: 'number',
      hitNumber: 'number',
      select: 'boolean',
      createEmpid: 'string',
      createTime: 'string',
      lastUpdateEmpid: 'string',
      realViolationNumber: 'number',
      isDelete: 'number',
      hitRate: 'number',
      rid: 'string',
      checkNumber: 'number',
      typeName: 'string',
      lastUpdateTime: 'string',
      name: 'string',
      hitRealViolationRate: 'number',
      reviewNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDimensionResponseBodyData extends $tea.Model {
  ruleCountInfo?: GetRuleDimensionResponseBodyDataRuleCountInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleCountInfo: 'RuleCountInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleCountInfo: { 'type': 'array', 'itemType': GetRuleDimensionResponseBodyDataRuleCountInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScoreInfoResponseBodyDataScorePoScoreInfosScoreParam extends $tea.Model {
  scoreSubName?: string;
  scoreNum?: number;
  scoreSubId?: number;
  scoreType?: number;
  static names(): { [key: string]: string } {
    return {
      scoreSubName: 'ScoreSubName',
      scoreNum: 'ScoreNum',
      scoreSubId: 'ScoreSubId',
      scoreType: 'ScoreType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreSubName: 'string',
      scoreNum: 'number',
      scoreSubId: 'number',
      scoreType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScoreInfoResponseBodyDataScorePoScoreInfos extends $tea.Model {
  scoreParam?: GetScoreInfoResponseBodyDataScorePoScoreInfosScoreParam[];
  static names(): { [key: string]: string } {
    return {
      scoreParam: 'ScoreParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreParam: { 'type': 'array', 'itemType': GetScoreInfoResponseBodyDataScorePoScoreInfosScoreParam },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScoreInfoResponseBodyDataScorePo extends $tea.Model {
  scoreInfos?: GetScoreInfoResponseBodyDataScorePoScoreInfos;
  scoreName?: string;
  scoreId?: number;
  static names(): { [key: string]: string } {
    return {
      scoreInfos: 'ScoreInfos',
      scoreName: 'ScoreName',
      scoreId: 'ScoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreInfos: GetScoreInfoResponseBodyDataScorePoScoreInfos,
      scoreName: 'string',
      scoreId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScoreInfoResponseBodyData extends $tea.Model {
  scorePo?: GetScoreInfoResponseBodyDataScorePo[];
  static names(): { [key: string]: string } {
    return {
      scorePo: 'ScorePo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scorePo: { 'type': 'array', 'itemType': GetScoreInfoResponseBodyDataScorePo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupConfigResponseBodyDataAllRuleListRuleNameInfo extends $tea.Model {
  ruleName?: string;
  rid?: number;
  static names(): { [key: string]: string } {
    return {
      ruleName: 'RuleName',
      rid: 'Rid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleName: 'string',
      rid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupConfigResponseBodyDataAllRuleList extends $tea.Model {
  ruleNameInfo?: GetSkillGroupConfigResponseBodyDataAllRuleListRuleNameInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleNameInfo: 'RuleNameInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleNameInfo: { 'type': 'array', 'itemType': GetSkillGroupConfigResponseBodyDataAllRuleListRuleNameInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupConfigResponseBodyDataRuleListRuleNameInfo extends $tea.Model {
  ruleName?: string;
  rid?: number;
  static names(): { [key: string]: string } {
    return {
      ruleName: 'RuleName',
      rid: 'Rid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleName: 'string',
      rid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupConfigResponseBodyDataRuleList extends $tea.Model {
  ruleNameInfo?: GetSkillGroupConfigResponseBodyDataRuleListRuleNameInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleNameInfo: 'RuleNameInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleNameInfo: { 'type': 'array', 'itemType': GetSkillGroupConfigResponseBodyDataRuleListRuleNameInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillGroupConfigResponseBodyData extends $tea.Model {
  status?: number;
  type?: number;
  allRuleList?: GetSkillGroupConfigResponseBodyDataAllRuleList;
  updateTime?: string;
  allContentQualityCheck?: number;
  createTime?: string;
  skillGroupId?: string;
  instanceId?: string;
  vocabId?: number;
  skillGroupFrom?: number;
  rid?: string;
  skillGroupName?: string;
  ruleList?: GetSkillGroupConfigResponseBodyDataRuleList;
  modelName?: string;
  allRids?: string;
  name?: string;
  modelId?: number;
  id?: number;
  qualityCheckType?: number;
  vocabName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      allRuleList: 'AllRuleList',
      updateTime: 'UpdateTime',
      allContentQualityCheck: 'AllContentQualityCheck',
      createTime: 'CreateTime',
      skillGroupId: 'SkillGroupId',
      instanceId: 'InstanceId',
      vocabId: 'VocabId',
      skillGroupFrom: 'SkillGroupFrom',
      rid: 'Rid',
      skillGroupName: 'SkillGroupName',
      ruleList: 'RuleList',
      modelName: 'ModelName',
      allRids: 'AllRids',
      name: 'Name',
      modelId: 'ModelId',
      id: 'Id',
      qualityCheckType: 'QualityCheckType',
      vocabName: 'VocabName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      type: 'number',
      allRuleList: GetSkillGroupConfigResponseBodyDataAllRuleList,
      updateTime: 'string',
      allContentQualityCheck: 'number',
      createTime: 'string',
      skillGroupId: 'string',
      instanceId: 'string',
      vocabId: 'number',
      skillGroupFrom: 'number',
      rid: 'string',
      skillGroupName: 'string',
      ruleList: GetSkillGroupConfigResponseBodyDataRuleList,
      modelName: 'string',
      allRids: 'string',
      name: 'string',
      modelId: 'number',
      id: 'number',
      qualityCheckType: 'number',
      vocabName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyDataAgent extends $tea.Model {
  name?: string;
  skillGroup?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      skillGroup: 'SkillGroup',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      skillGroup: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyDataAsrResult extends $tea.Model {
  words?: string;
  begin?: number;
  emotionValue?: number;
  end?: number;
  speechRate?: number;
  role?: string;
  silenceDuration?: number;
  static names(): { [key: string]: string } {
    return {
      words: 'Words',
      begin: 'Begin',
      emotionValue: 'EmotionValue',
      end: 'End',
      speechRate: 'SpeechRate',
      role: 'Role',
      silenceDuration: 'SilenceDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      words: 'string',
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      speechRate: 'number',
      role: 'string',
      silenceDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyDataHitResultHitsPhrase extends $tea.Model {
  words?: string;
  begin?: number;
  emotionValue?: number;
  end?: number;
  speechRate?: number;
  role?: string;
  silenceDuration?: number;
  static names(): { [key: string]: string } {
    return {
      words: 'Words',
      begin: 'Begin',
      emotionValue: 'EmotionValue',
      end: 'End',
      speechRate: 'SpeechRate',
      role: 'Role',
      silenceDuration: 'SilenceDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      words: 'string',
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      speechRate: 'number',
      role: 'string',
      silenceDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyDataHitResultHitsKeyWords extends $tea.Model {
  from?: number;
  val?: string;
  cid?: string;
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      val: 'Val',
      cid: 'Cid',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      val: 'string',
      cid: 'string',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyDataHitResultHits extends $tea.Model {
  phrase?: GetSyncResultResponseBodyDataHitResultHitsPhrase;
  keyWords?: GetSyncResultResponseBodyDataHitResultHitsKeyWords[];
  cid?: string[];
  static names(): { [key: string]: string } {
    return {
      phrase: 'Phrase',
      keyWords: 'KeyWords',
      cid: 'Cid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phrase: GetSyncResultResponseBodyDataHitResultHitsPhrase,
      keyWords: { 'type': 'array', 'itemType': GetSyncResultResponseBodyDataHitResultHitsKeyWords },
      cid: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyDataHitResult extends $tea.Model {
  type?: string;
  hits?: GetSyncResultResponseBodyDataHitResultHits[];
  reviewResult?: number;
  name?: string;
  rid?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      hits: 'Hits',
      reviewResult: 'ReviewResult',
      name: 'Name',
      rid: 'Rid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      hits: { 'type': 'array', 'itemType': GetSyncResultResponseBodyDataHitResultHits },
      reviewResult: 'number',
      name: 'string',
      rid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyDataRecording extends $tea.Model {
  callee?: string;
  business?: string;
  remark3?: string;
  url?: string;
  primaryId?: string;
  remark1?: string;
  callType?: number;
  remark2?: string;
  caller?: string;
  callId?: string;
  duration?: number;
  dataSetName?: string;
  name?: string;
  id?: string;
  callTime?: string;
  static names(): { [key: string]: string } {
    return {
      callee: 'Callee',
      business: 'Business',
      remark3: 'Remark3',
      url: 'Url',
      primaryId: 'PrimaryId',
      remark1: 'Remark1',
      callType: 'CallType',
      remark2: 'Remark2',
      caller: 'Caller',
      callId: 'CallId',
      duration: 'Duration',
      dataSetName: 'DataSetName',
      name: 'Name',
      id: 'Id',
      callTime: 'CallTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callee: 'string',
      business: 'string',
      remark3: 'string',
      url: 'string',
      primaryId: 'string',
      remark1: 'string',
      callType: 'number',
      remark2: 'string',
      caller: 'string',
      callId: 'string',
      duration: 'number',
      dataSetName: 'string',
      name: 'string',
      id: 'string',
      callTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyData extends $tea.Model {
  status?: number;
  errorMessage?: string;
  reviewer?: string;
  createTime?: string;
  reviewStatus?: number;
  taskName?: string;
  reviewResult?: number;
  score?: number;
  agent?: GetSyncResultResponseBodyDataAgent;
  asrResult?: GetSyncResultResponseBodyDataAsrResult[];
  hitResult?: GetSyncResultResponseBodyDataHitResult[];
  comments?: string;
  recording?: GetSyncResultResponseBodyDataRecording;
  taskId?: string;
  resolver?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      errorMessage: 'ErrorMessage',
      reviewer: 'Reviewer',
      createTime: 'CreateTime',
      reviewStatus: 'ReviewStatus',
      taskName: 'TaskName',
      reviewResult: 'ReviewResult',
      score: 'Score',
      agent: 'Agent',
      asrResult: 'AsrResult',
      hitResult: 'HitResult',
      comments: 'Comments',
      recording: 'Recording',
      taskId: 'TaskId',
      resolver: 'Resolver',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      errorMessage: 'string',
      reviewer: 'string',
      createTime: 'string',
      reviewStatus: 'number',
      taskName: 'string',
      reviewResult: 'number',
      score: 'number',
      agent: GetSyncResultResponseBodyDataAgent,
      asrResult: { 'type': 'array', 'itemType': GetSyncResultResponseBodyDataAsrResult },
      hitResult: { 'type': 'array', 'itemType': GetSyncResultResponseBodyDataHitResult },
      comments: 'string',
      recording: GetSyncResultResponseBodyDataRecording,
      taskId: 'string',
      resolver: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskFileResultListResponseBodyDataTaskResultReviewInfoHitRuleSet extends $tea.Model {
  hitRuleSet?: string[];
  static names(): { [key: string]: string } {
    return {
      hitRuleSet: 'HitRuleSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitRuleSet: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskFileResultListResponseBodyDataTaskResultReviewInfo extends $tea.Model {
  status?: number;
  hitNumber?: number;
  dataType?: number;
  nextVid?: string;
  hitRule?: boolean;
  preVid?: string;
  isHitRule?: boolean;
  realViolationNumber?: number;
  reviewAccuracyRate?: number;
  fileName?: string;
  totalScore?: number;
  checkNumber?: number;
  fileMergeName?: string;
  bucketName?: string;
  handTaskFile?: boolean;
  hitRuleSet?: GetTaskFileResultListResponseBodyDataTaskResultReviewInfoHitRuleSet;
  taskId?: string;
  vid?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      hitNumber: 'HitNumber',
      dataType: 'DataType',
      nextVid: 'NextVid',
      hitRule: 'HitRule',
      preVid: 'PreVid',
      isHitRule: 'IsHitRule',
      realViolationNumber: 'RealViolationNumber',
      reviewAccuracyRate: 'ReviewAccuracyRate',
      fileName: 'FileName',
      totalScore: 'TotalScore',
      checkNumber: 'CheckNumber',
      fileMergeName: 'FileMergeName',
      bucketName: 'BucketName',
      handTaskFile: 'HandTaskFile',
      hitRuleSet: 'HitRuleSet',
      taskId: 'TaskId',
      vid: 'Vid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      hitNumber: 'number',
      dataType: 'number',
      nextVid: 'string',
      hitRule: 'boolean',
      preVid: 'string',
      isHitRule: 'boolean',
      realViolationNumber: 'number',
      reviewAccuracyRate: 'number',
      fileName: 'string',
      totalScore: 'number',
      checkNumber: 'number',
      fileMergeName: 'string',
      bucketName: 'string',
      handTaskFile: 'boolean',
      hitRuleSet: GetTaskFileResultListResponseBodyDataTaskResultReviewInfoHitRuleSet,
      taskId: 'string',
      vid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskFileResultListResponseBodyData extends $tea.Model {
  taskResultReviewInfo?: GetTaskFileResultListResponseBodyDataTaskResultReviewInfo[];
  static names(): { [key: string]: string } {
    return {
      taskResultReviewInfo: 'TaskResultReviewInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskResultReviewInfo: { 'type': 'array', 'itemType': GetTaskFileResultListResponseBodyDataTaskResultReviewInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskRuleListResponseBodyDataRuleCountInfo extends $tea.Model {
  status?: number;
  type?: number;
  preReviewNumber?: number;
  hitNumber?: number;
  select?: boolean;
  createEmpid?: string;
  createTime?: number;
  lastUpdateEmpid?: string;
  realViolationNumber?: number;
  isDelete?: number;
  hitRate?: number;
  rid?: string;
  checkNumber?: number;
  typeName?: string;
  lastUpdateTime?: number;
  name?: string;
  hitRealViolationRate?: number;
  reviewNumber?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      preReviewNumber: 'PreReviewNumber',
      hitNumber: 'HitNumber',
      select: 'Select',
      createEmpid: 'CreateEmpid',
      createTime: 'CreateTime',
      lastUpdateEmpid: 'LastUpdateEmpid',
      realViolationNumber: 'RealViolationNumber',
      isDelete: 'IsDelete',
      hitRate: 'HitRate',
      rid: 'Rid',
      checkNumber: 'CheckNumber',
      typeName: 'TypeName',
      lastUpdateTime: 'LastUpdateTime',
      name: 'Name',
      hitRealViolationRate: 'HitRealViolationRate',
      reviewNumber: 'ReviewNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      type: 'number',
      preReviewNumber: 'number',
      hitNumber: 'number',
      select: 'boolean',
      createEmpid: 'string',
      createTime: 'number',
      lastUpdateEmpid: 'string',
      realViolationNumber: 'number',
      isDelete: 'number',
      hitRate: 'number',
      rid: 'string',
      checkNumber: 'number',
      typeName: 'string',
      lastUpdateTime: 'number',
      name: 'string',
      hitRealViolationRate: 'number',
      reviewNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskRuleListResponseBodyData extends $tea.Model {
  ruleCountInfo?: GetTaskRuleListResponseBodyDataRuleCountInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleCountInfo: 'RuleCountInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleCountInfo: { 'type': 'array', 'itemType': GetTaskRuleListResponseBodyDataRuleCountInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThesaurusBySynonymForApiResponseBodyDataThesaurusPoSynonymList extends $tea.Model {
  synonymList?: string[];
  static names(): { [key: string]: string } {
    return {
      synonymList: 'SynonymList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      synonymList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThesaurusBySynonymForApiResponseBodyDataThesaurusPo extends $tea.Model {
  business?: string;
  synonymList?: GetThesaurusBySynonymForApiResponseBodyDataThesaurusPoSynonymList;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      business: 'Business',
      synonymList: 'SynonymList',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      business: 'string',
      synonymList: GetThesaurusBySynonymForApiResponseBodyDataThesaurusPoSynonymList,
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThesaurusBySynonymForApiResponseBodyData extends $tea.Model {
  thesaurusPo?: GetThesaurusBySynonymForApiResponseBodyDataThesaurusPo[];
  static names(): { [key: string]: string } {
    return {
      thesaurusPo: 'ThesaurusPo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thesaurusPo: { 'type': 'array', 'itemType': GetThesaurusBySynonymForApiResponseBodyDataThesaurusPo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertScoreForApiResponseBodyData extends $tea.Model {
  scoreName?: string;
  scoreId?: number;
  static names(): { [key: string]: string } {
    return {
      scoreName: 'ScoreName',
      scoreId: 'ScoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreName: 'string',
      scoreId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertSubScoreForApiResponseBodyData extends $tea.Model {
  scoreSubName?: string;
  scoreSubId?: number;
  static names(): { [key: string]: string } {
    return {
      scoreSubName: 'ScoreSubName',
      scoreSubId: 'ScoreSubId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreSubName: 'string',
      scoreSubId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsrVocabResponseBodyDataAsrVocab extends $tea.Model {
  vocabularyId?: string;
  updateTime?: string;
  createTime?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      vocabularyId: 'VocabularyId',
      updateTime: 'UpdateTime',
      createTime: 'CreateTime',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vocabularyId: 'string',
      updateTime: 'string',
      createTime: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsrVocabResponseBodyData extends $tea.Model {
  asrVocab?: ListAsrVocabResponseBodyDataAsrVocab[];
  static names(): { [key: string]: string } {
    return {
      asrVocab: 'AsrVocab',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrVocab: { 'type': 'array', 'itemType': ListAsrVocabResponseBodyDataAsrVocab },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetTaskResponseBodyDataPageTaskInfoRuleNameInfoListRuleNameInfo extends $tea.Model {
  ruleName?: string;
  rid?: number;
  static names(): { [key: string]: string } {
    return {
      ruleName: 'RuleName',
      rid: 'Rid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleName: 'string',
      rid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetTaskResponseBodyDataPageTaskInfoRuleNameInfoList extends $tea.Model {
  ruleNameInfo?: ListDataSetTaskResponseBodyDataPageTaskInfoRuleNameInfoListRuleNameInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleNameInfo: 'RuleNameInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleNameInfo: { 'type': 'array', 'itemType': ListDataSetTaskResponseBodyDataPageTaskInfoRuleNameInfoListRuleNameInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetTaskResponseBodyDataPageTaskInfoDataSets extends $tea.Model {
  dataSets?: string[];
  static names(): { [key: string]: string } {
    return {
      dataSets: 'dataSets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSets: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetTaskResponseBodyDataPageTaskInfo extends $tea.Model {
  status?: number;
  isTaskComplete?: boolean;
  ruleNameInfoList?: ListDataSetTaskResponseBodyDataPageTaskInfoRuleNameInfoList;
  scheduleRatio?: number;
  taskComplete?: boolean;
  dataSets?: ListDataSetTaskResponseBodyDataPageTaskInfoDataSets;
  dataSetSize?: number;
  ruleSize?: number;
  jobName?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      isTaskComplete: 'IsTaskComplete',
      ruleNameInfoList: 'RuleNameInfoList',
      scheduleRatio: 'ScheduleRatio',
      taskComplete: 'TaskComplete',
      dataSets: 'DataSets',
      dataSetSize: 'DataSetSize',
      ruleSize: 'RuleSize',
      jobName: 'JobName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      isTaskComplete: 'boolean',
      ruleNameInfoList: ListDataSetTaskResponseBodyDataPageTaskInfoRuleNameInfoList,
      scheduleRatio: 'number',
      taskComplete: 'boolean',
      dataSets: ListDataSetTaskResponseBodyDataPageTaskInfoDataSets,
      dataSetSize: 'number',
      ruleSize: 'number',
      jobName: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSetTaskResponseBodyData extends $tea.Model {
  pageTaskInfo?: ListDataSetTaskResponseBodyDataPageTaskInfo[];
  static names(): { [key: string]: string } {
    return {
      pageTaskInfo: 'PageTaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageTaskInfo: { 'type': 'array', 'itemType': ListDataSetTaskResponseBodyDataPageTaskInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotWordsTasksResponseBodyDataHotWordsTaskPoWordsParam extends $tea.Model {
  excludes?: string;
  includes?: string;
  extraConfigId?: number;
  static names(): { [key: string]: string } {
    return {
      excludes: 'Excludes',
      includes: 'Includes',
      extraConfigId: 'ExtraConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludes: 'string',
      includes: 'string',
      extraConfigId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotWordsTasksResponseBodyDataHotWordsTaskPoDialogueParam extends $tea.Model {
  endTime?: string;
  dialogueId?: number;
  endIndex?: number;
  startTime?: string;
  sourceType?: number;
  startIndex?: number;
  role?: number;
  dataSetIds?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      dialogueId: 'DialogueId',
      endIndex: 'EndIndex',
      startTime: 'StartTime',
      sourceType: 'SourceType',
      startIndex: 'StartIndex',
      role: 'Role',
      dataSetIds: 'DataSetIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      dialogueId: 'number',
      endIndex: 'number',
      startTime: 'string',
      sourceType: 'number',
      startIndex: 'number',
      role: 'number',
      dataSetIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotWordsTasksResponseBodyDataHotWordsTaskPo extends $tea.Model {
  type?: number;
  status?: number;
  taskConfigId?: number;
  message?: string;
  lastExecutionTime?: string;
  timeUnit?: number;
  wordsParam?: ListHotWordsTasksResponseBodyDataHotWordsTaskPoWordsParam;
  endTime?: string;
  timeInterval?: number;
  startTime?: string;
  instanceStatus?: number;
  name?: string;
  dialogueParam?: ListHotWordsTasksResponseBodyDataHotWordsTaskPoDialogueParam;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      taskConfigId: 'TaskConfigId',
      message: 'Message',
      lastExecutionTime: 'LastExecutionTime',
      timeUnit: 'TimeUnit',
      wordsParam: 'WordsParam',
      endTime: 'EndTime',
      timeInterval: 'TimeInterval',
      startTime: 'StartTime',
      instanceStatus: 'InstanceStatus',
      name: 'Name',
      dialogueParam: 'DialogueParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      status: 'number',
      taskConfigId: 'number',
      message: 'string',
      lastExecutionTime: 'string',
      timeUnit: 'number',
      wordsParam: ListHotWordsTasksResponseBodyDataHotWordsTaskPoWordsParam,
      endTime: 'string',
      timeInterval: 'number',
      startTime: 'string',
      instanceStatus: 'number',
      name: 'string',
      dialogueParam: ListHotWordsTasksResponseBodyDataHotWordsTaskPoDialogueParam,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotWordsTasksResponseBodyData extends $tea.Model {
  hotWordsTaskPo?: ListHotWordsTasksResponseBodyDataHotWordsTaskPo[];
  static names(): { [key: string]: string } {
    return {
      hotWordsTaskPo: 'HotWordsTaskPo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotWordsTaskPo: { 'type': 'array', 'itemType': ListHotWordsTasksResponseBodyDataHotWordsTaskPo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisionsPrecision extends $tea.Model {
  status?: number;
  createTime?: string;
  modelName?: string;
  taskId?: string;
  modelId?: number;
  precision?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      createTime: 'CreateTime',
      modelName: 'ModelName',
      taskId: 'TaskId',
      modelId: 'ModelId',
      precision: 'Precision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      createTime: 'string',
      modelName: 'string',
      taskId: 'string',
      modelId: 'number',
      precision: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisions extends $tea.Model {
  precision?: ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisionsPrecision[];
  static names(): { [key: string]: string } {
    return {
      precision: 'Precision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      precision: { 'type': 'array', 'itemType': ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisionsPrecision },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrecisionTaskResponseBodyDataPrecisionTask extends $tea.Model {
  status?: number;
  updateTime?: string;
  createTime?: string;
  incorrectWords?: number;
  dataSetId?: number;
  verifiedCount?: number;
  totalCount?: number;
  source?: number;
  precisions?: ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisions;
  duration?: number;
  dataSetName?: string;
  name?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      updateTime: 'UpdateTime',
      createTime: 'CreateTime',
      incorrectWords: 'IncorrectWords',
      dataSetId: 'DataSetId',
      verifiedCount: 'VerifiedCount',
      totalCount: 'TotalCount',
      source: 'Source',
      precisions: 'Precisions',
      duration: 'Duration',
      dataSetName: 'DataSetName',
      name: 'Name',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      updateTime: 'string',
      createTime: 'string',
      incorrectWords: 'number',
      dataSetId: 'number',
      verifiedCount: 'number',
      totalCount: 'number',
      source: 'number',
      precisions: ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisions,
      duration: 'number',
      dataSetName: 'string',
      name: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrecisionTaskResponseBodyData extends $tea.Model {
  precisionTask?: ListPrecisionTaskResponseBodyDataPrecisionTask[];
  static names(): { [key: string]: string } {
    return {
      precisionTask: 'PrecisionTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      precisionTask: { 'type': 'array', 'itemType': ListPrecisionTaskResponseBodyDataPrecisionTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyDataRole extends $tea.Model {
  displayName?: string;
  updateTime?: string;
  createTime?: string;
  name?: string;
  id?: number;
  level?: number;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      updateTime: 'UpdateTime',
      createTime: 'CreateTime',
      name: 'Name',
      id: 'Id',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      updateTime: 'string',
      createTime: 'string',
      name: 'string',
      id: 'number',
      level: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyData extends $tea.Model {
  role?: ListRolesResponseBodyDataRole[];
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: { 'type': 'array', 'itemType': ListRolesResponseBodyDataRole },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyData extends $tea.Model {
  type?: number;
  ruleType?: number;
  businessCategoryNameList?: string[];
  createTime?: string;
  comments?: string;
  typeName?: string;
  name?: string;
  rid?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      ruleType: 'RuleType',
      businessCategoryNameList: 'BusinessCategoryNameList',
      createTime: 'CreateTime',
      comments: 'Comments',
      typeName: 'TypeName',
      name: 'Name',
      rid: 'Rid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      ruleType: 'number',
      businessCategoryNameList: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      comments: 'string',
      typeName: 'string',
      name: 'string',
      rid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBodyDataSkillGroupConfigAllRuleListRuleNameInfo extends $tea.Model {
  ruleName?: string;
  rid?: number;
  static names(): { [key: string]: string } {
    return {
      ruleName: 'RuleName',
      rid: 'Rid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleName: 'string',
      rid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBodyDataSkillGroupConfigAllRuleList extends $tea.Model {
  ruleNameInfo?: ListSkillGroupConfigResponseBodyDataSkillGroupConfigAllRuleListRuleNameInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleNameInfo: 'RuleNameInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleNameInfo: { 'type': 'array', 'itemType': ListSkillGroupConfigResponseBodyDataSkillGroupConfigAllRuleListRuleNameInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBodyDataSkillGroupConfigRuleListRuleNameInfo extends $tea.Model {
  ruleName?: string;
  rid?: number;
  static names(): { [key: string]: string } {
    return {
      ruleName: 'RuleName',
      rid: 'Rid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleName: 'string',
      rid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBodyDataSkillGroupConfigRuleList extends $tea.Model {
  ruleNameInfo?: ListSkillGroupConfigResponseBodyDataSkillGroupConfigRuleListRuleNameInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleNameInfo: 'RuleNameInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleNameInfo: { 'type': 'array', 'itemType': ListSkillGroupConfigResponseBodyDataSkillGroupConfigRuleListRuleNameInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBodyDataSkillGroupConfigSkillGroupScreensSkillGroupScreen extends $tea.Model {
  value?: string;
  dataType?: number;
  symbol?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      dataType: 'DataType',
      symbol: 'Symbol',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      dataType: 'number',
      symbol: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBodyDataSkillGroupConfigSkillGroupScreens extends $tea.Model {
  skillGroupScreen?: ListSkillGroupConfigResponseBodyDataSkillGroupConfigSkillGroupScreensSkillGroupScreen[];
  static names(): { [key: string]: string } {
    return {
      skillGroupScreen: 'SkillGroupScreen',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupScreen: { 'type': 'array', 'itemType': ListSkillGroupConfigResponseBodyDataSkillGroupConfigSkillGroupScreensSkillGroupScreen },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBodyDataSkillGroupConfig extends $tea.Model {
  status?: number;
  type?: number;
  allRuleList?: ListSkillGroupConfigResponseBodyDataSkillGroupConfigAllRuleList;
  updateTime?: string;
  allContentQualityCheck?: number;
  createTime?: string;
  skillGroupId?: string;
  screenSwitch?: boolean;
  instanceId?: string;
  vocabId?: number;
  skillGroupFrom?: number;
  rid?: string;
  skillGroupName?: string;
  ruleList?: ListSkillGroupConfigResponseBodyDataSkillGroupConfigRuleList;
  modelName?: string;
  allRids?: string;
  name?: string;
  modelId?: number;
  id?: number;
  skillGroupScreens?: ListSkillGroupConfigResponseBodyDataSkillGroupConfigSkillGroupScreens;
  qualityCheckType?: number;
  vocabName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      allRuleList: 'AllRuleList',
      updateTime: 'UpdateTime',
      allContentQualityCheck: 'AllContentQualityCheck',
      createTime: 'CreateTime',
      skillGroupId: 'SkillGroupId',
      screenSwitch: 'ScreenSwitch',
      instanceId: 'InstanceId',
      vocabId: 'VocabId',
      skillGroupFrom: 'SkillGroupFrom',
      rid: 'Rid',
      skillGroupName: 'SkillGroupName',
      ruleList: 'RuleList',
      modelName: 'ModelName',
      allRids: 'AllRids',
      name: 'Name',
      modelId: 'ModelId',
      id: 'Id',
      skillGroupScreens: 'SkillGroupScreens',
      qualityCheckType: 'QualityCheckType',
      vocabName: 'VocabName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      type: 'number',
      allRuleList: ListSkillGroupConfigResponseBodyDataSkillGroupConfigAllRuleList,
      updateTime: 'string',
      allContentQualityCheck: 'number',
      createTime: 'string',
      skillGroupId: 'string',
      screenSwitch: 'boolean',
      instanceId: 'string',
      vocabId: 'number',
      skillGroupFrom: 'number',
      rid: 'string',
      skillGroupName: 'string',
      ruleList: ListSkillGroupConfigResponseBodyDataSkillGroupConfigRuleList,
      modelName: 'string',
      allRids: 'string',
      name: 'string',
      modelId: 'number',
      id: 'number',
      skillGroupScreens: ListSkillGroupConfigResponseBodyDataSkillGroupConfigSkillGroupScreens,
      qualityCheckType: 'number',
      vocabName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBodyData extends $tea.Model {
  skillGroupConfig?: ListSkillGroupConfigResponseBodyDataSkillGroupConfig[];
  static names(): { [key: string]: string } {
    return {
      skillGroupConfig: 'SkillGroupConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupConfig: { 'type': 'array', 'itemType': ListSkillGroupConfigResponseBodyDataSkillGroupConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRulesRuleBasicInfo extends $tea.Model {
  name?: string;
  rid?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      rid: 'Rid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      rid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRules extends $tea.Model {
  ruleBasicInfo?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRulesRuleBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleBasicInfo: 'RuleBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleBasicInfo: { 'type': 'array', 'itemType': ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRulesRuleBasicInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroupsSkillGroup extends $tea.Model {
  skillId?: string;
  skillName?: string;
  static names(): { [key: string]: string } {
    return {
      skillId: 'SkillId',
      skillName: 'SkillName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillId: 'string',
      skillName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroups extends $tea.Model {
  skillGroup?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroupsSkillGroup[];
  static names(): { [key: string]: string } {
    return {
      skillGroup: 'SkillGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroup: { 'type': 'array', 'itemType': ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroupsSkillGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgentsAgent extends $tea.Model {
  agentId?: string;
  agentName?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgents extends $tea.Model {
  agent?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgentsAgent[];
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: { 'type': 'array', 'itemType': ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgentsAgent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewersReviewer extends $tea.Model {
  reviewerName?: string;
  reviewerId?: string;
  static names(): { [key: string]: string } {
    return {
      reviewerName: 'ReviewerName',
      reviewerId: 'ReviewerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewerName: 'string',
      reviewerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewers extends $tea.Model {
  reviewer?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewersReviewer[];
  static names(): { [key: string]: string } {
    return {
      reviewer: 'Reviewer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewer: { 'type': 'array', 'itemType': ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewersReviewer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfo extends $tea.Model {
  skillGroupsStr?: string;
  updateTime?: string;
  durationMax?: number;
  createTime?: string;
  priority?: number;
  agentsStr?: string;
  durationMin?: number;
  rules?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRules;
  ruleId?: number;
  skillGroups?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroups;
  agents?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgents;
  callType?: number;
  enabled?: number;
  reviewers?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewers;
  static names(): { [key: string]: string } {
    return {
      skillGroupsStr: 'SkillGroupsStr',
      updateTime: 'UpdateTime',
      durationMax: 'DurationMax',
      createTime: 'CreateTime',
      priority: 'Priority',
      agentsStr: 'AgentsStr',
      durationMin: 'DurationMin',
      rules: 'Rules',
      ruleId: 'RuleId',
      skillGroups: 'SkillGroups',
      agents: 'Agents',
      callType: 'CallType',
      enabled: 'Enabled',
      reviewers: 'Reviewers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupsStr: 'string',
      updateTime: 'string',
      durationMax: 'number',
      createTime: 'string',
      priority: 'number',
      agentsStr: 'string',
      durationMin: 'number',
      rules: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRules,
      ruleId: 'number',
      skillGroups: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroups,
      agents: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgents,
      callType: 'number',
      enabled: 'number',
      reviewers: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewers,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyData extends $tea.Model {
  taskAssignRuleInfo?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      taskAssignRuleInfo: 'TaskAssignRuleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskAssignRuleInfo: { 'type': 'array', 'itemType': ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyDataUser extends $tea.Model {
  displayName?: string;
  updateTime?: string;
  description?: string;
  createTime?: string;
  loginUserType?: number;
  aliUid?: string;
  roleName?: string;
  userName?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      updateTime: 'UpdateTime',
      description: 'Description',
      createTime: 'CreateTime',
      loginUserType: 'LoginUserType',
      aliUid: 'AliUid',
      roleName: 'RoleName',
      userName: 'UserName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      updateTime: 'string',
      description: 'string',
      createTime: 'string',
      loginUserType: 'number',
      aliUid: 'string',
      roleName: 'string',
      userName: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyData extends $tea.Model {
  user?: ListUsersResponseBodyDataUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': ListUsersResponseBodyDataUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningConfigResponseBodyDataWarningConfigInfoRidList extends $tea.Model {
  ridList?: string[];
  static names(): { [key: string]: string } {
    return {
      ridList: 'RidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ridList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningConfigResponseBodyDataWarningConfigInfoChannelsChannel extends $tea.Model {
  type?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningConfigResponseBodyDataWarningConfigInfoChannels extends $tea.Model {
  channel?: ListWarningConfigResponseBodyDataWarningConfigInfoChannelsChannel[];
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: { 'type': 'array', 'itemType': ListWarningConfigResponseBodyDataWarningConfigInfoChannelsChannel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningConfigResponseBodyDataWarningConfigInfoRuleListWarningRule extends $tea.Model {
  ruleName?: string;
  rid?: number;
  static names(): { [key: string]: string } {
    return {
      ruleName: 'RuleName',
      rid: 'Rid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleName: 'string',
      rid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningConfigResponseBodyDataWarningConfigInfoRuleList extends $tea.Model {
  warningRule?: ListWarningConfigResponseBodyDataWarningConfigInfoRuleListWarningRule[];
  static names(): { [key: string]: string } {
    return {
      warningRule: 'WarningRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      warningRule: { 'type': 'array', 'itemType': ListWarningConfigResponseBodyDataWarningConfigInfoRuleListWarningRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningConfigResponseBodyDataWarningConfigInfo extends $tea.Model {
  status?: number;
  configName?: string;
  updateTime?: string;
  configId?: number;
  ridList?: ListWarningConfigResponseBodyDataWarningConfigInfoRidList;
  createTime?: string;
  channels?: ListWarningConfigResponseBodyDataWarningConfigInfoChannels;
  ruleList?: ListWarningConfigResponseBodyDataWarningConfigInfoRuleList;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      configName: 'ConfigName',
      updateTime: 'UpdateTime',
      configId: 'ConfigId',
      ridList: 'RidList',
      createTime: 'CreateTime',
      channels: 'Channels',
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      configName: 'string',
      updateTime: 'string',
      configId: 'number',
      ridList: ListWarningConfigResponseBodyDataWarningConfigInfoRidList,
      createTime: 'string',
      channels: ListWarningConfigResponseBodyDataWarningConfigInfoChannels,
      ruleList: ListWarningConfigResponseBodyDataWarningConfigInfoRuleList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarningConfigResponseBodyData extends $tea.Model {
  warningConfigInfo?: ListWarningConfigResponseBodyDataWarningConfigInfo[];
  static names(): { [key: string]: string } {
    return {
      warningConfigInfo: 'WarningConfigInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      warningConfigInfo: { 'type': 'array', 'itemType': ListWarningConfigResponseBodyDataWarningConfigInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartAsrTaskResponseBodyDataRestartResult extends $tea.Model {
  data?: string;
  success?: boolean;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      success: 'Success',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      success: 'boolean',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartAsrTaskResponseBodyData extends $tea.Model {
  restartResult?: RestartAsrTaskResponseBodyDataRestartResult[];
  static names(): { [key: string]: string } {
    return {
      restartResult: 'RestartResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restartResult: { 'type': 'array', 'itemType': RestartAsrTaskResponseBodyDataRestartResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReviewSingleResultByIdResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoPhrase extends $tea.Model {
  words?: string;
  begin?: number;
  identity?: string;
  pid?: number;
  emotionValue?: number;
  end?: number;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      words: 'Words',
      begin: 'Begin',
      identity: 'Identity',
      pid: 'Pid',
      emotionValue: 'EmotionValue',
      end: 'End',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      words: 'string',
      begin: 'number',
      identity: 'string',
      pid: 'number',
      emotionValue: 'number',
      end: 'number',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReviewSingleResultByIdResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWordsKeyWord extends $tea.Model {
  from?: number;
  val?: string;
  tid?: string;
  pid?: number;
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      val: 'Val',
      tid: 'Tid',
      pid: 'Pid',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      val: 'string',
      tid: 'string',
      pid: 'number',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReviewSingleResultByIdResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWords extends $tea.Model {
  keyWord?: ReviewSingleResultByIdResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWordsKeyWord[];
  static names(): { [key: string]: string } {
    return {
      keyWord: 'KeyWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWord: { 'type': 'array', 'itemType': ReviewSingleResultByIdResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWordsKeyWord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReviewSingleResultByIdResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoCid extends $tea.Model {
  cid?: string[];
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReviewSingleResultByIdResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfo extends $tea.Model {
  phrase?: ReviewSingleResultByIdResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoPhrase;
  keyWords?: ReviewSingleResultByIdResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWords;
  cid?: ReviewSingleResultByIdResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoCid;
  static names(): { [key: string]: string } {
    return {
      phrase: 'Phrase',
      keyWords: 'KeyWords',
      cid: 'Cid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phrase: ReviewSingleResultByIdResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoPhrase,
      keyWords: ReviewSingleResultByIdResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWords,
      cid: ReviewSingleResultByIdResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoCid,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReviewSingleResultByIdResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoList extends $tea.Model {
  conditionHitInfo?: ReviewSingleResultByIdResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfo[];
  static names(): { [key: string]: string } {
    return {
      conditionHitInfo: 'ConditionHitInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionHitInfo: { 'type': 'array', 'itemType': ReviewSingleResultByIdResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReviewSingleResultByIdResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoReviewInfo extends $tea.Model {
  hitId?: string;
  rid?: number;
  static names(): { [key: string]: string } {
    return {
      hitId: 'HitId',
      rid: 'Rid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitId: 'string',
      rid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReviewSingleResultByIdResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfo extends $tea.Model {
  ruleScoreType?: number;
  conditionHitInfoList?: ReviewSingleResultByIdResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoList;
  ruleType?: number;
  autoReview?: number;
  scoreSubId?: number;
  comments?: string;
  reviewInfo?: ReviewSingleResultByIdResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoReviewInfo;
  totalNumber?: number;
  scoreId?: number;
  ruleName?: string;
  rid?: number;
  static names(): { [key: string]: string } {
    return {
      ruleScoreType: 'RuleScoreType',
      conditionHitInfoList: 'ConditionHitInfoList',
      ruleType: 'RuleType',
      autoReview: 'AutoReview',
      scoreSubId: 'ScoreSubId',
      comments: 'Comments',
      reviewInfo: 'ReviewInfo',
      totalNumber: 'TotalNumber',
      scoreId: 'ScoreId',
      ruleName: 'RuleName',
      rid: 'Rid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleScoreType: 'number',
      conditionHitInfoList: ReviewSingleResultByIdResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoList,
      ruleType: 'number',
      autoReview: 'number',
      scoreSubId: 'number',
      comments: 'string',
      reviewInfo: ReviewSingleResultByIdResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoReviewInfo,
      totalNumber: 'number',
      scoreId: 'number',
      ruleName: 'string',
      rid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReviewSingleResultByIdResponseBodyDataHitRuleReviewInfoList extends $tea.Model {
  hitRuleReviewInfo?: ReviewSingleResultByIdResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfo[];
  static names(): { [key: string]: string } {
    return {
      hitRuleReviewInfo: 'HitRuleReviewInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitRuleReviewInfo: { 'type': 'array', 'itemType': ReviewSingleResultByIdResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReviewSingleResultByIdResponseBodyDataManualScoreMappingList extends $tea.Model {
  manualScoreMappingList?: string[];
  static names(): { [key: string]: string } {
    return {
      manualScoreMappingList: 'ManualScoreMappingList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      manualScoreMappingList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReviewSingleResultByIdResponseBodyDataDialoguesDialogue extends $tea.Model {
  words?: string;
  identity?: string;
  begin?: number;
  beginTime?: number;
  emotionValue?: number;
  end?: number;
  speechRate?: number;
  role?: string;
  silenceDuration?: number;
  hourMinSec?: string;
  static names(): { [key: string]: string } {
    return {
      words: 'Words',
      identity: 'Identity',
      begin: 'Begin',
      beginTime: 'BeginTime',
      emotionValue: 'EmotionValue',
      end: 'End',
      speechRate: 'SpeechRate',
      role: 'Role',
      silenceDuration: 'SilenceDuration',
      hourMinSec: 'HourMinSec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      words: 'string',
      identity: 'string',
      begin: 'number',
      beginTime: 'number',
      emotionValue: 'number',
      end: 'number',
      speechRate: 'number',
      role: 'string',
      silenceDuration: 'number',
      hourMinSec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReviewSingleResultByIdResponseBodyDataDialogues extends $tea.Model {
  dialogue?: ReviewSingleResultByIdResponseBodyDataDialoguesDialogue[];
  static names(): { [key: string]: string } {
    return {
      dialogue: 'Dialogue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogue: { 'type': 'array', 'itemType': ReviewSingleResultByIdResponseBodyDataDialoguesDialogue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReviewSingleResultByIdResponseBodyDataHandScoreInfoListScorePoScoreInfosScoreParam extends $tea.Model {
  scoreSubName?: string;
  scoreNum?: number;
  scoreSubId?: number;
  scoreType?: number;
  hit?: number;
  static names(): { [key: string]: string } {
    return {
      scoreSubName: 'ScoreSubName',
      scoreNum: 'ScoreNum',
      scoreSubId: 'ScoreSubId',
      scoreType: 'ScoreType',
      hit: 'Hit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreSubName: 'string',
      scoreNum: 'number',
      scoreSubId: 'number',
      scoreType: 'number',
      hit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReviewSingleResultByIdResponseBodyDataHandScoreInfoListScorePoScoreInfos extends $tea.Model {
  scoreParam?: ReviewSingleResultByIdResponseBodyDataHandScoreInfoListScorePoScoreInfosScoreParam[];
  static names(): { [key: string]: string } {
    return {
      scoreParam: 'ScoreParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreParam: { 'type': 'array', 'itemType': ReviewSingleResultByIdResponseBodyDataHandScoreInfoListScorePoScoreInfosScoreParam },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReviewSingleResultByIdResponseBodyDataHandScoreInfoListScorePo extends $tea.Model {
  scoreInfos?: ReviewSingleResultByIdResponseBodyDataHandScoreInfoListScorePoScoreInfos;
  scoreName?: string;
  scoreId?: number;
  static names(): { [key: string]: string } {
    return {
      scoreInfos: 'ScoreInfos',
      scoreName: 'ScoreName',
      scoreId: 'ScoreId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreInfos: ReviewSingleResultByIdResponseBodyDataHandScoreInfoListScorePoScoreInfos,
      scoreName: 'string',
      scoreId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReviewSingleResultByIdResponseBodyDataHandScoreInfoList extends $tea.Model {
  scorePo?: ReviewSingleResultByIdResponseBodyDataHandScoreInfoListScorePo[];
  static names(): { [key: string]: string } {
    return {
      scorePo: 'ScorePo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scorePo: { 'type': 'array', 'itemType': ReviewSingleResultByIdResponseBodyDataHandScoreInfoListScorePo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReviewSingleResultByIdResponseBodyData extends $tea.Model {
  audioURL?: string;
  hitNumber?: number;
  nextVid?: string;
  preVid?: string;
  isAudio?: boolean;
  hitRuleReviewInfoList?: ReviewSingleResultByIdResponseBodyDataHitRuleReviewInfoList;
  audio?: boolean;
  asrWordsCount?: number;
  totalScore?: number;
  businessType?: number;
  manualScoreMappingList?: ReviewSingleResultByIdResponseBodyDataManualScoreMappingList;
  fileMergeName?: string;
  isDeleted?: boolean;
  dialogues?: ReviewSingleResultByIdResponseBodyDataDialogues;
  deleted?: boolean;
  handScoreInfoList?: ReviewSingleResultByIdResponseBodyDataHandScoreInfoList;
  vid?: number;
  reviewNumber?: number;
  static names(): { [key: string]: string } {
    return {
      audioURL: 'AudioURL',
      hitNumber: 'HitNumber',
      nextVid: 'NextVid',
      preVid: 'PreVid',
      isAudio: 'IsAudio',
      hitRuleReviewInfoList: 'HitRuleReviewInfoList',
      audio: 'Audio',
      asrWordsCount: 'AsrWordsCount',
      totalScore: 'TotalScore',
      businessType: 'BusinessType',
      manualScoreMappingList: 'ManualScoreMappingList',
      fileMergeName: 'FileMergeName',
      isDeleted: 'IsDeleted',
      dialogues: 'Dialogues',
      deleted: 'Deleted',
      handScoreInfoList: 'HandScoreInfoList',
      vid: 'Vid',
      reviewNumber: 'ReviewNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioURL: 'string',
      hitNumber: 'number',
      nextVid: 'string',
      preVid: 'string',
      isAudio: 'boolean',
      hitRuleReviewInfoList: ReviewSingleResultByIdResponseBodyDataHitRuleReviewInfoList,
      audio: 'boolean',
      asrWordsCount: 'number',
      totalScore: 'number',
      businessType: 'number',
      manualScoreMappingList: ReviewSingleResultByIdResponseBodyDataManualScoreMappingList,
      fileMergeName: 'string',
      isDeleted: 'boolean',
      dialogues: ReviewSingleResultByIdResponseBodyDataDialogues,
      deleted: 'boolean',
      handScoreInfoList: ReviewSingleResultByIdResponseBodyDataHandScoreInfoList,
      vid: 'number',
      reviewNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCustomizationConfigResponseBodyData extends $tea.Model {
  modelStatus?: number;
  modelName?: string;
  modelId?: number;
  modeCustomizationId?: string;
  static names(): { [key: string]: string } {
    return {
      modelStatus: 'ModelStatus',
      modelName: 'ModelName',
      modelId: 'ModelId',
      modeCustomizationId: 'ModeCustomizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelStatus: 'number',
      modelName: 'string',
      modelId: 'number',
      modeCustomizationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncQualityCheckResponseBodyDataRulesHitPhrase extends $tea.Model {
  words?: string;
  identity?: string;
  begin?: number;
  emotionValue?: number;
  end?: number;
  speechRate?: number;
  role?: string;
  silenceDuration?: number;
  static names(): { [key: string]: string } {
    return {
      words: 'Words',
      identity: 'Identity',
      begin: 'Begin',
      emotionValue: 'EmotionValue',
      end: 'End',
      speechRate: 'SpeechRate',
      role: 'Role',
      silenceDuration: 'SilenceDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      words: 'string',
      identity: 'string',
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      speechRate: 'number',
      role: 'string',
      silenceDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncQualityCheckResponseBodyDataRulesHitHitKeyWords extends $tea.Model {
  from?: number;
  val?: string;
  cid?: number;
  pid?: number;
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      val: 'Val',
      cid: 'Cid',
      pid: 'Pid',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      val: 'string',
      cid: 'number',
      pid: 'number',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncQualityCheckResponseBodyDataRulesHit extends $tea.Model {
  phrase?: SyncQualityCheckResponseBodyDataRulesHitPhrase;
  hitKeyWords?: SyncQualityCheckResponseBodyDataRulesHitHitKeyWords[];
  static names(): { [key: string]: string } {
    return {
      phrase: 'Phrase',
      hitKeyWords: 'HitKeyWords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phrase: SyncQualityCheckResponseBodyDataRulesHitPhrase,
      hitKeyWords: { 'type': 'array', 'itemType': SyncQualityCheckResponseBodyDataRulesHitHitKeyWords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncQualityCheckResponseBodyDataRules extends $tea.Model {
  hit?: SyncQualityCheckResponseBodyDataRulesHit[];
  ruleName?: string;
  rid?: string;
  static names(): { [key: string]: string } {
    return {
      hit: 'Hit',
      ruleName: 'RuleName',
      rid: 'Rid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hit: { 'type': 'array', 'itemType': SyncQualityCheckResponseBodyDataRulesHit },
      ruleName: 'string',
      rid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncQualityCheckResponseBodyData extends $tea.Model {
  tid?: string;
  beginTime?: number;
  score?: number;
  taskId?: string;
  rules?: SyncQualityCheckResponseBodyDataRules[];
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      beginTime: 'BeginTime',
      score: 'Score',
      taskId: 'TaskId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'string',
      beginTime: 'number',
      score: 'number',
      taskId: 'string',
      rules: { 'type': 'array', 'itemType': SyncQualityCheckResponseBodyDataRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestRuleResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoPhrase extends $tea.Model {
  words?: string;
  begin?: number;
  identity?: string;
  pid?: number;
  emotionValue?: number;
  end?: number;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      words: 'Words',
      begin: 'Begin',
      identity: 'Identity',
      pid: 'Pid',
      emotionValue: 'EmotionValue',
      end: 'End',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      words: 'string',
      begin: 'number',
      identity: 'string',
      pid: 'number',
      emotionValue: 'number',
      end: 'number',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestRuleResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWordsKeyWord extends $tea.Model {
  from?: number;
  val?: string;
  tid?: string;
  pid?: number;
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      val: 'Val',
      tid: 'Tid',
      pid: 'Pid',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      val: 'string',
      tid: 'string',
      pid: 'number',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestRuleResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWords extends $tea.Model {
  keyWord?: TestRuleResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWordsKeyWord[];
  static names(): { [key: string]: string } {
    return {
      keyWord: 'KeyWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWord: { 'type': 'array', 'itemType': TestRuleResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWordsKeyWord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestRuleResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoCid extends $tea.Model {
  cid?: string[];
  static names(): { [key: string]: string } {
    return {
      cid: 'cid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestRuleResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfo extends $tea.Model {
  phrase?: TestRuleResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoPhrase;
  keyWords?: TestRuleResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWords;
  cid?: TestRuleResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoCid;
  static names(): { [key: string]: string } {
    return {
      phrase: 'Phrase',
      keyWords: 'KeyWords',
      cid: 'Cid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phrase: TestRuleResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoPhrase,
      keyWords: TestRuleResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWords,
      cid: TestRuleResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoCid,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestRuleResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoList extends $tea.Model {
  conditionHitInfo?: TestRuleResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfo[];
  static names(): { [key: string]: string } {
    return {
      conditionHitInfo: 'ConditionHitInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionHitInfo: { 'type': 'array', 'itemType': TestRuleResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestRuleResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfo extends $tea.Model {
  conditionHitInfoList?: TestRuleResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoList;
  rid?: number;
  static names(): { [key: string]: string } {
    return {
      conditionHitInfoList: 'ConditionHitInfoList',
      rid: 'Rid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionHitInfoList: TestRuleResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoList,
      rid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestRuleResponseBodyDataHitRuleReviewInfoList extends $tea.Model {
  hitRuleReviewInfo?: TestRuleResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfo[];
  static names(): { [key: string]: string } {
    return {
      hitRuleReviewInfo: 'HitRuleReviewInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitRuleReviewInfo: { 'type': 'array', 'itemType': TestRuleResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestRuleResponseBodyData extends $tea.Model {
  hitRuleReviewInfoList?: TestRuleResponseBodyDataHitRuleReviewInfoList;
  poc?: boolean;
  static names(): { [key: string]: string } {
    return {
      hitRuleReviewInfoList: 'HitRuleReviewInfoList',
      poc: 'Poc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitRuleReviewInfoList: TestRuleResponseBodyDataHitRuleReviewInfoList,
      poc: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSyncQualityCheckDataResponseBodyData extends $tea.Model {
  tid?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoPhrase extends $tea.Model {
  words?: string;
  identity?: string;
  begin?: number;
  beginTime?: string;
  end?: number;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      words: 'Words',
      identity: 'Identity',
      begin: 'Begin',
      beginTime: 'BeginTime',
      end: 'End',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      words: 'string',
      identity: 'string',
      begin: 'number',
      beginTime: 'string',
      end: 'number',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitCids extends $tea.Model {
  cidItem?: string[];
  static names(): { [key: string]: string } {
    return {
      cidItem: 'CidItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidItem: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWordsHitKeyWord extends $tea.Model {
  from?: number;
  val?: string;
  tid?: string;
  pid?: number;
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      val: 'Val',
      tid: 'Tid',
      pid: 'Pid',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      val: 'string',
      tid: 'string',
      pid: 'number',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWords extends $tea.Model {
  hitKeyWord?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWordsHitKeyWord[];
  static names(): { [key: string]: string } {
    return {
      hitKeyWord: 'HitKeyWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitKeyWord: { 'type': 'array', 'itemType': UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWordsHitKeyWord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfo extends $tea.Model {
  phrase?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoPhrase;
  hitCids?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitCids;
  hitKeyWords?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWords;
  static names(): { [key: string]: string } {
    return {
      phrase: 'Phrase',
      hitCids: 'HitCids',
      hitKeyWords: 'HitKeyWords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phrase: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoPhrase,
      hitCids: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitCids,
      hitKeyWords: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWords,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHit extends $tea.Model {
  conditionHitInfo?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfo[];
  static names(): { [key: string]: string } {
    return {
      conditionHitInfo: 'ConditionHitInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionHitInfo: { 'type': 'array', 'itemType': UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoConditionInfoConditionBasicInfo extends $tea.Model {
  conditionInfoCid?: string;
  static names(): { [key: string]: string } {
    return {
      conditionInfoCid: 'ConditionInfoCid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionInfoCid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoConditionInfo extends $tea.Model {
  conditionBasicInfo?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoConditionInfoConditionBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      conditionBasicInfo: 'ConditionBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionBasicInfo: { 'type': 'array', 'itemType': UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoConditionInfoConditionBasicInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfo extends $tea.Model {
  tid?: string;
  hit?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHit;
  conditionInfo?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoConditionInfo;
  rid?: string;
  static names(): { [key: string]: string } {
    return {
      tid: 'Tid',
      hit: 'Hit',
      conditionInfo: 'ConditionInfo',
      rid: 'Rid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tid: 'string',
      hit: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHit,
      conditionInfo: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoConditionInfo,
      rid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRules extends $tea.Model {
  ruleHitInfo?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleHitInfo: 'RuleHitInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleHitInfo: { 'type': 'array', 'itemType': UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoHandScoreIdList extends $tea.Model {
  handScoreIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      handScoreIdList: 'HandScoreIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handScoreIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfo extends $tea.Model {
  score?: number;
  rules?: UploadDataSyncResponseBodyDataResultInfoRules;
  handScoreIdList?: UploadDataSyncResponseBodyDataResultInfoHandScoreIdList;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      rules: 'Rules',
      handScoreIdList: 'HandScoreIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      rules: UploadDataSyncResponseBodyDataResultInfoRules,
      handScoreIdList: UploadDataSyncResponseBodyDataResultInfoHandScoreIdList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyData extends $tea.Model {
  resultInfo?: UploadDataSyncResponseBodyDataResultInfo[];
  static names(): { [key: string]: string } {
    return {
      resultInfo: 'ResultInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultInfo: { 'type': 'array', 'itemType': UploadDataSyncResponseBodyDataResultInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadRuleResponseBodyData extends $tea.Model {
  ridInfo?: string[];
  static names(): { [key: string]: string } {
    return {
      ridInfo: 'RidInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ridInfo: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceResponseBodyDataDeltaSourceLine extends $tea.Model {
  line?: string[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceResponseBodyDataDeltaSource extends $tea.Model {
  line?: VerifySentenceResponseBodyDataDeltaSourceLine;
  position?: number;
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: VerifySentenceResponseBodyDataDeltaSourceLine,
      position: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceResponseBodyDataDeltaTargetLine extends $tea.Model {
  line?: string[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceResponseBodyDataDeltaTarget extends $tea.Model {
  line?: VerifySentenceResponseBodyDataDeltaTargetLine;
  position?: number;
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: VerifySentenceResponseBodyDataDeltaTargetLine,
      position: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceResponseBodyDataDelta extends $tea.Model {
  type?: string;
  source?: VerifySentenceResponseBodyDataDeltaSource;
  target?: VerifySentenceResponseBodyDataDeltaTarget;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      source: 'Source',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      source: VerifySentenceResponseBodyDataDeltaSource,
      target: VerifySentenceResponseBodyDataDeltaTarget,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySentenceResponseBodyData extends $tea.Model {
  delta?: VerifySentenceResponseBodyDataDelta[];
  static names(): { [key: string]: string } {
    return {
      delta: 'Delta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delta: { 'type': 'array', 'itemType': VerifySentenceResponseBodyDataDelta },
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
    this._endpoint = this.getEndpoint("qualitycheck", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addBusinessCategoryWithOptions(request: AddBusinessCategoryRequest, runtime: $Util.RuntimeOptions): Promise<AddBusinessCategoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddBusinessCategoryResponse>(await this.doRPCRequest("AddBusinessCategory", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new AddBusinessCategoryResponse({}));
  }

  async addBusinessCategory(request: AddBusinessCategoryRequest): Promise<AddBusinessCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addBusinessCategoryWithOptions(request, runtime);
  }

  async addRuleCategoryWithOptions(request: AddRuleCategoryRequest, runtime: $Util.RuntimeOptions): Promise<AddRuleCategoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddRuleCategoryResponse>(await this.doRPCRequest("AddRuleCategory", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new AddRuleCategoryResponse({}));
  }

  async addRuleCategory(request: AddRuleCategoryRequest): Promise<AddRuleCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addRuleCategoryWithOptions(request, runtime);
  }

  async addThesaurusForApiWithOptions(request: AddThesaurusForApiRequest, runtime: $Util.RuntimeOptions): Promise<AddThesaurusForApiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddThesaurusForApiResponse>(await this.doRPCRequest("AddThesaurusForApi", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new AddThesaurusForApiResponse({}));
  }

  async addThesaurusForApi(request: AddThesaurusForApiRequest): Promise<AddThesaurusForApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addThesaurusForApiWithOptions(request, runtime);
  }

  async addUploadDataSetWithOptions(request: AddUploadDataSetRequest, runtime: $Util.RuntimeOptions): Promise<AddUploadDataSetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddUploadDataSetResponse>(await this.doRPCRequest("AddUploadDataSet", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new AddUploadDataSetResponse({}));
  }

  async addUploadDataSet(request: AddUploadDataSetRequest): Promise<AddUploadDataSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUploadDataSetWithOptions(request, runtime);
  }

  async assignReviewerWithOptions(request: AssignReviewerRequest, runtime: $Util.RuntimeOptions): Promise<AssignReviewerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AssignReviewerResponse>(await this.doRPCRequest("AssignReviewer", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new AssignReviewerResponse({}));
  }

  async assignReviewer(request: AssignReviewerRequest): Promise<AssignReviewerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.assignReviewerWithOptions(request, runtime);
  }

  async configDataSetWithOptions(request: ConfigDataSetRequest, runtime: $Util.RuntimeOptions): Promise<ConfigDataSetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigDataSetResponse>(await this.doRPCRequest("ConfigDataSet", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigDataSetResponse({}));
  }

  async configDataSet(request: ConfigDataSetRequest): Promise<ConfigDataSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configDataSetWithOptions(request, runtime);
  }

  async createAsrVocabWithOptions(request: CreateAsrVocabRequest, runtime: $Util.RuntimeOptions): Promise<CreateAsrVocabResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAsrVocabResponse>(await this.doRPCRequest("CreateAsrVocab", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAsrVocabResponse({}));
  }

  async createAsrVocab(request: CreateAsrVocabRequest): Promise<CreateAsrVocabResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAsrVocabWithOptions(request, runtime);
  }

  async createRuleWithOptions(request: CreateRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRuleResponse>(await this.doRPCRequest("CreateRule", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRuleResponse({}));
  }

  async createRule(request: CreateRuleRequest): Promise<CreateRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRuleWithOptions(request, runtime);
  }

  async createSkillGroupConfigWithOptions(request: CreateSkillGroupConfigRequest, runtime: $Util.RuntimeOptions): Promise<CreateSkillGroupConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSkillGroupConfigResponse>(await this.doRPCRequest("CreateSkillGroupConfig", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSkillGroupConfigResponse({}));
  }

  async createSkillGroupConfig(request: CreateSkillGroupConfigRequest): Promise<CreateSkillGroupConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSkillGroupConfigWithOptions(request, runtime);
  }

  async createTaskAssignRuleWithOptions(request: CreateTaskAssignRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateTaskAssignRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateTaskAssignRuleResponse>(await this.doRPCRequest("CreateTaskAssignRule", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateTaskAssignRuleResponse({}));
  }

  async createTaskAssignRule(request: CreateTaskAssignRuleRequest): Promise<CreateTaskAssignRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTaskAssignRuleWithOptions(request, runtime);
  }

  async createUserWithOptions(request: CreateUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUserResponse>(await this.doRPCRequest("CreateUser", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUserResponse({}));
  }

  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

  async createWarningConfigWithOptions(request: CreateWarningConfigRequest, runtime: $Util.RuntimeOptions): Promise<CreateWarningConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateWarningConfigResponse>(await this.doRPCRequest("CreateWarningConfig", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateWarningConfigResponse({}));
  }

  async createWarningConfig(request: CreateWarningConfigRequest): Promise<CreateWarningConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWarningConfigWithOptions(request, runtime);
  }

  async deleteAsrVocabWithOptions(request: DeleteAsrVocabRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAsrVocabResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAsrVocabResponse>(await this.doRPCRequest("DeleteAsrVocab", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAsrVocabResponse({}));
  }

  async deleteAsrVocab(request: DeleteAsrVocabRequest): Promise<DeleteAsrVocabResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAsrVocabWithOptions(request, runtime);
  }

  async deleteBusinessCategoryWithOptions(request: DeleteBusinessCategoryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBusinessCategoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteBusinessCategoryResponse>(await this.doRPCRequest("DeleteBusinessCategory", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteBusinessCategoryResponse({}));
  }

  async deleteBusinessCategory(request: DeleteBusinessCategoryRequest): Promise<DeleteBusinessCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBusinessCategoryWithOptions(request, runtime);
  }

  async deleteCustomizationConfigWithOptions(request: DeleteCustomizationConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomizationConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCustomizationConfigResponse>(await this.doRPCRequest("DeleteCustomizationConfig", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCustomizationConfigResponse({}));
  }

  async deleteCustomizationConfig(request: DeleteCustomizationConfigRequest): Promise<DeleteCustomizationConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomizationConfigWithOptions(request, runtime);
  }

  async deleteDataSetWithOptions(request: DeleteDataSetRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataSetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDataSetResponse>(await this.doRPCRequest("DeleteDataSet", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDataSetResponse({}));
  }

  async deleteDataSet(request: DeleteDataSetRequest): Promise<DeleteDataSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataSetWithOptions(request, runtime);
  }

  async deletePrecisionTaskWithOptions(request: DeletePrecisionTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeletePrecisionTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeletePrecisionTaskResponse>(await this.doRPCRequest("DeletePrecisionTask", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeletePrecisionTaskResponse({}));
  }

  async deletePrecisionTask(request: DeletePrecisionTaskRequest): Promise<DeletePrecisionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePrecisionTaskWithOptions(request, runtime);
  }

  async deleteScoreForApiWithOptions(request: DeleteScoreForApiRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScoreForApiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteScoreForApiResponse>(await this.doRPCRequest("DeleteScoreForApi", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteScoreForApiResponse({}));
  }

  async deleteScoreForApi(request: DeleteScoreForApiRequest): Promise<DeleteScoreForApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScoreForApiWithOptions(request, runtime);
  }

  async deleteSkillGroupConfigWithOptions(request: DeleteSkillGroupConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSkillGroupConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSkillGroupConfigResponse>(await this.doRPCRequest("DeleteSkillGroupConfig", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSkillGroupConfigResponse({}));
  }

  async deleteSkillGroupConfig(request: DeleteSkillGroupConfigRequest): Promise<DeleteSkillGroupConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSkillGroupConfigWithOptions(request, runtime);
  }

  async deleteSubScoreForApiWithOptions(request: DeleteSubScoreForApiRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSubScoreForApiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSubScoreForApiResponse>(await this.doRPCRequest("DeleteSubScoreForApi", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSubScoreForApiResponse({}));
  }

  async deleteSubScoreForApi(request: DeleteSubScoreForApiRequest): Promise<DeleteSubScoreForApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSubScoreForApiWithOptions(request, runtime);
  }

  async deleteTaskAssignRuleWithOptions(request: DeleteTaskAssignRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTaskAssignRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteTaskAssignRuleResponse>(await this.doRPCRequest("DeleteTaskAssignRule", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteTaskAssignRuleResponse({}));
  }

  async deleteTaskAssignRule(request: DeleteTaskAssignRuleRequest): Promise<DeleteTaskAssignRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTaskAssignRuleWithOptions(request, runtime);
  }

  async deleteUserWithOptions(request: DeleteUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUserResponse>(await this.doRPCRequest("DeleteUser", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUserResponse({}));
  }

  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  async deleteWarningConfigWithOptions(request: DeleteWarningConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWarningConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteWarningConfigResponse>(await this.doRPCRequest("DeleteWarningConfig", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteWarningConfigResponse({}));
  }

  async deleteWarningConfig(request: DeleteWarningConfigRequest): Promise<DeleteWarningConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWarningConfigWithOptions(request, runtime);
  }

  async delRuleCategoryWithOptions(request: DelRuleCategoryRequest, runtime: $Util.RuntimeOptions): Promise<DelRuleCategoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DelRuleCategoryResponse>(await this.doRPCRequest("DelRuleCategory", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DelRuleCategoryResponse({}));
  }

  async delRuleCategory(request: DelRuleCategoryRequest): Promise<DelRuleCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.delRuleCategoryWithOptions(request, runtime);
  }

  async delThesaurusForApiWithOptions(request: DelThesaurusForApiRequest, runtime: $Util.RuntimeOptions): Promise<DelThesaurusForApiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DelThesaurusForApiResponse>(await this.doRPCRequest("DelThesaurusForApi", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DelThesaurusForApiResponse({}));
  }

  async delThesaurusForApi(request: DelThesaurusForApiRequest): Promise<DelThesaurusForApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.delThesaurusForApiWithOptions(request, runtime);
  }

  async editThesaurusForApiWithOptions(request: EditThesaurusForApiRequest, runtime: $Util.RuntimeOptions): Promise<EditThesaurusForApiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EditThesaurusForApiResponse>(await this.doRPCRequest("EditThesaurusForApi", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new EditThesaurusForApiResponse({}));
  }

  async editThesaurusForApi(request: EditThesaurusForApiRequest): Promise<EditThesaurusForApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editThesaurusForApiWithOptions(request, runtime);
  }

  async getAsrVocabWithOptions(request: GetAsrVocabRequest, runtime: $Util.RuntimeOptions): Promise<GetAsrVocabResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAsrVocabResponse>(await this.doRPCRequest("GetAsrVocab", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetAsrVocabResponse({}));
  }

  async getAsrVocab(request: GetAsrVocabRequest): Promise<GetAsrVocabResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAsrVocabWithOptions(request, runtime);
  }

  async getBusinessCategoryListWithOptions(request: GetBusinessCategoryListRequest, runtime: $Util.RuntimeOptions): Promise<GetBusinessCategoryListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetBusinessCategoryListResponse>(await this.doRPCRequest("GetBusinessCategoryList", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetBusinessCategoryListResponse({}));
  }

  async getBusinessCategoryList(request: GetBusinessCategoryListRequest): Promise<GetBusinessCategoryListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBusinessCategoryListWithOptions(request, runtime);
  }

  async getCustomizationConfigListWithOptions(request: GetCustomizationConfigListRequest, runtime: $Util.RuntimeOptions): Promise<GetCustomizationConfigListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetCustomizationConfigListResponse>(await this.doRPCRequest("GetCustomizationConfigList", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetCustomizationConfigListResponse({}));
  }

  async getCustomizationConfigList(request: GetCustomizationConfigListRequest): Promise<GetCustomizationConfigListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCustomizationConfigListWithOptions(request, runtime);
  }

  async getHitResultWithOptions(request: GetHitResultRequest, runtime: $Util.RuntimeOptions): Promise<GetHitResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetHitResultResponse>(await this.doRPCRequest("GetHitResult", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetHitResultResponse({}));
  }

  async getHitResult(request: GetHitResultRequest): Promise<GetHitResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHitResultWithOptions(request, runtime);
  }

  async getNextResultToVerifyWithOptions(request: GetNextResultToVerifyRequest, runtime: $Util.RuntimeOptions): Promise<GetNextResultToVerifyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetNextResultToVerifyResponse>(await this.doRPCRequest("GetNextResultToVerify", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetNextResultToVerifyResponse({}));
  }

  async getNextResultToVerify(request: GetNextResultToVerifyRequest): Promise<GetNextResultToVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNextResultToVerifyWithOptions(request, runtime);
  }

  async getPrecisionTaskWithOptions(request: GetPrecisionTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetPrecisionTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPrecisionTaskResponse>(await this.doRPCRequest("GetPrecisionTask", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetPrecisionTaskResponse({}));
  }

  async getPrecisionTask(request: GetPrecisionTaskRequest): Promise<GetPrecisionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPrecisionTaskWithOptions(request, runtime);
  }

  async getResultWithOptions(request: GetResultRequest, runtime: $Util.RuntimeOptions): Promise<GetResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetResultResponse>(await this.doRPCRequest("GetResult", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetResultResponse({}));
  }

  async getResult(request: GetResultRequest): Promise<GetResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResultWithOptions(request, runtime);
  }

  async getResultCallbackWithOptions(request: GetResultCallbackRequest, runtime: $Util.RuntimeOptions): Promise<GetResultCallbackResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetResultCallbackResponse>(await this.doRPCRequest("GetResultCallback", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetResultCallbackResponse({}));
  }

  async getResultCallback(request: GetResultCallbackRequest): Promise<GetResultCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResultCallbackWithOptions(request, runtime);
  }

  async getResultToReviewWithOptions(request: GetResultToReviewRequest, runtime: $Util.RuntimeOptions): Promise<GetResultToReviewResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetResultToReviewResponse>(await this.doRPCRequest("GetResultToReview", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetResultToReviewResponse({}));
  }

  async getResultToReview(request: GetResultToReviewRequest): Promise<GetResultToReviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResultToReviewWithOptions(request, runtime);
  }

  async getReviewInfoWithOptions(request: GetReviewInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetReviewInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetReviewInfoResponse>(await this.doRPCRequest("GetReviewInfo", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetReviewInfoResponse({}));
  }

  async getReviewInfo(request: GetReviewInfoRequest): Promise<GetReviewInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getReviewInfoWithOptions(request, runtime);
  }

  async getRuleWithOptions(request: GetRuleRequest, runtime: $Util.RuntimeOptions): Promise<GetRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRuleResponse>(await this.doRPCRequest("GetRule", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetRuleResponse({}));
  }

  async getRule(request: GetRuleRequest): Promise<GetRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRuleWithOptions(request, runtime);
  }

  async getRuleCategoryWithOptions(request: GetRuleCategoryRequest, runtime: $Util.RuntimeOptions): Promise<GetRuleCategoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRuleCategoryResponse>(await this.doRPCRequest("GetRuleCategory", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetRuleCategoryResponse({}));
  }

  async getRuleCategory(request: GetRuleCategoryRequest): Promise<GetRuleCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRuleCategoryWithOptions(request, runtime);
  }

  async getRuleDetailWithOptions(request: GetRuleDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetRuleDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRuleDetailResponse>(await this.doRPCRequest("GetRuleDetail", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetRuleDetailResponse({}));
  }

  async getRuleDetail(request: GetRuleDetailRequest): Promise<GetRuleDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRuleDetailWithOptions(request, runtime);
  }

  async getRuleDimensionWithOptions(request: GetRuleDimensionRequest, runtime: $Util.RuntimeOptions): Promise<GetRuleDimensionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRuleDimensionResponse>(await this.doRPCRequest("GetRuleDimension", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetRuleDimensionResponse({}));
  }

  async getRuleDimension(request: GetRuleDimensionRequest): Promise<GetRuleDimensionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRuleDimensionWithOptions(request, runtime);
  }

  async getScoreInfoWithOptions(request: GetScoreInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetScoreInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetScoreInfoResponse>(await this.doRPCRequest("GetScoreInfo", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetScoreInfoResponse({}));
  }

  async getScoreInfo(request: GetScoreInfoRequest): Promise<GetScoreInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getScoreInfoWithOptions(request, runtime);
  }

  async getSkillGroupConfigWithOptions(request: GetSkillGroupConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetSkillGroupConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSkillGroupConfigResponse>(await this.doRPCRequest("GetSkillGroupConfig", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetSkillGroupConfigResponse({}));
  }

  async getSkillGroupConfig(request: GetSkillGroupConfigRequest): Promise<GetSkillGroupConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSkillGroupConfigWithOptions(request, runtime);
  }

  async getSyncResultWithOptions(request: GetSyncResultRequest, runtime: $Util.RuntimeOptions): Promise<GetSyncResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSyncResultResponse>(await this.doRPCRequest("GetSyncResult", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetSyncResultResponse({}));
  }

  async getSyncResult(request: GetSyncResultRequest): Promise<GetSyncResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSyncResultWithOptions(request, runtime);
  }

  async getTaskFileResultListWithOptions(request: GetTaskFileResultListRequest, runtime: $Util.RuntimeOptions): Promise<GetTaskFileResultListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTaskFileResultListResponse>(await this.doRPCRequest("GetTaskFileResultList", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetTaskFileResultListResponse({}));
  }

  async getTaskFileResultList(request: GetTaskFileResultListRequest): Promise<GetTaskFileResultListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTaskFileResultListWithOptions(request, runtime);
  }

  async getTaskRuleListWithOptions(request: GetTaskRuleListRequest, runtime: $Util.RuntimeOptions): Promise<GetTaskRuleListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTaskRuleListResponse>(await this.doRPCRequest("GetTaskRuleList", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetTaskRuleListResponse({}));
  }

  async getTaskRuleList(request: GetTaskRuleListRequest): Promise<GetTaskRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTaskRuleListWithOptions(request, runtime);
  }

  async getThesaurusBySynonymForApiWithOptions(request: GetThesaurusBySynonymForApiRequest, runtime: $Util.RuntimeOptions): Promise<GetThesaurusBySynonymForApiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetThesaurusBySynonymForApiResponse>(await this.doRPCRequest("GetThesaurusBySynonymForApi", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetThesaurusBySynonymForApiResponse({}));
  }

  async getThesaurusBySynonymForApi(request: GetThesaurusBySynonymForApiRequest): Promise<GetThesaurusBySynonymForApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getThesaurusBySynonymForApiWithOptions(request, runtime);
  }

  async handleComplaintWithOptions(request: HandleComplaintRequest, runtime: $Util.RuntimeOptions): Promise<HandleComplaintResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<HandleComplaintResponse>(await this.doRPCRequest("HandleComplaint", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new HandleComplaintResponse({}));
  }

  async handleComplaint(request: HandleComplaintRequest): Promise<HandleComplaintResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.handleComplaintWithOptions(request, runtime);
  }

  async insertScoreForApiWithOptions(request: InsertScoreForApiRequest, runtime: $Util.RuntimeOptions): Promise<InsertScoreForApiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InsertScoreForApiResponse>(await this.doRPCRequest("InsertScoreForApi", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new InsertScoreForApiResponse({}));
  }

  async insertScoreForApi(request: InsertScoreForApiRequest): Promise<InsertScoreForApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.insertScoreForApiWithOptions(request, runtime);
  }

  async insertSubScoreForApiWithOptions(request: InsertSubScoreForApiRequest, runtime: $Util.RuntimeOptions): Promise<InsertSubScoreForApiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InsertSubScoreForApiResponse>(await this.doRPCRequest("InsertSubScoreForApi", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new InsertSubScoreForApiResponse({}));
  }

  async insertSubScoreForApi(request: InsertSubScoreForApiRequest): Promise<InsertSubScoreForApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.insertSubScoreForApiWithOptions(request, runtime);
  }

  async invalidRuleWithOptions(request: InvalidRuleRequest, runtime: $Util.RuntimeOptions): Promise<InvalidRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InvalidRuleResponse>(await this.doRPCRequest("InvalidRule", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new InvalidRuleResponse({}));
  }

  async invalidRule(request: InvalidRuleRequest): Promise<InvalidRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.invalidRuleWithOptions(request, runtime);
  }

  async listAsrVocabWithOptions(request: ListAsrVocabRequest, runtime: $Util.RuntimeOptions): Promise<ListAsrVocabResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAsrVocabResponse>(await this.doRPCRequest("ListAsrVocab", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListAsrVocabResponse({}));
  }

  async listAsrVocab(request: ListAsrVocabRequest): Promise<ListAsrVocabResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAsrVocabWithOptions(request, runtime);
  }

  async listDataSetTaskWithOptions(request: ListDataSetTaskRequest, runtime: $Util.RuntimeOptions): Promise<ListDataSetTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDataSetTaskResponse>(await this.doRPCRequest("ListDataSetTask", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListDataSetTaskResponse({}));
  }

  async listDataSetTask(request: ListDataSetTaskRequest): Promise<ListDataSetTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataSetTaskWithOptions(request, runtime);
  }

  async listHotWordsTasksWithOptions(request: ListHotWordsTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListHotWordsTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListHotWordsTasksResponse>(await this.doRPCRequest("ListHotWordsTasks", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListHotWordsTasksResponse({}));
  }

  async listHotWordsTasks(request: ListHotWordsTasksRequest): Promise<ListHotWordsTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHotWordsTasksWithOptions(request, runtime);
  }

  async listPrecisionTaskWithOptions(request: ListPrecisionTaskRequest, runtime: $Util.RuntimeOptions): Promise<ListPrecisionTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPrecisionTaskResponse>(await this.doRPCRequest("ListPrecisionTask", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListPrecisionTaskResponse({}));
  }

  async listPrecisionTask(request: ListPrecisionTaskRequest): Promise<ListPrecisionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPrecisionTaskWithOptions(request, runtime);
  }

  async listRolesWithOptions(request: ListRolesRequest, runtime: $Util.RuntimeOptions): Promise<ListRolesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRolesResponse>(await this.doRPCRequest("ListRoles", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListRolesResponse({}));
  }

  async listRoles(request: ListRolesRequest): Promise<ListRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRolesWithOptions(request, runtime);
  }

  async listRulesWithOptions(request: ListRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRulesResponse>(await this.doRPCRequest("ListRules", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListRulesResponse({}));
  }

  async listRules(request: ListRulesRequest): Promise<ListRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRulesWithOptions(request, runtime);
  }

  async listSkillGroupConfigWithOptions(request: ListSkillGroupConfigRequest, runtime: $Util.RuntimeOptions): Promise<ListSkillGroupConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSkillGroupConfigResponse>(await this.doRPCRequest("ListSkillGroupConfig", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListSkillGroupConfigResponse({}));
  }

  async listSkillGroupConfig(request: ListSkillGroupConfigRequest): Promise<ListSkillGroupConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSkillGroupConfigWithOptions(request, runtime);
  }

  async listTaskAssignRulesWithOptions(request: ListTaskAssignRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListTaskAssignRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTaskAssignRulesResponse>(await this.doRPCRequest("ListTaskAssignRules", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListTaskAssignRulesResponse({}));
  }

  async listTaskAssignRules(request: ListTaskAssignRulesRequest): Promise<ListTaskAssignRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTaskAssignRulesWithOptions(request, runtime);
  }

  async listUsersWithOptions(request: ListUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUsersResponse>(await this.doRPCRequest("ListUsers", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListUsersResponse({}));
  }

  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  async listWarningConfigWithOptions(request: ListWarningConfigRequest, runtime: $Util.RuntimeOptions): Promise<ListWarningConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListWarningConfigResponse>(await this.doRPCRequest("ListWarningConfig", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListWarningConfigResponse({}));
  }

  async listWarningConfig(request: ListWarningConfigRequest): Promise<ListWarningConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWarningConfigWithOptions(request, runtime);
  }

  async removeAndGetTaskRulesWithOptions(request: RemoveAndGetTaskRulesRequest, runtime: $Util.RuntimeOptions): Promise<RemoveAndGetTaskRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveAndGetTaskRulesResponse>(await this.doRPCRequest("RemoveAndGetTaskRules", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveAndGetTaskRulesResponse({}));
  }

  async removeAndGetTaskRules(request: RemoveAndGetTaskRulesRequest): Promise<RemoveAndGetTaskRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeAndGetTaskRulesWithOptions(request, runtime);
  }

  async restartAsrTaskWithOptions(request: RestartAsrTaskRequest, runtime: $Util.RuntimeOptions): Promise<RestartAsrTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RestartAsrTaskResponse>(await this.doRPCRequest("RestartAsrTask", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new RestartAsrTaskResponse({}));
  }

  async restartAsrTask(request: RestartAsrTaskRequest): Promise<RestartAsrTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartAsrTaskWithOptions(request, runtime);
  }

  async reviewSingleResultByIdWithOptions(request: ReviewSingleResultByIdRequest, runtime: $Util.RuntimeOptions): Promise<ReviewSingleResultByIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReviewSingleResultByIdResponse>(await this.doRPCRequest("ReviewSingleResultById", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new ReviewSingleResultByIdResponse({}));
  }

  async reviewSingleResultById(request: ReviewSingleResultByIdRequest): Promise<ReviewSingleResultByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reviewSingleResultByIdWithOptions(request, runtime);
  }

  async saveConfigDataSetWithOptions(request: SaveConfigDataSetRequest, runtime: $Util.RuntimeOptions): Promise<SaveConfigDataSetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveConfigDataSetResponse>(await this.doRPCRequest("SaveConfigDataSet", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new SaveConfigDataSetResponse({}));
  }

  async saveConfigDataSet(request: SaveConfigDataSetRequest): Promise<SaveConfigDataSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveConfigDataSetWithOptions(request, runtime);
  }

  async submitComplaintWithOptions(request: SubmitComplaintRequest, runtime: $Util.RuntimeOptions): Promise<SubmitComplaintResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitComplaintResponse>(await this.doRPCRequest("SubmitComplaint", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitComplaintResponse({}));
  }

  async submitComplaint(request: SubmitComplaintRequest): Promise<SubmitComplaintResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitComplaintWithOptions(request, runtime);
  }

  async submitCustomizationConfigWithOptions(request: SubmitCustomizationConfigRequest, runtime: $Util.RuntimeOptions): Promise<SubmitCustomizationConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitCustomizationConfigResponse>(await this.doRPCRequest("SubmitCustomizationConfig", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitCustomizationConfigResponse({}));
  }

  async submitCustomizationConfig(request: SubmitCustomizationConfigRequest): Promise<SubmitCustomizationConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitCustomizationConfigWithOptions(request, runtime);
  }

  async submitPrecisionTaskWithOptions(request: SubmitPrecisionTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitPrecisionTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitPrecisionTaskResponse>(await this.doRPCRequest("SubmitPrecisionTask", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitPrecisionTaskResponse({}));
  }

  async submitPrecisionTask(request: SubmitPrecisionTaskRequest): Promise<SubmitPrecisionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitPrecisionTaskWithOptions(request, runtime);
  }

  async submitQualityCheckTaskWithOptions(request: SubmitQualityCheckTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitQualityCheckTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitQualityCheckTaskResponse>(await this.doRPCRequest("SubmitQualityCheckTask", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitQualityCheckTaskResponse({}));
  }

  async submitQualityCheckTask(request: SubmitQualityCheckTaskRequest): Promise<SubmitQualityCheckTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitQualityCheckTaskWithOptions(request, runtime);
  }

  async submitReviewInfoWithOptions(request: SubmitReviewInfoRequest, runtime: $Util.RuntimeOptions): Promise<SubmitReviewInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitReviewInfoResponse>(await this.doRPCRequest("SubmitReviewInfo", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitReviewInfoResponse({}));
  }

  async submitReviewInfo(request: SubmitReviewInfoRequest): Promise<SubmitReviewInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitReviewInfoWithOptions(request, runtime);
  }

  async syncQualityCheckWithOptions(request: SyncQualityCheckRequest, runtime: $Util.RuntimeOptions): Promise<SyncQualityCheckResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SyncQualityCheckResponse>(await this.doRPCRequest("SyncQualityCheck", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new SyncQualityCheckResponse({}));
  }

  async syncQualityCheck(request: SyncQualityCheckRequest): Promise<SyncQualityCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncQualityCheckWithOptions(request, runtime);
  }

  async testRuleWithOptions(request: TestRuleRequest, runtime: $Util.RuntimeOptions): Promise<TestRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TestRuleResponse>(await this.doRPCRequest("TestRule", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new TestRuleResponse({}));
  }

  async testRule(request: TestRuleRequest): Promise<TestRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.testRuleWithOptions(request, runtime);
  }

  async updateAsrVocabWithOptions(request: UpdateAsrVocabRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAsrVocabResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAsrVocabResponse>(await this.doRPCRequest("UpdateAsrVocab", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAsrVocabResponse({}));
  }

  async updateAsrVocab(request: UpdateAsrVocabRequest): Promise<UpdateAsrVocabResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAsrVocabWithOptions(request, runtime);
  }

  async updateOnPurchaseSuccessWithOptions(request: UpdateOnPurchaseSuccessRequest, runtime: $Util.RuntimeOptions): Promise<UpdateOnPurchaseSuccessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateOnPurchaseSuccessResponse>(await this.doRPCRequest("UpdateOnPurchaseSuccess", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateOnPurchaseSuccessResponse({}));
  }

  async updateOnPurchaseSuccess(request: UpdateOnPurchaseSuccessRequest): Promise<UpdateOnPurchaseSuccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOnPurchaseSuccessWithOptions(request, runtime);
  }

  async updateRuleWithOptions(request: UpdateRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateRuleResponse>(await this.doRPCRequest("UpdateRule", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateRuleResponse({}));
  }

  async updateRule(request: UpdateRuleRequest): Promise<UpdateRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRuleWithOptions(request, runtime);
  }

  async updateScoreForApiWithOptions(request: UpdateScoreForApiRequest, runtime: $Util.RuntimeOptions): Promise<UpdateScoreForApiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateScoreForApiResponse>(await this.doRPCRequest("UpdateScoreForApi", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateScoreForApiResponse({}));
  }

  async updateScoreForApi(request: UpdateScoreForApiRequest): Promise<UpdateScoreForApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateScoreForApiWithOptions(request, runtime);
  }

  async updateSkillGroupConfigWithOptions(request: UpdateSkillGroupConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSkillGroupConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSkillGroupConfigResponse>(await this.doRPCRequest("UpdateSkillGroupConfig", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSkillGroupConfigResponse({}));
  }

  async updateSkillGroupConfig(request: UpdateSkillGroupConfigRequest): Promise<UpdateSkillGroupConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSkillGroupConfigWithOptions(request, runtime);
  }

  async updateSubScoreForApiWithOptions(request: UpdateSubScoreForApiRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSubScoreForApiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSubScoreForApiResponse>(await this.doRPCRequest("UpdateSubScoreForApi", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSubScoreForApiResponse({}));
  }

  async updateSubScoreForApi(request: UpdateSubScoreForApiRequest): Promise<UpdateSubScoreForApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSubScoreForApiWithOptions(request, runtime);
  }

  async updateSyncQualityCheckDataWithOptions(request: UpdateSyncQualityCheckDataRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSyncQualityCheckDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSyncQualityCheckDataResponse>(await this.doRPCRequest("UpdateSyncQualityCheckData", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSyncQualityCheckDataResponse({}));
  }

  async updateSyncQualityCheckData(request: UpdateSyncQualityCheckDataRequest): Promise<UpdateSyncQualityCheckDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSyncQualityCheckDataWithOptions(request, runtime);
  }

  async updateTaskAssignRuleWithOptions(request: UpdateTaskAssignRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTaskAssignRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateTaskAssignRuleResponse>(await this.doRPCRequest("UpdateTaskAssignRule", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateTaskAssignRuleResponse({}));
  }

  async updateTaskAssignRule(request: UpdateTaskAssignRuleRequest): Promise<UpdateTaskAssignRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTaskAssignRuleWithOptions(request, runtime);
  }

  async updateUserWithOptions(request: UpdateUserRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateUserResponse>(await this.doRPCRequest("UpdateUser", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateUserResponse({}));
  }

  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

  async updateUserConfigWithOptions(request: UpdateUserConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateUserConfigResponse>(await this.doRPCRequest("UpdateUserConfig", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateUserConfigResponse({}));
  }

  async updateUserConfig(request: UpdateUserConfigRequest): Promise<UpdateUserConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserConfigWithOptions(request, runtime);
  }

  async updateWarningConfigWithOptions(request: UpdateWarningConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWarningConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateWarningConfigResponse>(await this.doRPCRequest("UpdateWarningConfig", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateWarningConfigResponse({}));
  }

  async updateWarningConfig(request: UpdateWarningConfigRequest): Promise<UpdateWarningConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWarningConfigWithOptions(request, runtime);
  }

  async uploadAudioDataWithOptions(request: UploadAudioDataRequest, runtime: $Util.RuntimeOptions): Promise<UploadAudioDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UploadAudioDataResponse>(await this.doRPCRequest("UploadAudioData", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new UploadAudioDataResponse({}));
  }

  async uploadAudioData(request: UploadAudioDataRequest): Promise<UploadAudioDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadAudioDataWithOptions(request, runtime);
  }

  async uploadDataWithOptions(request: UploadDataRequest, runtime: $Util.RuntimeOptions): Promise<UploadDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UploadDataResponse>(await this.doRPCRequest("UploadData", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new UploadDataResponse({}));
  }

  async uploadData(request: UploadDataRequest): Promise<UploadDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadDataWithOptions(request, runtime);
  }

  async uploadDataSyncWithOptions(request: UploadDataSyncRequest, runtime: $Util.RuntimeOptions): Promise<UploadDataSyncResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UploadDataSyncResponse>(await this.doRPCRequest("UploadDataSync", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new UploadDataSyncResponse({}));
  }

  async uploadDataSync(request: UploadDataSyncRequest): Promise<UploadDataSyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadDataSyncWithOptions(request, runtime);
  }

  async uploadRuleWithOptions(request: UploadRuleRequest, runtime: $Util.RuntimeOptions): Promise<UploadRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UploadRuleResponse>(await this.doRPCRequest("UploadRule", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new UploadRuleResponse({}));
  }

  async uploadRule(request: UploadRuleRequest): Promise<UploadRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadRuleWithOptions(request, runtime);
  }

  async verifyFileWithOptions(request: VerifyFileRequest, runtime: $Util.RuntimeOptions): Promise<VerifyFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<VerifyFileResponse>(await this.doRPCRequest("VerifyFile", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new VerifyFileResponse({}));
  }

  async verifyFile(request: VerifyFileRequest): Promise<VerifyFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyFileWithOptions(request, runtime);
  }

  async verifySentenceWithOptions(request: VerifySentenceRequest, runtime: $Util.RuntimeOptions): Promise<VerifySentenceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<VerifySentenceResponse>(await this.doRPCRequest("VerifySentence", "2019-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new VerifySentenceResponse({}));
  }

  async verifySentence(request: VerifySentenceRequest): Promise<VerifySentenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifySentenceWithOptions(request, runtime);
  }

}
