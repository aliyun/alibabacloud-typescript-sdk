// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddConnectorRequestFileConnectorConfig extends $dara.Model {
  /**
   * @example
   * zyb-docker-registry-jn
   */
  bucketName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
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
   * This parameter is required.
   * 
   * @example
   * test-connector
   */
  connectorName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FILE
   */
  connectorType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
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

