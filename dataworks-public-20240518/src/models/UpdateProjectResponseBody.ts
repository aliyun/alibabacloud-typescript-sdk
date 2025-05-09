// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. It is used to locate logs and troubleshoot problems.
   * 
   * @example
   * AFBB799F-8578-51C5-A766-E922EDB8XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

