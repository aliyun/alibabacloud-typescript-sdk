// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppSceneRecipientRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * The recipient ID.
   * 
   * @example
   * 1
   */
  recipientId?: string;
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * 1000006921
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      recipientId: 'RecipientId',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      recipientId: 'string',
      sceneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

