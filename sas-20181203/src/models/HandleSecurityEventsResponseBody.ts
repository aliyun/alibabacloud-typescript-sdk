// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HandleSecurityEventsResponseBodyHandleSecurityEventsResponse extends $dara.Model {
  /**
   * @remarks
   * The ID of the task to handle the alert events.
   * 
   * @example
   * 15411
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleSecurityEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The handling result of the alert events.
   */
  handleSecurityEventsResponse?: HandleSecurityEventsResponseBodyHandleSecurityEventsResponse;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * FF0020B9-999F-5DE2-985F-DB282BDA5311
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      handleSecurityEventsResponse: 'HandleSecurityEventsResponse',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handleSecurityEventsResponse: HandleSecurityEventsResponseBodyHandleSecurityEventsResponse,
      requestId: 'string',
    };
  }

  validate() {
    if(this.handleSecurityEventsResponse && typeof (this.handleSecurityEventsResponse as any).validate === 'function') {
      (this.handleSecurityEventsResponse as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

