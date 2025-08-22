// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExplorerModuleAttributeResponseBody extends $dara.Model {
  /**
   * @example
   * 25B274BA-E672-58C0-8602-541281B6F758
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

