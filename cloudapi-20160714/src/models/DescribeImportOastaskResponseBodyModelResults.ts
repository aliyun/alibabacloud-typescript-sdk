// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImportOASTaskResponseBodyModelResultsModelResult } from "./DescribeImportOastaskResponseBodyModelResultsModelResult";


export class DescribeImportOASTaskResponseBodyModelResults extends $dara.Model {
  modelResult?: DescribeImportOASTaskResponseBodyModelResultsModelResult[];
  static names(): { [key: string]: string } {
    return {
      modelResult: 'ModelResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelResult: { 'type': 'array', 'itemType': DescribeImportOASTaskResponseBodyModelResultsModelResult },
    };
  }

  validate() {
    if(Array.isArray(this.modelResult)) {
      $dara.Model.validateArray(this.modelResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

