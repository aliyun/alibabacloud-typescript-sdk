// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceRequest extends $dara.Model {
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
   * Service description, only valid when serviceType=RUM.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Display name, only valid when serviceType=RUM.
   * 
   * @example
   * api-monitor-test
   */
  displayName?: string;
  /**
   * @remarks
   * Service status, only valid when serviceType=RUM.
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

