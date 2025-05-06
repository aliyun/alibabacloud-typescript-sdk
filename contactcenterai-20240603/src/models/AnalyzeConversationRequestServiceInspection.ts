// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AnalyzeConversationRequestServiceInspectionInspectionContents } from "./AnalyzeConversationRequestServiceInspectionInspectionContents";


export class AnalyzeConversationRequestServiceInspection extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  inspectionContents?: AnalyzeConversationRequestServiceInspectionInspectionContents[];
  /**
   * @remarks
   * This parameter is required.
   */
  inspectionIntroduction?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
      inspectionContents: { 'type': 'array', 'itemType': AnalyzeConversationRequestServiceInspectionInspectionContents },
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

