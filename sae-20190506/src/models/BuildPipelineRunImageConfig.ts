// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BuildPipelineRunImageConfig extends $dara.Model {
  instanceType?: string;
  namespace?: string;
  repository?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      namespace: 'Namespace',
      repository: 'Repository',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      namespace: 'string',
      repository: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

