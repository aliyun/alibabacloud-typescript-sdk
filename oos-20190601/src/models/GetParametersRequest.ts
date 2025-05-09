// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetParametersRequest extends $dara.Model {
  /**
   * @remarks
   * The names of the common parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * ["parameter1","parameter2"]
   */
  names?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      names: 'Names',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      names: 'string',
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

