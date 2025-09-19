// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHoneypotNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the management node.
   * 
   * > You can call the [ListHoneypotNode](~~ListHoneypotNode~~) operation to query the IDs of management nodes.
   * 
   * This parameter is required.
   * 
   * @example
   * d3dd3864-4e02-4abd-8b6a-8f5f6fec4715
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
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

