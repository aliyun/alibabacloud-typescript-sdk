// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  id?: string;
  /**
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

