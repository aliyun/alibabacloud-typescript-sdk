// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLiveSnapshotDetectPornConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * testApp
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
   * 10
   */
  interval?: number;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * After the review is complete, you can search for specific violations in the OSS console based on the callback information. You must create the OSS bucket in advance. For more information, see [Configure content moderation](https://help.aliyun.com/document_detail/199449.html).
   * 
   * This parameter is required.
   * 
   * @example
   * livebucket
   */
  ossBucket?: string;
  /**
   * @remarks
   * The endpoint of the Object Storage Service (OSS) bucket.
   * 
   * After the review is complete, you can search for specific violations in the OSS console based on the callback information. You must configure the OSS endpoint in advance. For more information, see [Configure content moderation](https://help.aliyun.com/document_detail/199449.html).
   * 
   * This parameter is required.
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
   * record/{AppName}/{StreamName}/{Sequence}.jpg
   */
  ossObject?: string;
  ownerId?: number;
  /**
   * @remarks
   * Scene list detection.
   * 
   * @example
   * live
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

