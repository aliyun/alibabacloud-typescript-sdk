// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteServiceTrailRequest extends $dara.Model {
  /**
   * @remarks
   * The region in which your Security Center service is deployed. Valid values:
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

