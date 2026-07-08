// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Space ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 337639*****224964-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * Specifies whether to return the statistics of devices in the group. The default value is false.
   * 
   * @example
   * false
   */
  includeStats?: boolean;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      includeStats: 'IncludeStats',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      includeStats: 'boolean',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

