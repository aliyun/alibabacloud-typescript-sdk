// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateClusterRequest extends $dara.Model {
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
   * The alias of the instance.
   * 
   * @example
   * cluster-1
   */
  clusterAliasName?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * mse-cn-78v1l83****
   */
  instanceId?: string;
  /**
   * @remarks
   * The end time of the O\\&M window.
   * 
   * @example
   * 06:00
   */
  maintenanceEndTime?: string;
  /**
   * @remarks
   * The start time of the O\\&M window.
   * 
   * @example
   * 02:00
   */
  maintenanceStartTime?: string;
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
      clusterAliasName: 'ClusterAliasName',
      instanceId: 'InstanceId',
      maintenanceEndTime: 'MaintenanceEndTime',
      maintenanceStartTime: 'MaintenanceStartTime',
      requestPars: 'RequestPars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterAliasName: 'string',
      instanceId: 'string',
      maintenanceEndTime: 'string',
      maintenanceStartTime: 'string',
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

