// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitYikeAIAppJobRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sys-ao-smith-1
   */
  appId?: string;
  /**
   * @example
   * sys-ao-smith-1
   */
  appParams?: string;
  /**
   * @example
   * fd-cReaEcVqQK
   */
  folderId?: string;
  /**
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

