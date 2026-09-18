// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveGraphDraftBatchDefineShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of draft change IDs.
   * 
   * @example
   * [401001, 401002]
   */
  draftChangeIdsShrink?: string;
  /**
   * @remarks
   * The graph name.
   * 
   * This parameter is required.
   * 
   * @example
   * crm_graph
   */
  graphName?: string;
  /**
   * @remarks
   * The save mode.
   * 
   * @example
   * FULL_YAML
   */
  saveMode?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The raw YAML text of the graph schema trimmed by READ permissions, with $ref references retained within the authorized subgraph.
   * 
   * This parameter is required.
   * 
   * @example
   * name: crm_graph
   */
  yamlEdit?: string;
  static names(): { [key: string]: string } {
    return {
      draftChangeIdsShrink: 'draftChangeIds',
      graphName: 'graphName',
      saveMode: 'saveMode',
      tenantId: 'tenantId',
      yamlEdit: 'yamlEdit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      draftChangeIdsShrink: 'string',
      graphName: 'string',
      saveMode: 'string',
      tenantId: 'string',
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

