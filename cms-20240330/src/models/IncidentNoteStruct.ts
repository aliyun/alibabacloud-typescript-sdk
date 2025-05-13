// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IncidentNoteStructOperator } from "./IncidentNoteStructOperator";


export class IncidentNoteStruct extends $dara.Model {
  content?: string;
  format?: string;
  incidentId?: string;
  noteId?: string;
  operator?: IncidentNoteStructOperator;
  time?: number;
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

