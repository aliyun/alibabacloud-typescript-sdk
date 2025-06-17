// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFCTriggerResponseBodyFCTriggers extends $dara.Model {
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
   * The remarks.
   * 
   * @example
   * Test
   */
  notes?: string;
  /**
   * @remarks
   * The Resource Access Management (RAM) role.
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

