// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncidentNoteStructOperator extends $dara.Model {
  /**
   * @remarks
   * Contact.
   * 
   * @example
   * {\\"mobile_phone_num\\":\\"153xxxx8040\\",\\"mobile_country_code\\":\\"86\\",\\"email\\":\\"flightxxg@dida.com\\"}
   */
  contact?: string;
  /**
   * @remarks
   * Contact ID.
   * 
   * @example
   * user-12345
   */
  contactId?: string;
  /**
   * @remarks
   * Name.
   * 
   * @example
   * Zhang San.
   */
  name?: string;
  /**
   * @remarks
   * User ID.
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
   * Content.
   * 
   * @example
   * The operations team has been contacted and is currently investigating the issue.
   */
  content?: string;
  /**
   * @remarks
   * Content format.
   * 
   * @example
   * markdown
   */
  format?: string;
  /**
   * @remarks
   * Incident ID.
   * 
   * @example
   * incident-001
   */
  incidentId?: string;
  /**
   * @remarks
   * Note ID.
   * 
   * @example
   * note-001
   */
  noteId?: string;
  /**
   * @remarks
   * Operator.
   */
  operator?: IncidentNoteStructOperator;
  /**
   * @remarks
   * Time.
   * 
   * @example
   * 1741234567890
   */
  time?: number;
  /**
   * @remarks
   * Type.
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

