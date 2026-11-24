// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RealtimeErrorError extends $dara.Model {
  type?: string;
  code?: string;
  message?: string;
  param?: string;
  fatal?: boolean;
  retryable?: boolean;
  causedBy?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      code: 'code',
      message: 'message',
      param: 'param',
      fatal: 'fatal',
      retryable: 'retryable',
      causedBy: 'caused_by',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      code: 'string',
      message: 'string',
      param: 'string',
      fatal: 'boolean',
      retryable: 'boolean',
      causedBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RealtimeError extends $dara.Model {
  type?: string;
  eventId?: string;
  sessionId?: string;
  error?: RealtimeErrorError;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      eventId: 'event_id',
      sessionId: 'session_id',
      error: 'error',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      eventId: 'string',
      sessionId: 'string',
      error: RealtimeErrorError,
    };
  }

  validate() {
    if(this.error && typeof (this.error as any).validate === 'function') {
      (this.error as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

