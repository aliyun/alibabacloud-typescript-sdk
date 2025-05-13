// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListActionRecordsResponseBodyResultStatusInfoSubStatusInfo } from "./ListActionRecordsResponseBodyResultStatusInfoSubStatusInfo";


export class ListActionRecordsResponseBodyResultStatusInfo extends $dara.Model {
  completeNodeCount?: number;
  endTime?: number;
  exception?: string;
  latencyMills?: number;
  nodeCount?: number;
  process?: string;
  startTime?: number;
  stateType?: string;
  subState?: string;
  subStatusInfo?: ListActionRecordsResponseBodyResultStatusInfoSubStatusInfo[];
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
      subStatusInfo: 'subStatusInfo',
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
      subStatusInfo: { 'type': 'array', 'itemType': ListActionRecordsResponseBodyResultStatusInfoSubStatusInfo },
    };
  }

  validate() {
    if(Array.isArray(this.subStatusInfo)) {
      $dara.Model.validateArray(this.subStatusInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

