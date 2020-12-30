// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AttachStreamRequest extends $tea.Model {
  jobGroupId?: string;
  regionId?: string;
  instanceId?: string;
  streams?: AttachStreamRequestStreams[];
  static names(): { [key: string]: string } {
    return {
      jobGroupId: 'JobGroupId',
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      streams: 'Streams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobGroupId: 'string',
      regionId: 'string',
      instanceId: 'string',
      streams: { 'type': 'array', 'itemType': AttachStreamRequestStreams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachStreamResponseBody extends $tea.Model {
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

export class AttachStreamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AttachStreamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AttachStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchModifyCameraStatusRequest extends $tea.Model {
  streamStatus?: string;
  cameraIds?: string;
  workGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      streamStatus: 'StreamStatus',
      cameraIds: 'CameraIds',
      workGroupId: 'WorkGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamStatus: 'string',
      cameraIds: 'string',
      workGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchModifyCameraStatusResponseBody extends $tea.Model {
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

export class BatchModifyCameraStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchModifyCameraStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchModifyCameraStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlgoLibRequest extends $tea.Model {
  algoLibName?: string;
  algoLibVersion?: string;
  capacity?: number;
  ossEndpoint?: string;
  ossAccessKeyId?: string;
  ossBucket?: string;
  ossPath?: string;
  jsonText?: string;
  capabilityNames?: string;
  ossAccessKeySecret?: string;
  text?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      algoLibName: 'AlgoLibName',
      algoLibVersion: 'AlgoLibVersion',
      capacity: 'Capacity',
      ossEndpoint: 'OssEndpoint',
      ossAccessKeyId: 'OssAccessKeyId',
      ossBucket: 'OssBucket',
      ossPath: 'OssPath',
      jsonText: 'JsonText',
      capabilityNames: 'CapabilityNames',
      ossAccessKeySecret: 'OssAccessKeySecret',
      text: 'Text',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algoLibName: 'string',
      algoLibVersion: 'string',
      capacity: 'number',
      ossEndpoint: 'string',
      ossAccessKeyId: 'string',
      ossBucket: 'string',
      ossPath: 'string',
      jsonText: 'string',
      capabilityNames: 'string',
      ossAccessKeySecret: 'string',
      text: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlgoLibResponseBody extends $tea.Model {
  requestId?: string;
  algoLibId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      algoLibId: 'AlgoLibId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      algoLibId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlgoLibResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAlgoLibResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAlgoLibResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCameraRequest extends $tea.Model {
  cameraName?: string;
  workGroupId?: string;
  cameraId?: string;
  locationInfo?: string;
  inviteUri?: string;
  ossPath?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cameraName: 'CameraName',
      workGroupId: 'WorkGroupId',
      cameraId: 'CameraId',
      locationInfo: 'LocationInfo',
      inviteUri: 'InviteUri',
      ossPath: 'OssPath',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cameraName: 'string',
      workGroupId: 'string',
      cameraId: 'string',
      locationInfo: 'string',
      inviteUri: 'string',
      ossPath: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCameraResponseBody extends $tea.Model {
  requestId?: string;
  cameraId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      cameraId: 'CameraId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      cameraId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCameraResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCameraResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCameraResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCapabilityRequest extends $tea.Model {
  capabilityName?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      capabilityName: 'CapabilityName',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capabilityName: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCapabilityResponseBody extends $tea.Model {
  capabilityId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      capabilityId: 'CapabilityId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capabilityId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCapabilityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCapabilityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCapabilityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  instanceName?: string;
  description?: string;
  instanceCapacity?: number;
  status?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      description: 'Description',
      instanceCapacity: 'InstanceCapacity',
      status: 'Status',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      description: 'string',
      instanceCapacity: 'number',
      status: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  requestId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobGroupRequest extends $tea.Model {
  jobGroupName?: string;
  resourceProfileId?: string;
  algoLibId?: string;
  planedJobCount?: number;
  streamPerJob?: number;
  jobCount?: number;
  instanceId?: string;
  regionId?: string;
  jobGroupParams?: CreateJobGroupRequestJobGroupParams[];
  static names(): { [key: string]: string } {
    return {
      jobGroupName: 'JobGroupName',
      resourceProfileId: 'ResourceProfileId',
      algoLibId: 'AlgoLibId',
      planedJobCount: 'PlanedJobCount',
      streamPerJob: 'StreamPerJob',
      jobCount: 'JobCount',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      jobGroupParams: 'JobGroupParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobGroupName: 'string',
      resourceProfileId: 'string',
      algoLibId: 'string',
      planedJobCount: 'number',
      streamPerJob: 'number',
      jobCount: 'number',
      instanceId: 'string',
      regionId: 'string',
      jobGroupParams: { 'type': 'array', 'itemType': CreateJobGroupRequestJobGroupParams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobGroupResponseBody extends $tea.Model {
  jobGroupId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobGroupId: 'JobGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobGroupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateJobGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateJobGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceProfileRequest extends $tea.Model {
  resourceProfileName?: string;
  instanceId?: string;
  regionId?: string;
  resourceProfileParams?: CreateResourceProfileRequestResourceProfileParams[];
  static names(): { [key: string]: string } {
    return {
      resourceProfileName: 'ResourceProfileName',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceProfileParams: 'ResourceProfileParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceProfileName: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceProfileParams: { 'type': 'array', 'itemType': CreateResourceProfileRequestResourceProfileParams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceProfileResponseBody extends $tea.Model {
  requestId?: string;
  resourceProfileId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceProfileId: 'ResourceProfileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceProfileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceProfileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateResourceProfileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateResourceProfileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkGroupRequest extends $tea.Model {
  workGroupName?: string;
  protocol?: string;
  theoryCutStatus?: string;
  description?: string;
  jobNum?: number;
  topicNum?: number;
  topicPrefix?: string;
  account?: string;
  password?: string;
  ip?: string;
  port?: number;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      workGroupName: 'WorkGroupName',
      protocol: 'Protocol',
      theoryCutStatus: 'TheoryCutStatus',
      description: 'Description',
      jobNum: 'JobNum',
      topicNum: 'TopicNum',
      topicPrefix: 'TopicPrefix',
      account: 'Account',
      password: 'Password',
      ip: 'Ip',
      port: 'Port',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workGroupName: 'string',
      protocol: 'string',
      theoryCutStatus: 'string',
      description: 'string',
      jobNum: 'number',
      topicNum: 'number',
      topicPrefix: 'string',
      account: 'string',
      password: 'string',
      ip: 'string',
      port: 'number',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkGroupResponseBody extends $tea.Model {
  workGroupId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      workGroupId: 'WorkGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workGroupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateWorkGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateWorkGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlgoLibRequest extends $tea.Model {
  algoLibId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      algoLibId: 'AlgoLibId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algoLibId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlgoLibResponseBody extends $tea.Model {
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

export class DeleteAlgoLibResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAlgoLibResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAlgoLibResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCameraRequest extends $tea.Model {
  cameraId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cameraId: 'CameraId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cameraId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCameraResponseBody extends $tea.Model {
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

export class DeleteCameraResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCameraResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCameraResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCapabilityRequest extends $tea.Model {
  capabilityId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      capabilityId: 'CapabilityId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capabilityId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCapabilityResponseBody extends $tea.Model {
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

export class DeleteCapabilityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCapabilityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCapabilityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponseBody extends $tea.Model {
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

export class DeleteInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobGroupRequest extends $tea.Model {
  jobGroupId?: string;
  regionId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      jobGroupId: 'JobGroupId',
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobGroupId: 'string',
      regionId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobGroupResponseBody extends $tea.Model {
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

export class DeleteJobGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteJobGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteJobGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceProfileRequest extends $tea.Model {
  resourceProfileId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceProfileId: 'ResourceProfileId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceProfileId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceProfileResponseBody extends $tea.Model {
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

export class DeleteResourceProfileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteResourceProfileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteResourceProfileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkGroupRequest extends $tea.Model {
  workGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      workGroupId: 'WorkGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkGroupResponseBody extends $tea.Model {
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

export class DeleteWorkGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteWorkGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteWorkGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlgoLibsRequest extends $tea.Model {
  algoLibName?: string;
  capabilityName?: string;
  pageNumber?: number;
  pageSize?: number;
  instanceId?: string;
  algoLibId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      algoLibName: 'AlgoLibName',
      capabilityName: 'CapabilityName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      instanceId: 'InstanceId',
      algoLibId: 'AlgoLibId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algoLibName: 'string',
      capabilityName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      instanceId: 'string',
      algoLibId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlgoLibsResponseBody extends $tea.Model {
  algoLibs?: DescribeAlgoLibsResponseBodyAlgoLibs;
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      algoLibs: 'AlgoLibs',
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algoLibs: DescribeAlgoLibsResponseBodyAlgoLibs,
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlgoLibsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAlgoLibsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAlgoLibsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCamerasRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  cameraId?: string;
  cameraName?: string;
  streamStatus?: string;
  workGroupId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      cameraId: 'CameraId',
      cameraName: 'CameraName',
      streamStatus: 'StreamStatus',
      workGroupId: 'WorkGroupId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      cameraId: 'string',
      cameraName: 'string',
      streamStatus: 'string',
      workGroupId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCamerasResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  cameras?: DescribeCamerasResponseBodyCameras;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      cameras: 'Cameras',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      cameras: DescribeCamerasResponseBodyCameras,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCamerasResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCamerasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCamerasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapabilitiesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapabilitiesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  capabilities?: DescribeCapabilitiesResponseBodyCapabilities;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      capabilities: 'Capabilities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      capabilities: DescribeCapabilitiesResponseBodyCapabilities,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapabilitiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCapabilitiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCapabilitiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequest extends $tea.Model {
  instanceName?: string;
  regionId?: string;
  instanceIds?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      regionId: 'RegionId',
      instanceIds: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      regionId: 'string',
      instanceIds: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $tea.Model {
  instances?: DescribeInstancesResponseBodyInstances;
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: DescribeInstancesResponseBodyInstances,
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  instanceId?: string;
  jobGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      instanceId: 'string',
      jobGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  jobGroups?: DescribeJobGroupsResponseBodyJobGroups;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      jobGroups: 'JobGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      jobGroups: DescribeJobGroupsResponseBodyJobGroups,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeJobGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeJobGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtocolsRequest extends $tea.Model {
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

export class DescribeProtocolsResponseBody extends $tea.Model {
  protocols?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      protocols: 'Protocols',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocols: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtocolsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeProtocolsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeProtocolsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeRegionsResponseBodyRegions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: DescribeRegionsResponseBodyRegions,
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

export class DescribeResourceProfilesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  instanceId?: string;
  resourceProfileId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      instanceId: 'InstanceId',
      resourceProfileId: 'ResourceProfileId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      instanceId: 'string',
      resourceProfileId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceProfilesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  resourceProfiles?: DescribeResourceProfilesResponseBodyResourceProfiles;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      resourceProfiles: 'ResourceProfiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      resourceProfiles: DescribeResourceProfilesResponseBodyResourceProfiles,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceProfilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeResourceProfilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeResourceProfilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamsRequest extends $tea.Model {
  jobGroupId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      jobGroupId: 'JobGroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobGroupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  streams?: DescribeStreamsResponseBodyStreams;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      streams: 'Streams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      streams: DescribeStreamsResponseBodyStreams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeStreamsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeStreamsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkGroupsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  instanceId?: string;
  workGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      instanceId: 'InstanceId',
      workGroupId: 'WorkGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      instanceId: 'string',
      workGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkGroupsResponseBody extends $tea.Model {
  workGroups?: DescribeWorkGroupsResponseBodyWorkGroups;
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      workGroups: 'WorkGroups',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workGroups: DescribeWorkGroupsResponseBodyWorkGroups,
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeWorkGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeWorkGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachStreamRequest extends $tea.Model {
  jobGroupId?: string;
  regionId?: string;
  streams?: DetachStreamRequestStreams[];
  static names(): { [key: string]: string } {
    return {
      jobGroupId: 'JobGroupId',
      regionId: 'RegionId',
      streams: 'Streams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobGroupId: 'string',
      regionId: 'string',
      streams: { 'type': 'array', 'itemType': DetachStreamRequestStreams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachStreamResponseBody extends $tea.Model {
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

export class DetachStreamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetachStreamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetachStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCameraConfForCameraRequest extends $tea.Model {
  cameraId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cameraId: 'CameraId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cameraId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCameraConfForCameraResponseBody extends $tea.Model {
  cameraConf?: GetCameraConfForCameraResponseBodyCameraConf;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cameraConf: 'CameraConf',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cameraConf: GetCameraConfForCameraResponseBodyCameraConf,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCameraConfForCameraResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCameraConfForCameraResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCameraConfForCameraResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComputeJobLogRequest extends $tea.Model {
  jobGroupId?: string;
  jobId?: string;
  jobLogName?: string;
  size?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      jobGroupId: 'JobGroupId',
      jobId: 'JobId',
      jobLogName: 'JobLogName',
      size: 'Size',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobGroupId: 'string',
      jobId: 'string',
      jobLogName: 'string',
      size: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComputeJobLogResponseBody extends $tea.Model {
  requestId?: string;
  jobLog?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      jobLog: 'JobLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      jobLog: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComputeJobLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetComputeJobLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetComputeJobLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPlayUrlForCameraRequest extends $tea.Model {
  cameraId?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cameraId: 'CameraId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cameraId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPlayUrlForCameraResponseBody extends $tea.Model {
  requestId?: string;
  playUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      playUrl: 'PlayUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      playUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPlayUrlForCameraResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPlayUrlForCameraResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPlayUrlForCameraResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeJobLogsRequest extends $tea.Model {
  jobGroupId?: string;
  computeJobId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      jobGroupId: 'JobGroupId',
      computeJobId: 'ComputeJobId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobGroupId: 'string',
      computeJobId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeJobLogsResponseBody extends $tea.Model {
  requestId?: string;
  jobLogs?: ListComputeJobLogsResponseBodyJobLogs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      jobLogs: 'JobLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      jobLogs: ListComputeJobLogsResponseBodyJobLogs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeJobLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListComputeJobLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListComputeJobLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParkingResultsRequest extends $tea.Model {
  startTime?: string;
  endTime?: string;
  cameraIds?: string;
  instanceId?: string;
  regionId?: string;
  vehiclePlate?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      cameraIds: 'CameraIds',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      vehiclePlate: 'VehiclePlate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      endTime: 'string',
      cameraIds: 'string',
      instanceId: 'string',
      regionId: 'string',
      vehiclePlate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParkingResultsResponseBody extends $tea.Model {
  totalCount?: number;
  totalPage?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  results?: ListParkingResultsResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      totalPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      results: { 'type': 'array', 'itemType': ListParkingResultsResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParkingResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListParkingResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListParkingResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSafetyHelmetResultsRequest extends $tea.Model {
  startTime?: string;
  endTime?: string;
  cameraIds?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      cameraIds: 'CameraIds',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      endTime: 'string',
      cameraIds: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSafetyHelmetResultsResponseBody extends $tea.Model {
  totalCount?: number;
  totalPage?: number;
  requestId?: string;
  pageNumber?: number;
  results?: ListSafetyHelmetResultsResponseBodyResults[];
  pageIndex?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      results: 'Results',
      pageIndex: 'PageIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      totalPage: 'number',
      requestId: 'string',
      pageNumber: 'number',
      results: { 'type': 'array', 'itemType': ListSafetyHelmetResultsResponseBodyResults },
      pageIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSafetyHelmetResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSafetyHelmetResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSafetyHelmetResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStreamsForCamerasRequest extends $tea.Model {
  cameraIds?: string;
  regionId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      cameraIds: 'CameraIds',
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cameraIds: 'string',
      regionId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStreamsForCamerasResponseBody extends $tea.Model {
  requestId?: string;
  streams?: ListStreamsForCamerasResponseBodyStreams;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      streams: 'Streams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      streams: ListStreamsForCamerasResponseBodyStreams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStreamsForCamerasResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListStreamsForCamerasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListStreamsForCamerasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleEntryResultsRequest extends $tea.Model {
  startTime?: string;
  endTime?: string;
  cameraIds?: string;
  instanceId?: string;
  regionId?: string;
  vehiclePlate?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      cameraIds: 'CameraIds',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      vehiclePlate: 'VehiclePlate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      endTime: 'string',
      cameraIds: 'string',
      instanceId: 'string',
      regionId: 'string',
      vehiclePlate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleEntryResultsResponseBody extends $tea.Model {
  totalCount?: number;
  totalPage?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  results?: ListVehicleEntryResultsResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      totalPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      results: { 'type': 'array', 'itemType': ListVehicleEntryResultsResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleEntryResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVehicleEntryResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVehicleEntryResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAlgoLibRequest extends $tea.Model {
  algoLibName?: string;
  algoLibVersion?: string;
  capacity?: number;
  ossEndpoint?: string;
  ossAccessKeyId?: string;
  ossBucket?: string;
  ossPath?: string;
  jsonText?: string;
  capabilityNames?: string;
  algoLibId?: string;
  ossAccessKeySecret?: string;
  text?: string;
  regionId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      algoLibName: 'AlgoLibName',
      algoLibVersion: 'AlgoLibVersion',
      capacity: 'Capacity',
      ossEndpoint: 'OssEndpoint',
      ossAccessKeyId: 'OssAccessKeyId',
      ossBucket: 'OssBucket',
      ossPath: 'OssPath',
      jsonText: 'JsonText',
      capabilityNames: 'CapabilityNames',
      algoLibId: 'AlgoLibId',
      ossAccessKeySecret: 'OssAccessKeySecret',
      text: 'Text',
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algoLibName: 'string',
      algoLibVersion: 'string',
      capacity: 'number',
      ossEndpoint: 'string',
      ossAccessKeyId: 'string',
      ossBucket: 'string',
      ossPath: 'string',
      jsonText: 'string',
      capabilityNames: 'string',
      algoLibId: 'string',
      ossAccessKeySecret: 'string',
      text: 'string',
      regionId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAlgoLibResponseBody extends $tea.Model {
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

export class ModifyAlgoLibResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyAlgoLibResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyAlgoLibResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCameraRequest extends $tea.Model {
  cameraName?: string;
  cameraId?: string;
  locationInfo?: string;
  inviteUri?: string;
  regionId?: string;
  streamStatus?: string;
  static names(): { [key: string]: string } {
    return {
      cameraName: 'CameraName',
      cameraId: 'CameraId',
      locationInfo: 'LocationInfo',
      inviteUri: 'InviteUri',
      regionId: 'RegionId',
      streamStatus: 'StreamStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cameraName: 'string',
      cameraId: 'string',
      locationInfo: 'string',
      inviteUri: 'string',
      regionId: 'string',
      streamStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCameraResponseBody extends $tea.Model {
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

export class ModifyCameraResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyCameraResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyCameraResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCapabilityRequest extends $tea.Model {
  capabilityName?: string;
  capabilityId?: string;
  regionId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      capabilityName: 'CapabilityName',
      capabilityId: 'CapabilityId',
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capabilityName: 'string',
      capabilityId: 'string',
      regionId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCapabilityResponseBody extends $tea.Model {
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

export class ModifyCapabilityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyCapabilityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyCapabilityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceRequest extends $tea.Model {
  instanceName?: string;
  description?: string;
  status?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      description: 'Description',
      status: 'Status',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      description: 'string',
      status: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceResponseBody extends $tea.Model {
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

export class ModifyInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyJobGroupRequest extends $tea.Model {
  jobGroupName?: string;
  resourceProfileId?: string;
  algoLibId?: string;
  planedJobCount?: number;
  streamPerJob?: number;
  jobCount?: number;
  jobGroupId?: string;
  status?: string;
  regionId?: string;
  instanceId?: string;
  jobGroupParams?: ModifyJobGroupRequestJobGroupParams[];
  static names(): { [key: string]: string } {
    return {
      jobGroupName: 'JobGroupName',
      resourceProfileId: 'ResourceProfileId',
      algoLibId: 'AlgoLibId',
      planedJobCount: 'PlanedJobCount',
      streamPerJob: 'StreamPerJob',
      jobCount: 'JobCount',
      jobGroupId: 'JobGroupId',
      status: 'Status',
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      jobGroupParams: 'JobGroupParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobGroupName: 'string',
      resourceProfileId: 'string',
      algoLibId: 'string',
      planedJobCount: 'number',
      streamPerJob: 'number',
      jobCount: 'number',
      jobGroupId: 'string',
      status: 'string',
      regionId: 'string',
      instanceId: 'string',
      jobGroupParams: { 'type': 'array', 'itemType': ModifyJobGroupRequestJobGroupParams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyJobGroupResponseBody extends $tea.Model {
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

export class ModifyJobGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyJobGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyJobGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyResourceProfileRequest extends $tea.Model {
  resourceProfileName?: string;
  resourceProfileId?: string;
  regionId?: string;
  instanceId?: string;
  resourceProfileParams?: ModifyResourceProfileRequestResourceProfileParams[];
  static names(): { [key: string]: string } {
    return {
      resourceProfileName: 'ResourceProfileName',
      resourceProfileId: 'ResourceProfileId',
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      resourceProfileParams: 'ResourceProfileParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceProfileName: 'string',
      resourceProfileId: 'string',
      regionId: 'string',
      instanceId: 'string',
      resourceProfileParams: { 'type': 'array', 'itemType': ModifyResourceProfileRequestResourceProfileParams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyResourceProfileResponseBody extends $tea.Model {
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

export class ModifyResourceProfileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyResourceProfileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyResourceProfileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWorkGroupRequest extends $tea.Model {
  workGroupId?: string;
  description?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      workGroupId: 'WorkGroupId',
      description: 'Description',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workGroupId: 'string',
      description: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWorkGroupResponseBody extends $tea.Model {
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

export class ModifyWorkGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyWorkGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyWorkGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCameraConfForCameraRequest extends $tea.Model {
  cameraId?: string;
  instanceId?: string;
  regionId?: string;
  cameraName?: string;
  context?: string;
  static names(): { [key: string]: string } {
    return {
      cameraId: 'CameraId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      cameraName: 'CameraName',
      context: 'Context',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cameraId: 'string',
      instanceId: 'string',
      regionId: 'string',
      cameraName: 'string',
      context: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCameraConfForCameraResponseBody extends $tea.Model {
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

export class PutCameraConfForCameraResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutCameraConfForCameraResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutCameraConfForCameraResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImagesRequest extends $tea.Model {
  from?: number;
  size?: number;
  type?: string;
  contents?: string;
  startTime?: string;
  endTime?: string;
  imageIds?: string;
  cameraIds?: string;
  instanceId?: string;
  noFeature?: string;
  regionId?: string;
  attribute?: SearchImagesRequestAttribute[];
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      size: 'Size',
      type: 'Type',
      contents: 'Contents',
      startTime: 'StartTime',
      endTime: 'EndTime',
      imageIds: 'ImageIds',
      cameraIds: 'CameraIds',
      instanceId: 'InstanceId',
      noFeature: 'NoFeature',
      regionId: 'RegionId',
      attribute: 'Attribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      size: 'number',
      type: 'string',
      contents: 'string',
      startTime: 'string',
      endTime: 'string',
      imageIds: 'string',
      cameraIds: 'string',
      instanceId: 'string',
      noFeature: 'string',
      regionId: 'string',
      attribute: { 'type': 'array', 'itemType': SearchImagesRequestAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImagesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  images?: SearchImagesResponseBodyImages;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      images: 'Images',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      images: SearchImagesResponseBodyImages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobGroupRequest extends $tea.Model {
  jobGroupId?: string;
  regionId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      jobGroupId: 'JobGroupId',
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobGroupId: 'string',
      regionId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobGroupResponseBody extends $tea.Model {
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

export class StartJobGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartJobGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartJobGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopJobGroupRequest extends $tea.Model {
  jobGroupId?: string;
  regionId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      jobGroupId: 'JobGroupId',
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobGroupId: 'string',
      regionId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopJobGroupResponseBody extends $tea.Model {
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

export class StopJobGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopJobGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopJobGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachStreamRequestStreams extends $tea.Model {
  streamName?: string;
  streamURL?: string;
  static names(): { [key: string]: string } {
    return {
      streamName: 'StreamName',
      streamURL: 'StreamURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamName: 'string',
      streamURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobGroupRequestJobGroupParams extends $tea.Model {
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

export class CreateResourceProfileRequestResourceProfileParams extends $tea.Model {
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

export class DescribeAlgoLibsResponseBodyAlgoLibsAlgoLib extends $tea.Model {
  ossAccessKeyId?: string;
  capacity?: string;
  algoLibId?: string;
  jsonText?: string;
  algoLibVersion?: string;
  algoLibName?: string;
  text?: string;
  ossBucket?: string;
  capabilityNames?: string;
  ossPath?: string;
  ossEndpoint?: string;
  uploadTime?: string;
  static names(): { [key: string]: string } {
    return {
      ossAccessKeyId: 'OssAccessKeyId',
      capacity: 'Capacity',
      algoLibId: 'AlgoLibId',
      jsonText: 'JsonText',
      algoLibVersion: 'AlgoLibVersion',
      algoLibName: 'AlgoLibName',
      text: 'Text',
      ossBucket: 'OssBucket',
      capabilityNames: 'CapabilityNames',
      ossPath: 'OssPath',
      ossEndpoint: 'OssEndpoint',
      uploadTime: 'UploadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossAccessKeyId: 'string',
      capacity: 'string',
      algoLibId: 'string',
      jsonText: 'string',
      algoLibVersion: 'string',
      algoLibName: 'string',
      text: 'string',
      ossBucket: 'string',
      capabilityNames: 'string',
      ossPath: 'string',
      ossEndpoint: 'string',
      uploadTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlgoLibsResponseBodyAlgoLibs extends $tea.Model {
  algoLib?: DescribeAlgoLibsResponseBodyAlgoLibsAlgoLib[];
  static names(): { [key: string]: string } {
    return {
      algoLib: 'AlgoLib',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algoLib: { 'type': 'array', 'itemType': DescribeAlgoLibsResponseBodyAlgoLibsAlgoLib },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCamerasResponseBodyCamerasCamera extends $tea.Model {
  streamStatus?: string;
  updateTime?: string;
  cameraId?: string;
  conf?: string;
  rtmpPath?: string;
  inviteUri?: string;
  cameraName?: string;
  workGroupId?: string;
  location?: string;
  static names(): { [key: string]: string } {
    return {
      streamStatus: 'StreamStatus',
      updateTime: 'UpdateTime',
      cameraId: 'CameraId',
      conf: 'Conf',
      rtmpPath: 'RtmpPath',
      inviteUri: 'InviteUri',
      cameraName: 'CameraName',
      workGroupId: 'WorkGroupId',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamStatus: 'string',
      updateTime: 'string',
      cameraId: 'string',
      conf: 'string',
      rtmpPath: 'string',
      inviteUri: 'string',
      cameraName: 'string',
      workGroupId: 'string',
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCamerasResponseBodyCameras extends $tea.Model {
  camera?: DescribeCamerasResponseBodyCamerasCamera[];
  static names(): { [key: string]: string } {
    return {
      camera: 'Camera',
    };
  }

  static types(): { [key: string]: any } {
    return {
      camera: { 'type': 'array', 'itemType': DescribeCamerasResponseBodyCamerasCamera },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapabilitiesResponseBodyCapabilitiesCapability extends $tea.Model {
  capabilityId?: string;
  capabilityName?: string;
  static names(): { [key: string]: string } {
    return {
      capabilityId: 'CapabilityId',
      capabilityName: 'CapabilityName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capabilityId: 'string',
      capabilityName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapabilitiesResponseBodyCapabilities extends $tea.Model {
  capability?: DescribeCapabilitiesResponseBodyCapabilitiesCapability[];
  static names(): { [key: string]: string } {
    return {
      capability: 'Capability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capability: { 'type': 'array', 'itemType': DescribeCapabilitiesResponseBodyCapabilitiesCapability },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesInstance extends $tea.Model {
  status?: string;
  instanceCapacity?: number;
  description?: string;
  createTime?: string;
  instanceName?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      instanceCapacity: 'InstanceCapacity',
      description: 'Description',
      createTime: 'CreateTime',
      instanceName: 'InstanceName',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      instanceCapacity: 'number',
      description: 'string',
      createTime: 'string',
      instanceName: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstances extends $tea.Model {
  instance?: DescribeInstancesResponseBodyInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupsResponseBodyJobGroupsJobGroupJobGroupParamsJobGroupParam extends $tea.Model {
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

export class DescribeJobGroupsResponseBodyJobGroupsJobGroupJobGroupParams extends $tea.Model {
  jobGroupParam?: DescribeJobGroupsResponseBodyJobGroupsJobGroupJobGroupParamsJobGroupParam[];
  static names(): { [key: string]: string } {
    return {
      jobGroupParam: 'JobGroupParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobGroupParam: { 'type': 'array', 'itemType': DescribeJobGroupsResponseBodyJobGroupsJobGroupJobGroupParamsJobGroupParam },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupsResponseBodyJobGroupsJobGroupComputeJobsComputeJob extends $tea.Model {
  endTime?: string;
  startTime?: string;
  computeJobName?: string;
  computeJobId?: string;
  computeJobStatus?: string;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      computeJobName: 'ComputeJobName',
      computeJobId: 'ComputeJobId',
      computeJobStatus: 'ComputeJobStatus',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      computeJobName: 'string',
      computeJobId: 'string',
      computeJobStatus: 'string',
      duration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupsResponseBodyJobGroupsJobGroupComputeJobs extends $tea.Model {
  computeJob?: DescribeJobGroupsResponseBodyJobGroupsJobGroupComputeJobsComputeJob[];
  static names(): { [key: string]: string } {
    return {
      computeJob: 'ComputeJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeJob: { 'type': 'array', 'itemType': DescribeJobGroupsResponseBodyJobGroupsJobGroupComputeJobsComputeJob },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupsResponseBodyJobGroupsJobGroup extends $tea.Model {
  status?: string;
  jobGroupId?: string;
  algoLibId?: string;
  jobCount?: number;
  jobGroupName?: string;
  jobGroupParams?: DescribeJobGroupsResponseBodyJobGroupsJobGroupJobGroupParams;
  resourceProfileId?: string;
  streamPerJob?: number;
  planedJobCount?: number;
  computeJobs?: DescribeJobGroupsResponseBodyJobGroupsJobGroupComputeJobs;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      jobGroupId: 'JobGroupId',
      algoLibId: 'AlgoLibId',
      jobCount: 'JobCount',
      jobGroupName: 'JobGroupName',
      jobGroupParams: 'JobGroupParams',
      resourceProfileId: 'ResourceProfileId',
      streamPerJob: 'StreamPerJob',
      planedJobCount: 'PlanedJobCount',
      computeJobs: 'ComputeJobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      jobGroupId: 'string',
      algoLibId: 'string',
      jobCount: 'number',
      jobGroupName: 'string',
      jobGroupParams: DescribeJobGroupsResponseBodyJobGroupsJobGroupJobGroupParams,
      resourceProfileId: 'string',
      streamPerJob: 'number',
      planedJobCount: 'number',
      computeJobs: DescribeJobGroupsResponseBodyJobGroupsJobGroupComputeJobs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupsResponseBodyJobGroups extends $tea.Model {
  jobGroup?: DescribeJobGroupsResponseBodyJobGroupsJobGroup[];
  static names(): { [key: string]: string } {
    return {
      jobGroup: 'JobGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobGroup: { 'type': 'array', 'itemType': DescribeJobGroupsResponseBodyJobGroupsJobGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
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

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  region?: DescribeRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceProfilesResponseBodyResourceProfilesResourceProfileResourceProfileParamsResourceProfileParam extends $tea.Model {
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

export class DescribeResourceProfilesResponseBodyResourceProfilesResourceProfileResourceProfileParams extends $tea.Model {
  resourceProfileParam?: DescribeResourceProfilesResponseBodyResourceProfilesResourceProfileResourceProfileParamsResourceProfileParam[];
  static names(): { [key: string]: string } {
    return {
      resourceProfileParam: 'ResourceProfileParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceProfileParam: { 'type': 'array', 'itemType': DescribeResourceProfilesResponseBodyResourceProfilesResourceProfileResourceProfileParamsResourceProfileParam },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceProfilesResponseBodyResourceProfilesResourceProfile extends $tea.Model {
  resourceProfileName?: string;
  resourceProfileId?: string;
  resourceProfileParams?: DescribeResourceProfilesResponseBodyResourceProfilesResourceProfileResourceProfileParams;
  static names(): { [key: string]: string } {
    return {
      resourceProfileName: 'ResourceProfileName',
      resourceProfileId: 'ResourceProfileId',
      resourceProfileParams: 'ResourceProfileParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceProfileName: 'string',
      resourceProfileId: 'string',
      resourceProfileParams: DescribeResourceProfilesResponseBodyResourceProfilesResourceProfileResourceProfileParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceProfilesResponseBodyResourceProfiles extends $tea.Model {
  resourceProfile?: DescribeResourceProfilesResponseBodyResourceProfilesResourceProfile[];
  static names(): { [key: string]: string } {
    return {
      resourceProfile: 'ResourceProfile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceProfile: { 'type': 'array', 'itemType': DescribeResourceProfilesResponseBodyResourceProfilesResourceProfile },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamsResponseBodyStreamsStream extends $tea.Model {
  jobGroupId?: number;
  streamName?: string;
  computeJobId?: string;
  objCount?: number;
  delayMS?: number;
  streamURL?: string;
  static names(): { [key: string]: string } {
    return {
      jobGroupId: 'JobGroupId',
      streamName: 'StreamName',
      computeJobId: 'ComputeJobId',
      objCount: 'ObjCount',
      delayMS: 'DelayMS',
      streamURL: 'StreamURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobGroupId: 'number',
      streamName: 'string',
      computeJobId: 'string',
      objCount: 'number',
      delayMS: 'number',
      streamURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStreamsResponseBodyStreams extends $tea.Model {
  stream?: DescribeStreamsResponseBodyStreamsStream[];
  static names(): { [key: string]: string } {
    return {
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stream: { 'type': 'array', 'itemType': DescribeStreamsResponseBodyStreamsStream },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkGroupsResponseBodyWorkGroupsWorkGroup extends $tea.Model {
  updateTime?: string;
  description?: string;
  protocol?: string;
  createTime?: string;
  instanceId?: string;
  theoryCutStatus?: string;
  workGroupId?: string;
  workGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      description: 'Description',
      protocol: 'Protocol',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      theoryCutStatus: 'TheoryCutStatus',
      workGroupId: 'WorkGroupId',
      workGroupName: 'WorkGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'string',
      description: 'string',
      protocol: 'string',
      createTime: 'string',
      instanceId: 'string',
      theoryCutStatus: 'string',
      workGroupId: 'string',
      workGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkGroupsResponseBodyWorkGroups extends $tea.Model {
  workGroup?: DescribeWorkGroupsResponseBodyWorkGroupsWorkGroup[];
  static names(): { [key: string]: string } {
    return {
      workGroup: 'WorkGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workGroup: { 'type': 'array', 'itemType': DescribeWorkGroupsResponseBodyWorkGroupsWorkGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachStreamRequestStreams extends $tea.Model {
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCameraConfForCameraResponseBodyCameraConf extends $tea.Model {
  context?: string;
  cameraId?: string;
  cameraName?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
      cameraId: 'CameraId',
      cameraName: 'CameraName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'string',
      cameraId: 'string',
      cameraName: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeJobLogsResponseBodyJobLogs extends $tea.Model {
  jobLog?: string[];
  static names(): { [key: string]: string } {
    return {
      jobLog: 'JobLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobLog: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParkingResultsResponseBodyResults extends $tea.Model {
  vehicleType?: string;
  cameraId?: string;
  objRight?: number;
  objType?: string;
  feature?: string;
  objLeft?: number;
  cropImage?: string;
  objTop?: number;
  label?: string;
  leaveTime?: string;
  objBottom?: number;
  functionType?: string;
  origImage?: string;
  timeStamp?: string;
  vehiclePlate?: string;
  entryTime?: string;
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      vehicleType: 'VehicleType',
      cameraId: 'CameraId',
      objRight: 'ObjRight',
      objType: 'ObjType',
      feature: 'Feature',
      objLeft: 'ObjLeft',
      cropImage: 'CropImage',
      objTop: 'ObjTop',
      label: 'Label',
      leaveTime: 'LeaveTime',
      objBottom: 'ObjBottom',
      functionType: 'FunctionType',
      origImage: 'OrigImage',
      timeStamp: 'TimeStamp',
      vehiclePlate: 'VehiclePlate',
      entryTime: 'EntryTime',
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vehicleType: 'string',
      cameraId: 'string',
      objRight: 'number',
      objType: 'string',
      feature: 'string',
      objLeft: 'number',
      cropImage: 'string',
      objTop: 'number',
      label: 'string',
      leaveTime: 'string',
      objBottom: 'number',
      functionType: 'string',
      origImage: 'string',
      timeStamp: 'string',
      vehiclePlate: 'string',
      entryTime: 'string',
      imageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSafetyHelmetResultsResponseBodyResults extends $tea.Model {
  cameraId?: string;
  objType?: string;
  objRight?: number;
  feature?: string;
  objLeft?: number;
  cropImage?: string;
  objTop?: number;
  label?: string;
  leaveTime?: string;
  objBottom?: number;
  timeStamp?: string;
  origImage?: string;
  imageId?: string;
  entryTime?: string;
  static names(): { [key: string]: string } {
    return {
      cameraId: 'CameraId',
      objType: 'ObjType',
      objRight: 'ObjRight',
      feature: 'Feature',
      objLeft: 'ObjLeft',
      cropImage: 'CropImage',
      objTop: 'ObjTop',
      label: 'Label',
      leaveTime: 'LeaveTime',
      objBottom: 'ObjBottom',
      timeStamp: 'TimeStamp',
      origImage: 'OrigImage',
      imageId: 'ImageId',
      entryTime: 'EntryTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cameraId: 'string',
      objType: 'string',
      objRight: 'number',
      feature: 'string',
      objLeft: 'number',
      cropImage: 'string',
      objTop: 'number',
      label: 'string',
      leaveTime: 'string',
      objBottom: 'number',
      timeStamp: 'string',
      origImage: 'string',
      imageId: 'string',
      entryTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStreamsForCamerasResponseBodyStreams extends $tea.Model {
  stream?: string[];
  static names(): { [key: string]: string } {
    return {
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stream: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleEntryResultsResponseBodyResults extends $tea.Model {
  cameraId?: string;
  objRight?: number;
  objType?: string;
  feature?: string;
  plateLeft?: number;
  objLeft?: number;
  score?: number;
  cropImage?: string;
  objTop?: number;
  label?: string;
  plateBottom?: number;
  leaveTime?: string;
  plateTop?: number;
  objBottom?: number;
  plateRight?: number;
  origImage?: string;
  timeStamp?: string;
  vehiclePlate?: string;
  entryTime?: string;
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      cameraId: 'CameraId',
      objRight: 'ObjRight',
      objType: 'ObjType',
      feature: 'Feature',
      plateLeft: 'PlateLeft',
      objLeft: 'ObjLeft',
      score: 'Score',
      cropImage: 'CropImage',
      objTop: 'ObjTop',
      label: 'Label',
      plateBottom: 'PlateBottom',
      leaveTime: 'LeaveTime',
      plateTop: 'PlateTop',
      objBottom: 'ObjBottom',
      plateRight: 'PlateRight',
      origImage: 'OrigImage',
      timeStamp: 'TimeStamp',
      vehiclePlate: 'VehiclePlate',
      entryTime: 'EntryTime',
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cameraId: 'string',
      objRight: 'number',
      objType: 'string',
      feature: 'string',
      plateLeft: 'number',
      objLeft: 'number',
      score: 'number',
      cropImage: 'string',
      objTop: 'number',
      label: 'string',
      plateBottom: 'number',
      leaveTime: 'string',
      plateTop: 'number',
      objBottom: 'number',
      plateRight: 'number',
      origImage: 'string',
      timeStamp: 'string',
      vehiclePlate: 'string',
      entryTime: 'string',
      imageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyJobGroupRequestJobGroupParams extends $tea.Model {
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

export class ModifyResourceProfileRequestResourceProfileParams extends $tea.Model {
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

export class SearchImagesRequestAttribute extends $tea.Model {
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

export class SearchImagesResponseBodyImagesImage extends $tea.Model {
  cameraId?: string;
  trouserTypeScore?: number;
  objType?: string;
  trouserColor?: string;
  clothTypeScore?: number;
  brand?: string;
  poseType?: string;
  vehicleColor?: string;
  objLeft?: number;
  score?: number;
  headWearScore?: number;
  ageTypeScore?: number;
  sexTypeScore?: number;
  nonVehicleType?: string;
  objBottom?: number;
  plateNumber?: string;
  clothType?: string;
  timeStamp?: string;
  origImage?: string;
  vehicleTypeScore?: number;
  trouserColorScore?: number;
  imageId?: string;
  vehicleColorScore?: number;
  hairTypeScore?: number;
  hairType?: string;
  nonVehicleTypeScore?: number;
  headWear?: string;
  vehicleType?: string;
  sexType?: string;
  poseTypeScore?: number;
  objRight?: number;
  feature?: string;
  clothColorScore?: number;
  cropImage?: string;
  objTop?: number;
  brandScore?: number;
  clothColor?: string;
  ageType?: string;
  leaveTime?: string;
  trouserType?: string;
  entryTime?: string;
  static names(): { [key: string]: string } {
    return {
      cameraId: 'CameraId',
      trouserTypeScore: 'TrouserTypeScore',
      objType: 'ObjType',
      trouserColor: 'TrouserColor',
      clothTypeScore: 'ClothTypeScore',
      brand: 'Brand',
      poseType: 'PoseType',
      vehicleColor: 'VehicleColor',
      objLeft: 'ObjLeft',
      score: 'Score',
      headWearScore: 'HeadWearScore',
      ageTypeScore: 'AgeTypeScore',
      sexTypeScore: 'SexTypeScore',
      nonVehicleType: 'NonVehicleType',
      objBottom: 'ObjBottom',
      plateNumber: 'PlateNumber',
      clothType: 'ClothType',
      timeStamp: 'TimeStamp',
      origImage: 'OrigImage',
      vehicleTypeScore: 'VehicleTypeScore',
      trouserColorScore: 'TrouserColorScore',
      imageId: 'ImageId',
      vehicleColorScore: 'VehicleColorScore',
      hairTypeScore: 'HairTypeScore',
      hairType: 'HairType',
      nonVehicleTypeScore: 'NonVehicleTypeScore',
      headWear: 'HeadWear',
      vehicleType: 'VehicleType',
      sexType: 'SexType',
      poseTypeScore: 'PoseTypeScore',
      objRight: 'ObjRight',
      feature: 'Feature',
      clothColorScore: 'ClothColorScore',
      cropImage: 'CropImage',
      objTop: 'ObjTop',
      brandScore: 'BrandScore',
      clothColor: 'ClothColor',
      ageType: 'AgeType',
      leaveTime: 'LeaveTime',
      trouserType: 'TrouserType',
      entryTime: 'EntryTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cameraId: 'string',
      trouserTypeScore: 'number',
      objType: 'string',
      trouserColor: 'string',
      clothTypeScore: 'number',
      brand: 'string',
      poseType: 'string',
      vehicleColor: 'string',
      objLeft: 'number',
      score: 'number',
      headWearScore: 'number',
      ageTypeScore: 'number',
      sexTypeScore: 'number',
      nonVehicleType: 'string',
      objBottom: 'number',
      plateNumber: 'string',
      clothType: 'string',
      timeStamp: 'string',
      origImage: 'string',
      vehicleTypeScore: 'number',
      trouserColorScore: 'number',
      imageId: 'string',
      vehicleColorScore: 'number',
      hairTypeScore: 'number',
      hairType: 'string',
      nonVehicleTypeScore: 'number',
      headWear: 'string',
      vehicleType: 'string',
      sexType: 'string',
      poseTypeScore: 'number',
      objRight: 'number',
      feature: 'string',
      clothColorScore: 'number',
      cropImage: 'string',
      objTop: 'number',
      brandScore: 'number',
      clothColor: 'string',
      ageType: 'string',
      leaveTime: 'string',
      trouserType: 'string',
      entryTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImagesResponseBodyImages extends $tea.Model {
  image?: SearchImagesResponseBodyImagesImage[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: { 'type': 'array', 'itemType': SearchImagesResponseBodyImagesImage },
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
    this._endpoint = this.getEndpoint("cityvisual", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async attachStreamWithOptions(request: AttachStreamRequest, runtime: $Util.RuntimeOptions): Promise<AttachStreamResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AttachStreamResponse>(await this.doRPCRequest("AttachStream", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new AttachStreamResponse({}));
  }

  async attachStream(request: AttachStreamRequest): Promise<AttachStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachStreamWithOptions(request, runtime);
  }

  async batchModifyCameraStatusWithOptions(request: BatchModifyCameraStatusRequest, runtime: $Util.RuntimeOptions): Promise<BatchModifyCameraStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchModifyCameraStatusResponse>(await this.doRPCRequest("BatchModifyCameraStatus", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new BatchModifyCameraStatusResponse({}));
  }

  async batchModifyCameraStatus(request: BatchModifyCameraStatusRequest): Promise<BatchModifyCameraStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchModifyCameraStatusWithOptions(request, runtime);
  }

  async createAlgoLibWithOptions(request: CreateAlgoLibRequest, runtime: $Util.RuntimeOptions): Promise<CreateAlgoLibResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAlgoLibResponse>(await this.doRPCRequest("CreateAlgoLib", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAlgoLibResponse({}));
  }

  async createAlgoLib(request: CreateAlgoLibRequest): Promise<CreateAlgoLibResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAlgoLibWithOptions(request, runtime);
  }

  async createCameraWithOptions(request: CreateCameraRequest, runtime: $Util.RuntimeOptions): Promise<CreateCameraResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCameraResponse>(await this.doRPCRequest("CreateCamera", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCameraResponse({}));
  }

  async createCamera(request: CreateCameraRequest): Promise<CreateCameraResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCameraWithOptions(request, runtime);
  }

  async createCapabilityWithOptions(request: CreateCapabilityRequest, runtime: $Util.RuntimeOptions): Promise<CreateCapabilityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCapabilityResponse>(await this.doRPCRequest("CreateCapability", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCapabilityResponse({}));
  }

  async createCapability(request: CreateCapabilityRequest): Promise<CreateCapabilityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCapabilityWithOptions(request, runtime);
  }

  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateInstanceResponse>(await this.doRPCRequest("CreateInstance", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateInstanceResponse({}));
  }

  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  async createJobGroupWithOptions(request: CreateJobGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateJobGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateJobGroupResponse>(await this.doRPCRequest("CreateJobGroup", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateJobGroupResponse({}));
  }

  async createJobGroup(request: CreateJobGroupRequest): Promise<CreateJobGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createJobGroupWithOptions(request, runtime);
  }

  async createResourceProfileWithOptions(request: CreateResourceProfileRequest, runtime: $Util.RuntimeOptions): Promise<CreateResourceProfileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateResourceProfileResponse>(await this.doRPCRequest("CreateResourceProfile", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateResourceProfileResponse({}));
  }

  async createResourceProfile(request: CreateResourceProfileRequest): Promise<CreateResourceProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createResourceProfileWithOptions(request, runtime);
  }

  async createWorkGroupWithOptions(request: CreateWorkGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateWorkGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateWorkGroupResponse>(await this.doRPCRequest("CreateWorkGroup", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateWorkGroupResponse({}));
  }

  async createWorkGroup(request: CreateWorkGroupRequest): Promise<CreateWorkGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWorkGroupWithOptions(request, runtime);
  }

  async deleteAlgoLibWithOptions(request: DeleteAlgoLibRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAlgoLibResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAlgoLibResponse>(await this.doRPCRequest("DeleteAlgoLib", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAlgoLibResponse({}));
  }

  async deleteAlgoLib(request: DeleteAlgoLibRequest): Promise<DeleteAlgoLibResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAlgoLibWithOptions(request, runtime);
  }

  async deleteCameraWithOptions(request: DeleteCameraRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCameraResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCameraResponse>(await this.doRPCRequest("DeleteCamera", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCameraResponse({}));
  }

  async deleteCamera(request: DeleteCameraRequest): Promise<DeleteCameraResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCameraWithOptions(request, runtime);
  }

  async deleteCapabilityWithOptions(request: DeleteCapabilityRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCapabilityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCapabilityResponse>(await this.doRPCRequest("DeleteCapability", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCapabilityResponse({}));
  }

  async deleteCapability(request: DeleteCapabilityRequest): Promise<DeleteCapabilityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCapabilityWithOptions(request, runtime);
  }

  async deleteInstanceWithOptions(request: DeleteInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteInstanceResponse>(await this.doRPCRequest("DeleteInstance", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteInstanceResponse({}));
  }

  async deleteInstance(request: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  async deleteJobGroupWithOptions(request: DeleteJobGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteJobGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteJobGroupResponse>(await this.doRPCRequest("DeleteJobGroup", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteJobGroupResponse({}));
  }

  async deleteJobGroup(request: DeleteJobGroupRequest): Promise<DeleteJobGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteJobGroupWithOptions(request, runtime);
  }

  async deleteResourceProfileWithOptions(request: DeleteResourceProfileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteResourceProfileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteResourceProfileResponse>(await this.doRPCRequest("DeleteResourceProfile", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteResourceProfileResponse({}));
  }

  async deleteResourceProfile(request: DeleteResourceProfileRequest): Promise<DeleteResourceProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteResourceProfileWithOptions(request, runtime);
  }

  async deleteWorkGroupWithOptions(request: DeleteWorkGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWorkGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteWorkGroupResponse>(await this.doRPCRequest("DeleteWorkGroup", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteWorkGroupResponse({}));
  }

  async deleteWorkGroup(request: DeleteWorkGroupRequest): Promise<DeleteWorkGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWorkGroupWithOptions(request, runtime);
  }

  async describeAlgoLibsWithOptions(request: DescribeAlgoLibsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlgoLibsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAlgoLibsResponse>(await this.doRPCRequest("DescribeAlgoLibs", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAlgoLibsResponse({}));
  }

  async describeAlgoLibs(request: DescribeAlgoLibsRequest): Promise<DescribeAlgoLibsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlgoLibsWithOptions(request, runtime);
  }

  async describeCamerasWithOptions(request: DescribeCamerasRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCamerasResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCamerasResponse>(await this.doRPCRequest("DescribeCameras", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCamerasResponse({}));
  }

  async describeCameras(request: DescribeCamerasRequest): Promise<DescribeCamerasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCamerasWithOptions(request, runtime);
  }

  async describeCapabilitiesWithOptions(request: DescribeCapabilitiesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCapabilitiesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCapabilitiesResponse>(await this.doRPCRequest("DescribeCapabilities", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCapabilitiesResponse({}));
  }

  async describeCapabilities(request: DescribeCapabilitiesRequest): Promise<DescribeCapabilitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCapabilitiesWithOptions(request, runtime);
  }

  async describeInstancesWithOptions(request: DescribeInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstancesResponse>(await this.doRPCRequest("DescribeInstances", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstancesResponse({}));
  }

  async describeInstances(request: DescribeInstancesRequest): Promise<DescribeInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  async describeJobGroupsWithOptions(request: DescribeJobGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeJobGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeJobGroupsResponse>(await this.doRPCRequest("DescribeJobGroups", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeJobGroupsResponse({}));
  }

  async describeJobGroups(request: DescribeJobGroupsRequest): Promise<DescribeJobGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeJobGroupsWithOptions(request, runtime);
  }

  async describeProtocolsWithOptions(request: DescribeProtocolsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProtocolsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeProtocolsResponse>(await this.doRPCRequest("DescribeProtocols", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeProtocolsResponse({}));
  }

  async describeProtocols(request: DescribeProtocolsRequest): Promise<DescribeProtocolsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProtocolsWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeResourceProfilesWithOptions(request: DescribeResourceProfilesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourceProfilesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeResourceProfilesResponse>(await this.doRPCRequest("DescribeResourceProfiles", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeResourceProfilesResponse({}));
  }

  async describeResourceProfiles(request: DescribeResourceProfilesRequest): Promise<DescribeResourceProfilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourceProfilesWithOptions(request, runtime);
  }

  async describeStreamsWithOptions(request: DescribeStreamsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStreamsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeStreamsResponse>(await this.doRPCRequest("DescribeStreams", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeStreamsResponse({}));
  }

  async describeStreams(request: DescribeStreamsRequest): Promise<DescribeStreamsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStreamsWithOptions(request, runtime);
  }

  async describeWorkGroupsWithOptions(request: DescribeWorkGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWorkGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeWorkGroupsResponse>(await this.doRPCRequest("DescribeWorkGroups", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeWorkGroupsResponse({}));
  }

  async describeWorkGroups(request: DescribeWorkGroupsRequest): Promise<DescribeWorkGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWorkGroupsWithOptions(request, runtime);
  }

  async detachStreamWithOptions(request: DetachStreamRequest, runtime: $Util.RuntimeOptions): Promise<DetachStreamResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetachStreamResponse>(await this.doRPCRequest("DetachStream", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new DetachStreamResponse({}));
  }

  async detachStream(request: DetachStreamRequest): Promise<DetachStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachStreamWithOptions(request, runtime);
  }

  async getCameraConfForCameraWithOptions(request: GetCameraConfForCameraRequest, runtime: $Util.RuntimeOptions): Promise<GetCameraConfForCameraResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetCameraConfForCameraResponse>(await this.doRPCRequest("GetCameraConfForCamera", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetCameraConfForCameraResponse({}));
  }

  async getCameraConfForCamera(request: GetCameraConfForCameraRequest): Promise<GetCameraConfForCameraResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCameraConfForCameraWithOptions(request, runtime);
  }

  async getComputeJobLogWithOptions(request: GetComputeJobLogRequest, runtime: $Util.RuntimeOptions): Promise<GetComputeJobLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetComputeJobLogResponse>(await this.doRPCRequest("GetComputeJobLog", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetComputeJobLogResponse({}));
  }

  async getComputeJobLog(request: GetComputeJobLogRequest): Promise<GetComputeJobLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getComputeJobLogWithOptions(request, runtime);
  }

  async getPlayUrlForCameraWithOptions(request: GetPlayUrlForCameraRequest, runtime: $Util.RuntimeOptions): Promise<GetPlayUrlForCameraResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPlayUrlForCameraResponse>(await this.doRPCRequest("GetPlayUrlForCamera", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetPlayUrlForCameraResponse({}));
  }

  async getPlayUrlForCamera(request: GetPlayUrlForCameraRequest): Promise<GetPlayUrlForCameraResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPlayUrlForCameraWithOptions(request, runtime);
  }

  async listComputeJobLogsWithOptions(request: ListComputeJobLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListComputeJobLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListComputeJobLogsResponse>(await this.doRPCRequest("ListComputeJobLogs", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListComputeJobLogsResponse({}));
  }

  async listComputeJobLogs(request: ListComputeJobLogsRequest): Promise<ListComputeJobLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listComputeJobLogsWithOptions(request, runtime);
  }

  async listParkingResultsWithOptions(request: ListParkingResultsRequest, runtime: $Util.RuntimeOptions): Promise<ListParkingResultsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListParkingResultsResponse>(await this.doRPCRequest("ListParkingResults", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListParkingResultsResponse({}));
  }

  async listParkingResults(request: ListParkingResultsRequest): Promise<ListParkingResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listParkingResultsWithOptions(request, runtime);
  }

  async listSafetyHelmetResultsWithOptions(request: ListSafetyHelmetResultsRequest, runtime: $Util.RuntimeOptions): Promise<ListSafetyHelmetResultsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSafetyHelmetResultsResponse>(await this.doRPCRequest("ListSafetyHelmetResults", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListSafetyHelmetResultsResponse({}));
  }

  async listSafetyHelmetResults(request: ListSafetyHelmetResultsRequest): Promise<ListSafetyHelmetResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSafetyHelmetResultsWithOptions(request, runtime);
  }

  async listStreamsForCamerasWithOptions(request: ListStreamsForCamerasRequest, runtime: $Util.RuntimeOptions): Promise<ListStreamsForCamerasResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListStreamsForCamerasResponse>(await this.doRPCRequest("ListStreamsForCameras", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListStreamsForCamerasResponse({}));
  }

  async listStreamsForCameras(request: ListStreamsForCamerasRequest): Promise<ListStreamsForCamerasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStreamsForCamerasWithOptions(request, runtime);
  }

  async listVehicleEntryResultsWithOptions(request: ListVehicleEntryResultsRequest, runtime: $Util.RuntimeOptions): Promise<ListVehicleEntryResultsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListVehicleEntryResultsResponse>(await this.doRPCRequest("ListVehicleEntryResults", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListVehicleEntryResultsResponse({}));
  }

  async listVehicleEntryResults(request: ListVehicleEntryResultsRequest): Promise<ListVehicleEntryResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVehicleEntryResultsWithOptions(request, runtime);
  }

  async modifyAlgoLibWithOptions(request: ModifyAlgoLibRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAlgoLibResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyAlgoLibResponse>(await this.doRPCRequest("ModifyAlgoLib", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAlgoLibResponse({}));
  }

  async modifyAlgoLib(request: ModifyAlgoLibRequest): Promise<ModifyAlgoLibResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAlgoLibWithOptions(request, runtime);
  }

  async modifyCameraWithOptions(request: ModifyCameraRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCameraResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyCameraResponse>(await this.doRPCRequest("ModifyCamera", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyCameraResponse({}));
  }

  async modifyCamera(request: ModifyCameraRequest): Promise<ModifyCameraResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCameraWithOptions(request, runtime);
  }

  async modifyCapabilityWithOptions(request: ModifyCapabilityRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCapabilityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyCapabilityResponse>(await this.doRPCRequest("ModifyCapability", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyCapabilityResponse({}));
  }

  async modifyCapability(request: ModifyCapabilityRequest): Promise<ModifyCapabilityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCapabilityWithOptions(request, runtime);
  }

  async modifyInstanceWithOptions(request: ModifyInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceResponse>(await this.doRPCRequest("ModifyInstance", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceResponse({}));
  }

  async modifyInstance(request: ModifyInstanceRequest): Promise<ModifyInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceWithOptions(request, runtime);
  }

  async modifyJobGroupWithOptions(request: ModifyJobGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyJobGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyJobGroupResponse>(await this.doRPCRequest("ModifyJobGroup", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyJobGroupResponse({}));
  }

  async modifyJobGroup(request: ModifyJobGroupRequest): Promise<ModifyJobGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyJobGroupWithOptions(request, runtime);
  }

  async modifyResourceProfileWithOptions(request: ModifyResourceProfileRequest, runtime: $Util.RuntimeOptions): Promise<ModifyResourceProfileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyResourceProfileResponse>(await this.doRPCRequest("ModifyResourceProfile", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyResourceProfileResponse({}));
  }

  async modifyResourceProfile(request: ModifyResourceProfileRequest): Promise<ModifyResourceProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyResourceProfileWithOptions(request, runtime);
  }

  async modifyWorkGroupWithOptions(request: ModifyWorkGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWorkGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyWorkGroupResponse>(await this.doRPCRequest("ModifyWorkGroup", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyWorkGroupResponse({}));
  }

  async modifyWorkGroup(request: ModifyWorkGroupRequest): Promise<ModifyWorkGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWorkGroupWithOptions(request, runtime);
  }

  async putCameraConfForCameraWithOptions(request: PutCameraConfForCameraRequest, runtime: $Util.RuntimeOptions): Promise<PutCameraConfForCameraResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PutCameraConfForCameraResponse>(await this.doRPCRequest("PutCameraConfForCamera", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new PutCameraConfForCameraResponse({}));
  }

  async putCameraConfForCamera(request: PutCameraConfForCameraRequest): Promise<PutCameraConfForCameraResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putCameraConfForCameraWithOptions(request, runtime);
  }

  async searchImagesWithOptions(request: SearchImagesRequest, runtime: $Util.RuntimeOptions): Promise<SearchImagesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchImagesResponse>(await this.doRPCRequest("SearchImages", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new SearchImagesResponse({}));
  }

  async searchImages(request: SearchImagesRequest): Promise<SearchImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchImagesWithOptions(request, runtime);
  }

  async startJobGroupWithOptions(request: StartJobGroupRequest, runtime: $Util.RuntimeOptions): Promise<StartJobGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartJobGroupResponse>(await this.doRPCRequest("StartJobGroup", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new StartJobGroupResponse({}));
  }

  async startJobGroup(request: StartJobGroupRequest): Promise<StartJobGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startJobGroupWithOptions(request, runtime);
  }

  async stopJobGroupWithOptions(request: StopJobGroupRequest, runtime: $Util.RuntimeOptions): Promise<StopJobGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopJobGroupResponse>(await this.doRPCRequest("StopJobGroup", "2018-10-30", "HTTPS", "POST", "AK", "json", req, runtime), new StopJobGroupResponse({}));
  }

  async stopJobGroup(request: StopJobGroupRequest): Promise<StopJobGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopJobGroupWithOptions(request, runtime);
  }

}
