// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSparkReplSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * >  You can call the [ListSparkApps](https://help.aliyun.com/document_detail/455888.html) operation to query all application IDs.
   * 
   * @example
   * s202411071444hzdvk486d9d200****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the session that executes the code.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  sessionId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      sessionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

