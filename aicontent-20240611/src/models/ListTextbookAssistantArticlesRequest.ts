// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTextbookAssistantArticlesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tc_a893b8492c4be046cbc906c566aeb8c9
   */
  authToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 90aa861b4d9311efbe6e0c42a106bb02
   */
  directoryId?: string;
  static names(): { [key: string]: string } {
    return {
      authToken: 'authToken',
      directoryId: 'directoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authToken: 'string',
      directoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

