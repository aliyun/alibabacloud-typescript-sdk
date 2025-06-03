// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartCloudNoteRequestServiceInspectionInspectionContents } from "./StartCloudNoteRequestServiceInspectionInspectionContents";


export class StartCloudNoteRequestServiceInspection extends $dara.Model {
  enabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  inspectionContents?: StartCloudNoteRequestServiceInspectionInspectionContents[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 请监测对话中销售人员表现是否接待热情、态度良好
   */
  inspectionIntroduction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 汽车门店线下销售场景
   */
  sceneIntroduction?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      inspectionContents: 'InspectionContents',
      inspectionIntroduction: 'InspectionIntroduction',
      sceneIntroduction: 'SceneIntroduction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      inspectionContents: { 'type': 'array', 'itemType': StartCloudNoteRequestServiceInspectionInspectionContents },
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

