// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FunctionFileResource } from "./FunctionFileResource";


export class FunctionDefinition extends $dara.Model {
  /**
   * @remarks
   * required in FileFunctionDefinition
   * 
   * @example
   * com.aliyun.pai.flinkjob.udf.CtrKV
   */
  className?: string;
  /**
   * @remarks
   * required in SQLFunctionDefinition/LambdaFunctionDefinition
   * 
   * @example
   * {}
   */
  definition?: string;
  /**
   * @remarks
   * required in FileFunctionDefinition
   */
  fileResources?: FunctionFileResource[];
  /**
   * @remarks
   * required in FileFunctionDefinition
   * 
   * @example
   * function_name
   */
  functionName?: string;
  /**
   * @remarks
   * required in LambdaFunctionDefinition/FileFunctionDefinition
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * PAIMON
   */
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

