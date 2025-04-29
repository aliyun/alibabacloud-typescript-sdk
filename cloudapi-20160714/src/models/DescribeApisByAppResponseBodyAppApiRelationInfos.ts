// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApisByAppResponseBodyAppApiRelationInfosAppApiRelationInfo } from "./DescribeApisByAppResponseBodyAppApiRelationInfosAppApiRelationInfo";


export class DescribeApisByAppResponseBodyAppApiRelationInfos extends $dara.Model {
  appApiRelationInfo?: DescribeApisByAppResponseBodyAppApiRelationInfosAppApiRelationInfo[];
  static names(): { [key: string]: string } {
    return {
      appApiRelationInfo: 'AppApiRelationInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appApiRelationInfo: { 'type': 'array', 'itemType': DescribeApisByAppResponseBodyAppApiRelationInfosAppApiRelationInfo },
    };
  }

  validate() {
    if(Array.isArray(this.appApiRelationInfo)) {
      $dara.Model.validateArray(this.appApiRelationInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

