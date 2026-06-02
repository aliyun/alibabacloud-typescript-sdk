// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnnotationMissionSessionRequest extends $dara.Model {
  /**
   * @example
   * 8434a4b0-41fc-41b1-aa75-bbd1f2ab0c8d
   */
  annotationMissionId?: string;
  /**
   * @example
   * 8434a4b0-41fc-41b1-aa75-bbd1f2ab0c8d
   */
  annotationMissionSessionId?: string;
  /**
   * @example
   * 0
   */
  environment?: number;
  /**
   * @example
   * [1]
   */
  includeStatusListJsonString?: string;
  /**
   * @example
   * 3
   */
  pageIndex?: number;
  /**
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

