// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevertGraphDraftResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The draft change ID (the draftChangeId returned by listGraphDraftResources).
   * 
   * This parameter is required.
   * 
   * @example
   * 401001
   */
  draftChangeId?: number;
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
   * The tenant ID. This is a common parameter. Pass it explicitly by using --tenant-id in winnexo-cli.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      draftChangeId: 'draftChangeId',
      graphName: 'graphName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      draftChangeId: 'number',
      graphName: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

