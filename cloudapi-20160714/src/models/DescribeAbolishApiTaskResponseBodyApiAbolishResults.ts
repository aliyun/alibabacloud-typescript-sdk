// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAbolishApiTaskResponseBodyApiAbolishResultsApiAbolishResult } from "./DescribeAbolishApiTaskResponseBodyApiAbolishResultsApiAbolishResult";


export class DescribeAbolishApiTaskResponseBodyApiAbolishResults extends $dara.Model {
  apiAbolishResult?: DescribeAbolishApiTaskResponseBodyApiAbolishResultsApiAbolishResult[];
  static names(): { [key: string]: string } {
    return {
      apiAbolishResult: 'ApiAbolishResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiAbolishResult: { 'type': 'array', 'itemType': DescribeAbolishApiTaskResponseBodyApiAbolishResultsApiAbolishResult },
    };
  }

  validate() {
    if(Array.isArray(this.apiAbolishResult)) {
      $dara.Model.validateArray(this.apiAbolishResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

