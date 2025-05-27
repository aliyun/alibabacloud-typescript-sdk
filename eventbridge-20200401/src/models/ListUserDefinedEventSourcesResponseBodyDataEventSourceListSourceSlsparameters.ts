// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceSLSParameters extends $dara.Model {
  /**
   * @remarks
   * The consumer offset. The value begin indicates the earliest offset, and the value end indicates the latest offset. You can also specify a time in seconds to start consumption.
   * 
   * @example
   * end
   */
  consumePosition?: string;
  /**
   * @remarks
   * The Simple Log Service Logstore.
   * 
   * @example
   * cloudfirewall-logstore
   */
  logStore?: string;
  /**
   * @remarks
   * The Simple Log Service project.
   * 
   * @example
   * VideoTestProject
   */
  project?: string;
  /**
   * @remarks
   * The role name. If you want to authorize EventBridge to use this role to read logs in Simple Log Service, you must select Alibaba Cloud Service for Selected Trusted Entity and EventBridge for Select Trusted Service when you create the role in the Resource Access Management (RAM) console. For information about the permission policy of this role, see Create a custom event source of the Log Service type.
   * 
   * @example
   * testRole
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      consumePosition: 'ConsumePosition',
      logStore: 'LogStore',
      project: 'Project',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumePosition: 'string',
      logStore: 'string',
      project: 'string',
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

