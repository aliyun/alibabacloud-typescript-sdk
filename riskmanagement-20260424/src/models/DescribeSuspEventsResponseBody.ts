// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSuspEventsResponseBodyDataBodySuspEventsDetails extends $dara.Model {
  /**
   * @remarks
   * The display name of the alerting event.
   * 
   * @example
   * login with unusual location
   */
  nameDisplay?: string;
  /**
   * @remarks
   * The event type of the alerting event.
   * 
   * @example
   * text
   */
  type?: string;
  /**
   * @remarks
   * The path where the alerting event occurred.
   * 
   * @example
   * /etc/crontab
   */
  value?: string;
  /**
   * @remarks
   * The display path where the alerting event occurred.
   * 
   * @example
   * /etc/crontab
   */
  valueDisplay?: string;
  static names(): { [key: string]: string } {
    return {
      nameDisplay: 'NameDisplay',
      type: 'Type',
      value: 'Value',
      valueDisplay: 'ValueDisplay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameDisplay: 'string',
      type: 'string',
      value: 'string',
      valueDisplay: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventsResponseBodyDataBodySuspEventsEventNotes extends $dara.Model {
  /**
   * @remarks
   * The remark information.
   * 
   * @example
   * test
   */
  note?: string;
  /**
   * @remarks
   * The ID of the remark record.
   * 
   * @example
   * 2859481
   */
  noteId?: number;
  /**
   * @remarks
   * The time when the event was recorded.
   * 
   * @example
   * 2018-09-26 01:51:01
   */
  noteTime?: string;
  static names(): { [key: string]: string } {
    return {
      note: 'Note',
      noteId: 'NoteId',
      noteTime: 'NoteTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      note: 'string',
      noteId: 'number',
      noteTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventsResponseBodyDataBodySuspEventsTacticItems extends $dara.Model {
  /**
   * @remarks
   * The ATT&CK tactic name.
   * 
   * @example
   * Malicious scripts-Malicious script code execution
   */
  tacticDisplayName?: string;
  /**
   * @remarks
   * The ATT&CK attack stage information.
   * 
   * @example
   * TA0042
   */
  tacticId?: string;
  static names(): { [key: string]: string } {
    return {
      tacticDisplayName: 'TacticDisplayName',
      tacticId: 'TacticId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tacticDisplayName: 'string',
      tacticId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventsResponseBodyDataBodySuspEvents extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the alert is from offline analysis.
   * 
   * @example
   * true
   */
  advanced?: boolean;
  /**
   * @remarks
   * The name of the alert event.
   * 
   * @example
   * Reverse shell_China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China China.
   */
  alarmEventName?: string;
  /**
   * @remarks
   * The display name of the alerting event.
   * 
   * @example
   * Login with unusual location
   */
  alarmEventNameDisplay?: string;
  /**
   * @remarks
   * The event type of the alerting event.
   * 
   * @example
   * Unusual Logon
   */
  alarmEventType?: string;
  /**
   * @remarks
   * The display name of the alerting event type.
   * 
   * @example
   * Unusual Logon
   */
  alarmEventTypeDisplay?: string;
  /**
   * @remarks
   * The unique ID of the alert event.
   * 
   * @example
   * 8df914418f****
   */
  alarmUniqueInfo?: string;
  /**
   * @remarks
   * The name of the application to which the alerting event belongs.
   * 
   * @example
   * dfield-cloud-service-prod
   */
  appName?: string;
  /**
   * @remarks
   * Indicates whether automatic defense is enabled.
   * 
   * @example
   * true
   */
  autoBreaking?: boolean;
  /**
   * @remarks
   * Specifies whether the alerting event is supported for online handling, such as quarantine. Valid values:
   * 
   * @example
   * true
   */
  canBeDealOnLine?: boolean;
  /**
   * @remarks
   * Indicates whether the false positive marking can be unmarked. Valid values:
   * 
   * @example
   * true
   */
  canCancelFault?: boolean;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c8c87dae64c9947269091f36cfa9adc87
   */
  clusterId?: string;
  /**
   * @remarks
   * Indicates whether critical event protection pattern is enabled for the server. Valid values:
   * 
   * @example
   * false
   */
  containHwMode?: boolean;
  /**
   * @remarks
   * The container ID.
   * 
   * @example
   * 95878ef8779fae3dd82126812edd910402fc550a72f9bce87e56a4435d018384
   */
  containerId?: string;
  /**
   * @remarks
   * The container image ID.
   * 
   * @example
   * sha256:2e5a3b0ae5f452b3cb458789a9a7542ef40035a84318469a8528c5e444db1****
   */
  containerImageId?: string;
  /**
   * @remarks
   * The container image name.
   * 
   * @example
   * centos7_apache:v1.0.1
   */
  containerImageName?: string;
  /**
   * @remarks
   * The data source. You can ignore this field.
   * 
   * @example
   * URL
   */
  dataSource?: string;
  /**
   * @remarks
   * The description of the impact of the alerting event.
   * 
   * @example
   * webshell
   */
  desc?: string;
  /**
   * @remarks
   * The details of the alerting event.
   */
  details?: DescribeSuspEventsResponseBodyDataBodySuspEventsDetails[];
  /**
   * @remarks
   * The detection source. This is an invalid field.
   * 
   * @example
   * -
   */
  detectSource?: string;
  /**
   * @remarks
   * Indicates whether cloud sandbox detection is supported. Valid values:
   * 
   * @example
   * true
   */
  displaySandboxResult?: boolean;
  /**
   * @remarks
   * The remarks of the alerting event.
   */
  eventNotes?: DescribeSuspEventsResponseBodyDataBodySuspEventsEventNotes[];
  /**
   * @remarks
   * The status of the alerting event. Valid values:
   * 
   * @example
   * 1
   */
  eventStatus?: number;
  /**
   * @remarks
   * The child class of the alerting event.
   * 
   * @example
   * login_common_location
   */
  eventSubType?: string;
  /**
   * @remarks
   * Indicates whether the alerting event is associated with tracing information. Valid values:
   * 
   * @example
   * true
   */
  hasTraceInfo?: boolean;
  /**
   * @remarks
   * The unique identity of the alerting event.
   * 
   * @example
   * 3178
   */
  id?: number;
  /**
   * @remarks
   * The unique identity of the image.
   * 
   * @example
   * ccdab289-9765-47ef-af50-ba6be09aacd6
   */
  imageUuid?: string;
  /**
   * @remarks
   * The ID of the asset instance affected by the alerting event.
   * 
   * @example
   * i-9dp6dwsxdl9z5u1e2f****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * nginx
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the associated instance.
   * 
   * @example
   * 8.137.3*.6
   */
  internetIp?: string;
  /**
   * @remarks
   * The private network IP address of the instance.
   * 
   * @example
   * 10.36.*6.149
   */
  intranetIp?: string;
  /**
   * @remarks
   * The K8s cluster ID.
   * 
   * @example
   * ce3c41ed427794a7bb3d9da4554fc8039
   */
  k8sClusterId?: string;
  /**
   * @remarks
   * The K8s cluster name.
   * 
   * @example
   * testName
   */
  k8sClusterName?: string;
  /**
   * @remarks
   * The K8s namespace.
   * 
   * @example
   * default
   */
  k8sNamespace?: string;
  /**
   * @remarks
   * The K8s node ID.
   * 
   * @example
   * i-bp14a1ay8e0aa9t0****
   */
  k8sNodeId?: string;
  /**
   * @remarks
   * The K8s node name.
   * 
   * @example
   * N/A
   */
  k8sNodeName?: string;
  /**
   * @remarks
   * The K8s pod name.
   * 
   * @example
   * myapp-pod
   */
  k8sPodName?: string;
  /**
   * @remarks
   * Indicates whether large model analysis label is supported. Valid values:
   * 
   * @example
   * true
   */
  largeModel?: boolean;
  /**
   * @remarks
   * The most recent time when the alerting event occurred.
   * 
   * @example
   * 2018-09-26 01:51:01
   */
  lastTime?: string;
  /**
   * @remarks
   * The UNIX timestamp of the last occurrence, in milliseconds.
   * 
   * @example
   * 1631699497000
   */
  lastTimeStamp?: number;
  /**
   * @remarks
   * The risk level of the alerting event. Valid values:
   * 
   * @example
   * remind
   */
  level?: string;
  /**
   * @remarks
   * The status of the malicious behavior defense rule. Valid values:
   * 
   * @example
   * open
   */
  maliciousRuleStatus?: string;
  /**
   * @remarks
   * The collection of alerting event labels.
   */
  markList?: string[];
  /**
   * @remarks
   * The advanced whitelist rules.
   * 
   * @example
   * <strong>1.</strong>&nbsp&nbsppath&nbsp&nbspcontain&nbsp&nbsp232&nbsp&nbsp
   */
  markMisRules?: string;
  /**
   * @remarks
   * The full name of the alerting event.
   * 
   * @example
   * Unusual Logon-Login with unusual location
   */
  name?: string;
  /**
   * @remarks
   * The time when the alerting event first occurred.
   * 
   * @example
   * 2018-09-26 01:51:01
   */
  occurrenceTime?: string;
  /**
   * @remarks
   * The UNIX timestamp of the first occurrence, in milliseconds.
   * 
   * @example
   * 1631699497000
   */
  occurrenceTimeStamp?: number;
  /**
   * @remarks
   * The fault code of the alerting event operation.
   * 
   * @example
   * kill_and_quara.Success
   */
  operateErrorCode?: string;
  /**
   * @remarks
   * The remarks of the alerting event operation.
   * 
   * @example
   * success
   */
  operateMsg?: string;
  /**
   * @remarks
   * The UNIX timestamp of the alerting event operation, in milliseconds.
   * 
   * @example
   * 1631699497000
   */
  operateTime?: number;
  /**
   * @remarks
   * The required edition:
   * 
   * @example
   * 1
   */
  saleVersion?: string;
  /**
   * @remarks
   * The IDs of the alerting events associated with this alerting event.
   * 
   * @example
   * 628978308
   */
  securityEventIds?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID that generated the alert.
   * 
   * @example
   * 124075**67406
   */
  sourceAliUid?: number;
  /**
   * @remarks
   * The attack stage.
   * 
   * @example
   * "["authority_maintenance"]"
   */
  stages?: string;
  /**
   * @remarks
   * The operation type supported by the alert:
   * 
   * @example
   * AI.false_positive
   */
  supportOperateCode?: string;
  /**
   * @remarks
   * The display name of the attack stage.
   */
  tacticItems?: DescribeSuspEventsResponseBodyDataBodySuspEventsTacticItems[];
  /**
   * @remarks
   * The unique key of the security alert.
   * 
   * @example
   * 1dfbdf56c5343b63c4854d08ec20e067
   */
  uniqueInfo?: string;
  /**
   * @remarks
   * The unique identifier of the associated instance.
   * 
   * @example
   * 9A75F21D3993C0A2B094A4AB132890B2
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      advanced: 'Advanced',
      alarmEventName: 'AlarmEventName',
      alarmEventNameDisplay: 'AlarmEventNameDisplay',
      alarmEventType: 'AlarmEventType',
      alarmEventTypeDisplay: 'AlarmEventTypeDisplay',
      alarmUniqueInfo: 'AlarmUniqueInfo',
      appName: 'AppName',
      autoBreaking: 'AutoBreaking',
      canBeDealOnLine: 'CanBeDealOnLine',
      canCancelFault: 'CanCancelFault',
      clusterId: 'ClusterId',
      containHwMode: 'ContainHwMode',
      containerId: 'ContainerId',
      containerImageId: 'ContainerImageId',
      containerImageName: 'ContainerImageName',
      dataSource: 'DataSource',
      desc: 'Desc',
      details: 'Details',
      detectSource: 'DetectSource',
      displaySandboxResult: 'DisplaySandboxResult',
      eventNotes: 'EventNotes',
      eventStatus: 'EventStatus',
      eventSubType: 'EventSubType',
      hasTraceInfo: 'HasTraceInfo',
      id: 'Id',
      imageUuid: 'ImageUuid',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      k8sClusterId: 'K8sClusterId',
      k8sClusterName: 'K8sClusterName',
      k8sNamespace: 'K8sNamespace',
      k8sNodeId: 'K8sNodeId',
      k8sNodeName: 'K8sNodeName',
      k8sPodName: 'K8sPodName',
      largeModel: 'LargeModel',
      lastTime: 'LastTime',
      lastTimeStamp: 'LastTimeStamp',
      level: 'Level',
      maliciousRuleStatus: 'MaliciousRuleStatus',
      markList: 'MarkList',
      markMisRules: 'MarkMisRules',
      name: 'Name',
      occurrenceTime: 'OccurrenceTime',
      occurrenceTimeStamp: 'OccurrenceTimeStamp',
      operateErrorCode: 'OperateErrorCode',
      operateMsg: 'OperateMsg',
      operateTime: 'OperateTime',
      saleVersion: 'SaleVersion',
      securityEventIds: 'SecurityEventIds',
      sourceAliUid: 'SourceAliUid',
      stages: 'Stages',
      supportOperateCode: 'SupportOperateCode',
      tacticItems: 'TacticItems',
      uniqueInfo: 'UniqueInfo',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advanced: 'boolean',
      alarmEventName: 'string',
      alarmEventNameDisplay: 'string',
      alarmEventType: 'string',
      alarmEventTypeDisplay: 'string',
      alarmUniqueInfo: 'string',
      appName: 'string',
      autoBreaking: 'boolean',
      canBeDealOnLine: 'boolean',
      canCancelFault: 'boolean',
      clusterId: 'string',
      containHwMode: 'boolean',
      containerId: 'string',
      containerImageId: 'string',
      containerImageName: 'string',
      dataSource: 'string',
      desc: 'string',
      details: { 'type': 'array', 'itemType': DescribeSuspEventsResponseBodyDataBodySuspEventsDetails },
      detectSource: 'string',
      displaySandboxResult: 'boolean',
      eventNotes: { 'type': 'array', 'itemType': DescribeSuspEventsResponseBodyDataBodySuspEventsEventNotes },
      eventStatus: 'number',
      eventSubType: 'string',
      hasTraceInfo: 'boolean',
      id: 'number',
      imageUuid: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      k8sClusterId: 'string',
      k8sClusterName: 'string',
      k8sNamespace: 'string',
      k8sNodeId: 'string',
      k8sNodeName: 'string',
      k8sPodName: 'string',
      largeModel: 'boolean',
      lastTime: 'string',
      lastTimeStamp: 'number',
      level: 'string',
      maliciousRuleStatus: 'string',
      markList: { 'type': 'array', 'itemType': 'string' },
      markMisRules: 'string',
      name: 'string',
      occurrenceTime: 'string',
      occurrenceTimeStamp: 'number',
      operateErrorCode: 'string',
      operateMsg: 'string',
      operateTime: 'number',
      saleVersion: 'string',
      securityEventIds: 'string',
      sourceAliUid: 'number',
      stages: 'string',
      supportOperateCode: 'string',
      tacticItems: { 'type': 'array', 'itemType': DescribeSuspEventsResponseBodyDataBodySuspEventsTacticItems },
      uniqueInfo: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    if(Array.isArray(this.eventNotes)) {
      $dara.Model.validateArray(this.eventNotes);
    }
    if(Array.isArray(this.markList)) {
      $dara.Model.validateArray(this.markList);
    }
    if(Array.isArray(this.tacticItems)) {
      $dara.Model.validateArray(this.tacticItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventsResponseBodyDataBody extends $dara.Model {
  /**
   * @remarks
   * The number of tasks.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID of Security Center.
   * 
   * @example
   * AD2345D1-A498-58AF-97C0-88940AF87CB7
   */
  requestId?: string;
  /**
   * @remarks
   * The security alert event information.
   */
  suspEvents?: DescribeSuspEventsResponseBodyDataBodySuspEvents[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 72
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      suspEvents: 'SuspEvents',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      suspEvents: { 'type': 'array', 'itemType': DescribeSuspEventsResponseBodyDataBodySuspEvents },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.suspEvents)) {
      $dara.Model.validateArray(this.suspEvents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The message body.
   */
  body?: DescribeSuspEventsResponseBodyDataBody;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: DescribeSuspEventsResponseBodyDataBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response information returned by Meta.
   */
  data?: DescribeSuspEventsResponseBodyData;
  /**
   * @remarks
   * The returned message. If the request is successful, a success message is returned. If the request fails, the failure reason is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 67BD8435-6624-5484-A75D-170231B51615
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values: true: Successful. false: Failed.
   * 
   * @example
   * true
   */
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
      data: DescribeSuspEventsResponseBodyData,
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

