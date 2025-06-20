// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvocationsRequest extends $dara.Model {
  /**
   * @remarks
   * The encoding mode of the `CommandContent` and `Output` response parameters. Valid values:
   * 
   * *   PlainText: returns the original command content and command outputs.
   * *   Base64 (default): returns the Base64-encoded command content and command output.
   * 
   * @example
   * PlainText
   */
  contentEncoding?: string;
  /**
   * @remarks
   * Specifies whether to return the command outputs in the response.
   * 
   * *   true: returns the command outputs. When this parameter is set to true, you must specify `InvokeId`, `InstanceId`, or both.
   * *   false (default)
   * 
   * @example
   * true
   */
  includeOutput?: boolean;
  /**
   * @remarks
   * The execution ID.
   * 
   * This parameter is required.
   * 
   * @example
   * t-cd03crwys0lrls0
   */
  invokeId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * e01-cn-zvp2tgykr08
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      contentEncoding: 'ContentEncoding',
      includeOutput: 'IncludeOutput',
      invokeId: 'InvokeId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentEncoding: 'string',
      includeOutput: 'boolean',
      invokeId: 'string',
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

