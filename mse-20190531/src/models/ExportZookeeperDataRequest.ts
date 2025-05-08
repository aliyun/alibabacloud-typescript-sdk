// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportZookeeperDataRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The type of the object that is exported. Valid values:
   * 
   * *   transactionLog: transaction logs
   * *   snapshot: snapshots
   * 
   * @example
   * snapshot
   */
  exportType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * mse-cn-78v1l83****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides. The region is supported by Microservices Engine (MSE).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The extended request parameters in the JSON format.
   * 
   * @example
   * {}
   */
  requestPars?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      exportType: 'ExportType',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      requestPars: 'RequestPars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      exportType: 'string',
      instanceId: 'string',
      regionId: 'string',
      requestPars: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

