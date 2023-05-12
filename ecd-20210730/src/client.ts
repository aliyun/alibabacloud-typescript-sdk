// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CountAppVersionRequest extends $tea.Model {
  appId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountAppVersionResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountAppVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CountAppVersionResponseBody;
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
      body: CountAppVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequest extends $tea.Model {
  description?: string;
  iconUrl?: string;
  name?: string;
  tagList?: string[];
  type?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      iconUrl: 'IconUrl',
      name: 'Name',
      tagList: 'TagList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      iconUrl: 'string',
      name: 'string',
      tagList: { 'type': 'array', 'itemType': 'string' },
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAppResponseBody;
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
      body: CreateAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppAdaptorRequest extends $tea.Model {
  frameRate?: string;
  loadType?: string;
  mode?: string;
  os?: string;
  resolution?: string;
  versionUid?: string;
  static names(): { [key: string]: string } {
    return {
      frameRate: 'FrameRate',
      loadType: 'LoadType',
      mode: 'Mode',
      os: 'Os',
      resolution: 'Resolution',
      versionUid: 'VersionUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameRate: 'string',
      loadType: 'string',
      mode: 'string',
      os: 'string',
      resolution: 'string',
      versionUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppAdaptorResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppAdaptorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAppAdaptorResponseBody;
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
      body: CreateAppAdaptorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppAdaptorImageRequest extends $tea.Model {
  adaptorUid?: string;
  static names(): { [key: string]: string } {
    return {
      adaptorUid: 'AdaptorUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptorUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppAdaptorImageResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppAdaptorImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAppAdaptorImageResponseBody;
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
      body: CreateAppAdaptorImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppAdaptorsRequest extends $tea.Model {
  frameRate?: string;
  loadTypeList?: string[];
  mode?: string;
  os?: string;
  resolution?: string;
  versionUid?: string;
  static names(): { [key: string]: string } {
    return {
      frameRate: 'FrameRate',
      loadTypeList: 'LoadTypeList',
      mode: 'Mode',
      os: 'Os',
      resolution: 'Resolution',
      versionUid: 'VersionUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameRate: 'string',
      loadTypeList: { 'type': 'array', 'itemType': 'string' },
      mode: 'string',
      os: 'string',
      resolution: 'string',
      versionUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppAdaptorsResponseBody extends $tea.Model {
  code?: string;
  data?: CreateAppAdaptorsResponseBodyData[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': CreateAppAdaptorsResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppAdaptorsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAppAdaptorsResponseBody;
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
      body: CreateAppAdaptorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupRequest extends $tea.Model {
  adaptorUidList?: string[];
  description?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      adaptorUidList: 'AdaptorUidList',
      description: 'Description',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptorUidList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAppGroupResponseBody;
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
      body: CreateAppGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupImageRequest extends $tea.Model {
  appGroupUid?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupUid: 'AppGroupUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupImageResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAppGroupImageResponseBody;
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
      body: CreateAppGroupImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppImageRequest extends $tea.Model {
  adaptorUidList?: string[];
  name?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      adaptorUidList: 'AdaptorUidList',
      name: 'Name',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptorUidList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppImageResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAppImageResponseBody;
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
      body: CreateAppImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppImageConfigRequest extends $tea.Model {
  imgUid?: string;
  static names(): { [key: string]: string } {
    return {
      imgUid: 'ImgUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imgUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppImageConfigResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppImageConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAppImageConfigResponseBody;
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
      body: CreateAppImageConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppTagRequest extends $tea.Model {
  appUid?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      appUid: 'AppUid',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUid: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppTagResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAppTagResponseBody;
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
      body: CreateAppTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppVersionRequest extends $tea.Model {
  appUid?: string;
  fileName?: string;
  filePath?: string;
  fileRealName?: string;
  name?: string;
  number?: string;
  osType?: string;
  static names(): { [key: string]: string } {
    return {
      appUid: 'AppUid',
      fileName: 'FileName',
      filePath: 'FilePath',
      fileRealName: 'FileRealName',
      name: 'Name',
      number: 'Number',
      osType: 'OsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUid: 'string',
      fileName: 'string',
      filePath: 'string',
      fileRealName: 'string',
      name: 'string',
      number: 'string',
      osType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppVersionResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAppVersionResponseBody;
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
      body: CreateAppVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppVersionAdaptorRequest extends $tea.Model {
  computeType?: string;
  extensions?: { [key: string]: any };
  frameRate?: string;
  hardware?: string;
  mode?: string;
  os?: string;
  resolution?: string;
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      computeType: 'ComputeType',
      extensions: 'Extensions',
      frameRate: 'FrameRate',
      hardware: 'Hardware',
      mode: 'Mode',
      os: 'Os',
      resolution: 'Resolution',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeType: 'string',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      frameRate: 'string',
      hardware: 'string',
      mode: 'string',
      os: 'string',
      resolution: 'string',
      versionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppVersionAdaptorShrinkRequest extends $tea.Model {
  computeType?: string;
  extensionsShrink?: string;
  frameRate?: string;
  hardware?: string;
  mode?: string;
  os?: string;
  resolution?: string;
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      computeType: 'ComputeType',
      extensionsShrink: 'Extensions',
      frameRate: 'FrameRate',
      hardware: 'Hardware',
      mode: 'Mode',
      os: 'Os',
      resolution: 'Resolution',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeType: 'string',
      extensionsShrink: 'string',
      frameRate: 'string',
      hardware: 'string',
      mode: 'string',
      os: 'string',
      resolution: 'string',
      versionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppVersionAdaptorResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppVersionAdaptorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAppVersionAdaptorResponseBody;
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
      body: CreateAppVersionAdaptorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppRequest extends $tea.Model {
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAppResponseBody;
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
      body: DeleteAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppAdaptorRequest extends $tea.Model {
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppAdaptorResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppAdaptorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAppAdaptorResponseBody;
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
      body: DeleteAppAdaptorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppGroupRequest extends $tea.Model {
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppGroupResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAppGroupResponseBody;
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
      body: DeleteAppGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppGroupImageRequest extends $tea.Model {
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppGroupImageResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppGroupImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAppGroupImageResponseBody;
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
      body: DeleteAppGroupImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppImageRequest extends $tea.Model {
  id?: number;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppImageResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  httpStatusCode?: number;
  message?: string;
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

export class DeleteAppImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAppImageResponseBody;
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
      body: DeleteAppImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppTagRequest extends $tea.Model {
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppTagResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAppTagResponseBody;
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
      body: DeleteAppTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppVersionRequest extends $tea.Model {
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppVersionResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAppVersionResponseBody;
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
      body: DeleteAppVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppVersionAdaptorRequest extends $tea.Model {
  ids?: { [key: string]: any };
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      versionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppVersionAdaptorShrinkRequest extends $tea.Model {
  idsShrink?: string;
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      idsShrink: 'Ids',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idsShrink: 'string',
      versionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppVersionAdaptorResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppVersionAdaptorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAppVersionAdaptorResponseBody;
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
      body: DeleteAppVersionAdaptorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppRequest extends $tea.Model {
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBody extends $tea.Model {
  code?: string;
  data?: GetAppResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAppResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAppResponseBody;
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
      body: GetAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppAdaptorRequest extends $tea.Model {
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppAdaptorResponseBody extends $tea.Model {
  code?: string;
  data?: GetAppAdaptorResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetAppAdaptorResponseBodyData },
      message: 'string',
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

export class GetAppAdaptorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAppAdaptorResponseBody;
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
      body: GetAppAdaptorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppAdaptorConfigResponseBody extends $tea.Model {
  code?: string;
  data?: GetAppAdaptorConfigResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAppAdaptorConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppAdaptorConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAppAdaptorConfigResponseBody;
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
      body: GetAppAdaptorConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppAdaptorReportRequest extends $tea.Model {
  adaptorUid?: string;
  static names(): { [key: string]: string } {
    return {
      adaptorUid: 'AdaptorUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptorUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppAdaptorReportResponseBody extends $tea.Model {
  code?: string;
  data?: GetAppAdaptorReportResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAppAdaptorReportResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppAdaptorReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAppAdaptorReportResponseBody;
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
      body: GetAppAdaptorReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppDownloadUrlRequest extends $tea.Model {
  accountId?: number;
  appId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      appId: 'AppId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      appId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppDownloadUrlResponseBody extends $tea.Model {
  code?: string;
  data?: GetAppDownloadUrlResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAppDownloadUrlResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppDownloadUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAppDownloadUrlResponseBody;
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
      body: GetAppDownloadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppImageRequest extends $tea.Model {
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppImageResponseBody extends $tea.Model {
  code?: string;
  data?: GetAppImageResponseBodyData[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetAppImageResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAppImageResponseBody;
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
      body: GetAppImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppImageStatusRequest extends $tea.Model {
  imageUid?: string;
  osType?: string;
  static names(): { [key: string]: string } {
    return {
      imageUid: 'ImageUid',
      osType: 'OsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUid: 'string',
      osType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppImageStatusResponseBody extends $tea.Model {
  code?: string;
  data?: GetAppImageStatusResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetAppImageStatusResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppImageStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAppImageStatusResponseBody;
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
      body: GetAppImageStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppStsCredentialRequest extends $tea.Model {
  accountId?: number;
  regionId?: string;
  sourceType?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      regionId: 'RegionId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      regionId: 'string',
      sourceType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppStsCredentialResponseBody extends $tea.Model {
  code?: string;
  data?: GetAppStsCredentialResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAppStsCredentialResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppStsCredentialResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAppStsCredentialResponseBody;
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
      body: GetAppStsCredentialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppVersionRequest extends $tea.Model {
  id?: number;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppVersionResponseBody extends $tea.Model {
  code?: string;
  data?: GetAppVersionResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAppVersionResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAppVersionResponseBody;
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
      body: GetAppVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCreateGroupFlagResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCreateGroupFlagResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCreateGroupFlagResponseBody;
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
      body: GetCreateGroupFlagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDownloadStsCredentialRequest extends $tea.Model {
  accountId?: number;
  appId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      appId: 'AppId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      appId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDownloadStsCredentialResponseBody extends $tea.Model {
  code?: string;
  data?: GetDownloadStsCredentialResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDownloadStsCredentialResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDownloadStsCredentialResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDownloadStsCredentialResponseBody;
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
      body: GetDownloadStsCredentialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIconDownloadUrlRequest extends $tea.Model {
  accountId?: number;
  appId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      appId: 'AppId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      appId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIconDownloadUrlResponseBody extends $tea.Model {
  code?: string;
  data?: GetIconDownloadUrlResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetIconDownloadUrlResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIconDownloadUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetIconDownloadUrlResponseBody;
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
      body: GetIconDownloadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIconStsCredentialRequest extends $tea.Model {
  accountId?: number;
  regionId?: string;
  sourceType?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      regionId: 'RegionId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      regionId: 'string',
      sourceType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIconStsCredentialResponseBody extends $tea.Model {
  code?: string;
  data?: GetIconStsCredentialResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetIconStsCredentialResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIconStsCredentialResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetIconStsCredentialResponseBody;
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
      body: GetIconStsCredentialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppRequest extends $tea.Model {
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: number;
  type?: number;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      type: 'Type',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'number',
      type: 'number',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppResponseBody extends $tea.Model {
  code?: string;
  data?: ListAppResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAppResponseBodyData },
      message: 'string',
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

export class ListAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAppResponseBody;
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
      body: ListAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppAdaptorsRequest extends $tea.Model {
  appName?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: number;
  type?: number;
  uid?: string;
  versionUid?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      type: 'Type',
      uid: 'Uid',
      versionUid: 'VersionUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'number',
      type: 'number',
      uid: 'string',
      versionUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppAdaptorsResponseBody extends $tea.Model {
  code?: string;
  data?: ListAppAdaptorsResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAppAdaptorsResponseBodyData },
      message: 'string',
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

export class ListAppAdaptorsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAppAdaptorsResponseBody;
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
      body: ListAppAdaptorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupRequest extends $tea.Model {
  groupName?: string;
  pageNumber?: number;
  pageSize?: number;
  type?: number;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      type: 'Type',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      type: 'number',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupResponseBody extends $tea.Model {
  code?: string;
  data?: ListAppGroupResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAppGroupResponseBodyData },
      message: 'string',
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

export class ListAppGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAppGroupResponseBody;
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
      body: ListAppGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupAdaptorRequest extends $tea.Model {
  groupId?: number;
  groupUid?: string;
  pageNumber?: number;
  pageSize?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupUid: 'GroupUid',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      groupUid: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupAdaptorResponseBody extends $tea.Model {
  code?: string;
  data?: ListAppGroupAdaptorResponseBodyData[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAppGroupAdaptorResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupAdaptorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAppGroupAdaptorResponseBody;
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
      body: ListAppGroupAdaptorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupImagesRequest extends $tea.Model {
  appGroupName?: string;
  appGroupUid?: string;
  imageUid?: string;
  os?: string;
  osType?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: number;
  type?: number;
  willDistribute?: boolean;
  static names(): { [key: string]: string } {
    return {
      appGroupName: 'AppGroupName',
      appGroupUid: 'AppGroupUid',
      imageUid: 'ImageUid',
      os: 'Os',
      osType: 'OsType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      type: 'Type',
      willDistribute: 'WillDistribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupName: 'string',
      appGroupUid: 'string',
      imageUid: 'string',
      os: 'string',
      osType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'number',
      type: 'number',
      willDistribute: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupImagesResponseBody extends $tea.Model {
  code?: string;
  data?: ListAppGroupImagesResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAppGroupImagesResponseBodyData },
      message: 'string',
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

export class ListAppGroupImagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAppGroupImagesResponseBody;
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
      body: ListAppGroupImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppImageRequest extends $tea.Model {
  appName?: string;
  appUid?: string;
  imageName?: string;
  imageUid?: string;
  os?: string;
  osType?: string;
  pageNumber?: number;
  pageSize?: number;
  regionIdList?: string[];
  status?: number;
  type?: number;
  willDistribute?: boolean;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appUid: 'AppUid',
      imageName: 'ImageName',
      imageUid: 'ImageUid',
      os: 'Os',
      osType: 'OsType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionIdList: 'RegionIdList',
      status: 'Status',
      type: 'Type',
      willDistribute: 'WillDistribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appUid: 'string',
      imageName: 'string',
      imageUid: 'string',
      os: 'string',
      osType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionIdList: { 'type': 'array', 'itemType': 'string' },
      status: 'number',
      type: 'number',
      willDistribute: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppImageShrinkRequest extends $tea.Model {
  appName?: string;
  appUid?: string;
  imageName?: string;
  imageUid?: string;
  os?: string;
  osType?: string;
  pageNumber?: number;
  pageSize?: number;
  regionIdListShrink?: string;
  status?: number;
  type?: number;
  willDistribute?: boolean;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appUid: 'AppUid',
      imageName: 'ImageName',
      imageUid: 'ImageUid',
      os: 'Os',
      osType: 'OsType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionIdListShrink: 'RegionIdList',
      status: 'Status',
      type: 'Type',
      willDistribute: 'WillDistribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appUid: 'string',
      imageName: 'string',
      imageUid: 'string',
      os: 'string',
      osType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionIdListShrink: 'string',
      status: 'number',
      type: 'number',
      willDistribute: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppImageResponseBody extends $tea.Model {
  code?: string;
  data?: ListAppImageResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAppImageResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAppImageResponseBody;
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
      body: ListAppImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppImagesRequest extends $tea.Model {
  appName?: string;
  appUid?: string;
  imageUid?: string;
  os?: string;
  osType?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: number;
  type?: number;
  willDistribute?: boolean;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appUid: 'AppUid',
      imageUid: 'ImageUid',
      os: 'Os',
      osType: 'OsType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      type: 'Type',
      willDistribute: 'WillDistribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appUid: 'string',
      imageUid: 'string',
      os: 'string',
      osType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'number',
      type: 'number',
      willDistribute: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppImagesResponseBody extends $tea.Model {
  code?: string;
  data?: ListAppImagesResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAppImagesResponseBodyData },
      message: 'string',
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

export class ListAppImagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAppImagesResponseBody;
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
      body: ListAppImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppTagesRequest extends $tea.Model {
  appId?: number;
  appUid?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appUid: 'AppUid',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appUid: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppTagesResponseBody extends $tea.Model {
  code?: string;
  data?: ListAppTagesResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAppTagesResponseBodyData },
      message: 'string',
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

export class ListAppTagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAppTagesResponseBody;
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
      body: ListAppTagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppVersionAdaptorsRequest extends $tea.Model {
  id?: number;
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      versionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppVersionAdaptorsResponseBody extends $tea.Model {
  code?: string;
  data?: ListAppVersionAdaptorsResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAppVersionAdaptorsResponseBodyData },
      message: 'string',
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

export class ListAppVersionAdaptorsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAppVersionAdaptorsResponseBody;
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
      body: ListAppVersionAdaptorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppVersionsRequest extends $tea.Model {
  appUid?: string;
  name?: string;
  number?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appUid: 'AppUid',
      name: 'Name',
      number: 'Number',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUid: 'string',
      name: 'string',
      number: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppVersionsResponseBody extends $tea.Model {
  code?: string;
  data?: ListAppVersionsResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAppVersionsResponseBodyData },
      message: 'string',
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

export class ListAppVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAppVersionsResponseBody;
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
      body: ListAppVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageByAppIdRequest extends $tea.Model {
  appId?: number;
  imageId?: number;
  number?: number;
  pageNumber?: number;
  pageSize?: number;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      imageId: 'ImageId',
      number: 'Number',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      imageId: 'number',
      number: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageByAppIdResponseBody extends $tea.Model {
  code?: string;
  data?: ListImageByAppIdResponseBodyData;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListImageByAppIdResponseBodyData,
      message: 'string',
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

export class ListImageByAppIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListImageByAppIdResponseBody;
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
      body: ListImageByAppIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionIdsRequest extends $tea.Model {
  status?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionIdsResponseBody extends $tea.Model {
  code?: string;
  data?: string[];
  httpStatusCode?: number;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': 'string' },
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionIdsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRegionIdsResponseBody;
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
      body: ListRegionIdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWillDistributeAdaptorAppsRequest extends $tea.Model {
  appId?: number;
  appName?: string;
  os?: string;
  osType?: string;
  pageNumber?: string;
  pageSize?: string;
  runtimeEnv?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      os: 'Os',
      osType: 'OsType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      runtimeEnv: 'RuntimeEnv',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      os: 'string',
      osType: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      runtimeEnv: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWillDistributeAdaptorAppsResponseBody extends $tea.Model {
  code?: string;
  data?: ListWillDistributeAdaptorAppsResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListWillDistributeAdaptorAppsResponseBodyData },
      message: 'string',
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

export class ListWillDistributeAdaptorAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListWillDistributeAdaptorAppsResponseBody;
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
      body: ListWillDistributeAdaptorAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppImageRequest extends $tea.Model {
  name?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppImageResponseBody extends $tea.Model {
  code?: string;
  isSuccess?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyAppImageResponseBody;
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
      body: ModifyAppImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecreateImageRequest extends $tea.Model {
  imageUid?: string;
  static names(): { [key: string]: string } {
    return {
      imageUid: 'ImageUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecreateImageResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecreateImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecreateImageResponseBody;
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
      body: RecreateImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshImageDataTestResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshImageDataTestResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RefreshImageDataTestResponseBody;
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
      body: RefreshImageDataTestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCopyAppImageRequest extends $tea.Model {
  destinationRegionList?: string[];
  imgUid?: string;
  sourceRegion?: string;
  static names(): { [key: string]: string } {
    return {
      destinationRegionList: 'DestinationRegionList',
      imgUid: 'ImgUid',
      sourceRegion: 'SourceRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationRegionList: { 'type': 'array', 'itemType': 'string' },
      imgUid: 'string',
      sourceRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCopyAppImageShrinkRequest extends $tea.Model {
  destinationRegionListShrink?: string;
  imgUid?: string;
  sourceRegion?: string;
  static names(): { [key: string]: string } {
    return {
      destinationRegionListShrink: 'DestinationRegionList',
      imgUid: 'ImgUid',
      sourceRegion: 'SourceRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationRegionListShrink: 'string',
      imgUid: 'string',
      sourceRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCopyAppImageResponseBody extends $tea.Model {
  code?: string;
  data?: string[];
  httpStatusCode?: number;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': 'string' },
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCopyAppImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartCopyAppImageResponseBody;
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
      body: StartCopyAppImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppRequest extends $tea.Model {
  description?: string;
  iconUrl?: string;
  id?: number;
  name?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      iconUrl: 'IconUrl',
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      iconUrl: 'string',
      id: 'number',
      name: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAppResponseBody;
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
      body: UpdateAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppVersionRequest extends $tea.Model {
  appId?: number;
  id?: number;
  name?: string;
  number?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      id: 'Id',
      name: 'Name',
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      id: 'number',
      name: 'string',
      number: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppVersionResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAppVersionResponseBody;
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
      body: UpdateAppVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppAdaptorsResponseBodyData extends $tea.Model {
  loadType?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      loadType: 'LoadType',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadType: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBodyData extends $tea.Model {
  description?: string;
  gmtCreate?: string;
  gmtModified?: string;
  iconUrl?: string;
  name?: string;
  status?: number;
  tagList?: string;
  uid?: string;
  versionCount?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      iconUrl: 'IconUrl',
      name: 'Name',
      status: 'Status',
      tagList: 'TagList',
      uid: 'Uid',
      versionCount: 'VersionCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      iconUrl: 'string',
      name: 'string',
      status: 'number',
      tagList: 'string',
      uid: 'string',
      versionCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppAdaptorResponseBodyData extends $tea.Model {
  bitrate?: string;
  frameRate?: string;
  gmtCreate?: string;
  gmtModified?: string;
  hardware?: string;
  loadType?: string;
  mode?: string;
  os?: string;
  osType?: string;
  resolution?: string;
  status?: number;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      frameRate: 'FrameRate',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hardware: 'Hardware',
      loadType: 'LoadType',
      mode: 'Mode',
      os: 'Os',
      osType: 'OsType',
      resolution: 'Resolution',
      status: 'Status',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      frameRate: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      hardware: 'string',
      loadType: 'string',
      mode: 'string',
      os: 'string',
      osType: 'string',
      resolution: 'string',
      status: 'number',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppAdaptorConfigResponseBodyData extends $tea.Model {
  appType?: string;
  framerate?: string;
  loadType?: string;
  mode?: string;
  name?: string;
  resolution?: string;
  system?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      framerate: 'Framerate',
      loadType: 'LoadType',
      mode: 'Mode',
      name: 'Name',
      resolution: 'Resolution',
      system: 'System',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      framerate: 'string',
      loadType: 'string',
      mode: 'string',
      name: 'string',
      resolution: 'string',
      system: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppAdaptorReportResponseBodyData extends $tea.Model {
  adaptorUid?: string;
  appInstanceType?: string;
  appScript?: string;
  bandwidth?: string;
  bitrate?: string;
  frameRate?: string;
  instanceType?: string;
  loadType?: string;
  mode?: string;
  os?: string;
  osType?: string;
  resolution?: string;
  static names(): { [key: string]: string } {
    return {
      adaptorUid: 'AdaptorUid',
      appInstanceType: 'AppInstanceType',
      appScript: 'AppScript',
      bandwidth: 'Bandwidth',
      bitrate: 'Bitrate',
      frameRate: 'FrameRate',
      instanceType: 'InstanceType',
      loadType: 'LoadType',
      mode: 'Mode',
      os: 'Os',
      osType: 'OsType',
      resolution: 'Resolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptorUid: 'string',
      appInstanceType: 'string',
      appScript: 'string',
      bandwidth: 'string',
      bitrate: 'string',
      frameRate: 'string',
      instanceType: 'string',
      loadType: 'string',
      mode: 'string',
      os: 'string',
      osType: 'string',
      resolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppDownloadUrlResponseBodyData extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppImageResponseBodyData extends $tea.Model {
  adaptor?: string;
  adaptorId?: number;
  aliyunImageId?: string;
  apps?: string;
  delete?: number;
  distributeStatus?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  ossUrl?: string;
  status?: number;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      adaptor: 'Adaptor',
      adaptorId: 'AdaptorId',
      aliyunImageId: 'AliyunImageId',
      apps: 'Apps',
      delete: 'Delete',
      distributeStatus: 'DistributeStatus',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      ossUrl: 'OssUrl',
      status: 'Status',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptor: 'string',
      adaptorId: 'number',
      aliyunImageId: 'string',
      apps: 'string',
      delete: 'number',
      distributeStatus: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      ossUrl: 'string',
      status: 'number',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppImageStatusResponseBodyData extends $tea.Model {
  appImage?: string;
  edsAgentVersion?: string;
  progress?: string;
  region?: string;
  status?: number;
  sysImage?: string;
  static names(): { [key: string]: string } {
    return {
      appImage: 'AppImage',
      edsAgentVersion: 'Eds_agent_version',
      progress: 'Progress',
      region: 'Region',
      status: 'Status',
      sysImage: 'SysImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appImage: 'string',
      edsAgentVersion: 'string',
      progress: 'string',
      region: 'string',
      status: 'number',
      sysImage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppStsCredentialResponseBodyData extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  bucketName?: string;
  filePath?: string;
  ossPoint?: string;
  stsToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucketName: 'BucketName',
      filePath: 'FilePath',
      ossPoint: 'OssPoint',
      stsToken: 'StsToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      bucketName: 'string',
      filePath: 'string',
      ossPoint: 'string',
      stsToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppVersionResponseBodyData extends $tea.Model {
  adaptorComplishCount?: number;
  adaptorCount?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  listAdaptor?: string;
  name?: string;
  number?: string;
  os?: string;
  osType?: string;
  size?: number;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      adaptorComplishCount: 'AdaptorComplishCount',
      adaptorCount: 'AdaptorCount',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      listAdaptor: 'ListAdaptor',
      name: 'Name',
      number: 'Number',
      os: 'Os',
      osType: 'OsType',
      size: 'Size',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptorComplishCount: 'number',
      adaptorCount: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      listAdaptor: 'string',
      name: 'string',
      number: 'string',
      os: 'string',
      osType: 'string',
      size: 'number',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDownloadStsCredentialResponseBodyData extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  bucketName?: string;
  ossPoint?: string;
  stsToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucketName: 'BucketName',
      ossPoint: 'OssPoint',
      stsToken: 'StsToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      bucketName: 'string',
      ossPoint: 'string',
      stsToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIconDownloadUrlResponseBodyData extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIconStsCredentialResponseBodyData extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  bucketName?: string;
  filePath?: string;
  ossPoint?: string;
  stsToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucketName: 'BucketName',
      filePath: 'FilePath',
      ossPoint: 'OssPoint',
      stsToken: 'StsToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      bucketName: 'string',
      filePath: 'string',
      ossPoint: 'string',
      stsToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppResponseBodyData extends $tea.Model {
  description?: string;
  gmtCreate?: string;
  gmtModified?: string;
  iconUrl?: string;
  name?: string;
  status?: number;
  tagList?: string;
  type?: number;
  uid?: string;
  versionCount?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      iconUrl: 'IconUrl',
      name: 'Name',
      status: 'Status',
      tagList: 'TagList',
      type: 'Type',
      uid: 'Uid',
      versionCount: 'VersionCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      iconUrl: 'string',
      name: 'string',
      status: 'number',
      tagList: 'string',
      type: 'number',
      uid: 'string',
      versionCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppAdaptorsResponseBodyData extends $tea.Model {
  adaptorMessage?: string;
  appInstanceType?: string;
  appName?: string;
  appUid?: string;
  bitrate?: string;
  delete?: number;
  distributeStatus?: number;
  frameRate?: string;
  gmtCreate?: string;
  gmtModified?: string;
  hardware?: string;
  instanceType?: string;
  loadType?: string;
  mode?: string;
  os?: string;
  osType?: string;
  reportUrl?: number;
  resolution?: string;
  runtimeEnv?: number;
  status?: number;
  uid?: string;
  versionName?: string;
  versionNumber?: string;
  versionUid?: string;
  static names(): { [key: string]: string } {
    return {
      adaptorMessage: 'AdaptorMessage',
      appInstanceType: 'AppInstanceType',
      appName: 'AppName',
      appUid: 'AppUid',
      bitrate: 'Bitrate',
      delete: 'Delete',
      distributeStatus: 'DistributeStatus',
      frameRate: 'FrameRate',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hardware: 'Hardware',
      instanceType: 'InstanceType',
      loadType: 'LoadType',
      mode: 'Mode',
      os: 'Os',
      osType: 'OsType',
      reportUrl: 'ReportUrl',
      resolution: 'Resolution',
      runtimeEnv: 'RuntimeEnv',
      status: 'Status',
      uid: 'Uid',
      versionName: 'VersionName',
      versionNumber: 'VersionNumber',
      versionUid: 'VersionUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptorMessage: 'string',
      appInstanceType: 'string',
      appName: 'string',
      appUid: 'string',
      bitrate: 'string',
      delete: 'number',
      distributeStatus: 'number',
      frameRate: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      hardware: 'string',
      instanceType: 'string',
      loadType: 'string',
      mode: 'string',
      os: 'string',
      osType: 'string',
      reportUrl: 'number',
      resolution: 'string',
      runtimeEnv: 'number',
      status: 'number',
      uid: 'string',
      versionName: 'string',
      versionNumber: 'string',
      versionUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupResponseBodyData extends $tea.Model {
  adaptorCount?: number;
  description?: string;
  groupName?: string;
  loadType?: string;
  os?: string;
  osType?: string;
  status?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      adaptorCount: 'AdaptorCount',
      description: 'Description',
      groupName: 'GroupName',
      loadType: 'LoadType',
      os: 'Os',
      osType: 'OsType',
      status: 'Status',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptorCount: 'number',
      description: 'string',
      groupName: 'string',
      loadType: 'string',
      os: 'string',
      osType: 'string',
      status: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupAdaptorResponseBodyData extends $tea.Model {
  appName?: string;
  appVersionName?: string;
  appVersionNumber?: string;
  fileSize?: number;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appVersionName: 'AppVersionName',
      appVersionNumber: 'AppVersionNumber',
      fileSize: 'FileSize',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appVersionName: 'string',
      appVersionNumber: 'string',
      fileSize: 'number',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppGroupImagesResponseBodyData extends $tea.Model {
  adaptorCount?: number;
  groupName?: string;
  id?: number;
  imageUid?: string;
  loadType?: string;
  os?: string;
  osType?: string;
  status?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      adaptorCount: 'AdaptorCount',
      groupName: 'GroupName',
      id: 'Id',
      imageUid: 'ImageUid',
      loadType: 'LoadType',
      os: 'Os',
      osType: 'OsType',
      status: 'Status',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptorCount: 'number',
      groupName: 'string',
      id: 'number',
      imageUid: 'string',
      loadType: 'string',
      os: 'string',
      osType: 'string',
      status: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppImageResponseBodyDataAdaptor extends $tea.Model {
  adaptorMessage?: string;
  appIconUrl?: string;
  appId?: number;
  appInstanceType?: string;
  appName?: string;
  appScript?: string;
  appType?: number;
  appUid?: string;
  appVersionName?: string;
  appVersionNumber?: string;
  bitrate?: string;
  categoryId?: number;
  categoryType?: number;
  delete?: number;
  disActive?: boolean;
  distributeStatus?: number;
  fileSize?: number;
  frameRate?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  instanceType?: string;
  isLoginFree?: boolean;
  loadType?: string;
  loginConfig?: string;
  mode?: string;
  originAppType?: number;
  os?: string;
  osType?: string;
  platform?: string;
  resolution?: string;
  status?: number;
  subAppType?: string;
  uid?: string;
  versionId?: number;
  versionUid?: string;
  static names(): { [key: string]: string } {
    return {
      adaptorMessage: 'AdaptorMessage',
      appIconUrl: 'AppIconUrl',
      appId: 'AppId',
      appInstanceType: 'AppInstanceType',
      appName: 'AppName',
      appScript: 'AppScript',
      appType: 'AppType',
      appUid: 'AppUid',
      appVersionName: 'AppVersionName',
      appVersionNumber: 'AppVersionNumber',
      bitrate: 'Bitrate',
      categoryId: 'CategoryId',
      categoryType: 'CategoryType',
      delete: 'Delete',
      disActive: 'DisActive',
      distributeStatus: 'DistributeStatus',
      fileSize: 'FileSize',
      frameRate: 'FrameRate',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      instanceType: 'InstanceType',
      isLoginFree: 'IsLoginFree',
      loadType: 'LoadType',
      loginConfig: 'LoginConfig',
      mode: 'Mode',
      originAppType: 'OriginAppType',
      os: 'Os',
      osType: 'OsType',
      platform: 'Platform',
      resolution: 'Resolution',
      status: 'Status',
      subAppType: 'SubAppType',
      uid: 'Uid',
      versionId: 'VersionId',
      versionUid: 'VersionUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptorMessage: 'string',
      appIconUrl: 'string',
      appId: 'number',
      appInstanceType: 'string',
      appName: 'string',
      appScript: 'string',
      appType: 'number',
      appUid: 'string',
      appVersionName: 'string',
      appVersionNumber: 'string',
      bitrate: 'string',
      categoryId: 'number',
      categoryType: 'number',
      delete: 'number',
      disActive: 'boolean',
      distributeStatus: 'number',
      fileSize: 'number',
      frameRate: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      instanceType: 'string',
      isLoginFree: 'boolean',
      loadType: 'string',
      loginConfig: 'string',
      mode: 'string',
      originAppType: 'number',
      os: 'string',
      osType: 'string',
      platform: 'string',
      resolution: 'string',
      status: 'number',
      subAppType: 'string',
      uid: 'string',
      versionId: 'number',
      versionUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppImageResponseBodyDataAppAdaptorList extends $tea.Model {
  adaptorMessage?: string;
  appIconUrl?: string;
  appId?: number;
  appInstanceType?: string;
  appName?: string;
  appScript?: string;
  appType?: number;
  appUid?: string;
  appVersionName?: string;
  appVersionNumber?: string;
  bitrate?: string;
  categoryId?: number;
  categoryType?: number;
  delete?: number;
  disActive?: boolean;
  distributeStatus?: number;
  fileSize?: number;
  frameRate?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  instanceType?: string;
  isLoginFree?: boolean;
  loadType?: string;
  loginConfig?: string;
  mode?: string;
  originAppType?: number;
  os?: string;
  osType?: string;
  platform?: string;
  resolution?: string;
  status?: number;
  subAppType?: string;
  uid?: string;
  versionId?: number;
  versionUid?: string;
  static names(): { [key: string]: string } {
    return {
      adaptorMessage: 'AdaptorMessage',
      appIconUrl: 'AppIconUrl',
      appId: 'AppId',
      appInstanceType: 'AppInstanceType',
      appName: 'AppName',
      appScript: 'AppScript',
      appType: 'AppType',
      appUid: 'AppUid',
      appVersionName: 'AppVersionName',
      appVersionNumber: 'AppVersionNumber',
      bitrate: 'Bitrate',
      categoryId: 'CategoryId',
      categoryType: 'CategoryType',
      delete: 'Delete',
      disActive: 'DisActive',
      distributeStatus: 'DistributeStatus',
      fileSize: 'FileSize',
      frameRate: 'FrameRate',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      instanceType: 'InstanceType',
      isLoginFree: 'IsLoginFree',
      loadType: 'LoadType',
      loginConfig: 'LoginConfig',
      mode: 'Mode',
      originAppType: 'OriginAppType',
      os: 'Os',
      osType: 'OsType',
      platform: 'Platform',
      resolution: 'Resolution',
      status: 'Status',
      subAppType: 'SubAppType',
      uid: 'Uid',
      versionId: 'VersionId',
      versionUid: 'VersionUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptorMessage: 'string',
      appIconUrl: 'string',
      appId: 'number',
      appInstanceType: 'string',
      appName: 'string',
      appScript: 'string',
      appType: 'number',
      appUid: 'string',
      appVersionName: 'string',
      appVersionNumber: 'string',
      bitrate: 'string',
      categoryId: 'number',
      categoryType: 'number',
      delete: 'number',
      disActive: 'boolean',
      distributeStatus: 'number',
      fileSize: 'number',
      frameRate: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      instanceType: 'string',
      isLoginFree: 'boolean',
      loadType: 'string',
      loginConfig: 'string',
      mode: 'string',
      originAppType: 'number',
      os: 'string',
      osType: 'string',
      platform: 'string',
      resolution: 'string',
      status: 'number',
      subAppType: 'string',
      uid: 'string',
      versionId: 'number',
      versionUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppImageResponseBodyDataAppsTagList extends $tea.Model {
  appId?: number;
  appUid?: string;
  id?: number;
  name?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appUid: 'AppUid',
      id: 'Id',
      name: 'Name',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appUid: 'string',
      id: 'number',
      name: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppImageResponseBodyDataAppsVersionListListAdaptor extends $tea.Model {
  adaptorMessage?: string;
  appIconUrl?: string;
  appId?: number;
  appInstanceType?: string;
  appName?: string;
  appScript?: string;
  appType?: number;
  appUid?: string;
  appVersionName?: string;
  appVersionNumber?: string;
  bitrate?: string;
  categoryId?: number;
  categoryType?: number;
  delete?: number;
  disActive?: boolean;
  distributeStatus?: number;
  fileSize?: number;
  frameRate?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  instanceType?: string;
  isLoginFree?: boolean;
  loadType?: string;
  loginConfig?: string;
  mode?: string;
  originAppType?: number;
  os?: string;
  osType?: string;
  platform?: string;
  resolution?: string;
  status?: number;
  subAppType?: string;
  uid?: string;
  versionId?: number;
  versionUid?: string;
  static names(): { [key: string]: string } {
    return {
      adaptorMessage: 'AdaptorMessage',
      appIconUrl: 'AppIconUrl',
      appId: 'AppId',
      appInstanceType: 'AppInstanceType',
      appName: 'AppName',
      appScript: 'AppScript',
      appType: 'AppType',
      appUid: 'AppUid',
      appVersionName: 'AppVersionName',
      appVersionNumber: 'AppVersionNumber',
      bitrate: 'Bitrate',
      categoryId: 'CategoryId',
      categoryType: 'CategoryType',
      delete: 'Delete',
      disActive: 'DisActive',
      distributeStatus: 'DistributeStatus',
      fileSize: 'FileSize',
      frameRate: 'FrameRate',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      instanceType: 'InstanceType',
      isLoginFree: 'IsLoginFree',
      loadType: 'LoadType',
      loginConfig: 'LoginConfig',
      mode: 'Mode',
      originAppType: 'OriginAppType',
      os: 'Os',
      osType: 'OsType',
      platform: 'Platform',
      resolution: 'Resolution',
      status: 'Status',
      subAppType: 'SubAppType',
      uid: 'Uid',
      versionId: 'VersionId',
      versionUid: 'VersionUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptorMessage: 'string',
      appIconUrl: 'string',
      appId: 'number',
      appInstanceType: 'string',
      appName: 'string',
      appScript: 'string',
      appType: 'number',
      appUid: 'string',
      appVersionName: 'string',
      appVersionNumber: 'string',
      bitrate: 'string',
      categoryId: 'number',
      categoryType: 'number',
      delete: 'number',
      disActive: 'boolean',
      distributeStatus: 'number',
      fileSize: 'number',
      frameRate: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      instanceType: 'string',
      isLoginFree: 'boolean',
      loadType: 'string',
      loginConfig: 'string',
      mode: 'string',
      originAppType: 'number',
      os: 'string',
      osType: 'string',
      platform: 'string',
      resolution: 'string',
      status: 'number',
      subAppType: 'string',
      uid: 'string',
      versionId: 'number',
      versionUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppImageResponseBodyDataAppsVersionList extends $tea.Model {
  adaptorComplishCount?: number;
  adaptorCount?: number;
  fileName?: string;
  filePath?: string;
  fileRealName?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  listAdaptor?: ListAppImageResponseBodyDataAppsVersionListListAdaptor[];
  name?: string;
  number?: string;
  osType?: string;
  size?: number;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      adaptorComplishCount: 'AdaptorComplishCount',
      adaptorCount: 'AdaptorCount',
      fileName: 'FileName',
      filePath: 'FilePath',
      fileRealName: 'FileRealName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      listAdaptor: 'ListAdaptor',
      name: 'Name',
      number: 'Number',
      osType: 'OsType',
      size: 'Size',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptorComplishCount: 'number',
      adaptorCount: 'number',
      fileName: 'string',
      filePath: 'string',
      fileRealName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      listAdaptor: { 'type': 'array', 'itemType': ListAppImageResponseBodyDataAppsVersionListListAdaptor },
      name: 'string',
      number: 'string',
      osType: 'string',
      size: 'number',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppImageResponseBodyDataApps extends $tea.Model {
  description?: string;
  gmtCreate?: string;
  gmtModified?: string;
  iconUrl?: string;
  id?: number;
  name?: string;
  status?: number;
  tagList?: ListAppImageResponseBodyDataAppsTagList[];
  type?: number;
  uid?: string;
  versionCount?: number;
  versionList?: ListAppImageResponseBodyDataAppsVersionList[];
  versionName?: string;
  versionNumber?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      iconUrl: 'IconUrl',
      id: 'Id',
      name: 'Name',
      status: 'Status',
      tagList: 'TagList',
      type: 'Type',
      uid: 'Uid',
      versionCount: 'VersionCount',
      versionList: 'VersionList',
      versionName: 'VersionName',
      versionNumber: 'VersionNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      iconUrl: 'string',
      id: 'number',
      name: 'string',
      status: 'number',
      tagList: { 'type': 'array', 'itemType': ListAppImageResponseBodyDataAppsTagList },
      type: 'number',
      uid: 'string',
      versionCount: 'number',
      versionList: { 'type': 'array', 'itemType': ListAppImageResponseBodyDataAppsVersionList },
      versionName: 'string',
      versionNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppImageResponseBodyDataImageConfigDTOS extends $tea.Model {
  appImage?: string;
  region?: string;
  sysImage?: string;
  static names(): { [key: string]: string } {
    return {
      appImage: 'AppImage',
      region: 'Region',
      sysImage: 'SysImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appImage: 'string',
      region: 'string',
      sysImage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppImageResponseBodyData extends $tea.Model {
  adaptor?: ListAppImageResponseBodyDataAdaptor;
  adaptorId?: number;
  adaptorUid?: string;
  aliyunImageConfig?: string;
  aliyunImageId?: string;
  aliyunuid?: number;
  appAdaptorList?: ListAppImageResponseBodyDataAppAdaptorList[];
  appGroupId?: number;
  appGroupUid?: string;
  appName?: string;
  appScript?: string;
  appType?: number;
  appUid?: string;
  appVersionName?: string;
  appVersionNumber?: string;
  apps?: ListAppImageResponseBodyDataApps[];
  delete?: number;
  distributeStatus?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  imageConfigDTOS?: ListAppImageResponseBodyDataImageConfigDTOS[];
  loadType?: string;
  name?: string;
  os?: string;
  osType?: string;
  ossUrl?: string;
  otaStatus?: number;
  otaVersion?: string;
  platform?: string;
  regionStatus?: number;
  status?: number;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      adaptor: 'Adaptor',
      adaptorId: 'AdaptorId',
      adaptorUid: 'AdaptorUid',
      aliyunImageConfig: 'AliyunImageConfig',
      aliyunImageId: 'AliyunImageId',
      aliyunuid: 'Aliyunuid',
      appAdaptorList: 'AppAdaptorList',
      appGroupId: 'AppGroupId',
      appGroupUid: 'AppGroupUid',
      appName: 'AppName',
      appScript: 'AppScript',
      appType: 'AppType',
      appUid: 'AppUid',
      appVersionName: 'AppVersionName',
      appVersionNumber: 'AppVersionNumber',
      apps: 'Apps',
      delete: 'Delete',
      distributeStatus: 'DistributeStatus',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      imageConfigDTOS: 'ImageConfigDTOS',
      loadType: 'LoadType',
      name: 'Name',
      os: 'Os',
      osType: 'OsType',
      ossUrl: 'OssUrl',
      otaStatus: 'OtaStatus',
      otaVersion: 'OtaVersion',
      platform: 'Platform',
      regionStatus: 'RegionStatus',
      status: 'Status',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptor: ListAppImageResponseBodyDataAdaptor,
      adaptorId: 'number',
      adaptorUid: 'string',
      aliyunImageConfig: 'string',
      aliyunImageId: 'string',
      aliyunuid: 'number',
      appAdaptorList: { 'type': 'array', 'itemType': ListAppImageResponseBodyDataAppAdaptorList },
      appGroupId: 'number',
      appGroupUid: 'string',
      appName: 'string',
      appScript: 'string',
      appType: 'number',
      appUid: 'string',
      appVersionName: 'string',
      appVersionNumber: 'string',
      apps: { 'type': 'array', 'itemType': ListAppImageResponseBodyDataApps },
      delete: 'number',
      distributeStatus: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      imageConfigDTOS: { 'type': 'array', 'itemType': ListAppImageResponseBodyDataImageConfigDTOS },
      loadType: 'string',
      name: 'string',
      os: 'string',
      osType: 'string',
      ossUrl: 'string',
      otaStatus: 'number',
      otaVersion: 'string',
      platform: 'string',
      regionStatus: 'number',
      status: 'number',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppImagesResponseBodyData extends $tea.Model {
  adaptorUid?: string;
  appName?: string;
  appUid?: string;
  appVersionName?: string;
  appVersionNumber?: string;
  loadType?: string;
  name?: string;
  os?: string;
  osType?: string;
  status?: number;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      adaptorUid: 'AdaptorUid',
      appName: 'AppName',
      appUid: 'AppUid',
      appVersionName: 'AppVersionName',
      appVersionNumber: 'AppVersionNumber',
      loadType: 'LoadType',
      name: 'Name',
      os: 'Os',
      osType: 'OsType',
      status: 'Status',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptorUid: 'string',
      appName: 'string',
      appUid: 'string',
      appVersionName: 'string',
      appVersionNumber: 'string',
      loadType: 'string',
      name: 'string',
      os: 'string',
      osType: 'string',
      status: 'number',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppTagesResponseBodyData extends $tea.Model {
  name?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppVersionAdaptorsResponseBodyData extends $tea.Model {
  bitrate?: string;
  delete?: number;
  frameRate?: string;
  gmtCreate?: string;
  gmtModified?: string;
  hardware?: string;
  id?: number;
  mode?: string;
  osType?: string;
  reportUrl?: number;
  resolution?: string;
  runtimeEnv?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      delete: 'Delete',
      frameRate: 'FrameRate',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hardware: 'Hardware',
      id: 'Id',
      mode: 'Mode',
      osType: 'OsType',
      reportUrl: 'ReportUrl',
      resolution: 'Resolution',
      runtimeEnv: 'RuntimeEnv',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      delete: 'number',
      frameRate: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      hardware: 'string',
      id: 'number',
      mode: 'string',
      osType: 'string',
      reportUrl: 'number',
      resolution: 'string',
      runtimeEnv: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppVersionsResponseBodyData extends $tea.Model {
  adaptorComplishCount?: number;
  adaptorCount?: number;
  gmtCreate?: string;
  gmtModified?: string;
  listAdaptor?: string;
  name?: string;
  number?: string;
  os?: string;
  osType?: string;
  size?: number;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      adaptorComplishCount: 'AdaptorComplishCount',
      adaptorCount: 'AdaptorCount',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      listAdaptor: 'ListAdaptor',
      name: 'Name',
      number: 'Number',
      os: 'Os',
      osType: 'OsType',
      size: 'Size',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptorComplishCount: 'number',
      adaptorCount: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      listAdaptor: 'string',
      name: 'string',
      number: 'string',
      os: 'string',
      osType: 'string',
      size: 'number',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageByAppIdResponseBodyDataImageDOList extends $tea.Model {
  adaptorId?: number;
  frameRate?: string;
  hardware?: string;
  id?: string;
  imageUid?: string;
  number?: string;
  os?: string;
  osType?: string;
  resolution?: string;
  status?: number;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      adaptorId: 'AdaptorId',
      frameRate: 'FrameRate',
      hardware: 'Hardware',
      id: 'Id',
      imageUid: 'ImageUid',
      number: 'Number',
      os: 'Os',
      osType: 'OsType',
      resolution: 'Resolution',
      status: 'Status',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptorId: 'number',
      frameRate: 'string',
      hardware: 'string',
      id: 'string',
      imageUid: 'string',
      number: 'string',
      os: 'string',
      osType: 'string',
      resolution: 'string',
      status: 'number',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageByAppIdResponseBodyDataTagList extends $tea.Model {
  appId?: string;
  id?: string;
  name?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      id: 'string',
      name: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageByAppIdResponseBodyData extends $tea.Model {
  appId?: number;
  appName?: string;
  description?: string;
  imageDOList?: ListImageByAppIdResponseBodyDataImageDOList[];
  tagList?: ListImageByAppIdResponseBodyDataTagList[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      description: 'Description',
      imageDOList: 'ImageDOList',
      tagList: 'TagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      description: 'string',
      imageDOList: { 'type': 'array', 'itemType': ListImageByAppIdResponseBodyDataImageDOList },
      tagList: { 'type': 'array', 'itemType': ListImageByAppIdResponseBodyDataTagList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWillDistributeAdaptorAppsResponseBodyData extends $tea.Model {
  adaptorUid?: number;
  appId?: number;
  appName?: string;
  appUid?: number;
  bitrate?: string;
  description?: string;
  frameRate?: string;
  gmtCreate?: string;
  gmtModified?: string;
  hardware?: string;
  iconUrl?: string;
  imageUid?: string;
  mode?: string;
  os?: string;
  osType?: string;
  reportUrl?: string;
  resolution?: string;
  runtimeEnv?: string;
  status?: number;
  type?: number;
  versionName?: string;
  versionNumber?: string;
  versionUid?: number;
  static names(): { [key: string]: string } {
    return {
      adaptorUid: 'AdaptorUid',
      appId: 'AppId',
      appName: 'AppName',
      appUid: 'AppUid',
      bitrate: 'Bitrate',
      description: 'Description',
      frameRate: 'FrameRate',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hardware: 'Hardware',
      iconUrl: 'IconUrl',
      imageUid: 'ImageUid',
      mode: 'Mode',
      os: 'Os',
      osType: 'OsType',
      reportUrl: 'ReportUrl',
      resolution: 'Resolution',
      runtimeEnv: 'RuntimeEnv',
      status: 'Status',
      type: 'Type',
      versionName: 'VersionName',
      versionNumber: 'VersionNumber',
      versionUid: 'VersionUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptorUid: 'number',
      appId: 'number',
      appName: 'string',
      appUid: 'number',
      bitrate: 'string',
      description: 'string',
      frameRate: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      hardware: 'string',
      iconUrl: 'string',
      imageUid: 'string',
      mode: 'string',
      os: 'string',
      osType: 'string',
      reportUrl: 'string',
      resolution: 'string',
      runtimeEnv: 'string',
      status: 'number',
      type: 'number',
      versionName: 'string',
      versionNumber: 'string',
      versionUid: 'number',
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
    this._endpoint = this.getEndpoint("ecd", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async countAppVersionWithOptions(request: CountAppVersionRequest, runtime: $Util.RuntimeOptions): Promise<CountAppVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CountAppVersion",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CountAppVersionResponse>(await this.callApi(params, req, runtime), new CountAppVersionResponse({}));
  }

  async countAppVersion(request: CountAppVersionRequest): Promise<CountAppVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.countAppVersionWithOptions(request, runtime);
  }

  async createAppWithOptions(request: CreateAppRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.iconUrl)) {
      query["IconUrl"] = request.iconUrl;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.tagList)) {
      query["TagList"] = request.tagList;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateApp",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppResponse>(await this.callApi(params, req, runtime), new CreateAppResponse({}));
  }

  async createApp(request: CreateAppRequest): Promise<CreateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppWithOptions(request, runtime);
  }

  async createAppAdaptorWithOptions(request: CreateAppAdaptorRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppAdaptorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.frameRate)) {
      query["FrameRate"] = request.frameRate;
    }

    if (!Util.isUnset(request.loadType)) {
      query["LoadType"] = request.loadType;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.os)) {
      query["Os"] = request.os;
    }

    if (!Util.isUnset(request.resolution)) {
      query["Resolution"] = request.resolution;
    }

    if (!Util.isUnset(request.versionUid)) {
      query["VersionUid"] = request.versionUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppAdaptor",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppAdaptorResponse>(await this.callApi(params, req, runtime), new CreateAppAdaptorResponse({}));
  }

  async createAppAdaptor(request: CreateAppAdaptorRequest): Promise<CreateAppAdaptorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppAdaptorWithOptions(request, runtime);
  }

  async createAppAdaptorImageWithOptions(request: CreateAppAdaptorImageRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppAdaptorImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adaptorUid)) {
      query["AdaptorUid"] = request.adaptorUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppAdaptorImage",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppAdaptorImageResponse>(await this.callApi(params, req, runtime), new CreateAppAdaptorImageResponse({}));
  }

  async createAppAdaptorImage(request: CreateAppAdaptorImageRequest): Promise<CreateAppAdaptorImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppAdaptorImageWithOptions(request, runtime);
  }

  async createAppAdaptorsWithOptions(request: CreateAppAdaptorsRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppAdaptorsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.frameRate)) {
      query["FrameRate"] = request.frameRate;
    }

    if (!Util.isUnset(request.loadTypeList)) {
      query["LoadTypeList"] = request.loadTypeList;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.os)) {
      query["Os"] = request.os;
    }

    if (!Util.isUnset(request.resolution)) {
      query["Resolution"] = request.resolution;
    }

    if (!Util.isUnset(request.versionUid)) {
      query["VersionUid"] = request.versionUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppAdaptors",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppAdaptorsResponse>(await this.callApi(params, req, runtime), new CreateAppAdaptorsResponse({}));
  }

  async createAppAdaptors(request: CreateAppAdaptorsRequest): Promise<CreateAppAdaptorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppAdaptorsWithOptions(request, runtime);
  }

  async createAppGroupWithOptions(request: CreateAppGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adaptorUidList)) {
      query["AdaptorUidList"] = request.adaptorUidList;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppGroup",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppGroupResponse>(await this.callApi(params, req, runtime), new CreateAppGroupResponse({}));
  }

  async createAppGroup(request: CreateAppGroupRequest): Promise<CreateAppGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppGroupWithOptions(request, runtime);
  }

  async createAppGroupImageWithOptions(request: CreateAppGroupImageRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppGroupImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appGroupUid)) {
      query["AppGroupUid"] = request.appGroupUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppGroupImage",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppGroupImageResponse>(await this.callApi(params, req, runtime), new CreateAppGroupImageResponse({}));
  }

  async createAppGroupImage(request: CreateAppGroupImageRequest): Promise<CreateAppGroupImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppGroupImageWithOptions(request, runtime);
  }

  async createAppImageWithOptions(request: CreateAppImageRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adaptorUidList)) {
      query["AdaptorUidList"] = request.adaptorUidList;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppImage",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppImageResponse>(await this.callApi(params, req, runtime), new CreateAppImageResponse({}));
  }

  async createAppImage(request: CreateAppImageRequest): Promise<CreateAppImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppImageWithOptions(request, runtime);
  }

  async createAppImageConfigWithOptions(request: CreateAppImageConfigRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppImageConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imgUid)) {
      body["ImgUid"] = request.imgUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppImageConfig",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppImageConfigResponse>(await this.callApi(params, req, runtime), new CreateAppImageConfigResponse({}));
  }

  async createAppImageConfig(request: CreateAppImageConfigRequest): Promise<CreateAppImageConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppImageConfigWithOptions(request, runtime);
  }

  async createAppTagWithOptions(request: CreateAppTagRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppTagResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appUid)) {
      query["AppUid"] = request.appUid;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppTag",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppTagResponse>(await this.callApi(params, req, runtime), new CreateAppTagResponse({}));
  }

  async createAppTag(request: CreateAppTagRequest): Promise<CreateAppTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppTagWithOptions(request, runtime);
  }

  async createAppVersionWithOptions(request: CreateAppVersionRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appUid)) {
      query["AppUid"] = request.appUid;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!Util.isUnset(request.fileRealName)) {
      query["FileRealName"] = request.fileRealName;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.number)) {
      query["Number"] = request.number;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppVersion",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppVersionResponse>(await this.callApi(params, req, runtime), new CreateAppVersionResponse({}));
  }

  async createAppVersion(request: CreateAppVersionRequest): Promise<CreateAppVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppVersionWithOptions(request, runtime);
  }

  async createAppVersionAdaptorWithOptions(tmpReq: CreateAppVersionAdaptorRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppVersionAdaptorResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateAppVersionAdaptorShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extensions)) {
      request.extensionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extensions, "Extensions", "json");
    }

    let query = { };
    if (!Util.isUnset(request.computeType)) {
      query["ComputeType"] = request.computeType;
    }

    if (!Util.isUnset(request.extensionsShrink)) {
      query["Extensions"] = request.extensionsShrink;
    }

    if (!Util.isUnset(request.frameRate)) {
      query["FrameRate"] = request.frameRate;
    }

    if (!Util.isUnset(request.hardware)) {
      query["Hardware"] = request.hardware;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.os)) {
      query["Os"] = request.os;
    }

    if (!Util.isUnset(request.resolution)) {
      query["Resolution"] = request.resolution;
    }

    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppVersionAdaptor",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppVersionAdaptorResponse>(await this.callApi(params, req, runtime), new CreateAppVersionAdaptorResponse({}));
  }

  async createAppVersionAdaptor(request: CreateAppVersionAdaptorRequest): Promise<CreateAppVersionAdaptorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppVersionAdaptorWithOptions(request, runtime);
  }

  async deleteAppWithOptions(request: DeleteAppRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApp",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppResponse>(await this.callApi(params, req, runtime), new DeleteAppResponse({}));
  }

  async deleteApp(request: DeleteAppRequest): Promise<DeleteAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppWithOptions(request, runtime);
  }

  async deleteAppAdaptorWithOptions(request: DeleteAppAdaptorRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppAdaptorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAppAdaptor",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppAdaptorResponse>(await this.callApi(params, req, runtime), new DeleteAppAdaptorResponse({}));
  }

  async deleteAppAdaptor(request: DeleteAppAdaptorRequest): Promise<DeleteAppAdaptorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppAdaptorWithOptions(request, runtime);
  }

  async deleteAppGroupWithOptions(request: DeleteAppGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAppGroup",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppGroupResponse>(await this.callApi(params, req, runtime), new DeleteAppGroupResponse({}));
  }

  async deleteAppGroup(request: DeleteAppGroupRequest): Promise<DeleteAppGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppGroupWithOptions(request, runtime);
  }

  async deleteAppGroupImageWithOptions(request: DeleteAppGroupImageRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppGroupImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAppGroupImage",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppGroupImageResponse>(await this.callApi(params, req, runtime), new DeleteAppGroupImageResponse({}));
  }

  async deleteAppGroupImage(request: DeleteAppGroupImageRequest): Promise<DeleteAppGroupImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppGroupImageWithOptions(request, runtime);
  }

  async deleteAppImageWithOptions(request: DeleteAppImageRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppImageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.uid)) {
      body["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAppImage",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppImageResponse>(await this.callApi(params, req, runtime), new DeleteAppImageResponse({}));
  }

  async deleteAppImage(request: DeleteAppImageRequest): Promise<DeleteAppImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppImageWithOptions(request, runtime);
  }

  async deleteAppTagWithOptions(request: DeleteAppTagRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppTagResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAppTag",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppTagResponse>(await this.callApi(params, req, runtime), new DeleteAppTagResponse({}));
  }

  async deleteAppTag(request: DeleteAppTagRequest): Promise<DeleteAppTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppTagWithOptions(request, runtime);
  }

  async deleteAppVersionWithOptions(request: DeleteAppVersionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAppVersion",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppVersionResponse>(await this.callApi(params, req, runtime), new DeleteAppVersionResponse({}));
  }

  async deleteAppVersion(request: DeleteAppVersionRequest): Promise<DeleteAppVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppVersionWithOptions(request, runtime);
  }

  async deleteAppVersionAdaptorWithOptions(tmpReq: DeleteAppVersionAdaptorRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppVersionAdaptorResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteAppVersionAdaptorShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.ids)) {
      request.idsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ids, "Ids", "json");
    }

    let query = { };
    if (!Util.isUnset(request.idsShrink)) {
      query["Ids"] = request.idsShrink;
    }

    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAppVersionAdaptor",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppVersionAdaptorResponse>(await this.callApi(params, req, runtime), new DeleteAppVersionAdaptorResponse({}));
  }

  async deleteAppVersionAdaptor(request: DeleteAppVersionAdaptorRequest): Promise<DeleteAppVersionAdaptorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppVersionAdaptorWithOptions(request, runtime);
  }

  async getAppWithOptions(request: GetAppRequest, runtime: $Util.RuntimeOptions): Promise<GetAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetApp",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppResponse>(await this.callApi(params, req, runtime), new GetAppResponse({}));
  }

  async getApp(request: GetAppRequest): Promise<GetAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppWithOptions(request, runtime);
  }

  async getAppAdaptorWithOptions(request: GetAppAdaptorRequest, runtime: $Util.RuntimeOptions): Promise<GetAppAdaptorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAppAdaptor",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppAdaptorResponse>(await this.callApi(params, req, runtime), new GetAppAdaptorResponse({}));
  }

  async getAppAdaptor(request: GetAppAdaptorRequest): Promise<GetAppAdaptorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppAdaptorWithOptions(request, runtime);
  }

  async getAppAdaptorConfigWithOptions(runtime: $Util.RuntimeOptions): Promise<GetAppAdaptorConfigResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetAppAdaptorConfig",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppAdaptorConfigResponse>(await this.callApi(params, req, runtime), new GetAppAdaptorConfigResponse({}));
  }

  async getAppAdaptorConfig(): Promise<GetAppAdaptorConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppAdaptorConfigWithOptions(runtime);
  }

  async getAppAdaptorReportWithOptions(request: GetAppAdaptorReportRequest, runtime: $Util.RuntimeOptions): Promise<GetAppAdaptorReportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adaptorUid)) {
      query["AdaptorUid"] = request.adaptorUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAppAdaptorReport",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppAdaptorReportResponse>(await this.callApi(params, req, runtime), new GetAppAdaptorReportResponse({}));
  }

  async getAppAdaptorReport(request: GetAppAdaptorReportRequest): Promise<GetAppAdaptorReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppAdaptorReportWithOptions(request, runtime);
  }

  async getAppDownloadUrlWithOptions(request: GetAppDownloadUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetAppDownloadUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAppDownloadUrl",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppDownloadUrlResponse>(await this.callApi(params, req, runtime), new GetAppDownloadUrlResponse({}));
  }

  async getAppDownloadUrl(request: GetAppDownloadUrlRequest): Promise<GetAppDownloadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppDownloadUrlWithOptions(request, runtime);
  }

  async getAppImageWithOptions(request: GetAppImageRequest, runtime: $Util.RuntimeOptions): Promise<GetAppImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAppImage",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppImageResponse>(await this.callApi(params, req, runtime), new GetAppImageResponse({}));
  }

  async getAppImage(request: GetAppImageRequest): Promise<GetAppImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppImageWithOptions(request, runtime);
  }

  async getAppImageStatusWithOptions(request: GetAppImageStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetAppImageStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageUid)) {
      body["ImageUid"] = request.imageUid;
    }

    if (!Util.isUnset(request.osType)) {
      body["OsType"] = request.osType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetAppImageStatus",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppImageStatusResponse>(await this.callApi(params, req, runtime), new GetAppImageStatusResponse({}));
  }

  async getAppImageStatus(request: GetAppImageStatusRequest): Promise<GetAppImageStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppImageStatusWithOptions(request, runtime);
  }

  async getAppStsCredentialWithOptions(request: GetAppStsCredentialRequest, runtime: $Util.RuntimeOptions): Promise<GetAppStsCredentialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAppStsCredential",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppStsCredentialResponse>(await this.callApi(params, req, runtime), new GetAppStsCredentialResponse({}));
  }

  async getAppStsCredential(request: GetAppStsCredentialRequest): Promise<GetAppStsCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppStsCredentialWithOptions(request, runtime);
  }

  async getAppVersionWithOptions(request: GetAppVersionRequest, runtime: $Util.RuntimeOptions): Promise<GetAppVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAppVersion",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppVersionResponse>(await this.callApi(params, req, runtime), new GetAppVersionResponse({}));
  }

  async getAppVersion(request: GetAppVersionRequest): Promise<GetAppVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppVersionWithOptions(request, runtime);
  }

  async getCreateGroupFlagWithOptions(runtime: $Util.RuntimeOptions): Promise<GetCreateGroupFlagResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetCreateGroupFlag",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCreateGroupFlagResponse>(await this.callApi(params, req, runtime), new GetCreateGroupFlagResponse({}));
  }

  async getCreateGroupFlag(): Promise<GetCreateGroupFlagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCreateGroupFlagWithOptions(runtime);
  }

  async getDownloadStsCredentialWithOptions(request: GetDownloadStsCredentialRequest, runtime: $Util.RuntimeOptions): Promise<GetDownloadStsCredentialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDownloadStsCredential",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDownloadStsCredentialResponse>(await this.callApi(params, req, runtime), new GetDownloadStsCredentialResponse({}));
  }

  async getDownloadStsCredential(request: GetDownloadStsCredentialRequest): Promise<GetDownloadStsCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDownloadStsCredentialWithOptions(request, runtime);
  }

  async getIconDownloadUrlWithOptions(request: GetIconDownloadUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetIconDownloadUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetIconDownloadUrl",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetIconDownloadUrlResponse>(await this.callApi(params, req, runtime), new GetIconDownloadUrlResponse({}));
  }

  async getIconDownloadUrl(request: GetIconDownloadUrlRequest): Promise<GetIconDownloadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIconDownloadUrlWithOptions(request, runtime);
  }

  async getIconStsCredentialWithOptions(request: GetIconStsCredentialRequest, runtime: $Util.RuntimeOptions): Promise<GetIconStsCredentialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetIconStsCredential",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetIconStsCredentialResponse>(await this.callApi(params, req, runtime), new GetIconStsCredentialResponse({}));
  }

  async getIconStsCredential(request: GetIconStsCredentialRequest): Promise<GetIconStsCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIconStsCredentialWithOptions(request, runtime);
  }

  async listAppWithOptions(request: ListAppRequest, runtime: $Util.RuntimeOptions): Promise<ListAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApp",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppResponse>(await this.callApi(params, req, runtime), new ListAppResponse({}));
  }

  async listApp(request: ListAppRequest): Promise<ListAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppWithOptions(request, runtime);
  }

  async listAppAdaptorsWithOptions(request: ListAppAdaptorsRequest, runtime: $Util.RuntimeOptions): Promise<ListAppAdaptorsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    if (!Util.isUnset(request.versionUid)) {
      query["VersionUid"] = request.versionUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAppAdaptors",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppAdaptorsResponse>(await this.callApi(params, req, runtime), new ListAppAdaptorsResponse({}));
  }

  async listAppAdaptors(request: ListAppAdaptorsRequest): Promise<ListAppAdaptorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppAdaptorsWithOptions(request, runtime);
  }

  async listAppGroupWithOptions(request: ListAppGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListAppGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAppGroup",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppGroupResponse>(await this.callApi(params, req, runtime), new ListAppGroupResponse({}));
  }

  async listAppGroup(request: ListAppGroupRequest): Promise<ListAppGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppGroupWithOptions(request, runtime);
  }

  async listAppGroupAdaptorWithOptions(request: ListAppGroupAdaptorRequest, runtime: $Util.RuntimeOptions): Promise<ListAppGroupAdaptorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.groupUid)) {
      query["GroupUid"] = request.groupUid;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAppGroupAdaptor",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppGroupAdaptorResponse>(await this.callApi(params, req, runtime), new ListAppGroupAdaptorResponse({}));
  }

  async listAppGroupAdaptor(request: ListAppGroupAdaptorRequest): Promise<ListAppGroupAdaptorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppGroupAdaptorWithOptions(request, runtime);
  }

  async listAppGroupImagesWithOptions(request: ListAppGroupImagesRequest, runtime: $Util.RuntimeOptions): Promise<ListAppGroupImagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appGroupName)) {
      query["AppGroupName"] = request.appGroupName;
    }

    if (!Util.isUnset(request.appGroupUid)) {
      query["AppGroupUid"] = request.appGroupUid;
    }

    if (!Util.isUnset(request.imageUid)) {
      query["ImageUid"] = request.imageUid;
    }

    if (!Util.isUnset(request.os)) {
      query["Os"] = request.os;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.willDistribute)) {
      query["WillDistribute"] = request.willDistribute;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAppGroupImages",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppGroupImagesResponse>(await this.callApi(params, req, runtime), new ListAppGroupImagesResponse({}));
  }

  async listAppGroupImages(request: ListAppGroupImagesRequest): Promise<ListAppGroupImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppGroupImagesWithOptions(request, runtime);
  }

  async listAppImageWithOptions(tmpReq: ListAppImageRequest, runtime: $Util.RuntimeOptions): Promise<ListAppImageResponse> {
    Util.validateModel(tmpReq);
    let request = new ListAppImageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.regionIdList)) {
      request.regionIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.regionIdList, "RegionIdList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.regionIdListShrink)) {
      query["RegionIdList"] = request.regionIdListShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.appUid)) {
      body["AppUid"] = request.appUid;
    }

    if (!Util.isUnset(request.imageName)) {
      body["ImageName"] = request.imageName;
    }

    if (!Util.isUnset(request.imageUid)) {
      body["ImageUid"] = request.imageUid;
    }

    if (!Util.isUnset(request.os)) {
      body["Os"] = request.os;
    }

    if (!Util.isUnset(request.osType)) {
      body["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.willDistribute)) {
      body["WillDistribute"] = request.willDistribute;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListAppImage",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppImageResponse>(await this.callApi(params, req, runtime), new ListAppImageResponse({}));
  }

  async listAppImage(request: ListAppImageRequest): Promise<ListAppImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppImageWithOptions(request, runtime);
  }

  async listAppImagesWithOptions(request: ListAppImagesRequest, runtime: $Util.RuntimeOptions): Promise<ListAppImagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.appUid)) {
      query["AppUid"] = request.appUid;
    }

    if (!Util.isUnset(request.imageUid)) {
      query["ImageUid"] = request.imageUid;
    }

    if (!Util.isUnset(request.os)) {
      query["Os"] = request.os;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.willDistribute)) {
      query["WillDistribute"] = request.willDistribute;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAppImages",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppImagesResponse>(await this.callApi(params, req, runtime), new ListAppImagesResponse({}));
  }

  async listAppImages(request: ListAppImagesRequest): Promise<ListAppImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppImagesWithOptions(request, runtime);
  }

  async listAppTagesWithOptions(request: ListAppTagesRequest, runtime: $Util.RuntimeOptions): Promise<ListAppTagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appUid)) {
      query["AppUid"] = request.appUid;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAppTages",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppTagesResponse>(await this.callApi(params, req, runtime), new ListAppTagesResponse({}));
  }

  async listAppTages(request: ListAppTagesRequest): Promise<ListAppTagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppTagesWithOptions(request, runtime);
  }

  async listAppVersionAdaptorsWithOptions(request: ListAppVersionAdaptorsRequest, runtime: $Util.RuntimeOptions): Promise<ListAppVersionAdaptorsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAppVersionAdaptors",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppVersionAdaptorsResponse>(await this.callApi(params, req, runtime), new ListAppVersionAdaptorsResponse({}));
  }

  async listAppVersionAdaptors(request: ListAppVersionAdaptorsRequest): Promise<ListAppVersionAdaptorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppVersionAdaptorsWithOptions(request, runtime);
  }

  async listAppVersionsWithOptions(request: ListAppVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListAppVersionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appUid)) {
      query["AppUid"] = request.appUid;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.number)) {
      query["Number"] = request.number;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAppVersions",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppVersionsResponse>(await this.callApi(params, req, runtime), new ListAppVersionsResponse({}));
  }

  async listAppVersions(request: ListAppVersionsRequest): Promise<ListAppVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppVersionsWithOptions(request, runtime);
  }

  async listImageByAppIdWithOptions(request: ListImageByAppIdRequest, runtime: $Util.RuntimeOptions): Promise<ListImageByAppIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.number)) {
      query["Number"] = request.number;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListImageByAppId",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListImageByAppIdResponse>(await this.callApi(params, req, runtime), new ListImageByAppIdResponse({}));
  }

  async listImageByAppId(request: ListImageByAppIdRequest): Promise<ListImageByAppIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listImageByAppIdWithOptions(request, runtime);
  }

  async listRegionIdsWithOptions(request: ListRegionIdsRequest, runtime: $Util.RuntimeOptions): Promise<ListRegionIdsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListRegionIds",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRegionIdsResponse>(await this.callApi(params, req, runtime), new ListRegionIdsResponse({}));
  }

  async listRegionIds(request: ListRegionIdsRequest): Promise<ListRegionIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRegionIdsWithOptions(request, runtime);
  }

  async listWillDistributeAdaptorAppsWithOptions(request: ListWillDistributeAdaptorAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListWillDistributeAdaptorAppsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.os)) {
      query["Os"] = request.os;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.runtimeEnv)) {
      query["RuntimeEnv"] = request.runtimeEnv;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWillDistributeAdaptorApps",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWillDistributeAdaptorAppsResponse>(await this.callApi(params, req, runtime), new ListWillDistributeAdaptorAppsResponse({}));
  }

  async listWillDistributeAdaptorApps(request: ListWillDistributeAdaptorAppsRequest): Promise<ListWillDistributeAdaptorAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWillDistributeAdaptorAppsWithOptions(request, runtime);
  }

  async modifyAppImageWithOptions(request: ModifyAppImageRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAppImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAppImage",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAppImageResponse>(await this.callApi(params, req, runtime), new ModifyAppImageResponse({}));
  }

  async modifyAppImage(request: ModifyAppImageRequest): Promise<ModifyAppImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAppImageWithOptions(request, runtime);
  }

  async recreateImageWithOptions(request: RecreateImageRequest, runtime: $Util.RuntimeOptions): Promise<RecreateImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.imageUid)) {
      query["ImageUid"] = request.imageUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RecreateImage",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecreateImageResponse>(await this.callApi(params, req, runtime), new RecreateImageResponse({}));
  }

  async recreateImage(request: RecreateImageRequest): Promise<RecreateImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recreateImageWithOptions(request, runtime);
  }

  async refreshImageDataTestWithOptions(runtime: $Util.RuntimeOptions): Promise<RefreshImageDataTestResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "RefreshImageDataTest",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefreshImageDataTestResponse>(await this.callApi(params, req, runtime), new RefreshImageDataTestResponse({}));
  }

  async refreshImageDataTest(): Promise<RefreshImageDataTestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshImageDataTestWithOptions(runtime);
  }

  async startCopyAppImageWithOptions(tmpReq: StartCopyAppImageRequest, runtime: $Util.RuntimeOptions): Promise<StartCopyAppImageResponse> {
    Util.validateModel(tmpReq);
    let request = new StartCopyAppImageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.destinationRegionList)) {
      request.destinationRegionListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.destinationRegionList, "DestinationRegionList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.destinationRegionListShrink)) {
      body["DestinationRegionList"] = request.destinationRegionListShrink;
    }

    if (!Util.isUnset(request.imgUid)) {
      body["ImgUid"] = request.imgUid;
    }

    if (!Util.isUnset(request.sourceRegion)) {
      body["SourceRegion"] = request.sourceRegion;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartCopyAppImage",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartCopyAppImageResponse>(await this.callApi(params, req, runtime), new StartCopyAppImageResponse({}));
  }

  async startCopyAppImage(request: StartCopyAppImageRequest): Promise<StartCopyAppImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startCopyAppImageWithOptions(request, runtime);
  }

  async updateAppWithOptions(request: UpdateAppRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.iconUrl)) {
      query["IconUrl"] = request.iconUrl;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateApp",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAppResponse>(await this.callApi(params, req, runtime), new UpdateAppResponse({}));
  }

  async updateApp(request: UpdateAppRequest): Promise<UpdateAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppWithOptions(request, runtime);
  }

  async updateAppVersionWithOptions(request: UpdateAppVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.number)) {
      query["Number"] = request.number;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAppVersion",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAppVersionResponse>(await this.callApi(params, req, runtime), new UpdateAppVersionResponse({}));
  }

  async updateAppVersion(request: UpdateAppVersionRequest): Promise<UpdateAppVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppVersionWithOptions(request, runtime);
  }

}
