// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UdfClass extends $dara.Model {
  className?: string;
  classType?: string;
  functionNames?: string[];
  udfArtifactName?: string;
  static names(): { [key: string]: string } {
    return {
      className: 'className',
      classType: 'classType',
      functionNames: 'functionNames',
      udfArtifactName: 'udfArtifactName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      className: 'string',
      classType: 'string',
      functionNames: { 'type': 'array', 'itemType': 'string' },
      udfArtifactName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.functionNames)) {
      $dara.Model.validateArray(this.functionNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

