// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplicationConfigFile } from "./ApplicationConfigFile";


export class ExportApplicationConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of application configurations to export.
   */
  applicationConfigFiles?: ApplicationConfigFile[];
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  configScope?: string;
  /**
   * @remarks
   * The mode for exporting service configurations. Valid values:
   * 
   * - MODIFICATION
   * 
   * - ALL
   * 
   * @example
   * MODIFICATION
   */
  exportMode?: string;
  /**
   * @remarks
   * The file format of the exported application configurations. Valid values:
   * 
   * - JSON
   * 
   * - XML
   * 
   * @example
   * XML
   */
  fileFormat?: string;
  nodeGroupIds?: string[];
  nodeIds?: string[];
  /**
   * @remarks
   * The region ID.
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

