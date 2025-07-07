// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLivyComputeTokenResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Token ID。
   * 
   * @example
   * lctk-xxxxxxxx
   */
  tokenId?: string;
  static names(): { [key: string]: string } {
    return {
      tokenId: 'tokenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tokenId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

