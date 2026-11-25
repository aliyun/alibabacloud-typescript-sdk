// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMultiModalTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The AgentSpace name. It must be 3 to 63 characters in length and can contain only lowercase letters, digits, and hyphens. It must start and end with a letter or a digit.
   * 
   * This parameter is required.
   * 
   * @example
   * example-space
   */
  agentSpace?: string;
  /**
   * @remarks
   * The input parameters for the evaluator. The keys are defined by the evaluator specified by evaluatorRef. Example for national subsidy image inspection: {"imageUrl":"https://example.com/label.jpg"}.
   * 
   * This parameter is required.
   * 
   * @example
   * {"imageUrl":"https://example-bucket.oss-cn-hangzhou.aliyuncs.com/label.jpg"}
   */
  args?: { [key: string]: any };
  /**
   * @remarks
   * The ARN of the role used to access OSS or SLS, such as acs:ram::<accountId>:role/<roleName>. It is used to derive the signature region.
   * 
   * @example
   * acs:ram::1234567890123456:role/media-reader
   */
  arn?: string;
  /**
   * @remarks
   * The name of the evaluator registered as a public API. If the evaluator is not registered, not exposed as a public API, or the current version is invalid, a 400 error is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * Builtin.subsidy_api
   */
  evaluatorRef?: string;
  /**
   * @remarks
   * The signature region when the media is stored in OSS or SLS, such as cn-hangzhou. This parameter is used only when the region cannot be determined from the URL itself.
   * 
   * @example
   * cn-hangzhou
   */
  ossRegion?: string;
  /**
   * @remarks
   * The evaluation prompt. If omitted, it is processed as an empty string. The maximum length is 2,000 characters, counted by Unicode code points.
   * 
   * @example
   * Verify whether the image is complete
   */
  prompt?: string;
  /**
   * @remarks
   * The task name, used to group multiple calls of the same business line in the console. If omitted or empty, agentloop-media-process is used. The maximum length is 128 characters. Control characters are not allowed.
   * 
   * @example
   * agentloop-media-process
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
      args: 'args',
      arn: 'arn',
      evaluatorRef: 'evaluatorRef',
      ossRegion: 'ossRegion',
      prompt: 'prompt',
      taskName: 'taskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      args: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      arn: 'string',
      evaluatorRef: 'string',
      ossRegion: 'string',
      prompt: 'string',
      taskName: 'string',
    };
  }

  validate() {
    if(this.args) {
      $dara.Model.validateMap(this.args);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

