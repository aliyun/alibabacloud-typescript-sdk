// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunMarketingInformationExtractResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * result-generated
   */
  event?: string;
  eventInfo?: string;
  /**
   * @example
   * F08C71C0-9399-548C-838B-1DA01DE211B0
   */
  requestId?: string;
  /**
   * @example
   * 121dlsga4o7golrl1hojazg0u9lvytjc17ebgzzj2u4zukgh122tfg7wj1e6a1vcowy1ewzinauxriai9atcr6r323mm9ddbr0bg5m61ij8hxnf8664tstlfkfol6m8luc4shs3gums7l46uauyy0xndqmhdjtdon6coyhb4x17bo762bg9e3tb2geufg2
   */
  sessionId?: string;
  /**
   * @example
   * 12826092918145
   */
  taskId?: string;
  /**
   * @example
   * 2150432017236011824686132ecdbc
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      event: 'event',
      eventInfo: 'eventInfo',
      requestId: 'requestId',
      sessionId: 'sessionId',
      taskId: 'taskId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'string',
      eventInfo: 'string',
      requestId: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

