// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnnotationMissionSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The annotation mission ID.
   * 
   * @example
   * 8434a4b0-41fc-41b1-aa75-bbd1f2ab0c8d
   */
  annotationMissionId?: string;
  /**
   * @remarks
   * The annotation mission chat instance ID.
   * 
   * > Obtained by calling the SaveAnnotationMissionSessionList operation.
   * 
   * @example
   * 8434a4b0-41fc-41b1-aa75-bbd1f2ab0c8d
   */
  annotationMissionSessionId?: string;
  /**
   * @remarks
   * The environment.
   * 
   * > Default value: 2.
   * 
   * **Valid values:**
   * - 0: NONE.
   * - 1: Private cloud.
   * - 2: Public cloud.
   * 
   * @example
   * 0
   */
  environment?: number;
  /**
   * @remarks
   * The list of included statuses.
   * 
   * > The format is [1]. Specify the actual enum values in the array.
   * 
   * **Valid values:**
   * - 1: Correct recognition.
   * - 2: Incorrect recognition.
   * - 8: Invalid data.
   * - 4: Uncovered intent.
   * - 16: Transcription misrecognition.
   * 
   * @example
   * [1]
   */
  includeStatusListJsonString?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 3
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      annotationMissionId: 'AnnotationMissionId',
      annotationMissionSessionId: 'AnnotationMissionSessionId',
      environment: 'Environment',
      includeStatusListJsonString: 'IncludeStatusListJsonString',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotationMissionId: 'string',
      annotationMissionSessionId: 'string',
      environment: 'number',
      includeStatusListJsonString: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

