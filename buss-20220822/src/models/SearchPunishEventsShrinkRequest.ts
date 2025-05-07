// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchPunishEventsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aliUid?: string;
  bussinessCodesShrink?: string;
  caseCodesShrink?: string;
  eventCodesShrink?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bussinessCodesShrink: 'BussinessCodes',
      caseCodesShrink: 'CaseCodes',
      eventCodesShrink: 'EventCodes',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      bussinessCodesShrink: 'string',
      caseCodesShrink: 'string',
      eventCodesShrink: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

