// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvocationsRequest extends $dara.Model {
  /**
   * @remarks
   * The encoding mode of the `CommandContent` and `Output` fields in the response. Valid values:
   * 
   * - PlainText: Returns the original command content and output.
   * 
   * - Base64 (default): Returns the Base64-encoded command content and output.
   * 
   * @example
   * PlainText
   */
  contentEncoding?: string;
  /**
   * @remarks
   * Specifies whether to include the command output in the response.
   * 
   * - true: Returns the output. You must specify the `InvokeId` or `NodeId` parameter.
   * 
   * - false (default): Does not return the output.
   * 
   * @example
   * true
   */
  includeOutput?: boolean;
  /**
   * @remarks
   * The ID of the command execution.
   * 
   * This parameter is required.
   * 
   * @example
   * t-cd03crwys0lrls0
   */
  invokeId?: string;
  /**
   * @remarks
   * The ID of the instance.
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

