// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryProjectBuildDetailResponseBodyDataInstanceDetailResponseList extends $dara.Model {
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  params?: string;
  status?: string;
  submitTime?: string;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      params: 'Params',
      status: 'Status',
      submitTime: 'SubmitTime',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      params: 'string',
      status: 'string',
      submitTime: 'string',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectBuildDetailResponseBodyData extends $dara.Model {
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  instanceDetailResponseList?: QueryProjectBuildDetailResponseBodyDataInstanceDetailResponseList[];
  status?: string;
  title?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      instanceDetailResponseList: 'InstanceDetailResponseList',
      status: 'Status',
      title: 'Title',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      instanceDetailResponseList: { 'type': 'array', 'itemType': QueryProjectBuildDetailResponseBodyDataInstanceDetailResponseList },
      status: 'string',
      title: 'string',
      userId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceDetailResponseList)) {
      $dara.Model.validateArray(this.instanceDetailResponseList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProjectBuildDetailResponseBody extends $dara.Model {
  code?: string;
  data?: QueryProjectBuildDetailResponseBodyData;
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
      data: QueryProjectBuildDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

