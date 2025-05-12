// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChainResponseBodyChainConfigRoutersTo extends $dara.Model {
  /**
   * @example
   * DOCKER_IMAGE_PUSH
   */
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

