// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApisWithStageNameIntegratedByAppResponseBodyAppApiRelationInfosAppApiRelationInfo } from "./DescribeApisWithStageNameIntegratedByAppResponseBodyAppApiRelationInfosAppApiRelationInfo";


export class DescribeApisWithStageNameIntegratedByAppResponseBodyAppApiRelationInfos extends $dara.Model {
  appApiRelationInfo?: DescribeApisWithStageNameIntegratedByAppResponseBodyAppApiRelationInfosAppApiRelationInfo[];
  static names(): { [key: string]: string } {
    return {
      appApiRelationInfo: 'AppApiRelationInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appApiRelationInfo: { 'type': 'array', 'itemType': DescribeApisWithStageNameIntegratedByAppResponseBodyAppApiRelationInfosAppApiRelationInfo },
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

