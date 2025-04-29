// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportOASRequest extends $dara.Model {
  /**
   * @remarks
   * The APIs that you want to export.
   */
  apiIdList?: string[];
  /**
   * @remarks
   * The exported format:
   * 
   * *   json
   * *   yaml
   * 
   * @example
   * yaml
   */
  dataFormat?: string;
  /**
   * @remarks
   * The API group ID.
   * 
   * @example
   * 42925e7f5209438186d5560239af5xxx
   */
  groupId?: string;
  /**
   * @remarks
   * The OAS version. Valid values:
   * 
   * *   **oas2**
   * *   **oas3**
   * 
   * @example
   * oas2
   */
  oasVersion?: string;
  /**
   * @remarks
   * The number of pages in which you want to export the APIs.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  securityToken?: string;
  /**
   * @remarks
   * The environment to which the API is published. Valid values:
   * 
   * *   **RELEASE**: the production environment
   * *   **PRE**: the pre-release environment
   * *   **TEST**: the test environment
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  /**
   * @remarks
   * Specifies whether to export API Gateway extensions at the same time.
   * 
   * @example
   * true
   */
  withXExtensions?: boolean;
  static names(): { [key: string]: string } {
    return {
      apiIdList: 'ApiIdList',
      dataFormat: 'DataFormat',
      groupId: 'GroupId',
      oasVersion: 'OasVersion',
      pageNumber: 'PageNumber',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
      withXExtensions: 'WithXExtensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIdList: { 'type': 'array', 'itemType': 'string' },
      dataFormat: 'string',
      groupId: 'string',
      oasVersion: 'string',
      pageNumber: 'number',
      securityToken: 'string',
      stageName: 'string',
      withXExtensions: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.apiIdList)) {
      $dara.Model.validateArray(this.apiIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

