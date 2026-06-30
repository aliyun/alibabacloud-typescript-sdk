// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitYikeAIAppJobRequest extends $dara.Model {
  /**
   * @remarks
   * The AI application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * app_test
   */
  appId?: string;
  /**
   * @remarks
   * The runtime parameters of the AI application. The value is a string produced by JSON serialization.
   * 
   * @example
   * {"testKey":"testValue"}
   */
  appParams?: string;
  /**
   * @remarks
   * The folder ID. This parameter is used to save results to the specified folder.
   * 
   * @example
   * fd-cReaEcVqQK
   */
  folderId?: string;
  /**
   * @remarks
   * The project ID. This parameter is used to save results to the specified project.
   * 
   * @example
   * ProductionId
   */
  productionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appParams: 'AppParams',
      folderId: 'FolderId',
      productionId: 'ProductionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appParams: 'string',
      folderId: 'string',
      productionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

