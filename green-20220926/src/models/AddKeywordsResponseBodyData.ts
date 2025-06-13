// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddKeywordsResponseBodyDataKeywordsResult } from "./AddKeywordsResponseBodyDataKeywordsResult";


export class AddKeywordsResponseBodyData extends $dara.Model {
  keywordsResult?: AddKeywordsResponseBodyDataKeywordsResult;
  /**
   * @example
   * customxx_xxxx
   */
  libId?: string;
  /**
   * @example
   * xxxxx-xxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      keywordsResult: 'KeywordsResult',
      libId: 'LibId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywordsResult: AddKeywordsResponseBodyDataKeywordsResult,
      libId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.keywordsResult && typeof (this.keywordsResult as any).validate === 'function') {
      (this.keywordsResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

