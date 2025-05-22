// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetStackPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the stack. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the stack.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  /**
   * @remarks
   * The structure that contains the stack policy body. The stack policy body must be 1 to 16,384 bytes in length.
   * 
   * You can specify one of the StackPolicyBody and StackPolicyURL parameters, but you cannot specify both of them.
   * 
   * @example
   * {"Statement":[{"Effect":"Allow","Action":"Update:*","Principal":"*","Resource":"*"}]}
   */
  stackPolicyBody?: string;
  /**
   * @remarks
   * The URL for the file that contains the stack policy. The URL must point to a template located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss://ros/template/demo and oss://ros/template/demo?RegionId=cn-hangzhou. The template can be up to 16,384 bytes in length, and the URL can be up to 1,350 bytes in length.
   * 
   * >  If the region of the OSS bucket is not specified, the RegionId value is used.
   * 
   * You can specify one of the StackPolicyBody and StackPolicyURL parameters, but you cannot specify both of them.
   * 
   * @example
   * oss://ros/stack-policy/demo
   */
  stackPolicyURL?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackId: 'StackId',
      stackPolicyBody: 'StackPolicyBody',
      stackPolicyURL: 'StackPolicyURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackId: 'string',
      stackPolicyBody: 'string',
      stackPolicyURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

