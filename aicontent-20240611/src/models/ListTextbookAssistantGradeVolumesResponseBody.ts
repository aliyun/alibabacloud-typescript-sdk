// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTextbookAssistantGradeVolumesResponseBodyDataGradeVolumes extends $dara.Model {
  /**
   * @remarks
   * The grade level. Valid values: 1 to 9.
   * 
   * @example
   * 3
   */
  grade?: string;
  /**
   * @remarks
   * The volume. Valid values: `0` (single volume), `1` (Volume 1), and `2` (Volume 2).
   * 
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
  /**
   * @remarks
   * The grade and volume information.
   */
  gradeVolumes?: ListTextbookAssistantGradeVolumesResponseBodyDataGradeVolumes[];
  /**
   * @remarks
   * The version of the textbook.
   * 
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
  /**
   * @remarks
   * The response data.
   */
  data?: ListTextbookAssistantGradeVolumesResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 未知错误
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F3B1AAF2-3041-5AA7-A352-BD5F998FA465
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
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

