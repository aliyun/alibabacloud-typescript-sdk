// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UdfFunction extends $dara.Model {
  className?: string;
  functionName?: string;
  udfArtifactName?: string;
  static names(): { [key: string]: string } {
    return {
      className: 'className',
      functionName: 'functionName',
      udfArtifactName: 'udfArtifactName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      className: 'string',
      functionName: 'string',
      udfArtifactName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

