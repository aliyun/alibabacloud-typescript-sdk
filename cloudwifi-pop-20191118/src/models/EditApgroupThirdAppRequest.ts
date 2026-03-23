// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditApgroupThirdAppRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apgroupId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  appCode?: string;
  appData?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  appName?: string;
  applyToSubGroup?: number;
  category?: number;
  configType?: string;
  id?: number;
  inheritParentGroup?: number;
  thirdAppName?: string;
  static names(): { [key: string]: string } {
    return {
      apgroupId: 'ApgroupId',
      appCode: 'AppCode',
      appData: 'AppData',
      appName: 'AppName',
      applyToSubGroup: 'ApplyToSubGroup',
      category: 'Category',
      configType: 'ConfigType',
      id: 'Id',
      inheritParentGroup: 'InheritParentGroup',
      thirdAppName: 'ThirdAppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apgroupId: 'number',
      appCode: 'string',
      appData: 'string',
      appName: 'string',
      applyToSubGroup: 'number',
      category: 'number',
      configType: 'string',
      id: 'number',
      inheritParentGroup: 'number',
      thirdAppName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

