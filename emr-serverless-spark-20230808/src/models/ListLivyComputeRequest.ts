// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLivyComputeRequest extends $dara.Model {
  /**
   * @example
   * ev-cq31c7tlhtgm9nrrlj4g
   */
  environmentId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      environmentId: 'environmentId',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

