// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateBlockRequestApproveStrategyNodes } from "./CreateBlockRequestApproveStrategyNodes";
import { CreateBlockRequestNoticeEnclosureInfos } from "./CreateBlockRequestNoticeEnclosureInfos";
import { CreateBlockRequestScopes } from "./CreateBlockRequestScopes";


export class CreateBlockRequest extends $dara.Model {
  approveStrategyNodes?: CreateBlockRequestApproveStrategyNodes[];
  blockId?: number;
  director?: string;
  isNeedApprove?: number;
  isRecall?: number;
  isTemplate?: number;
  labelName?: string;
  noticeDesc?: string;
  noticeEnclosureInfos?: CreateBlockRequestNoticeEnclosureInfos[];
  noticeRequestLink?: string;
  noticeType?: number;
  reason?: string;
  scene?: number;
  scopes?: CreateBlockRequestScopes[];
  status?: number;
  title?: string;
  type?: string;
  versionId?: number;
  creatorEmpId?: string;
  static names(): { [key: string]: string } {
    return {
      approveStrategyNodes: 'ApproveStrategyNodes',
      blockId: 'BlockId',
      director: 'Director',
      isNeedApprove: 'IsNeedApprove',
      isRecall: 'IsRecall',
      isTemplate: 'IsTemplate',
      labelName: 'LabelName',
      noticeDesc: 'NoticeDesc',
      noticeEnclosureInfos: 'NoticeEnclosureInfos',
      noticeRequestLink: 'NoticeRequestLink',
      noticeType: 'NoticeType',
      reason: 'Reason',
      scene: 'Scene',
      scopes: 'Scopes',
      status: 'Status',
      title: 'Title',
      type: 'Type',
      versionId: 'VersionId',
      creatorEmpId: 'creatorEmpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveStrategyNodes: { 'type': 'array', 'itemType': CreateBlockRequestApproveStrategyNodes },
      blockId: 'number',
      director: 'string',
      isNeedApprove: 'number',
      isRecall: 'number',
      isTemplate: 'number',
      labelName: 'string',
      noticeDesc: 'string',
      noticeEnclosureInfos: { 'type': 'array', 'itemType': CreateBlockRequestNoticeEnclosureInfos },
      noticeRequestLink: 'string',
      noticeType: 'number',
      reason: 'string',
      scene: 'number',
      scopes: { 'type': 'array', 'itemType': CreateBlockRequestScopes },
      status: 'number',
      title: 'string',
      type: 'string',
      versionId: 'number',
      creatorEmpId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.approveStrategyNodes)) {
      $dara.Model.validateArray(this.approveStrategyNodes);
    }
    if(Array.isArray(this.noticeEnclosureInfos)) {
      $dara.Model.validateArray(this.noticeEnclosureInfos);
    }
    if(Array.isArray(this.scopes)) {
      $dara.Model.validateArray(this.scopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

