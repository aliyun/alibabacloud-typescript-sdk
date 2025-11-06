// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogstoreRequest extends $dara.Model {
  consoleSessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      consoleSessionId: 'ConsoleSessionId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleSessionId: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

