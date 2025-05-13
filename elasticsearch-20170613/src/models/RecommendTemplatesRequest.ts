// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecommendTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * *
   * *
   * *
   * *
   * *
   * 
   * **
   * 
   * ****
   * 
   * This parameter is required.
   * 
   * @example
   * general
   */
  usageScenario?: string;
  static names(): { [key: string]: string } {
    return {
      usageScenario: 'usageScenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageScenario: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

