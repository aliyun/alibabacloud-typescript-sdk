// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg } from "./DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg";


export class DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs extends $dara.Model {
  functionArg?: DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg[];
  static names(): { [key: string]: string } {
    return {
      functionArg: 'FunctionArg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionArg: { 'type': 'array', 'itemType': DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg },
    };
  }

  validate() {
    if(Array.isArray(this.functionArg)) {
      $dara.Model.validateArray(this.functionArg);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

