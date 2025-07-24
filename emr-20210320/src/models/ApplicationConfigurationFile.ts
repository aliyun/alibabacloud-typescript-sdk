// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplicationConfigurationFile extends $dara.Model {
  applicationName?: string;
  clusterId?: string;
  configFileFormat?: string;
  configFileGroup?: string;
  configFileLink?: string;
  configFileMode?: string;
  configFileName?: string;
  configFileOwner?: string;
  configFilePath?: string;
  description?: string;
  nodeGroupId?: string;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      clusterId: 'ClusterId',
      configFileFormat: 'ConfigFileFormat',
      configFileGroup: 'ConfigFileGroup',
      configFileLink: 'ConfigFileLink',
      configFileMode: 'ConfigFileMode',
      configFileName: 'ConfigFileName',
      configFileOwner: 'ConfigFileOwner',
      configFilePath: 'ConfigFilePath',
      description: 'Description',
      nodeGroupId: 'NodeGroupId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      clusterId: 'string',
      configFileFormat: 'string',
      configFileGroup: 'string',
      configFileLink: 'string',
      configFileMode: 'string',
      configFileName: 'string',
      configFileOwner: 'string',
      configFilePath: 'string',
      description: 'string',
      nodeGroupId: 'string',
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

