// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NotifyAppNotificationForAdminRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * WS20260206134746000001
   */
  bizId?: string;
  /**
   * @remarks
   * The environment identifier.
   * 
   * @example
   * staging
   */
  env?: string;
  payload?: string;
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * 8c909373-6c33-41a7-aa38-3650e288a63e
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      env: 'Env',
      payload: 'Payload',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      env: 'string',
      payload: 'string',
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

