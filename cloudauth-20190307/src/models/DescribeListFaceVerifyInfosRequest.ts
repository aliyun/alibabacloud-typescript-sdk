// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeListFaceVerifyInfosRequest extends $dara.Model {
  /**
   * @remarks
   * Verification ID.
   * 
   * @example
   * shs414a8b392a3a338abe0504c75c056
   */
  certifyId?: string;
  /**
   * @remarks
   * Query the end time of the verification.
   * 
   * @example
   * 1760716800000
   */
  gmtEnd?: number;
  /**
   * @remarks
   * Query the start time of the verification.
   * 
   * @example
   * 1760112000000
   */
  gmtStart?: number;
  /**
   * @remarks
   * Pagination parameter: current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of items per page for paginated queries. Maximum value: 100, default value: 10.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Scene ID.
   * 
   * @example
   * 1000009699
   */
  sceneId?: number;
  /**
   * @remarks
   * Verification status:
   * - **1**: Verification passed.
   * - **2**: Verification failed.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      gmtEnd: 'GmtEnd',
      gmtStart: 'GmtStart',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sceneId: 'SceneId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      gmtEnd: 'number',
      gmtStart: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      sceneId: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

