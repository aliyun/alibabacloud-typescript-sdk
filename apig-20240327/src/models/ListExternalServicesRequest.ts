// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExternalServicesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return only services that have not been imported.
   * 
   * @example
   * true
   */
  importableOnly?: boolean;
  /**
   * @remarks
   * The maximum number of entries to return. Valid range: (0, 100]. Default value: 10.
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * The API name for fuzzy match.
   * 
   * @example
   * imah
   */
  nameLike?: string;
  /**
   * @remarks
   * The workspace ID of the PAI-EAS service.
   * 
   * @example
   * 667435
   */
  paiWorkspaceId?: string;
  /**
   * @remarks
   * The service source type used to filter results. Valid values:
   * - MSE_NACOS: services from MSE Nacos.
   * - K8S: services from a Kubernetes cluster in Container Service.
   * - FC3: services from Function Compute.
   * - VIP: services from a fixed address.
   * - DNS: services from a domain name.
   * 
   * @example
   * FC3
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      importableOnly: 'importableOnly',
      limit: 'limit',
      nameLike: 'nameLike',
      paiWorkspaceId: 'paiWorkspaceId',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importableOnly: 'boolean',
      limit: 'number',
      nameLike: 'string',
      paiWorkspaceId: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

