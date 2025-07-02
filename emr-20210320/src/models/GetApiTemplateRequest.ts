// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApiTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Cluster template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * at-41b4c6a0fc63****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

