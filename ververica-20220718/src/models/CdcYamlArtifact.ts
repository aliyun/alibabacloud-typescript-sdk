// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CdcYamlArtifact extends $dara.Model {
  additionalDependencies?: string[];
  cdcYaml?: string;
  static names(): { [key: string]: string } {
    return {
      additionalDependencies: 'additionalDependencies',
      cdcYaml: 'cdcYaml',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalDependencies: { 'type': 'array', 'itemType': 'string' },
      cdcYaml: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.additionalDependencies)) {
      $dara.Model.validateArray(this.additionalDependencies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

