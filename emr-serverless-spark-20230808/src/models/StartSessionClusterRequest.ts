// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartSessionClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The queue name.
   * 
   * @example
   * root_queue
   */
  queueName?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * sc-xxxxxxxxxxx
   */
  sessionClusterId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      queueName: 'queueName',
      sessionClusterId: 'sessionClusterId',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queueName: 'string',
      sessionClusterId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

