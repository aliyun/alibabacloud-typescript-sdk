// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChainRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chi-0ops0gsmw5x2****
   */
  chainId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cri-4cdrlqmhn4gm****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      chainId: 'ChainId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

