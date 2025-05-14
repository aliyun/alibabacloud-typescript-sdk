// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeAssistantRequestHistoryContentMarkdown extends $dara.Model {
  /**
   * @example
   * 1. markdown内容
   * 2. markdown内容
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

