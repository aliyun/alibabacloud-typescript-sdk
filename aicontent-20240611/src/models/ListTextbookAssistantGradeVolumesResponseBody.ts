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

export class ListTextbookAssistantGradeVolumesResponseBody extends $dara.Model {
  data?: ListTextbookAssistantGradeVolumesResponseBodyData[];
  /**
   * @example
   * 0
   */
  errCode?: string;
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F3B1AAF2-3041-5AA7-A352-BD5F998FA465
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListTextbookAssistantGradeVolumesResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

