// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetGovernanceKubernetesClusterResponseBodyData } from "./GetGovernanceKubernetesClusterResponseBodyData";


export class GetGovernanceKubernetesClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the data.
   */
  data?: GetGovernanceKubernetesClusterResponseBodyData;
  /**
   * @remarks
   * The message returned.
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
   * 5B170A0D-2C5D-4CF8-B808-03966B86****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
   * 
   * @example
   * True
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
      data: GetGovernanceKubernetesClusterResponseBodyData,
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

