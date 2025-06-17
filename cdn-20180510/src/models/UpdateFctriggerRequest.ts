// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFCTriggerRequest extends $dara.Model {
  /**
   * @remarks
   * The feature trigger.
   * 
   * @example
   * acs:fc:1223455566666:123:services/myservice/functions/myfunction
   */
  functionARN?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * test
   */
  notes?: string;
  /**
   * @remarks
   * The assigned RAM role.
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
  sourceARN?: string;
  /**
   * @remarks
   * The trigger that corresponds to the Function Compute service.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:fc:cn-beijing: 1234567890:services/FCTestService/functions/printEvent/triggers/testtrigger
   */
  triggerARN?: string;
  static names(): { [key: string]: string } {
    return {
      functionARN: 'FunctionARN',
      notes: 'Notes',
      roleARN: 'RoleARN',
      sourceARN: 'SourceARN',
      triggerARN: 'TriggerARN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionARN: 'string',
      notes: 'string',
      roleARN: 'string',
      sourceARN: 'string',
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

