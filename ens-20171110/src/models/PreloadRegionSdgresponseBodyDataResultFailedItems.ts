// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreloadRegionSDGResponseBodyDataResultFailedItems extends $dara.Model {
  /**
   * @remarks
   * The ID of the destination node.
   * 
   * @example
   * cn-hangzhou-xxx
   */
  destinationRegionId?: string;
  /**
   * @remarks
   * The error message that is returned.
   * 
   * @example
   * region not found
   */
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      destinationRegionId: 'DestinationRegionId',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationRegionId: 'string',
      errorMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

