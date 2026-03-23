// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NewJobOrderRequest extends $dara.Model {
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
  params?: { [key: string]: any };
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
      params: 'Params',
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
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      referUrl: 'string',
      requestId: 'string',
      title: 'string',
    };
  }

  validate() {
    if(this.params) {
      $dara.Model.validateMap(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

