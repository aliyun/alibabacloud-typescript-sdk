// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSchemeResponseBodyDataScenesList extends $dara.Model {
  scenesId?: number;
  scenesName?: string;
  static names(): { [key: string]: string } {
    return {
      scenesId: 'ScenesId',
      scenesName: 'ScenesName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scenesId: 'number',
      scenesName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSchemeResponseBodyData extends $dara.Model {
  auditDesc?: string;
  auditTime?: number;
  businessTypeList?: number[];
  companyId?: number;
  cycleList?: string[];
  description?: string;
  industryId?: string;
  scenesList?: GetSchemeResponseBodyDataScenesList[];
  schemeId?: number;
  schemeName?: string;
  schemeType?: number;
  statement?: string;
  status?: number;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      auditDesc: 'AuditDesc',
      auditTime: 'AuditTime',
      businessTypeList: 'BusinessTypeList',
      companyId: 'CompanyId',
      cycleList: 'CycleList',
      description: 'Description',
      industryId: 'IndustryId',
      scenesList: 'ScenesList',
      schemeId: 'SchemeId',
      schemeName: 'SchemeName',
      schemeType: 'SchemeType',
      statement: 'Statement',
      status: 'Status',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditDesc: 'string',
      auditTime: 'number',
      businessTypeList: { 'type': 'array', 'itemType': 'number' },
      companyId: 'number',
      cycleList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      industryId: 'string',
      scenesList: { 'type': 'array', 'itemType': GetSchemeResponseBodyDataScenesList },
      schemeId: 'number',
      schemeName: 'string',
      schemeType: 'number',
      statement: 'string',
      status: 'number',
      templateId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.businessTypeList)) {
      $dara.Model.validateArray(this.businessTypeList);
    }
    if(Array.isArray(this.cycleList)) {
      $dara.Model.validateArray(this.cycleList);
    }
    if(Array.isArray(this.scenesList)) {
      $dara.Model.validateArray(this.scenesList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSchemeResponseBody extends $dara.Model {
  code?: string;
  data?: GetSchemeResponseBodyData;
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
      data: GetSchemeResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

