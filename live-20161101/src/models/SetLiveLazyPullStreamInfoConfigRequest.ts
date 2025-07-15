// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLiveLazyPullStreamInfoConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * >  If you want to configure triggered stream pulling for all applications, set the value to **ali_all_app**.
   * 
   * This parameter is required.
   * 
   * @example
   * ali_all_app
   */
  appName?: string;
  /**
   * @remarks
   * The main streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the application for back-to-origin stream pulling.
   * 
   * >  If you want to use the application specified in the streaming URL, leave this parameter empty.
   * 
   * @example
   * livePullApp****
   */
  pullAppName?: string;
  /**
   * @remarks
   * The origin server address of the live stream. Separate multiple addresses with semicolons (;).
   * 
   * This parameter is required.
   * 
   * @example
   * guide.aliyundoc.com
   */
  pullDomainName?: string;
  /**
   * @remarks
   * The protocol for back-to-origin stream pulling. Valid values:
   * 
   * *   **rtmp**
   * *   **httpflv**
   * *   **hls**
   * 
   * This parameter is required.
   * 
   * @example
   * rtmp
   */
  pullProtocol?: string;
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to trigger stream pulling when the transcoded stream is played. The default value is **no**. Valid values:
   * 
   * *   **yes**
   * *   **no**
   * 
   * @example
   * no
   */
  transcodeLazy?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      pullAppName: 'PullAppName',
      pullDomainName: 'PullDomainName',
      pullProtocol: 'PullProtocol',
      regionId: 'RegionId',
      transcodeLazy: 'TranscodeLazy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      ownerId: 'number',
      pullAppName: 'string',
      pullDomainName: 'string',
      pullProtocol: 'string',
      regionId: 'string',
      transcodeLazy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

