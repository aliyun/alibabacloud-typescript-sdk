// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfigSegment extends $dara.Model {
  /**
   * @remarks
   * The length of the segment. Unit: seconds.
   * 
   * @example
   * 60
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

