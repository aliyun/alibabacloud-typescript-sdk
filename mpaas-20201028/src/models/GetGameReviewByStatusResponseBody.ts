// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGameReviewByStatusResponseBodyResultContentContentReviewProgress extends $dara.Model {
  description?: string;
  flowNodeId?: number;
  gmtModified?: string;
  nodeIndex?: number;
  nodeName?: string;
  nodeStatus?: string;
  nodeStatusId?: number;
  operator?: string;
  remark?: string;
  roleId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      flowNodeId: 'FlowNodeId',
      gmtModified: 'GmtModified',
      nodeIndex: 'NodeIndex',
      nodeName: 'NodeName',
      nodeStatus: 'NodeStatus',
      nodeStatusId: 'NodeStatusId',
      operator: 'Operator',
      remark: 'Remark',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      flowNodeId: 'number',
      gmtModified: 'string',
      nodeIndex: 'number',
      nodeName: 'string',
      nodeStatus: 'string',
      nodeStatusId: 'number',
      operator: 'string',
      remark: 'string',
      roleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGameReviewByStatusResponseBodyResultContentContentTargetDetail extends $dara.Model {
  autoOnline?: boolean;
  category?: string;
  detail?: string;
  gameMaker?: string;
  iconUrl?: string;
  introduction?: string;
  miniProgramCode?: string;
  miniProgramInfoId?: number;
  miniProgramName?: string;
  miniResourceId?: number;
  publishStatus?: number;
  qrCodeUrl?: string;
  reviewTargetType?: string;
  subType?: number;
  targetId?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      autoOnline: 'AutoOnline',
      category: 'Category',
      detail: 'Detail',
      gameMaker: 'GameMaker',
      iconUrl: 'IconUrl',
      introduction: 'Introduction',
      miniProgramCode: 'MiniProgramCode',
      miniProgramInfoId: 'MiniProgramInfoId',
      miniProgramName: 'MiniProgramName',
      miniResourceId: 'MiniResourceId',
      publishStatus: 'PublishStatus',
      qrCodeUrl: 'QrCodeUrl',
      reviewTargetType: 'ReviewTargetType',
      subType: 'SubType',
      targetId: 'TargetId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoOnline: 'boolean',
      category: 'string',
      detail: 'string',
      gameMaker: 'string',
      iconUrl: 'string',
      introduction: 'string',
      miniProgramCode: 'string',
      miniProgramInfoId: 'number',
      miniProgramName: 'string',
      miniResourceId: 'number',
      publishStatus: 'number',
      qrCodeUrl: 'string',
      reviewTargetType: 'string',
      subType: 'number',
      targetId: 'number',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGameReviewByStatusResponseBodyResultContentContent extends $dara.Model {
  appendix?: string;
  autoOnline?: boolean;
  creator?: string;
  extension?: string;
  flowId?: number;
  gmtCreate?: string;
  gmtModified?: string;
  icons?: string[];
  id?: number;
  reviewChannel?: string;
  reviewIntegerStatus?: number;
  reviewProgress?: GetGameReviewByStatusResponseBodyResultContentContentReviewProgress[];
  reviewStatus?: string;
  reviewTarget?: number;
  targetDetail?: GetGameReviewByStatusResponseBodyResultContentContentTargetDetail;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      appendix: 'Appendix',
      autoOnline: 'AutoOnline',
      creator: 'Creator',
      extension: 'Extension',
      flowId: 'FlowId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      icons: 'Icons',
      id: 'Id',
      reviewChannel: 'ReviewChannel',
      reviewIntegerStatus: 'ReviewIntegerStatus',
      reviewProgress: 'ReviewProgress',
      reviewStatus: 'ReviewStatus',
      reviewTarget: 'ReviewTarget',
      targetDetail: 'TargetDetail',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appendix: 'string',
      autoOnline: 'boolean',
      creator: 'string',
      extension: 'string',
      flowId: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      icons: { 'type': 'array', 'itemType': 'string' },
      id: 'number',
      reviewChannel: 'string',
      reviewIntegerStatus: 'number',
      reviewProgress: { 'type': 'array', 'itemType': GetGameReviewByStatusResponseBodyResultContentContentReviewProgress },
      reviewStatus: 'string',
      reviewTarget: 'number',
      targetDetail: GetGameReviewByStatusResponseBodyResultContentContentTargetDetail,
      targetType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.icons)) {
      $dara.Model.validateArray(this.icons);
    }
    if(Array.isArray(this.reviewProgress)) {
      $dara.Model.validateArray(this.reviewProgress);
    }
    if(this.targetDetail && typeof (this.targetDetail as any).validate === 'function') {
      (this.targetDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGameReviewByStatusResponseBodyResultContent extends $dara.Model {
  content?: GetGameReviewByStatusResponseBodyResultContentContent[];
  errorCode?: string;
  pageNum?: number;
  pageSize?: number;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      errorCode: 'ErrorCode',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': GetGameReviewByStatusResponseBodyResultContentContent },
      errorCode: 'string',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGameReviewByStatusResponseBody extends $dara.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: GetGameReviewByStatusResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: GetGameReviewByStatusResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.resultContent && typeof (this.resultContent as any).validate === 'function') {
      (this.resultContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

