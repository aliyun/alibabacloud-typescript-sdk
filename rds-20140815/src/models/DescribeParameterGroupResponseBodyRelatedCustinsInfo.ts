// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeParameterGroupResponseBodyRelatedCustinsInfoRelatedCustinsInfo } from "./DescribeParameterGroupResponseBodyRelatedCustinsInfoRelatedCustinsInfo";


export class DescribeParameterGroupResponseBodyRelatedCustinsInfo extends $dara.Model {
  relatedCustinsInfo?: DescribeParameterGroupResponseBodyRelatedCustinsInfoRelatedCustinsInfo[];
  static names(): { [key: string]: string } {
    return {
      relatedCustinsInfo: 'RelatedCustinsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relatedCustinsInfo: { 'type': 'array', 'itemType': DescribeParameterGroupResponseBodyRelatedCustinsInfoRelatedCustinsInfo },
    };
  }

  validate() {
    if(Array.isArray(this.relatedCustinsInfo)) {
      $dara.Model.validateArray(this.relatedCustinsInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

