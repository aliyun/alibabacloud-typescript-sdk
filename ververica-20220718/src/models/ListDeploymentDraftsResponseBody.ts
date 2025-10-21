// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeploymentDraft } from "./DeploymentDraft";


export class ListDeploymentDraftsResponseBody extends $dara.Model {
  data?: DeploymentDraft[];
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 69
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      requestId: 'requestId',
      success: 'success',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DeploymentDraft },
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

