// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * MyApplication
   */
  applicationName?: string;
  /**
   * @remarks
   * The name of the application group.
   * 
   * This parameter is required.
   * 
   * @example
   * MyApplicationGroup
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region. Set the value to cn-hangzhou.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      name: 'string',
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

