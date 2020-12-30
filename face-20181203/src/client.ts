// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddFaceRequest extends $tea.Model {
  group?: string;
  person?: string;
  image?: string;
  imageUrl?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      person: 'Person',
      image: 'Image',
      imageUrl: 'ImageUrl',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
      person: 'string',
      image: 'string',
      imageUrl: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFaceResponseBody extends $tea.Model {
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

export class AddFaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceRequest extends $tea.Model {
  group?: string;
  person?: string;
  image?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      person: 'Person',
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
      person: 'string',
      image: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceResponseBody extends $tea.Model {
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

export class DeleteFaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceRequest extends $tea.Model {
  imageUrl?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceResponseBody extends $tea.Model {
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

export class DetectFaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFaceAttributeRequest extends $tea.Model {
  imageUrl?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFaceAttributeResponseBody extends $tea.Model {
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

export class GetFaceAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetFaceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetFaceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceRequest extends $tea.Model {
  group?: string;
  mark?: number;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      mark: 'Mark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
      mark: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceResponseBody extends $tea.Model {
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

export class ListFaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupResponseBody extends $tea.Model {
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

export class ListGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFaceRequest extends $tea.Model {
  group?: string;
  imageUrl?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      imageUrl: 'ImageUrl',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
      imageUrl: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFaceResponseBody extends $tea.Model {
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

export class RecognizeFaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeFaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyFaceRequest extends $tea.Model {
  imageUrl1?: string;
  imageUrl2?: string;
  content1?: string;
  content2?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl1: 'ImageUrl1',
      imageUrl2: 'ImageUrl2',
      content1: 'Content1',
      content2: 'Content2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl1: 'string',
      imageUrl2: 'string',
      content1: 'string',
      content2: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyFaceResponseBody extends $tea.Model {
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

export class VerifyFaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: VerifyFaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: VerifyFaceResponseBody,
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
    this._endpoint = this.getEndpoint("face", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addFaceWithOptions(request: AddFaceRequest, runtime: $Util.RuntimeOptions): Promise<AddFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddFaceResponse>(await this.doRPCRequest("AddFace", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new AddFaceResponse({}));
  }

  async addFace(request: AddFaceRequest): Promise<AddFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addFaceWithOptions(request, runtime);
  }

  async deleteFaceWithOptions(request: DeleteFaceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFaceResponse>(await this.doRPCRequest("DeleteFace", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFaceResponse({}));
  }

  async deleteFace(request: DeleteFaceRequest): Promise<DeleteFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFaceWithOptions(request, runtime);
  }

  async detectFaceWithOptions(request: DetectFaceRequest, runtime: $Util.RuntimeOptions): Promise<DetectFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectFaceResponse>(await this.doRPCRequest("DetectFace", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DetectFaceResponse({}));
  }

  async detectFace(request: DetectFaceRequest): Promise<DetectFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectFaceWithOptions(request, runtime);
  }

  async getFaceAttributeWithOptions(request: GetFaceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<GetFaceAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetFaceAttributeResponse>(await this.doRPCRequest("GetFaceAttribute", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new GetFaceAttributeResponse({}));
  }

  async getFaceAttribute(request: GetFaceAttributeRequest): Promise<GetFaceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFaceAttributeWithOptions(request, runtime);
  }

  async listFaceWithOptions(request: ListFaceRequest, runtime: $Util.RuntimeOptions): Promise<ListFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFaceResponse>(await this.doRPCRequest("ListFace", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ListFaceResponse({}));
  }

  async listFace(request: ListFaceRequest): Promise<ListFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFaceWithOptions(request, runtime);
  }

  async listGroupWithOptions(runtime: $Util.RuntimeOptions): Promise<ListGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListGroupResponse>(await this.doRPCRequest("ListGroup", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ListGroupResponse({}));
  }

  async listGroup(): Promise<ListGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGroupWithOptions(runtime);
  }

  async recognizeFaceWithOptions(request: RecognizeFaceRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeFaceResponse>(await this.doRPCRequest("RecognizeFace", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeFaceResponse({}));
  }

  async recognizeFace(request: RecognizeFaceRequest): Promise<RecognizeFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeFaceWithOptions(request, runtime);
  }

  async verifyFaceWithOptions(request: VerifyFaceRequest, runtime: $Util.RuntimeOptions): Promise<VerifyFaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<VerifyFaceResponse>(await this.doRPCRequest("VerifyFace", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new VerifyFaceResponse({}));
  }

  async verifyFace(request: VerifyFaceRequest): Promise<VerifyFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyFaceWithOptions(request, runtime);
  }

}
