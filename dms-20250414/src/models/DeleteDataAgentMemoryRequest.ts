// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataAgentMemoryRequest extends $dara.Model {
  /**
   * @remarks
   * The current DMS unit.
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @remarks
   * The memory UUID.
   * 
   * @example
   * ed3f67***********ed
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      DMSUnit: 'DMSUnit',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DMSUnit: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

