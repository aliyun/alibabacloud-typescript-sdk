// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartPredictiveCallRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1312353****
   */
  callee?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0109810****
   */
  caller?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9774c36c-12fe-4e37-adce-89bc77ce****
   */
  contactFlowId?: string;
  contactFlowVariables?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * 1312353****
   */
  maskedCallee?: string;
  /**
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  tags?: string;
  /**
   * @example
   * 10
   */
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      callee: 'Callee',
      caller: 'Caller',
      contactFlowId: 'ContactFlowId',
      contactFlowVariables: 'ContactFlowVariables',
      instanceId: 'InstanceId',
      maskedCallee: 'MaskedCallee',
      skillGroupId: 'SkillGroupId',
      tags: 'Tags',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callee: 'string',
      caller: 'string',
      contactFlowId: 'string',
      contactFlowVariables: 'string',
      instanceId: 'string',
      maskedCallee: 'string',
      skillGroupId: 'string',
      tags: 'string',
      timeoutSeconds: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

