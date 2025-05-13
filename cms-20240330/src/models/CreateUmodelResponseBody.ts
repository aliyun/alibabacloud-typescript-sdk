// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUmodelResponseBody extends $dara.Model {
  /**
   * @example
   * 123-0F43-23423-AC43-34234
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

