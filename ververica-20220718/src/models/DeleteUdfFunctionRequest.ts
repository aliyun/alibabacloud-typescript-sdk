// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUdfFunctionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the class that corresponds to the UDF.
   * 
   * This parameter is required.
   * 
   * @example
   * Category
   */
  className?: string;
  /**
   * @remarks
   * The name of the resource that corresponds to the UDF that you want to delete.
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
      udfArtifactName: 'udfArtifactName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      className: 'string',
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

