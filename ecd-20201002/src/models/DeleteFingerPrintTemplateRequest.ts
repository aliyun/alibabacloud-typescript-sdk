// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFingerPrintTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID. The system generates a unique ID for each client.
   * 
   * This parameter is required.
   * 
   * @example
   * 59e86b39-ccac-4dfa-93d7-1f724052****
   */
  clientId?: string;
  /**
   * @remarks
   * The client token to ensure the idempotence of the request. You can use the client to generate the value, but you ensure sure that the value is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 40401e62-5caf-4508-8de7-bf98af12****
   */
  clientToken?: string;
  /**
   * @remarks
   * The index.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The logon token.
   * 
   * This parameter is required.
   * 
   * @example
   * v1c0436c721786529914f16516396228454fa6284c9b80f9917f25ebbec2aa30c10343e3f6f9aff64500ce13808aef****
   */
  loginToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 6df06330-3b75-4768-b334-41a73a64****
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientToken: 'ClientToken',
      index: 'Index',
      loginToken: 'LoginToken',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientToken: 'string',
      index: 'number',
      loginToken: 'string',
      regionId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

