// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchPunishEventsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aliUid?: string;
  bussinessCodes?: string[];
  caseCodes?: string[];
  eventCodes?: string[];
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bussinessCodes: 'BussinessCodes',
      caseCodes: 'CaseCodes',
      eventCodes: 'EventCodes',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      bussinessCodes: { 'type': 'array', 'itemType': 'string' },
      caseCodes: { 'type': 'array', 'itemType': 'string' },
      eventCodes: { 'type': 'array', 'itemType': 'string' },
      resourceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bussinessCodes)) {
      $dara.Model.validateArray(this.bussinessCodes);
    }
    if(Array.isArray(this.caseCodes)) {
      $dara.Model.validateArray(this.caseCodes);
    }
    if(Array.isArray(this.eventCodes)) {
      $dara.Model.validateArray(this.eventCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

