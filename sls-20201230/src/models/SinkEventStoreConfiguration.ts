// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SinkEventStoreConfiguration extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to send alerts.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * endpoint
   * 
   * @example
   * cn-shanghai-intranet.log.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The name of the Eventstore.
   * 
   * @example
   * exampleStore
   */
  eventStore?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * exampleProject
   */
  project?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the Resource Access Management (RAM) role.
   * 
   * @example
   * acs:ram::123456789:role/aliyunlogetlrole
   */
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      endpoint: 'endpoint',
      eventStore: 'eventStore',
      project: 'project',
      roleArn: 'roleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      endpoint: 'string',
      eventStore: 'string',
      project: 'string',
      roleArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

