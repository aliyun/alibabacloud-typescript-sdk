// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTrafficControlTaskDeployResultResponseBody extends $dara.Model {
  /**
   * @example
   * deploy job draft success
   */
  deployMessage?: string;
  /**
   * @example
   * Success
   */
  deployStatus?: string;
  /**
   * @example
   * push draft success
   */
  draftMessage?: string;
  /**
   * @example
   * Success
   */
  draftStatus?: string;
  /**
   * @example
   * success
   */
  prepareMessage?: string;
  /**
   * @example
   * Success
   */
  prepareStatus?: string;
  /**
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  /**
   * @example
   * start job success
   */
  startMessage?: string;
  /**
   * @example
   * Success
   */
  startStatus?: string;
  /**
   * @example
   * 3
   */
  trafficControlTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      deployMessage: 'DeployMessage',
      deployStatus: 'DeployStatus',
      draftMessage: 'DraftMessage',
      draftStatus: 'DraftStatus',
      prepareMessage: 'PrepareMessage',
      prepareStatus: 'PrepareStatus',
      requestId: 'RequestId',
      startMessage: 'StartMessage',
      startStatus: 'StartStatus',
      trafficControlTaskId: 'TrafficControlTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployMessage: 'string',
      deployStatus: 'string',
      draftMessage: 'string',
      draftStatus: 'string',
      prepareMessage: 'string',
      prepareStatus: 'string',
      requestId: 'string',
      startMessage: 'string',
      startStatus: 'string',
      trafficControlTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

