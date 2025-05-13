// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUmodelResponseBody extends $dara.Model {
  /**
   * @example
   * 234324-123-123-123-23423
   */
  requestId?: string;
  /**
   * @example
   * workspace-test
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

