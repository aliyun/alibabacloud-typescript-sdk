// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterUdfFunctionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the class that corresponds to the UDF.
   * 
   * This parameter is required.
   * 
   * @example
   * orderRank
   */
  className?: string;
  /**
   * @remarks
   * The name of the UDF. In most cases, the name of the UDF is the same as the class name. You can specify a name for the UDF.
   * 
   * This parameter is required.
   * 
   * @example
   * orderRank
   */
  functionName?: string;
  /**
   * @remarks
   * The name of the JAR or Python file that corresponds to the UDF.
   * 
   * This parameter is required.
   * 
   * @example
   * test-udf
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

