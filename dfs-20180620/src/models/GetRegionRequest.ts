// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRegionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  inputRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      inputRegionId: 'InputRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

