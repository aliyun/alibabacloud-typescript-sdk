// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The extended properties.
   * 
   * @example
   * {"language":"java"}
   */
  attributes?: string;
  /**
   * @remarks
   * The description of the service. This parameter is valid only when serviceType is set to RUM.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The display name. This parameter is valid only when serviceType is set to RUM.
   * 
   * @example
   * api-monitor-test
   */
  displayName?: string;
  /**
   * @remarks
   * The status of the service. This parameter is valid only when serviceType is set to RUM.
   * 
   * @example
   * Stopped
   */
  serviceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'attributes',
      description: 'description',
      displayName: 'displayName',
      serviceStatus: 'serviceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'string',
      description: 'string',
      displayName: 'string',
      serviceStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

