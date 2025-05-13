// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWorkerListResponseBodyDataWorkerInfos } from "./GetWorkerListResponseBodyDataWorkerInfos";


export class GetWorkerListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The worker information.
   */
  workerInfos?: GetWorkerListResponseBodyDataWorkerInfos[];
  static names(): { [key: string]: string } {
    return {
      workerInfos: 'WorkerInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workerInfos: { 'type': 'array', 'itemType': GetWorkerListResponseBodyDataWorkerInfos },
    };
  }

  validate() {
    if(Array.isArray(this.workerInfos)) {
      $dara.Model.validateArray(this.workerInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

