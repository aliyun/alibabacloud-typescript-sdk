// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplicationConfigFile } from "./ApplicationConfigFile";


export class ExportApplicationConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * 导出应用配置。
   */
  applicationConfigFiles?: ApplicationConfigFile[];
  /**
   * @remarks
   * 集群ID。
   * 
   * This parameter is required.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  configScope?: string;
  /**
   * @example
   * MODIFICATION
   */
  exportMode?: string;
  /**
   * @remarks
   * 导出应用配置的文件格式。
   * 
   * @example
   * XML
   */
  fileFormat?: string;
  nodeGroupIds?: string[];
  nodeIds?: string[];
  /**
   * @remarks
   * 区域ID。
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationConfigFiles: 'ApplicationConfigFiles',
      clusterId: 'ClusterId',
      configScope: 'ConfigScope',
      exportMode: 'ExportMode',
      fileFormat: 'FileFormat',
      nodeGroupIds: 'NodeGroupIds',
      nodeIds: 'NodeIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationConfigFiles: { 'type': 'array', 'itemType': ApplicationConfigFile },
      clusterId: 'string',
      configScope: 'string',
      exportMode: 'string',
      fileFormat: 'string',
      nodeGroupIds: { 'type': 'array', 'itemType': 'string' },
      nodeIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationConfigFiles)) {
      $dara.Model.validateArray(this.applicationConfigFiles);
    }
    if(Array.isArray(this.nodeGroupIds)) {
      $dara.Model.validateArray(this.nodeGroupIds);
    }
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

