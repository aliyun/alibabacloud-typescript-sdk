// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTextbookAssistantGradeVolumesResponseBodyDataGradeVolumes extends $dara.Model {
  /**
   * @example
   * 3
   */
  grade?: string;
  /**
   * @example
   * 1
   */
  volume?: string;
  static names(): { [key: string]: string } {
    return {
      grade: 'grade',
      volume: 'volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grade: 'string',
      volume: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

