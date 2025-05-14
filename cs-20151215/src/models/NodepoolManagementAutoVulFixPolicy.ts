// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodepoolManagementAutoVulFixPolicy extends $dara.Model {
  /**
   * @example
   * true
   */
  restartNode?: boolean;
  /**
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

