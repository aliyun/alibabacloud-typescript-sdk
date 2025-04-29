// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResultVideoShotsVideoSnapshots } from "./RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResultVideoShotsVideoSnapshots";


export class RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResultVideoShots extends $dara.Model {
  endTime?: number;
  endTimeFormat?: string;
  startTime?: number;
  startTimeFormat?: string;
  videoSnapshots?: RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResultVideoShotsVideoSnapshots[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      endTimeFormat: 'endTimeFormat',
      startTime: 'startTime',
      startTimeFormat: 'startTimeFormat',
      videoSnapshots: 'videoSnapshots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      endTimeFormat: 'string',
      startTime: 'number',
      startTimeFormat: 'string',
      videoSnapshots: { 'type': 'array', 'itemType': RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResultVideoShotsVideoSnapshots },
    };
  }

  validate() {
    if(Array.isArray(this.videoSnapshots)) {
      $dara.Model.validateArray(this.videoSnapshots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

