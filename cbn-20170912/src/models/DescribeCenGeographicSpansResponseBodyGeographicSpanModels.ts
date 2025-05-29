// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCenGeographicSpansResponseBodyGeographicSpanModelsGeographicSpanModel } from "./DescribeCenGeographicSpansResponseBodyGeographicSpanModelsGeographicSpanModel";


export class DescribeCenGeographicSpansResponseBodyGeographicSpanModels extends $dara.Model {
  geographicSpanModel?: DescribeCenGeographicSpansResponseBodyGeographicSpanModelsGeographicSpanModel[];
  static names(): { [key: string]: string } {
    return {
      geographicSpanModel: 'GeographicSpanModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      geographicSpanModel: { 'type': 'array', 'itemType': DescribeCenGeographicSpansResponseBodyGeographicSpanModelsGeographicSpanModel },
    };
  }

  validate() {
    if(Array.isArray(this.geographicSpanModel)) {
      $dara.Model.validateArray(this.geographicSpanModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

