// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NewJobOrderShrinkRequest extends $dara.Model {
  appCode?: string;
  appName?: string;
  callbackUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  changeType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  clientSystem?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  clientUniqueId?: string;
  creator?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  paramsShrink?: string;
  referUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appName: 'AppName',
      callbackUrl: 'CallbackUrl',
      changeType: 'ChangeType',
      clientSystem: 'ClientSystem',
      clientUniqueId: 'ClientUniqueId',
      creator: 'Creator',
      paramsShrink: 'Params',
      referUrl: 'ReferUrl',
      requestId: 'RequestId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appName: 'string',
      callbackUrl: 'string',
      changeType: 'string',
      clientSystem: 'string',
      clientUniqueId: 'string',
      creator: 'string',
      paramsShrink: 'string',
      referUrl: 'string',
      requestId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

