// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUpdateBackendTaskResponseBodyApiUpdateBackendResultsApiUpdateBackendResult } from "./DescribeUpdateBackendTaskResponseBodyApiUpdateBackendResultsApiUpdateBackendResult";


export class DescribeUpdateBackendTaskResponseBodyApiUpdateBackendResults extends $dara.Model {
  apiUpdateBackendResult?: DescribeUpdateBackendTaskResponseBodyApiUpdateBackendResultsApiUpdateBackendResult[];
  static names(): { [key: string]: string } {
    return {
      apiUpdateBackendResult: 'ApiUpdateBackendResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiUpdateBackendResult: { 'type': 'array', 'itemType': DescribeUpdateBackendTaskResponseBodyApiUpdateBackendResultsApiUpdateBackendResult },
    };
  }

  validate() {
    if(Array.isArray(this.apiUpdateBackendResult)) {
      $dara.Model.validateArray(this.apiUpdateBackendResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

