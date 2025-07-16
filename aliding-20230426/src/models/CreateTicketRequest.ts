// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTicketRequestNotify extends $dara.Model {
  groupNoticeReceiverUserIds?: string[];
  /**
   * @example
   * false
   */
  noticeAllGroupMember?: boolean;
  workNoticeReceiverUserIds?: string[];
  static names(): { [key: string]: string } {
    return {
      groupNoticeReceiverUserIds: 'GroupNoticeReceiverUserIds',
      noticeAllGroupMember: 'NoticeAllGroupMember',
      workNoticeReceiverUserIds: 'WorkNoticeReceiverUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupNoticeReceiverUserIds: { 'type': 'array', 'itemType': 'string' },
      noticeAllGroupMember: 'boolean',
      workNoticeReceiverUserIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.groupNoticeReceiverUserIds)) {
      $dara.Model.validateArray(this.groupNoticeReceiverUserIds);
    }
    if(Array.isArray(this.workNoticeReceiverUserIds)) {
      $dara.Model.validateArray(this.workNoticeReceiverUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTicketRequestSceneContextGroupMsgs extends $dara.Model {
  /**
   * @example
   * true
   */
  anchor?: boolean;
  /**
   * @example
   * 1234567
   */
  openMsgId?: string;
  static names(): { [key: string]: string } {
    return {
      anchor: 'Anchor',
      openMsgId: 'OpenMsgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchor: 'boolean',
      openMsgId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTicketRequestSceneContext extends $dara.Model {
  groupMsgs?: CreateTicketRequestSceneContextGroupMsgs[];
  /**
   * @example
   * cidDKVAOW8yVWPEN+WZfwSSAQ==
   */
  openConversationId?: string;
  relevantorUserIds?: string[];
  /**
   * @example
   * 42674892
   */
  topicId?: string;
  static names(): { [key: string]: string } {
    return {
      groupMsgs: 'GroupMsgs',
      openConversationId: 'OpenConversationId',
      relevantorUserIds: 'RelevantorUserIds',
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupMsgs: { 'type': 'array', 'itemType': CreateTicketRequestSceneContextGroupMsgs },
      openConversationId: 'string',
      relevantorUserIds: { 'type': 'array', 'itemType': 'string' },
      topicId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupMsgs)) {
      $dara.Model.validateArray(this.groupMsgs);
    }
    if(Array.isArray(this.relevantorUserIds)) {
      $dara.Model.validateArray(this.relevantorUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTicketRequestTenantContext extends $dara.Model {
  /**
   * @example
   * xxxxxx
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTicketRequest extends $dara.Model {
  /**
   * @example
   * []
   */
  customFields?: string;
  notify?: CreateTicketRequestNotify;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * G3IOe205RLciE
   */
  openTeamId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  openTemplateBizId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  processorUserIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SG
   */
  scene?: string;
  sceneContext?: CreateTicketRequestSceneContext;
  tenantContext?: CreateTicketRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Killer Ball Wo Mouichido
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      customFields: 'CustomFields',
      notify: 'Notify',
      openTeamId: 'OpenTeamId',
      openTemplateBizId: 'OpenTemplateBizId',
      processorUserIds: 'ProcessorUserIds',
      scene: 'Scene',
      sceneContext: 'SceneContext',
      tenantContext: 'TenantContext',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customFields: 'string',
      notify: CreateTicketRequestNotify,
      openTeamId: 'string',
      openTemplateBizId: 'string',
      processorUserIds: { 'type': 'array', 'itemType': 'string' },
      scene: 'string',
      sceneContext: CreateTicketRequestSceneContext,
      tenantContext: CreateTicketRequestTenantContext,
      title: 'string',
    };
  }

  validate() {
    if(this.notify && typeof (this.notify as any).validate === 'function') {
      (this.notify as any).validate();
    }
    if(Array.isArray(this.processorUserIds)) {
      $dara.Model.validateArray(this.processorUserIds);
    }
    if(this.sceneContext && typeof (this.sceneContext as any).validate === 'function') {
      (this.sceneContext as any).validate();
    }
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

