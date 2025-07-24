// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceRequest extends $dara.Model {
  /**
   * @example
   * {"language":"java"}
   */
  attributes?: string;
  description?: string;
  displayName?: string;
  /**
   * @example
   * bx3udsi5ie@ed2ba6beebdb6de
   */
  pid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mag_test
   */
  serviceName?: string;
  /**
   * @example
   * Created
   */
  serviceStatus?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TRACE
   */
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'attributes',
      description: 'description',
      displayName: 'displayName',
      pid: 'pid',
      serviceName: 'serviceName',
      serviceStatus: 'serviceStatus',
      serviceType: 'serviceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'string',
      description: 'string',
      displayName: 'string',
      pid: 'string',
      serviceName: 'string',
      serviceStatus: 'string',
      serviceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

