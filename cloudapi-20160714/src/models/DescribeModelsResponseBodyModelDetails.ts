// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeModelsResponseBodyModelDetailsModelDetail } from "./DescribeModelsResponseBodyModelDetailsModelDetail";


export class DescribeModelsResponseBodyModelDetails extends $dara.Model {
  modelDetail?: DescribeModelsResponseBodyModelDetailsModelDetail[];
  static names(): { [key: string]: string } {
    return {
      modelDetail: 'ModelDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelDetail: { 'type': 'array', 'itemType': DescribeModelsResponseBodyModelDetailsModelDetail },
    };
  }

  validate() {
    if(Array.isArray(this.modelDetail)) {
      $dara.Model.validateArray(this.modelDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

