// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAclGroupsRequest extends $dara.Model {
  /**
   * @example
   * c-123xxx
   */
  instanceId?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

