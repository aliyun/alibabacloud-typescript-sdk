// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTriggerInput extends $dara.Model {
  /**
   * @example
   * trigger for test
   */
  description?: string;
  /**
   * @example
   * acs:ram::1234567890:role/fc-test
   */
  invocationRole?: string;
  /**
   * @example
   * LATEST
   */
  qualifier?: string;
  /**
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

