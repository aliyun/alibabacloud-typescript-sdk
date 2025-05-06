// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTaskRequestServiceInspectionInspectionContents } from "./CreateTaskRequestServiceInspectionInspectionContents";


export class CreateTaskRequestServiceInspection extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  inspectionContents?: CreateTaskRequestServiceInspectionInspectionContents[];
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
      inspectionContents: { 'type': 'array', 'itemType': CreateTaskRequestServiceInspectionInspectionContents },
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

