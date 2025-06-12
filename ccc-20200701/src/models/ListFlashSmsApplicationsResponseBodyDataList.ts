// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFlashSmsApplicationsResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 71b396fa-***********-bd80e070b7c0
   */
  applicationId?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  name?: string;
  /**
   * @example
   * Uincall
   */
  providerId?: string;
  /**
   * @example
   * {"user":"600******_dev","pwd":"85abf3**********f494e","account":"6004******"}
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
      name: 'Name',
      providerId: 'ProviderId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
      name: 'string',
      providerId: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

