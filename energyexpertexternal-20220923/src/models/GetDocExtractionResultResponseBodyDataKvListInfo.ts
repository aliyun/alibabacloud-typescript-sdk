// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDocExtractionResultResponseBodyDataKvListInfoContext } from "./GetDocExtractionResultResponseBodyDataKvListInfoContext";


export class GetDocExtractionResultResponseBodyDataKvListInfo extends $dara.Model {
  /**
   * @remarks
   * Recalled content
   */
  context?: GetDocExtractionResultResponseBodyDataKvListInfoContext;
  /**
   * @remarks
   * Field key name
   * 
   * @example
   * Tenant
   */
  keyName?: string;
  /**
   * @remarks
   * Field key value
   * 
   * @example
   * Alibaba Cloud XXX Co., Ltd.
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
      context: GetDocExtractionResultResponseBodyDataKvListInfoContext,
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

