// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitScriptReviewRequest extends $dara.Model {
  /**
   * @remarks
   * Description
   * 
   * This parameter is required.
   * 
   * @example
   * 第一版本提交审核
   */
  description?: string;
  /**
   * @remarks
   * Source of review submission
   * 
   * @example
   * MAINSITE
   */
  from?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @remarks
   * Script ID
   * 
   * This parameter is required.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      from: 'From',
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      from: 'string',
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

