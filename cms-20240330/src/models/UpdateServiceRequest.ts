// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceRequest extends $dara.Model {
  /**
   * @example
   * {"language":"java"}
   */
  attributes?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * api-monitor-test
   */
  displayName?: string;
  /**
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

