// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetInterveneImportTaskInfoResponseBodyDataStatus } from "./GetInterveneImportTaskInfoResponseBodyDataStatus";


export class GetInterveneImportTaskInfoResponseBodyData extends $dara.Model {
  status?: GetInterveneImportTaskInfoResponseBodyDataStatus;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: GetInterveneImportTaskInfoResponseBodyDataStatus,
    };
  }

  validate() {
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

