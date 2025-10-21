// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUdfArtifactsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the JAR or Python file that corresponds to the UDF.
   * 
   * @example
   * test-udf
   */
  udfArtifactName?: string;
  static names(): { [key: string]: string } {
    return {
      udfArtifactName: 'udfArtifactName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

