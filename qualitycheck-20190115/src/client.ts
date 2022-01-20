// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddBusinessCategoryRequest extends $tea.Model {
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

export class AddBusinessCategoryResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
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

export class AddRuleCategoryResponseBody extends $tea.Model {
  code?: string;
  data?: AddRuleCategoryResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddRuleCategoryResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class AddThesaurusForApiResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      message: 'string',
      requestId: 'string',
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

export class AssignReviewerRequest extends $tea.Model {
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

export class AssignReviewerResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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

export class CreateAsrVocabRequest extends $tea.Model {
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

export class CreateAsrVocabResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
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

export class CreateSkillGroupConfigRequest extends $tea.Model {
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

export class CreateSkillGroupConfigResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      message: 'string',
      requestId: 'string',
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

export class CreateTaskAssignRuleResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
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

export class CreateUserResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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

export class CreateWarningConfigResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
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

export class DelRuleCategoryRequest extends $tea.Model {
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

export class DelRuleCategoryResponseBody extends $tea.Model {
  code?: string;
  data?: DelRuleCategoryResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DelRuleCategoryResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class DelThesaurusForApiResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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

export class DeleteAsrVocabRequest extends $tea.Model {
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

export class DeleteAsrVocabResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
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

export class DeleteBusinessCategoryResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
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

export class DeleteCustomizationConfigResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
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

export class DeleteDataSetResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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

export class DeletePrecisionTaskResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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

export class DeleteScoreForApiResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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

export class DeleteSkillGroupConfigResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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

export class DeleteSubScoreForApiResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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

export class DeleteTaskAssignRuleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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

export class DeleteUserResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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

export class DeleteWarningConfigResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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

export class EditThesaurusForApiRequest extends $tea.Model {
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

export class EditThesaurusForApiResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      message: 'string',
      requestId: 'string',
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

export class GetAsrVocabResponseBody extends $tea.Model {
  code?: string;
  data?: GetAsrVocabResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAsrVocabResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class GetBusinessCategoryListResponseBody extends $tea.Model {
  code?: string;
  data?: GetBusinessCategoryListResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetBusinessCategoryListResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class GetCustomizationConfigListResponseBody extends $tea.Model {
  code?: string;
  data?: GetCustomizationConfigListResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCustomizationConfigListResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class GetHitResultResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  data?: GetHitResultResponseBodyData;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: GetHitResultResponseBodyData,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
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

export class GetNextResultToVerifyResponseBody extends $tea.Model {
  code?: string;
  data?: GetNextResultToVerifyResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetNextResultToVerifyResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class GetPrecisionTaskResponseBody extends $tea.Model {
  code?: string;
  data?: GetPrecisionTaskResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetPrecisionTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class GetResultResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  data?: GetResultResponseBodyData;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  resultCountId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resultCountId: 'ResultCountId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: GetResultResponseBodyData,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resultCountId: 'string',
      success: 'boolean',
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

export class GetResultCallbackResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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

export class GetResultToReviewResponseBody extends $tea.Model {
  code?: string;
  data?: GetResultToReviewResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetResultToReviewResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class GetRuleRequest extends $tea.Model {
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

export class GetRuleResponseBody extends $tea.Model {
  code?: string;
  data?: GetRuleResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetRuleResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class GetRuleCategoryResponseBody extends $tea.Model {
  code?: string;
  data?: GetRuleCategoryResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetRuleCategoryResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class GetRuleDetailResponseBody extends $tea.Model {
  code?: string;
  data?: GetRuleDetailResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetRuleDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class GetScoreInfoRequest extends $tea.Model {
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

export class GetScoreInfoResponseBody extends $tea.Model {
  code?: string;
  data?: GetScoreInfoResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetScoreInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class GetSkillGroupConfigResponseBody extends $tea.Model {
  code?: string;
  data?: GetSkillGroupConfigResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSkillGroupConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
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
  code?: string;
  count?: number;
  data?: GetSyncResultResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  resultCountId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resultCountId: 'ResultCountId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: { 'type': 'array', 'itemType': GetSyncResultResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resultCountId: 'string',
      success: 'boolean',
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

export class GetThesaurusBySynonymForApiRequest extends $tea.Model {
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

export class GetThesaurusBySynonymForApiResponseBody extends $tea.Model {
  code?: string;
  data?: GetThesaurusBySynonymForApiResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetThesaurusBySynonymForApiResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class HandleComplaintResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
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

export class InsertScoreForApiResponseBody extends $tea.Model {
  code?: string;
  data?: InsertScoreForApiResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: InsertScoreForApiResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class InsertSubScoreForApiResponseBody extends $tea.Model {
  code?: string;
  data?: InsertSubScoreForApiResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: InsertSubScoreForApiResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class InvalidRuleResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
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

export class ListAsrVocabResponseBody extends $tea.Model {
  code?: string;
  data?: ListAsrVocabResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListAsrVocabResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class ListHotWordsTasksRequest extends $tea.Model {
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

export class ListHotWordsTasksResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  data?: ListHotWordsTasksResponseBodyData;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: ListHotWordsTasksResponseBodyData,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
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

export class ListPrecisionTaskResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  data?: ListPrecisionTaskResponseBodyData;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: ListPrecisionTaskResponseBodyData,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
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

export class ListRolesResponseBody extends $tea.Model {
  code?: string;
  data?: ListRolesResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListRolesResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class ListRulesResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  data?: ListRulesResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: { 'type': 'array', 'itemType': ListRulesResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
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

export class ListSkillGroupConfigResponseBody extends $tea.Model {
  code?: string;
  data?: ListSkillGroupConfigResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListSkillGroupConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class ListTaskAssignRulesResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  data?: ListTaskAssignRulesResponseBodyData;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: ListTaskAssignRulesResponseBodyData,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
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

export class ListUsersResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  data?: ListUsersResponseBodyData;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: ListUsersResponseBodyData,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
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

export class ListWarningConfigResponseBody extends $tea.Model {
  code?: string;
  data?: ListWarningConfigResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListWarningConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class RestartAsrTaskRequest extends $tea.Model {
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

export class RestartAsrTaskResponseBody extends $tea.Model {
  code?: string;
  data?: RestartAsrTaskResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RestartAsrTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class SaveConfigDataSetRequest extends $tea.Model {
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

export class SaveConfigDataSetResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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

export class SubmitComplaintResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
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

export class SubmitPrecisionTaskRequest extends $tea.Model {
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

export class SubmitPrecisionTaskResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
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

export class SubmitQualityCheckTaskResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
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

export class SubmitReviewInfoResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
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

export class SyncQualityCheckResponseBody extends $tea.Model {
  code?: string;
  data?: SyncQualityCheckResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SyncQualityCheckResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class UpdateAsrVocabRequest extends $tea.Model {
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

export class UpdateAsrVocabResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
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

export class UpdateRuleRequest extends $tea.Model {
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

export class UpdateRuleResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
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

export class UpdateScoreForApiResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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

export class UpdateSkillGroupConfigResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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

export class UpdateSubScoreForApiResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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

export class UpdateSyncQualityCheckDataResponseBody extends $tea.Model {
  code?: string;
  data?: UpdateSyncQualityCheckDataResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateSyncQualityCheckDataResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class UpdateTaskAssignRuleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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

export class UpdateUserResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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

export class UpdateUserConfigResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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

export class UpdateWarningConfigResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
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

export class UploadAudioDataResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
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

export class UploadDataResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
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

export class UploadDataSyncResponseBody extends $tea.Model {
  code?: string;
  data?: UploadDataSyncResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UploadDataSyncResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class UploadRuleResponseBody extends $tea.Model {
  code?: string;
  data?: UploadRuleResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UploadRuleResponseBodyData,
      message: 'string',
      requestId: 'string',
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

export class VerifyFileResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      message: 'string',
      requestId: 'string',
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

export class VerifySentenceResponseBody extends $tea.Model {
  code?: string;
  data?: VerifySentenceResponseBodyData;
  incorrectWords?: number;
  message?: string;
  requestId?: string;
  sourceRole?: number;
  success?: boolean;
  targetRole?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      incorrectWords: 'IncorrectWords',
      message: 'Message',
      requestId: 'RequestId',
      sourceRole: 'SourceRole',
      success: 'Success',
      targetRole: 'TargetRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: VerifySentenceResponseBodyData,
      incorrectWords: 'number',
      message: 'string',
      requestId: 'string',
      sourceRole: 'number',
      success: 'boolean',
      targetRole: 'number',
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
  name?: string;
  words?: GetAsrVocabResponseBodyDataWords;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      words: GetAsrVocabResponseBodyDataWords,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessCategoryListResponseBodyDataBusinessCategoryBasicInfo extends $tea.Model {
  bid?: number;
  businessName?: string;
  serviceType?: number;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      businessName: 'BusinessName',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'number',
      businessName: 'string',
      serviceType: 'number',
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
  createTime?: string;
  modeCustomizationId?: string;
  modelId?: number;
  modelName?: string;
  modelStatus?: number;
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modeCustomizationId: 'ModeCustomizationId',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelStatus: 'ModelStatus',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modeCustomizationId: 'string',
      modelId: 'number',
      modelName: 'string',
      modelStatus: 'number',
      taskType: 'number',
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
  rid?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      rid: 'Rid',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rid: 'number',
      ruleName: 'string',
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
  source?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSource;
  target?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTarget;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      target: 'Target',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaSource,
      target: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltasDeltaTarget,
      type: 'string',
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
  begin?: number;
  beginTime?: string;
  deltas?: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltas;
  emotionValue?: number;
  end?: number;
  hourMinSec?: string;
  identity?: string;
  incorrectWords?: number;
  role?: string;
  silenceDuration?: number;
  sourceRole?: string;
  sourceWords?: string;
  speechRate?: number;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      beginTime: 'BeginTime',
      deltas: 'Deltas',
      emotionValue: 'EmotionValue',
      end: 'End',
      hourMinSec: 'HourMinSec',
      identity: 'Identity',
      incorrectWords: 'IncorrectWords',
      role: 'Role',
      silenceDuration: 'SilenceDuration',
      sourceRole: 'SourceRole',
      sourceWords: 'SourceWords',
      speechRate: 'SpeechRate',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      beginTime: 'string',
      deltas: GetNextResultToVerifyResponseBodyDataDialoguesDialogueDeltas,
      emotionValue: 'number',
      end: 'number',
      hourMinSec: 'string',
      identity: 'string',
      incorrectWords: 'number',
      role: 'string',
      silenceDuration: 'number',
      sourceRole: 'string',
      sourceWords: 'string',
      speechRate: 'number',
      words: 'string',
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
  audioURL?: string;
  dialogues?: GetNextResultToVerifyResponseBodyDataDialogues;
  duration?: number;
  fileId?: string;
  fileName?: string;
  incorrectWords?: number;
  index?: number;
  precision?: number;
  status?: number;
  totalCount?: number;
  updateTime?: string;
  verified?: boolean;
  verifiedCount?: number;
  static names(): { [key: string]: string } {
    return {
      audioScheme: 'AudioScheme',
      audioURL: 'AudioURL',
      dialogues: 'Dialogues',
      duration: 'Duration',
      fileId: 'FileId',
      fileName: 'FileName',
      incorrectWords: 'IncorrectWords',
      index: 'Index',
      precision: 'Precision',
      status: 'Status',
      totalCount: 'TotalCount',
      updateTime: 'UpdateTime',
      verified: 'Verified',
      verifiedCount: 'VerifiedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioScheme: 'string',
      audioURL: 'string',
      dialogues: GetNextResultToVerifyResponseBodyDataDialogues,
      duration: 'number',
      fileId: 'string',
      fileName: 'string',
      incorrectWords: 'number',
      index: 'number',
      precision: 'number',
      status: 'number',
      totalCount: 'number',
      updateTime: 'string',
      verified: 'boolean',
      verifiedCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrecisionTaskResponseBodyDataPrecisionsPrecision extends $tea.Model {
  modelId?: number;
  modelName?: string;
  precision?: number;
  status?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      modelName: 'ModelName',
      precision: 'Precision',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'number',
      modelName: 'string',
      precision: 'number',
      status: 'number',
      taskId: 'string',
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
  dataSetId?: number;
  dataSetName?: string;
  duration?: number;
  incorrectWords?: number;
  name?: string;
  precisions?: GetPrecisionTaskResponseBodyDataPrecisions;
  source?: number;
  status?: number;
  taskId?: string;
  totalCount?: number;
  updateTime?: string;
  verifiedCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataSetId: 'DataSetId',
      dataSetName: 'DataSetName',
      duration: 'Duration',
      incorrectWords: 'IncorrectWords',
      name: 'Name',
      precisions: 'Precisions',
      source: 'Source',
      status: 'Status',
      taskId: 'TaskId',
      totalCount: 'TotalCount',
      updateTime: 'UpdateTime',
      verifiedCount: 'VerifiedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSetId: 'number',
      dataSetName: 'string',
      duration: 'number',
      incorrectWords: 'number',
      name: 'string',
      precisions: GetPrecisionTaskResponseBodyDataPrecisions,
      source: 'number',
      status: 'number',
      taskId: 'string',
      totalCount: 'number',
      updateTime: 'string',
      verifiedCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoAgent extends $tea.Model {
  id?: string;
  name?: string;
  skillGroup?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      skillGroup: 'SkillGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      skillGroup: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoAsrResultAsrResult extends $tea.Model {
  begin?: number;
  emotionValue?: number;
  end?: number;
  role?: string;
  speechRate?: number;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      emotionValue: 'EmotionValue',
      end: 'End',
      role: 'Role',
      speechRate: 'SpeechRate',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      role: 'string',
      speechRate: 'number',
      words: 'string',
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

export class GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitKeyWordsKeyWord extends $tea.Model {
  cid?: string;
  from?: number;
  to?: number;
  val?: string;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      from: 'From',
      to: 'To',
      val: 'Val',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: 'string',
      from: 'number',
      to: 'number',
      val: 'string',
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

export class GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitPhrase extends $tea.Model {
  begin?: number;
  emotionValue?: number;
  end?: number;
  role?: string;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      emotionValue: 'EmotionValue',
      end: 'End',
      role: 'Role',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      role: 'string',
      words: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfoHitResultHitResultHitsHit extends $tea.Model {
  cid?: GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitCid;
  keyWords?: GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitKeyWords;
  phrase?: GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitPhrase;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      keyWords: 'KeyWords',
      phrase: 'Phrase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitCid,
      keyWords: GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitKeyWords,
      phrase: GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitPhrase,
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
  hits?: GetResultResponseBodyDataResultInfoHitResultHitResultHits;
  name?: string;
  reviewResult?: number;
  rid?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      hits: 'Hits',
      name: 'Name',
      reviewResult: 'ReviewResult',
      rid: 'Rid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hits: GetResultResponseBodyDataResultInfoHitResultHitResultHits,
      name: 'string',
      reviewResult: 'number',
      rid: 'string',
      type: 'string',
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

export class GetResultResponseBodyDataResultInfoHitScoreHitScore extends $tea.Model {
  ruleId?: string;
  scoreId?: string;
  scoreName?: string;
  scoreNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      scoreId: 'ScoreId',
      scoreName: 'ScoreName',
      scoreNumber: 'ScoreNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
      scoreId: 'string',
      scoreName: 'string',
      scoreNumber: 'string',
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

export class GetResultResponseBodyDataResultInfoRecording extends $tea.Model {
  business?: string;
  callId?: string;
  callTime?: string;
  callType?: number;
  callee?: string;
  caller?: string;
  dataSetName?: string;
  dialogueSize?: number;
  duration?: number;
  id?: string;
  name?: string;
  primaryId?: string;
  remark1?: string;
  remark10?: string;
  remark11?: string;
  remark12?: string;
  remark13?: string;
  remark2?: string;
  remark3?: string;
  remark4?: string;
  remark5?: number;
  remark6?: string;
  remark7?: string;
  remark8?: string;
  remark9?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      business: 'Business',
      callId: 'CallId',
      callTime: 'CallTime',
      callType: 'CallType',
      callee: 'Callee',
      caller: 'Caller',
      dataSetName: 'DataSetName',
      dialogueSize: 'DialogueSize',
      duration: 'Duration',
      id: 'Id',
      name: 'Name',
      primaryId: 'PrimaryId',
      remark1: 'Remark1',
      remark10: 'Remark10',
      remark11: 'Remark11',
      remark12: 'Remark12',
      remark13: 'Remark13',
      remark2: 'Remark2',
      remark3: 'Remark3',
      remark4: 'Remark4',
      remark5: 'Remark5',
      remark6: 'Remark6',
      remark7: 'Remark7',
      remark8: 'Remark8',
      remark9: 'Remark9',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      business: 'string',
      callId: 'string',
      callTime: 'string',
      callType: 'number',
      callee: 'string',
      caller: 'string',
      dataSetName: 'string',
      dialogueSize: 'number',
      duration: 'number',
      id: 'string',
      name: 'string',
      primaryId: 'string',
      remark1: 'string',
      remark10: 'string',
      remark11: 'string',
      remark12: 'string',
      remark13: 'string',
      remark2: 'string',
      remark3: 'string',
      remark4: 'string',
      remark5: 'number',
      remark6: 'string',
      remark7: 'string',
      remark8: 'string',
      remark9: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultResponseBodyDataResultInfo extends $tea.Model {
  agent?: GetResultResponseBodyDataResultInfoAgent;
  asrResult?: GetResultResponseBodyDataResultInfoAsrResult;
  assignmentTime?: string;
  comments?: string;
  createTime?: string;
  createTimeLong?: string;
  errorMessage?: string;
  hitResult?: GetResultResponseBodyDataResultInfoHitResult;
  hitScore?: GetResultResponseBodyDataResultInfoHitScore;
  lastDataId?: string;
  recording?: GetResultResponseBodyDataResultInfoRecording;
  resolver?: string;
  reviewResult?: number;
  reviewStatus?: number;
  reviewTime?: string;
  reviewTimeLong?: string;
  reviewType?: number;
  reviewer?: string;
  score?: number;
  status?: number;
  taskId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
      asrResult: 'AsrResult',
      assignmentTime: 'AssignmentTime',
      comments: 'Comments',
      createTime: 'CreateTime',
      createTimeLong: 'CreateTimeLong',
      errorMessage: 'ErrorMessage',
      hitResult: 'HitResult',
      hitScore: 'HitScore',
      lastDataId: 'LastDataId',
      recording: 'Recording',
      resolver: 'Resolver',
      reviewResult: 'ReviewResult',
      reviewStatus: 'ReviewStatus',
      reviewTime: 'ReviewTime',
      reviewTimeLong: 'ReviewTimeLong',
      reviewType: 'ReviewType',
      reviewer: 'Reviewer',
      score: 'Score',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: GetResultResponseBodyDataResultInfoAgent,
      asrResult: GetResultResponseBodyDataResultInfoAsrResult,
      assignmentTime: 'string',
      comments: 'string',
      createTime: 'string',
      createTimeLong: 'string',
      errorMessage: 'string',
      hitResult: GetResultResponseBodyDataResultInfoHitResult,
      hitScore: GetResultResponseBodyDataResultInfoHitScore,
      lastDataId: 'string',
      recording: GetResultResponseBodyDataResultInfoRecording,
      resolver: 'string',
      reviewResult: 'number',
      reviewStatus: 'number',
      reviewTime: 'string',
      reviewTimeLong: 'string',
      reviewType: 'number',
      reviewer: 'string',
      score: 'number',
      status: 'number',
      taskId: 'string',
      taskName: 'string',
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

export class GetResultToReviewResponseBodyDataDialoguesDialogue extends $tea.Model {
  begin?: number;
  beginTime?: string;
  emotionValue?: number;
  end?: number;
  hourMinSec?: string;
  identity?: string;
  role?: string;
  silenceDuration?: number;
  speechRate?: number;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      beginTime: 'BeginTime',
      emotionValue: 'EmotionValue',
      end: 'End',
      hourMinSec: 'HourMinSec',
      identity: 'Identity',
      role: 'Role',
      silenceDuration: 'SilenceDuration',
      speechRate: 'SpeechRate',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      beginTime: 'string',
      emotionValue: 'number',
      end: 'number',
      hourMinSec: 'string',
      identity: 'string',
      role: 'string',
      silenceDuration: 'number',
      speechRate: 'number',
      words: 'string',
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

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoComplainHistoriesComplainHistories extends $tea.Model {
  comments?: string;
  operationTime?: string;
  operationType?: number;
  operator?: number;
  operatorName?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      operationTime: 'OperationTime',
      operationType: 'OperationType',
      operator: 'Operator',
      operatorName: 'OperatorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      operationTime: 'string',
      operationType: 'number',
      operator: 'number',
      operatorName: 'string',
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

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWordsKeyWord extends $tea.Model {
  cid?: string;
  from?: number;
  pid?: number;
  tid?: string;
  to?: number;
  val?: string;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      from: 'From',
      pid: 'Pid',
      tid: 'Tid',
      to: 'To',
      val: 'Val',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: 'string',
      from: 'number',
      pid: 'number',
      tid: 'string',
      to: 'number',
      val: 'string',
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

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoPhrase extends $tea.Model {
  begin?: number;
  emotionValue?: number;
  end?: number;
  identity?: string;
  pid?: number;
  role?: string;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      emotionValue: 'EmotionValue',
      end: 'End',
      identity: 'Identity',
      pid: 'Pid',
      role: 'Role',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      identity: 'string',
      pid: 'number',
      role: 'string',
      words: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfo extends $tea.Model {
  cid?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoCid;
  keyWords?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWords;
  phrase?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoPhrase;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      keyWords: 'KeyWords',
      phrase: 'Phrase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoCid,
      keyWords: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoKeyWords,
      phrase: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoListConditionHitInfoPhrase,
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
  hitId?: string;
  reviewResult?: number;
  reviewTime?: string;
  reviewer?: string;
  rid?: number;
  static names(): { [key: string]: string } {
    return {
      hitId: 'HitId',
      reviewResult: 'ReviewResult',
      reviewTime: 'ReviewTime',
      reviewer: 'Reviewer',
      rid: 'Rid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitId: 'string',
      reviewResult: 'number',
      reviewTime: 'string',
      reviewer: 'string',
      rid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfo extends $tea.Model {
  autoReview?: number;
  complainHistories?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoComplainHistories;
  complainable?: boolean;
  conditionHitInfoList?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoList;
  reviewInfo?: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoReviewInfo;
  rid?: number;
  ruleName?: string;
  scoreId?: number;
  scoreNum?: number;
  scoreSubId?: number;
  scoreSubName?: string;
  static names(): { [key: string]: string } {
    return {
      autoReview: 'AutoReview',
      complainHistories: 'ComplainHistories',
      complainable: 'Complainable',
      conditionHitInfoList: 'ConditionHitInfoList',
      reviewInfo: 'ReviewInfo',
      rid: 'Rid',
      ruleName: 'RuleName',
      scoreId: 'ScoreId',
      scoreNum: 'ScoreNum',
      scoreSubId: 'ScoreSubId',
      scoreSubName: 'ScoreSubName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoReview: 'number',
      complainHistories: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoComplainHistories,
      complainable: 'boolean',
      conditionHitInfoList: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoConditionHitInfoList,
      reviewInfo: GetResultToReviewResponseBodyDataHitRuleReviewInfoListHitRuleReviewInfoReviewInfo,
      rid: 'number',
      ruleName: 'string',
      scoreId: 'number',
      scoreNum: 'number',
      scoreSubId: 'number',
      scoreSubName: 'string',
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
  comments?: string;
  operationTime?: string;
  operationType?: number;
  operator?: number;
  operatorName?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      operationTime: 'OperationTime',
      operationType: 'OperationType',
      operator: 'Operator',
      operatorName: 'OperatorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      operationTime: 'string',
      operationType: 'number',
      operator: 'number',
      operatorName: 'string',
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
  complainHistories?: GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfoComplainHistories;
  complainable?: boolean;
  scoreId?: number;
  scoreNum?: number;
  scoreSubId?: number;
  scoreSubName?: string;
  static names(): { [key: string]: string } {
    return {
      complainHistories: 'ComplainHistories',
      complainable: 'Complainable',
      scoreId: 'ScoreId',
      scoreNum: 'ScoreNum',
      scoreSubId: 'ScoreSubId',
      scoreSubName: 'ScoreSubName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complainHistories: GetResultToReviewResponseBodyDataManualScoreInfoListManualScoreInfoComplainHistories,
      complainable: 'boolean',
      scoreId: 'number',
      scoreNum: 'number',
      scoreSubId: 'number',
      scoreSubName: 'string',
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

export class GetResultToReviewResponseBodyDataReviewHistoryListReviewHistory extends $tea.Model {
  complainResult?: number;
  oldScore?: number;
  operatorName?: string;
  reviewResult?: number;
  score?: number;
  timeStr?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      complainResult: 'ComplainResult',
      oldScore: 'OldScore',
      operatorName: 'OperatorName',
      reviewResult: 'ReviewResult',
      score: 'Score',
      timeStr: 'TimeStr',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complainResult: 'number',
      oldScore: 'number',
      operatorName: 'string',
      reviewResult: 'number',
      score: 'number',
      timeStr: 'string',
      type: 'number',
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

export class GetResultToReviewResponseBodyData extends $tea.Model {
  audioScheme?: string;
  audioURL?: string;
  comments?: string;
  dialogues?: GetResultToReviewResponseBodyDataDialogues;
  fileId?: string;
  fileMergeName?: string;
  hitRuleReviewInfoList?: GetResultToReviewResponseBodyDataHitRuleReviewInfoList;
  manualScoreInfoList?: GetResultToReviewResponseBodyDataManualScoreInfoList;
  reviewHistoryList?: GetResultToReviewResponseBodyDataReviewHistoryList;
  status?: number;
  totalScore?: number;
  vid?: string;
  static names(): { [key: string]: string } {
    return {
      audioScheme: 'AudioScheme',
      audioURL: 'AudioURL',
      comments: 'Comments',
      dialogues: 'Dialogues',
      fileId: 'FileId',
      fileMergeName: 'FileMergeName',
      hitRuleReviewInfoList: 'HitRuleReviewInfoList',
      manualScoreInfoList: 'ManualScoreInfoList',
      reviewHistoryList: 'ReviewHistoryList',
      status: 'Status',
      totalScore: 'TotalScore',
      vid: 'Vid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioScheme: 'string',
      audioURL: 'string',
      comments: 'string',
      dialogues: GetResultToReviewResponseBodyDataDialogues,
      fileId: 'string',
      fileMergeName: 'string',
      hitRuleReviewInfoList: GetResultToReviewResponseBodyDataHitRuleReviewInfoList,
      manualScoreInfoList: GetResultToReviewResponseBodyDataManualScoreInfoList,
      reviewHistoryList: GetResultToReviewResponseBodyDataReviewHistoryList,
      status: 'number',
      totalScore: 'number',
      vid: 'string',
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
  autoReview?: number;
  businessCategoryNameList?: GetRuleResponseBodyDataRulesRuleInfoBusinessCategoryNameList;
  comments?: string;
  createEmpid?: string;
  createTime?: string;
  endTime?: string;
  isDelete?: number;
  isOnline?: number;
  lastUpdateEmpid?: string;
  lastUpdateTime?: string;
  name?: string;
  rid?: string;
  ruleLambda?: string;
  ruleScoreType?: number;
  scoreId?: number;
  scoreName?: string;
  scoreSubId?: number;
  scoreSubName?: string;
  startTime?: string;
  status?: number;
  type?: number;
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      autoReview: 'AutoReview',
      businessCategoryNameList: 'BusinessCategoryNameList',
      comments: 'Comments',
      createEmpid: 'CreateEmpid',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      isDelete: 'IsDelete',
      isOnline: 'IsOnline',
      lastUpdateEmpid: 'LastUpdateEmpid',
      lastUpdateTime: 'LastUpdateTime',
      name: 'Name',
      rid: 'Rid',
      ruleLambda: 'RuleLambda',
      ruleScoreType: 'RuleScoreType',
      scoreId: 'ScoreId',
      scoreName: 'ScoreName',
      scoreSubId: 'ScoreSubId',
      scoreSubName: 'ScoreSubName',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoReview: 'number',
      businessCategoryNameList: GetRuleResponseBodyDataRulesRuleInfoBusinessCategoryNameList,
      comments: 'string',
      createEmpid: 'string',
      createTime: 'string',
      endTime: 'string',
      isDelete: 'number',
      isOnline: 'number',
      lastUpdateEmpid: 'string',
      lastUpdateTime: 'string',
      name: 'string',
      rid: 'string',
      ruleLambda: 'string',
      ruleScoreType: 'number',
      scoreId: 'number',
      scoreName: 'string',
      scoreSubId: 'number',
      scoreSubName: 'string',
      startTime: 'string',
      status: 'number',
      type: 'number',
      weight: 'string',
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
  select?: boolean;
  type?: number;
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      select: 'Select',
      type: 'Type',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      select: 'boolean',
      type: 'number',
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

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRangeAnchor extends $tea.Model {
  anchorCid?: string;
  hitTime?: number;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      anchorCid: 'AnchorCid',
      hitTime: 'HitTime',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorCid: 'string',
      hitTime: 'number',
      location: 'string',
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
  absolute?: boolean;
  anchor?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRangeAnchor;
  range?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRangeRange;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      absolute: 'Absolute',
      anchor: 'Anchor',
      range: 'Range',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      absolute: 'boolean',
      anchor: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRangeAnchor,
      range: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRangeRange,
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamAntModelInfo extends $tea.Model {
  antModelInfo?: string[];
  static names(): { [key: string]: string } {
    return {
      antModelInfo: 'AntModelInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antModelInfo: { 'type': 'array', 'itemType': 'string' },
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

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamPvalues extends $tea.Model {
  pvalues?: string[];
  static names(): { [key: string]: string } {
    return {
      pvalues: 'Pvalues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pvalues: { 'type': 'array', 'itemType': 'string' },
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

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParam extends $tea.Model {
  antModelInfo?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamAntModelInfo;
  average?: boolean;
  beginType?: string;
  checkType?: number;
  compareOperator?: string;
  contextChatMatch?: boolean;
  delayTime?: number;
  differentRole?: boolean;
  excludes?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamExcludes;
  from?: number;
  fromEnd?: boolean;
  hitTime?: number;
  inSentence?: boolean;
  interval?: number;
  keywordExtension?: boolean;
  keywordMatchSize?: number;
  maxEmotionChangeValue?: number;
  minWordSize?: number;
  notRegex?: string;
  operKeyWords?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamOperKeyWords;
  phrase?: string;
  pvalues?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamPvalues;
  references?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamReferences;
  regex?: string;
  score?: number;
  similarityThreshold?: number;
  similarlySentences?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamSimilarlySentences;
  target?: number;
  targetRole?: string;
  threshold?: number;
  velocityInMint?: number;
  static names(): { [key: string]: string } {
    return {
      antModelInfo: 'AntModelInfo',
      average: 'Average',
      beginType: 'BeginType',
      checkType: 'CheckType',
      compareOperator: 'CompareOperator',
      contextChatMatch: 'ContextChatMatch',
      delayTime: 'DelayTime',
      differentRole: 'DifferentRole',
      excludes: 'Excludes',
      from: 'From',
      fromEnd: 'FromEnd',
      hitTime: 'HitTime',
      inSentence: 'InSentence',
      interval: 'Interval',
      keywordExtension: 'KeywordExtension',
      keywordMatchSize: 'KeywordMatchSize',
      maxEmotionChangeValue: 'MaxEmotionChangeValue',
      minWordSize: 'MinWordSize',
      notRegex: 'NotRegex',
      operKeyWords: 'OperKeyWords',
      phrase: 'Phrase',
      pvalues: 'Pvalues',
      references: 'References',
      regex: 'Regex',
      score: 'Score',
      similarityThreshold: 'Similarity_threshold',
      similarlySentences: 'SimilarlySentences',
      target: 'Target',
      targetRole: 'TargetRole',
      threshold: 'Threshold',
      velocityInMint: 'VelocityInMint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antModelInfo: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamAntModelInfo,
      average: 'boolean',
      beginType: 'string',
      checkType: 'number',
      compareOperator: 'string',
      contextChatMatch: 'boolean',
      delayTime: 'number',
      differentRole: 'boolean',
      excludes: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamExcludes,
      from: 'number',
      fromEnd: 'boolean',
      hitTime: 'number',
      inSentence: 'boolean',
      interval: 'number',
      keywordExtension: 'boolean',
      keywordMatchSize: 'number',
      maxEmotionChangeValue: 'number',
      minWordSize: 'number',
      notRegex: 'string',
      operKeyWords: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamOperKeyWords,
      phrase: 'string',
      pvalues: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamPvalues,
      references: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamReferences,
      regex: 'string',
      score: 'number',
      similarityThreshold: 'number',
      similarlySentences: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParamSimilarlySentences,
      target: 'number',
      targetRole: 'string',
      threshold: 'number',
      velocityInMint: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfo extends $tea.Model {
  oid?: string;
  operName?: string;
  param?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParam;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      oid: 'Oid',
      operName: 'OperName',
      param: 'Param',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oid: 'string',
      operName: 'string',
      param: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperatorsOperatorBasicInfoParam,
      type: 'string',
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

export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfo extends $tea.Model {
  checkRange?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRange;
  conditionInfoCid?: string;
  operLambda?: string;
  operators?: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperators;
  static names(): { [key: string]: string } {
    return {
      checkRange: 'CheckRange',
      conditionInfoCid: 'ConditionInfoCid',
      operLambda: 'OperLambda',
      operators: 'Operators',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkRange: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRange,
      conditionInfoCid: 'string',
      operLambda: 'string',
      operators: GetRuleDetailResponseBodyDataConditionsConditionBasicInfoOperators,
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

export class GetRuleDetailResponseBodyDataRulesRuleBasicInfoBusinessCategoriesBusinessCategoryBasicInfo extends $tea.Model {
  bid?: number;
  businessName?: string;
  serviceType?: number;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      businessName: 'BusinessName',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'number',
      businessName: 'string',
      serviceType: 'number',
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

export class GetRuleDetailResponseBodyDataRulesRuleBasicInfo extends $tea.Model {
  businessCategories?: GetRuleDetailResponseBodyDataRulesRuleBasicInfoBusinessCategories;
  rid?: string;
  ruleLambda?: string;
  triggers?: GetRuleDetailResponseBodyDataRulesRuleBasicInfoTriggers;
  static names(): { [key: string]: string } {
    return {
      businessCategories: 'BusinessCategories',
      rid: 'Rid',
      ruleLambda: 'RuleLambda',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCategories: GetRuleDetailResponseBodyDataRulesRuleBasicInfoBusinessCategories,
      rid: 'string',
      ruleLambda: 'string',
      triggers: GetRuleDetailResponseBodyDataRulesRuleBasicInfoTriggers,
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
  count?: number;
  pageNumber?: number;
  pageSize?: number;
  rules?: GetRuleDetailResponseBodyDataRules;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      count: 'Count',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: GetRuleDetailResponseBodyDataConditions,
      count: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      rules: GetRuleDetailResponseBodyDataRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScoreInfoResponseBodyDataScorePoScoreInfosScoreParam extends $tea.Model {
  scoreNum?: number;
  scoreSubId?: number;
  scoreSubName?: string;
  scoreType?: number;
  static names(): { [key: string]: string } {
    return {
      scoreNum: 'ScoreNum',
      scoreSubId: 'ScoreSubId',
      scoreSubName: 'ScoreSubName',
      scoreType: 'ScoreType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreNum: 'number',
      scoreSubId: 'number',
      scoreSubName: 'string',
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
  scoreId?: number;
  scoreInfos?: GetScoreInfoResponseBodyDataScorePoScoreInfos;
  scoreName?: string;
  static names(): { [key: string]: string } {
    return {
      scoreId: 'ScoreId',
      scoreInfos: 'ScoreInfos',
      scoreName: 'ScoreName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreId: 'number',
      scoreInfos: GetScoreInfoResponseBodyDataScorePoScoreInfos,
      scoreName: 'string',
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
  rid?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      rid: 'Rid',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rid: 'number',
      ruleName: 'string',
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
  rid?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      rid: 'Rid',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rid: 'number',
      ruleName: 'string',
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
  allContentQualityCheck?: number;
  allRids?: string;
  allRuleList?: GetSkillGroupConfigResponseBodyDataAllRuleList;
  createTime?: string;
  id?: number;
  instanceId?: string;
  modelId?: number;
  modelName?: string;
  name?: string;
  qualityCheckType?: number;
  rid?: string;
  ruleList?: GetSkillGroupConfigResponseBodyDataRuleList;
  skillGroupFrom?: number;
  skillGroupId?: string;
  skillGroupName?: string;
  status?: number;
  type?: number;
  updateTime?: string;
  vocabId?: number;
  vocabName?: string;
  static names(): { [key: string]: string } {
    return {
      allContentQualityCheck: 'AllContentQualityCheck',
      allRids: 'AllRids',
      allRuleList: 'AllRuleList',
      createTime: 'CreateTime',
      id: 'Id',
      instanceId: 'InstanceId',
      modelId: 'ModelId',
      modelName: 'ModelName',
      name: 'Name',
      qualityCheckType: 'QualityCheckType',
      rid: 'Rid',
      ruleList: 'RuleList',
      skillGroupFrom: 'SkillGroupFrom',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
      vocabId: 'VocabId',
      vocabName: 'VocabName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allContentQualityCheck: 'number',
      allRids: 'string',
      allRuleList: GetSkillGroupConfigResponseBodyDataAllRuleList,
      createTime: 'string',
      id: 'number',
      instanceId: 'string',
      modelId: 'number',
      modelName: 'string',
      name: 'string',
      qualityCheckType: 'number',
      rid: 'string',
      ruleList: GetSkillGroupConfigResponseBodyDataRuleList,
      skillGroupFrom: 'number',
      skillGroupId: 'string',
      skillGroupName: 'string',
      status: 'number',
      type: 'number',
      updateTime: 'string',
      vocabId: 'number',
      vocabName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyDataAgent extends $tea.Model {
  id?: string;
  name?: string;
  skillGroup?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      skillGroup: 'SkillGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      skillGroup: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyDataAsrResult extends $tea.Model {
  begin?: number;
  emotionValue?: number;
  end?: number;
  role?: string;
  silenceDuration?: number;
  speechRate?: number;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      emotionValue: 'EmotionValue',
      end: 'End',
      role: 'Role',
      silenceDuration: 'SilenceDuration',
      speechRate: 'SpeechRate',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      role: 'string',
      silenceDuration: 'number',
      speechRate: 'number',
      words: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyDataHitResultHitsKeyWords extends $tea.Model {
  cid?: string;
  from?: number;
  to?: number;
  val?: string;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      from: 'From',
      to: 'To',
      val: 'Val',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: 'string',
      from: 'number',
      to: 'number',
      val: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyDataHitResultHitsPhrase extends $tea.Model {
  begin?: number;
  emotionValue?: number;
  end?: number;
  role?: string;
  silenceDuration?: number;
  speechRate?: number;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      emotionValue: 'EmotionValue',
      end: 'End',
      role: 'Role',
      silenceDuration: 'SilenceDuration',
      speechRate: 'SpeechRate',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      role: 'string',
      silenceDuration: 'number',
      speechRate: 'number',
      words: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyDataHitResultHits extends $tea.Model {
  cid?: string[];
  keyWords?: GetSyncResultResponseBodyDataHitResultHitsKeyWords[];
  phrase?: GetSyncResultResponseBodyDataHitResultHitsPhrase;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      keyWords: 'KeyWords',
      phrase: 'Phrase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: { 'type': 'array', 'itemType': 'string' },
      keyWords: { 'type': 'array', 'itemType': GetSyncResultResponseBodyDataHitResultHitsKeyWords },
      phrase: GetSyncResultResponseBodyDataHitResultHitsPhrase,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyDataHitResult extends $tea.Model {
  hits?: GetSyncResultResponseBodyDataHitResultHits[];
  name?: string;
  reviewResult?: number;
  rid?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      hits: 'Hits',
      name: 'Name',
      reviewResult: 'ReviewResult',
      rid: 'Rid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hits: { 'type': 'array', 'itemType': GetSyncResultResponseBodyDataHitResultHits },
      name: 'string',
      reviewResult: 'number',
      rid: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyDataRecording extends $tea.Model {
  business?: string;
  callId?: string;
  callTime?: string;
  callType?: number;
  callee?: string;
  caller?: string;
  dataSetName?: string;
  duration?: number;
  durationAudio?: number;
  id?: string;
  name?: string;
  primaryId?: string;
  remark1?: string;
  remark2?: string;
  remark3?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      business: 'Business',
      callId: 'CallId',
      callTime: 'CallTime',
      callType: 'CallType',
      callee: 'Callee',
      caller: 'Caller',
      dataSetName: 'DataSetName',
      duration: 'Duration',
      durationAudio: 'DurationAudio',
      id: 'Id',
      name: 'Name',
      primaryId: 'PrimaryId',
      remark1: 'Remark1',
      remark2: 'Remark2',
      remark3: 'Remark3',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      business: 'string',
      callId: 'string',
      callTime: 'string',
      callType: 'number',
      callee: 'string',
      caller: 'string',
      dataSetName: 'string',
      duration: 'number',
      durationAudio: 'number',
      id: 'string',
      name: 'string',
      primaryId: 'string',
      remark1: 'string',
      remark2: 'string',
      remark3: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSyncResultResponseBodyData extends $tea.Model {
  agent?: GetSyncResultResponseBodyDataAgent;
  asrResult?: GetSyncResultResponseBodyDataAsrResult[];
  comments?: string;
  createTime?: string;
  errorMessage?: string;
  hitResult?: GetSyncResultResponseBodyDataHitResult[];
  recording?: GetSyncResultResponseBodyDataRecording;
  resolver?: string;
  reviewResult?: number;
  reviewStatus?: number;
  reviewer?: string;
  score?: number;
  status?: number;
  taskId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
      asrResult: 'AsrResult',
      comments: 'Comments',
      createTime: 'CreateTime',
      errorMessage: 'ErrorMessage',
      hitResult: 'HitResult',
      recording: 'Recording',
      resolver: 'Resolver',
      reviewResult: 'ReviewResult',
      reviewStatus: 'ReviewStatus',
      reviewer: 'Reviewer',
      score: 'Score',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: GetSyncResultResponseBodyDataAgent,
      asrResult: { 'type': 'array', 'itemType': GetSyncResultResponseBodyDataAsrResult },
      comments: 'string',
      createTime: 'string',
      errorMessage: 'string',
      hitResult: { 'type': 'array', 'itemType': GetSyncResultResponseBodyDataHitResult },
      recording: GetSyncResultResponseBodyDataRecording,
      resolver: 'string',
      reviewResult: 'number',
      reviewStatus: 'number',
      reviewer: 'string',
      score: 'number',
      status: 'number',
      taskId: 'string',
      taskName: 'string',
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
  id?: number;
  synonymList?: GetThesaurusBySynonymForApiResponseBodyDataThesaurusPoSynonymList;
  static names(): { [key: string]: string } {
    return {
      business: 'Business',
      id: 'Id',
      synonymList: 'SynonymList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      business: 'string',
      id: 'number',
      synonymList: GetThesaurusBySynonymForApiResponseBodyDataThesaurusPoSynonymList,
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
  scoreId?: number;
  scoreName?: string;
  static names(): { [key: string]: string } {
    return {
      scoreId: 'ScoreId',
      scoreName: 'ScoreName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreId: 'number',
      scoreName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertSubScoreForApiResponseBodyData extends $tea.Model {
  scoreSubId?: number;
  scoreSubName?: string;
  static names(): { [key: string]: string } {
    return {
      scoreSubId: 'ScoreSubId',
      scoreSubName: 'ScoreSubName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scoreSubId: 'number',
      scoreSubName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsrVocabResponseBodyDataAsrVocab extends $tea.Model {
  createTime?: string;
  id?: string;
  name?: string;
  updateTime?: string;
  vocabularyId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      id: 'Id',
      name: 'Name',
      updateTime: 'UpdateTime',
      vocabularyId: 'VocabularyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      id: 'string',
      name: 'string',
      updateTime: 'string',
      vocabularyId: 'string',
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

export class ListHotWordsTasksResponseBodyDataHotWordsTaskPoDialogueParam extends $tea.Model {
  dataSetIds?: string;
  dialogueId?: number;
  endIndex?: number;
  endTime?: string;
  role?: number;
  sourceType?: number;
  startIndex?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataSetIds: 'DataSetIds',
      dialogueId: 'DialogueId',
      endIndex: 'EndIndex',
      endTime: 'EndTime',
      role: 'Role',
      sourceType: 'SourceType',
      startIndex: 'StartIndex',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSetIds: 'string',
      dialogueId: 'number',
      endIndex: 'number',
      endTime: 'string',
      role: 'number',
      sourceType: 'number',
      startIndex: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotWordsTasksResponseBodyDataHotWordsTaskPoWordsParam extends $tea.Model {
  excludes?: string;
  extraConfigId?: number;
  includes?: string;
  static names(): { [key: string]: string } {
    return {
      excludes: 'Excludes',
      extraConfigId: 'ExtraConfigId',
      includes: 'Includes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludes: 'string',
      extraConfigId: 'number',
      includes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotWordsTasksResponseBodyDataHotWordsTaskPo extends $tea.Model {
  dialogueParam?: ListHotWordsTasksResponseBodyDataHotWordsTaskPoDialogueParam;
  endTime?: string;
  instanceStatus?: number;
  lastExecutionTime?: string;
  message?: string;
  name?: string;
  startTime?: string;
  status?: number;
  taskConfigId?: number;
  timeInterval?: number;
  timeUnit?: number;
  type?: number;
  wordsParam?: ListHotWordsTasksResponseBodyDataHotWordsTaskPoWordsParam;
  static names(): { [key: string]: string } {
    return {
      dialogueParam: 'DialogueParam',
      endTime: 'EndTime',
      instanceStatus: 'InstanceStatus',
      lastExecutionTime: 'LastExecutionTime',
      message: 'Message',
      name: 'Name',
      startTime: 'StartTime',
      status: 'Status',
      taskConfigId: 'TaskConfigId',
      timeInterval: 'TimeInterval',
      timeUnit: 'TimeUnit',
      type: 'Type',
      wordsParam: 'WordsParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueParam: ListHotWordsTasksResponseBodyDataHotWordsTaskPoDialogueParam,
      endTime: 'string',
      instanceStatus: 'number',
      lastExecutionTime: 'string',
      message: 'string',
      name: 'string',
      startTime: 'string',
      status: 'number',
      taskConfigId: 'number',
      timeInterval: 'number',
      timeUnit: 'number',
      type: 'number',
      wordsParam: ListHotWordsTasksResponseBodyDataHotWordsTaskPoWordsParam,
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
  createTime?: string;
  modelId?: number;
  modelName?: string;
  precision?: number;
  status?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modelId: 'ModelId',
      modelName: 'ModelName',
      precision: 'Precision',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modelId: 'number',
      modelName: 'string',
      precision: 'number',
      status: 'number',
      taskId: 'string',
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
  createTime?: string;
  dataSetId?: number;
  dataSetName?: string;
  duration?: number;
  incorrectWords?: number;
  name?: string;
  precisions?: ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisions;
  source?: number;
  status?: number;
  taskId?: string;
  totalCount?: number;
  updateTime?: string;
  verifiedCount?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataSetId: 'DataSetId',
      dataSetName: 'DataSetName',
      duration: 'Duration',
      incorrectWords: 'IncorrectWords',
      name: 'Name',
      precisions: 'Precisions',
      source: 'Source',
      status: 'Status',
      taskId: 'TaskId',
      totalCount: 'TotalCount',
      updateTime: 'UpdateTime',
      verifiedCount: 'VerifiedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dataSetId: 'number',
      dataSetName: 'string',
      duration: 'number',
      incorrectWords: 'number',
      name: 'string',
      precisions: ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisions,
      source: 'number',
      status: 'number',
      taskId: 'string',
      totalCount: 'number',
      updateTime: 'string',
      verifiedCount: 'number',
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
  createTime?: string;
  displayName?: string;
  id?: number;
  level?: number;
  name?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      displayName: 'DisplayName',
      id: 'Id',
      level: 'Level',
      name: 'Name',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      displayName: 'string',
      id: 'number',
      level: 'number',
      name: 'string',
      updateTime: 'string',
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
  businessCategoryNameList?: string[];
  comments?: string;
  createTime?: string;
  name?: string;
  rid?: number;
  ruleType?: number;
  type?: number;
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      businessCategoryNameList: 'BusinessCategoryNameList',
      comments: 'Comments',
      createTime: 'CreateTime',
      name: 'Name',
      rid: 'Rid',
      ruleType: 'RuleType',
      type: 'Type',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCategoryNameList: { 'type': 'array', 'itemType': 'string' },
      comments: 'string',
      createTime: 'string',
      name: 'string',
      rid: 'number',
      ruleType: 'number',
      type: 'number',
      typeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillGroupConfigResponseBodyDataSkillGroupConfigAllRuleListRuleNameInfo extends $tea.Model {
  rid?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      rid: 'Rid',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rid: 'number',
      ruleName: 'string',
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
  rid?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      rid: 'Rid',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rid: 'number',
      ruleName: 'string',
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
  dataType?: number;
  name?: string;
  symbol?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      name: 'Name',
      symbol: 'Symbol',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'number',
      name: 'string',
      symbol: 'number',
      value: 'string',
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
  allContentQualityCheck?: number;
  allRids?: string;
  allRuleList?: ListSkillGroupConfigResponseBodyDataSkillGroupConfigAllRuleList;
  createTime?: string;
  id?: number;
  instanceId?: string;
  modelId?: number;
  modelName?: string;
  name?: string;
  qualityCheckType?: number;
  rid?: string;
  ruleList?: ListSkillGroupConfigResponseBodyDataSkillGroupConfigRuleList;
  screenSwitch?: boolean;
  skillGroupFrom?: number;
  skillGroupId?: string;
  skillGroupName?: string;
  skillGroupScreens?: ListSkillGroupConfigResponseBodyDataSkillGroupConfigSkillGroupScreens;
  status?: number;
  type?: number;
  updateTime?: string;
  vocabId?: number;
  vocabName?: string;
  static names(): { [key: string]: string } {
    return {
      allContentQualityCheck: 'AllContentQualityCheck',
      allRids: 'AllRids',
      allRuleList: 'AllRuleList',
      createTime: 'CreateTime',
      id: 'Id',
      instanceId: 'InstanceId',
      modelId: 'ModelId',
      modelName: 'ModelName',
      name: 'Name',
      qualityCheckType: 'QualityCheckType',
      rid: 'Rid',
      ruleList: 'RuleList',
      screenSwitch: 'ScreenSwitch',
      skillGroupFrom: 'SkillGroupFrom',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      skillGroupScreens: 'SkillGroupScreens',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
      vocabId: 'VocabId',
      vocabName: 'VocabName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allContentQualityCheck: 'number',
      allRids: 'string',
      allRuleList: ListSkillGroupConfigResponseBodyDataSkillGroupConfigAllRuleList,
      createTime: 'string',
      id: 'number',
      instanceId: 'string',
      modelId: 'number',
      modelName: 'string',
      name: 'string',
      qualityCheckType: 'number',
      rid: 'string',
      ruleList: ListSkillGroupConfigResponseBodyDataSkillGroupConfigRuleList,
      screenSwitch: 'boolean',
      skillGroupFrom: 'number',
      skillGroupId: 'string',
      skillGroupName: 'string',
      skillGroupScreens: ListSkillGroupConfigResponseBodyDataSkillGroupConfigSkillGroupScreens,
      status: 'number',
      type: 'number',
      updateTime: 'string',
      vocabId: 'number',
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
  reviewerId?: string;
  reviewerName?: string;
  static names(): { [key: string]: string } {
    return {
      reviewerId: 'ReviewerId',
      reviewerName: 'ReviewerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reviewerId: 'string',
      reviewerName: 'string',
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

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingModeSamplingModeAgentsSamplingModeAgent extends $tea.Model {
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

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingModeSamplingModeAgents extends $tea.Model {
  samplingModeAgent?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingModeSamplingModeAgentsSamplingModeAgent[];
  static names(): { [key: string]: string } {
    return {
      samplingModeAgent: 'SamplingModeAgent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      samplingModeAgent: { 'type': 'array', 'itemType': ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingModeSamplingModeAgentsSamplingModeAgent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingMode extends $tea.Model {
  anyNumberOfDraws?: number;
  designated?: boolean;
  dimension?: number;
  limit?: number;
  numberOfDraws?: number;
  proportion?: number;
  randomInspectionNumber?: number;
  samplingModeAgents?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingModeSamplingModeAgents;
  static names(): { [key: string]: string } {
    return {
      anyNumberOfDraws: 'AnyNumberOfDraws',
      designated: 'Designated',
      dimension: 'Dimension',
      limit: 'Limit',
      numberOfDraws: 'NumberOfDraws',
      proportion: 'Proportion',
      randomInspectionNumber: 'RandomInspectionNumber',
      samplingModeAgents: 'SamplingModeAgents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anyNumberOfDraws: 'number',
      designated: 'boolean',
      dimension: 'number',
      limit: 'number',
      numberOfDraws: 'number',
      proportion: 'number',
      randomInspectionNumber: 'number',
      samplingModeAgents: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingModeSamplingModeAgents,
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

export class ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfo extends $tea.Model {
  agents?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgents;
  agentsStr?: string;
  assignmentType?: number;
  callTimeEnd?: number;
  callTimeStart?: number;
  callType?: number;
  createTime?: string;
  durationMax?: number;
  durationMin?: number;
  enabled?: number;
  priority?: number;
  reviewers?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewers;
  ruleId?: number;
  ruleName?: string;
  rules?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRules;
  samplingMode?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingMode;
  skillGroups?: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroups;
  skillGroupsStr?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      agents: 'Agents',
      agentsStr: 'AgentsStr',
      assignmentType: 'AssignmentType',
      callTimeEnd: 'CallTimeEnd',
      callTimeStart: 'CallTimeStart',
      callType: 'CallType',
      createTime: 'CreateTime',
      durationMax: 'DurationMax',
      durationMin: 'DurationMin',
      enabled: 'Enabled',
      priority: 'Priority',
      reviewers: 'Reviewers',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      rules: 'Rules',
      samplingMode: 'SamplingMode',
      skillGroups: 'SkillGroups',
      skillGroupsStr: 'SkillGroupsStr',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agents: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoAgents,
      agentsStr: 'string',
      assignmentType: 'number',
      callTimeEnd: 'number',
      callTimeStart: 'number',
      callType: 'number',
      createTime: 'string',
      durationMax: 'number',
      durationMin: 'number',
      enabled: 'number',
      priority: 'number',
      reviewers: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoReviewers,
      ruleId: 'number',
      ruleName: 'string',
      rules: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoRules,
      samplingMode: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSamplingMode,
      skillGroups: ListTaskAssignRulesResponseBodyDataTaskAssignRuleInfoSkillGroups,
      skillGroupsStr: 'string',
      updateTime: 'string',
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
  aliUid?: string;
  createTime?: string;
  description?: string;
  displayName?: string;
  id?: number;
  loginUserType?: number;
  roleName?: string;
  updateTime?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      createTime: 'CreateTime',
      description: 'Description',
      displayName: 'DisplayName',
      id: 'Id',
      loginUserType: 'LoginUserType',
      roleName: 'RoleName',
      updateTime: 'UpdateTime',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      createTime: 'string',
      description: 'string',
      displayName: 'string',
      id: 'number',
      loginUserType: 'number',
      roleName: 'string',
      updateTime: 'string',
      userName: 'string',
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

export class ListWarningConfigResponseBodyDataWarningConfigInfoRuleListWarningRule extends $tea.Model {
  rid?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      rid: 'Rid',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rid: 'number',
      ruleName: 'string',
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
  channels?: ListWarningConfigResponseBodyDataWarningConfigInfoChannels;
  configId?: number;
  configName?: string;
  createTime?: string;
  ridList?: ListWarningConfigResponseBodyDataWarningConfigInfoRidList;
  ruleList?: ListWarningConfigResponseBodyDataWarningConfigInfoRuleList;
  status?: number;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      configId: 'ConfigId',
      configName: 'ConfigName',
      createTime: 'CreateTime',
      ridList: 'RidList',
      ruleList: 'RuleList',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: ListWarningConfigResponseBodyDataWarningConfigInfoChannels,
      configId: 'number',
      configName: 'string',
      createTime: 'string',
      ridList: ListWarningConfigResponseBodyDataWarningConfigInfoRidList,
      ruleList: ListWarningConfigResponseBodyDataWarningConfigInfoRuleList,
      status: 'number',
      updateTime: 'string',
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
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      message: 'string',
      success: 'boolean',
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

export class SyncQualityCheckResponseBodyDataRulesHitHitKeyWords extends $tea.Model {
  cid?: number;
  from?: number;
  pid?: number;
  to?: number;
  val?: string;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      from: 'From',
      pid: 'Pid',
      to: 'To',
      val: 'Val',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: 'number',
      from: 'number',
      pid: 'number',
      to: 'number',
      val: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncQualityCheckResponseBodyDataRulesHitPhrase extends $tea.Model {
  begin?: number;
  emotionValue?: number;
  end?: number;
  identity?: string;
  role?: string;
  silenceDuration?: number;
  speechRate?: number;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      emotionValue: 'EmotionValue',
      end: 'End',
      identity: 'Identity',
      role: 'Role',
      silenceDuration: 'SilenceDuration',
      speechRate: 'SpeechRate',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      identity: 'string',
      role: 'string',
      silenceDuration: 'number',
      speechRate: 'number',
      words: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncQualityCheckResponseBodyDataRulesHit extends $tea.Model {
  hitKeyWords?: SyncQualityCheckResponseBodyDataRulesHitHitKeyWords[];
  phrase?: SyncQualityCheckResponseBodyDataRulesHitPhrase;
  static names(): { [key: string]: string } {
    return {
      hitKeyWords: 'HitKeyWords',
      phrase: 'Phrase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitKeyWords: { 'type': 'array', 'itemType': SyncQualityCheckResponseBodyDataRulesHitHitKeyWords },
      phrase: SyncQualityCheckResponseBodyDataRulesHitPhrase,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncQualityCheckResponseBodyDataRules extends $tea.Model {
  hit?: SyncQualityCheckResponseBodyDataRulesHit[];
  rid?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      hit: 'Hit',
      rid: 'Rid',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hit: { 'type': 'array', 'itemType': SyncQualityCheckResponseBodyDataRulesHit },
      rid: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncQualityCheckResponseBodyData extends $tea.Model {
  beginTime?: number;
  rules?: SyncQualityCheckResponseBodyDataRules[];
  score?: number;
  taskId?: string;
  tid?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      rules: 'Rules',
      score: 'Score',
      taskId: 'TaskId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      rules: { 'type': 'array', 'itemType': SyncQualityCheckResponseBodyDataRules },
      score: 'number',
      taskId: 'string',
      tid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSyncQualityCheckDataResponseBodyData extends $tea.Model {
  taskId?: string;
  tid?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      tid: 'string',
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
  pid?: number;
  tid?: string;
  to?: number;
  val?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      pid: 'Pid',
      tid: 'Tid',
      to: 'To',
      val: 'Val',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      pid: 'number',
      tid: 'string',
      to: 'number',
      val: 'string',
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

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoPhrase extends $tea.Model {
  begin?: number;
  beginTime?: string;
  end?: number;
  identity?: string;
  role?: string;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      beginTime: 'BeginTime',
      end: 'End',
      identity: 'Identity',
      role: 'Role',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      beginTime: 'string',
      end: 'number',
      identity: 'string',
      role: 'string',
      words: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfo extends $tea.Model {
  hitCids?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitCids;
  hitKeyWords?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWords;
  phrase?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoPhrase;
  static names(): { [key: string]: string } {
    return {
      hitCids: 'HitCids',
      hitKeyWords: 'HitKeyWords',
      phrase: 'Phrase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitCids: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitCids,
      hitKeyWords: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoHitKeyWords,
      phrase: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfoPhrase,
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

export class UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfo extends $tea.Model {
  conditionInfo?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoConditionInfo;
  hit?: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHit;
  rid?: string;
  tid?: string;
  static names(): { [key: string]: string } {
    return {
      conditionInfo: 'ConditionInfo',
      hit: 'Hit',
      rid: 'Rid',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionInfo: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoConditionInfo,
      hit: UploadDataSyncResponseBodyDataResultInfoRulesRuleHitInfoHit,
      rid: 'string',
      tid: 'string',
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

export class UploadDataSyncResponseBodyDataResultInfo extends $tea.Model {
  handScoreIdList?: UploadDataSyncResponseBodyDataResultInfoHandScoreIdList;
  rules?: UploadDataSyncResponseBodyDataResultInfoRules;
  score?: number;
  static names(): { [key: string]: string } {
    return {
      handScoreIdList: 'HandScoreIdList',
      rules: 'Rules',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handScoreIdList: UploadDataSyncResponseBodyDataResultInfoHandScoreIdList,
      rules: UploadDataSyncResponseBodyDataResultInfoRules,
      score: 'number',
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
  source?: VerifySentenceResponseBodyDataDeltaSource;
  target?: VerifySentenceResponseBodyDataDeltaTarget;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      target: 'Target',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: VerifySentenceResponseBodyDataDeltaSource,
      target: VerifySentenceResponseBodyDataDeltaTarget,
      type: 'string',
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
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddBusinessCategory",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddBusinessCategoryResponse>(await this.callApi(params, req, runtime), new AddBusinessCategoryResponse({}));
  }

  async addBusinessCategory(request: AddBusinessCategoryRequest): Promise<AddBusinessCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addBusinessCategoryWithOptions(request, runtime);
  }

  async addRuleCategoryWithOptions(request: AddRuleCategoryRequest, runtime: $Util.RuntimeOptions): Promise<AddRuleCategoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddRuleCategory",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddRuleCategoryResponse>(await this.callApi(params, req, runtime), new AddRuleCategoryResponse({}));
  }

  async addRuleCategory(request: AddRuleCategoryRequest): Promise<AddRuleCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addRuleCategoryWithOptions(request, runtime);
  }

  async addThesaurusForApiWithOptions(request: AddThesaurusForApiRequest, runtime: $Util.RuntimeOptions): Promise<AddThesaurusForApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddThesaurusForApi",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddThesaurusForApiResponse>(await this.callApi(params, req, runtime), new AddThesaurusForApiResponse({}));
  }

  async addThesaurusForApi(request: AddThesaurusForApiRequest): Promise<AddThesaurusForApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addThesaurusForApiWithOptions(request, runtime);
  }

  async assignReviewerWithOptions(request: AssignReviewerRequest, runtime: $Util.RuntimeOptions): Promise<AssignReviewerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssignReviewer",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssignReviewerResponse>(await this.callApi(params, req, runtime), new AssignReviewerResponse({}));
  }

  async assignReviewer(request: AssignReviewerRequest): Promise<AssignReviewerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.assignReviewerWithOptions(request, runtime);
  }

  async createAsrVocabWithOptions(request: CreateAsrVocabRequest, runtime: $Util.RuntimeOptions): Promise<CreateAsrVocabResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAsrVocab",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAsrVocabResponse>(await this.callApi(params, req, runtime), new CreateAsrVocabResponse({}));
  }

  async createAsrVocab(request: CreateAsrVocabRequest): Promise<CreateAsrVocabResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAsrVocabWithOptions(request, runtime);
  }

  async createSkillGroupConfigWithOptions(request: CreateSkillGroupConfigRequest, runtime: $Util.RuntimeOptions): Promise<CreateSkillGroupConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSkillGroupConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSkillGroupConfigResponse>(await this.callApi(params, req, runtime), new CreateSkillGroupConfigResponse({}));
  }

  async createSkillGroupConfig(request: CreateSkillGroupConfigRequest): Promise<CreateSkillGroupConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSkillGroupConfigWithOptions(request, runtime);
  }

  async createTaskAssignRuleWithOptions(request: CreateTaskAssignRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateTaskAssignRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTaskAssignRule",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTaskAssignRuleResponse>(await this.callApi(params, req, runtime), new CreateTaskAssignRuleResponse({}));
  }

  async createTaskAssignRule(request: CreateTaskAssignRuleRequest): Promise<CreateTaskAssignRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTaskAssignRuleWithOptions(request, runtime);
  }

  async createUserWithOptions(request: CreateUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateUser",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUserResponse>(await this.callApi(params, req, runtime), new CreateUserResponse({}));
  }

  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

  async createWarningConfigWithOptions(request: CreateWarningConfigRequest, runtime: $Util.RuntimeOptions): Promise<CreateWarningConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateWarningConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWarningConfigResponse>(await this.callApi(params, req, runtime), new CreateWarningConfigResponse({}));
  }

  async createWarningConfig(request: CreateWarningConfigRequest): Promise<CreateWarningConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWarningConfigWithOptions(request, runtime);
  }

  async delRuleCategoryWithOptions(request: DelRuleCategoryRequest, runtime: $Util.RuntimeOptions): Promise<DelRuleCategoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DelRuleCategory",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DelRuleCategoryResponse>(await this.callApi(params, req, runtime), new DelRuleCategoryResponse({}));
  }

  async delRuleCategory(request: DelRuleCategoryRequest): Promise<DelRuleCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.delRuleCategoryWithOptions(request, runtime);
  }

  async delThesaurusForApiWithOptions(request: DelThesaurusForApiRequest, runtime: $Util.RuntimeOptions): Promise<DelThesaurusForApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DelThesaurusForApi",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DelThesaurusForApiResponse>(await this.callApi(params, req, runtime), new DelThesaurusForApiResponse({}));
  }

  async delThesaurusForApi(request: DelThesaurusForApiRequest): Promise<DelThesaurusForApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.delThesaurusForApiWithOptions(request, runtime);
  }

  async deleteAsrVocabWithOptions(request: DeleteAsrVocabRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAsrVocabResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAsrVocab",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAsrVocabResponse>(await this.callApi(params, req, runtime), new DeleteAsrVocabResponse({}));
  }

  async deleteAsrVocab(request: DeleteAsrVocabRequest): Promise<DeleteAsrVocabResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAsrVocabWithOptions(request, runtime);
  }

  async deleteBusinessCategoryWithOptions(request: DeleteBusinessCategoryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBusinessCategoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBusinessCategory",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBusinessCategoryResponse>(await this.callApi(params, req, runtime), new DeleteBusinessCategoryResponse({}));
  }

  async deleteBusinessCategory(request: DeleteBusinessCategoryRequest): Promise<DeleteBusinessCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBusinessCategoryWithOptions(request, runtime);
  }

  async deleteCustomizationConfigWithOptions(request: DeleteCustomizationConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomizationConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCustomizationConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCustomizationConfigResponse>(await this.callApi(params, req, runtime), new DeleteCustomizationConfigResponse({}));
  }

  async deleteCustomizationConfig(request: DeleteCustomizationConfigRequest): Promise<DeleteCustomizationConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomizationConfigWithOptions(request, runtime);
  }

  async deleteDataSetWithOptions(request: DeleteDataSetRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataSetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDataSet",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDataSetResponse>(await this.callApi(params, req, runtime), new DeleteDataSetResponse({}));
  }

  async deleteDataSet(request: DeleteDataSetRequest): Promise<DeleteDataSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataSetWithOptions(request, runtime);
  }

  async deletePrecisionTaskWithOptions(request: DeletePrecisionTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeletePrecisionTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePrecisionTask",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePrecisionTaskResponse>(await this.callApi(params, req, runtime), new DeletePrecisionTaskResponse({}));
  }

  async deletePrecisionTask(request: DeletePrecisionTaskRequest): Promise<DeletePrecisionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePrecisionTaskWithOptions(request, runtime);
  }

  async deleteScoreForApiWithOptions(request: DeleteScoreForApiRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScoreForApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteScoreForApi",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteScoreForApiResponse>(await this.callApi(params, req, runtime), new DeleteScoreForApiResponse({}));
  }

  async deleteScoreForApi(request: DeleteScoreForApiRequest): Promise<DeleteScoreForApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScoreForApiWithOptions(request, runtime);
  }

  async deleteSkillGroupConfigWithOptions(request: DeleteSkillGroupConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSkillGroupConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSkillGroupConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSkillGroupConfigResponse>(await this.callApi(params, req, runtime), new DeleteSkillGroupConfigResponse({}));
  }

  async deleteSkillGroupConfig(request: DeleteSkillGroupConfigRequest): Promise<DeleteSkillGroupConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSkillGroupConfigWithOptions(request, runtime);
  }

  async deleteSubScoreForApiWithOptions(request: DeleteSubScoreForApiRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSubScoreForApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSubScoreForApi",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSubScoreForApiResponse>(await this.callApi(params, req, runtime), new DeleteSubScoreForApiResponse({}));
  }

  async deleteSubScoreForApi(request: DeleteSubScoreForApiRequest): Promise<DeleteSubScoreForApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSubScoreForApiWithOptions(request, runtime);
  }

  async deleteTaskAssignRuleWithOptions(request: DeleteTaskAssignRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTaskAssignRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTaskAssignRule",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTaskAssignRuleResponse>(await this.callApi(params, req, runtime), new DeleteTaskAssignRuleResponse({}));
  }

  async deleteTaskAssignRule(request: DeleteTaskAssignRuleRequest): Promise<DeleteTaskAssignRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTaskAssignRuleWithOptions(request, runtime);
  }

  async deleteUserWithOptions(request: DeleteUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUser",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserResponse>(await this.callApi(params, req, runtime), new DeleteUserResponse({}));
  }

  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  async deleteWarningConfigWithOptions(request: DeleteWarningConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWarningConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWarningConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWarningConfigResponse>(await this.callApi(params, req, runtime), new DeleteWarningConfigResponse({}));
  }

  async deleteWarningConfig(request: DeleteWarningConfigRequest): Promise<DeleteWarningConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWarningConfigWithOptions(request, runtime);
  }

  async editThesaurusForApiWithOptions(request: EditThesaurusForApiRequest, runtime: $Util.RuntimeOptions): Promise<EditThesaurusForApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EditThesaurusForApi",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EditThesaurusForApiResponse>(await this.callApi(params, req, runtime), new EditThesaurusForApiResponse({}));
  }

  async editThesaurusForApi(request: EditThesaurusForApiRequest): Promise<EditThesaurusForApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editThesaurusForApiWithOptions(request, runtime);
  }

  async getAsrVocabWithOptions(request: GetAsrVocabRequest, runtime: $Util.RuntimeOptions): Promise<GetAsrVocabResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAsrVocab",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAsrVocabResponse>(await this.callApi(params, req, runtime), new GetAsrVocabResponse({}));
  }

  async getAsrVocab(request: GetAsrVocabRequest): Promise<GetAsrVocabResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAsrVocabWithOptions(request, runtime);
  }

  async getBusinessCategoryListWithOptions(request: GetBusinessCategoryListRequest, runtime: $Util.RuntimeOptions): Promise<GetBusinessCategoryListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBusinessCategoryList",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBusinessCategoryListResponse>(await this.callApi(params, req, runtime), new GetBusinessCategoryListResponse({}));
  }

  async getBusinessCategoryList(request: GetBusinessCategoryListRequest): Promise<GetBusinessCategoryListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBusinessCategoryListWithOptions(request, runtime);
  }

  async getCustomizationConfigListWithOptions(request: GetCustomizationConfigListRequest, runtime: $Util.RuntimeOptions): Promise<GetCustomizationConfigListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCustomizationConfigList",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCustomizationConfigListResponse>(await this.callApi(params, req, runtime), new GetCustomizationConfigListResponse({}));
  }

  async getCustomizationConfigList(request: GetCustomizationConfigListRequest): Promise<GetCustomizationConfigListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCustomizationConfigListWithOptions(request, runtime);
  }

  async getHitResultWithOptions(request: GetHitResultRequest, runtime: $Util.RuntimeOptions): Promise<GetHitResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHitResult",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHitResultResponse>(await this.callApi(params, req, runtime), new GetHitResultResponse({}));
  }

  async getHitResult(request: GetHitResultRequest): Promise<GetHitResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHitResultWithOptions(request, runtime);
  }

  async getNextResultToVerifyWithOptions(request: GetNextResultToVerifyRequest, runtime: $Util.RuntimeOptions): Promise<GetNextResultToVerifyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetNextResultToVerify",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNextResultToVerifyResponse>(await this.callApi(params, req, runtime), new GetNextResultToVerifyResponse({}));
  }

  async getNextResultToVerify(request: GetNextResultToVerifyRequest): Promise<GetNextResultToVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNextResultToVerifyWithOptions(request, runtime);
  }

  async getPrecisionTaskWithOptions(request: GetPrecisionTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetPrecisionTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPrecisionTask",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPrecisionTaskResponse>(await this.callApi(params, req, runtime), new GetPrecisionTaskResponse({}));
  }

  async getPrecisionTask(request: GetPrecisionTaskRequest): Promise<GetPrecisionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPrecisionTaskWithOptions(request, runtime);
  }

  async getResultWithOptions(request: GetResultRequest, runtime: $Util.RuntimeOptions): Promise<GetResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResult",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResultResponse>(await this.callApi(params, req, runtime), new GetResultResponse({}));
  }

  async getResult(request: GetResultRequest): Promise<GetResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResultWithOptions(request, runtime);
  }

  async getResultCallbackWithOptions(request: GetResultCallbackRequest, runtime: $Util.RuntimeOptions): Promise<GetResultCallbackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResultCallback",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResultCallbackResponse>(await this.callApi(params, req, runtime), new GetResultCallbackResponse({}));
  }

  async getResultCallback(request: GetResultCallbackRequest): Promise<GetResultCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResultCallbackWithOptions(request, runtime);
  }

  async getResultToReviewWithOptions(request: GetResultToReviewRequest, runtime: $Util.RuntimeOptions): Promise<GetResultToReviewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResultToReview",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResultToReviewResponse>(await this.callApi(params, req, runtime), new GetResultToReviewResponse({}));
  }

  async getResultToReview(request: GetResultToReviewRequest): Promise<GetResultToReviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResultToReviewWithOptions(request, runtime);
  }

  async getRuleWithOptions(request: GetRuleRequest, runtime: $Util.RuntimeOptions): Promise<GetRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRule",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRuleResponse>(await this.callApi(params, req, runtime), new GetRuleResponse({}));
  }

  async getRule(request: GetRuleRequest): Promise<GetRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRuleWithOptions(request, runtime);
  }

  async getRuleCategoryWithOptions(request: GetRuleCategoryRequest, runtime: $Util.RuntimeOptions): Promise<GetRuleCategoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRuleCategory",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRuleCategoryResponse>(await this.callApi(params, req, runtime), new GetRuleCategoryResponse({}));
  }

  async getRuleCategory(request: GetRuleCategoryRequest): Promise<GetRuleCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRuleCategoryWithOptions(request, runtime);
  }

  async getRuleDetailWithOptions(request: GetRuleDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetRuleDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRuleDetail",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRuleDetailResponse>(await this.callApi(params, req, runtime), new GetRuleDetailResponse({}));
  }

  async getRuleDetail(request: GetRuleDetailRequest): Promise<GetRuleDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRuleDetailWithOptions(request, runtime);
  }

  async getScoreInfoWithOptions(request: GetScoreInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetScoreInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetScoreInfo",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetScoreInfoResponse>(await this.callApi(params, req, runtime), new GetScoreInfoResponse({}));
  }

  async getScoreInfo(request: GetScoreInfoRequest): Promise<GetScoreInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getScoreInfoWithOptions(request, runtime);
  }

  async getSkillGroupConfigWithOptions(request: GetSkillGroupConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetSkillGroupConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSkillGroupConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSkillGroupConfigResponse>(await this.callApi(params, req, runtime), new GetSkillGroupConfigResponse({}));
  }

  async getSkillGroupConfig(request: GetSkillGroupConfigRequest): Promise<GetSkillGroupConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSkillGroupConfigWithOptions(request, runtime);
  }

  async getSyncResultWithOptions(request: GetSyncResultRequest, runtime: $Util.RuntimeOptions): Promise<GetSyncResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSyncResult",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSyncResultResponse>(await this.callApi(params, req, runtime), new GetSyncResultResponse({}));
  }

  async getSyncResult(request: GetSyncResultRequest): Promise<GetSyncResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSyncResultWithOptions(request, runtime);
  }

  async getThesaurusBySynonymForApiWithOptions(request: GetThesaurusBySynonymForApiRequest, runtime: $Util.RuntimeOptions): Promise<GetThesaurusBySynonymForApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetThesaurusBySynonymForApi",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetThesaurusBySynonymForApiResponse>(await this.callApi(params, req, runtime), new GetThesaurusBySynonymForApiResponse({}));
  }

  async getThesaurusBySynonymForApi(request: GetThesaurusBySynonymForApiRequest): Promise<GetThesaurusBySynonymForApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getThesaurusBySynonymForApiWithOptions(request, runtime);
  }

  async handleComplaintWithOptions(request: HandleComplaintRequest, runtime: $Util.RuntimeOptions): Promise<HandleComplaintResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "HandleComplaint",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<HandleComplaintResponse>(await this.callApi(params, req, runtime), new HandleComplaintResponse({}));
  }

  async handleComplaint(request: HandleComplaintRequest): Promise<HandleComplaintResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.handleComplaintWithOptions(request, runtime);
  }

  async insertScoreForApiWithOptions(request: InsertScoreForApiRequest, runtime: $Util.RuntimeOptions): Promise<InsertScoreForApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InsertScoreForApi",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InsertScoreForApiResponse>(await this.callApi(params, req, runtime), new InsertScoreForApiResponse({}));
  }

  async insertScoreForApi(request: InsertScoreForApiRequest): Promise<InsertScoreForApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.insertScoreForApiWithOptions(request, runtime);
  }

  async insertSubScoreForApiWithOptions(request: InsertSubScoreForApiRequest, runtime: $Util.RuntimeOptions): Promise<InsertSubScoreForApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InsertSubScoreForApi",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InsertSubScoreForApiResponse>(await this.callApi(params, req, runtime), new InsertSubScoreForApiResponse({}));
  }

  async insertSubScoreForApi(request: InsertSubScoreForApiRequest): Promise<InsertSubScoreForApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.insertSubScoreForApiWithOptions(request, runtime);
  }

  async invalidRuleWithOptions(request: InvalidRuleRequest, runtime: $Util.RuntimeOptions): Promise<InvalidRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InvalidRule",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InvalidRuleResponse>(await this.callApi(params, req, runtime), new InvalidRuleResponse({}));
  }

  async invalidRule(request: InvalidRuleRequest): Promise<InvalidRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.invalidRuleWithOptions(request, runtime);
  }

  async listAsrVocabWithOptions(request: ListAsrVocabRequest, runtime: $Util.RuntimeOptions): Promise<ListAsrVocabResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAsrVocab",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAsrVocabResponse>(await this.callApi(params, req, runtime), new ListAsrVocabResponse({}));
  }

  async listAsrVocab(request: ListAsrVocabRequest): Promise<ListAsrVocabResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAsrVocabWithOptions(request, runtime);
  }

  async listHotWordsTasksWithOptions(request: ListHotWordsTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListHotWordsTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListHotWordsTasks",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListHotWordsTasksResponse>(await this.callApi(params, req, runtime), new ListHotWordsTasksResponse({}));
  }

  async listHotWordsTasks(request: ListHotWordsTasksRequest): Promise<ListHotWordsTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHotWordsTasksWithOptions(request, runtime);
  }

  async listPrecisionTaskWithOptions(request: ListPrecisionTaskRequest, runtime: $Util.RuntimeOptions): Promise<ListPrecisionTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPrecisionTask",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPrecisionTaskResponse>(await this.callApi(params, req, runtime), new ListPrecisionTaskResponse({}));
  }

  async listPrecisionTask(request: ListPrecisionTaskRequest): Promise<ListPrecisionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPrecisionTaskWithOptions(request, runtime);
  }

  async listRolesWithOptions(request: ListRolesRequest, runtime: $Util.RuntimeOptions): Promise<ListRolesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRoles",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRolesResponse>(await this.callApi(params, req, runtime), new ListRolesResponse({}));
  }

  async listRoles(request: ListRolesRequest): Promise<ListRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRolesWithOptions(request, runtime);
  }

  async listRulesWithOptions(request: ListRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRules",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRulesResponse>(await this.callApi(params, req, runtime), new ListRulesResponse({}));
  }

  async listRules(request: ListRulesRequest): Promise<ListRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRulesWithOptions(request, runtime);
  }

  async listSkillGroupConfigWithOptions(request: ListSkillGroupConfigRequest, runtime: $Util.RuntimeOptions): Promise<ListSkillGroupConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSkillGroupConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSkillGroupConfigResponse>(await this.callApi(params, req, runtime), new ListSkillGroupConfigResponse({}));
  }

  async listSkillGroupConfig(request: ListSkillGroupConfigRequest): Promise<ListSkillGroupConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSkillGroupConfigWithOptions(request, runtime);
  }

  async listTaskAssignRulesWithOptions(request: ListTaskAssignRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListTaskAssignRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTaskAssignRules",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTaskAssignRulesResponse>(await this.callApi(params, req, runtime), new ListTaskAssignRulesResponse({}));
  }

  async listTaskAssignRules(request: ListTaskAssignRulesRequest): Promise<ListTaskAssignRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTaskAssignRulesWithOptions(request, runtime);
  }

  async listUsersWithOptions(request: ListUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUsers",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUsersResponse>(await this.callApi(params, req, runtime), new ListUsersResponse({}));
  }

  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  async listWarningConfigWithOptions(request: ListWarningConfigRequest, runtime: $Util.RuntimeOptions): Promise<ListWarningConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWarningConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWarningConfigResponse>(await this.callApi(params, req, runtime), new ListWarningConfigResponse({}));
  }

  async listWarningConfig(request: ListWarningConfigRequest): Promise<ListWarningConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWarningConfigWithOptions(request, runtime);
  }

  async restartAsrTaskWithOptions(request: RestartAsrTaskRequest, runtime: $Util.RuntimeOptions): Promise<RestartAsrTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestartAsrTask",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RestartAsrTaskResponse>(await this.callApi(params, req, runtime), new RestartAsrTaskResponse({}));
  }

  async restartAsrTask(request: RestartAsrTaskRequest): Promise<RestartAsrTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restartAsrTaskWithOptions(request, runtime);
  }

  async saveConfigDataSetWithOptions(request: SaveConfigDataSetRequest, runtime: $Util.RuntimeOptions): Promise<SaveConfigDataSetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveConfigDataSet",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveConfigDataSetResponse>(await this.callApi(params, req, runtime), new SaveConfigDataSetResponse({}));
  }

  async saveConfigDataSet(request: SaveConfigDataSetRequest): Promise<SaveConfigDataSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveConfigDataSetWithOptions(request, runtime);
  }

  async submitComplaintWithOptions(request: SubmitComplaintRequest, runtime: $Util.RuntimeOptions): Promise<SubmitComplaintResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitComplaint",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitComplaintResponse>(await this.callApi(params, req, runtime), new SubmitComplaintResponse({}));
  }

  async submitComplaint(request: SubmitComplaintRequest): Promise<SubmitComplaintResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitComplaintWithOptions(request, runtime);
  }

  async submitPrecisionTaskWithOptions(request: SubmitPrecisionTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitPrecisionTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitPrecisionTask",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitPrecisionTaskResponse>(await this.callApi(params, req, runtime), new SubmitPrecisionTaskResponse({}));
  }

  async submitPrecisionTask(request: SubmitPrecisionTaskRequest): Promise<SubmitPrecisionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitPrecisionTaskWithOptions(request, runtime);
  }

  async submitQualityCheckTaskWithOptions(request: SubmitQualityCheckTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitQualityCheckTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitQualityCheckTask",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitQualityCheckTaskResponse>(await this.callApi(params, req, runtime), new SubmitQualityCheckTaskResponse({}));
  }

  async submitQualityCheckTask(request: SubmitQualityCheckTaskRequest): Promise<SubmitQualityCheckTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitQualityCheckTaskWithOptions(request, runtime);
  }

  async submitReviewInfoWithOptions(request: SubmitReviewInfoRequest, runtime: $Util.RuntimeOptions): Promise<SubmitReviewInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitReviewInfo",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitReviewInfoResponse>(await this.callApi(params, req, runtime), new SubmitReviewInfoResponse({}));
  }

  async submitReviewInfo(request: SubmitReviewInfoRequest): Promise<SubmitReviewInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitReviewInfoWithOptions(request, runtime);
  }

  async syncQualityCheckWithOptions(request: SyncQualityCheckRequest, runtime: $Util.RuntimeOptions): Promise<SyncQualityCheckResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SyncQualityCheck",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SyncQualityCheckResponse>(await this.callApi(params, req, runtime), new SyncQualityCheckResponse({}));
  }

  async syncQualityCheck(request: SyncQualityCheckRequest): Promise<SyncQualityCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncQualityCheckWithOptions(request, runtime);
  }

  async updateAsrVocabWithOptions(request: UpdateAsrVocabRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAsrVocabResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAsrVocab",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAsrVocabResponse>(await this.callApi(params, req, runtime), new UpdateAsrVocabResponse({}));
  }

  async updateAsrVocab(request: UpdateAsrVocabRequest): Promise<UpdateAsrVocabResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAsrVocabWithOptions(request, runtime);
  }

  async updateRuleWithOptions(request: UpdateRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRule",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateRuleResponse>(await this.callApi(params, req, runtime), new UpdateRuleResponse({}));
  }

  async updateRule(request: UpdateRuleRequest): Promise<UpdateRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRuleWithOptions(request, runtime);
  }

  async updateScoreForApiWithOptions(request: UpdateScoreForApiRequest, runtime: $Util.RuntimeOptions): Promise<UpdateScoreForApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateScoreForApi",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateScoreForApiResponse>(await this.callApi(params, req, runtime), new UpdateScoreForApiResponse({}));
  }

  async updateScoreForApi(request: UpdateScoreForApiRequest): Promise<UpdateScoreForApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateScoreForApiWithOptions(request, runtime);
  }

  async updateSkillGroupConfigWithOptions(request: UpdateSkillGroupConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSkillGroupConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSkillGroupConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSkillGroupConfigResponse>(await this.callApi(params, req, runtime), new UpdateSkillGroupConfigResponse({}));
  }

  async updateSkillGroupConfig(request: UpdateSkillGroupConfigRequest): Promise<UpdateSkillGroupConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSkillGroupConfigWithOptions(request, runtime);
  }

  async updateSubScoreForApiWithOptions(request: UpdateSubScoreForApiRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSubScoreForApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSubScoreForApi",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSubScoreForApiResponse>(await this.callApi(params, req, runtime), new UpdateSubScoreForApiResponse({}));
  }

  async updateSubScoreForApi(request: UpdateSubScoreForApiRequest): Promise<UpdateSubScoreForApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSubScoreForApiWithOptions(request, runtime);
  }

  async updateSyncQualityCheckDataWithOptions(request: UpdateSyncQualityCheckDataRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSyncQualityCheckDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSyncQualityCheckData",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSyncQualityCheckDataResponse>(await this.callApi(params, req, runtime), new UpdateSyncQualityCheckDataResponse({}));
  }

  async updateSyncQualityCheckData(request: UpdateSyncQualityCheckDataRequest): Promise<UpdateSyncQualityCheckDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSyncQualityCheckDataWithOptions(request, runtime);
  }

  async updateTaskAssignRuleWithOptions(request: UpdateTaskAssignRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTaskAssignRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTaskAssignRule",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTaskAssignRuleResponse>(await this.callApi(params, req, runtime), new UpdateTaskAssignRuleResponse({}));
  }

  async updateTaskAssignRule(request: UpdateTaskAssignRuleRequest): Promise<UpdateTaskAssignRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTaskAssignRuleWithOptions(request, runtime);
  }

  async updateUserWithOptions(request: UpdateUserRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUser",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserResponse>(await this.callApi(params, req, runtime), new UpdateUserResponse({}));
  }

  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

  async updateUserConfigWithOptions(request: UpdateUserConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUserConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserConfigResponse>(await this.callApi(params, req, runtime), new UpdateUserConfigResponse({}));
  }

  async updateUserConfig(request: UpdateUserConfigRequest): Promise<UpdateUserConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserConfigWithOptions(request, runtime);
  }

  async updateWarningConfigWithOptions(request: UpdateWarningConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWarningConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWarningConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateWarningConfigResponse>(await this.callApi(params, req, runtime), new UpdateWarningConfigResponse({}));
  }

  async updateWarningConfig(request: UpdateWarningConfigRequest): Promise<UpdateWarningConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWarningConfigWithOptions(request, runtime);
  }

  async uploadAudioDataWithOptions(request: UploadAudioDataRequest, runtime: $Util.RuntimeOptions): Promise<UploadAudioDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadAudioData",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadAudioDataResponse>(await this.callApi(params, req, runtime), new UploadAudioDataResponse({}));
  }

  async uploadAudioData(request: UploadAudioDataRequest): Promise<UploadAudioDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadAudioDataWithOptions(request, runtime);
  }

  async uploadDataWithOptions(request: UploadDataRequest, runtime: $Util.RuntimeOptions): Promise<UploadDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadData",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadDataResponse>(await this.callApi(params, req, runtime), new UploadDataResponse({}));
  }

  async uploadData(request: UploadDataRequest): Promise<UploadDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadDataWithOptions(request, runtime);
  }

  async uploadDataSyncWithOptions(request: UploadDataSyncRequest, runtime: $Util.RuntimeOptions): Promise<UploadDataSyncResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadDataSync",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadDataSyncResponse>(await this.callApi(params, req, runtime), new UploadDataSyncResponse({}));
  }

  async uploadDataSync(request: UploadDataSyncRequest): Promise<UploadDataSyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadDataSyncWithOptions(request, runtime);
  }

  async uploadRuleWithOptions(request: UploadRuleRequest, runtime: $Util.RuntimeOptions): Promise<UploadRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadRule",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadRuleResponse>(await this.callApi(params, req, runtime), new UploadRuleResponse({}));
  }

  async uploadRule(request: UploadRuleRequest): Promise<UploadRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadRuleWithOptions(request, runtime);
  }

  async verifyFileWithOptions(request: VerifyFileRequest, runtime: $Util.RuntimeOptions): Promise<VerifyFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifyFile",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyFileResponse>(await this.callApi(params, req, runtime), new VerifyFileResponse({}));
  }

  async verifyFile(request: VerifyFileRequest): Promise<VerifyFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyFileWithOptions(request, runtime);
  }

  async verifySentenceWithOptions(request: VerifySentenceRequest, runtime: $Util.RuntimeOptions): Promise<VerifySentenceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifySentence",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifySentenceResponse>(await this.callApi(params, req, runtime), new VerifySentenceResponse({}));
  }

  async verifySentence(request: VerifySentenceRequest): Promise<VerifySentenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifySentenceWithOptions(request, runtime);
  }

}
