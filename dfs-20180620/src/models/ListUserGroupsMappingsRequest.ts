// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserGroupsMappingsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 55C5FFD6-BF99-41BD-9C66-FFF39189****
   */
  filesystemId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  inputRegionId?: string;
  /**
   * @example
   * 10
   */
  limit?: number;
  /**
   * @example
   * user1
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      filesystemId: 'FilesystemId',
      inputRegionId: 'InputRegionId',
      limit: 'Limit',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filesystemId: 'string',
      inputRegionId: 'string',
      limit: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

