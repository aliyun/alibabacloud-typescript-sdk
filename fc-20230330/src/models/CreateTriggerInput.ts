// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTriggerInput extends $dara.Model {
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
   * acs:oss:cn-shanghai:12345:mybucket
   */
  sourceArn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"events":["oss:ObjectCreated:*"],"filter":{"key":{"prefix":"/prefix","suffix":".zip"}}}
   */
  triggerConfig?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss_create_object_demo
   */
  triggerName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      invocationRole: 'invocationRole',
      qualifier: 'qualifier',
      sourceArn: 'sourceArn',
      triggerConfig: 'triggerConfig',
      triggerName: 'triggerName',
      triggerType: 'triggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      invocationRole: 'string',
      qualifier: 'string',
      sourceArn: 'string',
      triggerConfig: 'string',
      triggerName: 'string',
      triggerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

