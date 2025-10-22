// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecordCallCenterEventForPartnerRequest extends $dara.Model {
  /**
   * @example
   * P20211117141528000001
   */
  bizId?: string;
  /**
   * @example
   * esp.beian_assist
   */
  bizType?: string;
  /**
   * @example
   * MakeCall
   */
  callAction?: string;
  /**
   * @example
   * 18578602216
   */
  callee?: string;
  /**
   * @example
   * 13162828888
   */
  caller?: string;
  /**
   * @example
   * 12313
   */
  connId?: string;
  /**
   * @example
   * 897265
   */
  contactId?: string;
  /**
   * @example
   * ufbo502ma94m480
   */
  jobId?: string;
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * 1000030990004
   */
  relatedId?: number;
  /**
   * @example
   * MTAFA/DF#
   */
  secretMobile?: string;
  /**
   * @example
   * 1
   */
  skillType?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      callAction: 'CallAction',
      callee: 'Callee',
      caller: 'Caller',
      connId: 'ConnId',
      contactId: 'ContactId',
      jobId: 'JobId',
      relatedId: 'RelatedId',
      secretMobile: 'SecretMobile',
      skillType: 'SkillType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      callAction: 'string',
      callee: 'string',
      caller: 'string',
      connId: 'string',
      contactId: 'string',
      jobId: 'string',
      relatedId: 'number',
      secretMobile: 'string',
      skillType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

