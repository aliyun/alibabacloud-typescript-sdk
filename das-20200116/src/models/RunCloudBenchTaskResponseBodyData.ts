// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunCloudBenchTaskResponseBodyDataPreCheckItem } from "./RunCloudBenchTaskResponseBodyDataPreCheckItem";


export class RunCloudBenchTaskResponseBodyData extends $dara.Model {
  preCheckItem?: RunCloudBenchTaskResponseBodyDataPreCheckItem[];
  static names(): { [key: string]: string } {
    return {
      preCheckItem: 'PreCheckItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preCheckItem: { 'type': 'array', 'itemType': RunCloudBenchTaskResponseBodyDataPreCheckItem },
    };
  }

  validate() {
    if(Array.isArray(this.preCheckItem)) {
      $dara.Model.validateArray(this.preCheckItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

