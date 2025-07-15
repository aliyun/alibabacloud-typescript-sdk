// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLiveAudioAuditConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs. The value of this parameter must be the same as the application name in the ingest URL. Otherwise, the configuration does not take effect. The application name is case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The business type. You can specify a model. The default value is the domain name.
   * 
   * @example
   * example.edu
   */
  bizType?: string;
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
  /**
   * @remarks
   * The name of the Object Storage Service (OSS) bucket.
   * 
   * @example
   * liveBucket****
   */
  ossBucket?: string;
  /**
   * @remarks
   * The endpoint of the OSS bucket.
   * 
   * @example
   * cn-oss-****.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @remarks
   * The name of the recording that is stored in OSS.
   * 
   * @example
   * liveObject****
   */
  ossObject?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The name of the live stream. The value of this parameter must be the same as the stream name in the ingest URL. Otherwise, the configuration does not take effect. The stream name is case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      bizType: 'BizType',
      domainName: 'DomainName',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      ossObject: 'OssObject',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      bizType: 'string',
      domainName: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
      ossObject: 'string',
      ownerId: 'number',
      regionId: 'string',
      streamName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

