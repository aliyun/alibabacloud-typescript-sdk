// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApplicationConfigResponseBodyDataInitContainersConfigConfigMapMountDesc } from "./DescribeApplicationConfigResponseBodyDataInitContainersConfigConfigMapMountDesc";


export class DescribeApplicationConfigResponseBodyDataInitContainersConfig extends $dara.Model {
  command?: string;
  commandArgs?: string;
  configMapMountDesc?: DescribeApplicationConfigResponseBodyDataInitContainersConfigConfigMapMountDesc[];
  envs?: string;
  imageUrl?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      commandArgs: 'CommandArgs',
      configMapMountDesc: 'ConfigMapMountDesc',
      envs: 'Envs',
      imageUrl: 'ImageUrl',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      commandArgs: 'string',
      configMapMountDesc: { 'type': 'array', 'itemType': DescribeApplicationConfigResponseBodyDataInitContainersConfigConfigMapMountDesc },
      envs: 'string',
      imageUrl: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configMapMountDesc)) {
      $dara.Model.validateArray(this.configMapMountDesc);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

