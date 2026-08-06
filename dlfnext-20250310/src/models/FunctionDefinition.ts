// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FunctionFileResource } from "./FunctionFileResource";


export class FunctionDefinition extends $dara.Model {
  /**
   * @remarks
   * Required in FileFunctionDefinition.
   */
  className?: string;
  /**
   * @remarks
   * Required in SQLFunctionDefinition and LambdaFunctionDefinition.
   */
  definition?: string;
  /**
   * @remarks
   * Required in FileFunctionDefinition.
   */
  fileResources?: FunctionFileResource[];
  /**
   * @remarks
   * Required in FileFunctionDefinition.
   */
  functionName?: string;
  /**
   * @remarks
   * Required in LambdaFunctionDefinition and FileFunctionDefinition.
   */
  language?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      className: 'className',
      definition: 'definition',
      fileResources: 'fileResources',
      functionName: 'functionName',
      language: 'language',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      className: 'string',
      definition: 'string',
      fileResources: { 'type': 'array', 'itemType': FunctionFileResource },
      functionName: 'string',
      language: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileResources)) {
      $dara.Model.validateArray(this.fileResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

