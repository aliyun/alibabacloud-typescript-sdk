// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteQosPolicyRequest extends $dara.Model {
  federationId?: string;
  fileSystemId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  inputRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  qosPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      federationId: 'FederationId',
      fileSystemId: 'FileSystemId',
      inputRegionId: 'InputRegionId',
      qosPolicyId: 'QosPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      federationId: 'string',
      fileSystemId: 'string',
      inputRegionId: 'string',
      qosPolicyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

