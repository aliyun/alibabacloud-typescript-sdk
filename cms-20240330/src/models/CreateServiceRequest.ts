// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceRequest extends $dara.Model {
  /**
   * @remarks
   * Extended attributes.
   * 
   * @example
   * {"language":"java"}
   */
  attributes?: string;
  /**
   * @remarks
   * Service description, only valid when `serviceType=RUM`.
   * 
   * @example
   * mag测试应用
   */
  description?: string;
  /**
   * @remarks
   * Display name, only valid when `serviceType=RUM`.
   * 
   * @example
   * mag测试应用
   */
  displayName?: string;
  /**
   * @remarks
   * Application ID, generally not required to be specified.
   * 
   * @example
   * bx3udsi5ie@ed2ba6beebdb6de
   */
  pid?: string;
  /**
   * @remarks
   * Service name
   * 
   * This parameter is required.
   * 
   * @example
   * mag_test
   */
  serviceName?: string;
  /**
   * @remarks
   * Service status, not required for service creation.
   * 
   * @example
   * Created
   */
  serviceStatus?: string;
  /**
   * @remarks
   * Service type
   * 
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

