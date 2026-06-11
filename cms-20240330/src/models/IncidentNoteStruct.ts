// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncidentNoteStructOperator extends $dara.Model {
  /**
   * @remarks
   * The contact.
   * 
   * @example
   * {\\"mobile_phone_num\\":\\"153xxxx8040\\",\\"mobile_country_code\\":\\"86\\",\\"email\\":\\"flightxxg@dida.com\\"}
   */
  contact?: string;
  /**
   * @remarks
   * The contact ID.
   * 
   * @example
   * user-12345
   */
  contactId?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * 张三
   */
  name?: string;
  /**
   * @remarks
   * The user ID.
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
   * The content.
   * 
   * @example
   * 已联系运维团队，正在排查问题。
   */
  content?: string;
  /**
   * @remarks
   * The content format.
   * 
   * @example
   * markdown
   */
  format?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * incident-001
   */
  incidentId?: string;
  /**
   * @remarks
   * The record ID.
   * 
   * @example
   * note-001
   */
  noteId?: string;
  /**
   * @remarks
   * The operator.
   */
  operator?: IncidentNoteStructOperator;
  /**
   * @remarks
   * The time.
   * 
   * @example
   * 1741234567890
   */
  time?: number;
  /**
   * @remarks
   * The type.
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

