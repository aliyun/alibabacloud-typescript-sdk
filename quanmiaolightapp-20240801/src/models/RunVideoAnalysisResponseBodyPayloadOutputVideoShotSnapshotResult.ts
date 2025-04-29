// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResultVideoShots } from "./RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResultVideoShots";


export class RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResult extends $dara.Model {
  videoShots?: RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResultVideoShots[];
  static names(): { [key: string]: string } {
    return {
      videoShots: 'videoShots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoShots: { 'type': 'array', 'itemType': RunVideoAnalysisResponseBodyPayloadOutputVideoShotSnapshotResultVideoShots },
    };
  }

  validate() {
    if(Array.isArray(this.videoShots)) {
      $dara.Model.validateArray(this.videoShots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

