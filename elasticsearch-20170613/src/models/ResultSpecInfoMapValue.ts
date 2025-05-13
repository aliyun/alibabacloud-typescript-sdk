// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResultSpecInfoMapValue extends $dara.Model {
  cpuCount?: string;
  memorySize?: string;
  enable?: string;
  spec?: string;
  specGroupType?: string;
  disk?: string;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      cpuCount: 'cpuCount',
      memorySize: 'memorySize',
      enable: 'enable',
      spec: 'spec',
      specGroupType: 'specGroupType',
      disk: 'disk',
      diskType: 'diskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCount: 'string',
      memorySize: 'string',
      enable: 'string',
      spec: 'string',
      specGroupType: 'string',
      disk: 'string',
      diskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

