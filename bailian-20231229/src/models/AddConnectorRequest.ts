// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddConnectorRequestFileConnectorConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the bucket.
   * 
   * @example
   * zyb-docker-registry-jn
   */
  bucketName?: string;
  /**
   * @remarks
   * The region of the bucket.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The file storage location. Valid values:<br>`OSS_CUSTOM`: Use your own Object Storage Service (OSS) bucket.<br>`OSS_PLATFORM`: Use the platform-provided OSS bucket.<br><br>
   * 
   * @example
   * OSS_CUSTOM
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      regionId: 'RegionId',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      regionId: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddConnectorRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the connector.
   * 
   * This parameter is required.
   * 
   * @example
   * test-connector
   */
  connectorName?: string;
  /**
   * @remarks
   * The type of the connector.
   * 
   * This parameter is required.
   * 
   * @example
   * FILE
   */
  connectorType?: string;
  /**
   * @remarks
   * The description for the connector.
   * 
   * This parameter is required.
   * 
   * @example
   * 文件连接器
   */
  description?: string;
  /**
   * @remarks
   * The parameters for the file connector.
   */
  fileConnectorConfig?: AddConnectorRequestFileConnectorConfig;
  static names(): { [key: string]: string } {
    return {
      connectorName: 'ConnectorName',
      connectorType: 'ConnectorType',
      description: 'Description',
      fileConnectorConfig: 'FileConnectorConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorName: 'string',
      connectorType: 'string',
      description: 'string',
      fileConnectorConfig: AddConnectorRequestFileConnectorConfig,
    };
  }

  validate() {
    if(this.fileConnectorConfig && typeof (this.fileConnectorConfig as any).validate === 'function') {
      (this.fileConnectorConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

