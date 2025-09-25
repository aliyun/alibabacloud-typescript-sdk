// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySqlTemplatePositionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * amv-uf6wjk5xxxxxxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  targetTemplateGroupId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 210208
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      targetTemplateGroupId: 'TargetTemplateGroupId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      targetTemplateGroupId: 'number',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

