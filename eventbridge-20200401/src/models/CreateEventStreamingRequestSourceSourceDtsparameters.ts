// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventStreamingRequestSourceSourceDTSParameters extends $dara.Model {
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
  initCheckPoint?: number;
  /**
   * @remarks
   * The consumer group password.
   * 
   * @example
   * admin
   */
  password?: string;
  /**
   * @remarks
   * The consumer group ID.
   * 
   * @example
   * HD3
   */
  sid?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * f86e5814-b223-482c-b768-3b873297dade
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the tracked topic of the change tracking instance.
   * 
   * @example
   * LTC_CACHE_PRD
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
      initCheckPoint: 'number',
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

