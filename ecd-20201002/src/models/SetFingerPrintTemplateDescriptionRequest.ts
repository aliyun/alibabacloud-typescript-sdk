// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetFingerPrintTemplateDescriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID. The system generates a unique ID for each client.
   * 
   * This parameter is required.
   * 
   * @example
   * 0764064c-1609-4d3c-8cb7-ab8d3feg****
   */
  clientId?: string;
  /**
   * @remarks
   * The client token to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 40401e62-5caf-4508-8de7-bf98af12****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description.
   * 
   * This parameter is required.
   * 
   * @example
   * Finger 1
   */
  description?: string;
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
   * v14e5a2404c495249f7541646535779667ea0b5d87754b5d2d2a3099bda774f3832e24756ef3e66eb574b1f3e99078****
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
   * d28520d4-da0b-4a97-981d-683db865****
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientToken: 'ClientToken',
      description: 'Description',
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
      description: 'string',
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

