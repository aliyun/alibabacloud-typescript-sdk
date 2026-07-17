// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ABTestScene } from "./AbtestScene";


export class UpdateABTestSceneRequest extends $dara.Model {
  /**
   * @remarks
   * The A/B test scenario.
   */
  body?: ABTestScene;
  /**
   * @remarks
   * Specifies whether to perform a dry run. This parameter is used only to check whether the data source is valid. Valid values: true and false.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ABTestScene,
      dryRun: 'boolean',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

