// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateTransConfig extends $dara.Model {
  /**
   * @remarks
   * The transcoding mode. Default value: **onepass**. Valid values:
   * 
   * *   **onepass**
   * *   **twopass**
   * *   **CBR**
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

