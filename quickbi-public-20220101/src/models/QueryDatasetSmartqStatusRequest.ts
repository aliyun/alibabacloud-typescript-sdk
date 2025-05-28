// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDatasetSmartqStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Dataset ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

