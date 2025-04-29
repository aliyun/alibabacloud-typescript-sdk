// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImportOASTaskResponseBodyApiResultsApiResult } from "./DescribeImportOastaskResponseBodyApiResultsApiResult";


export class DescribeImportOASTaskResponseBodyApiResults extends $dara.Model {
  apiResult?: DescribeImportOASTaskResponseBodyApiResultsApiResult[];
  static names(): { [key: string]: string } {
    return {
      apiResult: 'ApiResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiResult: { 'type': 'array', 'itemType': DescribeImportOASTaskResponseBodyApiResultsApiResult },
    };
  }

  validate() {
    if(Array.isArray(this.apiResult)) {
      $dara.Model.validateArray(this.apiResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

