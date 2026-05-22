// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEdgeContainerAppVersionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  containersShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  remarks?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      containersShrink: 'Containers',
      name: 'Name',
      remarks: 'Remarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      containersShrink: 'string',
      name: 'string',
      remarks: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

