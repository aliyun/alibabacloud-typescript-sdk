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
   * The AI application runtime parameters, as a JSON string.
   * 
   * @example
   * {"testKey":"testValue"}
   */
  appParams?: string;
  /**
   * @remarks
   * The ID of the folder. If provided, the output is saved to this folder.
   * 
   * @example
   * fd-cReaEcVqQK
   */
  folderId?: string;
  /**
   * @remarks
   * The ID of the project. If provided, the output is saved to this project.
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

