// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileProtectClientRuleDashboardResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total number of web tamper-proofing licenses.
   * 
   * @example
   * 5
   */
  authTotal?: string;
  /**
   * @remarks
   * The number of bound tamper-proofing licenses.
   * 
   * @example
   * 4
   */
  bindCount?: number;
  /**
   * @remarks
   * The total number of web tamper-proofing rules.
   * 
   * @example
   * 3
   */
  protectedDirectoriesCount?: number;
  /**
   * @remarks
   * The total number of online web tamper-proofing clients.
   * 
   * @example
   * 12
   */
  protectedInstancesCount?: number;
  static names(): { [key: string]: string } {
    return {
      authTotal: 'AuthTotal',
      bindCount: 'BindCount',
      protectedDirectoriesCount: 'ProtectedDirectoriesCount',
      protectedInstancesCount: 'ProtectedInstancesCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authTotal: 'string',
      bindCount: 'number',
      protectedDirectoriesCount: 'number',
      protectedInstancesCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileProtectClientRuleDashboardResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned when the API call is successful.
   */
  data?: GetFileProtectClientRuleDashboardResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 69BFFCDE-37D6-5A49-A8BC-BB03AC83****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetFileProtectClientRuleDashboardResponseBodyData,
      requestId: 'string',
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

