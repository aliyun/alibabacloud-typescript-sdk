// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartPredictiveCallRequest extends $dara.Model {
  /**
   * @remarks
   * The callee number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1312353****
   */
  callee?: string;
  /**
   * @remarks
   * The caller number, which must be an active outbound number under the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 0109810****
   */
  caller?: string;
  /**
   * @remarks
   * The IVR contact flow ID. After the callee answers, the call is automatically transferred into this IVR flow.
   * 
   * This parameter is required.
   * 
   * @example
   * 9774c36c-12fe-4e37-adce-89bc77ce****
   */
  contactFlowId?: string;
  /**
   * @remarks
   * The contact flow variables passed in as a JSON-formatted string of an array. Each array element is a key-value pair, where the key is the variable name and the value is the variable value. To use these variables in the IVR flow, create a Custom Parameter with the same name in the start node of the IVR associated with the specified contact flow ID.
   * 
   * @example
   * {"name":"王先生","time":"19点20分","address":"某某中心"}
   */
  contactFlowVariables?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The desensitized callee number. If this field is not empty, it indicates that the callee number must be desensitized. The Desensitization Rule is defined by the Customer. Simply enter the desensitized callee number here. Using a desensitized callee number means that in certain scenarios, only the desensitized number is visible, and the real callee number cannot be viewed.
   * 
   * @example
   * 1312353****
   */
  maskedCallee?: string;
  /**
   * @remarks
   * The skill group ID. This parameter is optional. If specified, the outbound number is selected only from the numbers associated with the specified skill group.
   * 
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @remarks
   * The ingest endpoint data, primarily used for extension purposes. Regular users do not need to concern themselves with this.
   * 
   * @example
   * 无
   */
  tags?: string;
  /**
   * @remarks
   * The timeout period, in seconds. If the call is not answered within the specified time, it is automatically disconnected.
   * 
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

