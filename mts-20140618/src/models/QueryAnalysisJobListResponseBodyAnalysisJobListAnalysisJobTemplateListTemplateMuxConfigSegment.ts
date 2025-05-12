// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateMuxConfigSegment extends $dara.Model {
  /**
   * @remarks
   * The segment length. Unit: seconds.
   * 
   * @example
   * 10
   */
  duration?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

