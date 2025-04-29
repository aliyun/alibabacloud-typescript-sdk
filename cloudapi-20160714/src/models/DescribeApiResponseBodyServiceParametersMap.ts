// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiResponseBodyServiceParametersMapServiceParameterMap } from "./DescribeApiResponseBodyServiceParametersMapServiceParameterMap";


export class DescribeApiResponseBodyServiceParametersMap extends $dara.Model {
  serviceParameterMap?: DescribeApiResponseBodyServiceParametersMapServiceParameterMap[];
  static names(): { [key: string]: string } {
    return {
      serviceParameterMap: 'ServiceParameterMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceParameterMap: { 'type': 'array', 'itemType': DescribeApiResponseBodyServiceParametersMapServiceParameterMap },
    };
  }

  validate() {
    if(Array.isArray(this.serviceParameterMap)) {
      $dara.Model.validateArray(this.serviceParameterMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

