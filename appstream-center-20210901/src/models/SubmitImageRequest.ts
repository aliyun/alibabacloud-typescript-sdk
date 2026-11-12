// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitImageRequest extends $dara.Model {
  /**
   * @remarks
   * The list of destination regions to which the image is copied.
   * 
   * @example
   * List
   */
  destinationRegionList?: string[];
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * tid-be7jzm29wrrz5****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationRegionList: 'DestinationRegionList',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationRegionList: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.destinationRegionList)) {
      $dara.Model.validateArray(this.destinationRegionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

