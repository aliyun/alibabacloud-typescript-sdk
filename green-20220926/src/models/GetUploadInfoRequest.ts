// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The upload name.
   * 
   * @example
   * 测试
   */
  name?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * image
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

