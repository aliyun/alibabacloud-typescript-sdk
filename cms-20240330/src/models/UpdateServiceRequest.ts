// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The extended attributes.
   * 
   * @example
   * {"language":"java"}
   */
  attributes?: string;
  /**
   * @remarks
   * The service description. This parameter is valid only when serviceType is set to RUM.
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
   * The service status. This parameter is valid only when serviceType is set to RUM.
   * 
   * @example
   * Stopped
   */
  serviceStatus?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run of the request. Valid values: true: sends a check request and does not perform the actual operation. false: sends a normal request. Default value: false.
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      attributes: 'attributes',
      description: 'description',
      displayName: 'displayName',
      serviceStatus: 'serviceStatus',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'string',
      description: 'string',
      displayName: 'string',
      serviceStatus: 'string',
      dryRun: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

