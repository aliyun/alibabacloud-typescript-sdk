// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to forcibly delete the application. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * False
   */
  force?: boolean;
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * MyApplication
   */
  name?: string;
  /**
   * @remarks
   * The region ID. Set the value to cn-hangzhou.
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
      force: 'Force',
      name: 'Name',
      regionId: 'RegionId',
      retainResource: 'RetainResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
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

