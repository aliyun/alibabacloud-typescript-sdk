// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SqlArtifact extends $dara.Model {
  additionalDependencies?: string[];
  sqlScript?: string;
  static names(): { [key: string]: string } {
    return {
      additionalDependencies: 'additionalDependencies',
      sqlScript: 'sqlScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalDependencies: { 'type': 'array', 'itemType': 'string' },
      sqlScript: 'string',
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

