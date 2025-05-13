// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListActionRecordsResponseBodyResultStatusInfoSubStatusInfo extends $dara.Model {
  completeNodeCount?: number;
  endTime?: number;
  exception?: string;
  latencyMills?: number;
  nodeCount?: number;
  process?: string;
  startTime?: number;
  stateType?: string;
  subState?: string;
  static names(): { [key: string]: string } {
    return {
      completeNodeCount: 'completeNodeCount',
      endTime: 'endTime',
      exception: 'exception',
      latencyMills: 'latencyMills',
      nodeCount: 'nodeCount',
      process: 'process',
      startTime: 'startTime',
      stateType: 'stateType',
      subState: 'subState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeNodeCount: 'number',
      endTime: 'number',
      exception: 'string',
      latencyMills: 'number',
      nodeCount: 'number',
      process: 'string',
      startTime: 'number',
      stateType: 'string',
      subState: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

