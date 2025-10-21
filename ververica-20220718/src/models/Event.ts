// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Event extends $dara.Model {
  createdAt?: string;
  /**
   * @example
   * 00000000-0000-0000-0000-000000680003
   */
  deploymentId?: string;
  /**
   * @example
   * 00000000-0000-0000-0000-000000000001
   */
  eventId?: string;
  /**
   * @example
   * STATE_TRANSITION_IS_COMPLETED
   */
  eventName?: string;
  /**
   * @example
   * 00000000-0000-0000-0000-000000005043
   */
  jobId?: string;
  message?: string;
  /**
   * @example
   * default-namespace
   */
  namespace?: string;
  /**
   * @example
   * edcef******b4f
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      deploymentId: 'deploymentId',
      eventId: 'eventId',
      eventName: 'eventName',
      jobId: 'jobId',
      message: 'message',
      namespace: 'namespace',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      deploymentId: 'string',
      eventId: 'string',
      eventName: 'string',
      jobId: 'string',
      message: 'string',
      namespace: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

