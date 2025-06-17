// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetGrayDomainFunctionResponseBodyDomainConfigList } from "./GetGrayDomainFunctionResponseBodyDomainConfigList";


export class GetGrayDomainFunctionResponseBody extends $dara.Model {
  domainConfigList?: GetGrayDomainFunctionResponseBodyDomainConfigList[];
  /**
   * @example
   * example.com
   */
  domainName?: string;
  progression?: string;
  /**
   * @example
   * C80705BF-0F76-41FA-BAD1-5B59296A4E59
   */
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      domainConfigList: 'DomainConfigList',
      domainName: 'DomainName',
      progression: 'Progression',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfigList: { 'type': 'array', 'itemType': GetGrayDomainFunctionResponseBodyDomainConfigList },
      domainName: 'string',
      progression: 'string',
      requestId: 'string',
      status: 'string',
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

