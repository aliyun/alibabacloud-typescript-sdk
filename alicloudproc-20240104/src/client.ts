// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class Address extends $tea.Model {
  cityCode?: string;
  detail?: string;
  districtCode?: string;
  provinceCode?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'cityCode',
      detail: 'detail',
      districtCode: 'districtCode',
      provinceCode: 'provinceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      detail: 'string',
      districtCode: 'string',
      provinceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Company extends $tea.Model {
  name?: string;
  uscc?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      uscc: 'uscc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      uscc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Contact extends $tea.Model {
  email?: string;
  name?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      name: 'name',
      phone: 'phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      name: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtendInfo extends $tea.Model {
  depositAmount?: number;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      depositAmount: 'depositAmount',
      desc: 'desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depositAmount: 'number',
      desc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubjectExtendInfo extends $tea.Model {
  deliveryDesc?: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryDesc: 'deliveryDesc',
      desc: 'desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryDesc: 'string',
      desc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSourcingProjectRequest extends $tea.Model {
  address?: CreateSourcingProjectRequestAddress;
  bizId?: string;
  bizNo?: string;
  bizType?: string;
  company?: CreateSourcingProjectRequestCompany;
  contact?: CreateSourcingProjectRequestContact;
  createTime?: string;
  expireTime?: string;
  extendInfo?: { [key: string]: string };
  sourceUrl?: string;
  subBizType?: string;
  subjects?: CreateSourcingProjectRequestSubjects[];
  title?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      bizId: 'BizId',
      bizNo: 'BizNo',
      bizType: 'BizType',
      company: 'Company',
      contact: 'Contact',
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      extendInfo: 'ExtendInfo',
      sourceUrl: 'SourceUrl',
      subBizType: 'SubBizType',
      subjects: 'Subjects',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: CreateSourcingProjectRequestAddress,
      bizId: 'string',
      bizNo: 'string',
      bizType: 'string',
      company: CreateSourcingProjectRequestCompany,
      contact: CreateSourcingProjectRequestContact,
      createTime: 'string',
      expireTime: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      sourceUrl: 'string',
      subBizType: 'string',
      subjects: { 'type': 'array', 'itemType': CreateSourcingProjectRequestSubjects },
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSourcingProjectShrinkRequest extends $tea.Model {
  addressShrink?: string;
  bizId?: string;
  bizNo?: string;
  bizType?: string;
  companyShrink?: string;
  contactShrink?: string;
  createTime?: string;
  expireTime?: string;
  extendInfoShrink?: string;
  sourceUrl?: string;
  subBizType?: string;
  subjectsShrink?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      addressShrink: 'Address',
      bizId: 'BizId',
      bizNo: 'BizNo',
      bizType: 'BizType',
      companyShrink: 'Company',
      contactShrink: 'Contact',
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      extendInfoShrink: 'ExtendInfo',
      sourceUrl: 'SourceUrl',
      subBizType: 'SubBizType',
      subjectsShrink: 'Subjects',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressShrink: 'string',
      bizId: 'string',
      bizNo: 'string',
      bizType: 'string',
      companyShrink: 'string',
      contactShrink: 'string',
      createTime: 'string',
      expireTime: 'string',
      extendInfoShrink: 'string',
      sourceUrl: 'string',
      subBizType: 'string',
      subjectsShrink: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSourcingProjectResponseBody extends $tea.Model {
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

export class CreateSourcingProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSourcingProjectResponseBody;
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
      body: CreateSourcingProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSourcingProjectRequest extends $tea.Model {
  bizId?: string;
  status?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSourcingProjectResponseBody extends $tea.Model {
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

export class UpdateSourcingProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSourcingProjectResponseBody;
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
      body: UpdateSourcingProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSourcingProjectRequestAddress extends $tea.Model {
  cityCode?: string;
  detail?: string;
  districtCode?: string;
  provinceCode?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      detail: 'Detail',
      districtCode: 'DistrictCode',
      provinceCode: 'ProvinceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      detail: 'string',
      districtCode: 'string',
      provinceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSourcingProjectRequestCompany extends $tea.Model {
  name?: string;
  uscc?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      uscc: 'Uscc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      uscc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSourcingProjectRequestContact extends $tea.Model {
  email?: string;
  name?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      name: 'Name',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      name: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSourcingProjectRequestSubjectsAddress extends $tea.Model {
  cityCode?: string;
  detail?: string;
  districtCode?: string;
  provinceCode?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      detail: 'Detail',
      districtCode: 'DistrictCode',
      provinceCode: 'ProvinceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      detail: 'string',
      districtCode: 'string',
      provinceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSourcingProjectRequestSubjects extends $tea.Model {
  address?: CreateSourcingProjectRequestSubjectsAddress;
  code?: string;
  extendInfo?: { [key: string]: string };
  name?: string;
  quantity?: number;
  spec?: string;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      code: 'Code',
      extendInfo: 'ExtendInfo',
      name: 'Name',
      quantity: 'Quantity',
      spec: 'Spec',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: CreateSourcingProjectRequestSubjectsAddress,
      code: 'string',
      extendInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      quantity: 'number',
      spec: 'string',
      unit: 'string',
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
    this._endpoint = this.getEndpoint("alicloudproc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createSourcingProjectWithOptions(tmpReq: CreateSourcingProjectRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSourcingProjectResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateSourcingProjectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.address)) {
      request.addressShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.address, "Address", "json");
    }

    if (!Util.isUnset(tmpReq.company)) {
      request.companyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.company, "Company", "json");
    }

    if (!Util.isUnset(tmpReq.contact)) {
      request.contactShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contact, "Contact", "json");
    }

    if (!Util.isUnset(tmpReq.extendInfo)) {
      request.extendInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extendInfo, "ExtendInfo", "json");
    }

    if (!Util.isUnset(tmpReq.subjects)) {
      request.subjectsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.subjects, "Subjects", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.addressShrink)) {
      query["Address"] = request.addressShrink;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizNo)) {
      query["BizNo"] = request.bizNo;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.companyShrink)) {
      query["Company"] = request.companyShrink;
    }

    if (!Util.isUnset(request.contactShrink)) {
      query["Contact"] = request.contactShrink;
    }

    if (!Util.isUnset(request.createTime)) {
      query["CreateTime"] = request.createTime;
    }

    if (!Util.isUnset(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!Util.isUnset(request.extendInfoShrink)) {
      query["ExtendInfo"] = request.extendInfoShrink;
    }

    if (!Util.isUnset(request.sourceUrl)) {
      query["SourceUrl"] = request.sourceUrl;
    }

    if (!Util.isUnset(request.subBizType)) {
      query["SubBizType"] = request.subBizType;
    }

    if (!Util.isUnset(request.subjectsShrink)) {
      query["Subjects"] = request.subjectsShrink;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSourcingProject",
      version: "2024-01-04",
      protocol: "HTTPS",
      pathname: `/srm/lite/sourcing/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateSourcingProjectResponse>(await this.callApi(params, req, runtime), new CreateSourcingProjectResponse({}));
  }

  async createSourcingProject(request: CreateSourcingProjectRequest): Promise<CreateSourcingProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSourcingProjectWithOptions(request, headers, runtime);
  }

  async updateSourcingProjectWithOptions(request: UpdateSourcingProjectRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateSourcingProjectResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.updateTime)) {
      query["UpdateTime"] = request.updateTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSourcingProject",
      version: "2024-01-04",
      protocol: "HTTPS",
      pathname: `/srm/lite/sourcing/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateSourcingProjectResponse>(await this.callApi(params, req, runtime), new UpdateSourcingProjectResponse({}));
  }

  async updateSourcingProject(request: UpdateSourcingProjectRequest): Promise<UpdateSourcingProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSourcingProjectWithOptions(request, headers, runtime);
  }

}
