// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportCustomAlertRulesRequest extends $dara.Model {
  contactGroupIds?: string;
  isAutoStart?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  templageAlertConfig?: string;
  templateAlertConfig?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupIds: 'ContactGroupIds',
      isAutoStart: 'IsAutoStart',
      regionId: 'RegionId',
      templageAlertConfig: 'TemplageAlertConfig',
      templateAlertConfig: 'TemplateAlertConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupIds: 'string',
      isAutoStart: 'boolean',
      regionId: 'string',
      templageAlertConfig: 'string',
      templateAlertConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

