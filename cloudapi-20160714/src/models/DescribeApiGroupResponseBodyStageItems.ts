// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiGroupResponseBodyStageItemsStageInfo } from "./DescribeApiGroupResponseBodyStageItemsStageInfo";


export class DescribeApiGroupResponseBodyStageItems extends $dara.Model {
  stageInfo?: DescribeApiGroupResponseBodyStageItemsStageInfo[];
  static names(): { [key: string]: string } {
    return {
      stageInfo: 'StageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stageInfo: { 'type': 'array', 'itemType': DescribeApiGroupResponseBodyStageItemsStageInfo },
    };
  }

  validate() {
    if(Array.isArray(this.stageInfo)) {
      $dara.Model.validateArray(this.stageInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

