// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFCTriggerResponseBodyFCTrigger extends $dara.Model {
  /**
   * @remarks
   * The name of the event.
   * 
   * @example
   * LogFileCreated
   */
  eventMetaName?: string;
  /**
   * @remarks
   * The version of the event.
   * 
   * @example
   * 1.0.0
   */
  eventMetaVersion?: string;
  /**
   * @remarks
   * The remarks of the Function Compute trigger.
   * 
   * @example
   * test
   */
  notes?: string;
  /**
   * @remarks
   * The assigned Resource Access Management (RAM) role.
   * 
   * @example
   * acs:ram:: 1234567890:role/aliyuncdneventnotificationrole
   */
  roleARN?: string;
  /**
   * @remarks
   * The resources and filters for event listening.
   * 
   * @example
   * acs:cdn:*:1234567890:domain/example.com
   */
  sourceArn?: string;
  /**
   * @remarks
   * The trigger that corresponds to the Function Compute service.
   * 
   * @example
   * acs:fc:cn-beijing: 1234567890:services/FCTestService/functions/printEvent/triggers/testtrigger
   */
  triggerARN?: string;
  static names(): { [key: string]: string } {
    return {
      eventMetaName: 'EventMetaName',
      eventMetaVersion: 'EventMetaVersion',
      notes: 'Notes',
      roleARN: 'RoleARN',
      sourceArn: 'SourceArn',
      triggerARN: 'TriggerARN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventMetaName: 'string',
      eventMetaVersion: 'string',
      notes: 'string',
      roleARN: 'string',
      sourceArn: 'string',
      triggerARN: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFCTriggerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Function Compute trigger that you want to query.
   */
  FCTrigger?: DescribeFCTriggerResponseBodyFCTrigger;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EC046C5D-8CB4-4B6B-B7F8-B335E51EF90E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      FCTrigger: 'FCTrigger',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      FCTrigger: DescribeFCTriggerResponseBodyFCTrigger,
      requestId: 'string',
    };
  }

  validate() {
    if(this.FCTrigger && typeof (this.FCTrigger as any).validate === 'function') {
      (this.FCTrigger as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

