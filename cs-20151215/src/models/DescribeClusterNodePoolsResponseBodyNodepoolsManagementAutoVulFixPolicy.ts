// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoVulFixPolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow node restart. This parameter takes effect only if `auto_vul_fix` is set to true. Valid values:
   * 
   * *   `true`: allows node restart.
   * *   `false`: does not allow node restart.
   * 
   * @example
   * true
   */
  restartNode?: boolean;
  /**
   * @remarks
   * The severity level of CVEs that can be automatically patched. Multiple severity levels are separated by commas (,).
   * 
   * *   `asap`: high.
   * *   `later`: medium.
   * *   `nntf`: low.
   * 
   * @example
   * asap,nntf
   */
  vulLevel?: string;
  static names(): { [key: string]: string } {
    return {
      restartNode: 'restart_node',
      vulLevel: 'vul_level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restartNode: 'boolean',
      vulLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

