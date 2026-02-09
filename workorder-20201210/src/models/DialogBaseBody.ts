// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DialogBaseBodyAttachments extends $dara.Model {
  name?: string;
  size?: string;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      size: 'Size',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      size: 'string',
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DialogBaseBodyDataInfo extends $dara.Model {
  bizId?: string;
  bizType?: number;
  component?: { [key: string]: any }[];
  container?: any;
  content?: string;
  contentDesensitized?: string;
  editable?: number;
  props?: { [key: string]: any }[];
  schema?: string;
  schemaId?: number;
  serviceChannel?: string;
  title?: string;
  values?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      component: 'Component',
      container: 'Container',
      content: 'Content',
      contentDesensitized: 'ContentDesensitized',
      editable: 'Editable',
      props: 'Props',
      schema: 'Schema',
      schemaId: 'SchemaId',
      serviceChannel: 'ServiceChannel',
      title: 'Title',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'number',
      component: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      container: 'any',
      content: 'string',
      contentDesensitized: 'string',
      editable: 'number',
      props: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      schema: 'string',
      schemaId: 'number',
      serviceChannel: 'string',
      title: 'string',
      values: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.component)) {
      $dara.Model.validateArray(this.component);
    }
    if(Array.isArray(this.props)) {
      $dara.Model.validateArray(this.props);
    }
    if(this.values) {
      $dara.Model.validateMap(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DialogBaseBodyFooterInfo extends $dara.Model {
  ext?: { [key: string]: any };
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      schema: 'string',
    };
  }

  validate() {
    if(this.ext) {
      $dara.Model.validateMap(this.ext);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DialogBaseBodyUserInfo extends $dara.Model {
  avatar?: string;
  role?: number;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
      role: 'Role',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      role: 'number',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DialogBaseBody extends $dara.Model {
  attachments?: DialogBaseBodyAttachments[];
  channelCode?: string;
  createTime?: number;
  dataInfo?: DialogBaseBodyDataInfo;
  dialogId?: number;
  footerInfo?: DialogBaseBodyFooterInfo;
  hitWords?: string[];
  modifiedTime?: number;
  referInfo?: DialogBaseBody;
  stage?: number;
  status?: number;
  ticketId?: string;
  ticketStatus?: number;
  timestamp?: number;
  tip?: string;
  type?: number;
  userInfo?: DialogBaseBodyUserInfo;
  static names(): { [key: string]: string } {
    return {
      attachments: 'Attachments',
      channelCode: 'ChannelCode',
      createTime: 'CreateTime',
      dataInfo: 'DataInfo',
      dialogId: 'DialogId',
      footerInfo: 'FooterInfo',
      hitWords: 'HitWords',
      modifiedTime: 'ModifiedTime',
      referInfo: 'ReferInfo',
      stage: 'Stage',
      status: 'Status',
      ticketId: 'TicketId',
      ticketStatus: 'TicketStatus',
      timestamp: 'Timestamp',
      tip: 'Tip',
      type: 'Type',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachments: { 'type': 'array', 'itemType': DialogBaseBodyAttachments },
      channelCode: 'string',
      createTime: 'number',
      dataInfo: DialogBaseBodyDataInfo,
      dialogId: 'number',
      footerInfo: DialogBaseBodyFooterInfo,
      hitWords: { 'type': 'array', 'itemType': 'string' },
      modifiedTime: 'number',
      referInfo: DialogBaseBody,
      stage: 'number',
      status: 'number',
      ticketId: 'string',
      ticketStatus: 'number',
      timestamp: 'number',
      tip: 'string',
      type: 'number',
      userInfo: DialogBaseBodyUserInfo,
    };
  }

  validate() {
    if(Array.isArray(this.attachments)) {
      $dara.Model.validateArray(this.attachments);
    }
    if(this.dataInfo && typeof (this.dataInfo as any).validate === 'function') {
      (this.dataInfo as any).validate();
    }
    if(this.footerInfo && typeof (this.footerInfo as any).validate === 'function') {
      (this.footerInfo as any).validate();
    }
    if(Array.isArray(this.hitWords)) {
      $dara.Model.validateArray(this.hitWords);
    }
    if(this.referInfo && typeof (this.referInfo as any).validate === 'function') {
      (this.referInfo as any).validate();
    }
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

