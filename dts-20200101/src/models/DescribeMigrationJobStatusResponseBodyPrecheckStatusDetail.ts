// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMigrationJobStatusResponseBodyPrecheckStatusDetailCheckItem } from "./DescribeMigrationJobStatusResponseBodyPrecheckStatusDetailCheckItem";


export class DescribeMigrationJobStatusResponseBodyPrecheckStatusDetail extends $dara.Model {
  checkItem?: DescribeMigrationJobStatusResponseBodyPrecheckStatusDetailCheckItem[];
  static names(): { [key: string]: string } {
    return {
      checkItem: 'CheckItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItem: { 'type': 'array', 'itemType': DescribeMigrationJobStatusResponseBodyPrecheckStatusDetailCheckItem },
    };
  }

  validate() {
    if(Array.isArray(this.checkItem)) {
      $dara.Model.validateArray(this.checkItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

