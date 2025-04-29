// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisByBackendRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backend service.
   * 
   * This parameter is required.
   * 
   * @example
   * 4ac69b7a17524781b275ed4c5eb25c54
   */
  backendId?: string;
  /**
   * @remarks
   * The number of the current page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  securityToken?: string;
  /**
   * @remarks
   * The environment to which the API is published. Valid values:
   * 
   * *   **RELEASE**
   * *   **PRE**
   * *   **TEST**
   * 
   * If you do not specify this parameter, APIs in the draft state are returned.
   * 
   * @example
   * PRE
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      backendId: 'BackendId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      stageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

