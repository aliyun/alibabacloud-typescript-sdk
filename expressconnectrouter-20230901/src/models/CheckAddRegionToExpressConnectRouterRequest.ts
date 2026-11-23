// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAddRegionToExpressConnectRouterRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the parameter value on your client and ensure that the value is unique across different requests. The ClientToken parameter only supports ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run on this request. Valid values:
   * 
   * - true: sends a check request and does not modify EPS resources.
   * 
   * - false: sends a normal request. This is the default value.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The instance ID of the Express Connect Router (ECR).
   * 
   * This parameter is required.
   * 
   * @example
   * ecr-fu8rszhgv7623c****
   */
  ecrId?: string;
  /**
   * @remarks
   * The region for which you want to check whether the Cloud Data Transfer (CDT) service is enabled for the Express Connect Router (ECR) feature.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  freshRegionId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      freshRegionId: 'FreshRegionId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      freshRegionId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

