// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceTrailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region in which the instance resides. Valid value:
   * 
   * *   **cn-hangzhou**: center.
   * *   **ap-southeast-1**: Singapore.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

