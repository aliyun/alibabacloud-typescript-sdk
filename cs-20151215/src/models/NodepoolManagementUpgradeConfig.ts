// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodepoolManagementUpgradeConfig extends $dara.Model {
  /**
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @example
   * 1
   */
  maxUnavailable?: number;
  /**
   * @example
   * 5
   */
  surge?: number;
  /**
   * @example
   * 50
   */
  surgePercentage?: number;
  static names(): { [key: string]: string } {
    return {
      autoUpgrade: 'auto_upgrade',
      maxUnavailable: 'max_unavailable',
      surge: 'surge',
      surgePercentage: 'surge_percentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpgrade: 'boolean',
      maxUnavailable: 'number',
      surge: 'number',
      surgePercentage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

