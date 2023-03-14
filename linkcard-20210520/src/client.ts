// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddCardToDirectionalGroupRequest extends $tea.Model {
  addType?: string;
  apiProduct?: string;
  groupId?: string;
  iccidList?: string[];
  msgNotify?: boolean;
  serialNo?: string;
  static names(): { [key: string]: string } {
    return {
      addType: 'AddType',
      apiProduct: 'ApiProduct',
      groupId: 'GroupId',
      iccidList: 'IccidList',
      msgNotify: 'MsgNotify',
      serialNo: 'SerialNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addType: 'string',
      apiProduct: 'string',
      groupId: 'string',
      iccidList: { 'type': 'array', 'itemType': 'string' },
      msgNotify: 'boolean',
      serialNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCardToDirectionalGroupShrinkRequest extends $tea.Model {
  addType?: string;
  apiProduct?: string;
  groupId?: string;
  iccidListShrink?: string;
  msgNotify?: boolean;
  serialNo?: string;
  static names(): { [key: string]: string } {
    return {
      addType: 'AddType',
      apiProduct: 'ApiProduct',
      groupId: 'GroupId',
      iccidListShrink: 'IccidList',
      msgNotify: 'MsgNotify',
      serialNo: 'SerialNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addType: 'string',
      apiProduct: 'string',
      groupId: 'string',
      iccidListShrink: 'string',
      msgNotify: 'boolean',
      serialNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCardToDirectionalGroupResponseBody extends $tea.Model {
  code?: string;
  data?: AddCardToDirectionalGroupResponseBodyData;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddCardToDirectionalGroupResponseBodyData,
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCardToDirectionalGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddCardToDirectionalGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddCardToDirectionalGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDirectionalAddressRequest extends $tea.Model {
  address?: string;
  addressType?: string;
  groupId?: string;
  msgNotify?: boolean;
  serialNo?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressType: 'AddressType',
      groupId: 'GroupId',
      msgNotify: 'MsgNotify',
      serialNo: 'SerialNo',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressType: 'string',
      groupId: 'string',
      msgNotify: 'boolean',
      serialNo: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDirectionalAddressResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDirectionalAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddDirectionalAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddDirectionalAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDirectionalCardRequest extends $tea.Model {
  fileUri?: string;
  groupId?: string;
  groupName?: string;
  orderList?: string[];
  tagList?: string[];
  uploadMethod?: string;
  uploadType?: string;
  static names(): { [key: string]: string } {
    return {
      fileUri: 'FileUri',
      groupId: 'GroupId',
      groupName: 'GroupName',
      orderList: 'OrderList',
      tagList: 'TagList',
      uploadMethod: 'UploadMethod',
      uploadType: 'UploadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUri: 'string',
      groupId: 'string',
      groupName: 'string',
      orderList: { 'type': 'array', 'itemType': 'string' },
      tagList: { 'type': 'array', 'itemType': 'string' },
      uploadMethod: 'string',
      uploadType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDirectionalCardShrinkRequest extends $tea.Model {
  fileUri?: string;
  groupId?: string;
  groupName?: string;
  orderListShrink?: string;
  tagListShrink?: string;
  uploadMethod?: string;
  uploadType?: string;
  static names(): { [key: string]: string } {
    return {
      fileUri: 'FileUri',
      groupId: 'GroupId',
      groupName: 'GroupName',
      orderListShrink: 'OrderList',
      tagListShrink: 'TagList',
      uploadMethod: 'UploadMethod',
      uploadType: 'UploadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUri: 'string',
      groupId: 'string',
      groupName: 'string',
      orderListShrink: 'string',
      tagListShrink: 'string',
      uploadMethod: 'string',
      uploadType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDirectionalCardResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDirectionalCardResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddDirectionalCardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddDirectionalCardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDirectionalGroupRequest extends $tea.Model {
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDirectionalGroupResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDirectionalGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddDirectionalGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddDirectionalGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsToCardRequest extends $tea.Model {
  iccid?: string;
  tagNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      iccid: 'Iccid',
      tagNameList: 'TagNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iccid: 'string',
      tagNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsToCardShrinkRequest extends $tea.Model {
  iccid?: string;
  tagNameListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      iccid: 'Iccid',
      tagNameListShrink: 'TagNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iccid: 'string',
      tagNameListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsToCardResponseBody extends $tea.Model {
  code?: string;
  data?: AddTagsToCardResponseBodyData[];
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': AddTagsToCardResponseBodyData },
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsToCardResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddTagsToCardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddTagsToCardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddDirectionalAddressRequest extends $tea.Model {
  addressType?: string;
  groupId?: number;
  listAddress?: string[];
  source?: string;
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      groupId: 'GroupId',
      listAddress: 'ListAddress',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      groupId: 'number',
      listAddress: { 'type': 'array', 'itemType': 'string' },
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddDirectionalAddressResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddDirectionalAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchAddDirectionalAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchAddDirectionalAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDirectionalAddressRequest extends $tea.Model {
  address?: string;
  groupId?: string;
  msgNotify?: boolean;
  serialNo?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      groupId: 'GroupId',
      msgNotify: 'MsgNotify',
      serialNo: 'SerialNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      groupId: 'string',
      msgNotify: 'boolean',
      serialNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDirectionalAddressResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDirectionalAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDirectionalAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDirectionalAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDirectionalGroupRequest extends $tea.Model {
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDirectionalGroupResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDirectionalGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDirectionalGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDirectionalGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForceActivationRequest extends $tea.Model {
  dateType?: string;
  iccid?: string;
  static names(): { [key: string]: string } {
    return {
      dateType: 'DateType',
      iccid: 'Iccid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateType: 'string',
      iccid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForceActivationResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForceActivationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ForceActivationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ForceActivationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardDetailRequest extends $tea.Model {
  destroyCard?: boolean;
  iccid?: string;
  instanceId?: string;
  showPsim?: boolean;
  static names(): { [key: string]: string } {
    return {
      destroyCard: 'DestroyCard',
      iccid: 'Iccid',
      instanceId: 'InstanceId',
      showPsim: 'ShowPsim',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destroyCard: 'boolean',
      iccid: 'string',
      instanceId: 'string',
      showPsim: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardDetailResponseBody extends $tea.Model {
  code?: string;
  data?: GetCardDetailResponseBodyData;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCardDetailResponseBodyData,
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCardDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCardDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardFlowInfoRequest extends $tea.Model {
  dateList?: string[];
  iccid?: string;
  static names(): { [key: string]: string } {
    return {
      dateList: 'DateList',
      iccid: 'Iccid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateList: { 'type': 'array', 'itemType': 'string' },
      iccid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardFlowInfoResponseBody extends $tea.Model {
  code?: string;
  data?: GetCardFlowInfoResponseBodyData;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCardFlowInfoResponseBodyData,
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardFlowInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCardFlowInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCardFlowInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardLatestFlowRequest extends $tea.Model {
  iccid?: string;
  static names(): { [key: string]: string } {
    return {
      iccid: 'Iccid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iccid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardLatestFlowResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardLatestFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCardLatestFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCardLatestFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardRealStatusRequest extends $tea.Model {
  iccid?: string;
  msisdn?: string;
  serialNo?: string[];
  static names(): { [key: string]: string } {
    return {
      iccid: 'Iccid',
      msisdn: 'Msisdn',
      serialNo: 'SerialNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iccid: 'string',
      msisdn: 'string',
      serialNo: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardRealStatusShrinkRequest extends $tea.Model {
  iccid?: string;
  msisdn?: string;
  serialNoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      iccid: 'Iccid',
      msisdn: 'Msisdn',
      serialNoShrink: 'SerialNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iccid: 'string',
      msisdn: 'string',
      serialNoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardRealStatusResponseBody extends $tea.Model {
  code?: string;
  data?: GetCardRealStatusResponseBodyData[];
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetCardRealStatusResponseBodyData },
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardRealStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCardRealStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCardRealStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardStatusStatisticsResponseBody extends $tea.Model {
  code?: string;
  data?: GetCardStatusStatisticsResponseBodyData;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCardStatusStatisticsResponseBodyData,
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardStatusStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCardStatusStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCardStatusStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCredentialPoolStatisticsRequest extends $tea.Model {
  credentialNO?: string;
  date?: string;
  static names(): { [key: string]: string } {
    return {
      credentialNO: 'CredentialNO',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialNO: 'string',
      date: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCredentialPoolStatisticsResponseBody extends $tea.Model {
  code?: string;
  data?: GetCredentialPoolStatisticsResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCredentialPoolStatisticsResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCredentialPoolStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCredentialPoolStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCredentialPoolStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOperateResultRequest extends $tea.Model {
  apiProduct?: string;
  resId?: string;
  serialNo?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      resId: 'ResId',
      serialNo: 'SerialNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      resId: 'string',
      serialNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOperateResultResponseBody extends $tea.Model {
  code?: string;
  data?: GetOperateResultResponseBodyData;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetOperateResultResponseBodyData,
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOperateResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOperateResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetOperateResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealNameStatusRequest extends $tea.Model {
  iccid?: string;
  listMsisdns?: string[];
  static names(): { [key: string]: string } {
    return {
      iccid: 'Iccid',
      listMsisdns: 'ListMsisdns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iccid: 'string',
      listMsisdns: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealNameStatusShrinkRequest extends $tea.Model {
  iccid?: string;
  listMsisdnsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      iccid: 'Iccid',
      listMsisdnsShrink: 'ListMsisdns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iccid: 'string',
      listMsisdnsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealNameStatusResponseBody extends $tea.Model {
  code?: string;
  data?: GetRealNameStatusResponseBodyData;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetRealNameStatusResponseBodyData,
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealNameStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetRealNameStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRealNameStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSimCardStateDistributionRequest extends $tea.Model {
  credentialNO?: string;
  date?: string;
  static names(): { [key: string]: string } {
    return {
      credentialNO: 'CredentialNO',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialNO: 'string',
      date: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSimCardStateDistributionResponseBody extends $tea.Model {
  code?: string;
  data?: GetSimCardStateDistributionResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSimCardStateDistributionResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSimCardStateDistributionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSimCardStateDistributionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSimCardStateDistributionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCardInfoRequest extends $tea.Model {
  activeTimeEnd?: string;
  activeTimeStart?: string;
  aliFee?: string;
  aliyunOrderId?: string;
  apnName?: string;
  certifyType?: string;
  credentialNo?: string;
  dataLevel?: string;
  dataType?: string;
  directionalGroupId?: string;
  expireTimeEnd?: string;
  expireTimeStart?: string;
  iccid?: string;
  imsi?: string;
  isAutoRecharge?: boolean;
  maxFlow?: string;
  maxRestFlowPercentage?: number;
  minFlow?: string;
  msisdn?: string;
  notifyId?: string;
  osStatus?: string;
  pageNo?: number;
  pageSize?: number;
  period?: string;
  poolId?: string;
  simType?: string;
  status?: string;
  tagName?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      activeTimeEnd: 'ActiveTimeEnd',
      activeTimeStart: 'ActiveTimeStart',
      aliFee: 'AliFee',
      aliyunOrderId: 'AliyunOrderId',
      apnName: 'ApnName',
      certifyType: 'CertifyType',
      credentialNo: 'CredentialNo',
      dataLevel: 'DataLevel',
      dataType: 'DataType',
      directionalGroupId: 'DirectionalGroupId',
      expireTimeEnd: 'ExpireTimeEnd',
      expireTimeStart: 'ExpireTimeStart',
      iccid: 'Iccid',
      imsi: 'Imsi',
      isAutoRecharge: 'IsAutoRecharge',
      maxFlow: 'MaxFlow',
      maxRestFlowPercentage: 'MaxRestFlowPercentage',
      minFlow: 'MinFlow',
      msisdn: 'Msisdn',
      notifyId: 'NotifyId',
      osStatus: 'OsStatus',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      period: 'Period',
      poolId: 'PoolId',
      simType: 'SimType',
      status: 'Status',
      tagName: 'TagName',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeTimeEnd: 'string',
      activeTimeStart: 'string',
      aliFee: 'string',
      aliyunOrderId: 'string',
      apnName: 'string',
      certifyType: 'string',
      credentialNo: 'string',
      dataLevel: 'string',
      dataType: 'string',
      directionalGroupId: 'string',
      expireTimeEnd: 'string',
      expireTimeStart: 'string',
      iccid: 'string',
      imsi: 'string',
      isAutoRecharge: 'boolean',
      maxFlow: 'string',
      maxRestFlowPercentage: 'number',
      minFlow: 'string',
      msisdn: 'string',
      notifyId: 'string',
      osStatus: 'string',
      pageNo: 'number',
      pageSize: 'number',
      period: 'string',
      poolId: 'string',
      simType: 'string',
      status: 'string',
      tagName: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCardInfoResponseBody extends $tea.Model {
  code?: string;
  data?: ListCardInfoResponseBodyData;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListCardInfoResponseBodyData,
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCardInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCardInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCardInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectionalAddressRequest extends $tea.Model {
  groupId?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectionalAddressResponseBody extends $tea.Model {
  code?: string;
  data?: ListDirectionalAddressResponseBodyData;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListDirectionalAddressResponseBodyData,
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectionalAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDirectionalAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDirectionalAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectionalDetailRequest extends $tea.Model {
  iccid?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      iccid: 'Iccid',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iccid: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectionalDetailResponseBody extends $tea.Model {
  code?: string;
  data?: ListDirectionalDetailResponseBodyData;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListDirectionalDetailResponseBodyData,
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectionalDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDirectionalDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDirectionalDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrderRequest extends $tea.Model {
  endDate?: string;
  orderId?: string;
  orderStatus?: string;
  orderType?: string;
  pageNo?: number;
  pageSize?: number;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      orderId: 'OrderId',
      orderStatus: 'OrderStatus',
      orderType: 'OrderType',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      orderId: 'string',
      orderStatus: 'string',
      orderType: 'string',
      pageNo: 'number',
      pageSize: 'number',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrderResponseBody extends $tea.Model {
  code?: string;
  data?: ListOrderResponseBodyData;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListOrderResponseBodyData,
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebindResumeSingleCardRequest extends $tea.Model {
  iccid?: string;
  optMsisdns?: string[];
  static names(): { [key: string]: string } {
    return {
      iccid: 'Iccid',
      optMsisdns: 'OptMsisdns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iccid: 'string',
      optMsisdns: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebindResumeSingleCardShrinkRequest extends $tea.Model {
  iccid?: string;
  optMsisdnsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      iccid: 'Iccid',
      optMsisdnsShrink: 'OptMsisdns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iccid: 'string',
      optMsisdnsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebindResumeSingleCardResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebindResumeSingleCardResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RebindResumeSingleCardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RebindResumeSingleCardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewRequest extends $tea.Model {
  apiProduct?: string;
  apiRevision?: string;
  buyNum?: number;
  iccid?: string;
  offerCode?: string;
  rechargeType?: string;
  serialNo?: string;
  static names(): { [key: string]: string } {
    return {
      apiProduct: 'ApiProduct',
      apiRevision: 'ApiRevision',
      buyNum: 'BuyNum',
      iccid: 'Iccid',
      offerCode: 'OfferCode',
      rechargeType: 'RechargeType',
      serialNo: 'SerialNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiProduct: 'string',
      apiRevision: 'string',
      buyNum: 'number',
      iccid: 'string',
      offerCode: 'string',
      rechargeType: 'string',
      serialNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewResponseBody extends $tea.Model {
  code?: string;
  data?: RenewResponseBodyData;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RenewResponseBodyData,
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RenewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeSingleCardRequest extends $tea.Model {
  iccid?: string;
  optMsisdns?: string[];
  static names(): { [key: string]: string } {
    return {
      iccid: 'Iccid',
      optMsisdns: 'OptMsisdns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iccid: 'string',
      optMsisdns: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeSingleCardShrinkRequest extends $tea.Model {
  iccid?: string;
  optMsisdnsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      iccid: 'Iccid',
      optMsisdnsShrink: 'OptMsisdns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iccid: 'string',
      optMsisdnsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeSingleCardResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeSingleCardResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResumeSingleCardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResumeSingleCardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCardStopRuleRequest extends $tea.Model {
  autoRestore?: boolean;
  flowLimit?: number;
  iccid?: string;
  static names(): { [key: string]: string } {
    return {
      autoRestore: 'AutoRestore',
      flowLimit: 'FlowLimit',
      iccid: 'Iccid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRestore: 'boolean',
      flowLimit: 'number',
      iccid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCardStopRuleResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetCardStopRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetCardStopRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetCardStopRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopSingleCardRequest extends $tea.Model {
  iccid?: string;
  optMsisdns?: string[];
  static names(): { [key: string]: string } {
    return {
      iccid: 'Iccid',
      optMsisdns: 'OptMsisdns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iccid: 'string',
      optMsisdns: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopSingleCardShrinkRequest extends $tea.Model {
  iccid?: string;
  optMsisdnsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      iccid: 'Iccid',
      optMsisdnsShrink: 'OptMsisdns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iccid: 'string',
      optMsisdnsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopSingleCardResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopSingleCardResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopSingleCardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopSingleCardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoRechargeSwitchRequest extends $tea.Model {
  iccid?: string;
  open?: boolean;
  static names(): { [key: string]: string } {
    return {
      iccid: 'Iccid',
      open: 'Open',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iccid: 'string',
      open: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoRechargeSwitchResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutoRechargeSwitchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAutoRechargeSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAutoRechargeSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyIotCardRequest extends $tea.Model {
  iccid?: string;
  static names(): { [key: string]: string } {
    return {
      iccid: 'Iccid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iccid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyIotCardResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  errorMessage?: string;
  localizedMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      localizedMessage: 'LocalizedMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      errorMessage: 'string',
      localizedMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyIotCardResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: VerifyIotCardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VerifyIotCardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCardToDirectionalGroupResponseBodyData extends $tea.Model {
  result?: boolean;
  serialNo?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      serialNo: 'SerialNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      serialNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsToCardResponseBodyData extends $tea.Model {
  tagId?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagId: 'TagId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagId: 'string',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardDetailResponseBodyDataListPsimCards extends $tea.Model {
  apnName?: string;
  certifyStatus?: string;
  iccid?: string;
  imsi?: string[];
  ip?: string[];
  msisdn?: string[];
  openSms?: boolean;
  osStatus?: string;
  periodAddFlow?: string;
  periodSmsUse?: string;
  privateNetworkSegment?: string;
  status?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      apnName: 'ApnName',
      certifyStatus: 'CertifyStatus',
      iccid: 'Iccid',
      imsi: 'Imsi',
      ip: 'Ip',
      msisdn: 'Msisdn',
      openSms: 'OpenSms',
      osStatus: 'OsStatus',
      periodAddFlow: 'PeriodAddFlow',
      periodSmsUse: 'PeriodSmsUse',
      privateNetworkSegment: 'PrivateNetworkSegment',
      status: 'Status',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apnName: 'string',
      certifyStatus: 'string',
      iccid: 'string',
      imsi: { 'type': 'array', 'itemType': 'string' },
      ip: { 'type': 'array', 'itemType': 'string' },
      msisdn: { 'type': 'array', 'itemType': 'string' },
      openSms: 'boolean',
      osStatus: 'string',
      periodAddFlow: 'string',
      periodSmsUse: 'string',
      privateNetworkSegment: 'string',
      status: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardDetailResponseBodyDataVsimCardInfoTagList extends $tea.Model {
  id?: number;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardDetailResponseBodyDataVsimCardInfo extends $tea.Model {
  activeTime?: string;
  activeType?: string;
  aliFee?: string;
  aliyunOrderId?: string;
  apnName?: string;
  autoLimitResume?: boolean;
  autoRebindReuse?: boolean;
  cardLimitSpeedThreshold?: number;
  cardLimitStopThreshold?: number;
  certifyStatus?: string;
  certifyType?: string;
  credentialInstanceId?: string;
  credentialLimitSpeedThreshold?: number;
  credentialLimitStopThreshold?: number;
  credentialNo?: string;
  credentialType?: string;
  dataLevel?: string;
  dataType?: string;
  deviceImei?: string;
  directionalGroupId?: string;
  directionalGroupName?: string;
  expireTime?: string;
  flowThresholdUnit?: string;
  iccid?: string;
  imsi?: string[];
  ip?: string[];
  isAutoRecharge?: boolean;
  msisdn?: string[];
  notifyId?: string;
  openAccountTime?: string;
  openSms?: boolean;
  osStatus?: string;
  period?: string;
  periodAddFlow?: string;
  periodRestFlow?: string;
  periodSmsUse?: string;
  privateNetworkSegment?: string;
  simType?: string;
  status?: string;
  tagList?: GetCardDetailResponseBodyDataVsimCardInfoTagList[];
  vendor?: string;
  vsimInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      activeTime: 'ActiveTime',
      activeType: 'ActiveType',
      aliFee: 'AliFee',
      aliyunOrderId: 'AliyunOrderId',
      apnName: 'ApnName',
      autoLimitResume: 'AutoLimitResume',
      autoRebindReuse: 'AutoRebindReuse',
      cardLimitSpeedThreshold: 'CardLimitSpeedThreshold',
      cardLimitStopThreshold: 'CardLimitStopThreshold',
      certifyStatus: 'CertifyStatus',
      certifyType: 'CertifyType',
      credentialInstanceId: 'CredentialInstanceId',
      credentialLimitSpeedThreshold: 'CredentialLimitSpeedThreshold',
      credentialLimitStopThreshold: 'CredentialLimitStopThreshold',
      credentialNo: 'CredentialNo',
      credentialType: 'CredentialType',
      dataLevel: 'DataLevel',
      dataType: 'DataType',
      deviceImei: 'DeviceImei',
      directionalGroupId: 'DirectionalGroupId',
      directionalGroupName: 'DirectionalGroupName',
      expireTime: 'ExpireTime',
      flowThresholdUnit: 'FlowThresholdUnit',
      iccid: 'Iccid',
      imsi: 'Imsi',
      ip: 'Ip',
      isAutoRecharge: 'IsAutoRecharge',
      msisdn: 'Msisdn',
      notifyId: 'NotifyId',
      openAccountTime: 'OpenAccountTime',
      openSms: 'OpenSms',
      osStatus: 'OsStatus',
      period: 'Period',
      periodAddFlow: 'PeriodAddFlow',
      periodRestFlow: 'PeriodRestFlow',
      periodSmsUse: 'PeriodSmsUse',
      privateNetworkSegment: 'PrivateNetworkSegment',
      simType: 'SimType',
      status: 'Status',
      tagList: 'TagList',
      vendor: 'Vendor',
      vsimInstanceId: 'VsimInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeTime: 'string',
      activeType: 'string',
      aliFee: 'string',
      aliyunOrderId: 'string',
      apnName: 'string',
      autoLimitResume: 'boolean',
      autoRebindReuse: 'boolean',
      cardLimitSpeedThreshold: 'number',
      cardLimitStopThreshold: 'number',
      certifyStatus: 'string',
      certifyType: 'string',
      credentialInstanceId: 'string',
      credentialLimitSpeedThreshold: 'number',
      credentialLimitStopThreshold: 'number',
      credentialNo: 'string',
      credentialType: 'string',
      dataLevel: 'string',
      dataType: 'string',
      deviceImei: 'string',
      directionalGroupId: 'string',
      directionalGroupName: 'string',
      expireTime: 'string',
      flowThresholdUnit: 'string',
      iccid: 'string',
      imsi: { 'type': 'array', 'itemType': 'string' },
      ip: { 'type': 'array', 'itemType': 'string' },
      isAutoRecharge: 'boolean',
      msisdn: { 'type': 'array', 'itemType': 'string' },
      notifyId: 'string',
      openAccountTime: 'string',
      openSms: 'boolean',
      osStatus: 'string',
      period: 'string',
      periodAddFlow: 'string',
      periodRestFlow: 'string',
      periodSmsUse: 'string',
      privateNetworkSegment: 'string',
      simType: 'string',
      status: 'string',
      tagList: { 'type': 'array', 'itemType': GetCardDetailResponseBodyDataVsimCardInfoTagList },
      vendor: 'string',
      vsimInstanceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardDetailResponseBodyData extends $tea.Model {
  listPsimCards?: GetCardDetailResponseBodyDataListPsimCards[];
  vsimCardInfo?: GetCardDetailResponseBodyDataVsimCardInfo;
  static names(): { [key: string]: string } {
    return {
      listPsimCards: 'ListPsimCards',
      vsimCardInfo: 'VsimCardInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listPsimCards: { 'type': 'array', 'itemType': GetCardDetailResponseBodyDataListPsimCards },
      vsimCardInfo: GetCardDetailResponseBodyDataVsimCardInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardFlowInfoResponseBodyDataListCardMonthFlowListDayFlow extends $tea.Model {
  day?: string;
  flow?: string;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      flow: 'Flow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'string',
      flow: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardFlowInfoResponseBodyDataListCardMonthFlow extends $tea.Model {
  flowCount?: string;
  listDayFlow?: GetCardFlowInfoResponseBodyDataListCardMonthFlowListDayFlow[];
  month?: string;
  static names(): { [key: string]: string } {
    return {
      flowCount: 'FlowCount',
      listDayFlow: 'ListDayFlow',
      month: 'Month',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowCount: 'string',
      listDayFlow: { 'type': 'array', 'itemType': GetCardFlowInfoResponseBodyDataListCardMonthFlowListDayFlow },
      month: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardFlowInfoResponseBodyDataListPackageDTO extends $tea.Model {
  effectiveTime?: string;
  expireTime?: string;
  packageName?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveTime: 'EffectiveTime',
      expireTime: 'ExpireTime',
      packageName: 'PackageName',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveTime: 'string',
      expireTime: 'string',
      packageName: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardFlowInfoResponseBodyDataListVendorDetail extends $tea.Model {
  netWorkDelay?: string;
  ratio?: string;
  signalStrength?: string;
  usedFlow?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      netWorkDelay: 'NetWorkDelay',
      ratio: 'Ratio',
      signalStrength: 'SignalStrength',
      usedFlow: 'UsedFlow',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netWorkDelay: 'string',
      ratio: 'string',
      signalStrength: 'string',
      usedFlow: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardFlowInfoResponseBodyData extends $tea.Model {
  listCardMonthFlow?: GetCardFlowInfoResponseBodyDataListCardMonthFlow[];
  listPackageDTO?: GetCardFlowInfoResponseBodyDataListPackageDTO[];
  listVendorDetail?: GetCardFlowInfoResponseBodyDataListVendorDetail[];
  static names(): { [key: string]: string } {
    return {
      listCardMonthFlow: 'ListCardMonthFlow',
      listPackageDTO: 'ListPackageDTO',
      listVendorDetail: 'ListVendorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listCardMonthFlow: { 'type': 'array', 'itemType': GetCardFlowInfoResponseBodyDataListCardMonthFlow },
      listPackageDTO: { 'type': 'array', 'itemType': GetCardFlowInfoResponseBodyDataListPackageDTO },
      listVendorDetail: { 'type': 'array', 'itemType': GetCardFlowInfoResponseBodyDataListVendorDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardRealStatusResponseBodyData extends $tea.Model {
  gprs?: boolean;
  iccid?: string;
  online?: boolean;
  serialNo?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gprs: 'Gprs',
      iccid: 'Iccid',
      online: 'Online',
      serialNo: 'SerialNo',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gprs: 'boolean',
      iccid: 'string',
      online: 'boolean',
      serialNo: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardStatusStatisticsResponseBodyDataErrorStopStatisticsDTO extends $tea.Model {
  poolCount?: number;
  sameFlowCardCount?: number;
  singleCardCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      poolCount: 'PoolCount',
      sameFlowCardCount: 'SameFlowCardCount',
      singleCardCount: 'SingleCardCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolCount: 'number',
      sameFlowCardCount: 'number',
      singleCardCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardStatusStatisticsResponseBodyDataExhaustStopStatisticsDTO extends $tea.Model {
  poolCount?: number;
  sameFlowCardCount?: number;
  singleCardCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      poolCount: 'PoolCount',
      sameFlowCardCount: 'SameFlowCardCount',
      singleCardCount: 'SingleCardCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolCount: 'number',
      sameFlowCardCount: 'number',
      singleCardCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardStatusStatisticsResponseBodyDataExpireStopStatisticsDTO extends $tea.Model {
  poolCount?: number;
  sameFlowCardCount?: number;
  singleCardCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      poolCount: 'PoolCount',
      sameFlowCardCount: 'SameFlowCardCount',
      singleCardCount: 'SingleCardCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolCount: 'number',
      sameFlowCardCount: 'number',
      singleCardCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardStatusStatisticsResponseBodyDataFlowOutStatisticsDTO extends $tea.Model {
  poolCount?: number;
  sameFlowCardCount?: number;
  singleCardCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      poolCount: 'PoolCount',
      sameFlowCardCount: 'SameFlowCardCount',
      singleCardCount: 'SingleCardCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolCount: 'number',
      sameFlowCardCount: 'number',
      singleCardCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardStatusStatisticsResponseBodyDataManageStopStatisticsDTO extends $tea.Model {
  poolCount?: number;
  sameFlowCardCount?: number;
  singleCardCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      poolCount: 'PoolCount',
      sameFlowCardCount: 'SameFlowCardCount',
      singleCardCount: 'SingleCardCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolCount: 'number',
      sameFlowCardCount: 'number',
      singleCardCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardStatusStatisticsResponseBodyDataRiskWaringStatisticsDTO extends $tea.Model {
  leftFlowPercentageWarnCount?: number;
  stopCount?: number;
  waringTotalCount?: number;
  warningCount?: number;
  static names(): { [key: string]: string } {
    return {
      leftFlowPercentageWarnCount: 'LeftFlowPercentageWarnCount',
      stopCount: 'StopCount',
      waringTotalCount: 'WaringTotalCount',
      warningCount: 'WarningCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      leftFlowPercentageWarnCount: 'number',
      stopCount: 'number',
      waringTotalCount: 'number',
      warningCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardStatusStatisticsResponseBodyDataSingCardPeriodLeftFlowWarnDTO extends $tea.Model {
  lessFlowPercentage10Count?: number;
  lessFlowPercentage30Count?: number;
  static names(): { [key: string]: string } {
    return {
      lessFlowPercentage10Count: 'LessFlowPercentage10Count',
      lessFlowPercentage30Count: 'LessFlowPercentage30Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lessFlowPercentage10Count: 'number',
      lessFlowPercentage30Count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardStatusStatisticsResponseBodyDataUnCertifiedStopStatisticsDTO extends $tea.Model {
  poolCount?: number;
  sameFlowCardCount?: number;
  singleCardCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      poolCount: 'PoolCount',
      sameFlowCardCount: 'SameFlowCardCount',
      singleCardCount: 'SingleCardCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolCount: 'number',
      sameFlowCardCount: 'number',
      singleCardCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardStatusStatisticsResponseBodyDataUnbindResumeStatisticsDTO extends $tea.Model {
  poolCount?: number;
  sameFlowCardCount?: number;
  singleCardCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      poolCount: 'PoolCount',
      sameFlowCardCount: 'SameFlowCardCount',
      singleCardCount: 'SingleCardCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolCount: 'number',
      sameFlowCardCount: 'number',
      singleCardCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardStatusStatisticsResponseBodyDataWeekWarnStatisticsDTO extends $tea.Model {
  poolCount?: number;
  sameFlowCardCount?: number;
  singleCardCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      poolCount: 'PoolCount',
      sameFlowCardCount: 'SameFlowCardCount',
      singleCardCount: 'SingleCardCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolCount: 'number',
      sameFlowCardCount: 'number',
      singleCardCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCardStatusStatisticsResponseBodyData extends $tea.Model {
  errorStopStatisticsDTO?: GetCardStatusStatisticsResponseBodyDataErrorStopStatisticsDTO;
  exhaustStopStatisticsDTO?: GetCardStatusStatisticsResponseBodyDataExhaustStopStatisticsDTO;
  expireStopStatisticsDTO?: GetCardStatusStatisticsResponseBodyDataExpireStopStatisticsDTO;
  flowOutStatisticsDTO?: GetCardStatusStatisticsResponseBodyDataFlowOutStatisticsDTO;
  manageStopStatisticsDTO?: GetCardStatusStatisticsResponseBodyDataManageStopStatisticsDTO;
  riskWaringStatisticsDTO?: GetCardStatusStatisticsResponseBodyDataRiskWaringStatisticsDTO;
  singCardPeriodLeftFlowWarnDTO?: GetCardStatusStatisticsResponseBodyDataSingCardPeriodLeftFlowWarnDTO;
  unCertifiedStopStatisticsDTO?: GetCardStatusStatisticsResponseBodyDataUnCertifiedStopStatisticsDTO;
  unbindResumeStatisticsDTO?: GetCardStatusStatisticsResponseBodyDataUnbindResumeStatisticsDTO;
  weekWarnStatisticsDTO?: GetCardStatusStatisticsResponseBodyDataWeekWarnStatisticsDTO;
  static names(): { [key: string]: string } {
    return {
      errorStopStatisticsDTO: 'ErrorStopStatisticsDTO',
      exhaustStopStatisticsDTO: 'ExhaustStopStatisticsDTO',
      expireStopStatisticsDTO: 'ExpireStopStatisticsDTO',
      flowOutStatisticsDTO: 'FlowOutStatisticsDTO',
      manageStopStatisticsDTO: 'ManageStopStatisticsDTO',
      riskWaringStatisticsDTO: 'RiskWaringStatisticsDTO',
      singCardPeriodLeftFlowWarnDTO: 'SingCardPeriodLeftFlowWarnDTO',
      unCertifiedStopStatisticsDTO: 'UnCertifiedStopStatisticsDTO',
      unbindResumeStatisticsDTO: 'UnbindResumeStatisticsDTO',
      weekWarnStatisticsDTO: 'WeekWarnStatisticsDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorStopStatisticsDTO: GetCardStatusStatisticsResponseBodyDataErrorStopStatisticsDTO,
      exhaustStopStatisticsDTO: GetCardStatusStatisticsResponseBodyDataExhaustStopStatisticsDTO,
      expireStopStatisticsDTO: GetCardStatusStatisticsResponseBodyDataExpireStopStatisticsDTO,
      flowOutStatisticsDTO: GetCardStatusStatisticsResponseBodyDataFlowOutStatisticsDTO,
      manageStopStatisticsDTO: GetCardStatusStatisticsResponseBodyDataManageStopStatisticsDTO,
      riskWaringStatisticsDTO: GetCardStatusStatisticsResponseBodyDataRiskWaringStatisticsDTO,
      singCardPeriodLeftFlowWarnDTO: GetCardStatusStatisticsResponseBodyDataSingCardPeriodLeftFlowWarnDTO,
      unCertifiedStopStatisticsDTO: GetCardStatusStatisticsResponseBodyDataUnCertifiedStopStatisticsDTO,
      unbindResumeStatisticsDTO: GetCardStatusStatisticsResponseBodyDataUnbindResumeStatisticsDTO,
      weekWarnStatisticsDTO: GetCardStatusStatisticsResponseBodyDataWeekWarnStatisticsDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCredentialPoolStatisticsResponseBodyData extends $tea.Model {
  cardActiveNum?: number;
  cardTotalNum?: number;
  credentialInstanceId?: string;
  credentialNO?: string;
  credentialType?: string;
  effectiveAvailableFlow?: string;
  effectiveTotalFlow?: string;
  monthFeatureFee?: number;
  monthUsedAmount?: number;
  poolAvaiable?: string;
  poolGrandTotal?: string;
  poolGrandTotalUsed?: string;
  poolOutUsed?: string;
  poolUsed?: string;
  smsUsed?: number;
  static names(): { [key: string]: string } {
    return {
      cardActiveNum: 'CardActiveNum',
      cardTotalNum: 'CardTotalNum',
      credentialInstanceId: 'CredentialInstanceId',
      credentialNO: 'CredentialNO',
      credentialType: 'CredentialType',
      effectiveAvailableFlow: 'EffectiveAvailableFlow',
      effectiveTotalFlow: 'EffectiveTotalFlow',
      monthFeatureFee: 'MonthFeatureFee',
      monthUsedAmount: 'MonthUsedAmount',
      poolAvaiable: 'PoolAvaiable',
      poolGrandTotal: 'PoolGrandTotal',
      poolGrandTotalUsed: 'PoolGrandTotalUsed',
      poolOutUsed: 'PoolOutUsed',
      poolUsed: 'PoolUsed',
      smsUsed: 'SmsUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardActiveNum: 'number',
      cardTotalNum: 'number',
      credentialInstanceId: 'string',
      credentialNO: 'string',
      credentialType: 'string',
      effectiveAvailableFlow: 'string',
      effectiveTotalFlow: 'string',
      monthFeatureFee: 'number',
      monthUsedAmount: 'number',
      poolAvaiable: 'string',
      poolGrandTotal: 'string',
      poolGrandTotalUsed: 'string',
      poolOutUsed: 'string',
      poolUsed: 'string',
      smsUsed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOperateResultResponseBodyData extends $tea.Model {
  operateType?: string;
  result?: boolean;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      operateType: 'OperateType',
      result: 'Result',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateType: 'string',
      result: 'boolean',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealNameStatusResponseBodyData extends $tea.Model {
  desc?: string;
  realNameStatus?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      realNameStatus: 'RealNameStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      realNameStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSimCardStateDistributionResponseBodyData extends $tea.Model {
  cardCount?: number;
  destoryedCount?: number;
  shutDownCount?: number;
  stopCount?: number;
  testCount?: number;
  unusedCount?: number;
  usingCount?: number;
  static names(): { [key: string]: string } {
    return {
      cardCount: 'CardCount',
      destoryedCount: 'DestoryedCount',
      shutDownCount: 'ShutDownCount',
      stopCount: 'StopCount',
      testCount: 'TestCount',
      unusedCount: 'UnusedCount',
      usingCount: 'UsingCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardCount: 'number',
      destoryedCount: 'number',
      shutDownCount: 'number',
      stopCount: 'number',
      testCount: 'number',
      unusedCount: 'number',
      usingCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCardInfoResponseBodyDataListTagList extends $tea.Model {
  id?: number;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCardInfoResponseBodyDataList extends $tea.Model {
  activeTime?: string;
  activeType?: string;
  aliFee?: string;
  aliyunOrderId?: string;
  apnName?: string;
  certifyType?: string;
  credentialInstanceId?: string;
  credentialNo?: string;
  credentialType?: string;
  dataLevel?: string;
  dataType?: string;
  directionalGroupId?: number;
  directionalGroupName?: string;
  expireTime?: string;
  iccid?: string;
  imsi?: string[];
  isAutoRecharge?: boolean;
  msisdn?: string[];
  notifyId?: string;
  openAccountTime?: string;
  osStatus?: string;
  period?: string;
  periodAddFlow?: string;
  periodRestFlow?: string;
  periodSmsUse?: string;
  privateNetworkSegment?: string;
  remark?: string;
  simType?: string;
  status?: string;
  tagList?: ListCardInfoResponseBodyDataListTagList[];
  vendor?: string;
  vsimInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      activeTime: 'ActiveTime',
      activeType: 'ActiveType',
      aliFee: 'AliFee',
      aliyunOrderId: 'AliyunOrderId',
      apnName: 'ApnName',
      certifyType: 'CertifyType',
      credentialInstanceId: 'CredentialInstanceId',
      credentialNo: 'CredentialNo',
      credentialType: 'CredentialType',
      dataLevel: 'DataLevel',
      dataType: 'DataType',
      directionalGroupId: 'DirectionalGroupId',
      directionalGroupName: 'DirectionalGroupName',
      expireTime: 'ExpireTime',
      iccid: 'Iccid',
      imsi: 'Imsi',
      isAutoRecharge: 'IsAutoRecharge',
      msisdn: 'Msisdn',
      notifyId: 'NotifyId',
      openAccountTime: 'OpenAccountTime',
      osStatus: 'OsStatus',
      period: 'Period',
      periodAddFlow: 'PeriodAddFlow',
      periodRestFlow: 'PeriodRestFlow',
      periodSmsUse: 'PeriodSmsUse',
      privateNetworkSegment: 'PrivateNetworkSegment',
      remark: 'Remark',
      simType: 'SimType',
      status: 'Status',
      tagList: 'TagList',
      vendor: 'Vendor',
      vsimInstanceId: 'VsimInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeTime: 'string',
      activeType: 'string',
      aliFee: 'string',
      aliyunOrderId: 'string',
      apnName: 'string',
      certifyType: 'string',
      credentialInstanceId: 'string',
      credentialNo: 'string',
      credentialType: 'string',
      dataLevel: 'string',
      dataType: 'string',
      directionalGroupId: 'number',
      directionalGroupName: 'string',
      expireTime: 'string',
      iccid: 'string',
      imsi: { 'type': 'array', 'itemType': 'string' },
      isAutoRecharge: 'boolean',
      msisdn: { 'type': 'array', 'itemType': 'string' },
      notifyId: 'string',
      openAccountTime: 'string',
      osStatus: 'string',
      period: 'string',
      periodAddFlow: 'string',
      periodRestFlow: 'string',
      periodSmsUse: 'string',
      privateNetworkSegment: 'string',
      remark: 'string',
      simType: 'string',
      status: 'string',
      tagList: { 'type': 'array', 'itemType': ListCardInfoResponseBodyDataListTagList },
      vendor: 'string',
      vsimInstanceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCardInfoResponseBodyData extends $tea.Model {
  list?: ListCardInfoResponseBodyDataList[];
  pageCount?: number;
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageCount: 'PageCount',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListCardInfoResponseBodyDataList },
      pageCount: 'number',
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectionalAddressResponseBodyDataList extends $tea.Model {
  address?: string;
  addressType?: string;
  groupId?: string;
  source?: string;
  state?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressType: 'AddressType',
      groupId: 'GroupId',
      source: 'Source',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressType: 'string',
      groupId: 'string',
      source: 'string',
      state: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectionalAddressResponseBodyData extends $tea.Model {
  list?: ListDirectionalAddressResponseBodyDataList[];
  pageCount?: number;
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageCount: 'PageCount',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListDirectionalAddressResponseBodyDataList },
      pageCount: 'number',
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectionalDetailResponseBodyDataPaginationResultList extends $tea.Model {
  address?: string;
  addressType?: string;
  groupId?: string;
  source?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressType: 'AddressType',
      groupId: 'GroupId',
      source: 'Source',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressType: 'string',
      groupId: 'string',
      source: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectionalDetailResponseBodyDataPaginationResult extends $tea.Model {
  list?: ListDirectionalDetailResponseBodyDataPaginationResultList[];
  pageCount?: number;
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageCount: 'PageCount',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListDirectionalDetailResponseBodyDataPaginationResultList },
      pageCount: 'number',
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectionalDetailResponseBodyData extends $tea.Model {
  directionalGroupId?: number;
  directionalName?: string;
  paginationResult?: ListDirectionalDetailResponseBodyDataPaginationResult;
  static names(): { [key: string]: string } {
    return {
      directionalGroupId: 'DirectionalGroupId',
      directionalName: 'DirectionalName',
      paginationResult: 'PaginationResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directionalGroupId: 'number',
      directionalName: 'string',
      paginationResult: ListDirectionalDetailResponseBodyDataPaginationResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrderResponseBodyDataListDeliveryInfo extends $tea.Model {
  address?: string;
  buyerMessage?: string;
  mail?: string;
  receiver?: string;
  zipCode?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      buyerMessage: 'BuyerMessage',
      mail: 'Mail',
      receiver: 'Receiver',
      zipCode: 'ZipCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      buyerMessage: 'string',
      mail: 'string',
      receiver: 'string',
      zipCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrderResponseBodyDataList extends $tea.Model {
  aliFee?: string;
  apnName?: string;
  apnRegion?: string;
  billingCycle?: string;
  buyNum?: number;
  cardPayCount?: number;
  credentialNo?: string;
  credentialPackage?: string;
  dataLevel?: string;
  deliveryInfo?: ListOrderResponseBodyDataListDeliveryInfo;
  expressNoList?: string[];
  flowType?: string;
  functionFee?: number;
  orderDetailUrl?: string;
  orderId?: string;
  orderInfo?: string;
  orderStatus?: string;
  orderType?: string;
  payDuration?: string;
  payTime?: string;
  poolCapacity?: string;
  poolCapacityUnit?: string;
  poolNo?: string;
  resourceQuantity?: number;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      aliFee: 'AliFee',
      apnName: 'ApnName',
      apnRegion: 'ApnRegion',
      billingCycle: 'BillingCycle',
      buyNum: 'BuyNum',
      cardPayCount: 'CardPayCount',
      credentialNo: 'CredentialNo',
      credentialPackage: 'CredentialPackage',
      dataLevel: 'DataLevel',
      deliveryInfo: 'DeliveryInfo',
      expressNoList: 'ExpressNoList',
      flowType: 'FlowType',
      functionFee: 'FunctionFee',
      orderDetailUrl: 'OrderDetailUrl',
      orderId: 'OrderId',
      orderInfo: 'OrderInfo',
      orderStatus: 'OrderStatus',
      orderType: 'OrderType',
      payDuration: 'PayDuration',
      payTime: 'PayTime',
      poolCapacity: 'PoolCapacity',
      poolCapacityUnit: 'PoolCapacityUnit',
      poolNo: 'PoolNo',
      resourceQuantity: 'ResourceQuantity',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliFee: 'string',
      apnName: 'string',
      apnRegion: 'string',
      billingCycle: 'string',
      buyNum: 'number',
      cardPayCount: 'number',
      credentialNo: 'string',
      credentialPackage: 'string',
      dataLevel: 'string',
      deliveryInfo: ListOrderResponseBodyDataListDeliveryInfo,
      expressNoList: { 'type': 'array', 'itemType': 'string' },
      flowType: 'string',
      functionFee: 'number',
      orderDetailUrl: 'string',
      orderId: 'string',
      orderInfo: 'string',
      orderStatus: 'string',
      orderType: 'string',
      payDuration: 'string',
      payTime: 'string',
      poolCapacity: 'string',
      poolCapacityUnit: 'string',
      poolNo: 'string',
      resourceQuantity: 'number',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrderResponseBodyData extends $tea.Model {
  list?: ListOrderResponseBodyDataList[];
  pageCount?: number;
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageCount: 'PageCount',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListOrderResponseBodyDataList },
      pageCount: 'number',
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewResponseBodyData extends $tea.Model {
  orderNo?: string;
  serialNo?: string;
  static names(): { [key: string]: string } {
    return {
      orderNo: 'OrderNo',
      serialNo: 'SerialNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNo: 'string',
      serialNo: 'string',
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
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("linkcard", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addCardToDirectionalGroupWithOptions(tmpReq: AddCardToDirectionalGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddCardToDirectionalGroupResponse> {
    Util.validateModel(tmpReq);
    let request = new AddCardToDirectionalGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.iccidList)) {
      request.iccidListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.iccidList, "IccidList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.addType)) {
      query["AddType"] = request.addType;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.iccidListShrink)) {
      query["IccidList"] = request.iccidListShrink;
    }

    if (!Util.isUnset(request.msgNotify)) {
      query["MsgNotify"] = request.msgNotify;
    }

    if (!Util.isUnset(request.serialNo)) {
      query["SerialNo"] = request.serialNo;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiProduct)) {
      body["ApiProduct"] = request.apiProduct;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddCardToDirectionalGroup",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddCardToDirectionalGroupResponse>(await this.callApi(params, req, runtime), new AddCardToDirectionalGroupResponse({}));
  }

  async addCardToDirectionalGroup(request: AddCardToDirectionalGroupRequest): Promise<AddCardToDirectionalGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCardToDirectionalGroupWithOptions(request, runtime);
  }

  async addDirectionalAddressWithOptions(request: AddDirectionalAddressRequest, runtime: $Util.RuntimeOptions): Promise<AddDirectionalAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.msgNotify)) {
      query["MsgNotify"] = request.msgNotify;
    }

    if (!Util.isUnset(request.serialNo)) {
      query["SerialNo"] = request.serialNo;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddDirectionalAddress",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddDirectionalAddressResponse>(await this.callApi(params, req, runtime), new AddDirectionalAddressResponse({}));
  }

  async addDirectionalAddress(request: AddDirectionalAddressRequest): Promise<AddDirectionalAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDirectionalAddressWithOptions(request, runtime);
  }

  async addDirectionalCardWithOptions(tmpReq: AddDirectionalCardRequest, runtime: $Util.RuntimeOptions): Promise<AddDirectionalCardResponse> {
    Util.validateModel(tmpReq);
    let request = new AddDirectionalCardShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.orderList)) {
      request.orderListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.orderList, "OrderList", "json");
    }

    if (!Util.isUnset(tmpReq.tagList)) {
      request.tagListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagList, "TagList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.fileUri)) {
      query["FileUri"] = request.fileUri;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.orderListShrink)) {
      query["OrderList"] = request.orderListShrink;
    }

    if (!Util.isUnset(request.tagListShrink)) {
      query["TagList"] = request.tagListShrink;
    }

    if (!Util.isUnset(request.uploadMethod)) {
      query["UploadMethod"] = request.uploadMethod;
    }

    if (!Util.isUnset(request.uploadType)) {
      query["UploadType"] = request.uploadType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddDirectionalCard",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddDirectionalCardResponse>(await this.callApi(params, req, runtime), new AddDirectionalCardResponse({}));
  }

  async addDirectionalCard(request: AddDirectionalCardRequest): Promise<AddDirectionalCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDirectionalCardWithOptions(request, runtime);
  }

  async addDirectionalGroupWithOptions(request: AddDirectionalGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddDirectionalGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddDirectionalGroup",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddDirectionalGroupResponse>(await this.callApi(params, req, runtime), new AddDirectionalGroupResponse({}));
  }

  async addDirectionalGroup(request: AddDirectionalGroupRequest): Promise<AddDirectionalGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDirectionalGroupWithOptions(request, runtime);
  }

  async addTagsToCardWithOptions(tmpReq: AddTagsToCardRequest, runtime: $Util.RuntimeOptions): Promise<AddTagsToCardResponse> {
    Util.validateModel(tmpReq);
    let request = new AddTagsToCardShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tagNameList)) {
      request.tagNameListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagNameList, "TagNameList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.iccid)) {
      query["Iccid"] = request.iccid;
    }

    if (!Util.isUnset(request.tagNameListShrink)) {
      query["TagNameList"] = request.tagNameListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddTagsToCard",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddTagsToCardResponse>(await this.callApi(params, req, runtime), new AddTagsToCardResponse({}));
  }

  async addTagsToCard(request: AddTagsToCardRequest): Promise<AddTagsToCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTagsToCardWithOptions(request, runtime);
  }

  async batchAddDirectionalAddressWithOptions(request: BatchAddDirectionalAddressRequest, runtime: $Util.RuntimeOptions): Promise<BatchAddDirectionalAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.listAddress)) {
      query["ListAddress"] = request.listAddress;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchAddDirectionalAddress",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchAddDirectionalAddressResponse>(await this.callApi(params, req, runtime), new BatchAddDirectionalAddressResponse({}));
  }

  async batchAddDirectionalAddress(request: BatchAddDirectionalAddressRequest): Promise<BatchAddDirectionalAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchAddDirectionalAddressWithOptions(request, runtime);
  }

  async deleteDirectionalAddressWithOptions(request: DeleteDirectionalAddressRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDirectionalAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.msgNotify)) {
      query["MsgNotify"] = request.msgNotify;
    }

    if (!Util.isUnset(request.serialNo)) {
      query["SerialNo"] = request.serialNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDirectionalAddress",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDirectionalAddressResponse>(await this.callApi(params, req, runtime), new DeleteDirectionalAddressResponse({}));
  }

  async deleteDirectionalAddress(request: DeleteDirectionalAddressRequest): Promise<DeleteDirectionalAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDirectionalAddressWithOptions(request, runtime);
  }

  async deleteDirectionalGroupWithOptions(request: DeleteDirectionalGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDirectionalGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDirectionalGroup",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDirectionalGroupResponse>(await this.callApi(params, req, runtime), new DeleteDirectionalGroupResponse({}));
  }

  async deleteDirectionalGroup(request: DeleteDirectionalGroupRequest): Promise<DeleteDirectionalGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDirectionalGroupWithOptions(request, runtime);
  }

  async forceActivationWithOptions(request: ForceActivationRequest, runtime: $Util.RuntimeOptions): Promise<ForceActivationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dateType)) {
      query["DateType"] = request.dateType;
    }

    if (!Util.isUnset(request.iccid)) {
      query["Iccid"] = request.iccid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ForceActivation",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ForceActivationResponse>(await this.callApi(params, req, runtime), new ForceActivationResponse({}));
  }

  async forceActivation(request: ForceActivationRequest): Promise<ForceActivationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.forceActivationWithOptions(request, runtime);
  }

  async getCardDetailWithOptions(request: GetCardDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetCardDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.destroyCard)) {
      query["DestroyCard"] = request.destroyCard;
    }

    if (!Util.isUnset(request.iccid)) {
      query["Iccid"] = request.iccid;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.showPsim)) {
      query["ShowPsim"] = request.showPsim;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCardDetail",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCardDetailResponse>(await this.callApi(params, req, runtime), new GetCardDetailResponse({}));
  }

  async getCardDetail(request: GetCardDetailRequest): Promise<GetCardDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCardDetailWithOptions(request, runtime);
  }

  async getCardFlowInfoWithOptions(request: GetCardFlowInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetCardFlowInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dateList)) {
      query["DateList"] = request.dateList;
    }

    if (!Util.isUnset(request.iccid)) {
      query["Iccid"] = request.iccid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCardFlowInfo",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCardFlowInfoResponse>(await this.callApi(params, req, runtime), new GetCardFlowInfoResponse({}));
  }

  async getCardFlowInfo(request: GetCardFlowInfoRequest): Promise<GetCardFlowInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCardFlowInfoWithOptions(request, runtime);
  }

  async getCardLatestFlowWithOptions(request: GetCardLatestFlowRequest, runtime: $Util.RuntimeOptions): Promise<GetCardLatestFlowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.iccid)) {
      query["Iccid"] = request.iccid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCardLatestFlow",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCardLatestFlowResponse>(await this.callApi(params, req, runtime), new GetCardLatestFlowResponse({}));
  }

  async getCardLatestFlow(request: GetCardLatestFlowRequest): Promise<GetCardLatestFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCardLatestFlowWithOptions(request, runtime);
  }

  async getCardRealStatusWithOptions(tmpReq: GetCardRealStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetCardRealStatusResponse> {
    Util.validateModel(tmpReq);
    let request = new GetCardRealStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.serialNo)) {
      request.serialNoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.serialNo, "SerialNo", "json");
    }

    let query = { };
    if (!Util.isUnset(request.iccid)) {
      query["Iccid"] = request.iccid;
    }

    if (!Util.isUnset(request.msisdn)) {
      query["Msisdn"] = request.msisdn;
    }

    if (!Util.isUnset(request.serialNoShrink)) {
      query["SerialNo"] = request.serialNoShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCardRealStatus",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCardRealStatusResponse>(await this.callApi(params, req, runtime), new GetCardRealStatusResponse({}));
  }

  async getCardRealStatus(request: GetCardRealStatusRequest): Promise<GetCardRealStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCardRealStatusWithOptions(request, runtime);
  }

  async getCardStatusStatisticsWithOptions(runtime: $Util.RuntimeOptions): Promise<GetCardStatusStatisticsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetCardStatusStatistics",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCardStatusStatisticsResponse>(await this.callApi(params, req, runtime), new GetCardStatusStatisticsResponse({}));
  }

  async getCardStatusStatistics(): Promise<GetCardStatusStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCardStatusStatisticsWithOptions(runtime);
  }

  async getCredentialPoolStatisticsWithOptions(request: GetCredentialPoolStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<GetCredentialPoolStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.credentialNO)) {
      query["CredentialNO"] = request.credentialNO;
    }

    if (!Util.isUnset(request.date)) {
      query["Date"] = request.date;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCredentialPoolStatistics",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCredentialPoolStatisticsResponse>(await this.callApi(params, req, runtime), new GetCredentialPoolStatisticsResponse({}));
  }

  async getCredentialPoolStatistics(request: GetCredentialPoolStatisticsRequest): Promise<GetCredentialPoolStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCredentialPoolStatisticsWithOptions(request, runtime);
  }

  async getOperateResultWithOptions(request: GetOperateResultRequest, runtime: $Util.RuntimeOptions): Promise<GetOperateResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiProduct)) {
      query["ApiProduct"] = request.apiProduct;
    }

    if (!Util.isUnset(request.resId)) {
      query["ResId"] = request.resId;
    }

    if (!Util.isUnset(request.serialNo)) {
      query["SerialNo"] = request.serialNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOperateResult",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOperateResultResponse>(await this.callApi(params, req, runtime), new GetOperateResultResponse({}));
  }

  async getOperateResult(request: GetOperateResultRequest): Promise<GetOperateResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOperateResultWithOptions(request, runtime);
  }

  async getRealNameStatusWithOptions(tmpReq: GetRealNameStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetRealNameStatusResponse> {
    Util.validateModel(tmpReq);
    let request = new GetRealNameStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.listMsisdns)) {
      request.listMsisdnsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listMsisdns, "ListMsisdns", "json");
    }

    let query = { };
    if (!Util.isUnset(request.iccid)) {
      query["Iccid"] = request.iccid;
    }

    if (!Util.isUnset(request.listMsisdnsShrink)) {
      query["ListMsisdns"] = request.listMsisdnsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRealNameStatus",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRealNameStatusResponse>(await this.callApi(params, req, runtime), new GetRealNameStatusResponse({}));
  }

  async getRealNameStatus(request: GetRealNameStatusRequest): Promise<GetRealNameStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRealNameStatusWithOptions(request, runtime);
  }

  async getSimCardStateDistributionWithOptions(request: GetSimCardStateDistributionRequest, runtime: $Util.RuntimeOptions): Promise<GetSimCardStateDistributionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.credentialNO)) {
      query["CredentialNO"] = request.credentialNO;
    }

    if (!Util.isUnset(request.date)) {
      query["Date"] = request.date;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSimCardStateDistribution",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSimCardStateDistributionResponse>(await this.callApi(params, req, runtime), new GetSimCardStateDistributionResponse({}));
  }

  async getSimCardStateDistribution(request: GetSimCardStateDistributionRequest): Promise<GetSimCardStateDistributionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSimCardStateDistributionWithOptions(request, runtime);
  }

  async listCardInfoWithOptions(request: ListCardInfoRequest, runtime: $Util.RuntimeOptions): Promise<ListCardInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.activeTimeEnd)) {
      query["ActiveTimeEnd"] = request.activeTimeEnd;
    }

    if (!Util.isUnset(request.activeTimeStart)) {
      query["ActiveTimeStart"] = request.activeTimeStart;
    }

    if (!Util.isUnset(request.aliFee)) {
      query["AliFee"] = request.aliFee;
    }

    if (!Util.isUnset(request.aliyunOrderId)) {
      query["AliyunOrderId"] = request.aliyunOrderId;
    }

    if (!Util.isUnset(request.apnName)) {
      query["ApnName"] = request.apnName;
    }

    if (!Util.isUnset(request.certifyType)) {
      query["CertifyType"] = request.certifyType;
    }

    if (!Util.isUnset(request.credentialNo)) {
      query["CredentialNo"] = request.credentialNo;
    }

    if (!Util.isUnset(request.dataLevel)) {
      query["DataLevel"] = request.dataLevel;
    }

    if (!Util.isUnset(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!Util.isUnset(request.directionalGroupId)) {
      query["DirectionalGroupId"] = request.directionalGroupId;
    }

    if (!Util.isUnset(request.expireTimeEnd)) {
      query["ExpireTimeEnd"] = request.expireTimeEnd;
    }

    if (!Util.isUnset(request.expireTimeStart)) {
      query["ExpireTimeStart"] = request.expireTimeStart;
    }

    if (!Util.isUnset(request.iccid)) {
      query["Iccid"] = request.iccid;
    }

    if (!Util.isUnset(request.imsi)) {
      query["Imsi"] = request.imsi;
    }

    if (!Util.isUnset(request.isAutoRecharge)) {
      query["IsAutoRecharge"] = request.isAutoRecharge;
    }

    if (!Util.isUnset(request.maxFlow)) {
      query["MaxFlow"] = request.maxFlow;
    }

    if (!Util.isUnset(request.maxRestFlowPercentage)) {
      query["MaxRestFlowPercentage"] = request.maxRestFlowPercentage;
    }

    if (!Util.isUnset(request.minFlow)) {
      query["MinFlow"] = request.minFlow;
    }

    if (!Util.isUnset(request.msisdn)) {
      query["Msisdn"] = request.msisdn;
    }

    if (!Util.isUnset(request.notifyId)) {
      query["NotifyId"] = request.notifyId;
    }

    if (!Util.isUnset(request.osStatus)) {
      query["OsStatus"] = request.osStatus;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.poolId)) {
      query["PoolId"] = request.poolId;
    }

    if (!Util.isUnset(request.simType)) {
      query["SimType"] = request.simType;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    if (!Util.isUnset(request.vendor)) {
      query["Vendor"] = request.vendor;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCardInfo",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCardInfoResponse>(await this.callApi(params, req, runtime), new ListCardInfoResponse({}));
  }

  async listCardInfo(request: ListCardInfoRequest): Promise<ListCardInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCardInfoWithOptions(request, runtime);
  }

  async listDirectionalAddressWithOptions(request: ListDirectionalAddressRequest, runtime: $Util.RuntimeOptions): Promise<ListDirectionalAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDirectionalAddress",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDirectionalAddressResponse>(await this.callApi(params, req, runtime), new ListDirectionalAddressResponse({}));
  }

  async listDirectionalAddress(request: ListDirectionalAddressRequest): Promise<ListDirectionalAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDirectionalAddressWithOptions(request, runtime);
  }

  async listDirectionalDetailWithOptions(request: ListDirectionalDetailRequest, runtime: $Util.RuntimeOptions): Promise<ListDirectionalDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.iccid)) {
      query["Iccid"] = request.iccid;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDirectionalDetail",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDirectionalDetailResponse>(await this.callApi(params, req, runtime), new ListDirectionalDetailResponse({}));
  }

  async listDirectionalDetail(request: ListDirectionalDetailRequest): Promise<ListDirectionalDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDirectionalDetailWithOptions(request, runtime);
  }

  async listOrderWithOptions(request: ListOrderRequest, runtime: $Util.RuntimeOptions): Promise<ListOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.orderStatus)) {
      query["OrderStatus"] = request.orderStatus;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOrder",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListOrderResponse>(await this.callApi(params, req, runtime), new ListOrderResponse({}));
  }

  async listOrder(request: ListOrderRequest): Promise<ListOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOrderWithOptions(request, runtime);
  }

  async rebindResumeSingleCardWithOptions(tmpReq: RebindResumeSingleCardRequest, runtime: $Util.RuntimeOptions): Promise<RebindResumeSingleCardResponse> {
    Util.validateModel(tmpReq);
    let request = new RebindResumeSingleCardShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.optMsisdns)) {
      request.optMsisdnsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.optMsisdns, "OptMsisdns", "json");
    }

    let query = { };
    if (!Util.isUnset(request.iccid)) {
      query["Iccid"] = request.iccid;
    }

    if (!Util.isUnset(request.optMsisdnsShrink)) {
      query["OptMsisdns"] = request.optMsisdnsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RebindResumeSingleCard",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RebindResumeSingleCardResponse>(await this.callApi(params, req, runtime), new RebindResumeSingleCardResponse({}));
  }

  async rebindResumeSingleCard(request: RebindResumeSingleCardRequest): Promise<RebindResumeSingleCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebindResumeSingleCardWithOptions(request, runtime);
  }

  async renewWithOptions(request: RenewRequest, runtime: $Util.RuntimeOptions): Promise<RenewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.buyNum)) {
      query["BuyNum"] = request.buyNum;
    }

    if (!Util.isUnset(request.iccid)) {
      query["Iccid"] = request.iccid;
    }

    if (!Util.isUnset(request.offerCode)) {
      query["OfferCode"] = request.offerCode;
    }

    if (!Util.isUnset(request.rechargeType)) {
      query["RechargeType"] = request.rechargeType;
    }

    if (!Util.isUnset(request.serialNo)) {
      query["SerialNo"] = request.serialNo;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiProduct)) {
      body["ApiProduct"] = request.apiProduct;
    }

    if (!Util.isUnset(request.apiRevision)) {
      body["ApiRevision"] = request.apiRevision;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "Renew",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenewResponse>(await this.callApi(params, req, runtime), new RenewResponse({}));
  }

  async renew(request: RenewRequest): Promise<RenewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewWithOptions(request, runtime);
  }

  async resumeSingleCardWithOptions(tmpReq: ResumeSingleCardRequest, runtime: $Util.RuntimeOptions): Promise<ResumeSingleCardResponse> {
    Util.validateModel(tmpReq);
    let request = new ResumeSingleCardShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.optMsisdns)) {
      request.optMsisdnsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.optMsisdns, "OptMsisdns", "json");
    }

    let query = { };
    if (!Util.isUnset(request.iccid)) {
      query["Iccid"] = request.iccid;
    }

    if (!Util.isUnset(request.optMsisdnsShrink)) {
      query["OptMsisdns"] = request.optMsisdnsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResumeSingleCard",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResumeSingleCardResponse>(await this.callApi(params, req, runtime), new ResumeSingleCardResponse({}));
  }

  async resumeSingleCard(request: ResumeSingleCardRequest): Promise<ResumeSingleCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeSingleCardWithOptions(request, runtime);
  }

  async setCardStopRuleWithOptions(request: SetCardStopRuleRequest, runtime: $Util.RuntimeOptions): Promise<SetCardStopRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoRestore)) {
      query["AutoRestore"] = request.autoRestore;
    }

    if (!Util.isUnset(request.flowLimit)) {
      query["FlowLimit"] = request.flowLimit;
    }

    if (!Util.isUnset(request.iccid)) {
      query["Iccid"] = request.iccid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetCardStopRule",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetCardStopRuleResponse>(await this.callApi(params, req, runtime), new SetCardStopRuleResponse({}));
  }

  async setCardStopRule(request: SetCardStopRuleRequest): Promise<SetCardStopRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setCardStopRuleWithOptions(request, runtime);
  }

  async stopSingleCardWithOptions(tmpReq: StopSingleCardRequest, runtime: $Util.RuntimeOptions): Promise<StopSingleCardResponse> {
    Util.validateModel(tmpReq);
    let request = new StopSingleCardShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.optMsisdns)) {
      request.optMsisdnsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.optMsisdns, "OptMsisdns", "json");
    }

    let query = { };
    if (!Util.isUnset(request.iccid)) {
      query["Iccid"] = request.iccid;
    }

    if (!Util.isUnset(request.optMsisdnsShrink)) {
      query["OptMsisdns"] = request.optMsisdnsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopSingleCard",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopSingleCardResponse>(await this.callApi(params, req, runtime), new StopSingleCardResponse({}));
  }

  async stopSingleCard(request: StopSingleCardRequest): Promise<StopSingleCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopSingleCardWithOptions(request, runtime);
  }

  async updateAutoRechargeSwitchWithOptions(request: UpdateAutoRechargeSwitchRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAutoRechargeSwitchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.iccid)) {
      query["Iccid"] = request.iccid;
    }

    if (!Util.isUnset(request.open)) {
      query["Open"] = request.open;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAutoRechargeSwitch",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAutoRechargeSwitchResponse>(await this.callApi(params, req, runtime), new UpdateAutoRechargeSwitchResponse({}));
  }

  async updateAutoRechargeSwitch(request: UpdateAutoRechargeSwitchRequest): Promise<UpdateAutoRechargeSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAutoRechargeSwitchWithOptions(request, runtime);
  }

  async verifyIotCardWithOptions(request: VerifyIotCardRequest, runtime: $Util.RuntimeOptions): Promise<VerifyIotCardResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.iccid)) {
      query["Iccid"] = request.iccid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifyIotCard",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyIotCardResponse>(await this.callApi(params, req, runtime), new VerifyIotCardResponse({}));
  }

  async verifyIotCard(request: VerifyIotCardRequest): Promise<VerifyIotCardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyIotCardWithOptions(request, runtime);
  }

}
