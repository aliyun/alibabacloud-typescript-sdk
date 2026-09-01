// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DebugPlaybookResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique ID for each request. Use this ID to troubleshoot and locate issues.
   * 
   * @example
   * 75E56B2C-C8FA-5A2F-AA08-8745E2AC33EF
   */
  requestId?: string;
  /**
   * @remarks
   * The run UUID of the debugging task. Use this UUID to query information, such as the task result.
   * 
   * @example
   * 6d412cfa-0905-4567-8a83-xxxxxx
   */
  requestUuid?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      requestUuid: 'RequestUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      requestUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

