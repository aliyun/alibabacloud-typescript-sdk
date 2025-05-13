// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";


export class DatasetVersion extends $dara.Model {
  dataCount?: number;
  dataSize?: number;
  /**
   * @example
   * OSS
   */
  dataSourceType?: string;
  description?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  importInfo?: string;
  labels?: Label[];
  /**
   * @example
   * RO RW
   */
  mountAccess?: string;
  options?: string;
  /**
   * @example
   * FILE
   */
  property?: string;
  sourceId?: string;
  sourceType?: string;
  /**
   * @example
   * OSS://xxx
   */
  uri?: string;
  /**
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      dataCount: 'DataCount',
      dataSize: 'DataSize',
      dataSourceType: 'DataSourceType',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      importInfo: 'ImportInfo',
      labels: 'Labels',
      mountAccess: 'MountAccess',
      options: 'Options',
      property: 'Property',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      uri: 'Uri',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCount: 'number',
      dataSize: 'number',
      dataSourceType: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      importInfo: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      mountAccess: 'string',
      options: 'string',
      property: 'string',
      sourceId: 'string',
      sourceType: 'string',
      uri: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

