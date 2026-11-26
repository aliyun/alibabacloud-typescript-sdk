// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLJobDataSourceConfig extends $dara.Model {
  /**
   * @remarks
   * The AI computing CPFS access point ID.
   * 
   * @example
   * ap-example
   */
  accessPointId?: string;
  /**
   * @remarks
   * The datasource ID. You must specify one of DataSourceId, Uri, or ModelId.
   * 
   * @example
   * d-gx8xxxxx
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The datasource version.
   * 
   * @example
   * v1
   */
  dataSourceVersion?: string;
  /**
   * @remarks
   * Specifies whether to enable data caching.
   * 
   * @example
   * false
   */
  enableCache?: boolean;
  /**
   * @remarks
   * The ModelGallery model ID to mount. The latest version of the model that you have access to is used. You must specify one of DataSourceId, Uri, or ModelId. Model mounting supports read-only access only.
   * 
   * @example
   * model-v63llpfh7u824imbni
   */
  modelId?: string;
  /**
   * @remarks
   * The mount access mode.
   * 
   * @example
   * RO
   */
  mountAccess?: string;
  /**
   * @remarks
   * The absolute mount path in the worker container. This parameter is required for RLJob datasources.
   * 
   * This parameter is required.
   * 
   * @example
   * /mnt/input
   */
  mountPath?: string;
  /**
   * @remarks
   * The extended datasource configuration.
   * 
   * @example
   * {}
   */
  options?: string;
  /**
   * @remarks
   * The ARN of the RAM role used to access the datasource.
   * 
   * @example
   * acs:ram::1872xxxxxxxxx:role/account-pai-prod
   */
  roleArn?: string;
  /**
   * @remarks
   * The JSON string of the role chain used to access the datasource.
   * 
   * @example
   * []
   */
  roleChain?: string;
  /**
   * @remarks
   * The datasource URI. You must specify one of DataSourceId, Uri, or ModelId.
   * 
   * @example
   * oss://example-bucket/data/
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      dataSourceId: 'DataSourceId',
      dataSourceVersion: 'DataSourceVersion',
      enableCache: 'EnableCache',
      modelId: 'ModelId',
      mountAccess: 'MountAccess',
      mountPath: 'MountPath',
      options: 'Options',
      roleArn: 'RoleArn',
      roleChain: 'RoleChain',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      dataSourceId: 'string',
      dataSourceVersion: 'string',
      enableCache: 'boolean',
      modelId: 'string',
      mountAccess: 'string',
      mountPath: 'string',
      options: 'string',
      roleArn: 'string',
      roleChain: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

