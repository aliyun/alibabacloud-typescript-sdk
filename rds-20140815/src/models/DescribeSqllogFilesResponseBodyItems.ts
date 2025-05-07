// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSQLLogFilesResponseBodyItemsLogFile } from "./DescribeSqllogFilesResponseBodyItemsLogFile";


export class DescribeSQLLogFilesResponseBodyItems extends $dara.Model {
  logFile?: DescribeSQLLogFilesResponseBodyItemsLogFile[];
  static names(): { [key: string]: string } {
    return {
      logFile: 'LogFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logFile: { 'type': 'array', 'itemType': DescribeSQLLogFilesResponseBodyItemsLogFile },
    };
  }

  validate() {
    if(Array.isArray(this.logFile)) {
      $dara.Model.validateArray(this.logFile);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

