// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLiveStreamTranscodeRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  app?: string;
  /**
   * @remarks
   * The main streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domain?: string;
  ownerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The transcoding template ID. Valid values:
   * 
   * *   Standard transcoding:
   * 
   *     *   lld: low definition
   *     *   lsd: standard definition
   *     *   lhd: high definition
   *     *   lud : ultra-high definition
   * 
   * *   Narrowband HD™ transcoding:
   * 
   *     *   ld: low definition
   *     *   sd: standard definition
   *     *   hd: high definition
   *     *   ud: ultra-high definition
   * 
   * *   Custom transcoding: a custom ID
   * 
   * This parameter is required.
   * 
   * @example
   * lld
   */
  template?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      domain: 'Domain',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      domain: 'string',
      ownerId: 'number',
      securityToken: 'string',
      template: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

