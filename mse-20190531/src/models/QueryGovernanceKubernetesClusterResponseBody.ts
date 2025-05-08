// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryGovernanceKubernetesClusterResponseBodyData } from "./QueryGovernanceKubernetesClusterResponseBodyData";


export class QueryGovernanceKubernetesClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryGovernanceKubernetesClusterResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DE34D413-2B79-5E77-9696-36D875E822AD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryGovernanceKubernetesClusterResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

