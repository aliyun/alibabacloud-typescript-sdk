// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteChainRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery pipeline.
   * 
   * This parameter is required.
   * 
   * @example
   * chi-02ymhtwl3cq8****
   */
  chainId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
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

