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
   * The maximum number of results to return. Valid range: (0, 100]. Default value: 10.
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * Fuzzy search by API name.
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
   * The service source type used to query services. This parameter is essentially required. If not provided, the API returns 400 InvalidParameter.WithValue. Valid values: SAE_K8S_SERVICE, PAI_EAS_SERVICE, CloudFlow, K8S, FC3, PAI_WORKSPACE, and MSE_NACOS.
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

