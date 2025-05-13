// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConnectedClustersResponseBodyResultResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the remote instance that is connected to the network of the current instance.
   * 
   * @example
   * es-cn-09k1rocex0006****
   */
  instances?: string;
  /**
   * @remarks
   * The network type of the instance.
   * 
   * @example
   * vpc
   */
  networkType?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'instances',
      networkType: 'networkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: 'string',
      networkType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

