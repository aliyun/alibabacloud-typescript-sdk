// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoAnalysisConfigResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2
   */
  asyncConcurrency?: number;
  static names(): { [key: string]: string } {
    return {
      asyncConcurrency: 'asyncConcurrency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncConcurrency: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

