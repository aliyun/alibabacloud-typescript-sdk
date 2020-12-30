// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddFacesRequest extends $tea.Model {
  regionId?: string;
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupsRequest extends $tea.Model {
  regionId?: string;
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPersonRequest extends $tea.Model {
  regionId?: string;
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPersonResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class AddSimilarityImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class AddSimilarityLibraryResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class AddVideoDnaResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class AddVideoDnaGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFacesRequest extends $tea.Model {
  regionId?: string;
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupsRequest extends $tea.Model {
  regionId?: string;
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePersonRequest extends $tea.Model {
  regionId?: string;
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePersonResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class DeleteSimilarityImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class DeleteSimilarityLibraryResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class DeleteVideoDnaResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class DeleteVideoDnaGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class DetectFaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class FileAsyncScanResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class FileAsyncScanResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddVideoDnaResultsRequest extends $tea.Model {
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

export class GetAddVideoDnaResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFacesRequest extends $tea.Model {
  regionId?: string;
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientInfo: 'string',
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
  headers: { [key: string]: string };
  body: GetFacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetFacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupsRequest extends $tea.Model {
  regionId?: string;
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonRequest extends $tea.Model {
  regionId?: string;
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonsRequest extends $tea.Model {
  regionId?: string;
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonsResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class GetSimilarityImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class GetSimilarityLibraryResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class ImageAsyncManualScanResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class ImageAsyncManualScanResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class ImageAsyncScanResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class ImageAsyncScanResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class ImageScanFeedbackResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class ImageSyncScanResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class ListSimilarityImagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class ListSimilarityLibrariesResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class LiveStreamAsyncScanResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class LiveStreamAsyncScanResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class LiveStreamCancelScanResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPersonRequest extends $tea.Model {
  regionId?: string;
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPersonResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPersonRequest extends $tea.Model {
  regionId?: string;
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPersonResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class TextAsyncManualScanResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class TextAsyncManualScanResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class TextFeedbackResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class TextScanResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCredentialsRequest extends $tea.Model {
  regionId?: string;
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCredentialsResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class VideoAsyncManualScanResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class VideoAsyncManualScanResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class VideoAsyncScanResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class VideoAsyncScanResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class VideoCancelScanResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class VideoFeedbackResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class VideoSyncScanResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class VodAsyncScanResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class VodAsyncScanResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class VoiceAsyncManualScanResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class VoiceAsyncManualScanResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class VoiceAsyncScanResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class VoiceAsyncScanResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class VoiceCancelScanResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceIdentityCheckRequest extends $tea.Model {
  regionId?: string;
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceIdentityCheckResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceIdentityRegisterRequest extends $tea.Model {
  regionId?: string;
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceIdentityRegisterResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceIdentityStartCheckRequest extends $tea.Model {
  regionId?: string;
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceIdentityStartCheckResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceIdentityStartRegisterRequest extends $tea.Model {
  regionId?: string;
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceIdentityStartRegisterResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceIdentityUnregisterRequest extends $tea.Model {
  regionId?: string;
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceIdentityUnregisterResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceSyncScanRequest extends $tea.Model {
  regionId?: string;
  clientInfo?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientInfo: 'ClientInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceSyncScanResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class WebpageAsyncScanResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class WebpageAsyncScanResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class WebpageSyncScanResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

  async addFaces(request: AddFacesRequest): Promise<AddFacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addFacesWithOptions(request, headers, runtime);
  }

  async addFacesWithOptions(request: AddFacesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddFacesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<AddFacesResponse>(await this.doROARequest("AddFaces", "2018-05-09", "HTTPS", "POST", "AK", `/green/sface/face/add`, "none", req, runtime), new AddFacesResponse({}));
  }

  async addGroups(request: AddGroupsRequest): Promise<AddGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addGroupsWithOptions(request, headers, runtime);
  }

  async addGroupsWithOptions(request: AddGroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddGroupsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<AddGroupsResponse>(await this.doROARequest("AddGroups", "2018-05-09", "HTTPS", "POST", "AK", `/green/sface/person/groups/add`, "none", req, runtime), new AddGroupsResponse({}));
  }

  async addPerson(request: AddPersonRequest): Promise<AddPersonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addPersonWithOptions(request, headers, runtime);
  }

  async addPersonWithOptions(request: AddPersonRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddPersonResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<AddPersonResponse>(await this.doROARequest("AddPerson", "2018-05-09", "HTTPS", "POST", "AK", `/green/sface/person/add`, "none", req, runtime), new AddPersonResponse({}));
  }

  async addSimilarityImage(request: AddSimilarityImageRequest): Promise<AddSimilarityImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addSimilarityImageWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<AddSimilarityImageResponse>(await this.doROARequest("AddSimilarityImage", "2018-05-09", "HTTPS", "POST", "AK", `/green/similarity/image/add`, "none", req, runtime), new AddSimilarityImageResponse({}));
  }

  async addSimilarityLibrary(request: AddSimilarityLibraryRequest): Promise<AddSimilarityLibraryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addSimilarityLibraryWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<AddSimilarityLibraryResponse>(await this.doROARequest("AddSimilarityLibrary", "2018-05-09", "HTTPS", "POST", "AK", `/green/similarity/library/add`, "none", req, runtime), new AddSimilarityLibraryResponse({}));
  }

  async addVideoDna(request: AddVideoDnaRequest): Promise<AddVideoDnaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addVideoDnaWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<AddVideoDnaResponse>(await this.doROARequest("AddVideoDna", "2018-05-09", "HTTPS", "POST", "AK", `/green/video/dna/add`, "none", req, runtime), new AddVideoDnaResponse({}));
  }

  async addVideoDnaGroup(request: AddVideoDnaGroupRequest): Promise<AddVideoDnaGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addVideoDnaGroupWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<AddVideoDnaGroupResponse>(await this.doROARequest("AddVideoDnaGroup", "2018-05-09", "HTTPS", "POST", "AK", `/green/video/dna/group/add`, "none", req, runtime), new AddVideoDnaGroupResponse({}));
  }

  async deleteFaces(request: DeleteFacesRequest): Promise<DeleteFacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFacesWithOptions(request, headers, runtime);
  }

  async deleteFacesWithOptions(request: DeleteFacesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteFacesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeleteFacesResponse>(await this.doROARequest("DeleteFaces", "2018-05-09", "HTTPS", "POST", "AK", `/green/sface/face/delete`, "none", req, runtime), new DeleteFacesResponse({}));
  }

  async deleteGroups(request: DeleteGroupsRequest): Promise<DeleteGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGroupsWithOptions(request, headers, runtime);
  }

  async deleteGroupsWithOptions(request: DeleteGroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteGroupsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeleteGroupsResponse>(await this.doROARequest("DeleteGroups", "2018-05-09", "HTTPS", "POST", "AK", `/green/sface/person/groups/delete`, "none", req, runtime), new DeleteGroupsResponse({}));
  }

  async deletePerson(request: DeletePersonRequest): Promise<DeletePersonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePersonWithOptions(request, headers, runtime);
  }

  async deletePersonWithOptions(request: DeletePersonRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeletePersonResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeletePersonResponse>(await this.doROARequest("DeletePerson", "2018-05-09", "HTTPS", "POST", "AK", `/green/sface/person/delete`, "none", req, runtime), new DeletePersonResponse({}));
  }

  async deleteSimilarityImage(request: DeleteSimilarityImageRequest): Promise<DeleteSimilarityImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSimilarityImageWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<DeleteSimilarityImageResponse>(await this.doROARequest("DeleteSimilarityImage", "2018-05-09", "HTTPS", "POST", "AK", `/green/similarity/image/delete`, "none", req, runtime), new DeleteSimilarityImageResponse({}));
  }

  async deleteSimilarityLibrary(request: DeleteSimilarityLibraryRequest): Promise<DeleteSimilarityLibraryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSimilarityLibraryWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<DeleteSimilarityLibraryResponse>(await this.doROARequest("DeleteSimilarityLibrary", "2018-05-09", "HTTPS", "POST", "AK", `/green/similarity/library/delete`, "none", req, runtime), new DeleteSimilarityLibraryResponse({}));
  }

  async deleteVideoDna(request: DeleteVideoDnaRequest): Promise<DeleteVideoDnaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteVideoDnaWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<DeleteVideoDnaResponse>(await this.doROARequest("DeleteVideoDna", "2018-05-09", "HTTPS", "POST", "AK", `/green/video/dna/delete`, "none", req, runtime), new DeleteVideoDnaResponse({}));
  }

  async deleteVideoDnaGroup(request: DeleteVideoDnaGroupRequest): Promise<DeleteVideoDnaGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteVideoDnaGroupWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<DeleteVideoDnaGroupResponse>(await this.doROARequest("DeleteVideoDnaGroup", "2018-05-09", "HTTPS", "POST", "AK", `/green/video/dna/group/delete`, "none", req, runtime), new DeleteVideoDnaGroupResponse({}));
  }

  async detectFace(request: DetectFaceRequest): Promise<DetectFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.detectFaceWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<DetectFaceResponse>(await this.doROARequest("DetectFace", "2018-05-09", "HTTPS", "POST", "AK", `/green/face/detect`, "none", req, runtime), new DetectFaceResponse({}));
  }

  async fileAsyncScan(request: FileAsyncScanRequest): Promise<FileAsyncScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.fileAsyncScanWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<FileAsyncScanResponse>(await this.doROARequest("FileAsyncScan", "2018-05-09", "HTTPS", "POST", "AK", `/green/file/asyncscan`, "none", req, runtime), new FileAsyncScanResponse({}));
  }

  async fileAsyncScanResults(request: FileAsyncScanResultsRequest): Promise<FileAsyncScanResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.fileAsyncScanResultsWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<FileAsyncScanResultsResponse>(await this.doROARequest("FileAsyncScanResults", "2018-05-09", "HTTPS", "POST", "AK", `/green/file/results`, "none", req, runtime), new FileAsyncScanResultsResponse({}));
  }

  async getAddVideoDnaResults(request: GetAddVideoDnaResultsRequest): Promise<GetAddVideoDnaResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAddVideoDnaResultsWithOptions(request, headers, runtime);
  }

  async getAddVideoDnaResultsWithOptions(request: GetAddVideoDnaResultsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAddVideoDnaResultsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetAddVideoDnaResultsResponse>(await this.doROARequest("GetAddVideoDnaResults", "2018-05-09", "HTTPS", "POST", "AK", `/green/video/dna/add/results`, "none", req, runtime), new GetAddVideoDnaResultsResponse({}));
  }

  async getFaces(request: GetFacesRequest): Promise<GetFacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFacesWithOptions(request, headers, runtime);
  }

  async getFacesWithOptions(request: GetFacesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFacesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetFacesResponse>(await this.doROARequest("GetFaces", "2018-05-09", "HTTPS", "POST", "AK", `/green/sface/faces`, "json", req, runtime), new GetFacesResponse({}));
  }

  async getGroups(request: GetGroupsRequest): Promise<GetGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGroupsWithOptions(request, headers, runtime);
  }

  async getGroupsWithOptions(request: GetGroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetGroupsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetGroupsResponse>(await this.doROARequest("GetGroups", "2018-05-09", "HTTPS", "POST", "AK", `/green/sface/groups`, "none", req, runtime), new GetGroupsResponse({}));
  }

  async getPerson(request: GetPersonRequest): Promise<GetPersonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPersonWithOptions(request, headers, runtime);
  }

  async getPersonWithOptions(request: GetPersonRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPersonResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetPersonResponse>(await this.doROARequest("GetPerson", "2018-05-09", "HTTPS", "POST", "AK", `/green/sface/person`, "none", req, runtime), new GetPersonResponse({}));
  }

  async getPersons(request: GetPersonsRequest): Promise<GetPersonsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPersonsWithOptions(request, headers, runtime);
  }

  async getPersonsWithOptions(request: GetPersonsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPersonsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetPersonsResponse>(await this.doROARequest("GetPersons", "2018-05-09", "HTTPS", "POST", "AK", `/green/sface/group/persons`, "none", req, runtime), new GetPersonsResponse({}));
  }

  async getSimilarityImage(request: GetSimilarityImageRequest): Promise<GetSimilarityImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSimilarityImageWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<GetSimilarityImageResponse>(await this.doROARequest("GetSimilarityImage", "2018-05-09", "HTTPS", "POST", "AK", `/green/similarity/image/get`, "none", req, runtime), new GetSimilarityImageResponse({}));
  }

  async getSimilarityLibrary(request: GetSimilarityLibraryRequest): Promise<GetSimilarityLibraryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSimilarityLibraryWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<GetSimilarityLibraryResponse>(await this.doROARequest("GetSimilarityLibrary", "2018-05-09", "HTTPS", "POST", "AK", `/green/similarity/library/get`, "none", req, runtime), new GetSimilarityLibraryResponse({}));
  }

  async imageAsyncManualScan(request: ImageAsyncManualScanRequest): Promise<ImageAsyncManualScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.imageAsyncManualScanWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<ImageAsyncManualScanResponse>(await this.doROARequest("ImageAsyncManualScan", "2018-05-09", "HTTPS", "POST", "AK", `/green/image/manual/asyncScan`, "none", req, runtime), new ImageAsyncManualScanResponse({}));
  }

  async imageAsyncManualScanResults(request: ImageAsyncManualScanResultsRequest): Promise<ImageAsyncManualScanResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.imageAsyncManualScanResultsWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<ImageAsyncManualScanResultsResponse>(await this.doROARequest("ImageAsyncManualScanResults", "2018-05-09", "HTTPS", "POST", "AK", `/green/image/manual/scan/results`, "none", req, runtime), new ImageAsyncManualScanResultsResponse({}));
  }

  async imageAsyncScan(request: ImageAsyncScanRequest): Promise<ImageAsyncScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.imageAsyncScanWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<ImageAsyncScanResponse>(await this.doROARequest("ImageAsyncScan", "2018-05-09", "HTTPS", "POST", "AK", `/green/image/asyncscan`, "none", req, runtime), new ImageAsyncScanResponse({}));
  }

  async imageAsyncScanResults(request: ImageAsyncScanResultsRequest): Promise<ImageAsyncScanResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.imageAsyncScanResultsWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<ImageAsyncScanResultsResponse>(await this.doROARequest("ImageAsyncScanResults", "2018-05-09", "HTTPS", "POST", "AK", `/green/image/results`, "none", req, runtime), new ImageAsyncScanResultsResponse({}));
  }

  async imageScanFeedback(request: ImageScanFeedbackRequest): Promise<ImageScanFeedbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.imageScanFeedbackWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<ImageScanFeedbackResponse>(await this.doROARequest("ImageScanFeedback", "2018-05-09", "HTTPS", "POST", "AK", `/green/image/feedback`, "none", req, runtime), new ImageScanFeedbackResponse({}));
  }

  async imageSyncScan(request: ImageSyncScanRequest): Promise<ImageSyncScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.imageSyncScanWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<ImageSyncScanResponse>(await this.doROARequest("ImageSyncScan", "2018-05-09", "HTTPS", "POST", "AK", `/green/image/scan`, "none", req, runtime), new ImageSyncScanResponse({}));
  }

  async listSimilarityImages(request: ListSimilarityImagesRequest): Promise<ListSimilarityImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSimilarityImagesWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<ListSimilarityImagesResponse>(await this.doROARequest("ListSimilarityImages", "2018-05-09", "HTTPS", "POST", "AK", `/green/similarity/image/list`, "none", req, runtime), new ListSimilarityImagesResponse({}));
  }

  async listSimilarityLibraries(request: ListSimilarityLibrariesRequest): Promise<ListSimilarityLibrariesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSimilarityLibrariesWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<ListSimilarityLibrariesResponse>(await this.doROARequest("ListSimilarityLibraries", "2018-05-09", "HTTPS", "POST", "AK", `/green/similarity/library/list`, "none", req, runtime), new ListSimilarityLibrariesResponse({}));
  }

  async liveStreamAsyncScan(request: LiveStreamAsyncScanRequest): Promise<LiveStreamAsyncScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.liveStreamAsyncScanWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<LiveStreamAsyncScanResponse>(await this.doROARequest("LiveStreamAsyncScan", "2018-05-09", "HTTPS", "POST", "AK", `/green/livestream/asyncscan`, "none", req, runtime), new LiveStreamAsyncScanResponse({}));
  }

  async liveStreamAsyncScanResults(request: LiveStreamAsyncScanResultsRequest): Promise<LiveStreamAsyncScanResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.liveStreamAsyncScanResultsWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<LiveStreamAsyncScanResultsResponse>(await this.doROARequest("LiveStreamAsyncScanResults", "2018-05-09", "HTTPS", "POST", "AK", `/green/livestream/results`, "none", req, runtime), new LiveStreamAsyncScanResultsResponse({}));
  }

  async liveStreamCancelScan(request: LiveStreamCancelScanRequest): Promise<LiveStreamCancelScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.liveStreamCancelScanWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<LiveStreamCancelScanResponse>(await this.doROARequest("LiveStreamCancelScan", "2018-05-09", "HTTPS", "POST", "AK", `/green/livestream/cancelscan`, "none", req, runtime), new LiveStreamCancelScanResponse({}));
  }

  async searchPerson(request: SearchPersonRequest): Promise<SearchPersonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchPersonWithOptions(request, headers, runtime);
  }

  async searchPersonWithOptions(request: SearchPersonRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SearchPersonResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<SearchPersonResponse>(await this.doROARequest("SearchPerson", "2018-05-09", "HTTPS", "POST", "AK", `/green/sface/search`, "none", req, runtime), new SearchPersonResponse({}));
  }

  async setPerson(request: SetPersonRequest): Promise<SetPersonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.setPersonWithOptions(request, headers, runtime);
  }

  async setPersonWithOptions(request: SetPersonRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SetPersonResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<SetPersonResponse>(await this.doROARequest("SetPerson", "2018-05-09", "HTTPS", "POST", "AK", `/green/sface/person/update`, "none", req, runtime), new SetPersonResponse({}));
  }

  async textAsyncManualScan(request: TextAsyncManualScanRequest): Promise<TextAsyncManualScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.textAsyncManualScanWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<TextAsyncManualScanResponse>(await this.doROARequest("TextAsyncManualScan", "2018-05-09", "HTTPS", "POST", "AK", `/green/text/manual/asyncScan`, "none", req, runtime), new TextAsyncManualScanResponse({}));
  }

  async textAsyncManualScanResults(request: TextAsyncManualScanResultsRequest): Promise<TextAsyncManualScanResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.textAsyncManualScanResultsWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<TextAsyncManualScanResultsResponse>(await this.doROARequest("TextAsyncManualScanResults", "2018-05-09", "HTTPS", "POST", "AK", `/green/text/manual/scan/results`, "none", req, runtime), new TextAsyncManualScanResultsResponse({}));
  }

  async textFeedback(request: TextFeedbackRequest): Promise<TextFeedbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.textFeedbackWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<TextFeedbackResponse>(await this.doROARequest("TextFeedback", "2018-05-09", "HTTPS", "POST", "AK", `/green/text/feedback`, "none", req, runtime), new TextFeedbackResponse({}));
  }

  async textScan(request: TextScanRequest): Promise<TextScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.textScanWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<TextScanResponse>(await this.doROARequest("TextScan", "2018-05-09", "HTTPS", "POST", "AK", `/green/text/scan`, "none", req, runtime), new TextScanResponse({}));
  }

  async uploadCredentials(request: UploadCredentialsRequest): Promise<UploadCredentialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uploadCredentialsWithOptions(request, headers, runtime);
  }

  async uploadCredentialsWithOptions(request: UploadCredentialsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UploadCredentialsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UploadCredentialsResponse>(await this.doROARequest("UploadCredentials", "2018-05-09", "HTTPS", "POST", "AK", `/green/credentials/uploadcredentials`, "none", req, runtime), new UploadCredentialsResponse({}));
  }

  async videoAsyncManualScan(request: VideoAsyncManualScanRequest): Promise<VideoAsyncManualScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.videoAsyncManualScanWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<VideoAsyncManualScanResponse>(await this.doROARequest("VideoAsyncManualScan", "2018-05-09", "HTTPS", "POST", "AK", `/green/video/manual/asyncScan`, "none", req, runtime), new VideoAsyncManualScanResponse({}));
  }

  async videoAsyncManualScanResults(request: VideoAsyncManualScanResultsRequest): Promise<VideoAsyncManualScanResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.videoAsyncManualScanResultsWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<VideoAsyncManualScanResultsResponse>(await this.doROARequest("VideoAsyncManualScanResults", "2018-05-09", "HTTPS", "POST", "AK", `/green/video/manual/scan/results`, "none", req, runtime), new VideoAsyncManualScanResultsResponse({}));
  }

  async videoAsyncScan(request: VideoAsyncScanRequest): Promise<VideoAsyncScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.videoAsyncScanWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<VideoAsyncScanResponse>(await this.doROARequest("VideoAsyncScan", "2018-05-09", "HTTPS", "POST", "AK", `/green/video/asyncscan`, "none", req, runtime), new VideoAsyncScanResponse({}));
  }

  async videoAsyncScanResults(request: VideoAsyncScanResultsRequest): Promise<VideoAsyncScanResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.videoAsyncScanResultsWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<VideoAsyncScanResultsResponse>(await this.doROARequest("VideoAsyncScanResults", "2018-05-09", "HTTPS", "POST", "AK", `/green/video/results`, "none", req, runtime), new VideoAsyncScanResultsResponse({}));
  }

  async videoCancelScan(request: VideoCancelScanRequest): Promise<VideoCancelScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.videoCancelScanWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<VideoCancelScanResponse>(await this.doROARequest("VideoCancelScan", "2018-05-09", "HTTPS", "POST", "AK", `/green/video/cancelscan`, "none", req, runtime), new VideoCancelScanResponse({}));
  }

  async videoFeedback(request: VideoFeedbackRequest): Promise<VideoFeedbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.videoFeedbackWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<VideoFeedbackResponse>(await this.doROARequest("VideoFeedback", "2018-05-09", "HTTPS", "POST", "AK", `/green/video/feedback`, "none", req, runtime), new VideoFeedbackResponse({}));
  }

  async videoSyncScan(request: VideoSyncScanRequest): Promise<VideoSyncScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.videoSyncScanWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<VideoSyncScanResponse>(await this.doROARequest("VideoSyncScan", "2018-05-09", "HTTPS", "POST", "AK", `/green/video/syncscan`, "none", req, runtime), new VideoSyncScanResponse({}));
  }

  async vodAsyncScan(request: VodAsyncScanRequest): Promise<VodAsyncScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.vodAsyncScanWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<VodAsyncScanResponse>(await this.doROARequest("VodAsyncScan", "2018-05-09", "HTTPS", "POST", "AK", `/green/vod/asyncscan`, "none", req, runtime), new VodAsyncScanResponse({}));
  }

  async vodAsyncScanResults(request: VodAsyncScanResultsRequest): Promise<VodAsyncScanResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.vodAsyncScanResultsWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<VodAsyncScanResultsResponse>(await this.doROARequest("VodAsyncScanResults", "2018-05-09", "HTTPS", "POST", "AK", `/green/vod/results`, "none", req, runtime), new VodAsyncScanResultsResponse({}));
  }

  async voiceAsyncManualScan(request: VoiceAsyncManualScanRequest): Promise<VoiceAsyncManualScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.voiceAsyncManualScanWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<VoiceAsyncManualScanResponse>(await this.doROARequest("VoiceAsyncManualScan", "2018-05-09", "HTTPS", "POST", "AK", `/green/voice/manual/asyncScan`, "none", req, runtime), new VoiceAsyncManualScanResponse({}));
  }

  async voiceAsyncManualScanResults(request: VoiceAsyncManualScanResultsRequest): Promise<VoiceAsyncManualScanResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.voiceAsyncManualScanResultsWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<VoiceAsyncManualScanResultsResponse>(await this.doROARequest("VoiceAsyncManualScanResults", "2018-05-09", "HTTPS", "POST", "AK", `/green/voice/manual/scan/results`, "none", req, runtime), new VoiceAsyncManualScanResultsResponse({}));
  }

  async voiceAsyncScan(request: VoiceAsyncScanRequest): Promise<VoiceAsyncScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.voiceAsyncScanWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<VoiceAsyncScanResponse>(await this.doROARequest("VoiceAsyncScan", "2018-05-09", "HTTPS", "POST", "AK", `/green/voice/asyncscan`, "none", req, runtime), new VoiceAsyncScanResponse({}));
  }

  async voiceAsyncScanResults(request: VoiceAsyncScanResultsRequest): Promise<VoiceAsyncScanResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.voiceAsyncScanResultsWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<VoiceAsyncScanResultsResponse>(await this.doROARequest("VoiceAsyncScanResults", "2018-05-09", "HTTPS", "POST", "AK", `/green/voice/results`, "none", req, runtime), new VoiceAsyncScanResultsResponse({}));
  }

  async voiceCancelScan(request: VoiceCancelScanRequest): Promise<VoiceCancelScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.voiceCancelScanWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<VoiceCancelScanResponse>(await this.doROARequest("VoiceCancelScan", "2018-05-09", "HTTPS", "POST", "AK", `/green/voice/cancelscan`, "none", req, runtime), new VoiceCancelScanResponse({}));
  }

  async voiceIdentityCheck(request: VoiceIdentityCheckRequest): Promise<VoiceIdentityCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.voiceIdentityCheckWithOptions(request, headers, runtime);
  }

  async voiceIdentityCheckWithOptions(request: VoiceIdentityCheckRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<VoiceIdentityCheckResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<VoiceIdentityCheckResponse>(await this.doROARequest("VoiceIdentityCheck", "2018-05-09", "HTTPS", "POST", "AK", `/green/voice/auth/check`, "none", req, runtime), new VoiceIdentityCheckResponse({}));
  }

  async voiceIdentityRegister(request: VoiceIdentityRegisterRequest): Promise<VoiceIdentityRegisterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.voiceIdentityRegisterWithOptions(request, headers, runtime);
  }

  async voiceIdentityRegisterWithOptions(request: VoiceIdentityRegisterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<VoiceIdentityRegisterResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<VoiceIdentityRegisterResponse>(await this.doROARequest("VoiceIdentityRegister", "2018-05-09", "HTTPS", "POST", "AK", `/green/voice/auth/register`, "none", req, runtime), new VoiceIdentityRegisterResponse({}));
  }

  async voiceIdentityStartCheck(request: VoiceIdentityStartCheckRequest): Promise<VoiceIdentityStartCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.voiceIdentityStartCheckWithOptions(request, headers, runtime);
  }

  async voiceIdentityStartCheckWithOptions(request: VoiceIdentityStartCheckRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<VoiceIdentityStartCheckResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<VoiceIdentityStartCheckResponse>(await this.doROARequest("VoiceIdentityStartCheck", "2018-05-09", "HTTPS", "POST", "AK", `/green/voice/auth/start/check`, "none", req, runtime), new VoiceIdentityStartCheckResponse({}));
  }

  async voiceIdentityStartRegister(request: VoiceIdentityStartRegisterRequest): Promise<VoiceIdentityStartRegisterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.voiceIdentityStartRegisterWithOptions(request, headers, runtime);
  }

  async voiceIdentityStartRegisterWithOptions(request: VoiceIdentityStartRegisterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<VoiceIdentityStartRegisterResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<VoiceIdentityStartRegisterResponse>(await this.doROARequest("VoiceIdentityStartRegister", "2018-05-09", "HTTPS", "POST", "AK", `/green/voice/auth/start/register`, "none", req, runtime), new VoiceIdentityStartRegisterResponse({}));
  }

  async voiceIdentityUnregister(request: VoiceIdentityUnregisterRequest): Promise<VoiceIdentityUnregisterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.voiceIdentityUnregisterWithOptions(request, headers, runtime);
  }

  async voiceIdentityUnregisterWithOptions(request: VoiceIdentityUnregisterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<VoiceIdentityUnregisterResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<VoiceIdentityUnregisterResponse>(await this.doROARequest("VoiceIdentityUnregister", "2018-05-09", "HTTPS", "POST", "AK", `/green/voice/auth/unregister`, "none", req, runtime), new VoiceIdentityUnregisterResponse({}));
  }

  async voiceSyncScan(request: VoiceSyncScanRequest): Promise<VoiceSyncScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.voiceSyncScanWithOptions(request, headers, runtime);
  }

  async voiceSyncScanWithOptions(request: VoiceSyncScanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<VoiceSyncScanResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.clientInfo)) {
      query["ClientInfo"] = request.clientInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<VoiceSyncScanResponse>(await this.doROARequest("VoiceSyncScan", "2018-05-09", "HTTPS", "POST", "AK", `/green/voice/syncscan`, "none", req, runtime), new VoiceSyncScanResponse({}));
  }

  async webpageAsyncScan(request: WebpageAsyncScanRequest): Promise<WebpageAsyncScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.webpageAsyncScanWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<WebpageAsyncScanResponse>(await this.doROARequest("WebpageAsyncScan", "2018-05-09", "HTTPS", "POST", "AK", `/green/webpage/asyncscan`, "none", req, runtime), new WebpageAsyncScanResponse({}));
  }

  async webpageAsyncScanResults(request: WebpageAsyncScanResultsRequest): Promise<WebpageAsyncScanResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.webpageAsyncScanResultsWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<WebpageAsyncScanResultsResponse>(await this.doROARequest("WebpageAsyncScanResults", "2018-05-09", "HTTPS", "POST", "AK", `/green/webpage/results`, "none", req, runtime), new WebpageAsyncScanResultsResponse({}));
  }

  async webpageSyncScan(request: WebpageSyncScanRequest): Promise<WebpageSyncScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.webpageSyncScanWithOptions(request, headers, runtime);
  }

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
    return $tea.cast<WebpageSyncScanResponse>(await this.doROARequest("WebpageSyncScan", "2018-05-09", "HTTPS", "POST", "AK", `/green/webpage/scan`, "none", req, runtime), new WebpageSyncScanResponse({}));
  }

}
