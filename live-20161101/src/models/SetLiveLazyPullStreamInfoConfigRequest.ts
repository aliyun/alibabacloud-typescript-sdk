// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLiveLazyPullStreamInfoConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * > To trigger origin fetch for all applications, set this parameter to **ali_all_app**.
   * 
   * This parameter is required.
   * 
   * @example
   * ali_all_app
   */
  appName?: string;
  /**
   * @remarks
   * The streaming domain name.
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
   * The source application name.
   * 
   * > Leave this parameter empty to use the application name from the playback URL of the source stream.
   * 
   * @example
   * livePullApp****
   */
  pullAppName?: string;
  /**
   * @remarks
   * The origin server that hosts the live stream. To specify multiple origin servers, separate them with semicolons (;).
   * 
   * This parameter is required.
   * 
   * @example
   * guide.aliyundoc.com
   */
  pullDomainName?: string;
  /**
   * @remarks
   * The protocol to use for pulling the stream from the source. Valid values:
   * 
   * - **rtmp**
   * 
   * - **httpflv**
   * 
   * - **hls**
   * 
   * This parameter is required.
   * 
   * @example
   * rtmp
   */
  pullProtocol?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to trigger stream pulling when a request for a transcoded stream is made. Default value: **no**. Valid values:
   * 
   * - **yes**
   * 
   * - **no**
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

