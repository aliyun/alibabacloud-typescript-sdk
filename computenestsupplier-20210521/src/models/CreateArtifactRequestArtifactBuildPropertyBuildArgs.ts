// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateArtifactRequestArtifactBuildPropertyBuildArgs extends $dara.Model {
  /**
   * @remarks
   * The name of a specific build argument.
   * 
   * @example
   * ENV
   */
  argumentName?: string;
  /**
   * @remarks
   * The value of a specific build argument.
   * 
   * @example
   * nginx:latest
   */
  argumentValue?: string;
  static names(): { [key: string]: string } {
    return {
      argumentName: 'ArgumentName',
      argumentValue: 'ArgumentValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argumentName: 'string',
      argumentValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

