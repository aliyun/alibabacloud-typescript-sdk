// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteOnlineTestRequest extends $dara.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * image
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

