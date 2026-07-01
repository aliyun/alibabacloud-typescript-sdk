// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UdfFunction extends $dara.Model {
  /**
   * @remarks
   * The class name.
   * 
   * @example
   * myFunctionTest
   */
  className?: string;
  /**
   * @remarks
   * The function name.
   * 
   * @example
   * myFunction
   */
  functionName?: string;
  /**
   * @remarks
   * The UDF artifact name.
   * 
   * @example
   * udfCollection.jar
   */
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

