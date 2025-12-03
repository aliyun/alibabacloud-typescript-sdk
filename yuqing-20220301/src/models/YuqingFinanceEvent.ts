// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class YuqingFinanceEvent extends $dara.Model {
  comprehensiveRisk?: number;
  entityArea?: string;
  entityCrn?: string;
  entityEmotionScore?: number;
  entityId?: number;
  entityName?: string;
  entityRelevanceScore?: number;
  entityShowName?: string;
  entitySummary?: string;
  entityType?: string;
  eventId?: string;
  eventLevel3Code?: number;
  eventLevel3Name?: string;
  eventTags?: string;
  eventTime?: number;
  securityAbbreviation?: string;
  securityCategoryCodes?: string[];
  securityCodes?: string[];
  securityMarketsCodes?: string[];
  spamScore?: number;
  userSubscribeEntityTags?: string[];
  userSubscribeEventTags?: number[];
  static names(): { [key: string]: string } {
    return {
      comprehensiveRisk: 'comprehensiveRisk',
      entityArea: 'entityArea',
      entityCrn: 'entityCrn',
      entityEmotionScore: 'entityEmotionScore',
      entityId: 'entityId',
      entityName: 'entityName',
      entityRelevanceScore: 'entityRelevanceScore',
      entityShowName: 'entityShowName',
      entitySummary: 'entitySummary',
      entityType: 'entityType',
      eventId: 'eventId',
      eventLevel3Code: 'eventLevel3Code',
      eventLevel3Name: 'eventLevel3Name',
      eventTags: 'eventTags',
      eventTime: 'eventTime',
      securityAbbreviation: 'securityAbbreviation',
      securityCategoryCodes: 'securityCategoryCodes',
      securityCodes: 'securityCodes',
      securityMarketsCodes: 'securityMarketsCodes',
      spamScore: 'spamScore',
      userSubscribeEntityTags: 'userSubscribeEntityTags',
      userSubscribeEventTags: 'userSubscribeEventTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comprehensiveRisk: 'number',
      entityArea: 'string',
      entityCrn: 'string',
      entityEmotionScore: 'number',
      entityId: 'number',
      entityName: 'string',
      entityRelevanceScore: 'number',
      entityShowName: 'string',
      entitySummary: 'string',
      entityType: 'string',
      eventId: 'string',
      eventLevel3Code: 'number',
      eventLevel3Name: 'string',
      eventTags: 'string',
      eventTime: 'number',
      securityAbbreviation: 'string',
      securityCategoryCodes: { 'type': 'array', 'itemType': 'string' },
      securityCodes: { 'type': 'array', 'itemType': 'string' },
      securityMarketsCodes: { 'type': 'array', 'itemType': 'string' },
      spamScore: 'number',
      userSubscribeEntityTags: { 'type': 'array', 'itemType': 'string' },
      userSubscribeEventTags: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.securityCategoryCodes)) {
      $dara.Model.validateArray(this.securityCategoryCodes);
    }
    if(Array.isArray(this.securityCodes)) {
      $dara.Model.validateArray(this.securityCodes);
    }
    if(Array.isArray(this.securityMarketsCodes)) {
      $dara.Model.validateArray(this.securityMarketsCodes);
    }
    if(Array.isArray(this.userSubscribeEntityTags)) {
      $dara.Model.validateArray(this.userSubscribeEntityTags);
    }
    if(Array.isArray(this.userSubscribeEventTags)) {
      $dara.Model.validateArray(this.userSubscribeEventTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

