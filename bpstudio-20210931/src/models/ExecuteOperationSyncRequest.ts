// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteOperationSyncRequest extends $dara.Model {
  /**
   * @example
   * BE68D71ZY5YYIU9R
   */
  applicationId?: string;
  attributes?: { [key: string]: any };
  /**
   * @example
   * 1600765710019
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rename
   */
  operation?: string;
  /**
   * @example
   * rg-acfmyjt3c5om3hi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dds
   */
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      attributes: 'Attributes',
      clientToken: 'ClientToken',
      operation: 'Operation',
      resourceGroupId: 'ResourceGroupId',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      clientToken: 'string',
      operation: 'string',
      resourceGroupId: 'string',
      serviceType: 'string',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

