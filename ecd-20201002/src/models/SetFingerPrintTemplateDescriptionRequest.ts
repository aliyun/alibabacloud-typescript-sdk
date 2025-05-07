// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetFingerPrintTemplateDescriptionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0764064c-1609-4d3c-8cb7-ab8d3feg****
   */
  clientId?: string;
  /**
   * @example
   * 40401e62-5caf-4508-8de7-bf98af12****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Finger 1
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v14e5a2404c495249f7541646535779667ea0b5d87754b5d2d2a3099bda774f3832e24756ef3e66eb574b1f3e99078****
   */
  loginToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
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

