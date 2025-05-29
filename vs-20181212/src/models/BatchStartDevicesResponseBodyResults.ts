// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchStartDevicesResponseBodyResultsStreams } from "./BatchStartDevicesResponseBodyResultsStreams";


export class BatchStartDevicesResponseBodyResults extends $dara.Model {
  /**
   * @example
   * 32388487****92996-cn-qingdao
   */
  id?: string;
  streams?: BatchStartDevicesResponseBodyResultsStreams[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      streams: 'Streams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      streams: { 'type': 'array', 'itemType': BatchStartDevicesResponseBodyResultsStreams },
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

