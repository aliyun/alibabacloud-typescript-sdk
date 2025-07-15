// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLiveSnapshotDetectPornConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs. The value of this parameter must be the same as the application name in the ingest URL. Otherwise, the configuration does not take effect. The name can be up to 255 characters in length and can contain digits, letters, hyphens (-), and underscores (_). The name cannot start with a hyphen (-) or underscore (_). You can also specify an asterisk (\\*) as the value to match all applications.
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
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
  /**
   * @remarks
   * The interval at which snapshots are captured from the live stream. Valid values: **5 to 3600**. Unit: seconds.
   * 
   * @example
   * 5
   */
  interval?: number;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * liveBucket****
   */
  ossBucket?: string;
  /**
   * @remarks
   * The endpoint of the Object Storage Service (OSS) bucket.
   * 
   * @example
   * cn-oss-****.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @remarks
   * The name of the snapshot that stores violations such as pornographic content and politically sensitive content.
   * 
   * @example
   * {liveApp****}/{liveStream****}/{Date}/{Hour}/{Minute}_{Second}.jpg
   */
  ossObject?: string;
  ownerId?: number;
  /**
   * @remarks
   * The moderation scenario array.
   * 
   * @example
   * porn
   */
  scene?: string[];
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      interval: 'Interval',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      ossObject: 'OssObject',
      ownerId: 'OwnerId',
      scene: 'Scene',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      interval: 'number',
      ossBucket: 'string',
      ossEndpoint: 'string',
      ossObject: 'string',
      ownerId: 'number',
      scene: { 'type': 'array', 'itemType': 'string' },
      securityToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scene)) {
      $dara.Model.validateArray(this.scene);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

