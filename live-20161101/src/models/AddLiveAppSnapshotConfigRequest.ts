// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLiveAppSnapshotConfigRequest extends $dara.Model {
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
   * The callback URL that is used to receive notifications about snapshot capture.
   * 
   * @example
   * https://learn.aliyundoc.com
   */
  callback?: string;
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
   * The name of the OSS bucket.
   * 
   * After the configuration is complete, you can search for specific snapshots in the OSS console based on the callback information. You must create the OSS bucket in advance. For more information, see [Configure OSS](https://help.aliyun.com/document_detail/84932.html).
   * 
   * This parameter is required.
   * 
   * @example
   * liveBucket****
   */
  ossBucket?: string;
  /**
   * @remarks
   * The endpoint of the OSS bucket.
   * 
   * After the configuration is complete, you can search for specific snapshots in the OSS console based on the callback information. You must configure the OSS endpoint in advance. For more information, see [Configure OSS](https://help.aliyun.com/document_detail/84932.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-oss-****.aliyuncs.com
   */
  ossEndpoint?: string;
  /**
   * @remarks
   * The naming format of snapshots that are stored in the overwrite mode, which means that a new snapshot overwrites the previous snapshot.
   * 
   * *   The name must be less than 256 bytes in length.
   * *   Only JPG images are supported.
   * *   The name can contain variables such as {AppName} and {StreamName}.
   * 
   * @example
   * {AppName}/{StreamName}.jpg
   */
  overwriteOssObject?: string;
  ownerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The naming format of snapshots that are stored in sequence,
   * 
   * which means that a new snapshot does not overwrite the previous snapshot. You can call the [DescribeLiveStreamSnapshotInfo](https://help.aliyun.com/document_detail/2847902.html) operation to query the snapshots that were captured within a specific time period.
   * 
   * *   The name must be less than 256 bytes in length.
   * *   Only JPG images are supported.
   * *   The name can contain variables such as {AppName}, {StreamName}, {UnixTimestamp}, and {Sequence}. The name must contain at least one of the {UnixTimestamp} and {Sequence} variables.
   * 
   * @example
   * snapshot/{AppName}/{StreamName}/{UnixTimestamp}.jpg
   */
  sequenceOssObject?: string;
  /**
   * @remarks
   * The interval at which snapshots are captured. Unit: seconds. Valid values: **5 to 3600**.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  timeInterval?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      callback: 'Callback',
      domainName: 'DomainName',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      overwriteOssObject: 'OverwriteOssObject',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      sequenceOssObject: 'SequenceOssObject',
      timeInterval: 'TimeInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      callback: 'string',
      domainName: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
      overwriteOssObject: 'string',
      ownerId: 'number',
      securityToken: 'string',
      sequenceOssObject: 'string',
      timeInterval: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

