// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTriggerInput extends $dara.Model {
  /**
   * @remarks
   * The description of the trigger.
   * 
   * @example
   * trigger for test
   */
  description?: string;
  /**
   * @remarks
   * The role that is used by the event source such as object Storage Service (OSS) to invoke the function.
   * 
   * @example
   * acs:ram::1234567890:role/fc-test
   */
  invocationRole?: string;
  /**
   * @remarks
   * The version or alias of the service to which the function belongs.
   * 
   * @example
   * LATEST
   */
  qualifier?: string;
  /**
   * @remarks
   * The configuration of the trigger. The configuration vary based on the trigger type.
   * 
   * @example
   * {"events":["oss:ObjectCreated:*"],"filter":{"key":{"prefix":"/prefix","suffix":".zip"}}}
   */
  triggerConfig?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      invocationRole: 'invocationRole',
      qualifier: 'qualifier',
      triggerConfig: 'triggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      invocationRole: 'string',
      qualifier: 'string',
      triggerConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

