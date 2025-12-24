// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerSophonPlaybookResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The custom ID. If you do not specify this parameter when the playbook is triggered, a random ID is generated for fault locating and troubleshooting.
   * 
   * @example
   * a7c6d055-a72f-4676-bc89-3cd9edc0284c
   */
  sophonTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      sophonTaskId: 'SophonTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sophonTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerSophonPlaybookResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details that is returned after the command or playbook is triggered.
   */
  data?: TriggerSophonPlaybookResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0DFC9403-54EB-5672-B690-9AA93C9EBB54
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: TriggerSophonPlaybookResponseBodyData,
      requestId: 'string',
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

