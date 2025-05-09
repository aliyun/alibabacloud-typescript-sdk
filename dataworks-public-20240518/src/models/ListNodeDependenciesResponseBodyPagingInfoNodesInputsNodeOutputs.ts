// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodeDependenciesResponseBodyPagingInfoNodesInputsNodeOutputs extends $dara.Model {
  /**
   * @remarks
   * The node output.
   * 
   * @example
   * 860438872620113XXXX
   */
  data?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

