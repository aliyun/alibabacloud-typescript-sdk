// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerPlaybookResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BD5A8DB6-A42C-532B-BCE8-83E69550CD59
   */
  requestId?: string;
  /**
   * @remarks
   * The UUID of the playbook run. You can use this UUID to obtain the results of the playbook run.
   * 
   * @example
   * 55E63C57-D6C8-5036-A770-5CB10AC807AA
   */
  triggerUuid?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      triggerUuid: 'TriggerUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      triggerUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

