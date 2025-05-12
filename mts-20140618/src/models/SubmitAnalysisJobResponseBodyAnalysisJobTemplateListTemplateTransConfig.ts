// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateTransConfig extends $dara.Model {
  /**
   * @remarks
   * The transcoding mode. Valid values: onepass, twopass, and CBR. Default value: **onepass**.
   * 
   * @example
   * onepass
   */
  transMode?: string;
  static names(): { [key: string]: string } {
    return {
      transMode: 'TransMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

