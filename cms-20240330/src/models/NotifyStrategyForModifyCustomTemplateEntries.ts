// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NotifyStrategyForModifyCustomTemplateEntries extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  targetType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  templateUuid?: string;
  static names(): { [key: string]: string } {
    return {
      targetType: 'targetType',
      templateUuid: 'templateUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetType: 'string',
      templateUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

