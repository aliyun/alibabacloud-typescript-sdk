// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3238848****092996-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * false
   */
  includeDirectory?: boolean;
  /**
   * @example
   * false
   */
  includeStats?: boolean;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      includeDirectory: 'IncludeDirectory',
      includeStats: 'IncludeStats',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      includeDirectory: 'boolean',
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

