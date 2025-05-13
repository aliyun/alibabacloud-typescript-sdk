// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";
import { DatasetVersion } from "./DatasetVersion";


export class Dataset extends $dara.Model {
  /**
   * @example
   * PRIVATE PUBLIC
   */
  accessibility?: string;
  /**
   * @example
   * OSS URL
   */
  dataSourceType?: string;
  /**
   * @example
   * COMMON PIC TEXT VIDEO AUDIO
   */
  dataType?: string;
  /**
   * @example
   * d-c0h44g3wlwkj8o4348
   */
  datasetId?: string;
  /**
   * @example
   * Animal images.
   */
  description?: string;
  /**
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtModifiedTime?: string;
  importInfo?: string;
  labels?: Label[];
  latestVersion?: DatasetVersion;
  /**
   * @example
   * RO RW
   */
  mountAccess?: string;
  mountAccessReadWriteRoleIdList?: string[];
  /**
   * @example
   * AnimalDataset
   */
  name?: string;
  /**
   * @example
   * jsonstring
   */
  options?: string;
  /**
   * @example
   * 1004110000006048
   */
  ownerId?: string;
  /**
   * @example
   * FILE DIRECTORY TABULAR
   */
  property?: string;
  /**
   * @example
   * Ecs
   */
  providerType?: string;
  /**
   * @example
   * d-bvfasdf4wxxj8o411
   */
  sourceDatasetId?: string;
  /**
   * @example
   * v2
   */
  sourceDatasetVersion?: string;
  /**
   * @example
   * Source Id
   */
  sourceId?: string;
  /**
   * @example
   * USER ITAG  PAI_PUBLIC_DATASET
   */
  sourceType?: string;
  /**
   * @example
   * text-classification
   */
  tagTemplateType?: string;
  /**
   * @example
   * oss://xxx
   */
  uri?: string;
  /**
   * @example
   * 2004110000006048
   */
  userId?: string;
  /**
   * @example
   * Workspace Id
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      dataSourceType: 'DataSourceType',
      dataType: 'DataType',
      datasetId: 'DatasetId',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      importInfo: 'ImportInfo',
      labels: 'Labels',
      latestVersion: 'LatestVersion',
      mountAccess: 'MountAccess',
      mountAccessReadWriteRoleIdList: 'MountAccessReadWriteRoleIdList',
      name: 'Name',
      options: 'Options',
      ownerId: 'OwnerId',
      property: 'Property',
      providerType: 'ProviderType',
      sourceDatasetId: 'SourceDatasetId',
      sourceDatasetVersion: 'SourceDatasetVersion',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      tagTemplateType: 'TagTemplateType',
      uri: 'Uri',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      dataSourceType: 'string',
      dataType: 'string',
      datasetId: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      importInfo: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      latestVersion: DatasetVersion,
      mountAccess: 'string',
      mountAccessReadWriteRoleIdList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      options: 'string',
      ownerId: 'string',
      property: 'string',
      providerType: 'string',
      sourceDatasetId: 'string',
      sourceDatasetVersion: 'string',
      sourceId: 'string',
      sourceType: 'string',
      tagTemplateType: 'string',
      uri: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.latestVersion && typeof (this.latestVersion as any).validate === 'function') {
      (this.latestVersion as any).validate();
    }
    if(Array.isArray(this.mountAccessReadWriteRoleIdList)) {
      $dara.Model.validateArray(this.mountAccessReadWriteRoleIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

