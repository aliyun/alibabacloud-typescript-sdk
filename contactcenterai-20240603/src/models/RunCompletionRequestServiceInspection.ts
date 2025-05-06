// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunCompletionRequestServiceInspectionInspectionContents } from "./RunCompletionRequestServiceInspectionInspectionContents";


export class RunCompletionRequestServiceInspection extends $dara.Model {
  inspectionContents?: RunCompletionRequestServiceInspectionInspectionContents[];
  inspectionIntroduction?: string;
  sceneIntroduction?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionContents: 'InspectionContents',
      inspectionIntroduction: 'InspectionIntroduction',
      sceneIntroduction: 'SceneIntroduction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionContents: { 'type': 'array', 'itemType': RunCompletionRequestServiceInspectionInspectionContents },
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

