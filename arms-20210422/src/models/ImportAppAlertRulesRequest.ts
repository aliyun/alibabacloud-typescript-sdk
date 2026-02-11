// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportAppAlertRulesRequest extends $dara.Model {
  contactGroupIds?: string;
  isAutoStart?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  pids?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  templageAlertConfig?: string;
  templateAlertId?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupIds: 'ContactGroupIds',
      isAutoStart: 'IsAutoStart',
      pids: 'Pids',
      regionId: 'RegionId',
      templageAlertConfig: 'TemplageAlertConfig',
      templateAlertId: 'TemplateAlertId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupIds: 'string',
      isAutoStart: 'boolean',
      pids: 'string',
      regionId: 'string',
      templageAlertConfig: 'string',
      templateAlertId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

