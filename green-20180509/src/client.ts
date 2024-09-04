// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddFacesRequest extends $tea.Model {
  clientInfo?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFacesResponseBody extends $tea.Model {
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

export class AddFacesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddFacesResponseBody;
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
      body: AddFacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupsRequest extends $tea.Model {
  clientInfo?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupsResponseBody extends $tea.Model {
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

export class AddGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddGroupsResponseBody;
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
      body: AddGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPersonRequest extends $tea.Model {
  clientInfo?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPersonResponseBody extends $tea.Model {
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

export class AddPersonResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddPersonResponseBody;
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
      body: AddPersonResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSimilarityImageRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSimilarityImageResponseBody extends $tea.Model {
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

export class AddSimilarityImageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddSimilarityImageResponseBody;
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
      body: AddSimilarityImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSimilarityLibraryRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSimilarityLibraryResponseBody extends $tea.Model {
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

export class AddSimilarityLibraryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddSimilarityLibraryResponseBody;
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
      body: AddSimilarityLibraryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVideoDnaRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVideoDnaResponseBody extends $tea.Model {
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

export class AddVideoDnaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddVideoDnaResponseBody;
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
      body: AddVideoDnaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVideoDnaGroupRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVideoDnaGroupResponseBody extends $tea.Model {
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

export class AddVideoDnaGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddVideoDnaGroupResponseBody;
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
      body: AddVideoDnaGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFacesRequest extends $tea.Model {
  clientInfo?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFacesResponseBody extends $tea.Model {
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

export class DeleteFacesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFacesResponseBody;
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
      body: DeleteFacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupsRequest extends $tea.Model {
  clientInfo?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupsResponseBody extends $tea.Model {
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

export class DeleteGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGroupsResponseBody;
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
      body: DeleteGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePersonRequest extends $tea.Model {
  clientInfo?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePersonResponseBody extends $tea.Model {
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

export class DeletePersonResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePersonResponseBody;
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
      body: DeletePersonResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSimilarityImageRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSimilarityImageResponseBody extends $tea.Model {
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

export class DeleteSimilarityImageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSimilarityImageResponseBody;
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
      body: DeleteSimilarityImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSimilarityLibraryRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSimilarityLibraryResponseBody extends $tea.Model {
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

export class DeleteSimilarityLibraryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSimilarityLibraryResponseBody;
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
      body: DeleteSimilarityLibraryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVideoDnaRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVideoDnaResponseBody extends $tea.Model {
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

export class DeleteVideoDnaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteVideoDnaResponseBody;
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
      body: DeleteVideoDnaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVideoDnaGroupRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVideoDnaGroupResponseBody extends $tea.Model {
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

export class DeleteVideoDnaGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteVideoDnaGroupResponseBody;
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
      body: DeleteVideoDnaGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class DetectFaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetectFaceResponseBody;
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
      body: DetectFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileAsyncScanRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileAsyncScanResponseBody extends $tea.Model {
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

export class FileAsyncScanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FileAsyncScanResponseBody;
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
      body: FileAsyncScanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileAsyncScanResultsRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileAsyncScanResultsResponseBody extends $tea.Model {
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

export class FileAsyncScanResultsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FileAsyncScanResultsResponseBody;
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
      body: FileAsyncScanResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileAsyncScanV2ResponseBody extends $tea.Model {
  /**
   * @example
   * DA36A1DA-C466-538D-AD52-E64D75597750
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class FileAsyncScanV2Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FileAsyncScanV2ResponseBody;
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
      body: FileAsyncScanV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFacesRequest extends $tea.Model {
  clientInfo?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFacesResponseBody extends $tea.Model {
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

export class GetFacesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFacesResponseBody;
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
      body: GetFacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupsRequest extends $tea.Model {
  clientInfo?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupsResponseBody extends $tea.Model {
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

export class GetGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetGroupsResponseBody;
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
      body: GetGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonRequest extends $tea.Model {
  clientInfo?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonResponseBody extends $tea.Model {
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

export class GetPersonResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPersonResponseBody;
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
      body: GetPersonResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonsRequest extends $tea.Model {
  clientInfo?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonsResponseBody extends $tea.Model {
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

export class GetPersonsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPersonsResponseBody;
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
      body: GetPersonsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSimilarityImageRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSimilarityImageResponseBody extends $tea.Model {
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

export class GetSimilarityImageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSimilarityImageResponseBody;
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
      body: GetSimilarityImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSimilarityLibraryRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSimilarityLibraryResponseBody extends $tea.Model {
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

export class GetSimilarityLibraryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSimilarityLibraryResponseBody;
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
      body: GetSimilarityLibraryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageAsyncManualScanRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageAsyncManualScanResponseBody extends $tea.Model {
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

export class ImageAsyncManualScanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImageAsyncManualScanResponseBody;
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
      body: ImageAsyncManualScanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageAsyncManualScanResultsRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageAsyncManualScanResultsResponseBody extends $tea.Model {
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

export class ImageAsyncManualScanResultsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImageAsyncManualScanResultsResponseBody;
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
      body: ImageAsyncManualScanResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageAsyncScanRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageAsyncScanResponseBody extends $tea.Model {
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

export class ImageAsyncScanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImageAsyncScanResponseBody;
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
      body: ImageAsyncScanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageAsyncScanResultsRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageAsyncScanResultsResponseBody extends $tea.Model {
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

export class ImageAsyncScanResultsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImageAsyncScanResultsResponseBody;
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
      body: ImageAsyncScanResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageScanFeedbackRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageScanFeedbackResponseBody extends $tea.Model {
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

export class ImageScanFeedbackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImageScanFeedbackResponseBody;
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
      body: ImageScanFeedbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageSyncScanRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageSyncScanResponseBody extends $tea.Model {
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

export class ImageSyncScanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImageSyncScanResponseBody;
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
      body: ImageSyncScanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSimilarityImagesRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSimilarityImagesResponseBody extends $tea.Model {
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

export class ListSimilarityImagesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSimilarityImagesResponseBody;
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
      body: ListSimilarityImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSimilarityLibrariesRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSimilarityLibrariesResponseBody extends $tea.Model {
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

export class ListSimilarityLibrariesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSimilarityLibrariesResponseBody;
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
      body: ListSimilarityLibrariesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LiveStreamAsyncScanRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LiveStreamAsyncScanResponseBody extends $tea.Model {
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

export class LiveStreamAsyncScanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LiveStreamAsyncScanResponseBody;
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
      body: LiveStreamAsyncScanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LiveStreamAsyncScanResultsRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LiveStreamAsyncScanResultsResponseBody extends $tea.Model {
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

export class LiveStreamAsyncScanResultsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LiveStreamAsyncScanResultsResponseBody;
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
      body: LiveStreamAsyncScanResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LiveStreamCancelScanRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LiveStreamCancelScanResponseBody extends $tea.Model {
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

export class LiveStreamCancelScanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LiveStreamCancelScanResponseBody;
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
      body: LiveStreamCancelScanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPersonRequest extends $tea.Model {
  clientInfo?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPersonResponseBody extends $tea.Model {
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

export class SetPersonResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetPersonResponseBody;
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
      body: SetPersonResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextAsyncManualScanRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextAsyncManualScanResponseBody extends $tea.Model {
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

export class TextAsyncManualScanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TextAsyncManualScanResponseBody;
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
      body: TextAsyncManualScanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextAsyncManualScanResultsRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextAsyncManualScanResultsResponseBody extends $tea.Model {
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

export class TextAsyncManualScanResultsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TextAsyncManualScanResultsResponseBody;
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
      body: TextAsyncManualScanResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextFeedbackRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextFeedbackResponseBody extends $tea.Model {
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

export class TextFeedbackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TextFeedbackResponseBody;
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
      body: TextFeedbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextScanRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextScanResponseBody extends $tea.Model {
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

export class TextScanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TextScanResponseBody;
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
      body: TextScanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCredentialsRequest extends $tea.Model {
  clientInfo?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCredentialsResponseBody extends $tea.Model {
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

export class UploadCredentialsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadCredentialsResponseBody;
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
      body: UploadCredentialsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoAsyncManualScanRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoAsyncManualScanResponseBody extends $tea.Model {
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

export class VideoAsyncManualScanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VideoAsyncManualScanResponseBody;
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
      body: VideoAsyncManualScanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoAsyncManualScanResultsRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoAsyncManualScanResultsResponseBody extends $tea.Model {
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

export class VideoAsyncManualScanResultsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VideoAsyncManualScanResultsResponseBody;
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
      body: VideoAsyncManualScanResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoAsyncScanRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoAsyncScanResponseBody extends $tea.Model {
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

export class VideoAsyncScanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VideoAsyncScanResponseBody;
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
      body: VideoAsyncScanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoAsyncScanResultsRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoAsyncScanResultsResponseBody extends $tea.Model {
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

export class VideoAsyncScanResultsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VideoAsyncScanResultsResponseBody;
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
      body: VideoAsyncScanResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoCancelScanRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoCancelScanResponseBody extends $tea.Model {
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

export class VideoCancelScanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VideoCancelScanResponseBody;
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
      body: VideoCancelScanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoFeedbackRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoFeedbackResponseBody extends $tea.Model {
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

export class VideoFeedbackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VideoFeedbackResponseBody;
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
      body: VideoFeedbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoSyncScanRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoSyncScanResponseBody extends $tea.Model {
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

export class VideoSyncScanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VideoSyncScanResponseBody;
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
      body: VideoSyncScanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VodAsyncScanRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VodAsyncScanResponseBody extends $tea.Model {
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

export class VodAsyncScanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VodAsyncScanResponseBody;
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
      body: VodAsyncScanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VodAsyncScanResultsRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VodAsyncScanResultsResponseBody extends $tea.Model {
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

export class VodAsyncScanResultsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VodAsyncScanResultsResponseBody;
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
      body: VodAsyncScanResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceAsyncManualScanRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceAsyncManualScanResponseBody extends $tea.Model {
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

export class VoiceAsyncManualScanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VoiceAsyncManualScanResponseBody;
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
      body: VoiceAsyncManualScanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceAsyncManualScanResultsRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceAsyncManualScanResultsResponseBody extends $tea.Model {
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

export class VoiceAsyncManualScanResultsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VoiceAsyncManualScanResultsResponseBody;
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
      body: VoiceAsyncManualScanResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceAsyncScanRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceAsyncScanResponseBody extends $tea.Model {
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

export class VoiceAsyncScanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VoiceAsyncScanResponseBody;
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
      body: VoiceAsyncScanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceAsyncScanResultsRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceAsyncScanResultsResponseBody extends $tea.Model {
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

export class VoiceAsyncScanResultsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VoiceAsyncScanResultsResponseBody;
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
      body: VoiceAsyncScanResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceCancelScanRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceCancelScanResponseBody extends $tea.Model {
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

export class VoiceCancelScanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VoiceCancelScanResponseBody;
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
      body: VoiceCancelScanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceIdentityCheckRequest extends $tea.Model {
  clientInfo?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceIdentityCheckResponseBody extends $tea.Model {
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

export class VoiceIdentityCheckResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VoiceIdentityCheckResponseBody;
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
      body: VoiceIdentityCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceIdentityRegisterRequest extends $tea.Model {
  clientInfo?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceIdentityRegisterResponseBody extends $tea.Model {
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

export class VoiceIdentityRegisterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VoiceIdentityRegisterResponseBody;
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
      body: VoiceIdentityRegisterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceIdentityStartCheckRequest extends $tea.Model {
  clientInfo?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceIdentityStartCheckResponseBody extends $tea.Model {
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

export class VoiceIdentityStartCheckResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VoiceIdentityStartCheckResponseBody;
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
      body: VoiceIdentityStartCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceIdentityStartRegisterRequest extends $tea.Model {
  clientInfo?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceIdentityStartRegisterResponseBody extends $tea.Model {
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

export class VoiceIdentityStartRegisterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VoiceIdentityStartRegisterResponseBody;
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
      body: VoiceIdentityStartRegisterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceIdentityUnregisterRequest extends $tea.Model {
  clientInfo?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceIdentityUnregisterResponseBody extends $tea.Model {
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

export class VoiceIdentityUnregisterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VoiceIdentityUnregisterResponseBody;
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
      body: VoiceIdentityUnregisterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceSyncScanRequest extends $tea.Model {
  clientInfo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceSyncScanResponseBody extends $tea.Model {
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

export class VoiceSyncScanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VoiceSyncScanResponseBody;
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
      body: VoiceSyncScanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebpageAsyncScanRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebpageAsyncScanResponseBody extends $tea.Model {
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

export class WebpageAsyncScanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WebpageAsyncScanResponseBody;
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
      body: WebpageAsyncScanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebpageAsyncScanResultsRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebpageAsyncScanResultsResponseBody extends $tea.Model {
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

export class WebpageAsyncScanResultsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WebpageAsyncScanResultsResponseBody;
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
      body: WebpageAsyncScanResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebpageSyncScanRequest extends $tea.Model {
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebpageSyncScanResponseBody extends $tea.Model {
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

export class WebpageSyncScanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WebpageSyncScanResponseBody;
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
      body: WebpageSyncScanResponseBody,
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
      'ap-northeast-1': "green.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "green.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "green.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "green.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "green.ap-southeast-1.aliyuncs.com",
      'cn-chengdu': "green.aliyuncs.com",
      'cn-hongkong': "green.aliyuncs.com",
      'cn-huhehaote': "green.aliyuncs.com",
      'cn-qingdao': "green.aliyuncs.com",
      'cn-zhangjiakou': "green.aliyuncs.com",
      'eu-central-1': "green.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "green.ap-southeast-1.aliyuncs.com",
      'me-east-1': "green.ap-southeast-1.aliyuncs.com",
      'us-east-1': "green.ap-southeast-1.aliyuncs.com",
      'cn-hangzhou-finance': "green.aliyuncs.com",
      'cn-shenzhen-finance-1': "green.aliyuncs.com",
      'cn-shanghai-finance-1': "green.aliyuncs.com",
      'cn-north-2-gov-1': "green.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("green", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 添加人脸
   * 
   * @param request - AddFacesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddFacesResponse
   */
  async addFacesWithOptions(request: AddFacesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddFacesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddFaces",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/sface/face/add`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddFacesResponse>(await this.callApi(params, req, runtime), new AddFacesResponse({}));
  }

  /**
   * 添加人脸
   * 
   * @param request - AddFacesRequest
   * @returns AddFacesResponse
   */
  async addFaces(request: AddFacesRequest): Promise<AddFacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addFacesWithOptions(request, headers, runtime);
  }

  /**
   * 添加分组
   * 
   * @param request - AddGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddGroupsResponse
   */
  async addGroupsWithOptions(request: AddGroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddGroupsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddGroups",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/sface/person/groups/add`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddGroupsResponse>(await this.callApi(params, req, runtime), new AddGroupsResponse({}));
  }

  /**
   * 添加分组
   * 
   * @param request - AddGroupsRequest
   * @returns AddGroupsResponse
   */
  async addGroups(request: AddGroupsRequest): Promise<AddGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addGroupsWithOptions(request, headers, runtime);
  }

  /**
   * 添加个体
   * 
   * @param request - AddPersonRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddPersonResponse
   */
  async addPersonWithOptions(request: AddPersonRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddPersonResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddPerson",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/sface/person/add`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddPersonResponse>(await this.callApi(params, req, runtime), new AddPersonResponse({}));
  }

  /**
   * 添加个体
   * 
   * @param request - AddPersonRequest
   * @returns AddPersonResponse
   */
  async addPerson(request: AddPersonRequest): Promise<AddPersonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addPersonWithOptions(request, headers, runtime);
  }

  /**
   * 添加相似图
   * 
   * @param request - AddSimilarityImageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddSimilarityImageResponse
   */
  async addSimilarityImageWithOptions(request: AddSimilarityImageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddSimilarityImageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddSimilarityImage",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/similarity/image/add`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddSimilarityImageResponse>(await this.callApi(params, req, runtime), new AddSimilarityImageResponse({}));
  }

  /**
   * 添加相似图
   * 
   * @param request - AddSimilarityImageRequest
   * @returns AddSimilarityImageResponse
   */
  async addSimilarityImage(request: AddSimilarityImageRequest): Promise<AddSimilarityImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addSimilarityImageWithOptions(request, headers, runtime);
  }

  /**
   * 添加相似图库
   * 
   * @param request - AddSimilarityLibraryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddSimilarityLibraryResponse
   */
  async addSimilarityLibraryWithOptions(request: AddSimilarityLibraryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddSimilarityLibraryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddSimilarityLibrary",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/similarity/library/add`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddSimilarityLibraryResponse>(await this.callApi(params, req, runtime), new AddSimilarityLibraryResponse({}));
  }

  /**
   * 添加相似图库
   * 
   * @param request - AddSimilarityLibraryRequest
   * @returns AddSimilarityLibraryResponse
   */
  async addSimilarityLibrary(request: AddSimilarityLibraryRequest): Promise<AddSimilarityLibraryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addSimilarityLibraryWithOptions(request, headers, runtime);
  }

  /**
   * 添加视频Dna
   * 
   * @param request - AddVideoDnaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddVideoDnaResponse
   */
  async addVideoDnaWithOptions(request: AddVideoDnaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddVideoDnaResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddVideoDna",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/video/dna/add`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddVideoDnaResponse>(await this.callApi(params, req, runtime), new AddVideoDnaResponse({}));
  }

  /**
   * 添加视频Dna
   * 
   * @param request - AddVideoDnaRequest
   * @returns AddVideoDnaResponse
   */
  async addVideoDna(request: AddVideoDnaRequest): Promise<AddVideoDnaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addVideoDnaWithOptions(request, headers, runtime);
  }

  /**
   * 添加视频Dna分组
   * 
   * @param request - AddVideoDnaGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddVideoDnaGroupResponse
   */
  async addVideoDnaGroupWithOptions(request: AddVideoDnaGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddVideoDnaGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddVideoDnaGroup",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/video/dna/group/add`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddVideoDnaGroupResponse>(await this.callApi(params, req, runtime), new AddVideoDnaGroupResponse({}));
  }

  /**
   * 添加视频Dna分组
   * 
   * @param request - AddVideoDnaGroupRequest
   * @returns AddVideoDnaGroupResponse
   */
  async addVideoDnaGroup(request: AddVideoDnaGroupRequest): Promise<AddVideoDnaGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addVideoDnaGroupWithOptions(request, headers, runtime);
  }

  /**
   * 删除人脸
   * 
   * @param request - DeleteFacesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFacesResponse
   */
  async deleteFacesWithOptions(request: DeleteFacesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteFacesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFaces",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/sface/face/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteFacesResponse>(await this.callApi(params, req, runtime), new DeleteFacesResponse({}));
  }

  /**
   * 删除人脸
   * 
   * @param request - DeleteFacesRequest
   * @returns DeleteFacesResponse
   */
  async deleteFaces(request: DeleteFacesRequest): Promise<DeleteFacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFacesWithOptions(request, headers, runtime);
  }

  /**
   * 删除分组
   * 
   * @param request - DeleteGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGroupsResponse
   */
  async deleteGroupsWithOptions(request: DeleteGroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteGroupsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGroups",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/sface/person/groups/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteGroupsResponse>(await this.callApi(params, req, runtime), new DeleteGroupsResponse({}));
  }

  /**
   * 删除分组
   * 
   * @param request - DeleteGroupsRequest
   * @returns DeleteGroupsResponse
   */
  async deleteGroups(request: DeleteGroupsRequest): Promise<DeleteGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGroupsWithOptions(request, headers, runtime);
  }

  /**
   * 删除个体
   * 
   * @param request - DeletePersonRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePersonResponse
   */
  async deletePersonWithOptions(request: DeletePersonRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeletePersonResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePerson",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/sface/person/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeletePersonResponse>(await this.callApi(params, req, runtime), new DeletePersonResponse({}));
  }

  /**
   * 删除个体
   * 
   * @param request - DeletePersonRequest
   * @returns DeletePersonResponse
   */
  async deletePerson(request: DeletePersonRequest): Promise<DeletePersonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePersonWithOptions(request, headers, runtime);
  }

  /**
   * 删除相似图
   * 
   * @param request - DeleteSimilarityImageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSimilarityImageResponse
   */
  async deleteSimilarityImageWithOptions(request: DeleteSimilarityImageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteSimilarityImageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSimilarityImage",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/similarity/image/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteSimilarityImageResponse>(await this.callApi(params, req, runtime), new DeleteSimilarityImageResponse({}));
  }

  /**
   * 删除相似图
   * 
   * @param request - DeleteSimilarityImageRequest
   * @returns DeleteSimilarityImageResponse
   */
  async deleteSimilarityImage(request: DeleteSimilarityImageRequest): Promise<DeleteSimilarityImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSimilarityImageWithOptions(request, headers, runtime);
  }

  /**
   * 删除相似图库
   * 
   * @param request - DeleteSimilarityLibraryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSimilarityLibraryResponse
   */
  async deleteSimilarityLibraryWithOptions(request: DeleteSimilarityLibraryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteSimilarityLibraryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSimilarityLibrary",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/similarity/library/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteSimilarityLibraryResponse>(await this.callApi(params, req, runtime), new DeleteSimilarityLibraryResponse({}));
  }

  /**
   * 删除相似图库
   * 
   * @param request - DeleteSimilarityLibraryRequest
   * @returns DeleteSimilarityLibraryResponse
   */
  async deleteSimilarityLibrary(request: DeleteSimilarityLibraryRequest): Promise<DeleteSimilarityLibraryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSimilarityLibraryWithOptions(request, headers, runtime);
  }

  /**
   * 删除视频Dna
   * 
   * @param request - DeleteVideoDnaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVideoDnaResponse
   */
  async deleteVideoDnaWithOptions(request: DeleteVideoDnaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteVideoDnaResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteVideoDna",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/video/dna/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteVideoDnaResponse>(await this.callApi(params, req, runtime), new DeleteVideoDnaResponse({}));
  }

  /**
   * 删除视频Dna
   * 
   * @param request - DeleteVideoDnaRequest
   * @returns DeleteVideoDnaResponse
   */
  async deleteVideoDna(request: DeleteVideoDnaRequest): Promise<DeleteVideoDnaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteVideoDnaWithOptions(request, headers, runtime);
  }

  /**
   * 删除视频Dna分组
   * 
   * @param request - DeleteVideoDnaGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVideoDnaGroupResponse
   */
  async deleteVideoDnaGroupWithOptions(request: DeleteVideoDnaGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteVideoDnaGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteVideoDnaGroup",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/video/dna/group/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteVideoDnaGroupResponse>(await this.callApi(params, req, runtime), new DeleteVideoDnaGroupResponse({}));
  }

  /**
   * 删除视频Dna分组
   * 
   * @param request - DeleteVideoDnaGroupRequest
   * @returns DeleteVideoDnaGroupResponse
   */
  async deleteVideoDnaGroup(request: DeleteVideoDnaGroupRequest): Promise<DeleteVideoDnaGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteVideoDnaGroupWithOptions(request, headers, runtime);
  }

  /**
   * 人脸属性检测
   * 
   * @param request - DetectFaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectFaceResponse
   */
  async detectFaceWithOptions(request: DetectFaceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DetectFaceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetectFace",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/face/detect`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DetectFaceResponse>(await this.callApi(params, req, runtime), new DetectFaceResponse({}));
  }

  /**
   * 人脸属性检测
   * 
   * @param request - DetectFaceRequest
   * @returns DetectFaceResponse
   */
  async detectFace(request: DetectFaceRequest): Promise<DetectFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.detectFaceWithOptions(request, headers, runtime);
  }

  /**
   * 文件异步检测
   * 
   * @param request - FileAsyncScanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FileAsyncScanResponse
   */
  async fileAsyncScanWithOptions(request: FileAsyncScanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<FileAsyncScanResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FileAsyncScan",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/file/asyncscan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<FileAsyncScanResponse>(await this.callApi(params, req, runtime), new FileAsyncScanResponse({}));
  }

  /**
   * 文件异步检测
   * 
   * @param request - FileAsyncScanRequest
   * @returns FileAsyncScanResponse
   */
  async fileAsyncScan(request: FileAsyncScanRequest): Promise<FileAsyncScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.fileAsyncScanWithOptions(request, headers, runtime);
  }

  /**
   * 文件异步检测结果
   * 
   * @param request - FileAsyncScanResultsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FileAsyncScanResultsResponse
   */
  async fileAsyncScanResultsWithOptions(request: FileAsyncScanResultsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<FileAsyncScanResultsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FileAsyncScanResults",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/file/results`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<FileAsyncScanResultsResponse>(await this.callApi(params, req, runtime), new FileAsyncScanResultsResponse({}));
  }

  /**
   * 文件异步检测结果
   * 
   * @param request - FileAsyncScanResultsRequest
   * @returns FileAsyncScanResultsResponse
   */
  async fileAsyncScanResults(request: FileAsyncScanResultsRequest): Promise<FileAsyncScanResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.fileAsyncScanResultsWithOptions(request, headers, runtime);
  }

  /**
   * 文件检测新版本
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FileAsyncScanV2Response
   */
  async fileAsyncScanV2WithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<FileAsyncScanV2Response> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "FileAsyncScanV2",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/file/asyncscanv2`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<FileAsyncScanV2Response>(await this.callApi(params, req, runtime), new FileAsyncScanV2Response({}));
  }

  /**
   * 文件检测新版本
   * @returns FileAsyncScanV2Response
   */
  async fileAsyncScanV2(): Promise<FileAsyncScanV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.fileAsyncScanV2WithOptions(headers, runtime);
  }

  /**
   * 获取人脸列表
   * 
   * @param request - GetFacesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFacesResponse
   */
  async getFacesWithOptions(request: GetFacesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFacesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFaces",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/sface/faces`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFacesResponse>(await this.callApi(params, req, runtime), new GetFacesResponse({}));
  }

  /**
   * 获取人脸列表
   * 
   * @param request - GetFacesRequest
   * @returns GetFacesResponse
   */
  async getFaces(request: GetFacesRequest): Promise<GetFacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFacesWithOptions(request, headers, runtime);
  }

  /**
   * 获取组列表
   * 
   * @param request - GetGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGroupsResponse
   */
  async getGroupsWithOptions(request: GetGroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetGroupsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetGroups",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/sface/groups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetGroupsResponse>(await this.callApi(params, req, runtime), new GetGroupsResponse({}));
  }

  /**
   * 获取组列表
   * 
   * @param request - GetGroupsRequest
   * @returns GetGroupsResponse
   */
  async getGroups(request: GetGroupsRequest): Promise<GetGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGroupsWithOptions(request, headers, runtime);
  }

  /**
   * 获取单个个体
   * 
   * @param request - GetPersonRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPersonResponse
   */
  async getPersonWithOptions(request: GetPersonRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPersonResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPerson",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/sface/person`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetPersonResponse>(await this.callApi(params, req, runtime), new GetPersonResponse({}));
  }

  /**
   * 获取单个个体
   * 
   * @param request - GetPersonRequest
   * @returns GetPersonResponse
   */
  async getPerson(request: GetPersonRequest): Promise<GetPersonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPersonWithOptions(request, headers, runtime);
  }

  /**
   * 获取个体列表
   * 
   * @param request - GetPersonsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPersonsResponse
   */
  async getPersonsWithOptions(request: GetPersonsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPersonsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPersons",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/sface/group/persons`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetPersonsResponse>(await this.callApi(params, req, runtime), new GetPersonsResponse({}));
  }

  /**
   * 获取个体列表
   * 
   * @param request - GetPersonsRequest
   * @returns GetPersonsResponse
   */
  async getPersons(request: GetPersonsRequest): Promise<GetPersonsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPersonsWithOptions(request, headers, runtime);
  }

  /**
   * 获取相似图
   * 
   * @param request - GetSimilarityImageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSimilarityImageResponse
   */
  async getSimilarityImageWithOptions(request: GetSimilarityImageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSimilarityImageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSimilarityImage",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/similarity/image/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetSimilarityImageResponse>(await this.callApi(params, req, runtime), new GetSimilarityImageResponse({}));
  }

  /**
   * 获取相似图
   * 
   * @param request - GetSimilarityImageRequest
   * @returns GetSimilarityImageResponse
   */
  async getSimilarityImage(request: GetSimilarityImageRequest): Promise<GetSimilarityImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSimilarityImageWithOptions(request, headers, runtime);
  }

  /**
   * 获取相似图库
   * 
   * @param request - GetSimilarityLibraryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSimilarityLibraryResponse
   */
  async getSimilarityLibraryWithOptions(request: GetSimilarityLibraryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSimilarityLibraryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSimilarityLibrary",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/similarity/library/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetSimilarityLibraryResponse>(await this.callApi(params, req, runtime), new GetSimilarityLibraryResponse({}));
  }

  /**
   * 获取相似图库
   * 
   * @param request - GetSimilarityLibraryRequest
   * @returns GetSimilarityLibraryResponse
   */
  async getSimilarityLibrary(request: GetSimilarityLibraryRequest): Promise<GetSimilarityLibraryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSimilarityLibraryWithOptions(request, headers, runtime);
  }

  /**
   * 图片人工异步审核
   * 
   * @param request - ImageAsyncManualScanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageAsyncManualScanResponse
   */
  async imageAsyncManualScanWithOptions(request: ImageAsyncManualScanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ImageAsyncManualScanResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ImageAsyncManualScan",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/image/manual/asyncScan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ImageAsyncManualScanResponse>(await this.callApi(params, req, runtime), new ImageAsyncManualScanResponse({}));
  }

  /**
   * 图片人工异步审核
   * 
   * @param request - ImageAsyncManualScanRequest
   * @returns ImageAsyncManualScanResponse
   */
  async imageAsyncManualScan(request: ImageAsyncManualScanRequest): Promise<ImageAsyncManualScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.imageAsyncManualScanWithOptions(request, headers, runtime);
  }

  /**
   * 图片人工异步审核结果
   * 
   * @param request - ImageAsyncManualScanResultsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageAsyncManualScanResultsResponse
   */
  async imageAsyncManualScanResultsWithOptions(request: ImageAsyncManualScanResultsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ImageAsyncManualScanResultsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ImageAsyncManualScanResults",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/image/manual/scan/results`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ImageAsyncManualScanResultsResponse>(await this.callApi(params, req, runtime), new ImageAsyncManualScanResultsResponse({}));
  }

  /**
   * 图片人工异步审核结果
   * 
   * @param request - ImageAsyncManualScanResultsRequest
   * @returns ImageAsyncManualScanResultsResponse
   */
  async imageAsyncManualScanResults(request: ImageAsyncManualScanResultsRequest): Promise<ImageAsyncManualScanResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.imageAsyncManualScanResultsWithOptions(request, headers, runtime);
  }

  /**
   * 图片异步检测
   * 
   * @param request - ImageAsyncScanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageAsyncScanResponse
   */
  async imageAsyncScanWithOptions(request: ImageAsyncScanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ImageAsyncScanResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ImageAsyncScan",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/image/asyncscan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ImageAsyncScanResponse>(await this.callApi(params, req, runtime), new ImageAsyncScanResponse({}));
  }

  /**
   * 图片异步检测
   * 
   * @param request - ImageAsyncScanRequest
   * @returns ImageAsyncScanResponse
   */
  async imageAsyncScan(request: ImageAsyncScanRequest): Promise<ImageAsyncScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.imageAsyncScanWithOptions(request, headers, runtime);
  }

  /**
   * 图片异步检测结果
   * 
   * @param request - ImageAsyncScanResultsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageAsyncScanResultsResponse
   */
  async imageAsyncScanResultsWithOptions(request: ImageAsyncScanResultsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ImageAsyncScanResultsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ImageAsyncScanResults",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/image/results`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ImageAsyncScanResultsResponse>(await this.callApi(params, req, runtime), new ImageAsyncScanResultsResponse({}));
  }

  /**
   * 图片异步检测结果
   * 
   * @param request - ImageAsyncScanResultsRequest
   * @returns ImageAsyncScanResultsResponse
   */
  async imageAsyncScanResults(request: ImageAsyncScanResultsRequest): Promise<ImageAsyncScanResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.imageAsyncScanResultsWithOptions(request, headers, runtime);
  }

  /**
   * 图片检测反馈
   * 
   * @param request - ImageScanFeedbackRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageScanFeedbackResponse
   */
  async imageScanFeedbackWithOptions(request: ImageScanFeedbackRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ImageScanFeedbackResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ImageScanFeedback",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/image/feedback`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ImageScanFeedbackResponse>(await this.callApi(params, req, runtime), new ImageScanFeedbackResponse({}));
  }

  /**
   * 图片检测反馈
   * 
   * @param request - ImageScanFeedbackRequest
   * @returns ImageScanFeedbackResponse
   */
  async imageScanFeedback(request: ImageScanFeedbackRequest): Promise<ImageScanFeedbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.imageScanFeedbackWithOptions(request, headers, runtime);
  }

  /**
   * 图片同步检测
   * 
   * @param request - ImageSyncScanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageSyncScanResponse
   */
  async imageSyncScanWithOptions(request: ImageSyncScanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ImageSyncScanResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ImageSyncScan",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/image/scan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ImageSyncScanResponse>(await this.callApi(params, req, runtime), new ImageSyncScanResponse({}));
  }

  /**
   * 图片同步检测
   * 
   * @param request - ImageSyncScanRequest
   * @returns ImageSyncScanResponse
   */
  async imageSyncScan(request: ImageSyncScanRequest): Promise<ImageSyncScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.imageSyncScanWithOptions(request, headers, runtime);
  }

  /**
   * 获取相似图
   * 
   * @param request - ListSimilarityImagesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSimilarityImagesResponse
   */
  async listSimilarityImagesWithOptions(request: ListSimilarityImagesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSimilarityImagesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSimilarityImages",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/similarity/image/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSimilarityImagesResponse>(await this.callApi(params, req, runtime), new ListSimilarityImagesResponse({}));
  }

  /**
   * 获取相似图
   * 
   * @param request - ListSimilarityImagesRequest
   * @returns ListSimilarityImagesResponse
   */
  async listSimilarityImages(request: ListSimilarityImagesRequest): Promise<ListSimilarityImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSimilarityImagesWithOptions(request, headers, runtime);
  }

  /**
   * 获取相似图库
   * 
   * @param request - ListSimilarityLibrariesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSimilarityLibrariesResponse
   */
  async listSimilarityLibrariesWithOptions(request: ListSimilarityLibrariesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSimilarityLibrariesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSimilarityLibraries",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/similarity/library/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSimilarityLibrariesResponse>(await this.callApi(params, req, runtime), new ListSimilarityLibrariesResponse({}));
  }

  /**
   * 获取相似图库
   * 
   * @param request - ListSimilarityLibrariesRequest
   * @returns ListSimilarityLibrariesResponse
   */
  async listSimilarityLibraries(request: ListSimilarityLibrariesRequest): Promise<ListSimilarityLibrariesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSimilarityLibrariesWithOptions(request, headers, runtime);
  }

  /**
   * 直播流异步检测
   * 
   * @param request - LiveStreamAsyncScanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LiveStreamAsyncScanResponse
   */
  async liveStreamAsyncScanWithOptions(request: LiveStreamAsyncScanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<LiveStreamAsyncScanResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "LiveStreamAsyncScan",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/livestream/asyncscan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<LiveStreamAsyncScanResponse>(await this.callApi(params, req, runtime), new LiveStreamAsyncScanResponse({}));
  }

  /**
   * 直播流异步检测
   * 
   * @param request - LiveStreamAsyncScanRequest
   * @returns LiveStreamAsyncScanResponse
   */
  async liveStreamAsyncScan(request: LiveStreamAsyncScanRequest): Promise<LiveStreamAsyncScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.liveStreamAsyncScanWithOptions(request, headers, runtime);
  }

  /**
   * 直播流异步检测结果
   * 
   * @param request - LiveStreamAsyncScanResultsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LiveStreamAsyncScanResultsResponse
   */
  async liveStreamAsyncScanResultsWithOptions(request: LiveStreamAsyncScanResultsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<LiveStreamAsyncScanResultsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "LiveStreamAsyncScanResults",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/livestream/results`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<LiveStreamAsyncScanResultsResponse>(await this.callApi(params, req, runtime), new LiveStreamAsyncScanResultsResponse({}));
  }

  /**
   * 直播流异步检测结果
   * 
   * @param request - LiveStreamAsyncScanResultsRequest
   * @returns LiveStreamAsyncScanResultsResponse
   */
  async liveStreamAsyncScanResults(request: LiveStreamAsyncScanResultsRequest): Promise<LiveStreamAsyncScanResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.liveStreamAsyncScanResultsWithOptions(request, headers, runtime);
  }

  /**
   * 直播流取消检测
   * 
   * @param request - LiveStreamCancelScanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LiveStreamCancelScanResponse
   */
  async liveStreamCancelScanWithOptions(request: LiveStreamCancelScanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<LiveStreamCancelScanResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "LiveStreamCancelScan",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/livestream/cancelscan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<LiveStreamCancelScanResponse>(await this.callApi(params, req, runtime), new LiveStreamCancelScanResponse({}));
  }

  /**
   * 直播流取消检测
   * 
   * @param request - LiveStreamCancelScanRequest
   * @returns LiveStreamCancelScanResponse
   */
  async liveStreamCancelScan(request: LiveStreamCancelScanRequest): Promise<LiveStreamCancelScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.liveStreamCancelScanWithOptions(request, headers, runtime);
  }

  /**
   * 设置个体
   * 
   * @param request - SetPersonRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPersonResponse
   */
  async setPersonWithOptions(request: SetPersonRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SetPersonResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetPerson",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/sface/person/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SetPersonResponse>(await this.callApi(params, req, runtime), new SetPersonResponse({}));
  }

  /**
   * 设置个体
   * 
   * @param request - SetPersonRequest
   * @returns SetPersonResponse
   */
  async setPerson(request: SetPersonRequest): Promise<SetPersonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.setPersonWithOptions(request, headers, runtime);
  }

  /**
   * 文本异步人工审核
   * 
   * @param request - TextAsyncManualScanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TextAsyncManualScanResponse
   */
  async textAsyncManualScanWithOptions(request: TextAsyncManualScanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TextAsyncManualScanResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TextAsyncManualScan",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/text/manual/asyncScan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TextAsyncManualScanResponse>(await this.callApi(params, req, runtime), new TextAsyncManualScanResponse({}));
  }

  /**
   * 文本异步人工审核
   * 
   * @param request - TextAsyncManualScanRequest
   * @returns TextAsyncManualScanResponse
   */
  async textAsyncManualScan(request: TextAsyncManualScanRequest): Promise<TextAsyncManualScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.textAsyncManualScanWithOptions(request, headers, runtime);
  }

  /**
   * 文本异步人工审核结果
   * 
   * @param request - TextAsyncManualScanResultsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TextAsyncManualScanResultsResponse
   */
  async textAsyncManualScanResultsWithOptions(request: TextAsyncManualScanResultsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TextAsyncManualScanResultsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TextAsyncManualScanResults",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/text/manual/scan/results`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TextAsyncManualScanResultsResponse>(await this.callApi(params, req, runtime), new TextAsyncManualScanResultsResponse({}));
  }

  /**
   * 文本异步人工审核结果
   * 
   * @param request - TextAsyncManualScanResultsRequest
   * @returns TextAsyncManualScanResultsResponse
   */
  async textAsyncManualScanResults(request: TextAsyncManualScanResultsRequest): Promise<TextAsyncManualScanResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.textAsyncManualScanResultsWithOptions(request, headers, runtime);
  }

  /**
   * 文本结果反馈
   * 
   * @param request - TextFeedbackRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TextFeedbackResponse
   */
  async textFeedbackWithOptions(request: TextFeedbackRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TextFeedbackResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TextFeedback",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/text/feedback`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TextFeedbackResponse>(await this.callApi(params, req, runtime), new TextFeedbackResponse({}));
  }

  /**
   * 文本结果反馈
   * 
   * @param request - TextFeedbackRequest
   * @returns TextFeedbackResponse
   */
  async textFeedback(request: TextFeedbackRequest): Promise<TextFeedbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.textFeedbackWithOptions(request, headers, runtime);
  }

  /**
   * @param request - TextScanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TextScanResponse
   */
  async textScanWithOptions(request: TextScanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TextScanResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TextScan",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/text/scan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TextScanResponse>(await this.callApi(params, req, runtime), new TextScanResponse({}));
  }

  /**
   * @param request - TextScanRequest
   * @returns TextScanResponse
   */
  async textScan(request: TextScanRequest): Promise<TextScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.textScanWithOptions(request, headers, runtime);
  }

  /**
   * 获取上传证书
   * 
   * @param request - UploadCredentialsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadCredentialsResponse
   */
  async uploadCredentialsWithOptions(request: UploadCredentialsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UploadCredentialsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadCredentials",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/credentials/uploadcredentials`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UploadCredentialsResponse>(await this.callApi(params, req, runtime), new UploadCredentialsResponse({}));
  }

  /**
   * 获取上传证书
   * 
   * @param request - UploadCredentialsRequest
   * @returns UploadCredentialsResponse
   */
  async uploadCredentials(request: UploadCredentialsRequest): Promise<UploadCredentialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uploadCredentialsWithOptions(request, headers, runtime);
  }

  /**
   * 视频异步人工审核
   * 
   * @param request - VideoAsyncManualScanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VideoAsyncManualScanResponse
   */
  async videoAsyncManualScanWithOptions(request: VideoAsyncManualScanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<VideoAsyncManualScanResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VideoAsyncManualScan",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/video/manual/asyncScan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<VideoAsyncManualScanResponse>(await this.callApi(params, req, runtime), new VideoAsyncManualScanResponse({}));
  }

  /**
   * 视频异步人工审核
   * 
   * @param request - VideoAsyncManualScanRequest
   * @returns VideoAsyncManualScanResponse
   */
  async videoAsyncManualScan(request: VideoAsyncManualScanRequest): Promise<VideoAsyncManualScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.videoAsyncManualScanWithOptions(request, headers, runtime);
  }

  /**
   * 视频异步人工审核结果
   * 
   * @param request - VideoAsyncManualScanResultsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VideoAsyncManualScanResultsResponse
   */
  async videoAsyncManualScanResultsWithOptions(request: VideoAsyncManualScanResultsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<VideoAsyncManualScanResultsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VideoAsyncManualScanResults",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/video/manual/scan/results`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<VideoAsyncManualScanResultsResponse>(await this.callApi(params, req, runtime), new VideoAsyncManualScanResultsResponse({}));
  }

  /**
   * 视频异步人工审核结果
   * 
   * @param request - VideoAsyncManualScanResultsRequest
   * @returns VideoAsyncManualScanResultsResponse
   */
  async videoAsyncManualScanResults(request: VideoAsyncManualScanResultsRequest): Promise<VideoAsyncManualScanResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.videoAsyncManualScanResultsWithOptions(request, headers, runtime);
  }

  /**
   * 视频异步检测
   * 
   * @param request - VideoAsyncScanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VideoAsyncScanResponse
   */
  async videoAsyncScanWithOptions(request: VideoAsyncScanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<VideoAsyncScanResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VideoAsyncScan",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/video/asyncscan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<VideoAsyncScanResponse>(await this.callApi(params, req, runtime), new VideoAsyncScanResponse({}));
  }

  /**
   * 视频异步检测
   * 
   * @param request - VideoAsyncScanRequest
   * @returns VideoAsyncScanResponse
   */
  async videoAsyncScan(request: VideoAsyncScanRequest): Promise<VideoAsyncScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.videoAsyncScanWithOptions(request, headers, runtime);
  }

  /**
   * 视频异步检测结果
   * 
   * @param request - VideoAsyncScanResultsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VideoAsyncScanResultsResponse
   */
  async videoAsyncScanResultsWithOptions(request: VideoAsyncScanResultsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<VideoAsyncScanResultsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VideoAsyncScanResults",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/video/results`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<VideoAsyncScanResultsResponse>(await this.callApi(params, req, runtime), new VideoAsyncScanResultsResponse({}));
  }

  /**
   * 视频异步检测结果
   * 
   * @param request - VideoAsyncScanResultsRequest
   * @returns VideoAsyncScanResultsResponse
   */
  async videoAsyncScanResults(request: VideoAsyncScanResultsRequest): Promise<VideoAsyncScanResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.videoAsyncScanResultsWithOptions(request, headers, runtime);
  }

  /**
   * 视频取消检测
   * 
   * @param request - VideoCancelScanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VideoCancelScanResponse
   */
  async videoCancelScanWithOptions(request: VideoCancelScanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<VideoCancelScanResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VideoCancelScan",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/video/cancelscan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<VideoCancelScanResponse>(await this.callApi(params, req, runtime), new VideoCancelScanResponse({}));
  }

  /**
   * 视频取消检测
   * 
   * @param request - VideoCancelScanRequest
   * @returns VideoCancelScanResponse
   */
  async videoCancelScan(request: VideoCancelScanRequest): Promise<VideoCancelScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.videoCancelScanWithOptions(request, headers, runtime);
  }

  /**
   * 视频结果反馈
   * 
   * @param request - VideoFeedbackRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VideoFeedbackResponse
   */
  async videoFeedbackWithOptions(request: VideoFeedbackRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<VideoFeedbackResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VideoFeedback",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/video/feedback`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<VideoFeedbackResponse>(await this.callApi(params, req, runtime), new VideoFeedbackResponse({}));
  }

  /**
   * 视频结果反馈
   * 
   * @param request - VideoFeedbackRequest
   * @returns VideoFeedbackResponse
   */
  async videoFeedback(request: VideoFeedbackRequest): Promise<VideoFeedbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.videoFeedbackWithOptions(request, headers, runtime);
  }

  /**
   * 视频同步检测
   * 
   * @param request - VideoSyncScanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VideoSyncScanResponse
   */
  async videoSyncScanWithOptions(request: VideoSyncScanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<VideoSyncScanResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VideoSyncScan",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/video/syncscan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<VideoSyncScanResponse>(await this.callApi(params, req, runtime), new VideoSyncScanResponse({}));
  }

  /**
   * 视频同步检测
   * 
   * @param request - VideoSyncScanRequest
   * @returns VideoSyncScanResponse
   */
  async videoSyncScan(request: VideoSyncScanRequest): Promise<VideoSyncScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.videoSyncScanWithOptions(request, headers, runtime);
  }

  /**
   * 视频点播异步检测
   * 
   * @param request - VodAsyncScanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VodAsyncScanResponse
   */
  async vodAsyncScanWithOptions(request: VodAsyncScanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<VodAsyncScanResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VodAsyncScan",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/vod/asyncscan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<VodAsyncScanResponse>(await this.callApi(params, req, runtime), new VodAsyncScanResponse({}));
  }

  /**
   * 视频点播异步检测
   * 
   * @param request - VodAsyncScanRequest
   * @returns VodAsyncScanResponse
   */
  async vodAsyncScan(request: VodAsyncScanRequest): Promise<VodAsyncScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.vodAsyncScanWithOptions(request, headers, runtime);
  }

  /**
   * 视频点播异步检测结果
   * 
   * @param request - VodAsyncScanResultsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VodAsyncScanResultsResponse
   */
  async vodAsyncScanResultsWithOptions(request: VodAsyncScanResultsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<VodAsyncScanResultsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VodAsyncScanResults",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/vod/results`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<VodAsyncScanResultsResponse>(await this.callApi(params, req, runtime), new VodAsyncScanResultsResponse({}));
  }

  /**
   * 视频点播异步检测结果
   * 
   * @param request - VodAsyncScanResultsRequest
   * @returns VodAsyncScanResultsResponse
   */
  async vodAsyncScanResults(request: VodAsyncScanResultsRequest): Promise<VodAsyncScanResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.vodAsyncScanResultsWithOptions(request, headers, runtime);
  }

  /**
   * 语音异步人工审核
   * 
   * @param request - VoiceAsyncManualScanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VoiceAsyncManualScanResponse
   */
  async voiceAsyncManualScanWithOptions(request: VoiceAsyncManualScanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<VoiceAsyncManualScanResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VoiceAsyncManualScan",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/voice/manual/asyncScan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<VoiceAsyncManualScanResponse>(await this.callApi(params, req, runtime), new VoiceAsyncManualScanResponse({}));
  }

  /**
   * 语音异步人工审核
   * 
   * @param request - VoiceAsyncManualScanRequest
   * @returns VoiceAsyncManualScanResponse
   */
  async voiceAsyncManualScan(request: VoiceAsyncManualScanRequest): Promise<VoiceAsyncManualScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.voiceAsyncManualScanWithOptions(request, headers, runtime);
  }

  /**
   * 语音异步人工审核结果
   * 
   * @param request - VoiceAsyncManualScanResultsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VoiceAsyncManualScanResultsResponse
   */
  async voiceAsyncManualScanResultsWithOptions(request: VoiceAsyncManualScanResultsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<VoiceAsyncManualScanResultsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VoiceAsyncManualScanResults",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/voice/manual/scan/results`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<VoiceAsyncManualScanResultsResponse>(await this.callApi(params, req, runtime), new VoiceAsyncManualScanResultsResponse({}));
  }

  /**
   * 语音异步人工审核结果
   * 
   * @param request - VoiceAsyncManualScanResultsRequest
   * @returns VoiceAsyncManualScanResultsResponse
   */
  async voiceAsyncManualScanResults(request: VoiceAsyncManualScanResultsRequest): Promise<VoiceAsyncManualScanResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.voiceAsyncManualScanResultsWithOptions(request, headers, runtime);
  }

  /**
   * 语音异步检测
   * 
   * @param request - VoiceAsyncScanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VoiceAsyncScanResponse
   */
  async voiceAsyncScanWithOptions(request: VoiceAsyncScanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<VoiceAsyncScanResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VoiceAsyncScan",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/voice/asyncscan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<VoiceAsyncScanResponse>(await this.callApi(params, req, runtime), new VoiceAsyncScanResponse({}));
  }

  /**
   * 语音异步检测
   * 
   * @param request - VoiceAsyncScanRequest
   * @returns VoiceAsyncScanResponse
   */
  async voiceAsyncScan(request: VoiceAsyncScanRequest): Promise<VoiceAsyncScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.voiceAsyncScanWithOptions(request, headers, runtime);
  }

  /**
   * 语音异步检测结果
   * 
   * @param request - VoiceAsyncScanResultsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VoiceAsyncScanResultsResponse
   */
  async voiceAsyncScanResultsWithOptions(request: VoiceAsyncScanResultsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<VoiceAsyncScanResultsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VoiceAsyncScanResults",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/voice/results`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<VoiceAsyncScanResultsResponse>(await this.callApi(params, req, runtime), new VoiceAsyncScanResultsResponse({}));
  }

  /**
   * 语音异步检测结果
   * 
   * @param request - VoiceAsyncScanResultsRequest
   * @returns VoiceAsyncScanResultsResponse
   */
  async voiceAsyncScanResults(request: VoiceAsyncScanResultsRequest): Promise<VoiceAsyncScanResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.voiceAsyncScanResultsWithOptions(request, headers, runtime);
  }

  /**
   * 语音取消检测
   * 
   * @param request - VoiceCancelScanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VoiceCancelScanResponse
   */
  async voiceCancelScanWithOptions(request: VoiceCancelScanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<VoiceCancelScanResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VoiceCancelScan",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/voice/cancelscan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<VoiceCancelScanResponse>(await this.callApi(params, req, runtime), new VoiceCancelScanResponse({}));
  }

  /**
   * 语音取消检测
   * 
   * @param request - VoiceCancelScanRequest
   * @returns VoiceCancelScanResponse
   */
  async voiceCancelScan(request: VoiceCancelScanRequest): Promise<VoiceCancelScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.voiceCancelScanWithOptions(request, headers, runtime);
  }

  /**
   * 声纹比对
   * 
   * @param request - VoiceIdentityCheckRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VoiceIdentityCheckResponse
   */
  async voiceIdentityCheckWithOptions(request: VoiceIdentityCheckRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<VoiceIdentityCheckResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VoiceIdentityCheck",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/voice/auth/check`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<VoiceIdentityCheckResponse>(await this.callApi(params, req, runtime), new VoiceIdentityCheckResponse({}));
  }

  /**
   * 声纹比对
   * 
   * @param request - VoiceIdentityCheckRequest
   * @returns VoiceIdentityCheckResponse
   */
  async voiceIdentityCheck(request: VoiceIdentityCheckRequest): Promise<VoiceIdentityCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.voiceIdentityCheckWithOptions(request, headers, runtime);
  }

  /**
   * 声纹注册
   * 
   * @param request - VoiceIdentityRegisterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VoiceIdentityRegisterResponse
   */
  async voiceIdentityRegisterWithOptions(request: VoiceIdentityRegisterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<VoiceIdentityRegisterResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VoiceIdentityRegister",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/voice/auth/register`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<VoiceIdentityRegisterResponse>(await this.callApi(params, req, runtime), new VoiceIdentityRegisterResponse({}));
  }

  /**
   * 声纹注册
   * 
   * @param request - VoiceIdentityRegisterRequest
   * @returns VoiceIdentityRegisterResponse
   */
  async voiceIdentityRegister(request: VoiceIdentityRegisterRequest): Promise<VoiceIdentityRegisterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.voiceIdentityRegisterWithOptions(request, headers, runtime);
  }

  /**
   * 声纹开始比对
   * 
   * @param request - VoiceIdentityStartCheckRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VoiceIdentityStartCheckResponse
   */
  async voiceIdentityStartCheckWithOptions(request: VoiceIdentityStartCheckRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<VoiceIdentityStartCheckResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VoiceIdentityStartCheck",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/voice/auth/start/check`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<VoiceIdentityStartCheckResponse>(await this.callApi(params, req, runtime), new VoiceIdentityStartCheckResponse({}));
  }

  /**
   * 声纹开始比对
   * 
   * @param request - VoiceIdentityStartCheckRequest
   * @returns VoiceIdentityStartCheckResponse
   */
  async voiceIdentityStartCheck(request: VoiceIdentityStartCheckRequest): Promise<VoiceIdentityStartCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.voiceIdentityStartCheckWithOptions(request, headers, runtime);
  }

  /**
   * 声纹开始注册
   * 
   * @param request - VoiceIdentityStartRegisterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VoiceIdentityStartRegisterResponse
   */
  async voiceIdentityStartRegisterWithOptions(request: VoiceIdentityStartRegisterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<VoiceIdentityStartRegisterResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VoiceIdentityStartRegister",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/voice/auth/start/register`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<VoiceIdentityStartRegisterResponse>(await this.callApi(params, req, runtime), new VoiceIdentityStartRegisterResponse({}));
  }

  /**
   * 声纹开始注册
   * 
   * @param request - VoiceIdentityStartRegisterRequest
   * @returns VoiceIdentityStartRegisterResponse
   */
  async voiceIdentityStartRegister(request: VoiceIdentityStartRegisterRequest): Promise<VoiceIdentityStartRegisterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.voiceIdentityStartRegisterWithOptions(request, headers, runtime);
  }

  /**
   * 声纹注销
   * 
   * @param request - VoiceIdentityUnregisterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VoiceIdentityUnregisterResponse
   */
  async voiceIdentityUnregisterWithOptions(request: VoiceIdentityUnregisterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<VoiceIdentityUnregisterResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VoiceIdentityUnregister",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/voice/auth/unregister`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<VoiceIdentityUnregisterResponse>(await this.callApi(params, req, runtime), new VoiceIdentityUnregisterResponse({}));
  }

  /**
   * 声纹注销
   * 
   * @param request - VoiceIdentityUnregisterRequest
   * @returns VoiceIdentityUnregisterResponse
   */
  async voiceIdentityUnregister(request: VoiceIdentityUnregisterRequest): Promise<VoiceIdentityUnregisterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.voiceIdentityUnregisterWithOptions(request, headers, runtime);
  }

  /**
   * 语音同步检测
   * 
   * @param request - VoiceSyncScanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VoiceSyncScanResponse
   */
  async voiceSyncScanWithOptions(request: VoiceSyncScanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<VoiceSyncScanResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VoiceSyncScan",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/voice/syncscan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<VoiceSyncScanResponse>(await this.callApi(params, req, runtime), new VoiceSyncScanResponse({}));
  }

  /**
   * 语音同步检测
   * 
   * @param request - VoiceSyncScanRequest
   * @returns VoiceSyncScanResponse
   */
  async voiceSyncScan(request: VoiceSyncScanRequest): Promise<VoiceSyncScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.voiceSyncScanWithOptions(request, headers, runtime);
  }

  /**
   * 站点异步检测
   * 
   * @param request - WebpageAsyncScanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns WebpageAsyncScanResponse
   */
  async webpageAsyncScanWithOptions(request: WebpageAsyncScanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<WebpageAsyncScanResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "WebpageAsyncScan",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/webpage/asyncscan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<WebpageAsyncScanResponse>(await this.callApi(params, req, runtime), new WebpageAsyncScanResponse({}));
  }

  /**
   * 站点异步检测
   * 
   * @param request - WebpageAsyncScanRequest
   * @returns WebpageAsyncScanResponse
   */
  async webpageAsyncScan(request: WebpageAsyncScanRequest): Promise<WebpageAsyncScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.webpageAsyncScanWithOptions(request, headers, runtime);
  }

  /**
   * 站点异步检测结果
   * 
   * @param request - WebpageAsyncScanResultsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns WebpageAsyncScanResultsResponse
   */
  async webpageAsyncScanResultsWithOptions(request: WebpageAsyncScanResultsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<WebpageAsyncScanResultsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "WebpageAsyncScanResults",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/webpage/results`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<WebpageAsyncScanResultsResponse>(await this.callApi(params, req, runtime), new WebpageAsyncScanResultsResponse({}));
  }

  /**
   * 站点异步检测结果
   * 
   * @param request - WebpageAsyncScanResultsRequest
   * @returns WebpageAsyncScanResultsResponse
   */
  async webpageAsyncScanResults(request: WebpageAsyncScanResultsRequest): Promise<WebpageAsyncScanResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.webpageAsyncScanResultsWithOptions(request, headers, runtime);
  }

  /**
   * 站点同步检测
   * 
   * @param request - WebpageSyncScanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns WebpageSyncScanResponse
   */
  async webpageSyncScanWithOptions(request: WebpageSyncScanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<WebpageSyncScanResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "WebpageSyncScan",
      version: "2018-05-09",
      protocol: "HTTPS",
      pathname: `/green/webpage/scan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<WebpageSyncScanResponse>(await this.callApi(params, req, runtime), new WebpageSyncScanResponse({}));
  }

  /**
   * 站点同步检测
   * 
   * @param request - WebpageSyncScanRequest
   * @returns WebpageSyncScanResponse
   */
  async webpageSyncScan(request: WebpageSyncScanRequest): Promise<WebpageSyncScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.webpageSyncScanWithOptions(request, headers, runtime);
  }

}
