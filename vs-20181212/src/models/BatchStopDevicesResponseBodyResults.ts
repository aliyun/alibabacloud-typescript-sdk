// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchStopDevicesResponseBodyResultsStreams } from "./BatchStopDevicesResponseBodyResultsStreams";


export class BatchStopDevicesResponseBodyResults extends $dara.Model {
  /**
   * @example
   * 32388487****92996
   */
  id?: string;
  streams?: BatchStopDevicesResponseBodyResultsStreams[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      streams: 'Streams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      streams: { 'type': 'array', 'itemType': BatchStopDevicesResponseBodyResultsStreams },
    };
  }

  validate() {
    if(Array.isArray(this.streams)) {
      $dara.Model.validateArray(this.streams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

