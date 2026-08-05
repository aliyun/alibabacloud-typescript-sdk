// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLiveMessageAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application ID, which is used for subsequent operations such as joining groups.
   * 
   * @example
   * demo
   */
  appId?: string;
  /**
   * @remarks
   * The AppKey, which is used to generate authentication for various operations related to the AppId.
   * 
   * @example
   * **********************************
   */
  appKey?: string;
  /**
   * @remarks
   * The application signature. The interactive messaging service SDK requires this information.
   * 
   * @example
   * **************************************************************************
   */
  appSign?: string;
  /**
   * @remarks
   * The data center.
   * 
   * @example
   * cn-shanghai
   */
  dataCenter?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 65EEDBEB-43FE-1E15-976F-3DDD753A****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appKey: 'AppKey',
      appSign: 'AppSign',
      dataCenter: 'DataCenter',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appKey: 'string',
      appSign: 'string',
      dataCenter: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

