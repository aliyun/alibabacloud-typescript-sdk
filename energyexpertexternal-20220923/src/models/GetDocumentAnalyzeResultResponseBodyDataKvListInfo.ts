// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDocumentAnalyzeResultResponseBodyDataKvListInfoContext } from "./GetDocumentAnalyzeResultResponseBodyDataKvListInfoContext";


export class GetDocumentAnalyzeResultResponseBodyDataKvListInfo extends $dara.Model {
  /**
   * @remarks
   * Recalled Content
   */
  context?: GetDocumentAnalyzeResultResponseBodyDataKvListInfoContext;
  /**
   * @remarks
   * Field Key Name
   * 
   * @example
   * Tenant
   */
  keyName?: string;
  /**
   * @remarks
   * Field Key Value
   * 
   * @example
   * Aliyun XXX Co., Ltd.
   */
  keyValue?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'context',
      keyName: 'keyName',
      keyValue: 'keyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: GetDocumentAnalyzeResultResponseBodyDataKvListInfoContext,
      keyName: 'string',
      keyValue: 'string',
    };
  }

  validate() {
    if(this.context && typeof (this.context as any).validate === 'function') {
      (this.context as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

