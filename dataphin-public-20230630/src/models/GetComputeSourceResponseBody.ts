// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetComputeSourceResponseBodyComputeSourceInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a project is associated.
   * 
   * @example
   * true
   */
  bindProject?: boolean;
  /**
   * @remarks
   * The ID of the associated project.
   * 
   * @example
   * 10101101
   */
  bindProjectId?: number;
  /**
   * @remarks
   * The name of the associated project.
   * 
   * @example
   * dp_mctest
   */
  bindProjectName?: string;
  /**
   * @remarks
   * The ID of the compute source creator.
   * 
   * @example
   * 101101
   */
  creator?: string;
  /**
   * @remarks
   * The name of the compute source creator.
   * 
   * @example
   * test
   */
  creatorName?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * compute source for xxx.
   */
  description?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * dp_test
   */
  displayName?: string;
  /**
   * @remarks
   * The creation timestamp.
   * 
   * @example
   * 1681881607000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modification timestamp.
   * 
   * @example
   * 1711881607000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The compute source ID.
   * 
   * @example
   * 12356
   */
  id?: number;
  /**
   * @remarks
   * The name of the compute source.
   * 
   * @example
   * dp_test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the compute source owner.
   * 
   * @example
   * 101101
   */
  owner?: string;
  /**
   * @remarks
   * The name of the compute source owner.
   * 
   * @example
   * test
   */
  ownerName?: string;
  /**
   * @remarks
   * The type of the compute source.
   * 
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
   * @remarks
   * The error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The compute source details.
   */
  computeSourceInfo?: GetComputeSourceResponseBodyComputeSourceInfo;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
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

