// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchSetGrayDomainFunctionResponseBodyDomainConfigList } from "./BatchSetGrayDomainFunctionResponseBodyDomainConfigList";


export class BatchSetGrayDomainFunctionResponseBody extends $dara.Model {
  domainConfigList?: BatchSetGrayDomainFunctionResponseBodyDomainConfigList[];
  /**
   * @example
   * 3C6CCEC4-6B88-4D4A-93E4-D47B3D92CF8F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainConfigList: 'DomainConfigList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfigList: { 'type': 'array', 'itemType': BatchSetGrayDomainFunctionResponseBodyDomainConfigList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainConfigList)) {
      $dara.Model.validateArray(this.domainConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

