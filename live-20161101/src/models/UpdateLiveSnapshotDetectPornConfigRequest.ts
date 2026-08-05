// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLiveSnapshotDetectPornConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the stream belongs. The AppName value must match the AppName in the ingest URL for the template to take effect. The value can be up to 255 characters in length and can contain digits, uppercase and lowercase letters, hyphens (-), and underscores (_). Hyphens and underscores cannot be the first character. The value can also be a single asterisk (*) to match all AppName values.
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The streaming domain of the streamer.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The sampling interval. Valid values: **5 to 3600**. Unit: seconds.
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
   * The endpoint of the OSS bucket.
   * 
   * @example
   * cn-oss-****.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @remarks
   * The name of the stored image that contains violations such as pornography or politically sensitive content.
   * 
   * @example
   * {liveApp****}/{liveStream****}/{Date}/{Hour}/{Minute}_{Second}.jpg
   */
  ossObject?: string;
  ownerId?: number;
  /**
   * @remarks
   * The array of detection scenarios.
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

