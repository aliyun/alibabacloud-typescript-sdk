// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunContractRuleGenerationRequestAssistantMetaData extends $dara.Model {
  /**
   * @example
   * 9a6b1ba60d9944249363ec3cc1529b7b
   */
  fileId?: string;
  /**
   * @example
   * 1
   */
  position?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'fileId',
      position: 'position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      position: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

