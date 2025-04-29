// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUpdateVpcInfoTaskResponseBodyApiUpdateVpcInfoResultsApiUpdateVpcInfoResult } from "./DescribeUpdateVpcInfoTaskResponseBodyApiUpdateVpcInfoResultsApiUpdateVpcInfoResult";


export class DescribeUpdateVpcInfoTaskResponseBodyApiUpdateVpcInfoResults extends $dara.Model {
  apiUpdateVpcInfoResult?: DescribeUpdateVpcInfoTaskResponseBodyApiUpdateVpcInfoResultsApiUpdateVpcInfoResult[];
  static names(): { [key: string]: string } {
    return {
      apiUpdateVpcInfoResult: 'ApiUpdateVpcInfoResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiUpdateVpcInfoResult: { 'type': 'array', 'itemType': DescribeUpdateVpcInfoTaskResponseBodyApiUpdateVpcInfoResultsApiUpdateVpcInfoResult },
    };
  }

  validate() {
    if(Array.isArray(this.apiUpdateVpcInfoResult)) {
      $dara.Model.validateArray(this.apiUpdateVpcInfoResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

