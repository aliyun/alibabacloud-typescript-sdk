// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeListFaceVerifyInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The authentication ID.
   * 
   * @example
   * shs414a8b392a3a338abe0504c75c056
   */
  certifyId?: string;
  /**
   * @remarks
   * The end time of the authentication query.
   * 
   * @example
   * 1760716800000
   */
  gmtEnd?: number;
  /**
   * @remarks
   * The start time of the authentication query.
   * 
   * @example
   * 1760112000000
   */
  gmtStart?: number;
  /**
   * @remarks
   * The current page number for pagination.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Maximum value: 100. Default value: 10.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * 1000009699
   */
  sceneId?: number;
  /**
   * @remarks
   * The authentication status. Valid values:
   * - **1**: Authentication passed.
   * - **2**: Authentication failed.
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

