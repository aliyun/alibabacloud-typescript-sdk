// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitScriptReviewRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
  from?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * b0f35dd1-0337-402e-9c4f-3a6c2426950a
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

