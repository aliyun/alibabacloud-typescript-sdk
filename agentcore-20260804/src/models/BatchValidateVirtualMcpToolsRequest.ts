// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchValidateVirtualMcpToolsRequestBody extends $dara.Model {
  /**
   * @remarks
   * The saved virtual MCP IDs in the current workspace. You can specify 1 to 20 unique IDs. The server validates the IDs based on the saved tool selections, revision numbers, and digest baselines. A single batch can involve up to 10 different source MCPs, and up to 10 sources can be checked concurrently in each round.
   * 
   * This parameter is required.
   */
  mcpIds?: string[];
  static names(): { [key: string]: string } {
    return {
      mcpIds: 'mcpIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mcpIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.mcpIds)) {
      $dara.Model.validateArray(this.mcpIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchValidateVirtualMcpToolsRequest extends $dara.Model {
  /**
   * @remarks
   * The batch validation request.
   * 
   * This parameter is required.
   */
  body?: BatchValidateVirtualMcpToolsRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: BatchValidateVirtualMcpToolsRequestBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

