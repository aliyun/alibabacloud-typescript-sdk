// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceResponseBodyDataResourceNodes extends $dara.Model {
  /**
   * @remarks
   * Node name
   * 
   * @example
   * lingj19q90jp66nq-mg2pa0p2l2bipnsi-17
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

