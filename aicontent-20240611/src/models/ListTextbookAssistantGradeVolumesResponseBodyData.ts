// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTextbookAssistantGradeVolumesResponseBodyDataGradeVolumes } from "./ListTextbookAssistantGradeVolumesResponseBodyDataGradeVolumes";


export class ListTextbookAssistantGradeVolumesResponseBodyData extends $dara.Model {
  gradeVolumes?: ListTextbookAssistantGradeVolumesResponseBodyDataGradeVolumes[];
  /**
   * @example
   * 人教版
   */
  textbookVersion?: string;
  static names(): { [key: string]: string } {
    return {
      gradeVolumes: 'gradeVolumes',
      textbookVersion: 'textbookVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gradeVolumes: { 'type': 'array', 'itemType': ListTextbookAssistantGradeVolumesResponseBodyDataGradeVolumes },
      textbookVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.gradeVolumes)) {
      $dara.Model.validateArray(this.gradeVolumes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

