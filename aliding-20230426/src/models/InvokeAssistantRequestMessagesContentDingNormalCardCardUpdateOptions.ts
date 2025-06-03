// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeAssistantRequestMessagesContentDingNormalCardCardUpdateOptions extends $dara.Model {
  /**
   * @example
   * {}
   */
  updateCardDataByKey?: boolean;
  /**
   * @example
   * {}
   */
  updatePrivateDataByKey?: boolean;
  static names(): { [key: string]: string } {
    return {
      updateCardDataByKey: 'updateCardDataByKey',
      updatePrivateDataByKey: 'updatePrivateDataByKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateCardDataByKey: 'boolean',
      updatePrivateDataByKey: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

