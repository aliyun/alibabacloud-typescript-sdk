// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ABTestScene } from "./AbtestScene";


export class CreateABTestSceneRequest extends $dara.Model {
  /**
   * @remarks
   * The ABTest scenario. For more information, see [ABTestScene](https://help.aliyun.com/document_detail/173618.html)
   */
  body?: ABTestScene;
  /**
   * @remarks
   * Specifies whether to check the validity of input parameters. Default value: false.
   * 
   * Valid values:
   * 
   * *   **true**: checks only the validity of input parameters.
   * *   **false**: checks the validity of input parameters and creates an attribution configuration.
   * 
   * @example
   * false
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

