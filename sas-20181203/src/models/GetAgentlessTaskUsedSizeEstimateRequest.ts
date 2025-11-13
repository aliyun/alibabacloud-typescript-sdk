// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentlessTaskUsedSizeEstimateRequest extends $dara.Model {
  /**
   * @remarks
   * Asset selection identifier.
   * 
   * This parameter is required.
   * 
   * @example
   * AGENTLESS_SCAN_ONCE_TASK_1720145******
   */
  assetSelectionType?: string;
  static names(): { [key: string]: string } {
    return {
      assetSelectionType: 'AssetSelectionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetSelectionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

