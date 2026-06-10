// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalQuestionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the global question.
   * 
   * This parameter is required.
   * 
   * @example
   * e851e242-ad67-4507-96a2-d4114564dcec
   */
  globalQuestionId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 7cefbff0-8d50-4d6f-b93c-73cee23c1555
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the script.
   * 
   * This parameter is required.
   * 
   * @example
   * b7ee988b-2837-4bc1-9d56-f76e7c831f60
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      globalQuestionId: 'GlobalQuestionId',
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalQuestionId: 'string',
      instanceId: 'string',
      scriptId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

