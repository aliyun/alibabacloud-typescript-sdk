// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDingTalkUserOrgByAliyunTmpCodeResponseBodyDataOrgDtoList extends $dara.Model {
  corpId?: string;
  orgId?: string;
  orgName?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      orgId: 'OrgId',
      orgName: 'OrgName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      orgId: 'string',
      orgName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDingTalkUserOrgByAliyunTmpCodeResponseBodyData extends $dara.Model {
  associatedUnionId?: string;
  nick?: string;
  orgDtoList?: GetDingTalkUserOrgByAliyunTmpCodeResponseBodyDataOrgDtoList[];
  static names(): { [key: string]: string } {
    return {
      associatedUnionId: 'AssociatedUnionId',
      nick: 'Nick',
      orgDtoList: 'OrgDtoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedUnionId: 'string',
      nick: 'string',
      orgDtoList: { 'type': 'array', 'itemType': GetDingTalkUserOrgByAliyunTmpCodeResponseBodyDataOrgDtoList },
    };
  }

  validate() {
    if(Array.isArray(this.orgDtoList)) {
      $dara.Model.validateArray(this.orgDtoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDingTalkUserOrgByAliyunTmpCodeResponseBody extends $dara.Model {
  code?: string;
  data?: GetDingTalkUserOrgByAliyunTmpCodeResponseBodyData;
  httpCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDingTalkUserOrgByAliyunTmpCodeResponseBodyData,
      httpCode: 'string',
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

