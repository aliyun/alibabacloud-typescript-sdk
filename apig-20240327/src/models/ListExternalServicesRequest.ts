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
   * The maximum number of entries to return. Valid values: (0, 100]. Default value: 10.
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * The keyword for fuzzy match by operation name.
   * 
   * @example
   * imah
   */
  nameLike?: string;
  /**
   * @remarks
   * The ID of the PAI-EAS workspace.
   * 
   * @example
   * 667435
   */
  paiWorkspaceId?: string;
  /**
   * @remarks
   * The source type of the service. This parameter is actually required. If it is not provided, the API returns a 400 InvalidParameter.WithValue error. Valid values: SAE_K8S_SERVICE, PAI_EAS_SERVICE, CloudFlow, K8S, FC3, PAI_WORKSPACE, and MSE_NACOS.
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

