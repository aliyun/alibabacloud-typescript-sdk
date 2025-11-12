// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHyperNodeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e01-cn-zvp2tgykr08
   */
  hyperNodeId?: string;
  static names(): { [key: string]: string } {
    return {
      hyperNodeId: 'HyperNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hyperNodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

