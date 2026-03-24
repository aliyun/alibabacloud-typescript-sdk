// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncidentNoteStructOperator extends $dara.Model {
  /**
   * @remarks
   * 联系人。
   * 
   * @example
   * {\\"mobile_phone_num\\":\\"153xxxx8040\\",\\"mobile_country_code\\":\\"86\\",\\"email\\":\\"flightxxg@dida.com\\"}
   */
  contact?: string;
  /**
   * @remarks
   * 联系人id。
   * 
   * @example
   * user-12345
   */
  contactId?: string;
  /**
   * @remarks
   * 名称。
   * 
   * @example
   * 张三
   */
  name?: string;
  /**
   * @remarks
   * 用户ID。
   * 
   * @example
   * 4123456
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      contact: 'contact',
      contactId: 'contactId',
      name: 'name',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: 'string',
      contactId: 'string',
      name: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IncidentNoteStruct extends $dara.Model {
  /**
   * @remarks
   * 内容。
   * 
   * @example
   * 已联系运维团队，正在排查问题。
   */
  content?: string;
  /**
   * @remarks
   * 内容格式。
   * 
   * @example
   * markdown
   */
  format?: string;
  /**
   * @remarks
   * 事件ID。
   * 
   * @example
   * incident-001
   */
  incidentId?: string;
  /**
   * @remarks
   * 记录ID。
   * 
   * @example
   * note-001
   */
  noteId?: string;
  /**
   * @remarks
   * 操作符。
   */
  operator?: IncidentNoteStructOperator;
  /**
   * @remarks
   * 时间。
   * 
   * @example
   * 1741234567890
   */
  time?: number;
  /**
   * @remarks
   * 类型。
   * 
   * @example
   * apm
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      format: 'format',
      incidentId: 'incidentId',
      noteId: 'noteId',
      operator: 'operator',
      time: 'time',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      format: 'string',
      incidentId: 'string',
      noteId: 'string',
      operator: IncidentNoteStructOperator,
      time: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.operator && typeof (this.operator as any).validate === 'function') {
      (this.operator as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

