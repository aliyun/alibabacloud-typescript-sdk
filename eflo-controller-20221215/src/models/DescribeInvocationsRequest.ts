// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvocationsRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the encoding method for the `CommandContent` and `Output` fields in the returned data. Possible values:
   * 
   * - PlainText: Returns the original command content and output information.
   * - Base64: Returns the Base64-encoded command content and output information.
   * 
   * Default value: Base64.
   * 
   * @example
   * PlainText
   */
  contentEncoding?: string;
  /**
   * @remarks
   * Indicates whether to return the output information of the command execution in the result.
   * 
   * - true: Return. In this case, you must specify at least the `InvokeId` or `InstanceId` parameter.
   * - false: Do not return.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  includeOutput?: boolean;
  /**
   * @remarks
   * Command execution ID
   * 
   * This parameter is required.
   * 
   * @example
   * t-cd03crwys0lrls0
   */
  invokeId?: string;
  /**
   * @remarks
   * Instance ID
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

