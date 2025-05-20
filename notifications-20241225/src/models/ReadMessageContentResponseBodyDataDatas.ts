// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ReadMessageContentResponseBodyDataDatasItem } from "./ReadMessageContentResponseBodyDataDatasItem";
import { ReadMessageContentResponseBodyDataDatasLastItem } from "./ReadMessageContentResponseBodyDataDatasLastItem";
import { ReadMessageContentResponseBodyDataDatasNextItem } from "./ReadMessageContentResponseBodyDataDatasNextItem";


export class ReadMessageContentResponseBodyDataDatas extends $dara.Model {
  item?: ReadMessageContentResponseBodyDataDatasItem[];
  lastItem?: ReadMessageContentResponseBodyDataDatasLastItem[];
  nextItem?: ReadMessageContentResponseBodyDataDatasNextItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      lastItem: 'LastItem',
      nextItem: 'NextItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': ReadMessageContentResponseBodyDataDatasItem },
      lastItem: { 'type': 'array', 'itemType': ReadMessageContentResponseBodyDataDatasLastItem },
      nextItem: { 'type': 'array', 'itemType': ReadMessageContentResponseBodyDataDatasNextItem },
    };
  }

  validate() {
    if(Array.isArray(this.item)) {
      $dara.Model.validateArray(this.item);
    }
    if(Array.isArray(this.lastItem)) {
      $dara.Model.validateArray(this.lastItem);
    }
    if(Array.isArray(this.nextItem)) {
      $dara.Model.validateArray(this.nextItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

