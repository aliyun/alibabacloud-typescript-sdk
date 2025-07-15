// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLiveMessageAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application ID. The ID is used in subsequent operations, such as joining a group.
   * 
   * @example
   * demo
   */
  appId?: string;
  /**
   * @remarks
   * The AppKey for authentication of this application.
   * 
   * @example
   * **********************************
   */
  appKey?: string;
  /**
   * @remarks
   * The application signature. The signature is required when you use the interactive messaging SDK.
   * 
   * @example
   * **************************************************************************
   */
  appSign?: string;
  /**
   * @remarks
   * The data center in which the interactive messaging application was created.
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

