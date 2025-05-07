// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApplicationConfigResponseBodyDataSidecarContainersConfigConfigMapMountDesc } from "./DescribeApplicationConfigResponseBodyDataSidecarContainersConfigConfigMapMountDesc";
import { DescribeApplicationConfigResponseBodyDataSidecarContainersConfigEmptyDirDesc } from "./DescribeApplicationConfigResponseBodyDataSidecarContainersConfigEmptyDirDesc";


export class DescribeApplicationConfigResponseBodyDataSidecarContainersConfig extends $dara.Model {
  acrInstanceId?: string;
  command?: string;
  commandArgs?: string;
  configMapMountDesc?: DescribeApplicationConfigResponseBodyDataSidecarContainersConfigConfigMapMountDesc[];
  cpu?: number;
  emptyDirDesc?: DescribeApplicationConfigResponseBodyDataSidecarContainersConfigEmptyDirDesc[];
  envs?: string;
  imageUrl?: string;
  memory?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      acrInstanceId: 'AcrInstanceId',
      command: 'Command',
      commandArgs: 'CommandArgs',
      configMapMountDesc: 'ConfigMapMountDesc',
      cpu: 'Cpu',
      emptyDirDesc: 'EmptyDirDesc',
      envs: 'Envs',
      imageUrl: 'ImageUrl',
      memory: 'Memory',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrInstanceId: 'string',
      command: 'string',
      commandArgs: 'string',
      configMapMountDesc: { 'type': 'array', 'itemType': DescribeApplicationConfigResponseBodyDataSidecarContainersConfigConfigMapMountDesc },
      cpu: 'number',
      emptyDirDesc: { 'type': 'array', 'itemType': DescribeApplicationConfigResponseBodyDataSidecarContainersConfigEmptyDirDesc },
      envs: 'string',
      imageUrl: 'string',
      memory: 'number',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configMapMountDesc)) {
      $dara.Model.validateArray(this.configMapMountDesc);
    }
    if(Array.isArray(this.emptyDirDesc)) {
      $dara.Model.validateArray(this.emptyDirDesc);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

