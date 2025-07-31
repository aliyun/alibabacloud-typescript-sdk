// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetComputeSourceResponseBodyComputeSourceInfo extends $dara.Model {
  /**
   * @example
   * true
   */
  bindProject?: boolean;
  /**
   * @example
   * 10101101
   */
  bindProjectId?: number;
  /**
   * @example
   * dp_mctest
   */
  bindProjectName?: string;
  /**
   * @example
   * 101101
   */
  creator?: string;
  /**
   * @example
   * test
   */
  creatorName?: string;
  /**
   * @example
   * compute source for xxx.
   */
  description?: string;
  /**
   * @example
   * dp_test
   */
  displayName?: string;
  /**
   * @example
   * 1681881607000
   */
  gmtCreate?: string;
  /**
   * @example
   * 1711881607000
   */
  gmtModified?: string;
  /**
   * @example
   * 12356
   */
  id?: number;
  /**
   * @example
   * dp_test
   */
  name?: string;
  /**
   * @example
   * 101101
   */
  owner?: string;
  /**
   * @example
   * test
   */
  ownerName?: string;
  /**
   * @example
   * MAX_COMPUTE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bindProject: 'BindProject',
      bindProjectId: 'BindProjectId',
      bindProjectName: 'BindProjectName',
      creator: 'Creator',
      creatorName: 'CreatorName',
      description: 'Description',
      displayName: 'DisplayName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      owner: 'Owner',
      ownerName: 'OwnerName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindProject: 'boolean',
      bindProjectId: 'number',
      bindProjectName: 'string',
      creator: 'string',
      creatorName: 'string',
      description: 'string',
      displayName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      name: 'string',
      owner: 'string',
      ownerName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComputeSourceResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  computeSourceInfo?: GetComputeSourceResponseBodyComputeSourceInfo;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      computeSourceInfo: 'ComputeSourceInfo',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      computeSourceInfo: GetComputeSourceResponseBodyComputeSourceInfo,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.computeSourceInfo && typeof (this.computeSourceInfo as any).validate === 'function') {
      (this.computeSourceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

