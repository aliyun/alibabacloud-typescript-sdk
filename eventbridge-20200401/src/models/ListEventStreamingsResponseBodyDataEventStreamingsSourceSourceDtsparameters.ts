// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceDTSParameters extends $dara.Model {
  /**
   * @remarks
   * The URL and port number of the change tracking instance.
   */
  brokerUrl?: string;
  /**
   * @remarks
   * The UNIX timestamp that is generated when the SDK client consumes the first data record.
   * 
   * @example
   * 1620962769
   */
  initCheckPoint?: string;
  /**
   * @remarks
   * The consumer group password.
   * 
   * @example
   * 123456
   */
  password?: string;
  /**
   * @remarks
   * The consumer group ID.
   * 
   * @example
   * HG9
   */
  sid?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 1611b337285f44e2936a2c4170bbbb7f
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the tracked topic of the change tracking instance.
   * 
   * @example
   * TP_TEST_UNDERWRITE_ISSUE
   */
  topic?: string;
  /**
   * @remarks
   * The consumer group username.
   * 
   * @example
   * admin
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      brokerUrl: 'BrokerUrl',
      initCheckPoint: 'InitCheckPoint',
      password: 'Password',
      sid: 'Sid',
      taskId: 'TaskId',
      topic: 'Topic',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brokerUrl: 'string',
      initCheckPoint: 'string',
      password: 'string',
      sid: 'string',
      taskId: 'string',
      topic: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

