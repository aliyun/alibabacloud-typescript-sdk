// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SinkEventStoreConfiguration extends $dara.Model {
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * cn-shanghai-intranet.log.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @example
   * exampleStore
   */
  eventStore?: string;
  /**
   * @example
   * exampleProject
   */
  project?: string;
  /**
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

