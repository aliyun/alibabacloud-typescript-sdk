// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGraphDraftAssembledResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The knowledge graph name.
   * 
   * @example
   * crm_graph
   */
  graphName?: string;
  /**
   * @remarks
   * The prompt message.
   * 
   * @example
   * The current zone list is illegal.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The version.
   * 
   * @example
   * 1.2.0
   */
  schemaVersion?: string;
  /**
   * @remarks
   * The raw Graph Schema YAML text trimmed by READ permissions, with $ref references within the authorized subgraph retained.
   * 
   * This parameter is required.
   * 
   * @example
   * objects:\\n  - name: customer\\n
   */
  yamlEdit?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      graphName: 'graphName',
      message: 'message',
      requestId: 'requestId',
      schemaVersion: 'schemaVersion',
      yamlEdit: 'yamlEdit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      graphName: 'string',
      message: 'string',
      requestId: 'string',
      schemaVersion: 'string',
      yamlEdit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

