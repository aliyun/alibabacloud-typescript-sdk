// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AnalyzeAudioSyncRequestServiceInspectionInspectionContents } from "./AnalyzeAudioSyncRequestServiceInspectionInspectionContents";


export class AnalyzeAudioSyncRequestServiceInspection extends $dara.Model {
  inspectionContents?: AnalyzeAudioSyncRequestServiceInspectionInspectionContents[];
  inspectionIntroduction?: string;
  sceneIntroduction?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionContents: 'inspectionContents',
      inspectionIntroduction: 'inspectionIntroduction',
      sceneIntroduction: 'sceneIntroduction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionContents: { 'type': 'array', 'itemType': AnalyzeAudioSyncRequestServiceInspectionInspectionContents },
      inspectionIntroduction: 'string',
      sceneIntroduction: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inspectionContents)) {
      $dara.Model.validateArray(this.inspectionContents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

