// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrepareUpgradeRequest extends $dara.Model {
  /**
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @example
   * r5.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dryRun: 'dryRun',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dryRun: 'boolean',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

