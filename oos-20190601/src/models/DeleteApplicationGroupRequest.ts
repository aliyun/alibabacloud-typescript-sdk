// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteApplicationGroupRequest extends $dara.Model {
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
  /**
   * @remarks
   * Specifies whether to retain resources created by application manager when deleting the application. Valid values:
   * - true
   * - false
   * 
   * @example
   * false
   */
  retainResource?: boolean;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      name: 'Name',
      regionId: 'RegionId',
      retainResource: 'RetainResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      name: 'string',
      regionId: 'string',
      retainResource: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

